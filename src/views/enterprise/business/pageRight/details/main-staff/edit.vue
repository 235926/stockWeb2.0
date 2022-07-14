<!--
 * @Description: 主要人员 - 修改
 * @Date: 2022-06-23 21:14:29
 * @LastEditTime: 2022-07-14 17:04:38
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
			<el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
				<el-form-item prop="USER_NAME" label="股东名称">
					<el-input
						v-model="form.USER_NAME"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					></el-input>
				</el-form-item>

				<el-form-item prop="USER_POST" label="职务">
					<el-input
						v-model="form.USER_POST"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					></el-input>
				</el-form-item>

				<el-form-item prop="OUT_DEPT" label="派出单位">
					<el-input
						v-model="form.OUT_DEPT"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					></el-input>
				</el-form-item>

				<el-form-item prop="START_TIME" label="任职时间">
					<el-date-picker
						v-model="form.START_TIME"
						type="date"
						value-format="YYYY-MM-DD"
						placeholder="请选择"
					/>
				</el-form-item>

				<el-form-item prop="S_DIR" label="是否是外部董事" v-if="type === 1">
					<el-select v-model="form.S_DIR" placeholder="请选择">
						<el-option label="是" value="1"></el-option>
						<el-option label="不是" value="2"></el-option>
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
import { getBusinessMainStaffEdit } from '@/api/index.js' // api

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
			type: '', // 工商/审批
			// 表单
			form: {
				CMPY_ID: this.$route.query.id,
			},
			// 表单验证
			rules: {
				USER_NAME: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
				USER_POST: [{ required: true, trigger: 'blur', message: '请输入职务' }],
				OUT_DEPT: [{ required: true, trigger: 'blur', message: '请输入派出单位' }],
				START_TIME: [{ required: true, trigger: 'change', message: '请选择任职时间' }],
				S_DIR: [{ required: true, trigger: 'change', message: '请选择是否是外部董事' }],
			},
		}
	},
	// 组件方法
	methods: {
		/**
		 * @description: 打开弹窗
		 * @return {*}
		 */
		openDialog(scope, type) {
			this.type = type
			this.form = Object.assign({}, scope)
			this.form.MAIN_TYPE = type
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
					getBusinessMainStaffEdit(this.form).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.$message.success('修改成功')
							this.bus.$emit('getBusinessMainStaffAddEditDel')
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
