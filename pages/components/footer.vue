<template>
	<view class="footer">
		<view class="footer-items">
			<view v-for="(item, index) in footerItems" :key="index" class="footer-item"
				:class="{ footerActive: activeItem === index.toString() }" @click="item.handler">
				<uni-icons :type="item.icon" size="30"
					:color="activeItem === index.toString() ? 'red' : ''"></uni-icons>
				<text>{{ item.label }}</text>
			</view>
		</view>
		<view class="circle-box" @click="addBlog">
			<uni-icons type="plusempty" size="40" color="white"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue';

	const props = defineProps({
		activeItem: String
	});

	function goTest() {
		uni.navigateTo({
			url: '/pages/mbtiTest/imageSwip'
		});
	}

	function goEchart() {
		uni.navigateTo({
			url: '/pages/echartsDemo/home'
		});
	}

	function goMine() {
		uni.navigateTo({
			url: '/pages/poppyInfo/index'
		});
	}

	function goBlog() {
		uni.navigateTo({
			url: '/pages/blog/index'
		});
	}

	function addBlog() {
		uni.navigateTo({
			url: '/pages/blog/addBlog'
		})
	}

	// 存储每个 footer-item 的数据
	const footerItems = [{
			icon: 'fire',
			label: '测试',
			handler: goTest
		},
		{
			icon: 'color',
			label: 'demo',
			handler: goEchart
		},
		{
			icon: 'flag',
			label: '博客',
			handler: goBlog
		},
		{
			icon: 'contact',
			label: '我的',
			handler: goMine
		},
	];
</script>

<style scoped>
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #eee;
	}

	.footer-items {
		display: flex;
		flex: 1;
		justify-content: space-around;
	}

	.footer-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.footerActive {
		color: red;
		fill: red;
	}

	/* 圆形盒子样式 */
	.circle-box {
		width: 100rpx;
		height: 100rpx;
		background-color: #ff5a5f;
		border-radius: 50%;
		position: absolute;
		top: -14px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>