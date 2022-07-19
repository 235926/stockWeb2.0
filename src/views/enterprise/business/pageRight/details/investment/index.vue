<!--
 * @Description: 投资企业
 * @Date: 2022-06-18 12:09:38
 * @LastEditTime: 2022-07-19 09:19:58
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
				<el-table-column label="序号" type="index" width="55" />

				<!-- 设置表头数据源，并循环渲染出来，自定义绑定  property 对应列内容的字段名 -->
				<el-table-column
					v-for="item in tableHeader"
					:key="item.key"
					:label="item.label"
					:property="item.key"
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
import { getBusinessInvestment } from '@/api/index.js' // api

export default {
	// 组件名称
	name: 'InvestmentEnterprise',
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '被投资企业', key: 'CMPY_NAME' },
				{ label: '被投资企业法定代表人/负责人', key: 'LEGAL_AGENT' },
				{ label: '成立日期', key: 'BUSINESS_DATE' },
				{ label: '投资占比', key: 'GS_CG_RATIO' },
				{ label: '认缴金额', key: 'MONEY' },
				{ label: '操作', key: 'CMPY_TYPE' },
			],
			tableData: [],
		}
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessInvestment()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取数据列表
		 * @return {*}
		 */
		onGetBusinessInvestment() {
			const params = {
				CMPY_CODE: this.$route.query.id,
			}
			getBusinessInvestment(params).then((res) => {
				this.tableData = res._DATA_
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
