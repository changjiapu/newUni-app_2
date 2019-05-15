<template>
	<view class="content">
		<view class="item" v-for="(item, index) in productList" :key="index">
			<image :src="imgURl+item.imgList[0]" mode=""></image>
			<view class="msg">
				<text>{{item.productName}}</text>
				<text>{{item.descript}}</text>
			</view>
			<text class="price">￥{{item.price}}元</text>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getProductByShopId } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			imgURl:'',
			productList:[],
			pageNo: 1,
			sortWay: 0 //价格排序方式 0升序 1降序
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		this.getProductByShopId(this.pageNo, 10, this.shopId, this.sortWay);
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
		//获取商品销量统计表
		
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
		}
	}
};
</script>
<style lang="less" scoped>
.content {
	width: 100%;
	.item {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f7f7f7;
		position: relative;
		image {
			height: 120upx;
			width: 120upx;
		}
		.msg {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 0.3rem;
			text:first-of-type {
				font-size: 30upx;
			}
			text:last-of-type {
				font-size: 27upx;
				margin-top: 10upx;
				color: #999999;
			}
		}
		.price {
			position: absolute;
			right: 40upx;
		}
	}
}
</style>
