<template>
	<view class="charts-box">
		<div class="card-title">雨量数据</div>
		<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
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
		color: ["#FAC858", "#EE6666", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
		padding: [15, 15, 0, 5],
		enableScroll: false,
		legend: {},
		xAxis: {
			disableGrid: true
		},
		yAxis: {
			data: [{
				min: 0
			}]
		},
		extra: {
			column: {
				type: "group",
				width: 30,
				activeBgColor: "#000000",
				activeBgOpacity: 0.08,
				linearType: "custom",
				seriesGap: 5,
				linearOpacity: 0.5,
				barBorderCircle: true,
				customColor: [
					"#FA7D8D",
					"#EB88E2"
				]
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
				categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
				series: [{
						name: "降雨量 (mm)",
						data: [100, 120, 110, 130, 140, 150]
					},
					{
						name: "积水量 (m³)",
						data: [500, 550, 600, 650, 700, 750]
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
		background-color: #87d7ff3d;
		border-radius: 8px 8px 0 0;
	}

	.charts-box {
		width: 100%;
		/* height: 300px; */
	}
</style>