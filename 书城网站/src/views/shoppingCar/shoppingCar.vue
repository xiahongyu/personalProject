<template>
	<div class="shoppingCont">
		<headers></headers>
		<contentSearch></contentSearch>
		<contentNav></contentNav>
		<div class="shoppingCar">
			<div class="shopContent">
				<header><span>全部商品</span></header>
				<!-- 加入购物车列表 -->
				<div class="shopTab" v-if="addShoppingCarLen">
					<table>
						<thead>
							<tr>
								<td><input type="checkbox" v-model="selectAll" /></td>
								<td><span>图片</span></td>
								<td><span>商品</span></td>
								<td><span>作者</span></td>
								<td><span>单价</span></td>
								<td><span>数量</span></td>
								<td><span>小计</span></td>
								<td><span>操作</span></td>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in shoppingList" :key="index">
								<td><input type="checkbox" v-model="selects" :value="item.id" /></td>
								<td><img :src="item.imgurl" alt="" /></td>
								<td>
									<h4>{{ item.title | slices }}</h4>
								</td>
								<td>
									<span>{{ item.author | author }}</span>
								</td>
								<td>
									<span class="newPrice">￥{{ item.price }}</span>
									<span class="oldPrice">￥{{ item.oldprice }}</span>
								</td>
								<td>
									<el-button size="mini" @click="descBtn(item)" class="el-icon-minus"></el-button>
									{{ item.num }}
									<el-button size="mini" @click="addBtn(item)" class="el-icon-plus"></el-button>
								</td>
								<td>
									<span>￥{{ parseInt(item.price * item.num) }}</span>
								</td>
								<td>
									<el-button type="danger" icon="el-icon-delete" @click="deletes(index)"></el-button>
									<el-button type="primary" icon="el-icon-edit" @click="edits(index)"></el-button>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="caozuo">
						<div class="caoLeft">
							<span><input type="checkbox" v-model="selectAll" /></span>
							<span @click="deleteAll">删除全部</span>
						</div>
				
						<div class="caoRight">
							<span>已选择商品{{ this.selects.length }}件</span>
							<span>合计（不含运费）￥{{ total }}</span>
							<el-button type="success" round @click="openFullScreen2" :disabled="isOkBuy">结算</el-button>
						</div>
					</div>
				</div>
				<!-- 没有列表 -->
				<div v-else style="text-align: center;">
					<el-empty description="当前没有商品!" :image-size="200"></el-empty>
					<router-link to="/home"><el-button type="primary">去首页添加商品</el-button></router-link>
				</div>
			</div>
		</div>
		<footers></footers>
	</div>
</template>

<script>
	import headers from '../header/header.vue'//头部header
	import contentSearch from '../contentSearch/contentSearch.vue'//头部搜索
	import contentNav from '../contentNav/contentNav.vue'//顶部导航和右侧导航
	import footers from '../footer/footer.vue'
export default {
	components:{
	 headers,
	 contentSearch,
	 contentNav,
	 footers
	},
	data() {
		return {
			shoppingList: null, //加入购物车商品列表
			selects: [],
			addressListLen:this.$store.getters.getAddressList,
		};
	},
	methods: {
		deletes(index) {//加入购物车列表删除操作
			//删除单条数据
			this.shoppingList.splice(index, 1);
		},
		deleNowShop(){//立即购买列表删除操作
			this.nowShopList=[]
		},
		edits(index) {
			//编辑
			console.log(index);
		},
		deleteAll() {
			//删除全部
			this.$confirm('确定要删除全部商品吗, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			})
				.then(() => {
					let len = this.shoppingList.length;
					this.shoppingList.splice(0, len);
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
		},
		result() {
			//结算
		},
		descBtn(item) {
			//商品个数减
			item.num--;
			if (item.num <= 1) {
				item.num = 1;
			}
		},
		addBtn(item) {
			//商品个数加
			item.num++;
		},
		openFullScreen2() {
			if (this.selects.length < 0) {
				this.$message.error('请选择商品');
			} else {
				if(this.addressListLen == 0){
					this.$message({
						message: '请添加收货地址!',
						type: 'warning'
					});
					setTimeout(()=>{
						this.$router.push('/personHome/myAddress');
					},1500)
				}else{
					const loading = this.$loading({
						lock: true,
						text: '正在支付...',
						spinner: 'el-icon-loading',
						background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
						loading.close();
					}, 1000);
					setTimeout(() => {
						this.$message({
							message: '支付成功!',
							type: 'success'
						});
					}, 1300);
				}
			}
		}
	},
	created() {
		let arrList = this.$store.getters.getShoppingInfo;//获取购物列表
		let obj = {};
		let peon = arrList.reduce((cur, next) => {
			//去重处理
			obj[next.id] ? '' : (obj[next.id] = true && cur.push(next));
			return cur;
		}, []); //设置cur默认类型为数组，并且初始值为空的数组
		this.shoppingList = peon;
	},
	filters: {
		slices(value) {
			return value.slice(0, 10) + '...'; //标题缩短
		},
		author(value) {
			if (value == '') {
				//过滤有无作者
				return '无';
			} else {
				return value;
			}
		}
	},
	computed: {
		selectAll: {//https://www.jb51.net/article/118931.htm
			get() {
				return this.shoppingList.every(item => this.selects.indexOf(item.id) >= 0);
			},
			set(val) {
				if (val) {
					this.selects = this.shoppingList.map(item => item.id);
				} else {
					this.selects = [];
				}
			}
		},
		total() {
			if(this.selects.length!=0){
				let totalcost = 0;
				for (let index in this.shoppingList) {
					if (this.selects[index] == this.shoppingList[index].id) {
						totalcost += this.shoppingList[index].num * this.shoppingList[index].price;
					}
				}
				return parseInt(totalcost);
			}else{
				return 0;
			}
			
		},
		addShoppingCarLen(){
			if(this.shoppingList.length>0){
				return true;
			}else{
				return false;
			}
		},
		isOkBuy(){//根据有没有数据列表来决定结算按钮是否可以点击
			if(this.selects.length>0){
				return false
			}else{
				return true
			}
		}
	}
};
</script>

<style scoped="scoped">
.shoppingCont{
	width: 100vw;
	overflow: auto;
}
.shoppingCar {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.shopContent {
	width: 1200px;
	padding: 30px;
	background-color: #fff;
}
.shopContent header {
	width: 100%;
	border-bottom: 1px solid #ccc;
	margin-bottom: 30px;
}
.shopContent header span {
	width: 140px;
	height: 40px;
	padding: 10px 0px;
	line-height: 40px;
	border-bottom: 1px solid purple;
	font-weight: bold;
}
.shopTab {
	width: 100%;
	margin-top: 40px;
}
.shopTab table {
	width: 100%;
	border-collapse: collapse;
}
.shopTab table tr {
	margin-bottom: 10px;
	border-bottom: 1px solid #ccc;
}
.shopTab table td {
	padding: 12px 20px;
	text-align: center;
}
.shopTab table td img {
	width: 70px;
	height: 100%;
}
.shopTab table thead {
	height: 40px;
	margin: 10px 0px;
}
.shopTab table h4 {
	margin: 0;
}
.newPrice {
	font-size: 18px;
	color: red;
}
.oldPrice {
	font-size: 12px;
	color: #ccc;
	text-decoration: line-through;
}
.caozuo {
	height: 60px;
	display: flex;
	padding: 10px;
	justify-content: space-between;
	align-items: center;
	background-color: #f6f6f6;
	border: 1px solid #ccc;
	margin-top: 30px;
}
.caozuo span {
	margin-right: 20px;
}
.caoRight span:hover {
	color: orangered;
	cursor: pointer;
}
</style>
