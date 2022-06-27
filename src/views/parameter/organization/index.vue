<!--
 * @Description: 党组织台账查询
 * @Author: cdl
 * @Date: 2022-06-14 18:46:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-27 17:51:39
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content"></div>
	</div>
</template>

<script>
export default {
	name: 'parameterOrganization',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
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
