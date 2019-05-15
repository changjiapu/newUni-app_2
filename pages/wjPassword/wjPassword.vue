<template>
	<view class="content">
		<view class="item">
			<text>手机号</text>
			<input type="text" value="" placeholder="请输入手机号" v-model="iphone" />
		</view>

		<view class="item">
			<text>设置新密码</text>
			<input type="password" value="" placeholder="请输入6-20位密码" v-model="password" />
		</view>
		<view class="item">
			<text>确认新密码</text>
			<input type="password" value="" placeholder="请确认密码" v-model="password2" />
		</view>
		<view class="btn" @click="retrievePassword()">提交</view>
	</view>
</template>

<script>
import { retrievePassword } from '@/request/API/index.js';
export default {
	data() {
		return {
			title: 'Hello',
			yueduxieyi: false,
			iphone: '',
			password: '',
			password2: ''
		};
	},
	onLoad() {},
	methods: {
		retrievePassword() {
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
			let params = {
				phone: this.iphone,
				password: this.password
			};
			retrievePassword(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
					setTimeout(res => {
						uni.navigateBack({
							delta: 1
						});
					}, 2000);
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
		height: 100upx;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		background-color: #6d71d5;
		border-radius: 10upx;
	}
}
</style>
