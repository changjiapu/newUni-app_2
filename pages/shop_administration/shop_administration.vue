<template>
	<view class="content">
		<view class="tabs">
			<text :class="{ active: currentTabs == 0 }" @click="tabs(0)">基本信息</text>
			<text :class="{ active: currentTabs == 1 }" @click="tabs(1)">评分展示</text>
		</view>
		<!-- 店铺信息页-->
		<view class="liubai"></view>
		<view class="content1" v-if="currentTabs == 0">
			<view class="item">
				<text class="title">店铺图片</text>
				<image class="img" :src="img" mode=""></image>
				<text class="jia" @click="paizhao()">+</text>
			</view>
			<view class="item">
				<text class="title">店铺名称:</text>
				<input type="text" v-model="shopName" placeholder="请输入您的店铺名称" />
			</view>
			<view class="item">
				<text class="title">店铺地址:</text>
				<input type="text" v-model="shopAddress" placeholder="请输入您的店铺地址" />
			</view>
			<view class="item">
				<text class="title">联系电话:</text>
				<input type="number" v-model="phone" placeholder="请输入您的联系电话" />
			</view>
			<view class="liubai"></view>
			<view class="item2">
				<text class="title">店铺介绍:</text>
				<textarea class="textarea" v-model="shopDesc" placeholder="请详细描述您的店铺信息" />
			</view>
			<view class="btn" @click="save">保存</view>
		</view>
		<!-- 评分页 -->
		<view class="content2" v-if="currentTabs == 1">
			<view class="item" v-for="(item, index) in commentList" :key="index">
				<image class="h_img" :src="imgURl + item.userPhoto" mode=""></image>
				<text>{{ item.userName }}</text>
				<image class="x_img" src="../../static/xingxing_03.png" mode="" v-for="(item2, index2) in item.commentStar" :key="index2"></image>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { addShopInfo, getShopInfoById, getCommentByShopId } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			imgURl: '',
			currentTabs: 0,
			img: '',
			shopName: '',
			phone: '',
			shopDesc: '',
			shopAddress: '',
			shopLogo: '',
			pageNo: 1,
			commentList: []
		};
	},
	onShow() {
		this.commentList=[]
		this.imgURl = imgURl;
		this.getShopInfoById();
		this.getCommentByShopId(this.pageNo, 10, this.shopId);
	},
	//上拉加载
	onReachBottom() {
		if (this.search == '') {
			this.pageNo++;
			this.getCommentByShopId(this.pageNo, 10, this.shopId);
		}
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		getCommentByShopId(pageNo, pageSize, shopId) {
			getCommentByShopId(pageNo, pageSize, shopId).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.commentList = [...this.commentList, ...res.data.data.list];
				}
			});
		},
		getShopInfoById() {
			getShopInfoById(this.shopId).then(res => {
				if (res.data.code == 0) {
					(this.shopName = res.data.data.shopName),
						(this.phone = res.data.data.phone),
						(this.shopDesc = res.data.data.shopDesc),
						(this.shopAddress = res.data.data.shopAddress);
				}
			});
		},
		save() {
			if (!this.shopLogo) {
				uni.showModal({
					title: '',
					content: '请上传店铺logo图片',
					showCancel: false
				});
				return;
			}
			if (!this.shopName) {
				uni.showModal({
					title: '',
					content: '请输入店铺名称',
					showCancel: false
				});
				return;
			}

			if (!this.shopAddress) {
				uni.showModal({
					title: '',
					content: '请输入您的店铺地址',
					showCancel: false
				});
				return;
			}

			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.phone)) {
				uni.showModal({
					title: '',
					content: '请输入正确的手机号码',
					showCancel: false
				});
				return;
			}
			if (!this.shopDesc) {
				uni.showModal({
					title: '',
					content: '请描述您的店铺信息',
					showCancel: false
				});
				return;
			}
			let params = {
				userId: this.userId,
				phone: this.phone,
				shopName: this.shopName,
				shopDesc: this.shopDesc,
				shopAddress: this.shopAddress,
				shopLogo: this.shopLogo
			};
			addShopInfo(params).then(res => {
				if (res.data.code == 0) {
					uni.setStorageSync('shopId', res.data.data.shop.id);
					this.$store.commit('SET_SHOPID', res.data.data.shop.id);
					uni.showToast({
						title: '保存成功'
					});
				}
			});
		},
		tabs(i) {
			this.currentTabs = i;
		},
		paizhao() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					this.img = res.tempFilePaths[0];
					uni.uploadFile({
						url: baseURL + '/file/upload',
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test',
							file: res.tempFilePaths[0]
						},
						success: uploadFileRes => {
							let aaa = JSON.parse(uploadFileRes.data);
							if (aaa.code == 0) {
								console.log(uploadFileRes);
								this.shopLogo = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	widows: 100%;
	.tabs {
		width: 100%;
		display: flex;
		justify-content: space-around;
		text {
			font-size: 30upx;
			text-align: center;
			line-height: 70upx;
			height: 70upx;
			&.active {
				color: #ed7180;
				border-bottom: 2px solid #ed7180;
			}
		}
	}
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.content1 {
		width: 100%;
		.item {
			padding: 0 20upx;
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #eeeeee;
			input{
				text-align: right;
				color: #999999;
			}
			.title {
				width: 150upx;
			}
			.img {
				height: 50upx;
				width: 50upx;
			}
			.jia {
				margin-right: 30upx;
				height: 70upx;
				width: 70upx;
				line-height: 70upx;
				border-radius: 100%;
				text-align: center;
				color: #99999;
				font-weight: bold;
				font-size: 40upx;
				background-color: #cccccc;
			}
		}
		.item2 {
			padding: 20upx;
			.title {
				width: 150upx;
			}
			.textarea{
				padding: 20upx;
				// text-indent:2em;
			}
		}
		.btn {
			height: 95upx;
			line-height: 95upx;
			width: 80%;
			background-color: #6d71d5;
			margin: auto;
			text-align: center;
			border-radius: 10upx;
			color: #ffffff;
		}
	}
	.content2 {
		.item {
			padding: 20upx;
			box-sizing: border-box;
			width: 100%;
			margin-top: 10upx;
			display: flex;
			align-items: center;
			color: #999999;
			border-bottom: 1px solid #eeeeee;
			.h_img {
				border-radius: 100%;
				height: 80upx;
				width: 80upx;
			}
			.x_img {
				margin-left: 10upx;
				height: 30upx;
				width: 30upx;
			}
			text {
				margin-right: 340upx;
			}
		}
	}
}
</style>
