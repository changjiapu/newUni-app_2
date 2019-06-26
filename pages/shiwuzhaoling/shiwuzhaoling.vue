<template>
	<view class="content">
		<view class="LG">
			<text>上传失物图片</text>
			<text class="lg_img" @click="paizhao3" v-if="img3.length == 0">点击上传</text>
			<image v-else class="lg_img" :src="img3[0]" mode=""></image>
		</view>
		<view class="liubai"></view>
		<view class="input">
			<text style="width: 150upx;">失物标题:</text>
			<input type="text" v-model="title" placeholder="请输入标题" />
		</view>
		<view class="liubai"></view>
		<textarea class="textInput" v-model="content" value="" placeholder="发布你的失物招领内容.时间.地点" />
		<view class="liubai"></view>
		<view class="input">
			<text style="width: 150upx;">联系电话:</text>
			<input type="number" v-model="phone" placeholder="请输入发布信息人的电话" />
		</view>
		<view class="input">
			<text style="width: 150upx;">联系地址:</text>
			<input type="text" v-model="address" placeholder="请输入发布信息人的联系地址" />
		</view>
		<view class="input">
			<text style="width: 150upx;">联系姓名:</text>
			<input type="text" v-model="userName" placeholder="请输入发布信息人的姓名" />
		</view>
		<view class="liubai"></view>
		<view class="btn" @click="fabu()">立即发布</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { mapState } from 'vuex';
import { addNotice } from '@/request/API/index.js';
export default {
	data() {
		return {
			img3: [],
			title: '',
			content: '',
			imageId: '',
			phone: '', //电话
			userName: '', //姓名
			address: '' //地址
		};
	},
	onLoad() {},
	computed: {
		...mapState(['userId', 'shopId'])
	},
	methods: {
		fabu() {
			if (!this.imageId) {
				uni.showModal({
					title: '',
					content: '请上传失物图片',
					showCancel: false
				});
				return;
			}
			if (!this.title) {
				uni.showModal({
					title: '',
					content: '请输入失物标题',
					showCancel: false
				});
				return;
			}
			if (!this.content) {
				uni.showModal({
					title: '',
					content: '请输入失物内容',
					showCancel: false
				});
				return;
			}
			if (this.phone) {
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!reg.test(this.phone)) {
					uni.showModal({
						title: '',
						content: '请输入正确的手机号码',
						showCancel: false
					});
					return;
				}
			}
			if (this.phone == '' && this.userName == '' && this.address == '') {
				uni.showModal({
					title: '',
					content: '电话，地址，姓名至少输入一项',
					showCancel: false
				});
				return;
			}
			let params = {
				title: this.title,
				content: this.content,
				imageId: this.imageId,
				shopId: this.shopId,
				userId: this.userId,
				phone: this.phone,
				userName: this.userName,
				address: this.address,
				noticeType: 2
			};
			addNotice(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '发布成功',
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
						title: '发布失败',
						icon: 'none',
						duration: 1000
					});
				}
			});
		},

		paizhao3() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					this.img3 = res.tempFilePaths;
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
								this.imageId = aaa.data;
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
	width: 100%;
	overflow-x: hidden;
	.LG {
		padding: 20upx;
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
	.liubai {
		height: 20upx;
		width: 100%;
		background-color: #f7f7f7;
	}
	.textInput {
		padding: 20upx;
		width: 100%;
		height: 230upx;
	}
	.input {
		padding: 20upx;
		display: flex;
		align-items: center;
		input{
			width: 400upx;
		}
	}
	.btn {
		color: #ffffff;
		margin: 0 auto;
		margin-top: 50upx;
		height: 95upx;
		width: 80%;
		border-radius: 10upx;
		background-color: #6d71d5;
		text-align: center;
		line-height: 95upx;
	}
}
</style>
