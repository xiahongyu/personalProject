<template>
	<div class="homePage">
		<el-container>
			<el-aside width="200px">
				<el-menu
					default-active="1"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b">
					<div class="logo"><router-link to="/home"><img src="../assets/img/logo.jpeg" alt="点击我回到首页" title="点击我回到首页"/></router-link></div>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>全部类别</span>
						</template>
						<el-menu-item-group id="aLink">
							<el-menu-item ><router-link to="/quicklyDish">快手菜</router-link></el-menu-item>
							<el-menu-item ><router-link to="/underFood">下饭菜</router-link></el-menu-item>
							<el-menu-item ><router-link to="/yingji">应季时蔬</router-link></el-menu-item>
							<el-menu-item ><router-link to="/sushi">素食</router-link></el-menu-item>
							<el-menu-item ><router-link to="/roushi">肉食</router-link></el-menu-item>
							<el-menu-item ><router-link to="/tang">汤</router-link></el-menu-item>
							<el-menu-item ><router-link to="/jiachang">家常菜</router-link></el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-potato-strips"></i>
						<span slot="title"><router-link to="/hotSell">热卖推荐</router-link></span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-help"></i>
						<span slot="title"><router-link to="/dishAlls">菜品一览</router-link></span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-ice-drink"></i>
						<span slot="title" @click="myCollect">我的收藏</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-money"></i>
						<span slot="title"><router-link to="/payment">我的支付</router-link></span>
					</el-menu-item>
					<el-menu-item index="6">
						<i class="el-icon-setting"></i>
						<span slot="title"><router-link to="/login">管理员登录</router-link></span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<div class="headerContent">
						<div class="headLeft">
							<span>
								<router-link to="/additionDetail" style="color:#333 !important;"><i class="el-icon-s-shop"></i>{{newAddition}}</router-link>
							</span>
							<span @click="openDrawer">
								<i class="el-icon-shopping-cart-full"></i>{{shopCarListLength}}
							</span>
							<span>
								<router-link to="/newAddition" style="color:#333;"><i class="el-icon-refresh"></i>新开台</router-link>
							</span>
						</div>
						<div class="headRight">
							<div class="searchs">
								<el-input v-model="searchDish" placeholder="请输入菜名"></el-input>
								<el-button type="primary" @click="searchs">搜索</el-button>
							</div>
							<span @click="servePerson">
								<i class="el-icon-s-custom"></i>
								服务员
							</span>
						</div>
					</div>
				</el-header>
				<el-main>
					<div class="homePageContent" v-show="$route.path == '/home'">
						 <div>
							 <el-alert
							    title="欢迎您使用点餐系统!"
							    type="success"
							    description="使用系统点餐步骤介绍:"
							    show-icon>
							  </el-alert>
						 </div>
						<div class="homeContentCenter" style="height:300px">
							<el-steps direction="vertical" :active="1">
							    <el-step title="步骤 1" description="挑选食物"></el-step>
							    <el-step title="步骤 2" description="加入购物车"></el-step>
							    <el-step title="步骤 3" description="提交订单"></el-step>
							  </el-steps>
						</div>
						<div>
							<el-collapse >
								 <el-collapse-item title="挑选食物" name="1">
								    <div>挑选食物：浏览食物页面，看到中意的食物可进行点击，查看详情</div>
								  </el-collapse-item>
								  <el-collapse-item title="加入购物车" name="2">
								     <div>加入购物车：在食物详情页点击加入购物车，出现正确提示之后，说明加入购物车成功。然后可以在顶部点击购物车图标即可看到已加入购物车的食物。</div>
								   </el-collapse-item>
								   <el-collapse-item title="提交订单" name="3">
								      <div>提交订单：在购物车点击提交订单，弹出下单成功之后，后厨将为您准备美食，稍等片刻即可享受美食</div>
								    </el-collapse-item>
							</el-collapse>
						</div>
					</div>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
		<!-- 购物车 -->
		<el-drawer title="购物车" :visible.sync="drawer" :with-header="false">
				<div class="shopCarTop">
					<div class="carLeft"><p>总计<span class="carPrice">￥{{total}}</span></p><p>共{{shopCarList.length}}道菜品</p></div>
					<div class="carRight"><el-button type="danger" round :disabled="!shopCarList.length>0" @click="submitOrder">提交订单</el-button></div>
				</div>
				
				<div class="shopCarCenter" v-if="this.shopCarList.length>0">
					<table>
						<thead>
							<tr>
								<th>菜名</th>
								<th>单价</th>
								<th>份数</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item,index) in shopCarList">
								<td>{{item.title}}</td>
								<td>￥{{item.price}}</td>
								<td>
									<el-button type="primary" icon="el-icon-minus" circle size="mini" @click="desc(item,index)"></el-button>
									<span class="nums">{{item.num}}</span>
									<el-button type="danger" icon="el-icon-plus" circle size="mini" @click="add(item)"></el-button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div v-else>
					<el-empty description="您还没有点餐!"></el-empty>
				</div>
				<div class="shopCarBottom">
					<p>口味选择:</p>
					<el-radio-group v-model="radioTast" size="medium">
					  <el-radio-button label="麻辣" ></el-radio-button>
					  <el-radio-button label="微辣"></el-radio-button>
					  <el-radio-button label="酸辣"></el-radio-button>
					  <el-radio-button label="中辣"></el-radio-button>
					</el-radio-group>
					<p>偏好:</p>
					<el-checkbox-group v-model="checkboxGroup" size="medium">
					  <el-checkbox-button v-for="city in tasteList" :label="city" :key="city">{{city}}</el-checkbox-button>
					</el-checkbox-group>
					<p>添加备注:</p>
					 <el-input type="textarea" v-model="note"></el-input>
				</div>
		</el-drawer>
		<!-- 我的收藏 -->
		<el-drawer
		  title="我是标题"
		  :visible.sync="myCollectShow"
		  :direction="direction"
		  :with-header="false">
			<div class="collectTop"><h1>我的收藏</h1></div>
			<div class="myCollectCont" v-if="this.myCollectList.length>0">
				<table>
					<thead>
						<tr>
							<th>菜名</th>
							<th>单价</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in myCollectList">
							<td>{{item.title}}</td>
							<td>￥{{item.price}}</td>
							<td>
								<el-button type="primary" icon="el-icon-sell" circle size="mini" @click="myCollectAddCar(item)"></el-button>
								<el-button type="danger" icon="el-icon-delete" circle size="mini" @click="myCollectDesc(index)"></el-button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-else>
				<el-empty description="您还没有收藏的菜品!"></el-empty>
			</div>
		</el-drawer>
		<!-- 下单成功 -->
		<el-dialog title="下单成功" :visible.sync="dialogTableVisible">
			<h3 style="margin: 20px 0px;">订单详情</h3>
		  <el-table :data="shopCarList">
		    <el-table-column property="title" label="名称" width="200"></el-table-column>
		    <el-table-column property="price" label="价格" width="200"></el-table-column>
		    <el-table-column property="num" label="数量" width="200"></el-table-column>
		  </el-table>
		  <div class="noteCheckInfo">
		  	<p>您选择的口味是：{{radioTast}}</p>
		  	<p>您选择的偏好是：{{checkboxGroup}}</p>
		  	<p>备注：{{note}}</p>
		  </div>
		  <div style="border-top: 1px dashed #ccc; margin:20px 0px;padding: 10px 0px;">
			  后厨正在为您准备美食，请耐心等待... <em>在等待期间，您可以选择线上支付</em>
		  </div>
		  <h3>您共选择了{{shopCarList.length}}道菜品<span style="margin-left: 30px;color: orangered;">合计：￥{{total}}</span></h3>
		  <div style="margin: 20px 0px;"><el-button type="warning" @click="nowpay">线上支付</el-button></div>
		</el-dialog>
	</div>
</template>

<script>
import {request} from '../network/index.js'
export default {
	data() {
		return {
			newAddition:'',//开台号
			allDataList:[],//所有菜品列表
			drawer: false,//侧边栏购物车显示状态
			radioTast:'',//口味单选
			tasteList:["不吃辣","少放辣","多放辣","不吃蒜","不吃香菜","不吃葱"],//口味选择列表
			checkboxGroup: [],//已选好的口味列表
			note:'',//口味备注
			shopCarList:[],//加入购物车id购物车列表
			myCollectShow:false,//我的收藏显示与隐藏
			myCollectList:[],//我的收藏列表
			direction: 'ltr',//收藏列表从左侧展开
			searchDish:'',//要搜索的菜名
			dialogTableVisible:false,//下单成功框是否显示
		};
	},
	methods: {
		nowpay(){//支付
			const loading = this.$loading({
			  lock: true,
			  text: '正在支付中...',
			  spinner: 'el-icon-loading',
			  background: 'rgba(0, 0, 0, 0.7)'
			});
			setTimeout(() => {
			  loading.close();
			  this.$message({
				message:'支付成功!',
				type:'success'
			  });
			  this.$router.push('/payment');
			  //全部调整为初始状态
			  this.drawer = false;
			  this.radioTast ='';
			  this.checkboxGroup=[];
			  this.note = '';
			  this.shopCarList=[];
			  this.searchDish = '';
			  this.dialogTableVisible = false;
			}, 2000);
			this.$store.commit('changeNowPayOk',true);
		},
		add(item){//购物车按钮加
			return item.num++
		},
		desc(item,index){//购物车按钮减
			if(item.num == 1){
				this.shopCarList.splice(index,1);
			}else{
				return item.num--
			}
		},
		publicMethods(arrList){
			let objId=[];
			let newList=[];
			arrList.reduce((pre,next)=>{//reduce对加入购物车id去重
				 if(!pre.get(next)){
					 pre.set(next,1)
					 objId.push(next);
				 }
			 return pre
			},new Map());
			this.allDataList.forEach((item,index)=>{//根据id相同的数据push到一个新数组
				for(var i=0;i<objId.length;i++){
					if(item.id == objId[i]){
						newList.push(item)
					}
				}
			});
			return newList;
		},
		openDrawer(){
			this.drawer = true;//打开购物车
			let carList = this.$store.getters.getShopCarList;//获取加入购物车列表数据
			this.shopCarList = this.publicMethods(carList);
		},
		myCollect(){//我的收藏
			this.myCollectShow = true;
			let collectList = this.$store.getters.getMycollectList;
			this.myCollectList = this.publicMethods(collectList);
		},
		myCollectAddCar(item){//我的收藏加入购物车
			this.$store.commit('collectAddCar',item.id);
			this.$message({
				message:'加入成功!',
				type:'success'
			})
		},
		myCollectDesc(index){//我的收藏删除
			this.myCollectList.splice(index,1);
		},
		servePerson() {
			this.$alert('正在呼叫服务员请稍等', '呼叫中。。。', {
			confirmButtonText: '确定',
			callback: action => {
				this.$message({
					type: 'danger',
					message: `已连接服务员!`
				});
			}
			});
		},
		searchs(){
			if(this.searchDish!=''){
				this.$store.commit('sendSearchDish',this.searchDish);
				this.$router.push('/searchDish');
			}else{
				this.$message({
					message:'搜索内容不能为空!',
					type:'warning'
				})
			}
		},
		submitOrder(){//提交订单
			 const loading = this.$loading({
			  lock: true,
			  text: '提交订单中...',
			  spinner: 'el-icon-loading',
			  background: 'rgba(0, 0, 0, 0.7)'
			});
			setTimeout(() => {
			  loading.close();
			  this.dialogTableVisible = true;
			}, 1000);
		}
	},
	computed:{
		total(){
			let sums = 0;
			this.shopCarList.forEach(e=>{
				sums += e.price * e.num
			})
			return sums;
		},
		shopCarListLength(){
			let length = this.shopCarList.length;
			if(length==0){
				return ''
			}else{
				return length
			}
		}
	},
	created() {
		request({
			url:'quicklyDish'
		}).then(res=>{
			this.allDataList = res.data;
		});
		let numb= this.$store.getters.getNewAttition;
		if(numb==''){
			this.newAddition=''
		}else{
			let intnum = parseInt(numb);
			if(intnum<10){
				this.newAddition = "00"+intnum;
			}else{
				this.newAddition = "0"+intnum;
			}
		}
	}
};
</script>

<style scoped="scoped">
.homePage {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
.router-link-active {
	color: orangered !important;
	font-weight: bold;
}
.el-container a {
	cursor: pointer;
	color: white;
	text-decoration: none;
}
.el-container a:hover {
	color: orangered;
	transition: all 0.3s;
}
.el-container {
	height: 100%;
}
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	color: #333;
	text-align: center;
	line-height: 200px;
}
.searchs{
	height: 40px;
	margin-right: 30px;
	display: flex;
	align-items: center;
}
.el-main {
	background-color: #e9eef3;
	color: #333;
	text-align: center;
	height: calc(100% - 200px);
}
#aLink a{
	padding: 16px 30px;
}
.homePageContent{
	width: 70%;
	margin: 30px auto;
	padding: 20px;
	background-color: #fff;
}
.homeContentCenter{
	margin: 40px 0px;
}
body > .el-container {
	margin-bottom: 40px;
}
.el-menu {
	height: 100%;
}
.logo {
	width: 100%;
	height: 160px;
	background-color: #fff;
}
.logo img {
	width: 100%;
	height: 100%;
}
.headRight{
	display: flex;
	align-items: center;
}
.headerContent {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
}
.headerContent .headLeft span + span {
	margin-left: 14px;
}
.headerContent i {
	font-weight: bold;
	font-size: 22px;
}
.headerContent span:hover {
	cursor: pointer;
	color: orangered;
	transition: all 0.3s;
}
.headerContent span > a:hover {
	cursor: pointer;
	color: orangered;
	transition: all 0.3s;
}
.shopCarTop{
	width: 100%;
	height: 70px;
	background-color: #eee;
	display: flex;
	justify-content: space-between;
}
.shopCarTop .carLeft,.carRight{
	width: 112px;
	padding: 14px 16px;
	display: flex;
	flex-direction: column;
}
.shopCarTop .carLeft{
	color: #333;
	font-size: 16px;
}
.shopCarTop .carLeft .carPrice{
	font-weight: bold;
	font-size: 18px;
	color: orangered;
}
.shopCarCenter {
	width: 100%;
	height: auto;
}
.shopCarCenter table,.myCollectCont table{
	width: 100%;
	text-align: center;
	margin: 30px 0px;
	border: 1px solid red;
}
.shopCarCenter table th,td{
	padding: 12px 10px;
}
.myCollectCont table th,td{
	padding: 12px 10px;
}
.shopCarCenter table .nums,.myCollectCont table .nums{
	font-size: 18px;
	margin: 0px 6px;
}
.shopCarBottom{
	width: 100%;
	padding: 14px;
	display: flex;
	flex-direction: column;
	border-top:1px solid #ccc;
	border-bottom:1px solid #ccc;
}
.shopCarBottom .el-button{
	margin-left: 20px;
}
.shopCarBottom p,.noteCheckInfo p{
	margin: 12px 0px;
}
.noteCheckInfo{
	margin-top: 10px;
}
.collectTop{
	width: 100%;
	height: 70px;
	background-color: #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
