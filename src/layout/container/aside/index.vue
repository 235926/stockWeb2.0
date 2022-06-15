<!--
 * @Description: 侧边栏页面
 * @Author: cdl
 * @Date: 2022-06-09 14:16:31
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 18:54:09
-->
<template>
	<el-aside class="layout-aside">
		<el-scrollbar class="flex-auto">
			<el-menu :default-active="defaultActive" class="menu-style-one">
				<AsideItem v-for="route in menuList" :key="route.path" :item="route" />
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<script>
import AsideItem from '@/layout/container/aside/asideItem.vue' // 菜单列表子级
export default {
	name: 'layoutAside',
	components: {
		AsideItem,
	},
	data() {
		return {
			defaultActive: this.$route.path, // el-menu 默认高亮
		}
	},
	computed: {
		menuList() {
			return this.$router.options.routes[0].children
		},
	},
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				this.defaultActive = to.path
			},
			deep: true,
		},
	},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
