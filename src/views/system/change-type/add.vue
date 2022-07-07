<!--
 * @Description: 变更类型维护 - 新增
 * @Date: 2022-06-15 23:00:02
 * @LastEditTime: 2022-07-06 13:25:25
-->
<template>
	<el-dialog :visible.sync="isShowDialog" :width="width + 'px'" :destroy-on-close="false" :before-close="onCancel">
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="formRef" :model="form" :rules="rules" label-width="120px" class="pr50">
				<el-form-item prop="EDIT_NAME" label="企业变更类型">
					<el-input v-model="form.EDIT_NAME" placeholder="请输入"></el-input>
				</el-form-item>
				<el-form-item prop="EDIT_FIELD_NAME" label="可更新字段">
					<el-select v-model="form.EDIT_FIELD_NAME" :multiple="true" placeholder="请选择">
						<el-option
							v-for="item in fieldData"
							:key="item.CMPY_FIELD_CODE"
							:label="item.CMPY_FIELD_NAME"
							:value="item.CMPY_FIELD_CODE"
						></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="LINK_ROLE" label="变更角色">
					<el-select v-model="form.LINK_ROLE" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</el-scrollbar>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" round @click="onSubmit">确认</el-button>
			<el-button round @click="onCancel">取消</el-button>
		</span>
	</el-dialog>
</template>

<script>
import { addChangeType, getChangeTypeField } from '@/api/index.js' // api
export default {
	// 组件名称
	name: 'partyInfoRightAdd',
	// 组件参数 接收来自父组件的数据
	props: {
		title: {
			type: String,
		},
		width: {
			type: Number,
			default: 677,
		},
	},
	// 组件状态值
	data() {
		return {
			isShowDialog: false, // 弹窗状态
			form: {}, // 表单
			fieldData: [], // 可更新字段
			rules: {
				// 表单验证
				EDIT_NAME: [{ required: true, trigger: 'blur', message: '请输入企业变更类型' }],
				EDIT_FIELD_NAME: [{ required: true, trigger: 'change', message: '请选择可更新字段' }],
				LINK_ROLE: [{ required: true, trigger: 'change', message: '请选择变更角色' }],
			},
		}
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取可更新字段
		 * @return {*}
		 */
		onGetChangeTypeField() {
			getChangeTypeField().then((res) => {
				this.fieldData = res.data
			})
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 */
		onCancel() {
			this.$refs.formRef.resetFields()
		},

		/**
		 * @description: 提交
		 * @return {*}
		 */
		onSubmit() {
			this.$refs.formRef.validate((valid) => {
				if (valid) {
					addChangeType(this.form).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.$message.success('新增成功')
							this.$emit('childClick')
							this.onCancel()
						}
					})
				} else {
					return false
				}
			})
		},

		/**
		 * @description: 打开弹窗
		 * @return {*}
		 */
		openDialog() {
			this.isShowDialog = true
			this.onGetChangeTypeField()
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 */
		onCancel() {
			this.isShowDialog = false
		},
	},
}
</script>

<style lang="scss" scoped></style>
