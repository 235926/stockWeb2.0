<!--
 * @Description: 侧边栏子页面
 * @Date: 2022-06-10 13:05:58
 * @LastEditTime: 2022-06-18 01:04:29
-->
<template>
	<div class="child-wrap">
		<template v-for="val in child">
			<el-submenu :index="val.path" :key="val.path" v-if="!val.hidden && val.children && val.children.length > 0">
				<template slot="title">
					<SvgIcon :name="val.meta.icon" />
					<span class="title ml10">{{ val.meta.title }}</span>
				</template>
				<sub-item :child="val.children" />
			</el-submenu>

			<template v-else-if="!val.hidden">
				<el-menu-item :index="val.path" :key="val.path">
					<SvgIcon :name="val.meta.icon" />
					<span class="title ml10">{{ val.meta.title }}</span>
					<i class="el-icon-arrow-right flex-center"></i>
				</el-menu-item>
			</template>
		</template>
	</div>
</template>

<script>
export default {
	name: 'subItem',
	props: {
		child: {
			type: Array,
			default() {
				return []
			},
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
		 */
		jumpRouterView(item) {
			this.$router.push(item.path)
		},
	},
}
</script>

<style lang="scss" scoped></style>
