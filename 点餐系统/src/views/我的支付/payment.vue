<template>
	<div id="payment">
		<div class="paymentContent" v-if="isShow">
			<div class="paymentTop">
				<span><i class="el-icon-check"></i></span>
				<h3>支付成功!</h3>
			</div>
			<p>您的评价是我们的动力!</p>
			<div class="paymentCenter">
				 <el-checkbox-group v-model="evals" size="medium">
				  <el-checkbox-button type="warning" v-for="(item,index) in evaluation" :label="item" :key="index">{{item}}</el-checkbox-button>
				</el-checkbox-group>
			</div>
			<div class="paymentBottom">
				<span>星级评价：</span>
				<el-rate v-model="value1"></el-rate>
			</div>
			<div class="welcome">
				<p>感谢您的使用，欢迎下次光临</p>
				<el-button type="danger" @click="returnHome" plain>点我回首页</el-button>
			</div>
		</div>
		<div class="noPayment" v-else>
			<el-empty description="您还没有下单支付哦!">
			  <el-button type="primary" @click="nowOrder">立即点餐</el-button>
			</el-empty>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				evaluation:["菜品齐全","食材新鲜","味道赞","服务好","价格便宜"],
				evals:[''],
				value1:null,
				isShow:false
			}
		},
		methods:{
			returnHome(){
				this.$router.push('/home');
			},
			checkDishOrder(){
				this.drawer = true;
			},
			nowOrder(){
				this.$router.push('/hotSell')
			}
		},
		created() {
			this.isShow = this.$store.getters.getNowPayOk;
		}
	}
</script>

<style scoped="scoped">
	#payment{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.paymentContent{
		width: 500px;
		padding: 20px 30px;
		background-color: #fff;
	}
	.noPayment{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.paymentTop{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.paymentTop span{
		font-size: 50px;
		color: lightgreen;
		font-weight: bold;
		margin-right: 20px;
	}
	.paymentContent p{
		margin: 20px 0px;
	}
	.paymentBottom{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px auto;
	}
	.welcome p{
		margin: 30px 0px;
	}
</style>
