<!--
 * @Description: 业务办理
 * @Date: 2022-06-14 18:42:38
 * @LastEditTime: 2022-06-16 21:31:38
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content flex">
			<PageLeft />
			<PageRight />
		</div>
	</div>
</template>

<script>
export default {
	name: 'enterpriseBusiness',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
		PageLeft: () => import('./pageLeft/index.vue'), // 左侧部分
		PageRight: () => import('./pageRight/index.vue'), // 右侧部分
	},
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
