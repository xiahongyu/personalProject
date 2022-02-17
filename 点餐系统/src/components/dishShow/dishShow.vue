<template>
	<div id="dishShow">
		<!-- 添加菜品 -->
		<div class="addDish">
			<el-tag type="success" @click="addDish"><i class="el-icon-potato-strips"></i>增加菜品</el-tag>
		</div>
		<!-- 添加菜品弹出框 -->
		<div v-if="addDishDialog">
			<el-dialog title="菜品添加" :visible.sync="addDishDialog">
			  <el-form :model="newdish">
				<el-form-item label="名称" :label-width="formLabelWidth">
				  <el-input v-model="newdish.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
				  <el-input v-model="newdish.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="数量" :label-width="formLabelWidth">
				  <el-input v-model="newdish.num" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="工艺" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val1" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="口味" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val2" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="时间" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val3" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="难度" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val4" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="主料" :label-width="formLabelWidth">
				  <el-input type="textarea" v-model="newdish.main"></el-input>
				</el-form-item>
				<el-form-item label="辅料" :label-width="formLabelWidth">
				  <el-input type="textarea" v-model="newdish.others"></el-input>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="addDishDialog = false">取 消</el-button>
				<el-button type="primary" @click="addDishQue">确 定</el-button>
			  </div>
			</el-dialog>
		</div>
		
		<!-- 菜品列表 -->
		<div class="dishTable">
			<table>
				<thead>
					<tr>
						<th>序号</th>
						<th>id号</th>
						<th>名称</th>
						<th>价格</th>
						<th>数量</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody ref="checkboxs">
					<tr v-for="(item,index) in newDishList" :key="item.id">
						<td>{{index+1}}</td>
						<td>{{item.id}}</td>
						<td>{{item.title}}</td>
						<td>￥{{item.price}}</td>
						<td>{{item.num}}</td>
						<td>
							<el-button type="danger" round @click="deleteDish(item)"><i class="el-icon-delete"></i>删除</el-button>
							<el-button type="primary" round @click="changeDish(item)"><i class="el-icon-edit"></i>修改</el-button>
							<el-button type="success" round @click="lookDish(item)"><i class="el-icon-check"></i>查看</el-button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<el-pagination class="tabListPage" background
		 layout="prev,pager,next" :total="dishList.length" 
		 :page-size="this.pageSize"  :current-page.sync="currentPage1">
		  </el-pagination>
		
		<!-- 菜品修改 -->
		<div v-if="dialogFormVisible">
			<el-dialog title="菜品修改" :visible.sync="dialogFormVisible">
			  <el-form :model="newdish">
				<el-form-item label="名称" :label-width="formLabelWidth">
				  <el-input v-model="newdish.title" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="价格" :label-width="formLabelWidth">
				  <el-input v-model="newdish.price" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="数量" :label-width="formLabelWidth">
				  <el-input v-model="newdish.num" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="工艺" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val1" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="口味" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val2" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="时间" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val3" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="难度" :label-width="formLabelWidth">
				  <el-input v-model="newdish.val4" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="主料" :label-width="formLabelWidth">
				  <el-input type="textarea" v-model="newdish.main"></el-input>
				</el-form-item>
				<el-form-item label="辅料" :label-width="formLabelWidth">
				  <el-input type="textarea" v-model="newdish.others"></el-input>
				</el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="queding">确 定</el-button>
			  </div>
			</el-dialog>
		</div>
		
		<!-- 查看当前菜品 -->
		<div v-if="lookDishShow" class="lookDishTable">
			<el-dialog title="菜品信息" :visible.sync="lookDishShow">
			  <table>
				<thead>
					<tr>
						<th>id号</th>
						<th>名称</th>
						<th>价格</th>
						<th>数量</th>
						<th>工艺</th>
						<th>口味</th>
						<th>时间</th>
						<th>难度</th>
						<th>主料</th>
						<th>辅料</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{{thisDishInfo.id}}</td>
						<td>{{thisDishInfo.title}}</td>
						<td>{{thisDishInfo.price}}</td>
						<td>{{thisDishInfo.num}}</td>
						<td>{{thisDishInfo.val1}}</td>
						<td>{{thisDishInfo.val2}}</td>
						<td>{{thisDishInfo.val3}}</td>
						<td>{{thisDishInfo.val4}}</td>
						<td>{{thisDishInfo.main}}</td>
						<td>{{thisDishInfo.others}}</td>
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
				dishList:[],//所有菜品列表
				addDishDialog:false,//添加菜品弹出框
				currentPage1:1,//页数
				pageSize:8,//每页多少条数据
				dialogFormVisible:false,//菜品修改弹出框是否显示
				newdish:{//新菜品列表
					"title":null,
					"price":null,
					"num":null,
					"val1":null,
					"val2":null,
					"val3":null,
					"val4":null,
					"main":null,
					"others":null,
					"img":null
				},
				newDishId:null,//当前修改菜品id
				lookDishShow:false,//查看菜品弹出框
				formLabelWidth: '120px',
				thisDishInfo:null,//查看当前菜品(对象)
				img:null
			}
		},
		methods:{
			addDish(){//添加菜品
				this.addDishDialog = true;
			},
			addDishQue(){
				if(this.newdish.title!=null&&this.newdish.price!=null&&this.newdish.num!=null&&this.newdish.val1!=null
				&&this.newdish.val2!=null&&this.newdish.val3!=null&&this.newdish.val4!=null&&this.newdish.main!=null&&
				this.newdish.others!=null){
					const loading = this.$loading({
					  lock: true,
					  text: '努力加载中...', 
					  spinner: 'el-icon-loading',
					  background: 'rgba(0, 0, 0, 0.7)'
					});
					setTimeout(() => {
					   loading.close();
						let len = this.dishList.length-1;
						let lastId = this.dishList[len].id;
						this.$set(this.newdish,'id',lastId+1);
						request({
							url:'quicklyDish',
							method:'post',
							data:this.newdish
						}).then(res=>{
							let addDistStatus = res.status;
							if(addDistStatus==200||addDistStatus==201){
								this.dishList.push(this.newdish);
								this.$message({message:'添加成功!',type:'success'});
								this.addDishDialog = false;
								this.newdish={//恢复新菜品列表
									"id":null,
									"title":null,
									"price":null,
									"num":null,
									"val1":null,
									"val2":null,
									"val3":null,
									"val4":null,
									"main":null,
									"others":null,
									"img":null
								}
							}else{
								this.$message({message:'添加失败!',type:'danger'});
							}
						})
					}, 1000);
				}else{
					this.$message({message:'输入内容不能为空',type:'warning'})
				}
			},
			deleteDish(item){//删除当前菜品
				this.$confirm('此操作将永久删除数据, 是否继续?', '删除', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning'
				}).then(() => {
				  this.$message({
					type: 'success',
					message: '删除成功!'
				  });
				  let thisIndex = item.id;
				  request({
				  	method:'DELETE',
				  	url:'quicklyDish/'+thisIndex
				  }).then(res=>{});
				  this.dishList.splice(thisIndex-1,1);
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });          
				});
			},
			changeDish(item){//修改菜品
				this.dialogFormVisible = true;
				this.newDishId = item.id;
				this.img = item.img;
			},
			queding(){//修改菜品确定按钮
				var updateOk = null;
				if(this.newdish.title!=null&&this.newdish.price!=null&&this.newdish.num!=null&&this.newdish.val1!=null
					&&this.newdish.val2!=null&&this.newdish.val3!=null&&this.newdish.val4!=null&&this.newdish.main!=null&&
					this.newdish.others!=null){
					request({
						method:'put',
						url:'quicklyDish/'+this.newDishId,
						data:this.newdish
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
					  if(updateOk){
						  this.$message({
							  message:'当前菜品信息修改成功!',
							  type:'success'
						  });
						  this.newdish.id = this.newDishId;
						  this.newdish.img = this.img;
						  this.dishList.splice(this.newDishId-1,1,this.newdish);
						  this.newdish={//恢复新菜品列表原样
						  	"id":null,
						  	"title":null,
						  	"price":null,
						  	"num":null,
						  	"val1":null,
						  	"val2":null,
						  	"val3":null,
						  	"val4":null,
						  	"main":null,
						  	"others":null,
						  	"img":null
						  }
					  }else{
						  this.$message({
							  message:'当前菜品信息修改失败!',
							  type:'warning'
						  })
					  }
					}, 1200);
				}else{
					this.$message({message:'修改内容不能为空!',type:'warning'})
				}
			},
			lookDish(item){
				this.lookDishShow = true;
				let dishObj = {
					"id":item.id,
					"title":item.title,
					"price":item.price,
					"num":item.num,
					"val1":item.val1,
					"val2":item.val2,
					"val3":item.val3,
					"val4":item.val4,
					"main":item.main,
					"others":item.others,
				}
				this.thisDishInfo=dishObj;
			}
		},
		created() {
			request({
				url:'quicklyDish'
			}).then(res=>{
				this.dishList=res.data;
			})
		},
		watch:{
			pageSize(){
				let dataLen = parseInt(this.dishList.length / this.pageSize);
				if(dataLen==0){
					return 1;
				}else{
					return dataLen+1;
				}
			}
		},
		computed:{
			newDishList(){
				return this.dishList.slice((this.currentPage1-1)*this.pageSize,this.currentPage1*this.pageSize);;
			}
		}
	}
</script>

<style scoped="scoped">
	#dishShow{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.addDish{
		margin: 20px 0px;
		text-align: right;
	}
	.addDish .el-tag{
		margin-right: 170px;
		cursor: pointer;
	}
	.dishTable{
		margin-bottom: 30px;
	}
	.dishTable table,.lookDishTable table{
		width: 100%;
		border-collapse: collapse;
		border: 1px solid skyblue;
	}
	.dishTable thead,.lookDishTable thead{
		background-color: darkcyan;
		color: #fff;
	}
	.dishTable tr,.lookDishTable tr{
		border-top: 1px solid skyblue;
	}
	.dishTable th, .dishTable td, .lookDishTable td{
		padding: 14px 16px;
	}
</style>
