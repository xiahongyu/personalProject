<template>
	<div class="dishAll" @click="dishClick">
		<div class="dishContent">
			<el-carousel :interval="4000" type="card" height="800px" style="width: 1460px;">
			    <el-carousel-item >
					<div class="carouselItem">
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/1.jpg" ></div>
							<p>无油可乐鸡翅<span class="price">￥54</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/2.jpg" ></div>
							<p>蒸鲈鱼<span class="price">￥55</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/3.jpg" ></div>
							<p>西芹山药炒木耳<span class="price">￥40</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/4.jpg" ></div>
							<p>炒合菜<span class="price">￥44</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/5.jpg" ></div>
							<p>萝卜干煎蛋<span class="price">￥49</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/6.jpg" ></div>
							<p>肉参牡蛎煎蛋青菜面<span class="price">￥51</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/7.jpg" ></div>
							<p>凉拌粉丝<span class="price">￥32</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/8.jpg" ></div>
							<p>可乐鸡翅<span class="price">￥60</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/9.jpg" ></div>
							<p>葱爆羊肉<span class="price">￥88</span></p>
						</div>
					</div>
			    </el-carousel-item>
				<el-carousel-item >
					<div class="carouselItem">
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/10.jpg" ></div>
							<p>凉拌海带丝<span class="price">￥30</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/11.jpg" ></div>
							<p>辣子鸡丁<span class="price">￥70</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/12.jpg" ></div>
							<p>毛血旺<span class="price">￥85</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/13.jpg" ></div>
							<p>酸辣土豆丝<span class="price">￥40</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/14.jpg" ></div>
							<p>黄金咖喱虾饭团<span class="price">￥70</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/15.jpg" ></div>
							<p>白切鸡<span class="price">￥88</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/16.jpg" ></div>
							<p>红烧茄子<span class="price">￥36</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/17.jpg" ></div>
							<p>三杯鸡<span class="price">￥79</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/18.jpg" ></div>
							<p>空气炸锅番茄炒蛋<span class="price">￥26</span></p>
						</div>
					</div>
				</el-carousel-item>
				<el-carousel-item >
					<div class="carouselItem">
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/19.jpg" ></div>
							<p>鱼香茄子<span class="price">￥46</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/20.jpg" ></div>
							<p>可乐鸡翅<span class="price">￥77</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/21.jpg" ></div>
							<p>清炒四季时蔬<span class="price">￥36</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/22.jpg" ></div>
							<p>春季时蔬杂素汤<span class="price">￥45</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/23.jpg" ></div>
							<p>四季时蔬西兰花<span class="price">￥39</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/24.jpg" ></div>
							<p>夏季时蔬<span class="price">￥54</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/25.jpg" ></div>
							<p>夏季凉拌时蔬<span class="price">￥40</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/26.jpg" ></div>
							<p>生菜肉末汤<span class="price">￥49</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/27.jpg" ></div>
							<p>清炒小白菜<span class="price">￥30</span></p>
						</div>
					</div>
				</el-carousel-item>
				<el-carousel-item >
					<div class="carouselItem">
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/28.jpg" ></div>
							<p>四季豆炒肉<span class="price">￥59</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/29.jpg" ></div>
							<p>凉拌蒲公英<span class="price">￥45</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/30.jpg" ></div>
							<p>滋补甲鱼汤<span class="price">￥145</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/31.jpg" ></div>
							<p>冰糖炖雪梨<span class="price">￥73</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/32.jpg" ></div>
							<p>玉米饼<span class="price">￥34</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/33.jpg" ></div>
							<p>素三鲜<span class="price">￥33</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/34.jpg" ></div>
							<p>驴打滚<span class="price">￥68</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/35.jpg" ></div>
							<p>香烤口蘑鹌鹑蛋<span class="price">￥66</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/36.jpg" ></div>
							<p>拔丝芋头<span class="price">￥58</span></p>
						</div>
					</div>
				</el-carousel-item>
				<el-carousel-item >
					<div class="carouselItem">
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/37.jpg" ></div>
							<p>汤圆<span class="price">￥60</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/38.jpg" ></div>
							<p>桂花糕<span class="price">￥48</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/39.jpg" ></div>
							<p>干煸四季豆<span class="price">￥41</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/40.jpg" ></div>
							<p>椰蓉香蕉球<span class="price">￥58</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/41.jpg" ></div>
							<p>速食面<span class="price">￥18</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/42.jpg" ></div>
							<p>酱烤鸡腿肉<span class="price">￥47</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/43.jpg" ></div>
							<p>韩式烤牛肉三明治<span class="price">￥37</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/44.jpg" ></div>
							<p>海苔肉松卷<span class="price">￥46</span></p>
						</div>
						<div class="dishItem">
							<div class="dishimg"><img src="../../assets/img/allDish/45.jpg" ></div>
							<p>萝卜干煎蛋<span class="price">￥39</span></p>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			dishClick(){
				clearTimeout(this.timer);
				this.timer = setTimeout(()=>{
					this.$message({
						message:'本页只提供食物参考，下单还请去全部类别中点餐!',
					})
				},1200)
			},
		},
		data() {
			return {
				timer:''
			};
		}
	}
</script>

<style scoped="scoped">
	.dishAll{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dishContent{
		width: 1560px;
		height: 900px;
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	.dishItem{
		width: 220px;
		height: 230px;
		border: 1px solid #ccc;
		border-radius: 10px;
		margin: 10px;
	}
	.dishimg{
		width: 100%;
		height: 186px;
	}
	.dishimg img{
		width: 100%;
		height: 100%;
	}
	.dishItem p{
		display: flex;
		justify-content: space-between;
		padding: 10px 4px;
		color: #fff;
	}
	.dishItem p:hover{
		color: palevioletred;
		transition: all 0.3s;
	}
	.price{
		font-size: 20px;
		color: gold;
	}
	.carouselItem{
		width: 100%;
		height: 800px;
		display: flex;
		flex-wrap: wrap;
		background-color:brown;
	}
</style>
