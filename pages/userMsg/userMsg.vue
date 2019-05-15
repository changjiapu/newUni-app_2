<template>
	<view class="content">
		<view class="item3">
			<text class="title3">头像:</text>
			<view class="right" @click="paizhao">
				<image v-if="imglist2" class="tx" :src="imglist2" mode=""></image>
				<image v-else class="tx" :src="imgurl + imglist" mode=""></image>
				<image class="bq" src="../../static/gengduo_41.png" mode=""></image>
			</view>
		</view>
		<view class="item">
			<text class="title3">用户名:</text>
			<input type="text" v-model="userinfo.name" placeholder="请输入用户名" />
		</view>
		<view class="item">
			<text class="title3">昵称:</text>
			<input type="text" value="" v-model="userinfo.nickName" placeholder="请输入用户昵称" />
		</view>
		<view class="item">
			<text class="title3">电话:</text>
			<input type="number" value="" v-model="userinfo.userPhone" placeholder="请输入电话号码" disabled=true />
		</view>
		<picker mode="selector" @change="bindPickerChange" :range="range">
			<view class="item3">
				<text class="title3">性别:</text>
				<text class="sex">{{ userinfo.userSex == 0 ? '男' : '女' }}</text>
				<view class="right"><image class="bq" src="../../static/gengduo_41.png" mode=""></image></view>
			</view>
		</picker>
		<view class="item2">
			<text class="title3">个性签名</text>
			<textarea class="text" type="text" v-model="userinfo.spec_name" placeholder="请输入个性签名" />
		</view>
		<view class="btn" @click="save">保存</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { mapState } from 'vuex';
import { getUserById, updateUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			imglist2: '',
			imglist: '',
			//获取的用户信息
			userinfo: {
				name: '',
				userPhone: '',
				userSex: '',
				nickName: '',
				spec_name: ''
			},
			//输入的用户信息
			imgurl: '',
			range: ['男', '女']
		};
	},
	onLoad() {
		this.imgurl = imgURl;
		//获取用户信息
		this.getUserById();
	},
	methods: {
		//保存跳转
		save() {
			if (this.userinfo.userPhone) {
				const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!reg.test(this.userinfo.userPhone)) {
					uni.showModal({
						title: '',
						content: '请输入正确的手机号码',
						showCancel: false
					});
					return;
				}
			}
			let params = {
				userId: this.userId,
				userName: this.userinfo.name,
				specName: this.userinfo.spec_name,
				userPhoto: this.imglist,
				userSex: this.userinfo.userSex,
				nickName: this.userinfo.nickName,
				userPhone: this.userinfo.userPhone
			};
			updateUserInfo(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '保存成功',
						mask: false,
						duration: 1500
					});
					setTimeout(res => {
						uni.navigateBack({
							data: 1
						});
					}, 1500);
				}
			});
		},
		//获取用户信息
		getUserById() {
			getUserById(this.userId).then(res => {
				if (res.data.data.userPhoto) {
					this.imglist = res.data.data.userPhoto;
				}
				if (res.data.data.userName) {
					this.userinfo.name = res.data.data.userName;
				}
				if (res.data.data.userPhone) {
					this.userinfo.userPhone = res.data.data.userPhone;
				}
				if (res.data.data.specName) {
					this.userinfo.spec_name = res.data.data.specName;
				}
				if (res.data.data.userSex) {
					this.userinfo.userSex = res.data.data.userSex;
				}
				if (res.data.data.nickName) {
					this.userinfo.nickName = res.data.data.nickName;
				}
			});
		},

		bindPickerChange(e) {
			this.userinfo.userSex = e.detail.value;
		},
		paizhao() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					console.log(res);
					this.imglist2 = res.tempFilePaths[0];
					//上传图片
					uni.uploadFile({
						url: baseURL + '/file/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test',
							file: res.tempFilePaths[0]
						},
						success: uploadFileRes => {
							let aaa= JSON.parse(uploadFileRes.data);
							this.imglist=aaa.data

						}
					});
				}
			});
		}
	},
	computed: {
		...mapState(['userId'])
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	input {
		color: #999999;
	}
	textarea {
		color: #999999;
	}
	.title3 {
		width: 120upx;
	}
	.item {
		padding: 20upx;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		// justify-content: space-between;
		text {
			margin-right: 20upx;
		}
		input{
			padding-right: 20upx;
			text-align: right;
		}
	}
	.item2 {
		padding: 20upx;
		.text {
			box-sizing: border-box;
			margin-top: 20upx;
			padding: 20upx;
			width: 100%;
			border: 1px solid #cccccc;
		}
	}
	.item3 {
		padding: 20upx;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		position: relative;
		text {
			margin-right: 20upx;
		}
		.sex{
			position: absolute;
			right: 50upx;
		}
		.right {
			display: flex;
			align-items: center;
			.tx {
				height: 80upx;
				width: 80upx;
				border-radius: 100%;
			}
			.bq {
				height: 30upx;
				width: 30upx;
			}
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>