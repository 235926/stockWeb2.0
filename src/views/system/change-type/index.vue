<!--
 * @Description: 变更类型维护
 * @Author: cdl
 * @Date: 2022-06-14 18:51:44
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 09:53:59
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-table
				:data="tableData"
				border
				@selection-change="handleSelectionChange"
				:header-cell-style="{ 'text-align': 'center' }"
			>
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column type="index" label="序号" align="center" width="65" />
				<el-table-column prop="type" align="center" label="企业变更类型" />
				<el-table-column prop="field" label="可更新字段" width="200">
					<template slot-scope="scope">
						<el-select
							v-model="scope.row.field"
							placeholder="请选择"
							class="border-none"
						>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="name" label="变更角色" width="200">
					<template slot-scope="scope">
						<el-select
							v-model="scope.row.field"
							placeholder="请选择"
							class="border-none"
						>
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
			</el-table>

			<div class="btn mt30 mb10 flex-center">
				<el-button round @click="onAdd">新增</el-button>
				<el-button round @click="onSave">保存</el-button>
				<el-button round @click="onDelete">删除</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'systemChangeType',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			tableData: [
				{
					type: '公司名称变更',
					field: '公司名称',
					name: '变更角色',
				},
				{
					type: '经营范围变更',
					field: '经营范围',
					name: '变更角色',
				},
				{
					type: '法人变更',
					field: '法定代表人',
					name: '变更角色',
				},
				{
					type: '董监事变更',
					field: '董监事变更',
					name: '变更角色',
				},
			],
			options: [
				{
					value: 'Option1',
					label: '变更角色1',
				},
				{
					value: 'Option2',
					label: '变更角色2',
				},
			],
		}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 选中的数据
		 * @return {*}
		 * @author: cdl
		 */
		handleSelectionChange(val) {
			console.log(val)
		},

		/**
		 * @description: 新增
		 * @return {*}
		 * @author: cdl
		 */
		onAdd() {},

		/**
		 * @description: 保存
		 * @return {*}
		 * @author: cdl
		 */
		onSave() {
			console.log(state.tableData)
		},

		/**
		 * @description: 删除
		 * @return {*}
		 * @author: cdl
		 */
		onDelete() {},
	},
}
</script>

<style lang="scss" scoped></style>
