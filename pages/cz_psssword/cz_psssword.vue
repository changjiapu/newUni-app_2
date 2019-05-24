<template>
	<view class="content">
		<view class="item">
			<text>手机号</text>
			<input type="number" value="" placeholder="请输入手机号" v-model="iphone" />
		</view>
		<view class="item">
			<text>旧密码</text>
			<input type="password" v-model="password1" placeholder="请输入旧密码" />
		</view>
		<view class="item">
			<text>新密码</text>
			<input type="password" v-model="password2" placeholder="请输入新密码" />
		</view>
		<view class="item">
			<text>确认密码</text>
			<input type="password" v-model="password3" placeholder="请输入确认密码" />
		</view>
		<view class="item">
			<text>验证码</text>
			<input type="number" value="" placeholder="请输入验证码" v-model="authCode" />
			<view class="code" @click="getCode">{{ codeTime }}</view>
		</view>
		<view class="btn" @click="passWordChange()">立即重置</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { updUserPassword, sendSmsCode } from '@/request/API/index.js';
export default {
	data() {
		return {
			iphone: '',
			code: '', //收到的验证码
			authCode: '', //输入的验证码
			codeTime: '获取验证码', //发送按钮
			codeFlag: true, //发送状态
			password1: '', //旧密码
			password2: '', //新密码
			password3: '' //第二次输入
		};
	},
	onLoad() {},
	methods: {
		getCode() {
			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.iphone)) {
				console.log(this.iphone);
				uni.showModal({
					title: '',
					content: '请输入正确的手机号码',
					showCancel: false
				});
				return;
			}
			if (this.codeFlag) {
				var _this = this;
				this.CountdownFun(60);
				sendSmsCode(this.iphone).then(res => {
					if (res.data.code == 0) {
						_this.code = res.data.data;
					} else {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						});
					}
				});
			}
		},
		//倒计时
		CountdownFun(data) {
			var that = this;
			var time = setInterval(() => {
				data--;
				that.codeTime = data;
				if (data == 0) {
					clearInterval(time);
					that.codeFlag = true;
					that.codeTime = '获取验证码';
				}
			}, 1000);
		},
		passWordChange() {
			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.iphone)) {
				console.log(this.iphone);
				uni.showModal({
					title: '',
					content: '请输入正确的手机号码',
					showCancel: false
				});
				return;
			}
			if (!this.password1) {
				uni.showModal({
					title: '',
					content: '旧密码不能为空',
					showCancel: false
				});
				return;
			}
			if (!this.password2) {
				uni.showModal({
					title: '',
					content: '新密码不能为空',
					showCancel: false
				});
				return;
			}
			if (!this.password3) {
				uni.showModal({
					title: '',
					content: '请再次输入新密码',
					showCancel: false
				});
				return;
			}
			if (this.password2 != this.password3) {
				uni.showModal({
					title: '',
					content: '两次输入密码不一致',
					showCancel: false
				});
				return;
			}
			if (!this.authCode) {
				uni.showModal({
					title: '',
					content: '请输入验证码',
					showCancel: false
				});
				return;
			}
			if (this.authCode != this.code) {
				uni.showModal({
					title: '',
					content: '验证码不正确',
					showCancel: false
				});
				return;
			}
			let params = {
				authCode: this.authCode,
				userId: this.userId,
				password: this.password1,
				newPassword: this.password2
			};
			updUserPassword(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '修改密码成功',
						mask: false,
						duration: 1500
					});
					setTimeout(res => {
						uni.navigateTo({
							url: '/pages/logn/logn'
						});
					}, 1500);
				} else {
					uni.showModal({
						title: '',
						content: res.data.msg,
						showCancel: false
					});
				}
			});
		}
	},
	computed: {
		...mapState(['userId'])
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	padding: 20upx;
	box-sizing: border-box;
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		text {
			width: 200upx;
		}
		.code {
			width: 25%;
			font-size: 24upx;
			padding: 20upx 10upx;
			background-color: #6d71d5;
			text-align: center;
			border-radius: 20upx;
			color: #ffffff;
		}
		border-bottom: 1px solid #dddddd;
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
