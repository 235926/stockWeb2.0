<!--
 * @Description: 企业图谱
 * @Date: 2022-06-18 12:09:58
 * @LastEditTime: 2022-07-06 10:19:09
-->
<template>
	<div class="business-details enterprise-map">
		<div id="container"></div>
	</div>
</template>

<script>
import G6 from '@antv/g6'
import { Local } from '@/utils/storage.js' // 浏览器存储
export default {
	// 组件名称
	name: 'enterpriseMap',
	// 组件状态值
	data() {
		return {}
	},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {
		console.log(Local.get('enterpriseMapList'))
		this.init()
	},
	// 组件方法
	methods: {
		init() {
			// 当内置节点不满足需求时，可以通过 G6.registerNode(nodeName, options, extendedNodeName) 方法自定义节点
			G6.registerNode(
				'tree-node',
				{
					drawShape: function drawShape(cfg, group) {
						const rect = group.addShape('rect', {
							attrs: {
								fill: '#fff',
								stroke: '#666',
								x: 0,
								y: 0,
								width: 1,
								height: 1,
							},
							name: 'rect-shape',
						})
						const content = cfg.label.replace(/(.{19})/g, '$1\n')
						const text = group.addShape('text', {
							attrs: {
								text: content,
								x: 0,
								y: 0,
								textAlign: 'left',
								textBaseline: 'middle',
								// fill: '#383838',
							},
							name: 'text-shape',
						})
						const bbox = text.getBBox()
						const hasChildren = cfg.children && cfg.children.length > 0
						rect.attr({
							x: -bbox.width / 2 - 4,
							y: -bbox.height / 2 - 6,
							width: bbox.width + (hasChildren ? 26 : 12),
							height: bbox.height + 12,
						})
						text.attr({
							x: -bbox.width / 2,
							y: 0,
						})
						if (hasChildren) {
							group.addShape('marker', {
								attrs: {
									x: bbox.width / 2 + 12,
									y: 0,
									r: 6,
									symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
									stroke: '#666',
									lineWidth: 2,
								},
								name: 'collapse-icon',
							})
						}
						return rect
					},
					update: (cfg, item) => {
						const group = item.getContainer()
						const icon = group.find((e) => e.get('name') === 'collapse-icon')
						icon.attr('symbol', cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse)
					},
				},
				'single-node'
			)

			const container = document.getElementById('container')
			const width = container.scrollWidth
			const height = container.scrollHeight || 600
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
					type: 'tree-node',
					anchorPoints: [
						[0, 0.5],
						[1, 0.5],
					],
				},
				defaultEdge: {
					// type: 'cubic-horizontal',
					type: 'polyline',
					style: {
						stroke: '#A3B1BF',
					},
				},
				layout: {
					type: 'compactBox',
					direction: 'H',
					// getId: function getId(d) {
					// 	console.log(d)
					// 	return d.id
					// },
					getHeight: function getHeight() {
						return 16
					},
					getWidth: function getWidth() {
						return 16
					},
					getVGap: function getVGap() {
						return 20
					},
					getHGap: function getHGap() {
						return 100
					},
					// 自定义子节点分布
					// getSide: (d) => {
					// 	console.log(d)
					// 	if (d.id === 'right4' || d.id === 'right3') {
					// 		return 'left'
					// 	}
					// 	return 'right'
					// },
				},
			})

			fetch('https://mock.mengxuegu.com/mock/6231712daeac6e39a839d8cd/enterprise-map')
				.then((res) => res.json())
				.then((data) => {
					G6.Util.traverseTree(data, function (item) {
						item.id = item.name
					})

					graph.data(data)
					graph.render()
					graph.fitView()
				})

			if (typeof window !== 'undefined')
				window.onresize = () => {
					if (!graph || graph.get('destroyed')) return
					if (!container || !container.scrollWidth || !container.scrollHeight) return
					graph.changeSize(container.scrollWidth, container.scrollHeight)
				}
		},
	},
}
</script>

<style lang="scss" scoped></style>
