<!--
 * @Description: 党组织信息管理 - 左侧内容
 * @Date: 2022-06-15 12:28:37
 * @LastEditTime: 2022-07-06 10:27:30
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
			v-loading="state.loading"
			:data="treeData"
			:props="defaultProps"
			:expand-on-click-node="false"
			:indent="30"
			:filter-node-method="filterNode"
			node-key="ID"
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
import { getPartyInfoTree } from '@/api/index.js' // api
export default {
	name: 'partyInfoLeft',
	data() {
		return {
			filterText: '', // 搜索
			treeData: [], // 左侧导航栏
			defaultProps: {
				// 配置选项
				children: 'children',
				label: 'INFO_NAME',
			},
			defaultExpanded: [], // 默认展开
			isShowTooltip: false, // Tooltip 文字提示状态
			loading: false, // 加载状态
		}
	},
	computed: {},
	created() {
		this.onGetPartyInfoTree()
	},
	mounted() {
		// 监听添加/修改成功后获取数据
		this.bus.$on('getPartyInfoAddEditDelete', () => {
			this.onGetPartyInfoTree()
		})

		//  监听右侧拖拽排序后，重新获取数据
		this.bus.$on('partyInfoSortable', (id) => {
			this.onGetPartyInfoTree(id)
		})
	},
	methods: {
		/**
		 * @description: 获取导航栏数据
		 * @return {*}
		 */
		onGetPartyInfoTree(id) {
			this.loading = true

			getPartyInfoTree().then((res) => {
				this.treeData = res.treeData
				this.defaultExpanded.push(res.treeData[0].ID)
				this.bus.$emit('onGetPartyInfoRightList', id || '')

				setTimeout(() => {
					this.loading = false
				}, 500)
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
			return data.INFO_NAME.indexOf(value) !== -1
		},

		/**
		 * @description: 当节点被点击的时候触发
		 * @return {*}
		 */
		treeNodeClick(node) {
			this.bus.$emit('onGetPartyInfoRightList', node.INFO_CODE)
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
		this.bus.$off('getPartyInfoAddEditDelete')
		this.bus.$off('partyInfoSortable')
	},
}
</script>
