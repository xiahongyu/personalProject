<template>
	<div class="myOrder">
		<div class="shoppingCont">
			<ul class="ulList">
				<li><router-link to="/personHome/myOrder/allOrder">全部订单</router-link></li>
				<li><router-link to="/personHome/myOrder/payment">待付款</router-link></li>
				<li><router-link to="/personHome/myOrder/shipped">待发货</router-link></li>
				<li><router-link to="/personHome/myOrder/sendGoods">已发货</router-link></li>
				<li><router-link to="/personHome/myOrder/completed">已完成</router-link></li>
				<li><router-link to="/personHome/myOrder/closed">已关闭</router-link></li>
				<li><router-link to="/personHome/myOrder/refund">退款/售后</router-link></li>
			</ul>
			<div class="shows">
				<table>
					<thead>
						<tr>
							<th>商品名称</th>
							<th>规格</th>
							<th>数量</th>
							<th>金额</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody v-if="this.shoppingArr1.length>0 || this.shoppingArr2.length>0 ">
						<tr v-for="(item1,index1) in shoppingArr1" :key="index1">
							<td>{{item1.name}}</td>
							<td>{{item1.guige}}</td>
							<td>{{item1.count}}</td>
							<td>￥{{item1.price}}</td>
							<td><el-tag>略</el-tag></td>
							<td><el-button type="danger" icon="el-icon-delete" circle @click="deletes1(index1)"></el-button></td>
						</tr>
						
						<tr v-for="(item2,index2) in shoppingArr2" :key="index2">
							<td>{{item2.name}}</td>
							<td>{{item2.guige}}</td>
							<td>{{item2.count}}</td>
							<td>￥{{item2.price}}</td>
							<td><el-tag>略</el-tag></td>
							<td><el-button type="danger" icon="el-icon-delete" circle @click="deletes2(index2)"></el-button></td>
						</tr>
					</tbody>
					<tbody v-else>
						<el-empty :image-size="200"></el-empty>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				shoppingArr1:[],
				shoppingArr2:[]
			}
		},
		created() {
			this.shoppingArr1 = this.$store.getters.getNowShop;//获取立即购买列表
			this.shoppingArr2 = this.$store.getters.getShoppingInfo;//获取购物列表
		},
		methods:{
			deletes1(index){
				this.shoppingArr1.splice(index,1);
			},
			deletes2(index){
				this.shoppingArr2.splice(index,1);
			}
		}
	}
</script>

<style scoped="scoped">
	.router-link-active{
		color: black;
		font-weight: bold;
		border-bottom: 2px solid purple;
	}
	.myOrder{
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.shoppingCont{
		width: 90%;
		height: 90%;
		background-color: #fff;
	}
	.ulList{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
		border-bottom:1px solid #ccc ;
	}
	.ulList > li{
		padding: 20px 0px;
	}
	.ulList > li+li{
		margin-left: 16px;
	}
	.ulList > li a{
		padding: 20px 0px;
		color: #555;
		text-decoration: none;
	}
	.shows{
		width: 100%;
		padding: 24px 0px;
	}
	.shows table{
		width: 100%;
		border-collapse: collapse;
	}
	.shows table thead{
		height: 50px;
		background-color: #eee;
		border: 1px solid #ccc;
	}
	.shows table  td{
		text-align: center;
		padding: 12px 16px;
	}
</style>
