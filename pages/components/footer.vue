<template>
	<view class="footer">
		<view class="footer-item" :class="{footerActive:activeItem=='0'}" @click="goTest">
			<uni-icons v-if="activeItem=='0'" type="fire" size="30" color="red"></uni-icons>
			<uni-icons v-else type="fire" size="30"></uni-icons>
			<text>测试</text>
		</view>
		<view class="footer-item" :class="{footerActive:activeItem=='1'}" @click="goEchart">
			<uni-icons v-if="activeItem=='1'" type="color" size="30" color="red"></uni-icons>
			<uni-icons v-else type="color" size="30"></uni-icons>
			<text>demo</text>
		</view>
		<view class="footer-item" :class="{footerActive:activeItem=='2'}" @click="goMine">
			<uni-icons v-if="activeItem=='2'" type="contact" size="30" color="red"></uni-icons>
			<uni-icons v-else type="contact" size="30"></uni-icons>
			<text>我的</text>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue';

	const props = defineProps({
		activeItem: String
	})
	
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
</script>

<style>
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #eee;
	}

	.footer-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.footerActive {
		color: red;
		fill: red
	}
</style>