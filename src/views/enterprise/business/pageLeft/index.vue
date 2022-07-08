<!--
 * @Description: 业务办理 - 左侧内容
 * @Date: 2022-06-16 21:15:37
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
			:filter-node-method="filterNode"
			:indent="30"
			node-key="CMPY_BASE_CODE"
			:default-expanded-keys="defaultExpanded"
			@node-click="treeNodeClick"
		>
			<template v-slot:default="{ node, data }">
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
						<span class="note" v-if="data.CMPY_TYPE === '2'">（注销）</span>
					</template>
				</element-tree-line>
			</template>
		</el-tree>
	</div>
</template>

<script>
import { getBusinessLeftTree } from '@/api/index.js' // api
export default {
	// 组件名称
	name: 'enterpriseBusinessLeft',
	data() {
		return {
			filterText: '', // 搜索
			treeData: [], // 导航树
			defaultProps: {
				children: 'children',
				label: 'CMPY_NAME',
			},
			defaultExpanded: [], // 默认展开
			isShowTooltip: false, // el-tooltip
		}
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessLeftTree()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取导航树
		 * @return {*}
		 */
		onGetBusinessLeftTree() {
			getBusinessLeftTree().then((res) => {
				this.treeData = res.treeData
				this.defaultExpanded.push(res.treeData[0].CMPY_BASE_CODE)
				this.bus.$emit('onGetBusinessRightList', res.treeData[0].CMPY_BASE_CODE)
			})
		},

		/**
		 * @description: 搜索导航栏数据
		 * @return {*}
		 */
		searchClick() {
			this.$refs.treeRef.filter(this.filterText)
		},

		/**
		 * @description: 搜索过滤
		 * @param {*} value
		 * @param {*} data
		 * @return {*}
		 */
		filterNode(value, data) {
			if (!value) return true
			return data.CMPY_NAME.indexOf(value) !== -1
		},

		/**
		 * @description: 当节点被点击的时候触发
		 * @return {*}
		 */
		treeNodeClick(node) {
			this.bus.$emit('onGetBusinessRightList', node.CMPY_BASE_CODE)
		},

		/**
		 * @description: 鼠标移入
		 * @param {*} event
		 * @return {*}
		 */
		onMouseenter(event) {
			this.isShowTooltip = event.currentTarget.scrollWidth <= event.currentTarget.clientWidth
		},
	},
}
</script>

<style lang="scss" scoped></style>
