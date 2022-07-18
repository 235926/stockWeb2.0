<!--
 * @Description: table 循环渲染数据
 * @Date: 2022-06-20 15:34:53
 * @LastEditTime: 2022-06-24 14:02:45
-->
<template>
	<div class="table-render-loop">
		<el-table
			:data="tableData"
			:border="true"
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column label="序号" type="index" align="center" width="55" />

			<!-- 设置表头数据源，并循环渲染出来，自定义绑定  property 对应列内容的字段名 -->
			<el-table-column
				v-for="item in tableHeader"
				:key="item.key"
				:label="item.label"
				:property="item.key"
				:align="item.align"
				:width="item.width"
			>
				<template slot-scope="scope">
					{{ scope.row[scope.column.property] }}
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'table-render-loop',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {
		// tableHeader: {
		// 	type: Array,
		// 	default: () => [],
		// },
		// tableData: {
		// 	default: () => [],
		// },
	},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '股东名称', key: 'name', width: '', align: 'left' },
				{ label: '股东类型', key: 'type', width: '200px', align: 'center' },
				{ label: '工商口径持股比例', key: 'industrial', width: '200px', align: 'center' },
				{ label: '会计口径持股比例', key: 'accounting', width: '200px', align: 'center' },
			],
			tableData: [
				{
					name: '北京首创城市发展集团有限公司',
					type: '我方',
					industrial: '30%',
					accounting: '40',
				},
				{
					name: 'XXX有限公司',
					type: '其他股东',
					industrial: '12%',
					accounting: '32',
				},
				{
					name: 'XXX有限公司',
					type: '其他股东',
					industrial: '5%',
					accounting: '27',
				},
			],
		}
	},
	// 计算属性
	computed: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
