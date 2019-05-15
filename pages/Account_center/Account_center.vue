<template>
	<view class="content">
		<navigator class="item" url="/pages/cz_psssword/cz_psssword">
			<image src="../../static/shurumima_10.png" mode=""></image>
			<text>修改登录密码</text>
			<image src="../../static/gengduo_41.png" mode=""></image>
		</navigator>
		<view class="btn" @click="tuichu()">退出登录</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		tuichu() {
			uni.showModal({
				title: '',
				content: '是否确认退出',
				success: res => {
					if (res.confirm) {
						this.$store.commit('SET_SHOPID', '');
						this.$store.commit('SET_USERID', '');
						uni.setStorageSync('userId', '');
						uni.setStorageSync('shopId', '');
						uni.reLaunch({
							url: '/pages/logn/logn'
						});
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	padding: 20upx;
	font-size: 30upx;
	.item {
		display: flex;
		align-items: center;
		height: 95upx;
		border-bottom: 1px solid #dddddd;
		image {
			height: 35upx;
			width: 35upx;
		}
		text {
			margin-left: 30upx;
			margin-right: 400upx;
		}
	}
	.btn {
		margin: auto;
		margin-top: 400upx;
		height: 100upx;
		line-height: 100upx;
		width: 620upx;
		border-radius: 10upx;
		background-color: #6d71d5;
		color: #ffffff;
		text-align: center;
	}
}
</style>
