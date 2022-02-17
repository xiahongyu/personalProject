<template>
	<div id="login">
		<div class="content">
			<h2 style="color: #fff;margin: 16px 0px;">管理员登录</h2>
			<el-avatar :size="100" class="el-icon-user-solid"></el-avatar>
			<el-input v-model="username" placeholder="后台管理员用户名"></el-input>
			<el-input v-model="password" placeholder="后台管理员密码"></el-input>
			<el-button type="danger" @click="logins">登录</el-button>
		</div>
	</div>
</template>
<script>
	import {request} from '../../network/index.js'
	export default{
		  data() {
		    return {
		      username: '',
			  password:'',
			  timer:null,
			  loginList:[],
			  istrue:false
		    }
		  },
		  methods:{
			  logins(){
				clearTimeout(this.timer);
				if(this.username == ''&& this.password == ''){
					this.$message({
						message:'管理员用户名和管理员密码不能为空!',
						type:'warning'
					})
					return;
				}else{
					let that = this;
					that.timer = setTimeout(function(){
						that.istrue =that.loginList.some((item)=>{
							if(item.username.indexOf(that.username)>-1&&item.password.indexOf(that.password)>-1){
								return true;
							}else{return false;}
						});
						if(that.istrue){
							window.localStorage.setItem('loginUser',that.username);
							const loading = that.$loading({
							  lock: true,
							  text: '正在验证中...',
							  spinner: 'el-icon-loading',
							  background: 'rgba(0, 0, 0, 0.7)'
							});
							setTimeout(() => {
							  loading.close();
							  that.$message({message:'登录成功!',type:'success'});
							  that.$router.push('/backstage');
							}, 2000);
						}else{
							that.$message({
								message:'请检查您输入的用户名和密码!',
								type:'warning'
							});
						}
					},800)
				}
			  }
		  },
		  created() {
		  	request({
				url:'login'
			}).then(res=>{
				this.loginList = res.data;
			})
		  }
	}
</script>

<style>
	#login{
		width: 100vw;
		height: 100vh;
		background: url(../../assets/img/background/back2.jpeg) 80% 80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.content{
		width: 500px;
		height: 500px;
		padding: 20px;
		box-shadow: 0 0 4px #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(0,0,0,0.2);
	}
	.content .el-avatar{
		font-size: 40px;
		color: #fff;
		margin-bottom: 10px;
	}
	.content .el-input{
		margin: 10px 0px;
	}
	.content .el-button{
		margin-top: 10px;
		width: 100%;
	}
</style>
