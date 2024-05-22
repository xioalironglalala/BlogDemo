<template>
	<view>
		<swiper indicator-dots autoplay>
			<swiper-item v-for="(item, index) in imgList" :key="index">
				<image :src="item" class="slide-image"></image>
			</swiper-item>
		</swiper>
	</view>
	<Footer :activeItem="activeItem"></Footer>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import Footer from '../../components/footer.vue'
	const activeItem = ref('0')
	const imgList = [
		'https://img95.699pic.com/photo/50161/5020.jpg_wh300.jpg',
		'https://img95.699pic.com/photo/50037/1290.jpg_wh300.jpg',
		'https://img95.699pic.com/photo/50014/6326.jpg_wh300.jpg',
	]
</script>

<style>
	.slide-image {
		width: 100%;
		height: 300rpx;
	}
</style>