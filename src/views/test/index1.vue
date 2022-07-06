<!--
 * @Description: 测试页面
 * @Date: 2022-06-15 18:11:26
 * @LastEditTime: 2022-06-30 10:16:11
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<div id="container"></div>
		</div>
	</div>
</template>

<script>
import G6 from '@antv/g6'
import axios from 'axios'
export default {
	// 组件名称
	name: '',
	// 组件参数 接收来自父组件的数据
	props: {},
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件状态值
	data() {
		return {}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	created() {},
	mounted() {
		this.init()
	},
	// 组件方法
	methods: {
		init() {
			fetch('https://mock.mengxuegu.com/mock/6231712daeac6e39a839d8cd/enterprise-map')
				.then((res) => res.json())
				.then((data) => {
					const container = document.getElementById('container')
					const width = container.scrollWidth
					const height = container.scrollHeight || 500
					const graph = new G6.TreeGraph({
						container: 'container',
						width,
						height,
						fitView: true, // 是否开启画布自适应。开启后图自动适配画布大小
						fitViewPadding: [20, 20, 20, 20], // fitView 为 true 时生效。图适应画布时，指定四周的留白
						minZoom: 0.5, // 最小缩放比例
						modes: {
							// 设置画布的交互模式
							default: [
								{
									type: 'collapse-expand',
									onChange: function onChange(item, collapsed) {
										const data = item.get('model')
										data.collapsed = collapsed
										return true
									},
								},
								'drag-canvas',
								'zoom-canvas',
							],
						},
						defaultNode: {
							type: 'rect',
							size: 50,
							anchorPoints: [
								[0, 0.5],
								[1, 0.5],
							],
							labelCfg: {
								fontSize: 25,
							},
						},
						defaultEdge: {
							// type: 'cubic-horizontal',
							type: 'polyline',
							style: {
								lineWidth: 1, // 描边宽度
								stroke: '#A3B1BF',
							},
						},
						layout: {
							type: 'mindmap',
							direction: 'H',
							getHeight: () => {
								return 18
							},
							getWidth: () => {
								return 18
							},
							getVGap: () => {
								return 18
							},
							getHGap: () => {
								return 100
							},
							// 自定义子节点分布
							getSide: (d) => {
								if (d.id === 'right4' || d.id === 'right3') {
									return 'left'
								}
								return 'right'
							},
						},
					})

					// 设置各个节点样式及其他配置，以及在各个状态下节点的 KeyShape 的样式
					let centerX = 0
					graph.node(function (node) {
						if (node.id === 'Modeling Methods') {
							centerX = node.x
						}

						return {
							label: node.label,
							labelCfg: {
								position:
									node.children && node.children.length > 0
										? 'left'
										: node.x > centerX
										? 'right'
										: 'left',
								offset: 10,
							},
							style: {
								// opacity: 0, // 隐藏圆球
							},
						}
					})

					// 设置各个边样式及其他配置，以及在各个状态下节点的 KeyShape 的样式
					graph.edge((edge) => {
						return {
							id: edge.id,
							type: 'polyline',
							style: {
								stroke: '#afb9c3',
							},
						}
					})

					graph.data(data)
					graph.render()
					graph.fitView()

					if (typeof window !== 'undefined')
						window.onresize = () => {
							if (!graph || graph.get('destroyed')) return
							if (!container || !container.scrollWidth || !container.scrollHeight) return
							graph.changeSize(container.scrollWidth, container.scrollHeight)
						}
				})
		},
	},
}
</script>

<style lang="scss" scoped></style>
