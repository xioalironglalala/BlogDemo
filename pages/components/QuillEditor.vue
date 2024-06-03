<template>
	<view class="editor-container">
		<div ref="editor"></div>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted,
		defineExpose
	} from 'vue';
	import Quill from 'quill';
	import 'quill/dist/quill.snow.css';

	const editor = ref(null);
	let quill = null; // 使用 let 声明

	onMounted(() => {
		quill = new Quill(editor.value, {
			theme: 'snow',
			modules: {
				toolbar: [
					[{
						'header': [1, 2, 3, 4, 5, false]
					}],
					['bold', 'italic', 'underline'],
					['image', 'code-block']
				]
			}
		});

		// 监听编辑器内容变化
		quill.on('text-change', () => {
			console.log(quill.root.innerHTML);
		});
	});

	function getBlogContent() {
		return quill ? quill.root.innerHTML : '';
	}

	defineExpose({
		getBlogContent
	});
</script>


<style scoped>
	.editor-container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.editor-container>>>.ql-toolbar.ql-snow svg {
		width: 14px;
		height: 14px;
	}

	.ql-container {
		flex: 1
	}
</style>