<template>
	<div id="additionDetail">
		<div class="locationDiv">
			<h2 v-show="currentIndex>0">您当前所在位置: <span>{{additionIndex}}</span></h2>
			<h2 v-show="currentIndex<0">{{tips}}</h2>
		</div>
		<div class="detailContent">
			<div class="deskItem" v-for="(item,index) in additionList" :key="index" :class="{'thisLocation':currentIndex==index}">
				<div class="desklogo"><i class="el-icon-s-shop"></i></div>
				<p>{{item}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				additionIndex:'',
				additionList:["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015"],
				tips:'您还没有选位置!'
			}
		},
		created() {
			this.additionIndex = this.$store.getters.getNewAttition;
		},
		computed:{
			currentIndex(){
				let index = parseInt(this.additionIndex);
				if(index == 'NaN'){
					return -1
				}else{
					return (index-1);
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#additionDetail{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.thisLocation{
		color: orangered !important;
		font-weight: bold;
	}
	.locationDiv{
		margin: 20px 0px;
	}
	.locationDiv h2{
		color: cornflowerblue;
		display: flex;
		align-items: center;
	}
	.locationDiv h2 > span{
		color: orangered;
	}
	.detailContent{
		width: 1160px;
		box-shadow: 0 0 4px #fefefe,
					0 0 6px #ffffff,
					0 0 10px #ffffff;
		display: flex;
		flex-wrap: wrap;
	}
	.detailContent .deskItem{
		width: 200px;
		height: 180px;
		box-shadow: 0 0 4px #ccc;
		border-radius: 10px;
		margin: 12px 16px;
		color: #eee;
	}
	.deskItem .desklogo,p{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.deskItem .desklogo{
		height: 70%;
		font-size: 50px;
		background-color: skyblue;
	}
	.deskItem p{
		height: 30%;
		font-size: 20px;
		background-color: cornflowerblue;
	}
</style>
