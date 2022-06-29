<!--
 * @Description: main 页面头部
 * @Author: cdl
 * @Date: 2022-06-14 19:03:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-29 11:14:20
-->
<template>
	<div class="page-header">
		<div class="title">{{ $route.meta.title }}</div>

		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item v-for="item in $route.matched" :key="item.name" :to="{ path: item.path }">
				<SvgIcon v-if="item.name === '/'" :name="item.meta.icon" class="mr5" />
				<span class="name">{{ item.meta.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	name: 'pageHeader',
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.page-header ::v-deep {
	height: 50px;
	padding: 0 20px;
	background-color: #fafafa;
	border-bottom: 1px solid var(--el-border-color-light);
	border-radius: 4px 4px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.title {
		font-weight: 600;
		color: var(--el-color-primary);
	}

	.el-breadcrumb {
		.svg-icon {
			color: var(--el-color-primary);
			margin-right: 5px;
		}
	}
}
</style>
