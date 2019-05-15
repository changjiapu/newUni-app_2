<template>
	<view class="content">
		<image class="img_1" src="../../static/kefu_03.png" mode=""></image>
		<view class="btn" @click="callUp()">
			<image src="../../static/dianhua_07.png" mode=""></image>
			<text>客服热线：{{servicePhone}}</text>
		</view>
	</view>
</template>

<script>
import { getCustomerService } from '@/request/API/index.js';
export default {
	data() {
		return {
			servicePhone:''
		};
	},
	onShow() {
		this.getCustomerService();
	},
	methods: {
		getCustomerService() {
			getCustomerService().then(res => {
				if(res.data.code==0){
					this.servicePhone=res.data.data[0].servicePhone
				}
			});
		},
		callUp() {
			uni.makePhoneCall({
				phoneNumber:this.servicePhone
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.img_1 {
		margin-top: 180upx;
		height: 300upx;
		width: 230upx;
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin-top: 30upx;
		border-radius: 10upx;
		color: #ffffff;
		image {
			height: 40upx;
			width: 40upx;
		}
	}
}
</style>
