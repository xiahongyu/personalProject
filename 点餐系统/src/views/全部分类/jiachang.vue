<template>
	<div class="quicklyContent">
		<div class="dishContent">
			<div class="dishItem"  v-for="(item,index) in dishList" :key="item.id">
				<router-link :to="'/quicklyDish/dishDetail/'+item.id">
					<div class="itemTop">
						<img :src="item.img">
					</div>
				</router-link>
				<div class="itemBottom">
					<p>{{item.title}}<span class="price">￥{{item.price}}</span></p>
					<el-button type="danger" round @click="addCar(item)">加入购物车</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				dishList:[],
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
				url:'quicklyDish'
			}).then(res=>{
				this.dishList = res.data.slice(36,46)
			})
		}
	}
</script>

<style scoped="scoped">
	.quicklyContent{
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
</style>
