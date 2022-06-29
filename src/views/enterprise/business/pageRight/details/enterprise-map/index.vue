<!--
 * @Description: 企业图谱
 * @Author: cdl
 * @Date: 2022-06-18 12:09:58
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 18:25:31
-->
<template>
	<div class="business-details enterprise-map">
		<div style="width: calc(100% - 10px); height: calc(100vh - 255px)">
			<SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" />
		</div>
	</div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
	// 组件名称
	name: 'enterpriseMap',
	// 局部注册的组件
	components: { SeeksRelationGraph },
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			graphOptions: {
				layouts: [
					{
						label: '中心', // 布局描述
						layoutName: 'tree', // 布局方式（tree树状布局/center中心布局/force自动布局）
						layoutClassName: 'seeks-layout-center', // 当使用这个布局时，会将此样式添加到图谱上
						defaultJunctionPoint: 'border', // 默认的连线与节点接触的方式
						defaultNodeShape: 0, // 当 useLayoutStyleOptions=true 时有效，默认的节点形状，0:圆形；1:矩形
						defaultLineShape: 1, // 当useLayoutStyleOptions=true时有效，默认的线条样式（1-6）
						from: 'left', // left:从左到右/top:从上到下/right:从右到左/bottom:从下到上
						max_per_width: '300', // 节点距离限制:节点之间横向距离最大值
						min_per_height: '40', // 节点距离限制:节点之间纵向距离最小值
					},
				],
				// 默认的线条箭头样式
				defaultLineMarker: {
					markerWidth: 12, // 箭头宽度
					markerHeight: 12, // 箭头高度
					refX: 6, // X偏移
					refY: 6, // Y偏移
					data: 'M2,2 L10,6 L2,10 L6,6 L2,2', // 箭头形状
				},
				defaultNodeShape: 1, // 默认的节点形状，0:圆形；1:矩形
				defaultNodeWidth: '100', // 默认的节点宽度
				defaultLineShape: 4, // 默认的线条样式（1-6）
				defaultJunctionPoint: 'lr', // 默认的连线与节点接触的方式
				defaultNodeBorderWidth: 0, // 默认的节点边框粗细（像素）
				defaultLineColor: 'rgba(0, 186, 189, 1)', // 默认的线条颜色
				defaultNodeColor: 'rgba(0, 206, 209, 1)', // 默认的节点背景颜色
			},
		}
	},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {
		this.showSeeksGraph()
	},
	// 组件方法
	methods: {
		showSeeksGraph() {
			const __graph_json_data = {
				rootId: 'a',
				nodes: [
					{
						id: 'a',
						text: 'a',
						children: [
							{
								id: 'b',
								text: 'b',
								children: [
									{
										id: 'b1',
										text: 'b1',
										children: [
											{ id: 'b1-1', text: 'b1-1' },
											{ id: 'b1-2', text: 'b1-2' },
											{ id: 'b1-3', text: 'b1-3' },
											{ id: 'b1-4', text: 'b1-4' },
											{ id: 'b1-5', text: 'b1-5' },
											{ id: 'b1-6', text: 'b1-6' },
										],
									},
									{
										id: 'b2',
										text: 'b2',
										children: [
											{ id: 'b2-1', text: 'b2-1' },
											{ id: 'b2-2', text: 'b2-2' },
										],
									},
								],
							},
							{
								id: 'c',
								text: 'c',
								children: [
									{ id: 'c1', text: 'c1' },
									{ id: 'c2', text: 'c2' },
									{ id: 'c3', text: 'c3' },
								],
							},
						],
					},
				],
				links: [],
			}

			this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
				// 这些写上当图谱初始化完成后需要执行的代码
			})
		},

		/**
		 * @description: 过滤文字换行
		 * @param {*} name
		 * @return {*}
		 * @author: cdl
		 */
		filterTextWrap(name) {
			let index = name.indexOf('（')
			let prev = name.slice(0, index)
			let next = name.slice(index)
			let str = `
				<div>${prev}</div>
				<div>${next}</div>
			`
			return str
		},
	},
}
</script>

<style lang="scss" scoped>
.enterprise-map {
	.business-details-item {
		margin: 0 20px 30px;

		.header {
			height: 50px;
			font-size: 14px;
			font-weight: 500;
			color: var(--el-color-black);
			border: 1px solid var(--el-border-color-light);
			border-bottom: none;
			background: var(--el-table-header-bg-color);
		}

		ul {
			display: flex;
			margin: 0;
			padding: 0;
			border-top: 1px solid var(--el-border-color-light);
			border-left: 1px solid var(--el-border-color-light);

			li {
				list-style: none;
				height: 80px;
				border-right: 1px solid var(--el-border-color-light);
				border-bottom: 1px solid var(--el-border-color-light);
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
				color: var(--el-text-color-primary);
			}
		}

		::v-deep .el-table th.el-table__cell {
			background: none;
			font-weight: normal;
			color: var(--el-text-color-primary);
		}
	}
}
</style>
