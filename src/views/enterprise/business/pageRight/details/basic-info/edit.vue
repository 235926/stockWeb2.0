<!--
 * @Description: 股东信息修改
 * @Date: 2022-07-15 11:58:21
 * @LastEditTime: 2022-07-15 14:25:16
-->
<template>
	<el-dialog
		:visible.sync="isShowDialog"
		:width="width + 'px'"
		:destroy-on-close="true"
		:close-on-click-modal="false"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="formRef" :model="form" :rules="rules" label-width="135px">
				<el-form-item prop="GD_NAME" label="股东名称">
					<el-input
						v-model="form.GD_NAME"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					></el-input>
				</el-form-item>

				<el-form-item prop="GD_TYPE" label="股东类型">
					<el-select v-model="state.form.GD_TYPE" placeholder="请选择">
						<el-option label="我方" value="1"></el-option>
						<el-option label="外部" value="2"></el-option>
					</el-select>
				</el-form-item>

				<el-form-item prop="GS_CG_RATIO" label="工商持股比例(%)">
					<el-input
						v-model="form.GS_CG_RATIO"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					></el-input>
				</el-form-item>

				<el-form-item prop="YS_CG_RATIO" label="预算持股比例(%)">
					<el-input
						v-model="form.YS_CG_RATIO"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
						oninput="value=value.replace(/[^\d.]/g,'')"
					></el-input>
				</el-form-item>

				<el-form-item prop="HJ_CG_RATIO" label="会计持股比例(%)">
					<el-input
						v-model="form.HJ_CG_RATIO"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
						oninput="value=value.replace(/[^\d.]/g,'')"
					></el-input>
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
import { getBusinessGdEdit } from '@/api/index.js' // api

export default {
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
			// 表单验证
			rules: {
				GD_NAME: [{ required: true, trigger: 'blur', message: '请输入股东名称' }],
				GD_TYPE: [{ required: true, trigger: 'blur', message: '请选择股东类型' }],
				GS_CG_RATIO: [{ required: true, trigger: 'blur', message: '请输入工商持股比例' }],
				YS_CG_RATIO: [{ required: true, trigger: 'blur', message: '请输入预算持股比例' }],
				HJ_CG_RATIO: [{ required: true, trigger: 'blur', message: '请输入会计持股比例' }],
			},
		}
	},
	// 组件方法
	methods: {
		/**
		 * @description: 打开弹窗
		 * @return {*}
		 */
		openDialog(scope) {
			this.form = Object.assign({}, scope)
			this.isShowDialog = true
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 */
		onCancel() {
			this.isShowDialog = false
			this.$refs.formRef.resetFields()
		},

		/**
		 * @description: 提交
		 * @return {*}
		 */
		onSubmit() {
			this.$refs.formRef.validate((valid) => {
				if (valid) {
					getBusinessGdEdit(this.form).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.$message.success('修改成功')
							this.bus.$emit('getBusinessBasicInfoAddEditDel')
							this.onCancel()
						}
					})
				} else {
					return false
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
