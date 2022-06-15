<!--
 * @Description: 头部页面
 * @Author: cdl
 * @Date: 2022-06-09 14:15:57
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 14:19:59
-->
<template>
	<el-header class="layout-header">
		<!-- 内容 -->
		<div class="header-container flex">
			<div class="left flex-center ml15">
				<el-image :src="require('@/assets/images/logo.png')" fit="fill" />
				<span class="title ml15">企业股权管理信息系统</span>
			</div>
			<div class="right flex-center mr30">
				<span class="title mr15">系统管理员</span>
				<el-avatar :size="40" :src="require('@/assets/images/userAvatar.png')" />
			</div>
		</div>

		<!-- 边框 -->
		<div class="border"></div>
	</el-header>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped>
.header-container {
	height: 60px;
	justify-content: space-between;

	.left {
		// 标题
		.title {
			font-family: PingFangSC-Regular, PingFang SC;
			font-size: 22px;
			font-weight: 400;
			color: #454545;
		}
	}

	.right {
		.title {
			font-size: 14px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #494949;
		}
	}
}

// 边框
.border {
	height: 5px;
	background: var(--rh-color-primary);
}
</style>
