<script>
export default {
	onLaunch: function() {
		const userId = uni.getStorageSync('userId');
		const token = uni.getStorageSync('token');
		const shopId = uni.getStorageSync('shopId');
		if (userId) {
			this.$store.commit('SET_SHOPID', shopId);
			this.$store.commit('SET_USERID', userId);
			this.$store.commit('SET_TOKEN', token);
		}
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
uni-page-body,
page {
	font-size: 30upx;
}
input{
	font-size: 26upx;
}
textarea{
	padding: 20upx;
	box-sizing: border-box;
	font-size: 26upx;
}
</style>
