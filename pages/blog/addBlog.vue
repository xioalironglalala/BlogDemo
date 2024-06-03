<template>
	<div class="add-blog">
		<div class="add-blog-item add-title">
			<input class="uni-input" v-model="inputValue" placeholder="请输入标题" />
		</div>
		<div class="add-blog-item add-content">
			<QuillEditor ref="quillContent" />
		</div>
		<div class="add-blog-item">
			<button @click="submitBlog">发布</button>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import QuillEditor from '../components/QuillEditor.vue';
	import request from '@/utils/request';

	let inputValue = ref('');
	let quillContent = ref(null)

	async function submitBlog() {
		const content = quillContent.value.getBlogContent();
		debugger
		if (content == '' || inputValue.value == '') {
			uni.showToast({
				title: '请输入标题或内容',
				icon: 'none'
			});
			return
		}
		const response = await request({
			url: 'http://api.aiwusihan.top/api/BlogViewSet/?',
			method: 'POST',
			data: {
				title: inputValue.value,
				content: content
			},
		});
		debugger
		if (response.code != '2000') {
			uni.showToast({
				title: response.msg,
				icon: 'none'
			});
			return;
		}
		if (response.code == '2000') {
			uni.navigateTo({
				url: `/pages/blog/index`
			});
		}
	}
</script>

<style scoped>
	.add-blog {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
		height: calc(100vh - 44px);
		padding: 12px 24px;
		background-color: #fff;
	}

	.add-blog-item {
		margin: 12px 0;
	}

	.add-title,
	.add-blog-item:last-child {
		flex: 0 0 auto;
		/* 这些元素的高度固定或自适应 */
	}

	.add-content {
		flex: 1 1 auto;
		/* 使这个元素占据剩余的垂直空间 */
		overflow: hidden;
		/* 确保内容不会溢出 */
	}

	.input-container {
		width: 100%;
	}

	.add-content>>>.ql-container {
		height: 100%;
		/* 设置 Quill 编辑器的容器高度为 100% */
	}
</style>