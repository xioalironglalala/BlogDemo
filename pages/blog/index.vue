<template>
	<!-- <uni-section title="分隔线通栏" type="line"> -->
	<uni-list border-full>
		<uni-list-item v-for="item in blogList" :title="item.title" note="列表描述都是空" :rightText="item.update_time"
			clickable @click="toDetail(item)" />
	</uni-list>
	<!-- </uni-section> -->
	<Footer :activeItem="activeItem"></Footer>
</template>

<script setup>
	import {
		ref,
		onMounted,
		computed
	} from 'vue'
	import request from '@/utils/request';
	import Footer from '../components/footer.vue'
	const activeItem = ref('2')
	let blogList = ref([])

	onMounted(() => {
		getData()
	})

	async function getData() {
		debugger
		const response = await request({
			url: 'http://api.aiwusihan.top/api/BlogViewSet/',
			method: 'GET',
			data: {},

		});
		debugger
		if (response.code != '2000') {
			console.log('请求失败', response.msg);
			return;
		}
		blogList.value = response.data;

	}

	function toDetail(data) {
		debugger
		uni.navigateTo({
			url: `/pages/blog/blogDetail?title=${data.title}&creator=${data.creator}`
		});
	}
</script>

<style>
</style>