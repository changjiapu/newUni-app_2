// const baseUrl = 'http://192.168.1.125:8028/web'
// const baseUrl = 'http://114.115.211.170:18028/web'
const baseUrl = 'http://114.115.211.170:8028/web'
import store from '../common/store/index.js'
export function postRequest(data, url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		setTimeout(res => {
			uni.hideLoading()
		}, 5000)
		uni.request({
			url: baseUrl + url,
			method: 'post',
			data: {
				...data
			},
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data.code == -30) {
					uni.navigateTo({
						url: '/pages/logn/logn'
					});
					// uni.showModal({
					// 	title: '',
					// 	content: '登录失效是否从新登录？',
					// 	success: res => {
					// 		if (res.confirm) {
					// 			uni.navigateTo({
					// 				url: '/pages/logn/logn'
					// 			});
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消');
					// 		}
					// 	}
					// });
				}
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function deleteGetRequest(url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		setTimeout(res => {
			uni.hideLoading()
		}, 5000)
		uni.request({
			url: baseUrl + url,
			method: 'DELETE',
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data.code == -30) {
					uni.navigateTo({
						url: '/pages/logn/logn'
					});
					// uni.showModal({
					// 	title: '',
					// 	content: '登录失效是否从新登录？',
					// 	success: res => {
					// 		if (res.confirm) {
					// 			uni.navigateTo({
					// 				url: '/pages/logn/logn'
					// 			});
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消');
					// 		}
					// 	}
					// });
				}
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function deleteRequest(data, url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		setTimeout(res => {
			uni.hideLoading()
		}, 5000)
		uni.request({
			url: baseUrl + url,
			method: 'DELETE',
			data: {
				...data
			},
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data.code == -30) {
					uni.navigateTo({
						url: '/pages/logn/logn'
					});
					// uni.showModal({
					// 	title: '',
					// 	content: '登录失效是否从新登录？',
					// 	success: res => {
					// 		if (res.confirm) {
					// 			uni.navigateTo({
					// 				url: '/pages/logn/logn'
					// 			});
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消');
					// 		}
					// 	}
					// });
				}
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function postGetRequest(url) {
	return new Promise((resolve, reject) => {
		uni.showLoading()
		setTimeout(res => {
			uni.hideLoading()
		}, 5000)
		uni.request({
			url: baseUrl + url,
			method: 'post',
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data.code == -30) {
					uni.navigateTo({
						url: '/pages/logn/logn'
					});
					// uni.showModal({
					// 	title: '',
					// 	content: '登录失效是否从新登录？',
					// 	success: res => {
					// 		if (res.confirm) {
					// 			uni.navigateTo({
					// 				url: '/pages/logn/logn'
					// 			});
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消');
					// 		}
					// 	}
					// });
				}
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function getRequest(url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		setTimeout(res => {
			uni.hideLoading()
		}, 5000)
		uni.request({
			url: baseUrl + url,
			method: 'get',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data.code == -30) {
					uni.navigateTo({
						url: '/pages/logn/logn'
					});
					// uni.showModal({
					// 	title: '',
					// 	content: '登录失效是否从新登录？',
					// 	success: res => {
					// 		if (res.confirm) {
					// 			uni.navigateTo({
					// 				url: '/pages/logn/logn'
					// 			});
					// 		} else if (res.cancel) {
					// 			console.log('用户点击取消');
					// 		}
					// 	}
					// });
				}
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
