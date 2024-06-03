<template>
	<view class="charts-box">
		<div class="card-title">2024热词</div>
		<qiun-data-charts type="word" :opts="opts" :chartData="chartData" />
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'

	let chartData = ref({});
	//您可以通过修改 config-ucharts.js 文件中下标为 ['pie'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
	let opts = ref({
		color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
		padding: undefined,
		enableScroll: false,
		extra: {
			word: {
				type: "normal",
				autoColors: false
			}
		}
	});
	onMounted(() => {
		getServerData()
	})

	function getServerData() {
		setTimeout(() => {
			//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
			let res = {
				series: [{
						name: "火影忍者",
						textSize: 25,
						data: undefined
					},
					{
						name: "进击的巨人",
						textSize: 20,
						data: undefined
					},
					{
						name: "鬼灭之刃",
						textSize: 20,
						data: undefined
					},
					{
						name: "名侦探柯南",
						textSize: 20,
						data: undefined
					},
					{
						name: "一拳超人",
						textSize: 20,
						data: undefined
					},
					{
						name: "东京食尸鬼",
						textSize: 20,
						data: undefined
					},
					{
						name: "海贼王",
						textSize: 20,
						data: undefined
					},
					{
						name: "龙珠",
						textSize: 20,
						data: undefined
					},
					{
						name: "银魂",
						textSize: 20,
						data: undefined
					},
					{
						name: "刀剑神域",
						textSize: 20,
						data: undefined
					},
					{
						name: "命运石之门",
						textSize: 20,
						data: undefined
					},
					{
						name: "斩赤红之瞳",
						textSize: 20,
						data: undefined
					}
				]
			};
			chartData.value = JSON.parse(JSON.stringify(res));
		}, 500);
	}

	// 为窗口加上宽度变化事件，当宽高发生改变时，调用echarts的resize()方法，调整图表尺寸
	// window.addEventListener('resize', function() {
	// 	chartRef.resize();
	// })
</script>

<style scoped>
	.card-title {
		padding: 6px 12px;
		background-color: #94bcff;
	}

	.charts-box {
	/* 	width: 100%; */
		/* height: 300px; */
	}
</style>