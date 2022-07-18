<!--
 * @Description: 投资企业
 * @Date: 2022-06-18 12:09:38
 * @LastEditTime: 2022-06-24 14:15:50
-->
<template>
	<div class="business-details">
		<div class="business-details-item mlr20">
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
					show-overflow-tooltip
				>
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'InvestmentEnterprise',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '被投资企业', key: 'data1', width: '220' },
				{ label: '被投资企业法定代表人/负责人', key: 'data2', width: '220' },
				{ label: '成立日期', key: 'data3' },
				{ label: '投资占比', key: 'data4' },
				{ label: '认缴金额', key: 'data5' },
				{ label: '操作', key: 'data6' },
			],
			tableData: [
				{
					data1: '首经物业管理(上海)有限公司',
					data2: '苏健',
					data3: '2019-08-22',
					data4: '100%',
					data5: '100,000 万(元)',
					data6: '开业',
				},
				{
					data1: '首商物业管理(上海)有限公司',
					data2: '谢弘毅',
					data3: '2019-08-22',
					data4: '100%',
					data5: '100,000 万(元)',
					data6: '开业',
				},
				{
					data1: '北京首置健康管理有限公司',
					data2: '孙宝杰',
					data3: '2019-08-22',
					data4: '100%',
					data5: '100,000 万(元)',
					data6: '开业',
				},
			],
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
