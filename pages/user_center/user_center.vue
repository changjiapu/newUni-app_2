<template>
	<view class="content">
		<view class="head">
			<!-- 		<image class="img_1" :src="imgURl+imglist" mode=""></image> -->
			<image v-if="imglist" class="img_1" :src="imgURl + imglist" mode=""></image>
			<image v-else class="img_1" :src="imglist2" mode=""></image>
			<!-- 	<image v-else class="img_1" src="../../static/touxiang_03.png" mode=""></image> -->
			<view class="msg">
				<text>{{ nickName ? nickName : '未填写' }}</text>
				<text>{{ spec_name ? spec_name : '未填写' }}</text>
			</view>
			<image class="img_2" src="../../static/baigou.png" mode="" @click="gotoUserMsg"></image>
		</view>
		<view class="liubai"></view>
		<view class="list">
			<navigator class="list_item" url="/pages/myOrder/myOrder">
				<image src="../../static/wodedingdan_06.png" mode=""></image>
				<text>我的订单</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
			<view class="list_item" @click="ruzhu()">
				<image src="../../static/shangjiaruzhu_26.png" mode=""></image>
				<text>商家入驻</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</view>
			<navigator class="list_item" url="/pages/callCenter/callCenter">
				<image src="../../static/lianxikefu_12.png" mode=""></image>
				<text>联系客服</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/gonggaoFabu/gonggaoFabu">
				<image src="../../static/fabugonggao_16.png" mode=""></image>
				<text>发布公告</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/shiwuzhaoling/shiwuzhaoling">
				<image src="../../static/shiwuzhaoling.png" mode=""></image>
				<text>失物招领</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/complain/complain">
				<image src="../../static/yijianfankui_18.png" mode=""></image>
				<text>意见反馈</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/Account_center/Account_center">
				<image src="../../static/zhnaghushezhi_09.png" mode=""></image>
				<text>账户设置</text>
				<image src="../../static/gengduo_41.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { mapState } from 'vuex';
import { getUserById, getShopStatusByUserId } from '@/request/API/index.js';
export default {
	data() {
		return {
			shopStatus: -1,
			remark:'',//入住驳回理由
			imgURl: '',
			imglist: '', //用户头像
			imglist2: '', //用户微信头像
			nickName: '', //用户昵称
			spec_name: '' //用户签名
		};
	},
	onShow() {
		this.imgURl = imgURl;
		this.getUserById();
		this.getShopStatusByUserId(this.userId);
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		//获取用户入住状态
		getShopStatusByUserId(userId) {
			getShopStatusByUserId(userId).then(res => {
				if (res.data.code == 0) {
					this.shopStatus = res.data.data.shopStatus;
					this.remark=res.data.data.remark
				}
			});
		},
		ruzhu() {
			if (this.shopStatus == 0) {
				uni.showToast({
					title: '入住信息审核中',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (this.shopStatus == 1) {
				uni.showToast({
					title: '已经入驻成功',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (this.shopStatus == 2) {
				uni.showModal({
					title: '入驻驳回理由',
					content: this.remark+',是否重新入驻?',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/merchant/merchant'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				return;
			}
			uni.navigateTo({
				url: '/pages/merchant/merchant'
			});
		},
		//获取用户信息
		getUserById() {
			getUserById(this.userId).then(res => {
				this.imglist = res.data.data.userPhoto;
				this.imglist2 = res.data.data.weChatPhoto;
				this.spec_name = res.data.data.specName;
				this.nickName = res.data.data.nickName;
			});
		},
		gotoUserMsg() {
			uni.navigateTo({
				url: '/pages/userMsg/userMsg'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	// background-color: #f7f7f7;
	.head {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 220upx;
		width: 100%;
		color: #ffffff;
		background-color: #6d71d5;
		display: flex;
		align-items: center;
		// justify-content: space-between;
		.img_1 {
			height: 130upx;
			width: 130upx;
			border-radius: 100%;
		}
		.img_2 {
			height: 25upx;
			width: 25upx;
		}
		.msg {
			margin-left: 20upx;
			width: 70%;
			display: flex;
			flex-direction: column;
			text:first-of-type {
				font-weight: bold;
			}
		}
	}
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.list {
		width: 90%;
		margin: 0 auto;
		padding: 0 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 20upx;
		margin-bottom: 30upx;
		.list_item {
			height: 95upx;
			width: 100%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #dddddd;
			image:first-of-type {
				height: 40upx;
				width: 40upx;
			}
			image:last-of-type {
				height: 30upx;
				width: 30upx;
			}
			text {
				margin-left: 5%;
				width: 85%;
			}
		}
	}
}
</style>
