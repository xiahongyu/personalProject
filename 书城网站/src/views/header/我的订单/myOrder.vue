<template>
	<div class="myContent">
		<keep-alive><router-view></router-view></keep-alive>
	</div>
</template>

<script>
	export default{
	}
</script>

<style scoped="scoped">
	.myContent{
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
