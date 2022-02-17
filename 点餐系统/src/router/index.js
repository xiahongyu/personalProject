import Vue from "vue"
import VueRouter from "vue-router"
import newAddition from '../views/新开台/newAddition.vue'
Vue.use(VueRouter)

const routes = [
	{path:'*',redirect:'newAddition'},//新开台
	{path:'/',redirect:'newAddition'},//新开台
	{path:'/newAddition',component:newAddition},//新开台
	{path:'/home',component:()=> import(/* webpackChunkName:"home" */ '../views/Home.vue'),//首页
	children:[
		{path:'/quicklyDish/dishDetail/:id',component: ()=> import (/* webpackChunkName:"dishDetail" */ '../views/菜品详情/dishDetail.vue')},//菜品详情
		{path:'/searchDish',component: ()=> import (/* webpackChunkName:"searchDish" */ '../views/菜品详情/searchDish.vue')},//菜品搜索详情
		{path:'/quicklyDish',component: ()=> import (/* webpackChunkName:"quicklyDish" */ '../views/全部分类/quicklyDish.vue')},//快手菜
		{path:'/underFood',component: ()=> import (/* webpackChunkName:"underFood" */ '../views/全部分类/underFood.vue')},//下饭菜
		{path:'/yingji',component: ()=> import (/* webpackChunkName:"yingji" */ '../views/全部分类/yingji.vue')},//应季时蔬
		{path:'/sushi',component: ()=> import (/* webpackChunkName:"sushi" */ '../views/全部分类/sushi.vue')},//素食
		{path:'/roushi',component: ()=> import (/* webpackChunkName:"roushi" */ '../views/全部分类/roushi.vue')},//肉食
		{path:'/tang',component: ()=> import (/* webpackChunkName:"tang" */ '../views/全部分类/tang.vue')},//汤
		{path:'/jiachang',component: ()=> import (/* webpackChunkName:"jiachang" */ '../views/全部分类/jiachang.vue')},//家常菜
		{path:'/dishAlls',component: ()=> import (/* webpackChunkName:"dishAlls" */ '../views/菜品一览/dishAlls.vue')},//菜品一览
		{path:'/additionDetail',component: ()=> import (/* webpackChunkName:"additionDetail" */ '../views/新开台/additionDetail.vue')},//开台详情
		{path:'/hotSell',component: ()=> import (/* webpackChunkName:"hotSell" */ '../views/热卖推荐/hotSell.vue')},//热卖推荐
		{path:'/payment',component: ()=> import (/* webpackChunkName:"payment" */ '../views/我的支付/payment.vue')},//我的支付
	]},//首页
	
	//后台页面
	{path:'/login',component:()=>import('../components/login/login.vue')},
	{path:'/backstage',name:'backstage',meta:{title:'首页'},component:()=>import('../components/backstage/backstage.vue'),
	children:[
		{path:'/userList',name:'userList',meta:{title:'用户列表'},component:()=>import('../components/users/userList.vue')},
		{path:'/dishShow',name:'dishShow',meta:{title:'菜品列表'},component:()=>import('../components/dishShow/dishShow.vue')},
	]}
]
const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0,y: 0}
		}
	}
})

router.beforeEach((to,from,next)=>{
	const nextRoute = ['/userList','/dishShow']
	let loginTok = window.localStorage.getItem('loginUser');
	if(nextRoute.indexOf(to.path)>=0){
		if(loginTok==null){
			router.push({path:'/login'});
			alert("请先登录!");
			next();
		}else{
			next();
		}
	}
	next();
})
export default router
