<!--
 * @Description: 业务办理 - 列表头部
 * @Author: cdl
 * @Date: 2022-06-18 14:43:25
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 15:13:41
-->
<template>
	<div class="business-list-header flex-column plr20" :class="{ background: background }">
		<div class="flex">
			<div class="name flex-column">
				<span class="title">{{ data.title }}</span>
				<span class="border mt10"></span>
			</div>
			<div class="desc pt5 ml30" v-if="data.type">
				<span>占有类型：</span>
				<span class="type">{{ data.type }}</span>
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
		data: {
			type: Object,
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
			color: var(--rh-text-color-primary);
		}

		.border {
			width: 48px;
			height: 5px;
			background: var(--rh-color-primary);
			border-radius: 2px;
		}
	}

	.desc {
		font-size: 18px;
		font-weight: 400;

		.type {
			color: var(--rh-color-primary);
		}
	}
}
</style>
