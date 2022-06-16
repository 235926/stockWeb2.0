<!--
 * @Description: 变更类型维护
 * @Author: cdl
 * @Date: 2022-06-14 18:51:44
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 21:43:13
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-table
				ref="tableRef"
				:data="tableData"
				border
				@selection-change="handleSelectionChange"
				:header-cell-style="{ 'text-align': 'center' }"
			>
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column type="index" label="序号" align="center" width="65" />
				<el-table-column prop="type" align="center" label="企业变更类型" />
				<el-table-column prop="field" label="可更新字段">
					<template slot-scope="scope">
						<div class="flex-between-center c-pointer" @click="onField">
							<span>{{ scope.row.field }}</span>
							<i class="el-icon-document"></i>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="role" label="变更角色" width="200">
					<template slot-scope="scope">
						<el-select
							v-model="scope.row.role"
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

		<Add title="新增" :visible="addVisible" @update:visible="addVisible = $event" />
		<Field title="可更新字段" :visible="fieldVisible" @update:visible="fieldVisible = $event" />
	</div>
</template>

<script>
export default {
	name: 'systemChangeType',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
		Add: () => import('./add.vue'), // 新增页面
		Field: () => import('./field.vue'), // 新增页面
	},
	data() {
		return {
			tableData: [
				{
					type: '公司名称变更',
					field: '公司名称，经营范围，法定代表人',
					role: '变更角色1',
				},
				{
					type: '经营范围变更',
					field: '经营范围',
					role: '变更角色1',
				},
				{
					type: '法人变更',
					field: '法定代表人',
					role: '变更角色1',
				},
				{
					type: '董监事变更',
					field: '董监事变更',
					role: '变更角色1',
				},
			],
			options: [
				{
					value: 'role1',
					label: '变更角色1',
				},
				{
					value: 'role2',
					label: '变更角色2',
				},
			],
			addVisible: false, // 添加页面状态
			fieldVisible: false, // 可更新字段
		}
	},
	// 计算属性
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
		 * @description: 可更新字段
		 * @return {*}
		 * @author: cdl
		 */
		onField() {
			this.fieldVisible = true
		},

		/**
		 * @description: 新增
		 * @return {*}
		 * @author: cdl
		 */
		onAdd() {
			this.addVisible = true
		},

		/**
		 * @description: 保存
		 * @return {*}
		 * @author: cdl
		 */
		onSave() {},

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
