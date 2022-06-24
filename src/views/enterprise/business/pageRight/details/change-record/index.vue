<!--
 * @Description: 变更记录
 * @Author: cdl
 * @Date: 2022-06-18 12:10:21
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 14:29:49
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

				<el-table-column
					v-for="item in tableHeader"
					:key="item.key"
					:label="item.label"
					:property="item.key"
					:align="item.align"
					:width="item.width"
				>
					<template #default="scope">
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
	name: 'change-record',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '变更日期', key: 'data1' },
				{ label: '变更项目', key: 'data2' },
				{ label: '变更前', key: 'data3' },
				{ label: '变更后', key: 'data4' },
				{ label: '附件', key: 'data5' },
			],
			tableData: [
				{
					data1: '2022-02-11',
					data2: '注册资本',
					data3: '2978196.016万',
					data4: '2988196.016万(+0.34%)',
					data5: '注册资本XXX',
				},
				{
					data1: '2022-02-11',
					data2: '经营范围',
					data3: '房地产开发;物业管理;酒店管理;销售自行开发的商品房;房地产信息咨询服务;旅游信息咨询(市场主体依法自主选择经营项目,开展经营活动;房地产开发以及依法须经批准的项目,经相关部门批准后依批准的内容开展经营活动;不得从事国家和本市产业政策禁止和限制类项目的经营活动。)',
					data4: '房地产开发投资管理;资产管理;企业管理;物业管理;酒店管理;销售自行开发的商品房;出租商品用房、出程办公用房;园区管理服务,投资咨询企业管理咨询;房地产信息咨询服务;财务咨询,旅游咨询(市场主体依法自主选择经营项目,开展经营活动;房地产开发以及依法须经批准的项目,经相关部门批佳后依批准的内容开展经营活动不得从事国家和本市产业政策禁止和限制类项目的经营活动。)',
					data5: '注册资本XXX',
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
