<!--
 * @Description: 侧边栏子页面
 * @Author: cdl
 * @Date: 2022-06-10 13:05:58
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 18:53:21
-->
<template>
	<el-menu-item v-if="!item.children" :index="`${item.path}`" @click="jumpRouterView(item)">
		{{ item.meta.title }}
		<i class="el-icon-arrow-right"></i>
	</el-menu-item>

	<el-submenu v-else :index="`${item.path}`">
		<template slot="title">
			{{ item.meta.title }}
		</template>

		<template v-for="child in item.children">
			<layoutAsideItem v-if="child.children && child.children.length > 0" :item="child" />

			<el-menu-item v-else :index="`${child.path}`" @click="jumpRouterView(child)">
				{{ child.meta.title }}
				<i class="el-icon-arrow-right"></i>
			</el-menu-item>
		</template>
	</el-submenu>
</template>

<script>
export default {
	name: 'layoutAsideItem',
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 跳转页面
		 * @param {*} item
		 * @return {*}
		 * @author: cdl
		 */
		jumpRouterView(item) {
			this.$router.push(item.path)
		},
	},
}
</script>

<style lang="scss" scoped></style>
