<!--
 * @Description: 企业信息更新权限 - 左侧页面
 * @Date: 2022-06-15 09:19:13
 * @LastEditTime: 2022-07-08 22:52:41
-->
<template>
	<div class="left">
		<el-tree
			ref="treeRef"
			:data="treeData"
			:props="defaultProps"
			:indent="30"
			:expand-on-click-node="false"
			node-key="EDIT_CODE"
			:default-expanded-keys="defaultExpanded"
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
import { getPermissionsLeftTree } from '@/api/index.js' // api

export default {
	name: 'systemPermissionsLeft',
	data() {
		return {
			treeData: [], // 导航树
			defaultProps: {
				children: 'children',
				label: 'EDIT_NAME',
			},
			defaultExpanded: [], // 默认展开
			isShowTooltip: false, // el-tooltip
		}
	},
	created() {
		this.onGetPermissionsLeftTree()
	},
	mounted() {
		this.bus.$on('onGetPermissionsAddEditDel', () => {
			this.onGetPermissionsLeftTree()
		})
	},
	methods: {
		/**
		 * @description: 获取导航树
		 * @return {*}
		 */
		onGetPermissionsLeftTree(id) {
			getPermissionsLeftTree().then((res) => {
				this.treeData = res.data
				this.defaultExpanded.push(res.data[0].ID)
			})
		},

		/**
		 * @description: 当节点被点击的时候触发
		 * @return {*}
		 */
		treeNodeClick(node) {
			this.bus.$emit('onGetPermissionsRightList', {
				EDIT_CODE: node.EDIT_CODE,
				activeName: 'edit',
			})
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
	// 页面销毁
	destroyed() {
		this.bus.$off('onGetPermissionsAddEditDel')
	},
}
</script>

<style lang="scss" scoped></style>
