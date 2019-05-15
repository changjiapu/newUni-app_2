<template>
	<view class="content">
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
		<view class="btn" @click="passWordChange()">立即重置</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { updUserPassword } from '@/request/API/index.js';
export default {
	data() {
		return {
			password1: '', //旧密码
			password2: '', //新密码
			password3: '' //第二次输入
		};
	},
	onLoad() {},
	methods: {
		passWordChange() {
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
			let params = {
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
