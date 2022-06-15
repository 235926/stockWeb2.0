<!--
 * @Description: 企业信息更新权限 - 左侧页面
 * @Author: cdl
 * @Date: 2022-06-15 09:19:13
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 12:21:35
-->
<template>
	<div class="left">
		<el-tree :data="data" :props="defaultProps" :indent="30">
			<template v-slot:default="{ node }">
				<element-tree-line
					class="custom-tree-node"
					:node="node"
					:indent="30"
					:showLabelLine="false"
				>
					<template v-slot:node-label>
						<SvgIcon
							v-if="node.expanded !== true && node.isLeaf === false"
							name="folder"
							class="folder"
						/>
						<SvgIcon
							v-if="node.expanded === true && node.isLeaf === false"
							name="folder-open"
							class="folder-open"
						/>
						<el-tooltip
							:content="node.label"
							:disabled="isShowTooltip"
							placement="right"
						>
							<span
								class="label"
								@mouseenter="onMouseenter($event)"
								@mouseleave="isShowTooltip = false"
								>{{ node.label }}</span
							>
						</el-tooltip>
					</template>
				</element-tree-line>
			</template>
		</el-tree>
	</div>
</template>

<script>
export default {
	name: 'systemPermissionsLeft',
	data() {
		return {
			data: [
				{
					id: 1,
					label: '一级 1',
					children: [
						{
							id: 4,
							label: '二级 1-1',
							children: [
								{
									id: 9,
									label: '三级 1-1-1',
								},
								{
									id: 10,
									label: '三级 1-1-2',
								},
							],
						},
					],
				},
				{
					id: 2,
					label: '一级 2',
					children: [
						{
							id: 5,
							label: '二级 2-1',
						},
						{
							id: 6,
							label: '二级 2-2',
						},
					],
				},
				{
					id: 3,
					label: '一级 3',
					children: [
						{
							id: 7,
							label: '二级 3-1',
						},
						{
							id: 8,
							label: '二级 3-2',
						},
					],
				},
			],
			defaultProps: {
				children: 'children',
				label: 'label',
			},
			isShowTooltip: false, // el-tooltip
		}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 鼠标移入
		 * @param {*} event
		 * @return {*}
		 * @author: cdl
		 */
		onMouseenter(event) {
			this.isShowTooltip = event.currentTarget.scrollWidth <= event.currentTarget.clientWidth
		},
	},
}
</script>

<style lang="scss" scoped></style>
