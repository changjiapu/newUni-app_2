<template>
	<view class="content">
		<view class="tabs">
			<text :class="{ active: currentTabs == 1 }" @click="tabs(1)">待确认</text>
			<text :class="{ active: currentTabs == 2 }" @click="tabs(2)">已确认</text>
		</view>
		<view class="item" v-for="(item, index) in productList" :key="index">
			<view class="head">
				<image :src="imgURl + item.product.imgList[0]" mode=""></image>
				<view class="msg">
					<text class="title">{{ item.product.productName }}</text>
					<text>{{ item.product.descript }}</text>
					<text>{{ item.productSpec.productSpecs }}</text>
					<text class="price">￥{{ item.order.orderMoney }}</text>
				</view>
			</view>
			<view class="footer">
				<text class="quxiao" v-if="currentTabs == 1" @click="cancel(item.detailId)">取消订单</text>
				<text class="queren" v-if="currentTabs == 1" @click="confirm(item.detailId)">确认订单</text>
				<text class="queren2" v-if="currentTabs == 2">已确认</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { queryOrderList, confirmOrder, cancelOrder } from '@/request/API/index.js';
export default {
	data() {
		return {
			queryType: 1,
			imgURl: '',
			productList: [],
			currentTabs: 1,
			state: 1,
			pageNo: 1,
			pageSize: 10
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		//获取订单列表
		this.queryOrderList(this.userId, this.queryType, this.state, this.pageNo, this.pageSize);
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.queryOrderList(this.userId, this.queryType, this.state, this.pageNo, this.pageSize);
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		//确认订单
		confirm(id) {
			confirmOrder('', id, 2).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '确认订单成功',
						icon: 'none',
						duration: 1000
					});
					this.pageNo = 1;
					this.productList = [];
					this.queryOrderList(this.userId, this.queryType, this.state, this.pageNo, this.pageSize);
				}
			});
		},
		//取消订单
		cancel(id) {
			cancelOrder(id).then(res => {
				if (res.data.code == 0) {
					this.pageNo = 1;
					this.productList = [];
					this.queryOrderList(this.userId, this.queryType, this.state, this.pageNo, this.pageSize);
				}
			});
		},
		//查询订单列表
		queryOrderList(userId, queryType, state, pageNo, pageSize) {
			queryOrderList(userId, queryType, state, pageNo, pageSize).then(res => {
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
		tabs(e) {
			this.productList = [];
			this.state = e;
			this.currentTabs = e;
			this.queryOrderList(this.userId, this.queryType, this.state, this.pageNo, this.pageSize);
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	.tabs {
		width: 100%;
		height: 90upx;
		display: flex;
		justify-content: space-around;
		text {
			height: 100%;
			line-height: 90upx;
			width: 140upx;
			text-align: center;
			&.active {
				color: #ed7180;
				border-bottom: 1px solid #ed7180;
			}
		}
	}
	.item {
		padding: 20upx;
		.head {
			display: flex;
			position: relative;
			image {
				height: 160upx;
				width: 210upx;
			}
			.msg {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-left: 15upx;
				color: #999999;
				.price {
					position: absolute;
					top: 10upx;
					right: 20upx;
					color: red;
				}
				.title {
					color: #000000;
				}
			}
		}
		.footer {
			margin-top: 20upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			border-top: 1px solid #eeeeee;
			height: 100upx;
			width: 100%;
			text {
				height: 60upx;
				text-align: center;
				line-height: 60upx;
				width: 150upx;
				border-radius: 10upx;
				margin-right: 10upx;
				&.quxiao {
					color: #999999;
					border: 1px solid #999999;
				}
				&.queren {
					background-color: #ed7180;
					color: #ffffff;
				}
				&.queren2 {
					background-color: #cccccc;
					color: #555555;
				}
			}
		}
	}
}
</style>
