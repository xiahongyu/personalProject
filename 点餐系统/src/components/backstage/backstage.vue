<template>
	<div id="backstage">
		<el-container>
		  <el-aside width="200px">
			   <el-menu
			        default-active="2"
			        class="el-menu-vertical-demo"
			        background-color="#545c64"
			        text-color="#fff"
			        active-text-color="#ffd04b" style="height: 100%;">
			        <el-submenu index="1">
			          <template slot="title">
			            <i class="el-icon-eleme"></i>
			            <span>基本应用</span>
			          </template>
			          <el-menu-item-group>
			            <el-menu-item index="1-1"><router-link to="/dishShow">菜品列表</router-link></el-menu-item>
			          </el-menu-item-group>
			        </el-submenu>
					
					<el-submenu index="2">
					  <template slot="title">
					    <i class="el-icon-user"></i>
					    <span>用户信息</span>
					  </template>
					  <el-menu-item-group>
					    <el-menu-item index="2-1"><router-link to="/userList">用户列表</router-link></el-menu-item>
					  </el-menu-item-group>
					</el-submenu>
			      </el-menu>
		  </el-aside>
		  <el-container>
		    <el-header>
				<div class="welcome">
					<p v-if="isshow">欢迎您 {{userName}}</p>
					<p v-else>您还没有登录</p>
				</div>
				<div class="user">
					<el-dropdown>
					  <span class="el-dropdown-link">
						<i class="el-icon-arrow-down el-icon-user-solid" style="font-size: 30px;"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item><span  @click="backLogin">退出登录</span></el-dropdown-item>
					    <el-dropdown-item><span  @click="personCenter">个人中心</span></el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
			<div class="navbar">
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item v-for="item in breadList" :key="item.path">
					 <router-link :to="item.path">{{item.meta.title}}</router-link>
				  </el-breadcrumb-item>
				</el-breadcrumb>
			</div>
		    <el-main>
				<div class="navHome" v-show="$route.path=='/backstage'">
					<div class="elert"><el-alert title="欢迎使用!" type="success" center show-icon></el-alert></div>
					<div class="navContent">
						<div class="navItem" @click="basicRouter">
							<i class="el-icon-eleme"></i>
							<p>菜品列表</p>
						</div>
						<div class="navItem" @click="userRouter">
							<i class="el-icon-user"></i>
							<p>用户列表</p>
						</div>
					</div>
				</div>
				<router-view></router-view>
			</el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				userName:null
			}
		},
		methods:{
			backLogin(){//退出登录
				window.localStorage.removeItem('loginUser');
				this.$router.push('/login');
			},
			personCenter(){//个人中心
				this.$router.push('/userList');
			},
			basicRouter(){
				this.$router.push('/dishShow')
			},
			userRouter(){
				this.$router.push('/userList')
			},
		},
		created() {
			this.userName = window.localStorage.getItem('loginUser');
		},
		computed:{
			isshow(){
				if(this.userName==null||this.userName==''){
					return false;
				}else{
					return true;
				}
			},
			breadList(){//面包屑
				return this.$route.matched;
			}
		}
	}
</script>

<style scoped="scoped">
	#backstage{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.el-container{
		height: 100%;
		position: relative;
	}
	.el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
	  .el-header{
		  position: relative;
	  }
	  .el-aside {
	    background-color: #D3DCE6;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
	    background-color: #E9EEF3;
	    color: #333;
	    text-align: center;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  .navbar{
		width: 100%;
		padding: 10px 20px;
		position: absolute;
		top: 65px;
		left: 0px;
	  }
	  .user{
		  position: absolute;
		  top: 0px;
		  right: 60px;
	  }
	  .el-dropdown-link {
	      cursor: pointer;
	      color: #409EFF;
	    }
	    .el-icon-arrow-down {
	      font-size: 12px;
	    }
		.welcome{
			position: absolute;
			top: 0;
			left: 10px;
			font-size: 18px;
		}
		.welcome p{
			padding-left: 20px;
		}
		.el-menu a{
			color: #fff;
		}
		.el-menu .router-link-active{
			color: deepskyblue;
		}
		.navHome{
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.elert{
			height: 50px;
			margin-top: 40px;
		}
		.navContent{
			width: 100%;
			height: 400px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: lightblue;
		}
		.navItem{
			width: 300px;
			height: 300px;
			border-radius: 14px;
			box-shadow: 0 0 4px #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transform: scale(1);
			transition: all 0.3s linear;
			font-size: 28px;
			color: orangered;
			font-weight: bold;
			margin: 0px 30px;
		}
		.navItem i{
			font-size: 80px;
			margin-bottom: 30px;
		}
		.navItem:hover{
			color: #fff;
			transform: scale(1.1);
			transition: all 0.4s linear;
		}
</style>
