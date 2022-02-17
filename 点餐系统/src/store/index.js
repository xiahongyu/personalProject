import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		newAddition:'',//新开台
		shopCarList:[],//购物车列表
		myCollectList:[],//我的收藏列表
		searchDishs:'',//菜品搜索
		nowpayOk:false//标识是否已经购买了
	},
	getters:{
		getNewAttition(state){//新开台
			return state.newAddition;
		},
		getShopCarList(state){//购物车列表
			return state.shopCarList;
		},
		getMycollectList(state){//我的收藏列表
			return state.myCollectList;
		},
		getSearchDishs(state){//菜品搜索
			return state.searchDishs;
		},
		getNowPayOk(state){
			return state.nowpayOk;
		}
	},
	mutations:{
		newaddition(state,payload){//新开台
			state.newAddition = payload
		},
		shopCarList(state,payload){//购物车列表
			state.shopCarList.push(payload);
		},
		addShopCarList(state,payload){//加入购物车
			state.shopCarList.push(payload);
		},
		addMyCollectList(state,payload){//我的收藏
			state.myCollectList.push(payload);
		},
		collectAddCar(state,payload){//我的收藏加入购物车
			state.shopCarList.push(payload);
		},
		sendSearchDish(state,payload){//菜品搜索数据
			state.searchDishs=payload;
		},
		changeNowPayOk(state,payload){
			state.nowpayOk=payload;
		}
	}
})

export default store
