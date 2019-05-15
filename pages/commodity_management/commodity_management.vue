<template>
	<view class="content">
		<view class="title">
			<view class="tianjia" @click="gotoAdd">
				<image src="../../static/shangchuandianpu_03.png" mode=""></image>
				<text>添加商品</text>
			</view>
		</view>
		<view class="product">
			<view class="item" v-for="(item, index) in productList" :key="index">
				<image :src="imgURl + item.imgList[0]" mode=""></image>
				<text>{{ item.productName }}</text>
				<text class="shangjia" v-if="item.publishStatus == 1">已上架</text>
				<text class="shangjia2" v-if="item.publishStatus == 0">未上架</text>
				<view class="price">
					<text>￥{{ item.price }}</text>
					<!-- <text>￥399</text> -->
					<view class="yuan" @click="isShowChange(item.productId)">
						<text class="yuandian"></text>
						<text class="yuandian"></text>
						<text class="yuandian"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="zhedang" v-if="isShow" @click.stop="isShowChange2()">
			<view class="edit">
				<view class="item" @click="compile()">
					<image src="../../static/bianji_07.png" mode=""></image>
					<text>编辑</text>
				</view>
				<view class="item" @click="Delete">
					<image src="../../static/bianji_07.png" mode=""></image>
					<text>删除</text>
				</view>
				<view class="item" @click="putaway()">
					<image src="../../static/bianji_07.png" mode=""></image>
					<text>上架</text>
				</view>
				<view class="item" @click="soldOut()">
					<image src="../../static/bianji_07.png" mode=""></image>
					<text>下架</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getProductByShopId, shelvesProduct, delProductById, getShopStatusByUserId } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			shopStatus: -1,
			imgURl: '',
			productId: '',
			productList: [], //商品列表
			isShow: false,
			pageNo: 1,
			sortWay: 0 //价格排序方式 0升序 1降序
		};
	},
	onShow() {
		if (this.shopId) {
			this.imgURl = imgURl;
			this.getShopStatusByUserId(this.userId);
			this.productList = [];
			this.pageNo=1;
			this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
		}
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		isShowChange2() {
			this.isShow = false;
		},
		//获取用户入住状态
		getShopStatusByUserId(userId) {
			getShopStatusByUserId(userId).then(res => {
				if (res.data.code == 0) {
					this.shopStatus = res.data.data.shopStatus;
				}
			});
		},
		//获取商品数据
		getProductByShopId(pageNo, pageSize, shopId, sortWay) {
			getProductByShopId(pageNo, pageSize, shopId, sortWay).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.productList = [...this.productList, ...res.data.data.list];
				}
			});
		},
		isShowChange(id) {
			this.productId = id;
			this.isShow = true;
		},
		//编辑
		compile() {
			this.isShow = false;
			uni.navigateTo({
				url: '/pages/addProduct/addProduct?id=' + this.productId
			});
		},
		//删除
		Delete() {
			delProductById(this.productId).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '删除成功',
						icon: 'none',
						duration: 1000
					});
					this.productList = [];
					this.pageNo=1;
					this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
				}
			});
			this.isShow = false;
		},
		//上架
		putaway() {
			let publishStatus = 1; //1上架
			shelvesProduct(this.productId, publishStatus).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '上架成功',
						icon: 'none',
						duration: 1000
					});
					this.productList = [];
						this.pageNo=1;
					this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
				}
			});
			this.isShow = false;
		},
		//下架
		soldOut() {
			let publishStatus = 0; //0下架
			shelvesProduct(this.productId, publishStatus).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '下架成功',
						icon: 'none',
						duration: 1000
					});
					this.productList = [];
						this.pageNo=1;
					this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
				}
			});
			this.isShow = false;
		},
		gotoAdd() {
			if (this.shopStatus == -1) {
				uni.showToast({
					title: '还为入驻商家',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (this.shopStatus == 0) {
				uni.showToast({
					title: '信息审核中',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			if (this.shopStatus == 2) {
				uni.showToast({
					title: '商家入驻驳回，请重新入驻',
					icon: 'none',
					duration: 1000
				});
				return;
			}
			uni.navigateTo({
				url: '/pages/addProduct/addProduct'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	overflow-x: hidden;
	.title {
		width: 100%;
		background-color: #f7f7f7;
		height: 90upx;
		position: relative;
		.tianjia {
			height: 100%;
			display: flex;
			align-items: center;
			position: absolute;
			color: #999999;
			right: 20upx;
			image {
				height: 60upx;
				width: 60upx;
			}
		}
	}
	.product {
		padding: 30upx;
		padding-top: 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.item {
			position: relative;
			display: flex;
			flex-direction: column;
			width: 335upx;
			margin-top: 20upx;
			box-shadow: 3px 3px 3px #eeeeee;
			&:nth-of-type(even) {
				margin-left: 25upx;
			}
			image {
				width: 100%;
				height: 350upx;
				margin-bottom: 15upx;
			}
			.shangjia {
				position: absolute;
				top: 0;
				left: 0;
				padding: 10upx 20upx;
				background-color: red;
				color: #ffffff;
			}
			.shangjia2 {
				position: absolute;
				top: 0;
				left: 0;
				padding: 10upx 20upx;
				background-color: #999999;
				color: #ffffff;
			}
			.price {
				position: relative;
				margin-top: 15upx;
				display: flex;
				align-items: center;
				text:first-of-type {
					color: red;
				}
				text:nth-of-type(2) {
					margin-left: 20upx;
					text-decoration: line-through;
					color: #999999;
				}
				.yuan {
					height: 100upx;
					width: 100upx;
					position: absolute;
					right: 0upx;
					bottom: 0upx;
					display: flex;
					align-items: center;
					.yuandian {
						height: 10upx;
						width: 10upx;
						background-color: #999999;
						border-radius: 100%;
						margin-left: 10upx;
					}
				}
			}
		}
	}
	.zhedang {
		position: fixed;
		top: 0;
		z-index: 99999;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		// justify-content: center;
		background-color: rgba(000, 000, 000, 0.5);
		.edit {
			position: absolute;
			right: 20upx;
			width: 450upx;
			height: 130upx;
			background-color: #ffffff;
			border-radius: 10upx;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				image {
					height: 35upx;
					width: 35upx;
				}
			}
		}
	}
}
</style>
