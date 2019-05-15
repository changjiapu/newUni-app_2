<template>
	<view class="content">
		<view class="input_item">
			<text style="width: 150upx;">商品名称:</text>
			<input type="text" v-model="productName" placeholder="请输入商品名称" />
		</view>
		<view class="addimg">
			<view class="title">
				<text style="width: 150upx;">商品图片:</text>
				<text>请上传商品图片</text>
			</view>
			<image v-if="imglist.length !== 0" :src="item" v-for="(item, index) in imglist" :key="index"></image>
			<image v-if="imglist.length < 5" src="../../static/tupiantianjia_03.png" mode="" @click="paizhao()"></image>
		</view>
		<view class="input_item">
			<text style="width: 150upx;">商品价格:</text>
			<input type="text" v-model="price" placeholder="请输入商品名称" />
		</view>
		<view class="radio">
			<text style="width: 150upx;">配送方式</text>
			<view class="msg">
				<image v-if="expressId == 0" src="../../static/mianfeipeisong_07.png" mode="" @click="radio1Change()"></image>
				<image v-if="expressId == 1" src="../../static/ziti_09.png" mode="" @click="radio1Change()"></image>
				<text>免费配送</text>
				<image v-if="expressId == 1" src="../../static/mianfeipeisong_07.png" mode="" @click="radio1Change()"></image>
				<image v-if="expressId == 0" src="../../static/ziti_09.png" mode="" @click="radio1Change()"></image>
				<text>自提</text>
			</view>
		</view>
		<view class="shuxing">
			<text style="width: 150upx;">商品属性</text>
			<text v-if="categoryName">{{ categoryName }}</text>
			<image src="../../static/shangpinshuxing_14.png" mode="" @click="ishowChange()"></image>
		</view>
		<view class="shuxing">
			<text style="width: 150upx;">商品规格</text>
			<image src="../../static/shangpinshuxing_14.png" mode="" @click="addGuige()"></image>
		</view>
		<view class="guigeList" v-for="(item, index) in guigeList" :key="index">
			<text>{{ index + 1 }}规格名称:</text>
			<input type="text" placeholder="请输入名称" v-model="item.productSpecs" />
			<text>价格:</text>
			<input type="number" placeholder="请输入价格" v-model="item.price" />
		</view>
		<view class="input_item">
			<text style="width: 150upx;">商品单位:</text>
			<input type="text" v-model="specUnit" placeholder="计算单位/斤/个/只/件..." />
		</view>
		<view class="input_item">
			<text style="width: 150upx;">商品数量:</text>
			<input type="number" v-model="sellCount" placeholder="商品库存数量" />
		</view>
		<!-- 		<view class="radio">
			<text>折扣</text>
			<view class="msg">
				<image v-if="radio2 == 1" src="../../static/mianfeipeisong_07.png" mode="" @click="radio2Change()"></image>
				<image v-if="radio2 == 2" src="../../static/ziti_09.png" mode="" @click="radio2Change()"></image>
				<text>是</text>
				<image v-if="radio2 == 2" src="../../static/mianfeipeisong_07.png" mode="" @click="radio2Change()"></image>
				<image v-if="radio2 == 1" src="../../static/ziti_09.png" mode="" @click="radio2Change()"></image>
				<text>否</text>
			</view>
		</view> -->
		<view class="input_item">
			<text style="width: 150upx;">商品描述:</text>
			<input type="text" v-model="descript" placeholder="请输入商品描述" />
		</view>
		<view class="btn" v-if="isShowshangj">
			<text v-if="!productId" @click="AddProduct()">立即上架</text>
			<text v-if="productId" @click="AddProduct2()">立即修改</text>
		</view>
		<view class="btn_2" v-else>
			<text v-if="!productId">立即上架</text>
			<text v-if="productId">立即修改</text>
		</view>
		<view class="bottomWindow" v-if="isshow">
			<view class="content">
				<text>商品分类</text>
				<view class="guige2">
					<text
						:class="{ active: currentTabs == index }"
						v-for="(item, index) in categoryList"
						:key="index"
						@click="categoryChange(index, item.categoryId, item.categoryName)"
					>
						{{ item.categoryName }}
					</text>
				</view>
				<view class="btn2" @click="isOk()">完成</view>
			</view>
		</view>
	</view>
</template>
<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { addProduct, getProductCategory, getShopProductById, updProduct } from '@/request/API/index.js';
export default {
	data() {
		return {
			isShowshangj: true,
			isshowBtn: true,
			categoryName: '',
			currentTabs: -1,
			categoryList: [], //分类列表
			productName: '', //商品名
			categoryId: '', //商品分类id
			descript: '', //商品描述
			productImage: [],
			price: '', //价格：此为商品展示价格
			sellCount: '', //商品数量
			specUnit: '', //商品单位
			expressId: 0, //配送方式
			guigeList: [
				{
					productSpecs: '', //名称
					price: '', //价格
					specForm: 1 //规格来源 1 店铺添加
				}
			],
			imglist: [],
			radio2: 1, //折扣
			isshow: false, //商品属性
			productId: ''
		};
	},
	onLoad(options) {
		if (options.id) {
			this.productId = options.id;
			this.getShopProductById(options.id);
		}
		this.getProductCategory(1, 1);
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		//获取产品信息
		getShopProductById(id) {
			getShopProductById(id).then(res => {
				if (res.data.code == 0) {
					let list = [];
					for (let item of res.data.data.specList) {
						let params = {
							productSpecs: item.productSpecs, //名称
							price: item.price, //价格
							specForm: 1 //规格来源 1 店铺添加
						};
						list.push(params);
					}
					this.guigeList = list;
					this.price = res.data.data.price;
					this.productName = res.data.data.productName;
					this.descript = res.data.data.descript;
					this.categoryId = res.data.data.categoryId;
					this.sellCount = res.data.data.sellCount;
					this.specUnit = res.data.data.specUnit;
					this.expressId = res.data.data.expressId;
					// this.productImage = res.data.data.imgList;
				}
			});
		},
		//产品规格选择
		categoryChange(index, categoryId, name) {
			this.currentTabs = index;
			this.categoryId = categoryId;
			this.categoryName = name;
		},
		getProductCategory(level, type) {
			getProductCategory(level, type).then(res => {
				if (res.data.code == 0) {
					this.categoryList = res.data.data.cateGories;
				}
			});
		},
		AddProduct() {
			if (!this.productName) {
				uni.showModal({
					title: '',
					content: '请输入商品名',
					showCancel: false
				});
				return;
			}
			if (this.productImage.length == 0) {
				uni.showModal({
					title: '',
					content: '请上传商品图片',
					showCancel: false
				});
				return;
			}
			if (!this.price) {
				uni.showModal({
					title: '',
					content: '请输入商品价格',
					showCancel: false
				});
				return;
			}
			if (!this.categoryId) {
				uni.showModal({
					title: '',
					content: '请选择商品分类属性',
					showCancel: false
				});
				return;
			}
			//删选删除添加的空规格
			for (let i = 0; i < this.guigeList.length; i++) {
				if (this.guigeList[i].productSpecs == '') {
					this.guigeList.splice(i);
				}
			}
			if (this.guigeList.length == 0) {
				uni.showModal({
					title: '',
					content: '请至少上传一种商品规格',
					showCancel: false
				});
				return;
			}
			if (!this.specUnit) {
				uni.showModal({
					title: '',
					content: '请输入商品单位',
					showCancel: false
				});
				return;
			}
			if (!this.sellCount) {
				uni.showModal({
					title: '',
					content: '请输入商品库存',
					showCancel: false
				});
				return;
			}

			if (!this.descript) {
				uni.showModal({
					title: '',
					content: '请输入商品描述',
					showCancel: false
				});
				return;
			}

			let params = {
				userId: this.userId,
				shopId: this.shopId,
				productName: this.productName,
				categoryId: this.categoryId,
				sellCount: this.sellCount,
				price: this.price,
				productImage: this.productImage.join(','),
				descript: this.descript,
				specUnit: this.specUnit,
				expressId: this.expressId,
				productSpecDtoList: this.guigeList
			};
			this.isShowshangj = false;
			addProduct(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '添加成功'
					});
				}
				setTimeout(res => {
					uni.navigateBack({
						delta: 1
					});
				}, 2000);
			});
		},
		//立即修改
		AddProduct2() {
			if (!this.productName) {
				uni.showModal({
					title: '',
					content: '请输入商品名',
					showCancel: false
				});
				return;
			}
			if (!this.sellCount) {
				uni.showModal({
					title: '',
					content: '请输入商品库存',
					showCancel: false
				});
				return;
			}
			if (!this.price) {
				uni.showModal({
					title: '',
					content: '请输入商品价格',
					showCancel: false
				});
				return;
			}
			if (!this.descript) {
				uni.showModal({
					title: '',
					content: '请输入商品描述',
					showCancel: false
				});
				return;
			}
			if (!this.specUnit) {
				uni.showModal({
					title: '',
					content: '请输入商品单位',
					showCancel: false
				});
				return;
			}
			if (!this.categoryId) {
				uni.showModal({
					title: '',
					content: '请选择商品分类',
					showCancel: false
				});
				return;
			}
			if (this.productImage.length == 0) {
				uni.showModal({
					title: '',
					content: '请上传商品图片',
					showCancel: false
				});
				return;
			}
			//删选删除添加的空规格
			for (let i = 0; i < this.guigeList.length; i++) {
				if (this.guigeList[i].productSpecs == '') {
					this.guigeList.splice(i);
				}
			}
			let params = {
				productId: this.productId,
				userId: this.userId,
				shopId: this.shopId,
				productName: this.productName,
				categoryId: this.categoryId,
				sellCount: this.sellCount,
				price: this.price,
				productImage: this.productImage.join(','),
				descript: this.descript,
				specUnit: this.specUnit,
				expressId: this.expressId,
				productSpecDtoList: this.guigeList
			};
						this.isShowshangj = false;
			updProduct(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '修改成功'
					});
				}
				setTimeout(res => {
					uni.navigateBack({
						delta: 1
					});
				}, 2000);
			});
		},
		addGuige() {
			if (this.guigeList.length > 5) {
				return;
			}
			let params = {
				productSpecs: '', //名称
				price: '', //价格
				specForm: 1 //规格来源 1 店铺添加
			};
			this.guigeList.push(params);
		},
		paizhao() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					console.log(res);
					this.imglist.push(...res.tempFilePaths);
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
								this.productImage.push(aaa.data);
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		radio1Change() {
			if (this.expressId == 0) {
				this.expressId = 1;
			} else {
				this.expressId = 0;
			}
		},
		radio2Change() {
			if (this.radio2 == 1) {
				this.radio2 = 2;
			} else {
				this.radio2 = 1;
			}
		},
		ishowChange() {
			this.isshow = true;
		},
		isOk() {
			console.log(888);
			this.isshow = false;
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	overflow-x: hidden;
	.input_item {
		padding: 0 30upx;
		height: 95upx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #cccccc;
		input {
			margin-left: 20upx;
		}
	}
	.addimg {
		padding: 30upx;
		image {
			margin-top: 20upx;
			height: 100upx;
			width: 100upx;
			border: 1px solid #cccccc;
		}
	}
	.guigeList {
		height: 90upx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #cccccc;
		padding: 0 50upx;
		input {
			width: 250upx;
		}
	}
	.radio {
		padding: 0 30upx;
		height: 95upx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #cccccc;
		.msg {
			margin-left: 20upx;
			display: flex;
			align-items: center;
			image {
				margin-left: 20upx;
				height: 30upx;
				width: 30upx;
			}
			text {
				margin-left: 20upx;
			}
		}
	}
	.shuxing {
		padding: 0 30upx;
		height: 95upx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		image {
			height: 50upx;
			width: 50upx;
		}
	}
	.btn {
		margin-top: 50upx;
		margin-bottom: 50upx;
		display: flex;
		justify-content: center;
		text {
			color: #ffffff;
			background-color: #6d71d5;
			width: 80%;
			height: 100%;
			text-align: center;
			line-height: 95upx;
		}
	}
	.btn_2 {
		margin-top: 50upx;
		margin-bottom: 50upx;
		display: flex;
		justify-content: center;
		text {
			color: #ffffff;
			background-color: #cccccc;
			width: 80%;
			height: 100%;
			text-align: center;
			line-height: 95upx;
		}
	}
	.bottomWindow {
		width: 100%;
		height: 100%;
		background-color: rgba(000, 000, 000, 0.5);
		z-index: 99999;
		position: fixed;
		top: 0;
		right: 0;
		.content {
			font-size: 30upx;
			position: fixed;
			bottom: 0;
			height: 580upx;
			width: 100%;
			background-color: #ffffff;
			padding: 25upx 40upx;
			box-sizing: border-box;
			.guige2 {
				display: flex;
				flex-wrap: wrap;
				margin-top: 20upx;
				margin-bottom: 20upx;
				text {
					padding: 10upx 20upx;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid #999999;
					border-radius: 10upx;
					margin-left: 20upx;
					margin-top: 10upx;
					&:not(:first-of-type) {
					}
					&.active {
						color: red;
						border: 1px solid red;
					}
				}
			}
			.btn2 {
				width: 518upx;
				height: 96upx;
				background-color: #6d71d5;
				color: #ffffff;
				border-radius: 10upx;
				text-align: center;
				line-height: 96upx;
				margin: 0 auto;
			}
		}
	}
}
</style>
