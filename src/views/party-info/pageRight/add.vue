<!--
 * @Description: 党组织信息管理 - 添加
 * @Date: 2022-06-15 13:28:02
 * @LastEditTime: 2022-07-13 15:31:28
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
				<el-form-item prop="INFO_PCODE" label="上级党组织">
					<el-cascader
						v-model="form.INFO_PCODE"
						:options="INFO_PCODE"
						:props="props"
						:show-all-levels="false"
						:clearable="true"
						placeholder="不选择默认一级组织"
					>
						<template #default="{ node, data }">
							<span>{{ data.INFO_NAME }}</span>
							<span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
						</template>
					</el-cascader>
				</el-form-item>
				<el-form-item prop="INFO_NAME" label="党组织名称">
					<el-input
						v-model="form.INFO_NAME"
						type="textarea"
						placeholder="请输入"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
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
import { getPartyInfoTree, getPartyInfoAdd, getPartyInfoRepeatName } from '@/api/index.js' // api
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
			INFO_PCODE: [], // 上级党组织
			form: {}, // 表单
			props: {
				// 配置选项
				value: 'INFO_CODE', // 绑定 ID
				label: 'INFO_NAME', // 显示 label
				children: 'children', // 指定选项的子选项为选项对象的某个属性值
				checkStrictly: true, // 单选，否则只能选择最后一级
				emitPath: false, // 只返回当前选中的节点，父级节点不返回
			},
			rules: {
				// 表单验证
				INFO_NAME: [{ required: true, trigger: 'blur', message: '请输入党组织名称' }],
			},
		}
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取上级党组织
		 * @return {*}
		 */
		onGetPartyInfoTree() {
			getPartyInfoTree().then((res) => {
				this.INFO_PCODE = res.treeData
			})
		},

		/**
		 * @description: 打开弹窗
		 * @return {*}
		 */
		openDialog(row) {
			this.isShowDialog = true
			this.onGetPartyInfoTree()
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
			this.$refs.formRef.validate(async (valid) => {
				if (valid) {
					// 重名判断
					const { num } = await getPartyInfoRepeatName({ INFO_NAME: this.form.INFO_NAME })
					if (num === '0') {
						getPartyInfoAdd(this.form).then((res) => {
							if (res._MSG_.includes('OK,')) {
								this.$message.success('添加成功')
								this.bus.$emit('getPartyInfoAddEditDelete')
								this.onCancel()
							}
						})
					} else {
						this.$message.error('已有相同名党组织名称，请修改！')
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
