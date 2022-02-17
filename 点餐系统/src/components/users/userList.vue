<template>
	<div id="userList">
		<!-- 添加用户 -->
		<div class="addUser">
			<div><el-tag type="primary" @click="addUser" style="cursor: pointer;">添加用户</el-tag></div>
		</div>
		<div v-if="addUserShow">
			<el-dialog title="添加用户" :visible.sync="addUserShow">
				<el-form :model="userInfo">
					<el-form-item label="用户名" :label-width="formLabelWidth">
					  <el-input v-model="adduser.username" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" :label-width="formLabelWidth">
					  <el-input v-model="adduser.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" :label-width="formLabelWidth">
					  <el-input v-model="adduser.cellphone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="邮箱地址" :label-width="formLabelWidth">
					  <el-input v-model="adduser.email" autocomplete="off"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="addUserShow=false">取 消</el-button>
					<el-button type="primary" @click="addUserQue">确 定</el-button>
				</div>
			</el-dialog>
		</div>
		<!-- 用户列表展示 -->
		<div class="userContent">
			<table>
				<thead>
					<tr>
						<th>id号</th>
						<th>姓名</th>
						<th>手机号码</th>
						<th>邮箱地址</th>
						<th>其他</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in tableData" :key="item.id">
						<td>{{item.id}}</td>
						<td>{{item.username}}</td>
						<td>{{item.cellphone}}</td>
						<td>{{item.email}}</td>
						<td><el-tag type="success">已注册</el-tag><el-tag type="danger">管理员</el-tag></td>
						<td>
							<el-button type="danger" round @click="deleteUser(item,index)"><i class="el-icon-delete"></i>删除</el-button>
							<el-button type="primary" round @click="changeUser(item)"><i class="el-icon-edit"></i>修改</el-button>
							<el-button type="success" round @click="lookUser(item)"><i class="el-icon-check"></i>查看</el-button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- 用户修改 -->
		<div v-if="dialogFormVisible">
			<el-dialog title="用户修改" :visible.sync="dialogFormVisible">
			  <el-form :model="userInfo">
				<el-form-item label="用户名" :label-width="formLabelWidth">
				  <el-input v-model="userInfo.username" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth">
				  <el-input v-model="userInfo.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号" :label-width="formLabelWidth">
				  <el-input v-model="userInfo.cellphone" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="邮箱地址" :label-width="formLabelWidth">
				  <el-input v-model="userInfo.email" autocomplete="off"></el-input>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="queding">确 定</el-button>
			  </div>
			</el-dialog>
		</div>
		
		<!-- 查看用户 -->
		<div v-if="lookUserShow" class="lookUser">
			<el-dialog title="用户信息" :visible.sync="lookUserShow">
			  <table>
				<thead>
					<tr>
						<th>id号</th>
						<th>姓名</th>
						<th>手机号码</th>
						<th>邮箱地址</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{{thisUserInfo.id}}</td>
						<td>{{thisUserInfo.username}}</td>
						<td>{{thisUserInfo.cellphone}}</td>
						<td>{{thisUserInfo.email}}</td>
					</tr>
				</tbody>
			  </table>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				addUserShow:false,//添加用户弹出框是否显示
				adduser:{
					"username":null,
					"password":null,
					"cellphone":null,
					"email":null
				},
				tableData:[],//所有用户列表
				dialogFormVisible:false,//修改用户弹出框
				formLabelWidth: '120px',
				userInfo:{//用户信息修改
					"username":null,
					"password":null,
					"cellphone":null,
					"email":null
				},
				lookUserShow:false,//查看用户弹出框
				thisUserInfo:null//查看当前用户
			}
		},
		methods:{
			deleteUser(item,index){//删除用户
				let thisId = item.id;
				this.$confirm('此操作将永久删除数据, 是否继续?', '删除', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
				  this.$message({
					type: 'success',
					message: '删除成功!'
				  });
				  request({
				  	method:'DELETE',
				  	url:'login/'+thisId
				  }).then(res=>{
					  let resData = res.status;
					  if(resData==200||resData==201){
						  this.tableData.splice(index,1);
					  }
				  });
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });          
				});
			},
			changeUser(item){//修改用户
				this.dialogFormVisible = true;
				this.updateId = item.id;
				this.userInfo={//用户信息修改
					"username":item.username,
					"password":item.password,
					"cellphone":item.cellphone,
					"email":item.email
				}
			},
			queding(){//修改用户确定按钮
				var updateOk = null;
				if(this.userInfo.username!=null&&this.userInfo.password!=null&&this.userInfo.cellphone!=null&&this.userInfo.email!=null){
					this.$set(this.userInfo,'id',this.updateId);
					request({
						method:'put',
						url:'login/'+this.updateId,
						data:this.userInfo
					}).then(res=>{updateOk=true}).catch(err=>{updateOk=false});
					 const loading = this.$loading({
					  lock: true,
					  text: '修改中....',
					  spinner: 'el-icon-loading',
					  background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
					  loading.close();
					  this.dialogFormVisible = false;
					  this.tableData.splice(this.updateId-1,1,this.userInfo);
					  if(updateOk){
						  this.$message({
							  message:'当前用户信息修改成功!',
							  type:'success'
						  })
					  }else{
						  this.$message({
							  message:'当前用户信息修改失败!',
							  type:'warning'
						  })
					  }
					}, 1200);
				}else{
					this.$message({message:'修改内容不能为空!',type:'warning'})
				}
			},
			lookUser(item){//查看用户
				this.lookUserShow = true;
				let userObj = {
					"id":item.id,
					"username":item.username,
					"cellphone":item.cellphone,
					"email":item.email
				}
				this.thisUserInfo=userObj;
			},
			addUser(){//添加用户
				this.addUserShow=true;
			},
			addUserQue(){//添加用户确定按钮
				var isHave=false;
				if(this.adduser.username!=null&&this.adduser.password!=null&&this.adduser.cellphone!=null&&this.adduser.email!=null){
					isHave=this.tableData.some((item)=>{
						if(this.adduser.username===item.username){//数据里面已有输入的
							return true; 
						}else{
							return false;
						}
					});
					if(!isHave){
						let maxId=1;
						this.tableData.forEach((item)=>{//找出用户列表中最大的id
							if(item.id>maxId){maxId=item.id}
						});
						const loading = this.$loading({
						  lock: true,
						  text: '正在验证中...',
						  spinner: 'el-icon-loading',
						  background: 'rgba(0, 0, 0, 0.7)'
						});
						setTimeout(() => {
						  loading.close();
						  request({
						  	url:'login',
						  	method:'post',
						  	data:this.adduser
						  }).then(res=>{
						  	if(res.status==201||res.status==200){
						  		this.$message({message:'添加成功',type:'success'});
								this.$set(this.adduser,'id',maxId+1);
								this.tableData.push(this.adduser);
						  	}else{
						  		this.$message({message:'添加失败',type:'danger'})
						  	}
						  })
						  this.addUserShow=false;
						}, 2000);
					}else{
						this.$message({message:'已有该用户名',type:'info'})
						isHave=false
					}
					
				}else{
					this.$message({
						message:'输入内容不能为空!',
						type:'warning'
					})
				}
			}
		},
		created() {
			request({
				url:'login'
			}).then(res=>{
				this.tableData = res.data;
			})
		}
	}
</script>

<style scoped="scoped">
	#userList{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		background-color: #E9EEF3;
	}
	.addUser{
		width: 100%;
		margin: 20px 0px 0px 0px;
		text-align: right;
	}
	.addUser div{
		margin-right: 136px;
	}
	.userContent{
		width: 100%;
		padding: 20px;
	}
	.userContent table, .lookUser table{
		width: 100%;
		border-collapse: collapse;
		border: 1px solid skyblue;
	}
	.userContent tr,.lookUser tr{
		border-top:1px solid skyblue ;
	}
	.userContent tr th,.lookUser th{
		padding: 14px 16px;
		background-color: skyblue;
		color: #fff;
	}
	.userContent tr td , .lookUser td{
		padding: 12px 16px;
	}
</style>
