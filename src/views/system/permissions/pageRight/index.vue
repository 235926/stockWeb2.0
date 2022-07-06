<!--
 * @Description: 企业信息更新权限 - 右侧页面
 * @Date: 2022-06-15 09:19:42
 * @LastEditTime: 2022-06-15 18:20:34
-->
<template>
	<div class="right pl0 pr0">
		<el-form :model="form" label-width="120px" class="mr20">
			<el-row :gutter="20">
				<el-col :span="12">
					<el-form-item label="编辑权限标题">
						<el-input v-model="form.input1" placeholder="请选择" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="可维护的角色">
						<el-select v-model="form.input2" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							/>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<el-divider />

		<div class="pl20 pr20">
			<el-table
				:data="tableData"
				border
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
			>
				<!-- <el-table-column type="selection" width="55" /> -->
				<el-table-column label="序号" type="index" width="55" />
				<el-table-column prop="name" label="企业信息内容" />
				<el-table-column prop="isEdit" label="可编辑" width="180">
					<template slot-scope="scope">
						<el-checkbox v-model="scope.row.isEdit" label="可编辑" />
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
	name: 'systemPermissionsRight',
	data() {
		return {
			form: {
				input1: '总部投资管理部',
				input2: 'Option1',
			},
			tableData: [
				{
					name: '公司名称',
					isEdit: false,
				},
				{
					name: '工商成立日期',
					isEdit: false,
				},
				{
					name: '经营范围',
					isEdit: false,
				},
				{
					name: '法定代表人/分支机构负责人',
					isEdit: false,
				},
			],
			options: [
				{
					value: 'Option1',
					label: '总部投资管理部管理员1',
				},
				{
					value: 'Option2',
					label: '总部投资管理部管理员2',
				},
			],
		}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 新增
		 * @return {*}
		 */
		onAdd() {},

		/**
		 * @description: 保存
		 * @return {*}
		 */
		onSave() {},

		/**
		 * @description: 删除
		 * @return {*}
		 */
		onDelete() {},
	},
}
</script>

<style lang="scss" scoped></style>
