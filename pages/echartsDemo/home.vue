<template>
	<view class="content">
		<view class="card">
			<TextInfo></TextInfo>
		</view>
		<view class="card">
			<Ciyun></Ciyun>
		</view>
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
	import Ciyun from './ciyun.vue';
	import ECharts1 from './echart1.vue';
	import ECharts2 from './echart2.vue';
	import TextInfo from './text.vue';
	import Footer from '../components/footer.vue'

	const activeItem = ref('1')

	onMounted(() => {})
</script>

<style scoped>
	.content {
		width: 100vw;
		height: calc(100vh - 92px);
		background-color: #fff;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.card {
		width: calc(100% - 24px);
		margin: 12px;
		border: 1px solid #e3e3e3;
		box-shadow: 0 0 5px #e3e3e3;
	}
</style>