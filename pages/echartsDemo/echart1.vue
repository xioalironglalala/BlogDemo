<template>
	<l-echart ref="chartRef"></l-echart>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import * as echarts from 'echarts'

	// 获取容器的dom元素
	const chartRef = ref(null)
	// echart图表的配置信息
	const Options = ref({})

	const chartType = ['']


	onMounted(() => {
		addPie()
	})

	// 加载饼图结构
	const addPie = async () => {
		const MyPie = await chartRef.value.init(echarts)
		Options.value = {
			title: {
				text: '环形图',
				left: "center",
				// top: "10rpx"
			},
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'horizontal',
				y: 'bottom',
			},
			series: [{
				name: 'Access From',
				type: 'pie',
				radius: ['60%', '90%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 10,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [{
						value: 1048,
						name: 'Search Engine'
					},
					{
						value: 735,
						name: 'Direct'
					},
					{
						value: 580,
						name: 'Email'
					},
					{
						value: 484,
						name: 'Union Ads'
					},
					{
						value: 300,
						name: 'Video Ads'
					}
				]
			}]
		}
		MyPie.setOption(Options.value)
	}

	// 为窗口加上宽度变化事件，当宽高发生改变时，调用echarts的resize()方法，调整图表尺寸
	window.addEventListener('resize', function() {
		chartRef.resize();
	})
</script>

<style scoped>
</style>