<template>
	<view class="content">
		<view class="item">
			<text>手机号</text>
			<input type="number" value="" placeholder="请输入手机号" maxlength="11" v-model="iphone" />
		</view>
		<!-- 		<view class="item">
			<text>邮箱</text>
			<input type="text" value="" placeholder="请输入邮箱" />
		</view> -->
		<view class="item">
			<text>设置密码</text>
			<input type="password" value="" placeholder="请输入6-20位密码" maxlength="20" v-model="password" />
		</view>
		<view class="item">
			<text>确认密码</text>
			<input type="password" value="" placeholder="请确认密码" v-model="password2" />
		</view>
		<view class="item">
			<text>验证码</text>
			<input type="number" value="" placeholder="请输入验证码" v-model="authCode" />
			<view class="code" @click="getCode">{{ codeTime }}</view>
		</view>
		<!-- 		<view class="xieyi" @click.stop="tongyixieyi()">
			<image v-if="!yueduxieyi" src="../../static/home/weixuanzhong_03.png" mode=""></image>
			<image v-else src="../../static/home/xuanzhong_07.png" mode=""></image>
			<text>
				我已阅读本协议，并同意
				<text style="color: #ED7180;">《西安农贸用户注册协议》</text>
			</text>
		</view> -->
		<view class="btn" @click="addUserBySystem()">提交并注册</view>
	</view>
</template>

<script>
import { addUserBySystem, sendSmsCode } from '@/request/API/index.js';
export default {
	data() {
		return {
			code: '', //收到的验证码
			authCode: '', //输入的验证码
			codeTime: '获取验证码', //发送按钮
			codeFlag: true, //发送状态
			title: 'Hello',
			yueduxieyi: false,
			iphone: '',
			password: '',
			password2: ''
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
				var _this=this
				this.CountdownFun(60);
				sendSmsCode(this.iphone).then(res => {
					if (res.data.code == 0) {
						_this.code = res.data.data;
					} else {
						uni.showToast({
							title: res.data.data,
							icon:'none',
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
		addUserBySystem() {
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
			if (!this.password) {
				uni.showModal({
					title: '',
					content: '请输入密码',
					showCancel: false
				});
				return;
			}
			if (this.password.length < 6) {
				uni.showModal({
					title: '',
					content: '密码不能小于6位',
					showCancel: false
				});
				return;
			}
			if (this.password != this.password2) {
				uni.showModal({
					title: '',
					content: '两次输入的密码不一致',
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
			if (this.authCode!=this.code) {
				uni.showModal({
					title: '',
					content: '验证码不正确',
					showCancel: false
				});
				return;
			}
			let params = {
				authCode:this.authCode,
				phone: this.iphone,
				password: this.password,
				userType: 1
			};
			addUserBySystem(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '注册成功',
						duration: 2000
					});
					uni.setStorageSync('token', res.data.data.token);
					uni.setStorageSync('userId', res.data.data.userId);
					this.$store.commit('SET_TOKEN', res.data.data.token);
					this.$store.commit('SET_USERID', res.data.data.token);
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: 'none',
						duration: 2000
					});
				}
			});
		},
		tongyixieyi() {
			this.yueduxieyi = !this.yueduxieyi;
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	padding: 0 30upx;
	box-sizing: border-box;
	.item {
		height: 100upx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dddddd;
		text {
			width: 30%;
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
	}
	.xieyi {
		font-size: 22upx;
		display: flex;
		height: 100upx;
		align-items: center;
		image {
			height: 30upx;
			width: 30upx;
		}
	}
	.btn {
		display: flex;
		margin-top: 50upx;
		height: 100upx;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		background-color: #6d71d5;
		border-radius: 10upx;
	}
}
</style>
