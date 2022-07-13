<!--
 * @Description: 编辑
 * @Date: 2022-07-08 22:54:06
 * @LastEditTime: 2022-07-12 18:41:31
-->
<template>
	<div class="permissions-edit" v-loading="loading">
		<div class="btn ml20">
			<el-button round @click="onAdd">新增</el-button>
			<el-button round @click="onSave">保存</el-button>
			<el-button round @click="onDelete">删除</el-button>
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
						<el-select v-model="form.LINK_ROLE" placeholder="请选择维护的角色">
							<el-option v-for="item in ROLE_DATA" :key="item.ID" :label="item.NAME" :value="item.ID" />
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
				<el-table-column prop="S_EDIT" label="可编辑" width="180">
					<template slot-scope="scope">
						<el-checkbox
							v-model="scope.row.S_EDIT"
							:checked="scope.row.S_EDIT == '1' ? true : false"
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
import { getPermissionsRightList, getOaData, getPermissionseUpdate, getPermissionsDelete } from '@/api/index.js' // api
export default {
	// 组件名称
	name: '',
	// 组件状态值
	data() {
		return {
			form: {}, // 表单
			tableData: [], // 数据列表
			ROLE_DATA: [], // 可维护的角色
			EDIT_FIELD_NAME: [], // 可编辑选中
			rules: {
				EDIT_NAME: [{ required: true, trigger: 'blur', message: '请输入编辑权限标题' }],
				LINK_ROLE: [{ required: true, trigger: 'change', message: '请选择可维护的角色' }],
			},
			leftId: '', // 左侧ID
			loading: false, // 加载状态
		}
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {
		/**
		 * @description: 获取数据列表
		 * @param {*} id
		 * @return {*}
		 */
		onGetPermissionsRightList(id) {
			this.leftId = id
			this.EDIT_FIELD_NAME = []
			this.loading = true

			const params = {
				EDIT_CODE: id,
			}
			getPermissionsRightList(params).then((res) => {
				this.form = res.ROLE_DATA
				this.tableData = res.EDIT_DATA

				// 遍历默认选中的企业信息
				res.EDIT_DATA.map((item) => {
					if (item.S_EDIT === '1') {
						this.EDIT_FIELD_NAME.push(item.CMPY_FIELD_CODE)
					}
				})
				this.onGetOaData()

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 获取 OA 角色
		 * @return {*}
		 */
		onGetOaData() {
			const params = {
				dictId: 'SY_ORG_ROLE_STOCK',
			}
			getOaData(params).then((res) => {
				this.ROLE_DATA = res.bean._DATA_
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
		 * @description: 新增
		 * @return {*}
		 */
		onAdd() {
			this.$emit('editActiveName')
		},

		/**
		 * @description: 保存
		 * @return {*}
		 */
		onSave() {
			const params = {
				data: {
					EDIT_CODE: this.leftId,
					EDIT_FIELD_NAME: this.EDIT_FIELD_NAME,
					EDIT_NAME: this.form.EDIT_NAME,
					LINK_ROLE: this.form.LINK_ROLE,
				},
			}
			this.$refs.formRef.validate((valid) => {
				if (valid) {
					if (this.EDIT_FIELD_NAME.length > 0) {
						getPermissionseUpdate(params).then((res) => {
							if (res._MSG_.includes('OK,')) {
								this.$message.success('保存成功')
								this.bus.$emit('onGetPermissionsAddEditDel')
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

		/**
		 * @description: 删除
		 * @return {*}
		 */
		onDelete() {
			const params = {
				EDIT_CODE: this.form.EDIT_CODE,
			}

			this.$confirm(`您确认要删除"${this.form.EDIT_NAME}"吗？`, '提示', {
				confirmButtonText: '确认',
				cancelButtonText: '取消',
				type: 'Warning',
			})
				.then(() => {
					getPermissionsDelete(params).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.$emit('editActiveName')
							this.bus.$emit('onGetPermissionsAddEditDel')
							this.$message.success('删除成功')
						}
					})
				})
				.catch(() => {})
		},
	},
}
</script>

<style lang="scss" scoped></style>
