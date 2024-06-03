// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {
	createPinia
} from 'pinia';
import {
	useAuthStore
} from '@/stores/auth.js';
import NoData from '@pages/components/noData.vue'

Vue.config.productionTip = false

App.mpType = 'app'
const pinia = createPinia();

const app = new Vue({
	...App
})
app.component('NoData', NoData);
app.use(pinia);
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createPinia
} from 'pinia';
import App from './App.vue'
import NoData from './pages/components/noData.vue'
export function createApp() {
	const app = createSSRApp(App)
	const pinia = createPinia();
	app.component('NoData', NoData);
	app.use(pinia);
	return {
		app,
		pinia
	}
}
// #endif