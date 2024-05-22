<template>
	个人信息111
	<Footer :activeItem="activeItem"></Footer>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import Footer from '../../components/footer.vue'
	const activeItem = ref('2')
</script>

<style>
</style>