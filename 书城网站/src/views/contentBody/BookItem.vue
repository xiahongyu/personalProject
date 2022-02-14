<template>
	<div class="bookContent">
		<div class="booksDiv">
			<header><h3>2022年杂志征订</h3><span></span></header>
			<div class="contentDiv">
				<router-link :to="'/BookItem/bookDetail/'+item.id" v-for="(item,index) in bookList1" :key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="item.imgurl" alt=""></div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
			</div>
		</div>
		
		<div class="booksDiv">
			<header><h3>读书月2021“年度十大童书”</h3><span></span></header>
			<div class="contentDiv">
				<router-link :to="'/BookItem/bookDetail/'+item.id" v-for="(item,index) in bookList2" :key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="item.imgurl" alt=""></div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
			</div>
		</div>
		
		<div class="booksDiv">
			<header><h3>新品尝鲜</h3><span></span></header>
			<div class="contentDiv">
				<router-link to="/BookItem/bookDetail/11">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/11.jpg" alt=""></div>
						<p class="titles">宏观经济学(第2版)</p>
						<p class="author">(美)达龙·阿西莫...</p>
						<p class="prices"><span class="price">￥44.45</span><span class="oldprice">￥50.04</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/12">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/12.jpg" alt=""></div>
						<p class="titles">短史记</p>
						<p class="author">谌旭彬 杨津涛</p>
						<p class="prices"><span class="price">￥35.55</span><span class="oldprice">￥45.85</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/13">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/13.jpg" alt=""></div>
						<p class="titles">我能有什么坏心思呢</p>
						<p class="author">[加] 乔舒亚·巴克曼</p>
						<p class="prices"><span class="price">￥66.64</span><span class="oldprice">￥89.80</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/14">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/14.jpg" alt=""></div>
						<p class="titles">上校的大衣</p>
						<p class="author">罗尔德·达尔</p>
						<p class="prices"><span class="price">￥56.14</span><span class="oldprice">￥69.85</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/15">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/15.jpg" alt=""></div>
						<p class="titles">世界开始的地方</p>
						<p class="author">杜鲁门？卡波特|译者:伏波</p>
						<p class="prices"><span class="price">￥43.12</span><span class="oldprice">￥59.85</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/16">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/16.jpg" alt=""></div>
						<p class="titles">我的邻居是妖怪</p>
						<p class="author">天下霸唱</p>
						<p class="prices"><span class="price">￥52.36</span><span class="oldprice">￥59.95</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/17">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/17.jpg" alt=""></div>
						<p class="titles">月光武士</p>
						<p class="author">虹影</p>
						<p class="prices"><span class="price">￥62.36</span><span class="oldprice">￥79.45</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/18">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/18.jpg" alt=""></div>
						<p class="titles">烟与镜：尼尔·盖曼...</p>
						<p class="author">（英）尼尔·盖曼</p>
						<p class="prices"><span class="price">￥62.36</span><span class="oldprice">￥79.45</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/19">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/19.jpg" alt=""></div>
						<p class="titles">暂坐</p>
						<p class="author">贾平凹</p>
						<p class="prices"><span class="price">￥64.86</span><span class="oldprice">￥72.95</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/20">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/20.jpg" alt=""></div>
						<p class="titles">文城</p>
						<p class="author">余华</p>
						<p class="prices"><span class="price">￥64.86</span><span class="oldprice">￥72.95</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/1">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/1.jpg" alt=""></div>
						<p class="titles">2月刊起订【2-7岁...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥288</span><span class="oldprice">￥336</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/2">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/2.jpg" alt=""></div>
						<p class="titles">9-15岁】《少年...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥399</span><span class="oldprice">￥420</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/3">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/3.jpg" alt=""></div>
						<p class="titles">【6-15岁】《万物...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥445</span><span class="oldprice">￥490</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/4">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/4.jpg" alt=""></div>
						<p class="titles">【8-15岁】《十...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥498</span><span class="oldprice">￥567</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/5">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/5.jpg" alt=""></div>
						<p class="titles">《三联生活周刊》...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥344</span><span class="oldprice">￥364</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/6">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/6.jpg" alt=""></div>
						<p class="titles">【3月起订 7-12岁】...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥247</span><span class="oldprice">￥260</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/7">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/7.jpg" alt=""></div>
						<p class="titles">【3月起订 6-12岁】...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥380</span><span class="oldprice">￥400</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/8">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/8.jpg" alt=""></div>
						<p class="titles">【9-16岁】《...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥237</span><span class="oldprice">￥350</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/9">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/9.jpg" alt=""></div>
						<p class="titles">【6-12岁】《栩栩...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥399</span><span class="oldprice">￥600</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/10">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/10.jpg" alt=""></div>
						<p class="titles">【8-15岁】《十...</p>
						<p class="author"></p>
						<p class="prices"><span class="price">￥342</span><span class="oldprice">￥360</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/100">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/01.jpg" alt=""></div>
						<p class="titles">听月亮的女孩</p>
						<p class="author">[澳]丽莎·尼科尔</p>
						<p class="prices"><span class="price">￥28</span><span class="oldprice">￥35</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/102">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/02.jpg" alt=""></div>
						<p class="titles">一个迷路时才遇见...</p>
						<p class="author">陈诗哥</p>
						<p class="prices"><span class="price">￥28</span><span class="oldprice">￥43</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/103">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/03.jpg" alt=""></div>
						<p class="titles">大大的城市,小小的你</p>
						<p class="author">[加]西德尼·史密斯</p>
						<p class="prices"><span class="price">￥35</span><span class="oldprice">￥50</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/104">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/04.jpg" alt=""></div>
						<p class="titles">我讲的故事都不是真的</p>
						<p class="author">薛涛,[英]郁蓉</p>
						<p class="prices"><span class="price">￥39</span><span class="oldprice">￥45</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/105">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/05.jpg" alt=""></div>
						<p class="titles">深海浅说</p>
						<p class="author">汪品先</p>
						<p class="prices"><span class="price">￥49</span><span class="oldprice">￥60</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/106">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/06.jpg" alt=""></div>
						<p class="titles">故事便利店</p>
						<p class="author">骆以军|责编:陈静</p>
						<p class="prices"><span class="price">￥54</span><span class="oldprice">￥65</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/107">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/07.jpg" alt=""></div>
						<p class="titles">环球追捕</p>
						<p class="author">（法）桑德哈·勒布伦</p>
						<p class="prices"><span class="price">￥48</span><span class="oldprice">￥58</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/108">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/08.jpg" alt=""></div>
						<p class="titles">十大案件</p>
						<p class="author">（法）微软哈·勒布伦</p>
						<p class="prices"><span class="price">￥30</span><span class="oldprice">￥59</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/109">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/09.jpg" alt=""></div>
						<p class="titles">十个脚趾去旅行</p>
						<p class="author">[波兰]伊娃娜·奇米勒斯卡/p>
						<p class="prices"><span class="price">￥54</span><span class="oldprice">￥70</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/110">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/bookItem/010.jpg" alt=""></div>
						<p class="titles">于谦：人间可爱</p>
						<p class="author">于谦</p>
						<p class="prices"><span class="price">￥64</span><span class="oldprice">￥70</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/201">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/caiNiLikes/1.jpg" alt=""></div>
						<p class="titles">也许你该找个人聊聊</p>
						<p class="author">[美]洛莉·戈特利布</p>
						<p class="prices"><span class="price">￥56</span><span class="oldprice">￥67</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/202">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/caiNiLikes/2.jpg" alt=""></div>
						<p class="titles">气候经济与人类未来</p>
						<p class="author">比尔·盖茨</p>
						<p class="prices"><span class="price">￥59</span><span class="oldprice">￥68</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/203">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/caiNiLikes/3.jpg" alt=""></div>
						<p class="titles">刘擎西方现代思想讲义</p>
						<p class="author">刘擎</p>
						<p class="prices"><span class="price">￥45</span><span class="oldprice">￥66</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/204">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/caiNiLikes/4.jpg" alt=""></div>
						<p class="titles">赛雷三分钟漫画中...</p>
						<p class="author">赛雷</p>
						<p class="prices"><span class="price">￥43</span><span class="oldprice">￥50</span></p>
					</div>
				</router-link>
				<router-link to="/BookItem/bookDetail/205">
					<div class="contentItem" >
						<div class="imgs"><img src="../../assets/img/caiNiLikes/5.jpg" alt=""></div>
						<p class="titles">人间清醒</p>
						<p class="author">梁晓声</p>
						<p class="prices"><span class="price">￥44</span><span class="oldprice">￥60</span></p>
					</div>
				</router-link>
			</div>
		</div>
		
		<div class="booksDiv">
			<header class="cainiLike"><span class="likes">猜你喜欢</span></header>
			<div class="contentDiv">
				<router-link :to="'/BookItem/bookDetail/'+item.id" v-for="(item,index) in bookList3" :key="index">
					<div class="contentItem">
						<div class="imgs"><img :src="item.imgurl" alt=""></div>
						<p class="titles">{{item.title | slices}}</p>
						<p class="author">{{item.author}}</p>
						<p class="prices"><span class="price">￥{{item.price}}</span><span class="oldprice">￥{{item.oldprice}}</span></p>
					</div>
				</router-link>
				<!-- <div class="contentItem" >
					<div class="imgs"><img src="../../assets/img/caiNiLikes/1.jpg" alt=""></div>
					<p class="titles">技法卢卡斯的积分了</p>
					<p class="author">葬送速度</p>
					<p class="prices"><span class="price">123</span><span class="oldprice">233</span></p>
				</div> -->
			</div>
		</div>
		
	</div>
</template>

<script>
	import {request} from '../../network/index.js'
	export default{
		data(){
			return{
				bookList1:[],
				bookList2:[],
				bookList3:[]
			}
		},
		created() {
			request({
				url:'bookInfo',
			}).then(res=>{
				this.bookList1 = res.data.slice(0,10);
				this.bookList2 = res.data.slice(10,20);
				this.bookList3 = res.data.slice(20,25);
			}).catch(err=>{console.log(err)});
		},
		filters:{
			slices(value){
				return value.slice(0,13)+"...";
			},
		}
	}
</script>

<style scoped="scoped">
	.bookContent{
		width: 100vw;
		background-color: #F6F6F6;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 0px;
	}
	.booksDiv{
		width: 1200px;
	}
	.booksDiv header{
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.booksDiv header span:last-child{
		cursor: pointer;
	}
	.booksDiv header span:last-child:hover{
		color: skyblue;
		font-weight: bold;
	}
	.booksDiv .contentDiv{
		width: 100%;
		padding: 20px 10px;
		background-color: #fff;
		border-radius: 6px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.booksDiv .contentDiv a{
		color: #333;
		margin-bottom: 24px;
	}
	.booksDiv .contentDiv a:hover{
		color: deepskyblue;
		transition: all 0.3s;
	}
	.contentItem{
		width: 200px;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 6px;
		box-shadow: 0 0 4px #ccc ;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		cursor: pointer;
	}
	.contentItem .imgs{
		width: 100%;
		height: 200px;
	}
	.contentItem .imgs img{
		width: 100%;
		height: 100%;
	}
	.contentItem .titles, .author{
		margin: 5px 0px;
		font-size: 14px;
	}
	.contentItem .prices{
		text-align: center;
	}
	.contentItem .prices span{
		margin: 0px 6px;
	}
	.contentItem .price{
		font-size: 18px;
		color: red;
		font-weight: bold;
	}
	.oldprice{
		font-size: 14px;
		color: #ccc;
		text-decoration: line-through;
	}
	.cainiLike{
		border-bottom: 2px solid #ccc;
	}
	.cainiLike .likes{
		border-bottom: 2px solid purple;
		padding: 10px;
	}
</style>
