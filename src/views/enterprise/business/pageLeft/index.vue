<!--
 * @Description: 业务办理 - 左侧内容
 * @Author: cdl
 * @Date: 2022-06-16 21:15:37
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 15:37:12
-->
<template>
	<div class="left">
		<div class="search mb20" @keyup.enter="searchClick">
			<el-input v-model="filterText" placeholder="请输入关键词" />
			<el-divider direction="vertical" />
			<span class="search-btn" @click="searchClick">搜索</span>
		</div>

		<el-tree
			ref="treeRef"
			:data="treeData"
			:props="defaultProps"
			:expand-on-click-node="false"
			:indent="30"
			:filter-node-method="filterNode"
			@node-click="treeNodeClick"
		>
			<template v-slot:default="{ node }">
				<element-tree-line class="custom-tree-node" :node="node" :indent="30" :showLabelLine="false">
					<template v-slot:node-label>
						<SvgIcon v-if="node.expanded !== true && node.isLeaf === false" name="folder" class="folder" />
						<SvgIcon
							v-if="node.expanded === true && node.isLeaf === false"
							name="folder-open"
							class="folder-open"
						/>
						<el-tooltip :content="node.label" :disabled="isShowTooltip" placement="right">
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
	// 组件名称
	name: 'enterpriseBusinessLeft',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			filterText: '', // 搜索
			treeData: [
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
	// 计算属性
	computed: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {
		/**
		 * @description: 搜索导航栏数据
		 * @return {*}
		 * @author: cdl
		 */
		searchClick() {
			this.$refs.treeRef.filter(this.filterText)
		},

		/**
		 * @description: 搜索过滤
		 * @param {*} value
		 * @param {*} data
		 * @return {*}
		 * @author: cdl
		 */
		filterNode(value, data) {
			if (!value) return true
			return data.label.indexOf(value) !== -1
		},

		/**
		 * @description: 当节点被点击的时候触发
		 * @return {*}
		 * @author: cdl
		 */
		treeNodeClick(node) {
			this.bus.$emit('onGetPartyInfoRightList', node.INFO_CODE)
		},

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
