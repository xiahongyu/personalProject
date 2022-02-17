<template>
	<div id="newAddition">
			<div class="additionContent">
				<div class="logo"><img src="../../assets/img/logo.jpeg" ></div>
				<div class="contents">
					 <el-select v-model="nums" placeholder="请选择" width="100%">
					     <el-option
					       v-for="item in cities"
					       :key="item.label"
					       :label="item.label"
					       :value="item.label">
					       <span style="float: left">{{ item.label }}</span>
					       <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
					     </el-option>
					   </el-select>
					  <el-button type="danger"  @click="newAddition">开台</el-button>
				</div>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cities: [
					{value: '靠左',label: '001'}, 
					{value: '居中',label: '002'}, 
					{value: '靠左',label: '003'},
					{value: '居中',label: '004'}, 
					{value: '靠左',label: '005'}, 
					{value: '居中',label: '006'},
					{value: '靠左',label: '007'},
					{value: '居中',label: '008'},
					{value: '靠左', label: '009'},
					{value: '居中',label: '010'},
					{value: '靠右',label: '011'},
					{value: '靠右',label: '012'},
					{value: '靠右',label: '013'},
					{value: '靠右',label: '014'},
					{value: '靠右',label: '015'}
				],
				nums:''
			}
		},
		methods:{
			newAddition(){
				if(this.nums !=''){
					this.$store.commit('newaddition',this.nums);//开台
					const loading = this.$loading({
					  lock: true,
					  text: '正在开台中...',
					  spinner: 'el-icon-loading',
					  background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
					  loading.close();
					  this.$router.push('/home');
					  this.$message({
						message:'开台成功!',
						type:'success'
					  })
					}, 1000);
				}else{
					this.$message({
						message:'请选择开台号!',
						type:'warning'
					})
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#newAddition{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: url(../../assets/img/background/back.jpeg)  no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.additionContent{
		width: 430px;
		height: 600px;
		padding: 0px 30px;
		box-shadow: 0 0 4px #ccc;
		background-color: rgba(0,0,0,0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.el-select{
		width: 100%;
	}
	.logo{
		width: 200px;
		height: 200px;
		box-shadow: 0 0 4px #fff;
		border-radius: 10px;
	}
	.logo img{
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	.contents{
		width: 100%;
		padding: 12px 0px;
		margin-top: 20px;
	}
	.contents .el-button{
		width: 100%;
		margin-top: 20px;
	}
</style>
