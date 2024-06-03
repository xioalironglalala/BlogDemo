<template>
	<div class="no-data-container">
		<img class="no-data-image" src="../../assets/noData.png" alt="No Data" />
		<p class="no-data-text">暂无数据</p>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';
</script>

<style scoped>
	.no-data-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
	}

	.no-data-image {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.no-data-text {
		font-size: 16px;
		color: #888;
	}
</style>