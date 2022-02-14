import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
	state:{
		loginInfo:null,
		isLogin:true,
		shoppingList:[],//购物车列表
		nowShopList:[],//立即购买
		nowId:false,//标识是否点击了立即购买按钮
		shouList:[],//收藏列表
		userId:null,//当前登录用户id
		addressList:[],//收货地址列表
		searchInfo:null
	},
	mutations:{
		loginUpdate(state,payload){//登录之后修改状态（用户名）
			state.loginInfo=payload
		},
		isLogin(state,payload){//标识是否登录
			state.isLogin=false
		},
		logout(state,payload){//退出登录
			state.isLogin=true;
		},
		uploadShop(state,payload){//加入购物车列表
			state.shoppingList.push(payload);
		},
		updateNowId(state,payload){//立即购买标识
			state.nowId = payload
		},
		buyNow(state,payload){//立即购买
			state.nowShopList.splice(0,1);
			state.nowShopList.push(payload)
		},
		nowShop(state,payload){//加入购物车修改立即购买标识
			state.nowId=payload
		},
		shoucangList(state,payload){//收藏列表
			state.shouList.push(payload);
		},
		userId(state,payload){//存储当前登录用户id,用于显示当前用户信息
			state.userId=payload
		},
		addressTab(state,payload){//添加收货地址
			state.addressList = payload;
		},
		deleteAddress(state,payload){//删除收货地址当前列
			state.addressList.splice(payload,1);
		},
		sendSearch(state,payload){
			state.searchInfo = payload;
		}
	},
	getters:{
		getShoppingInfo(state){//获取购物列表
			return state.shoppingList
		},
		getShoppingLength(state){//获取购物列表长度
			return state.shoppingList.length
		},
		getAddressList(state){//获取收获地址列表长度
			return state.addressList.length
		},
		getNowId(state){//获取是否点击了立即购买标识
			return state.nowId
		},
		getNowShop(state){//获取立即购买列表
			return state.nowShopList
		},
		getSearchInfo(state){
			return state.searchInfo;
		}
	}
	
})

export default store
