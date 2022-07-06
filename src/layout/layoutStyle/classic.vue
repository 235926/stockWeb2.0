<!--
 * @Description: 经典布局
 * @Date: 2022-06-09 14:20:29
 * @LastEditTime: 2022-07-06 10:24:02
-->
<template>
	<el-container class="layout-container is-vertical">
		<Header />

		<el-container class="layout-main-height-65">
			<Aside v-if="!$route.query.isAside" />

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
.layout-main-height-65 {
	height: calc(100vh - 65px);
}
</style>
