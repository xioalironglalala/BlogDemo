<template>
	<view class="blog">
		<h3 class="title">{{ data.title }}</h3>
		<div class="blog-info">
			<span v-for="item,index in match">{{index}}:{{data[item]}}</span>
		</div>
		<div class="content"><rich-text :nodes="data.content"></rich-text></div>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		computed,
	} from 'vue'
	import request from '@/utils/request';
	import 'quill/dist/quill.snow.css';
	import {
		onLoad
	} from '@dcloudio/uni-app';

	onMounted(() => {
		getData()
	})
	debugger
	let data = ref({})
	let params = {}
	const match = ref({
		作者: 'creator_name',
		最后更新时间: 'update_datetime'
	})

	onLoad((options) => {
		params.title = options.title
		params.creator = options.creator
	});

	async function getData() {
		debugger
		const response = await request({
			url: 'http://api.aiwusihan.top/api/BlogViewSet/',
			method: 'GET',
			data: params,

		});
		debugger
		if (response.code != '2000') {
			console.log('请求失败', response.msg);
			return;
		}
		data.value = response.data[0];
	}
</script>

<style lang="less" scoped>
	.blog {
		padding: 20rpx;
		background: #fff;
		height: calc(100vh - 44px);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.title {
		font-weight: bold;
		color: #333;
		margin-bottom: 20rpx;
	}

	.blog-info {
		font-size: 10px;
		color: #777;
		display: flex;
		justify-content: flex-start;
	}

	.blog-info span {
		padding-right: 22px;
	}

	.content {
		margin: 12px;
		flex: 1;
		overflow: scroll;
	}
</style>