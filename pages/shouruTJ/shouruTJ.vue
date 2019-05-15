<template>
	<view class="content">
		<view class="liubai"></view>
		<view class="title">
			<picker mode="date" @change="bindPickerChange"><image src="../../static/rili_13.png"></image></picker>
			<text class="date">{{ isDate }}</text>
			<text class="tabs" @click="ishowList()">全部产品</text>
		</view>
		<view class="liubai"></view>
		<view class="item">
			<text>产品名称</text>
			<text>销售笔数</text>
			<text>销售数量</text>
			<text>销售金额</text>
		</view>
		<view class="item" v-for="(item, index) in productList" :key="index">
			<text class="title2">{{ item.productName }}</text>
			<text>{{ item.orderCount }}</text>
			<text>{{ item.saleCount }}</text>
			<text>￥{{ item.salePrice }}</text>
		</view>
		<view class="item">
			<text class="title2">总计</text>
			<text>{{ totalOrderCount }}</text>
			<text>{{ totalSaleCount }}</text>
			<text>￥{{ totalSalePrice }}</text>
		</view>
		<view class="content2" v-if="ishow">
			<view class="list" v-for="(item, index) in categoryList" :key="index" @click="categoryChange(item.categoryId)">{{ item.categoryName }}</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { getSaleProductAnalysisByShopId, getProductCategory } from '@/request/API/index.js';
export default {
	data() {
		return {
			categoryList: [],
			productList: [], //列表
			totalOrderCount: '',
			totalSaleCount: '',
			totalSalePrice: '',
			pageNo: 1, //页码
			categoryId: '', //分类id
			ishow: false,
			winHeight: '',
			isDate: '',
			startTime: '' //开始搜索的时间段
		};
	},
	onLoad() {
		this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId, this.categoryId, this.startTime);
		this.getProductCategory(1, 1);
		this.isDate = this.getNowFormatDate();
		uni.getSystemInfo({
			success: res => {
				this.winHeight = res.screenHeight;
			}
		});
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId, this.categoryId, this.startTime);
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		//获取商品分类类别
		getProductCategory(level, type) {
			getProductCategory(level, type).then(res => {
				if (res.data.code == 0) {
					this.categoryList = res.data.data.cateGories;
				}
			});
		},
		//选择分类
		categoryChange(id) {
			this.categoryId = id;
			this.productList = [];
			this.ishow = false;
			this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId, this.categoryId, this.startTime);
		},
		//获取当前时间，格式YYYY-MM-DD
		getNowFormatDate() {
			var date = new Date();
			var seperator1 = '-';
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			if (month >= 1 && month <= 9) {
				month = '0' + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = '0' + strDate;
			}
			var currentdate = year + seperator1 + month + seperator1 + strDate;
			return currentdate;
		},
		//获取商品销售详情
		getSaleProductAnalysisByShopId(pageNo, pageSize, shopId, categoryId, startTime) {
			getSaleProductAnalysisByShopId(pageNo, pageSize, shopId, categoryId, startTime).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.saleList.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.totalOrderCount = res.data.data.totalOrderCount;
					this.totalSaleCount = res.data.data.totalSaleCount;
					this.totalSalePrice = res.data.data.totalSalePrice;
					this.productList = [...this.productList, ...res.data.data.saleList.list];
				}
			});
		},
		ishowList() {
			this.ishow = !this.ishow;
		},
		bindPickerChange(res) {
			this.isDate = res.detail.value;
			this.startTime = res.detail.value;
			this.productList = [];
			this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId, this.categoryId, this.startTime);
			console.log(res);
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.title {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 95upx;
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
		image {
			width: 50upx;
			height: 50upx;
		}
		.date {
			margin-left: 20upx;
		}
		.tabs {
			color: #ffffff;
			background-color: #6d71d5;
			position: absolute;
			right: 30upx;
			height: 100%;
			width: 130upx;
			padding-left: 20upx;
			line-height: 95upx;
			border-left: 1px solid #cccccc;
		}
	}
	.item {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 95upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		border-bottom: 1px solid #eeeeee;
		.title2 {
			width: 100upx;
		}
	}
	.item:first-of-type {
		color: #000000;
		background-color: #f7f7f7;
	}
	.content2 {
		position: absolute;
		top: 135upx;
		height: 100%;
		width: 100%;
		overflow-x:hidden;
		background-color: rgba(000, 000, 000, 0.5);

		.list {
			padding-left: 100upx;
			width: 100%;
			background-color: #ffffff;
			height: 95upx;
			line-height: 95upx;
			border-bottom: 1px solid #eeeeee;
			animation: aaa 0.8s;
		}
	}
}
@keyframes aaa {
	from {
		height: 0;
	}
	to {
		height: 95upx;
	}
}
</style>
