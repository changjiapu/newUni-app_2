import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		userId: '',
		token: '',
		shopId: '',
	},
	mutations: {
		SET_USERID: (state, userId) => {
			state.userId = userId
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_SHOPID: (state, shopId) => {
			state.shopId = shopId
		},
	},
	actions: {

	}
})
export default store
