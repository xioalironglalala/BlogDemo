// utils/request.js
import {
	useAuthStore
} from '@/stores/auth';

const request = (options) => {
	const authStore = useAuthStore();
	// authStore.loadToken(); // 加载 token
	let token = uni.getStorageSync('token');

	// 显示 loading 提示
	uni.showLoading({
		title: '加载中...', // loading 提示的内容
	});

	return new Promise((resolve, reject) => {
		uni.request({
			...options,
			header: {
				...options.header,
				Authorization: `JWT ${token}` // 从 Pinia store 获取 token
			},
			success: (res) => {
				// 隐藏 loading 提示
				uni.hideLoading();
				debugger
				if (res.data.code === 401) { // 如果返回的状态码是401，则表示 token 过期
					uni.showToast({
						title: '登录过期，请重新登录',
						icon: 'none'
					});
					authStore.clearToken(); // 清除 Pinia store 中的 token
					uni.navigateTo({
						url: '/pages/index/index' // 跳转到登录页面
					});
					reject('Token expired');
				} else {
					resolve(res.data);
				}
			},
			fail: (err) => {
				// 隐藏 loading 提示
				uni.hideLoading();
				reject(err);
			}
		});
	});
};

export default request;