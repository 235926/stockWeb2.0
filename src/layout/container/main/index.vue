<!--
 * @Description: 主体页面
 * @Author: cdl
 * @Date: 2022-06-09 14:15:41
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-11 01:16:24
-->
<template>
	<el-main class="layout-main">
		<el-scrollbar>
			<div class="routerView-container">
				<RouterView />
			</div>
		</el-scrollbar>
	</el-main>
</template>

<script>
export default {
	name: 'app',
	components: {
		RouterView: () => import('@/layout/openWay/routerView.vue'), // 路由出口
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
.routerView-container {
	min-height: calc(100vh - 105px);
	padding: 20px;
}
</style>
