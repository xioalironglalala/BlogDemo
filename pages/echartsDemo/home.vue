<template>
	<view class="content">
		<view class="card">
			<ECharts1></ECharts1>
		</view>
		<view class="card">
			<ECharts2></ECharts2>
		</view>
		<Footer :activeItem="activeItem"></Footer>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import ECharts1 from './echart1.vue';
	import ECharts2 from './echart2.vue';
	import Footer from '../../components/footer.vue'
	import * as echarts from 'echarts'

	const activeItem = ref('1')

	onMounted(() => {})
</script>

<style scoped>
	.content {
		width: 100vw;
		height: 100vh;
	}

	.card {
		width: calc(100% - 24px);
		height: 450px;
		margin: 12px;
		border: 1px solid #e3e3e3;
		border-radius: 8px;
		box-shadow: 0 0 8px #e3e3e3;
	}
</style>