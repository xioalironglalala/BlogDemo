<template>
	<view class="container">
		<form @submit="login">
			<view class="uni-form-item uni-column">
				<view class="title">用户名</view>
				<input class="uni-input" name="username" placeholder="请输入用户名" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title"><text class="uni-form-item__title">密码</text></view>
				<view class="uni-input-wrapper">
					<input class="uni-input" placeholder="请输入密码" name="password" :password="showPassword" />
				</view>
			</view>
			<button form-type="submit">登录</button>
		</form>
		初次登录,账号和密码均为:nihao123
	</view>
</template>

<script>
	import {
		reactive
	} from 'vue';
	import {
		useAuthStore
	} from '@/stores/auth';
	export default {
		data() {
			return {
				text: '',
				showPassword: true,
				authStore: useAuthStore()
			}
		},
		methods: {
			login: function(e) {
				debugger
				this.authStore.fetchToken(e.detail.value)
				if (this.authStore.isAuthenticated) {
					uni.navigateTo({
						url: '/pages/echartsDemo/home'
					});
					console.log('Logged in successfully!');
				}
			},

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>