<!--
 * @Description: 新增
 * @Date: 2022-07-08 22:53:53
 * @LastEditTime: 2022-07-22 14:09:41
-->
<template>
	<div class="permissions-add" v-loading="loading">
		<div class="btn ml20">
			<el-button round @click="onSave">保存</el-button>
		</div>

		<el-divider />

		<el-form ref="formRef" :model="form" :rules="rules" label-width="120px" class="mr20">
			<el-row :gutter="20">
				<el-col :span="12">
					<el-form-item prop="EDIT_NAME" label="编辑权限标题">
						<el-input
							v-model="form.EDIT_NAME"
							placeholder="请输入编辑权限标题"
							type="textarea"
							maxlength="40"
							autosize
							show-word-limit
							resize="none"
						/>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item prop="LINK_ROLE" label="可维护的角色">
						<el-select v-model="form.LINK_ROLE" placeholder="请选择维护的角色" clearable>
							<el-option v-for="item in dictionary.SY_ORG_ROLE_STOCK" :key="item.ID" :label="item.NAME" :value="item.ID" />
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<el-divider />

		<div class="pl20 pr20">
			<el-table :data="tableData" :border="true" :header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }">
				<el-table-column label="序号" type="index" width="55" />
				<el-table-column prop="CMPY_FIELD_NAME" label="企业信息内容" />
				<el-table-column label="可编辑" width="180">
					<template slot-scope="scope">
						<el-checkbox
							v-model="scope.row.S_EDIT"
							:checked="scope.row.S_EDIT === '1' ? true : false"
							true-label="1"
							false-label="2"
							label="可编辑"
							@change="checkboxChange(scope)"
						/>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
import { getChangeTypeField, getPermissionsAdd } from '@/api/index.js' // api
export default {
	// 组件状态值
	data() {
		return {
			form: {}, // 表单
			tableData: [], // 数据列表
			EDIT_FIELD_NAME: [], // 可编辑选中
			rules: {
				EDIT_NAME: [{ required: true, trigger: 'blur', message: '请输入编辑权限标题' }],
				LINK_ROLE: [{ required: true, trigger: 'change', message: '请选择可维护的角色' }],
			},
			loading: false, // 加载状态
		}
	},
	computed: {
		// 获取 OA 角色/字典
		dictionary() {
			return this.$store.getters?.dictionary
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetChangeTypeField()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取可更新字段
		 * @return {*}
		 */
		onGetChangeTypeField() {
			this.loading = true

			getChangeTypeField().then((res) => {
				this.tableData = res.EDIT_DATA

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 可编辑选中
		 * @return {*}
		 */
		checkboxChange(scope) {
			const index = this.EDIT_FIELD_NAME.indexOf(scope.row.CMPY_FIELD_CODE)
			if (index === -1) {
				this.EDIT_FIELD_NAME.push(scope.row.CMPY_FIELD_CODE)
			} else {
				this.EDIT_FIELD_NAME.splice(index, 1)
			}
		},

		/**
		 * @description: 保存
		 * @return {*}
		 */
		onSave() {
			const params = {
				data: {
					EDIT_FIELD_NAME: this.EDIT_FIELD_NAME,
					EDIT_NAME: this.form.EDIT_NAME,
					LINK_ROLE: this.form.LINK_ROLE,
				},
			}

			this.$refs.formRef.validate((valid) => {
				if (valid) {
					if (this.EDIT_FIELD_NAME.length > 0) {
						getPermissionsAdd(params).then((res) => {
							if (res._MSG_.includes('OK,')) {
								this.form = {}
								this.onGetChangeTypeField()
								this.bus.$emit('onGetPermissionsAddEditDel')
								this.$message.success('新增成功')
							}
						})
					} else {
						this.$message.error('可编辑权限不能为空')
					}
				} else {
					return false
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
