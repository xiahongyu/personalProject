<template>
	<div id="hotSell">
		<div class="bannerDish">
			<el-carousel height="320px">
			  <el-carousel-item>
				  <img src="../../assets/img/banner/banner1.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner2.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner3.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner4.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner5.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner6.jpeg" >
			  </el-carousel-item>
			  <el-carousel-item>
				   <img src="../../assets/img/banner/banner7.jpeg" >
			  </el-carousel-item>
			</el-carousel>
		</div>
		<div class="dishContent">
			<div class="dishItem"  v-for="(item,index) in newDishList" :key="item.id">
				<router-link :to="'/quicklyDish/dishDetail/'+item.id">
					<div class="itemTop">
						<img :src="item.img">
					</div>
				</router-link>
				<div class="itemBottom">
					<p>{{item.title}}<span class="price">￥{{item.price}}</span></p>
					<el-button type="danger" round @click="addCar(item)" style="padding: 9px 14px !important;">加入购物车</el-button>
				</div>
			</div>
		</div>
		<el-pagination class="tabListPage" background
		 layout="prev,pager,next" :total="dishList.length" 
		 :page-size="this.pageSize"  :current-page.sync="currentPage1">
		  </el-pagination>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				dishList:[],
				currentPage1:1,//页数
				pageSize:10,//每页多少条数据
			}
		},
		methods:{
			addCar(item){
				let thisDishId = item.id;
				this.$store.commit('shopCarList',thisDishId);
				 this.$message({
					 message:'加入购物车成功!',
					 type:'success'
				 })
			}
		},
		created() {
			request({
				url:'quicklyDish',
			}).then(res=>{
				this.dishList = res.data
			})
		},
		watch:{
			pageSize(){
				let dataLen = parseInt(this.dishList.length / this.pageSize);//总共多少条数据/每页多少条=得到页数
				if(dataLen==0){
					return 1;
				}else{
					return dataLen+1;
				}
			}
		},
		computed:{
			newDishList(){
				return this.dishList.slice((this.currentPage1-1)*this.pageSize,this.currentPage1*this.pageSize);
			}
		}
	}
</script>

<style scoped="scoped">
	#hotSell{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.el-carousel-item img{
		width: 1280px;
		height: 320px;
	}
	.bannerDish{
		margin: 0px auto;
	}
	.dishContent{
		height: 512px;
		display: flex;
		flex-wrap: wrap;
		border: 1px solid skyblue;
		margin:10px 0px;
	}
	.dishContent a{
		cursor: pointer;
	}
	.router-link-active{
		color: coral;
		font-weight: bold;
	}
	.dishContent .dishItem{
		width: 250px;
		height: 240px;
		box-shadow: 0 0 4px #ccc;
		border-radius: 10px;
		margin: 8px 32px;
	}
	.dishItem .itemTop{
		width: 100%;
		height: 170px;
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
		padding: 4px 14px;
	}
	.itemBottom .el-button{
		margin: 0 auto;
	}
</style>
