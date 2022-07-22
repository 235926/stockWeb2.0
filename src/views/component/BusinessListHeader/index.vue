<!--
 * @Description: 业务办理 - 列表头部
 * @Date: 2022-06-18 14:43:25
 * @LastEditTime: 2022-07-22 18:57:53
-->
<template>
	<div class="business-list-header flex-column" :class="{ background: background }">
		<div class="flex">
			<div class="name flex-column">
				<span class="title">{{ title }}</span>
				<span class="border mt10"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'BusinessHeader',
	// 组件参数 接收来自父组件的数据
	props: {
		// 数据列表
		title: {
			type: String,
			default: '标题',
		},
		// 背景显示
		background: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.business-list-header {
	height: 65px;
	justify-content: flex-end;

	&.background {
		background: linear-gradient(180deg, #fdfdfd 0%, #fcfcfc 100%);
	}

	.name {
		.title {
			font-size: 24px;
			font-weight: 400;
			color: var(--el-text-color-primary);
		}

		.border {
			width: 48px;
			height: 5px;
			background: var(--el-color-primary);
			border-radius: 2px;
		}
	}

	.desc {
		font-size: 18px;
		font-weight: 400;

		.type {
			color: var(--el-color-primary);
		}
	}
}
</style>
