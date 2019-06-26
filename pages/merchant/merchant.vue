<template>
	<view class="content">
		<view class="item">
			<text class="title3">手&nbsp;&nbsp;机&nbsp;&nbsp;号</text>
			<input type="number" v-model="phone" maxlength="11" placeholder="请输入注册人电话" />
		</view>
		<view class="item">
			<text class="title3">微&nbsp;&nbsp;信&nbsp;&nbsp;号</text>
			<input type="text" v-model="weChatId" placeholder="请输入相关微信号" />
		</view>
		<view class="item">
			<text class="title3">身份证号</text>
			<input type="text" v-model="idCard" maxlength="18" placeholder="请输入身份证号码" />
		</view>
		<view class="zhaopian">
			<text>上传身份证正反照片</text>
			<text style="display: block; color: #999999;font-size: 20upx;margin-top: 20upx;">(第一张为正面,第二张为反面)</text>
			<view class="img">
				<view class="img_item" v-if="!img1" @click="paizhao1()"><image src="../../static/zhengmianzhao_03.png" mode=""></image></view>
				<image v-else class="img_1" :src="imgURl + img1" mode="" @click="paizhao1()"></image>
				<view class="img_item" v-if="!img2" @click="paizhao2()"><image src="../../static/fanmianzhao_05.png" mode=""></image></view>
				<image v-else class="img_1" :src="imgURl + img2" mode=""  @click="paizhao2()"></image>
			</view>
		</view>
		<view class="item">
			<text class="title3">店铺名称</text>
			<input type="text" v-model="shopName" placeholder="请输入店铺名称" />
		</view>
		<view class="item">
			<text class="title3">店铺简介</text>
			<input type="text" v-model="shopDesc" placeholder="请输入店铺描述" />
		</view>
		<view class="item">
			<text class="title3">店铺地址</text>
			<input type="text" v-model="shopAddress" placeholder="请输入店铺描述" />
		</view>
		<view class="LG">
			<text>上传店铺图片</text>
			<text class="lg_img" @click="paizhao3" v-if="!img3">点击上传</text>
			<image v-else class="lg_img" :src="imgURl + img3" mode=""  @click="paizhao3"></image>
		</view>
		<view class="LG">
			<text>上传店铺营业执照</text>
			<text class="lg_img" @click="paizhao6" v-if="!img6">点击上传</text>
			<image v-else class="lg_img" :src="imgURl + img6" mode=""  @click="paizhao6"></image>
		</view>
		<view class="code">
			<text>上传微信支付宝收款二维码</text>
			<text style="display: block; color: #999999;font-size: 20upx;margin-top: 20upx;">(请第一张上传微信,第二张上传支付宝)</text>
			<view class="code_list">
				<text class="code_img" v-if="!img4" @click="paizhao4">点击上传</text>
				<image v-else class="code_img" :src="imgURl + img4" mode=""  @click="paizhao4"></image>
				<text class="code_img" v-if="!img5" @click="paizhao5">点击上传</text>
				<image v-else class="code_img" :src="imgURl + img5" mode=""  @click="paizhao5"></image>
			</view>
		</view>
		<view v-if="ishow" class="btn" @click="ruzhu">完成</view>
		<view v-else class="btn2">完成</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { addShop, getShopInfoById } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			imgURl: '',
			ishow: true,
			img1: '', //身份证正面
			img2: '', //身份证反面
			img3: '', //店铺logo
			img4: '', //微信收款码
			img5: '', //支付宝收款码
			img6: '', //营业执照
			phone: '', //手机号
			weChatId: '', //微信号
			idCard: '', //身份证号
			idFront: '', //身份证正面照
			idBack: '', //身份证反面照
			shopName: '', //店铺名称
			shopDesc: '', //店铺简介
			shopAddress: '', //店铺地址
			shopLogo: '', //店铺logo
			shopLicence: '', //店铺营业执照
			weChatPhoto: '', //微信收款二维码
			aliPayPhoto: '' //支付宝收款二维码
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		this.getShopInfoById(this.shopId);
	},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		getShopInfoById(id) {
			getShopInfoById(id).then(res => {
				if (res.data.code == 0) {
					this.phone = res.data.data.phone;
					this.weChatId = res.data.data.weChatId;
					this.idCard = res.data.data.idCard;
					this.idFront = res.data.data.idFront;
					this.idBack = res.data.data.idBack;
					this.shopName = res.data.data.shopName;
					this.shopDesc = res.data.data.shopDesc;
					this.shopAddress = res.data.data.shopAddress;
					this.shopLogo = res.data.data.shopLogo;
					this.shopLicence = res.data.data.shopLicence;
					this.weChatPhoto = res.data.data.weChatPhoto;
					this.aliPayPhoto = res.data.data.aliPayPhoto;
					this.img1 = res.data.data.idFront;
					this.img2 = res.data.data.idBack;
					this.img3 = res.data.data.shopLogo;
					this.img4 = res.data.data.weChatPhoto;
					this.img5 = res.data.data.aliPayPhoto;
					this.img6 = res.data.data.shopLicence;
				}
			});
		},

		//身份证正面
		paizhao1() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img1 = res.tempFilePaths;
					//上传图片
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
								this.idFront = aaa.data;
								this.img1 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//身份证反面
		paizhao2() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img2 = res.tempFilePaths;
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
								this.idBack = aaa.data;
								this.img2 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//logo
		paizhao3() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img3 = res.tempFilePaths;
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
								this.img3 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//微信收款码
		paizhao4() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img4 = res.tempFilePaths;
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
								this.weChatPhoto = aaa.data;
								this.img4 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//支付宝收款码
		paizhao5() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img5 = res.tempFilePaths;
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
								this.aliPayPhoto = aaa.data;
								this.img5 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//营业执照
		paizhao6() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					// this.img6 = res.tempFilePaths;
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
								this.shopLicence = aaa.data;
								this.img6 = aaa.data;
								uni.showToast({
									title: '上传成功'
								});
							}
						}
					});
				}
			});
		},
		//入驻
		ruzhu() {
			if (this.phone == '') {
				uni.showModal({
					title: '',
					content: '请输入手机号',
					showCancel: false
				});
				return;
			}
			if (this.weChatId == '') {
				uni.showModal({
					title: '',
					content: '请输入微信号',
					showCancel: false
				});
				return;
			}
			if (this.idCard == '') {
				uni.showModal({
					title: '',
					content: '请输入身份证号',
					showCancel: false
				});
				return;
			}
			const reg2 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
			if (!reg2.test(this.idCard)) {
				uni.showModal({
					title: '',
					content: '身份证号输入有误',
					showCancel: false
				});
				return;
			}
			if (this.idFront == '') {
				uni.showModal({
					title: '',
					content: '请上传身份证正面照',
					showCancel: false
				});
				return;
			}
			if (this.idBack == '') {
				uni.showModal({
					title: '',
					content: '请上传身份证反面照',
					showCancel: false
				});
				return;
			}
			if (this.shopName == '') {
				uni.showModal({
					title: '',
					content: '请输入店铺名称',
					showCancel: false
				});
				return;
			}
			if (this.shopDesc == '') {
				uni.showModal({
					title: '',
					content: '请输入店铺简介',
					showCancel: false
				});
				return;
			}
			if (this.shopAddress == '') {
				uni.showModal({
					title: '',
					content: '请输入店铺地址',
					showCancel: false
				});
				return;
			}
			if (this.shopLogo == '') {
				uni.showModal({
					title: '',
					content: '请上传店铺图片',
					showCancel: false
				});
				return;
			}
			if (this.shopLicence == '') {
				uni.showModal({
					title: '',
					content: '请上传店铺营业执照',
					showCancel: false
				});
				return;
			}
			if (this.weChatPhoto == '') {
				uni.showModal({
					title: '',
					content: '请上传微信收款二维码',
					showCancel: false
				});
				return;
			}
			if (this.aliPayPhoto == '') {
				uni.showModal({
					title: '',
					content: '请上传支付宝收款二维码',
					showCancel: false
				});
				return;
			}
			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.phone)) {
				console.log(this.phone);
				uni.showModal({
					title: '',
					content: '请输入正确的手机号码',
					showCancel: false
				});
				return;
			}
			let params = {
				userId: this.userId,
				phone: this.phone, //手机号
				weChatId: this.weChatId, //微信号
				idCard: this.idCard, //身份证号
				idFront: this.idFront, //身份证正面照
				idBack: this.idBack, //身份证反面照
				shopName: this.shopName, //店铺名称
				shopDesc: this.shopDesc, //店铺简介
				shopAddress: this.shopAddress, //店铺地址
				shopLogo: this.shopLogo, //店铺logo
				shopLicence: this.shopLicence, //店铺营业执照
				weChatPhoto: this.weChatPhoto, //微信收款二维码
				aliPayPhoto: this.aliPayPhoto //支付宝收款二维码
			};
			this.ishow = false;
			addShop(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '申请成功',
						icon: 'none',
						duration: 1000
					});
					setTimeout(res => {
						uni.navigateBack({
							data: 1
						});
					}, 1500);
				} else {
					uni.showToast({
						title: '申请失败',
						icon: 'none',
						duration: 1000
					});
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	padding: 20upx;
	box-sizing: border-box;
	input {
		font-size: 24upx;
	}
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		border-bottom: 1px solid #dddddd;

		text {
			width: 200upx;
		}
		.title3 {
			text-align: justify;
			width: 250upx;
		}
	}
	.zhaopian {
		margin: 20upx;
		.img {
			margin-top: 20upx;
			width: 100%;
			display: flex;
			justify-content: center;
			.img_item {
				margin-left: 20upx;
				width: 320upx;
				height: 210upx;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px dashed #dddddd;
				image {
					height: 75upx;
					width: 75upx;
				}
			}
			.img_1 {
				width: 320upx;
				height: 210upx;
			}
		}
	}
	.LG {
		margin-top: 20upx;
		.lg_img {
			color: #999999;
			margin: 20upx 0;
			display: block;
			width: 200upx;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			border: 1px dashed #dddddd;
		}
		image {
			width: 200upx;
			height: 140upx;
			border: 1px dashed #dddddd;
		}
	}
	.code {
		.code_list {
			color: #999999;
			width: 100%;
			display: flex;
			// justify-content: center;
			.code_img {
				margin: 20upx 0;
				margin-left: 40upx;
				display: inline-block;
				width: 200upx;
				height: 140upx;
				text-align: center;
				line-height: 140upx;
				border: 1px dashed #dddddd;
			}
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
	.btn2 {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #cccccc;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
