<template>
	<!-- 	<view class="content">
		<view class="card"> -->
	<!-- <button style="float:right" @click="change">{{type}}</button> -->
	<button class="changeButton" @click="change">{{type}}</button>
	<l-echart ref="chartRef"></l-echart>
	<!-- 	</view>
	</view> -->
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import * as echarts from 'echarts'
	let type = ref('line')
	// 获取容器的dom元素
	const chartRef = ref(null)
	// echart图表的配置信息
	const Options = ref({})

	const chartType = ['']


	onMounted(() => {
		addPie(type.value)
	})

	// 加载饼图结构
	const addPie = async (typeC) => {
		const MyPie = await chartRef.value.init(echarts)
		Options.value = {
			title: {
				text: '折线图',
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
			xAxis: {
				type: 'category',
				data: ['1 月 ', '2 月 ', '3 月 ', '4 月 ', '5 月 ', '6 月 ', '7 月 ', '8 月 ', '9 月 ', '10 月 ',
					'11 月 ', '12 月 '
				]
			},
			yAxis: {
				type: 'value',
			},
			series: [{
				name: 'Access From',
				type: typeC,
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
				data: [300, 280, 90, 100, 80, 70, 140, 130, 90, 100, 80, 60]
			}]
		}
		MyPie.setOption(Options.value)
	}

	// 为窗口加上宽度变化事件，当宽高发生改变时，调用echarts的resize()方法，调整图表尺寸
	window.addEventListener('resize', function() {
		MyPie.resize();
	})

	function change() {
		console.log('点击事件')
		debugger
		type.value == 'line' ? type.value = 'bar' : type.value = 'line'
		addPie(type.value)
	}
</script>

<style scoped>
	.changeButton {
		float: right;
		z-index: 9999999;
		margin: 6px;
	}
</style>