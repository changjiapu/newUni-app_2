<template>
	<view class="content">
		<view>
			<text>产品名称</text>
			<text>销售笔数</text>
			<text>销售数量</text>
			<text>销售金额</text>
		</view>
		<view v-for="(item, index) in productList" :key="index">
			<text class="title">{{ item.productName }}</text>
			<text>{{ item.orderCount }}</text>
			<text>{{ item.saleCount }}</text>
			<text>￥{{ item.salePrice }}</text>
		</view>
		<view>
			<text class="title">总计</text>
			<text>{{totalOrderCount}}</text>
			<text>{{totalSaleCount}}</text>
			<text>￥{{totalSalePrice}}</text>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { getSaleProductAnalysisByShopId } from '@/request/API/index.js';
export default {
	data() {
		return {
			totalOrderCount:'',
			totalSaleCount:'',
			totalSalePrice:'',
			pageNo: 1,
			productList: []
		};
	},
	onLoad() {
		this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId,'','');
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getSaleProductAnalysisByShopId(this.pageNo, 20, this.shopId,'','');
	},
	methods: {
		//获取商品销售详情
		getSaleProductAnalysisByShopId(pageNo, pageSize, shopId,categoryId,startTime) {
			getSaleProductAnalysisByShopId(pageNo, pageSize, shopId,categoryId,startTime).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.saleList.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.totalOrderCount=res.data.data.totalOrderCount
					this.totalSaleCount=res.data.data.totalSaleCount
					this.totalSalePrice=res.data.data.totalSalePrice
					this.productList = [...this.productList, ...res.data.data.saleList.list];
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	view {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 95upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #333333;
		border-bottom: 1px solid #eeeeee;
		.title{
			width: 100upx;
		}
	}
	view:first-of-type {
		color: #000000;
		background-color: #f7f7f7;
	}
}
</style>
