<template>
	<div class="dishDetail">
		<div class="contents">
			<div class="detailContent">
				<div class="detailLeft">
					<img :src="dishDetail.img" alt="">
				</div>
				<div class="detailRight">
					<div class="rightTop">
						<h1>{{dishDetail.title}}</h1>
						<p>{{dishDetail.by}}</p>
					</div>
					<div class="rightCenter">
						<div class="rightdishDetail"><i class="el-icon-dish"></i><span>工艺 <br> <b>{{dishDetail.val1}}</b></span></div>
						<div class="rightdishDetail"><i class="el-icon-dish-1"></i><span>口味 <br> <b>{{dishDetail.val2}}</b></span></div>
						<div class="rightdishDetail"><i class="el-icon-food"></i><span>时间 <br> <b>{{dishDetail.val3}}</b></span></div>
						<div class="rightdishDetail"><i class="el-icon-magic-stick"></i><span>难度 <br> <b>{{dishDetail.val4}}</b></span></div>
					</div>
					<div class="rightBottom">
						<div class="liaodishDetail">
							<div class="liaotop">
								<div class="liao"><span>主料main</span></div>
								<div class="liaoDetail"><span>{{dishDetail.main}}</span></div>
							</div>
						</div>
						<div class="liaodishDetail">
							<div class="liaobottom">
								<div class="liao">辅料others</div>
								<div class="liaoDetail">{{dishDetail.others}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="caozuo">
				 <el-button type="primary" @click="addShopCar(dishDetail.id)" round><i class="el-icon-shopping-cart-2" ></i>加入购物车</el-button>
				 <el-button type="danger"  @click="shoucang(dishDetail.id)" round><i class="el-icon-star-off" ></i>收藏</el-button>
			</div>	
		</div>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				id:this.$route.params.id,
				dishDetail:{}//菜品详情
			}
		},
		methods:{
			addShopCar(index){
				this.$store.commit('addShopCarList',index);
				this.$message({
					message:'加入购物车成功!',
					type:'success'
				})
			},
			shoucang(index){
				this.$store.commit('addMyCollectList',index);
				this.$message({
					message:'收藏成功!',
					type:'success'
				})
			}
		},
		created() {
			request({
				url:'quicklyDish/'+this.id
			}).then(res=>{
				this.dishDetail = res.data
			})
		}
	}
</script>

<style scoped="scoped">
	.dishDetail{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.contents{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.caozuo{
		width: 970px;
		height: 100px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.detailContent{
		width: 1002px;
		height: 524px;
		display: flex;
		justify-content: space-between;
	}
	.detailContent .detailLeft{
		width: 440px;
		height: 100%;
	}
	.detailLeft img{
		width: 100%;
		height: 100%;
	}
	.detailRight{
		width: 500px;
		height: 100%;
		border: 1px dashed orangered;
		padding: 0px 30px;
	}
	.rightTop{
	}
	.rightTop h1,p{
		margin: 14px 0px;
		text-align: left;
	}
	.rightCenter{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.rightCenter .rightdishDetail{
		width: 80px;
		height: 140px;
		box-shadow: 0 0 2px #ccc;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border: 1px solid orangered;
		font-size: 14px;
		color: #888;
	}
	.rightCenter .rightdishDetail i{
		font-size:32px ;
		color: orangered;
		font-weight: bold;
	}
	.rightCenter .rightdishDetail b{
		font-size:17px;
		color: black;
	}
	.rightBottom{
		width: 100%;
	}
	.rightBottom .liaodishDetail{
		width: 100%;
		border-radius: 12px;
		margin-top: 18px;
	}
	.liaotop{
		height: 60px;
		display: flex;
	}
	.liaobottom{
		height: 100px;
		display: flex;
	}
	.liao{
		width: 120px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: yellow;
		font-weight: bold;
		color: black;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
	}
	.liaoDetail{
		width: calc(100% - 120px);
		height: 100%;
		padding: 0px 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #888;
		font-size: 14px;
		text-align: left;
		background-color: #fff;
		border-top-right-radius: 12px;
		border-bottom-right-radius: 12px;
	}
</style>
