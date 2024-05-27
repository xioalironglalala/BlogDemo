<template>
	<view class="container">
		<view class="info-list">
			<view class="info-item">
				<text class="label">姓名</text>
				<text class="value">{{ name }}</text>
			</view>
			<view class="info-item">
				<text class="label">部门名称</text>
				<text class="value">{{ dept_info.dept_name }}</text>
			</view>
			<view class="info-item">
				<text class="label">角色</text>
				<view class="value">
					<view v-for="role in role_info" :key="role.id">{{ role.name }}</view>
				</view>
			</view>
		</view>
	</view>
	<Footer :activeItem="activeItem"></Footer>
</template>

<script setup>
	import {
		ref,
		onMounted,
		computed
	} from 'vue'
	import Footer from '../components/footer.vue'
	const activeItem = ref('3')
	const storedUserInfo = JSON.parse(uni.getStorageSync('userInfo'));
	const userInfo = ref(storedUserInfo);
	const name = computed(() => userInfo.value.name);
	const dept_info = computed(() => userInfo.value.dept_info);
	const role_info = computed(() => userInfo.value.role_info);
</script>

<style>
	.container {
		background-color: #f8f8f8;
		/* min-height: 100vh; */
	}

	.header {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 20px;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
		background-color: #fff;
	}

	.info-list {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 8px;
		overflow: hidden;
	}

	.info-item {
		display: flex;
		justify-content: space-between;
		padding: 15px 20px;
		border-bottom: 1px solid #eee;
	}

	.info-item:last-child {
		border-bottom: none;
	}

	.label {
		font-weight: bold;
		color: #555;
	}

	.value {
		color: #333;
		text-align: right;
	}

	.value view {
		margin-bottom: 5px;
	}
</style>