<template>
	<view class="content">
		<view class="title">
			<view class="tianjia" @click="gotoAdd">
				<image src="../../static/shangchuandianpu_03.png" mode=""></image>
				<text>添加商品</text>
			</view>
		</view>
		<view class="product">
			<view class="item" v-if="productList.length > 0" v-for="(item, index) in productList" :key="index">
				<image :src="imgURl + item.imgList[0]" mode=""></image>
				<text>{{ item.productName }}</text>
				<text class="shangjia" v-if="item.publishStatus == 1">已上架</text>
				<text class="shangjia2" v-if="item.publishStatus == 0">未上架</text>
				<view class="price">
					<text>￥{{ item.price }}</text>
					<view class="yuan" @click="isShowChange(item.productId)">
						<text class="yuandian"></text>
						<text class="yuandian"></text>
						<text class="yuandian"></text>
					</view>
				</view>
			</view>
			<view class="kong" v-if="productList.length == 0">
				<image src="../../static/meiyoudingdan-01.png" mode=""></image>
				<text>~快去添加商品吧~</text>
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
			remark: '', //驳回理由
			shopStatus: -1,
			imgURl: '',
			productId: '',
			productList: [], //商品列表
			isShow: false,
			pageNo: 1,
			sortWay: 0 //价格排序方式 0升序 1降序
		};
	},
	onLoad() {
		const userId = uni.getStorageSync('userId');
		const token = uni.getStorageSync('token');
		const shopId = uni.getStorageSync('shopId');
		if (userId) {
			this.$store.commit('SET_SHOPID', shopId);
			this.$store.commit('SET_USERID', userId);
			this.$store.commit('SET_TOKEN', token);
		} else {
			uni.reLaunch({
				url: '/pages/logn/logn'
			});
		}
		//检查版本更新
		this.version = plus.runtime.version;
		uni.getSystemInfo({
			success: res => {
				console.log(res.platform);
				//检测当前平台，如果是安卓则启动安卓更新
				if (res.platform == 'android') {
					this.AndroidCheckUpdate();
				}
			}
		});
	},
	onShow() {
		if (this.shopId) {
			this.imgURl = imgURl;
			this.getShopStatusByUserId(this.userId);
			this.productList = [];
			this.pageNo = 1;
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
		//检查版本更新
		AndroidCheckUpdate() {
			uni.request({
				url: 'http://114.115.211.170:8018/system/version/getNewVersionNumber?type=2',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data.data);
					console.log(this.version);
					if (res.data.data > this.version) {
						if (plus.networkinfo.getCurrentType() != 3) {
							uni.showToast({
								title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新。',
								mask: false,
								duration: 7000,
								icon: 'none'
							});
							return;
						}
						uni.showToast({
							title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序。',
							mask: false,
							duration: 7000,
							icon: 'none'
						});
						var dtask = plus.downloader.createDownload('http://114.115.211.170:8008/app/shanghu.apk', {}, function(d, status) {
							// 下载完成
							if (status == 200) {
								plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
									uni.showToast({
										title: '安装失败',
										mask: false,
										icon: 'none',
										duration: 1500
									});
								});
							} else {
								uni.showToast({
									title: '更新失败',
									mask: false,
									icon: 'none',
									duration: 1500
								});
							}
						});
						dtask.start();
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		isShowChange2() {
			this.isShow = false;
		},
		//获取用户入住状态
		getShopStatusByUserId(userId) {
			getShopStatusByUserId(userId).then(res => {
				if (res.data.code == 0) {
					this.shopStatus = res.data.data.shopStatus;
					this.remark = res.data.data.remark;
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
					this.pageNo = 1;
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
					this.pageNo = 1;
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
					this.pageNo = 1;
					this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
				}
			});
			this.isShow = false;
		},
		gotoAdd() {
			if (this.shopStatus == -1) {
				uni.showToast({
					title: '请先添加店铺,在申请入驻商家',
					icon: 'none',
					duration: 3000
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
				uni.showModal({
					title: '入驻驳回理由',
					content: this.remark + ',是否重新入驻?',
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
		.kong {
			margin-top: 200upx;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image {
				height: 200upx;
				width: 200upx;
			}
			text {
				color: #999999;
				margin-top: 40upx;
			}
		}
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
