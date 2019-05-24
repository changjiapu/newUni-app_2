<template>
	<view class="content">
		<image class="logo_2" src="../../static/logo_03.png" mode=""></image>
		<image class="logo" src="../../static/logo_3.png" mode=""></image>
		<view class="input">
			<image src="../../static/wodedenglu_07.png" mode=""></image>
			<input type="number" placeholder="请输入手机号" maxlength="11" v-model="phone" />
		</view>
		<view class="input">
			<image src="../../static/shurumima_10.png" mode=""></image>
			<input type="password" placeholder="请输入密码" maxlength="20" v-model="password" />
		</view>
		<view class="btn" @click="login()">立即登录</view>
		<view class="logn">
			<text @click="register()">新用户注册</text>
			<text @click="wjPassword()">忘记密码?</text>
		</view>
		<view class="third">
			<view class="cut"><text>其他方式登录</text></view>
			<view class="other"><view class="weixin" @click="weixinLogin()"></view></view>
		</view>
	</view>
</template>

<script>
import { login, weChatLogin } from '@/request/API/index.js';
export default {
	data() {
		return {
			password: '',
			phone: ''
		};
	},
	onLoad() {},
	methods: {
		login() {
			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.phone)) {
				console.log(this.phone);
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
			let params = {
				phone: this.phone,
				password: this.password,
				userType: 1
			};
			login(params).then(res => {
				if (res.data.code == 0) {
					console.log(res.data.data.token);
					uni.setStorageSync('token', res.data.data.token);
					uni.setStorageSync('userId', res.data.data.userId);
					uni.setStorageSync('shopId', res.data.data.shopId);
					this.$store.commit('SET_SHOPID', res.data.data.shopId);
					this.$store.commit('SET_TOKEN', res.data.data.token);
					this.$store.commit('SET_USERID', res.data.data.userId);
					uni.reLaunch({
						url: '/pages/commodity_management/commodity_management'
					});
				} else {
					uni.showModal({
						title: '',
						content: res.data.msg,
						showCancel: false
					});
				}
			});
		},
		weixinLogin() {
			console.log(1111);
			uni.getProvider({
				service: 'oauth',
				success: res => {
					if (~res.provider.indexOf('weixin')) {
						uni.login({
							provider: 'weixin',
							success: rst => {
								uni.getUserInfo({
									provider: 'weixin',
									success: info => {
										console.log(JSON.stringify(info));
										let params = {
											nickName: info.userInfo.nickName,
											avatarUrl: info.userInfo.avatarUrl,
											gender: info.userInfo.gender,
											openId: info.userInfo.openId,
											userType: 1
										};
										console.log(555);
										weChatLogin(params).then(res => {
											console.log(JSON.stringify(res));
											if (res.data.code == 0) {
												uni.setStorageSync('token', res.data.data.token);
												uni.setStorageSync('userId', res.data.data.userId);
												uni.setStorageSync('shopId', res.data.data.shopId);
												this.$store.commit('SET_SHOPID', res.data.data.shopId);
												this.$store.commit('SET_TOKEN', res.data.data.token);
												this.$store.commit('SET_USERID', res.data.data.userId);
												uni.reLaunch({
													url: '/pages/commodity_management/commodity_management'
												});
											} else {
												uni.showModal({
													title: '',
													content: res.data.msg,
													showCancel: false
												});
											}
										});
									}
								});
							}
						});
					}
				}
			});
		},
		register() {
			uni.navigateTo({
				url: '/pages/register/register'
			});
		},
		wjPassword() {
			uni.navigateTo({
				url: '/pages/wjPassword/wjPassword'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 30upx;
	input {
		font-size: 24upx;
	}
	.logo {
		border-radius: 10upx;
		border: 1px solid #cccccc;
		margin-top: 100upx;
		width: 280upx;
		height: 280upx;
		margin-bottom: 50upx;
	}
	.logo_2 {
		position: fixed;
		top: 30upx;
		left: 30upx;
		width: 80upx;
		height: 80upx;
	}
	.input {
		margin-top: 30upx;
		height: 90upx;
		width: 620upx;
		display: flex;
		align-items: center;
		border: 1px solid #cccccc;
		border-radius: 10upx;
		padding: 0 20upx;
		image {
			height: 35upx;
			width: 35upx;
		}
		input {
			margin-left: 20upx;
		}
	}
	.btn {
		margin-top: 50upx;
		height: 100upx;
		line-height: 100upx;
		width: 620upx;
		border-radius: 10upx;
		background-color: #6d71d5;
		color: #ffffff;
		text-align: center;
	}
	.logn {
		font-size: 26upx;
		margin-top: 20upx;
		padding: 0 40upx;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.third {
		margin-top: 100upx;
		.cut {
			color: #a4a4a4;
			text-align: center;
			position: relative;
			& > text {
				font-size: 22upx;
			}
			&::before {
				left: 0;
			}
			&::after {
				right: 0;
			}
		}
		.other {
			display: flex;
			justify-content: center;
			margin-top: 20upx;
			& > view {
				width: 120upx;
				height: 120upx;
				border-radius: 100%;
				background-repeat: no-repeat;
				background-position: center center;
				&.weixin {
					background-image: url('../../static/login_weixin.png');
					background-size: 120upx 120upx;
				}
			}
		}
	}
}
</style>
