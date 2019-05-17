<template>
	<view class="content">
		<view class="banner"><image src="../../static/banner_02.png" mode=""></image></view>
		<view class="liubai"></view>
		<view class="classify">
			<navigator class="item" url="../productList/productList">
				<image src="../../static/shangpintongjibiao_03.png" mode=""></image>
				<text>商品统计表</text>
			</navigator>
			<navigator class="item" url="../xiaolingTJ/xiaolingTJ">
				<image src="../../static/xiaoliangtongjibiao_05.png" mode=""></image>
				<text>销量统计表</text>
			</navigator>
			<navigator class="item" url="../shouruTJ/shouruTJ">
				<image src="../../static/shourutongjibiao_07.png" mode=""></image>
				<text>收入统计表</text>
			</navigator>
		</view>
		<view class="liubai"></view>
		<view class="date">
			<picker mode="date" @change="bindPickerChange"><image src="../../static/rili_13.png"></image></picker>
			起始
			<text>{{ startTime }}</text>
			<picker mode="date" @change="bindPickerChange2"><image src="../../static/rili_13.png"></image></picker>
			结束
			<text>{{ endTime }}</text>
		</view>

		<view class="tabs">
			<text :class="{ active: currentTabs == 0 }" @click="tabs(0)">日报表</text>
			<text :class="{ active: currentTabs == 1 }" @click="tabs(1)">月报表</text>
			<text :class="{ active: currentTabs == 2 }" @click="tabs(2)">季报表</text>
			<text :class="{ active: currentTabs == 3 }" @click="tabs(3)">年报表</text>
		</view>
		<view class="liubai"></view>
		<view class="tabsAll">
			<view class="tabs2">
				<text :class="{ active: tab == 1 }" @click="zhutu()">柱状图</text>
				<text :class="{ active: tab == 2 }" @click="bing()">饼状图</text>
				<text :class="{ active: tab == 3 }" @click="zhexian()">折线图</text>
			</view>
		</view>
		<view class="canvasView" v-show="tab == 2"><mpvue-echarts :echarts="echarts" :onInit="pieInit" canvasId="pie" ref="pieChart" /></view>
		<view class="canvasView" v-show="tab == 3"><mpvue-echarts :echarts="echarts" :onInit="lineInit" canvasId="line" ref="lineChart" /></view>
		<view class="canvasView" v-show="tab == 1"><mpvue-echarts :echarts="echarts" :onInit="barInit" canvasId="bar" ref="barChart" /></view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import * as echarts from '@/components/echarts/echarts.simple.min.js';
import mpvueEcharts from '@/components/echarts/echarts.vue';
import { getMoneyAnalysisByShopId } from '@/request/API/index.js';
var cityList = [
	{
		value: 55,
		name: '北京'
	},
	{
		value: 38,
		name: '上海'
	},
	{
		value: 20,
		name: '广州'
	}
];

let pieOption = {
	animation: false,
	backgroundColor: '#F8F8F8',
	color: ['#37A2DA', '#32C5E9', '#67E0E3', '#91F2DE', '#FFDB5C', '#FF9F7F'],
	series: [
		{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: [0, '60%'],
			data: [],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 2, 2, 0.3)'
				}
			}
		}
	]
};
let option = {
	xAxis: {
		type: 'category',
		data: [],
		axisLabel: {
			rotate: 40 //倾斜度
		}
	},
	yAxis: {
		type: 'value',
		splitArea: {
			show: true
		},
		name: '销售金额(元)' // 轴名称
	},
	series: [
		{
			data: [],
			type: 'bar',
			barWidth: 30
		}
	]
};
let lineOption = {
	animation: false,
	color: ['#37A2DA', '#9FE6B8'],
	grid: {
		x: 35,
		x2: 10,
		y: 30,
		y2: 25
	},
	calculable: false,
	xAxis: [
		{
			type: 'category',
			data: []
		}
	],
	yAxis: [
		{
			type: 'value',
			splitArea: {
				show: true
			},
			name: '销售金额(元)' // 轴名称
		}
	],
	series: [
		{
			name: '蒸发量',
			type: 'line',
			data: []
		}
	]
};
export default {
	data() {
		return {
			version: '', //版本号
			tab: 1, //默认柱状图
			dateType: 0, //统计类型 0-日报表/1-月报表/2-季报表/3-年报表(默认传0)
			startTime: '', //开始时间
			endTime: '', //结束时间
			currentTabs: 0,
			echarts: echarts
		};
	},
	components: {
		mpvueEcharts
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	onLoad() {
		this.startTime = this.getNowFormatDate();
		if (this.tab == 1) {
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [];
			this.getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime);
		}
	},
	methods: {
		//折线
		zhexian() {
			this.tab = 3;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						lineOption.xAxis[0].data.push(params);
						lineOption.series[0].data.push(params2);
						this.$refs.lineChart.init();
					}
				}
			});
		},
		//饼
		bing() {
			this.tab = 2;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = {
							name: item.dateTime,
							value: item.saleMoney
						};
						pieOption.series[0].data.push(params);
						this.$refs.pieChart.init();
					}
				}
			});
		},
		//柱状图数据
		zhutu() {
			this.tab = 1;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						option.xAxis.data.push(params);
						option.series[0].data.push(params2);
						this.$refs.barChart.init();
					}
				}
			});
		},
		//默认进来获取柱状图报表
		getMoneyAnalysisByShopId(shopId, dateType, startTime, endTime) {
			getMoneyAnalysisByShopId(shopId, dateType, startTime, endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						option.xAxis.data.push(params);
						option.series[0].data.push(params2);
						this.$refs.barChart.init();
					}
				}
			});
		},
		bindPickerChange(res) {
			this.startTime = res.detail.value;
			this.tab = 1;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [0];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						option.xAxis.data.push(params);
						option.series[0].data.push(params2);
						this.$refs.barChart.init();
					}
				}
			});
		},
		bindPickerChange2(res) {
			this.endTime = res.detail.value;
			this.tab = 1;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [0];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						option.xAxis.data.push(params);
						option.series[0].data.push(params2);
						this.$refs.barChart.init();
					}
				}
			});
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
		//饼图
		pieInit(canvas, width, height) {
			let pieChart = echarts.init(canvas, null, {
				width: width,
				height: height
			});
			canvas.setChart(pieChart);

			pieChart.setOption(pieOption);
			return pieChart;
		},
		//折线
		lineInit(canvas, width, height) {
			let lineChart = echarts.init(canvas, null, {
				width: width,
				height: height
			});
			canvas.setChart(lineChart);

			lineChart.setOption(lineOption);
			return lineChart;
		},
		//柱状图
		barInit(canvas, width, height) {
			let barChart = echarts.init(canvas, null, {
				width: width,
				height: height
			});
			canvas.setChart(barChart);

			barChart.setOption(option);
			return barChart;
		},
		tabs(i) {
			this.currentTabs = i;
			this.tab = 1;
			this.dateType = i;
			pieOption.series[0].data = [];
			lineOption.xAxis[0].data = [];
			lineOption.series[0].data = [];
			option.xAxis.data = [];
			option.series[0].data = [];
			getMoneyAnalysisByShopId(this.shopId, this.dateType, this.startTime, this.endTime).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data) {
						let params = item.dateTime;
						let params2 = item.saleMoney;
						option.xAxis.data.push(params);
						option.series[0].data.push(params2);
						this.$refs.barChart.init();
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
	.liubai {
		height: 20upx;
		width: 100%;
		background-color: #f5f5f5;
	}
	.banner {
		height: 286upx;
		width: 100%;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.classify {
		height: 195upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			image {
				height: 100upx;
				width: 100upx;
			}
		}
	}
	.date {
		height: 95upx;
		display: flex;
		align-items: center;
		image {
			margin-left: 30upx;
			height: 50upx;
			width: 50upx;
			margin-right: 30upx;
		}
	}
	.tabs {
		height: 95upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.active {
			color: red;
			border-bottom: 1px solid red;
		}
	}
	.canvasView {
		width: 100%;
		height: 500upx;
	}
	.tabsAll {
		width: 100%;
		display: flex;
		justify-content: center;
		.tabs2 {
			margin-right: 30upx;
			box-sizing: border-box;
			border-radius: 20upx;
			border: 1px solid #999999;
			width: 360upx;
			display: flex;
			justify-content: center;
			margin: 20upx 0;
			text {
				width: 120upx;
				text-align: center;
				color: #999999;
				&.active {
					color: orangered;
					border-radius: 20upx;
				}
			}
		}
	}
}
</style>
