<template>
	<div id="searchDish">
		<div class="dishContent" v-if="this.isHas">
			<div class="dishItem"  v-for="(item,index) in newDishList" :key="item.id">
				<router-link :to="'/quicklyDish/dishDetail/'+item.id">
					<div class="itemTop">
						<img :src="item.img">
					</div>
				</router-link>
				<div class="itemBottom">
					<p>{{item.title}}<span class="price">￥{{item.price}}</span></p>
					<el-button type="danger" round @click="addCar(item.id)">加入购物车</el-button>
				</div>
			</div>
			<el-pagination class="tabListPage" background
			 layout="prev,pager,next" :total="dishList.length" 
			 :page-size="this.pageSize"  :current-page.sync="currentPage1">
			</el-pagination>
		</div>
		<!-- 没有匹配到对应的菜品 -->
		<div v-else class="nodish">
			<el-empty description="sorry!当前还没有该菜品哦,请试试别的">
				 <el-button type="primary" @click="forDish">挑选菜品</el-button>
			</el-empty>
		</div>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				searchInfos:'',//搜索内容
				dishList:[],//菜品列表
				shopCarList:[],//加入购物车列表
				currentPage1:1,//页数
				pageSize:10,//每页多少条数据
				isHas:false
			}
		},
		methods:{
			addCar(id){
				this.shopCarList.push(id);
				this.$store.commit('shopCarList',this.shopCarList);
				 this.$message({
					 message:'加入购物车成功!',
					 type:'success'
				 })
			},
			forDish(){
				this.$router.push('/hotSell');
			}
		},
		created() {
			let searchInfo = this.$store.getters.getSearchDishs;
			var dishallList;
			request({
				url:'quicklyDish',
				method:'get'
			}).then(res=>{	
				dishallList=res.data;
				dishallList.forEach((item,index)=>{//使用includes看食品列表是否包含所输入的内容
					if(item.title.includes(searchInfo)){
						this.dishList.push(item);
						this.isHas=true;
					}else{
						this.isHas=false;
					}
				})
			})
		},
		watch:{
			pageSize(){
				let dataLen = parseInt(this.dishList.length / this.pageSize);
				if(dataLen == 0){
					return 1;
				}else{
					return dataLen+1;
				}
			}
		},
		computed:{
			newDishList(){
				return this.dishList.slice((this.currentPage1 - 1)*this.pageSize,this.currentPage1*this.pageSize);
			}
		}
	}
</script>

<style scoped="scoped">
	#searchDish{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.dishContent{
		display: flex;
		flex-wrap: wrap;
		border: 1px solid skyblue;
	}
	.dishContent a{
		cursor: pointer;
	}
	.router-link-active{
		color: coral;
		font-weight: bold;
	}
	.dishContent .dishItem{
		width: 280px;
		height: 320px;
		box-shadow: 0 0 4px #ccc;
		border-radius: 10px;
		margin: 40px 18px;
	}
	.dishItem .itemTop{
		width: 100%;
		height: 230px;
	}
	.dishItem .itemTop img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.itemBottom{
		width: 100%;
	}
	.itemBottom .price{
		color: red;
		font-weight: bold;
	}
	.itemBottom p{
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		padding: 10px 14px;
	}
	.itemBottom .el-button{
		margin: 0 auto;
	}
	.nodish{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
