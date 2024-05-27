import {
	defineStore
} from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		token: uni.getStorageSync('token') || null,
		userInfo: uni.getStorageSync('userInfo') ? JSON.parse(uni.getStorageSync('userInfo')) : null,
		error: null
	}),
	actions: {
		async fetchToken(credentials) {
			try {
				debugger
				const result = await uni.request({
					url: 'http://api.aiwusihan.top/api/login/',
					method: 'POST',
					data: credentials
				});
				const res = result.data

				if (res.msg != '请求成功') {
					this.error = '请求失败';
					return;
				}

				if (res.msg == '请求成功') {
					this.token = res.data.access;
					this.userInfo = res.data;
					uni.setStorageSync('token', res.data.access);
					uni.setStorageSync('userInfo', JSON.stringify(res.data));
					this.error = null;
				} else {
					this.error = res.msg;
				}
			} catch (err) {
				this.error = err.msg;
			}
		},
		setToken(newToken) {
			this.token = newToken;
			uni.setStorageSync('token', newToken);
		},
		clearToken() {
			this.token = null;
			this.userInfo = null;
			uni.removeStorageSync('token');
			uni.removeStorageSync('userInfo');
		}
	},
	getters: {
		isAuthenticated: (state) => !!state.token
	}
});