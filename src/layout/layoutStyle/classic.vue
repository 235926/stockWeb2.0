<!--
 * @Description: 经典布局
 * @Author: cdl
 * @Date: 2022-06-09 14:20:29
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-18 15:00:15
-->
<template>
	<el-container class="layout-container is-vertical">
		<Header />

		<el-container class="layout-main-height-60">
			<Aside />

			<Main />
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: 'layoutStyleClassic',
	components: {
		Header: () => import('@/layout/container/header/index.vue'), // 头部组件
		Aside: () => import('@/layout/container/aside/index.vue'), // 侧边栏组件
		Main: () => import('@/layout/container/main/index.vue'), // 主体组件
	},
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.layout-main-height-60 {
	height: calc(100vh - 60px);
}
</style>
