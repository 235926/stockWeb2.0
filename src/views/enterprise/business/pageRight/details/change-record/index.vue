<!--
 * @Description: 变更记录
 * @Date: 2022-06-18 12:10:21
 * @LastEditTime: 2022-07-20 16:13:18
-->
<template>
	<div class="business-details">
		<div class="business-details-item mlr20">
			<el-table :data="tableData" :border="true" :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
				<el-table-column label="序号" type="index" width="55" />

				<el-table-column v-for="item in tableHeader" :key="item.key" :label="item.label" :property="item.key">
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import { getBusinessChangeRecord } from '@/api/index.js' // api

export default {
	// 组件名称
	name: 'change-record',
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '变更类型', key: 'EDIT_CODE' },
				{ label: '变更类型名称', key: 'EDIT_NAME' },
				{ label: '变更前', key: 'CHANGE_AGO' },
				{ label: '变更后', key: 'CHANGE_AFTER' },
			],
			tableData: [],
		}
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessChangeRecord()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取变更记录
		 * @return {*}
		 */
		onGetBusinessChangeRecord() {
			const params = {
				CMPY_CODE: this.$route.query.id,
			}
			getBusinessChangeRecord(params).then((res) => {
				this.tableData = res._DATA_
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
