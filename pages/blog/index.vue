<template>
	<div class="page-body">
		<div class="page-search">
			<uni-easyinput suffixIcon="search" v-model="searchInfo" placeholder="搜索..."
				@iconClick="search"></uni-easyinput>
		</div>
		<uni-list border-full>
			<uni-list-item v-for="item in blogList" :key="item.id" :title="item.title" :note="item.description"
				:rightText="item.update_datetime" clickable @click="toDetail(item)" />
		</uni-list>
		<NoData v-if='!blogList.length'></NoData>
		<div class="uni-pages">
			<uni-pagination :show-icon="true" :total="pageSetting.total" :current="pageSetting.current"
				@change="changePage" />
		</div>
		<Footer :activeItem="activeItem"></Footer>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		computed
	} from 'vue';
	import request from '@/utils/request';
	import Footer from '../components/footer.vue';

	const activeItem = ref('2');
	const searchInfo = ref(''); // 搜索
	const blogList = ref([]); // 博客列表
	const pageSetting = ref({
		current: 1,
		total: 0,
		pageSize: 5
	});
	const hasData = computed(() => blogList.value.length === 0);

	onMounted(() => {
		getData();
	});

	function search() {
		pageSetting.value.current = 1;
		getData();
	}

	function changePage(e) {
		pageSetting.value.current = e.current;
		getData();
	}

	async function getData() {
		const params = {
			search: searchInfo.value,
			page: pageSetting.value.current,
			limit: pageSetting.value.pageSize
		};
		try {
			const response = await request({
				url: 'http://api.aiwusihan.top/api/BlogViewSet/',
				method: 'GET',
				data: params,
			});
			debugger
			if (response.code != '2000') {
				console.log('请求失败', response.msg);
				blogList.value = [];
				pageSetting.value.total = 0;
			} else {
				blogList.value = response.data;
				pageSetting.value.total = response.total;
			}
		} catch (error) {
			console.error('请求失败', error);
			blogList.value = [];
			pageSetting.value.total = 0;
		}
	}

	function toDetail(data) {
		uni.navigateTo({
			url: `/pages/blog/blogDetail?title=${data.title}&creator=${data.creator}`
		});
	}
</script>

<style scoped>
	.page-body {
		height: calc(100vh - 92px);
		background: #fff;
		display: flex;
		flex-direction: column;
	}

	.page-search {
		padding: 12px;
	}

	.uni-pages {
		margin: auto 0 36px 0;
	}
</style>