<!--
 * @Description: 企业信息更新权限
 * @Date: 2022-06-14 18:50:59
 * @LastEditTime: 2022-06-15 13:45:00
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
	name: 'systemPermissions',
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
