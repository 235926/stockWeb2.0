<!--
 * @Description: 企业信息更新权限 - 右侧页面
 * @Date: 2022-06-15 09:19:42
 * @LastEditTime: 2022-07-08 18:12:07
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
								v-for="item in ROLE_DATA"
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
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
			>
				<el-table-column label="序号" type="index" width="55" />
				<el-table-column prop="CMPY_FIELD_NAME" label="企业信息内容" />
				<el-table-column prop="isEdit" label="可编辑" width="180">
					<template slot-scope="scope">
						<el-checkbox
							v-model="scope.row.isEdit"
							:checked="scope.row.S_EDIT == '1' ? true : false"
							true-label="1"
							false-label="2"
							label="可编辑"
						/>
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
import { getPermissionsRightList } from '@/api/index.js' // api

export default {
	name: 'systemPermissionsRight',
	data() {
		return {
			form: {},
			ROLE_DATA: [], // 可维护的角色
			tableData: [], // 数据列表
		}
	},
	mounted() {
		this.bus.$on('onGetPermissionsRightList', (id) => {
			this.onGetPermissionsRightList(id)
		})
	},
	methods: {
		/**
		 * @description: 获取数据列表
		 * @return {*}
		 */
		onGetPermissionsRightList(id) {
			const params = {
				EDIT_CODE: id,
			}
			getPermissionsRightList(params).then((res) => {
				this.tableData = res.EDIT_DATA
				this.ROLE_DATA = res.ROLE_DATA
			})
		},

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
	// 页面销毁
	destroyed() {
		this.bus.$off('onGetPermissionsRightList')
	},
}
</script>

<style lang="scss" scoped></style>
