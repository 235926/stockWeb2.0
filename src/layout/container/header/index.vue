<!--
 * @Description: 头部页面
 * @Date: 2022-06-09 14:15:57
 * @LastEditTime: 2022-06-28 15:59:41
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
				<Settings v-if="getSystemConfig.isSystemConfig" />
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
	components: {
		Settings: () => import('./settings.vue'), // 系统配置
	},
	data() {
		return {}
	},
	// 计算属性
	computed: {
		// 获取系统配置
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
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
			font-size: 22px;
			font-weight: 400;
			color: #454545;
		}
	}

	.right {
		.title {
			font-size: 14px;
			font-weight: 400;
			color: #494949;
		}
	}
}

// 边框
.border {
	height: 5px;
	background: var(--el-color-primary);
}
</style>
