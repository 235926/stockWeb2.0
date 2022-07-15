<!--
 * @Description: 变更类型维护 - 可更新字段
 * @Date: 2022-06-16 21:02:56
 * @LastEditTime: 2022-07-06 13:29:52
-->

<template>
	<el-dialog
		:visible.sync="isShowDialog"
		:width="width + 'px'"
		:close-on-click-modal="false"
		:destroy-on-close="true"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar v-loading="loading">
			<el-table
				ref="tableRef"
				:data="fieldData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				@selection-change="handleSelectionChange"
			>
				<el-table-column type="selection" width="55" />
				<el-table-column label="序号" type="index" width="55" />
				<el-table-column prop="CMPY_FIELD_NAME" label="可更新字段" />
			</el-table>
		</el-scrollbar>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" round @click="onSubmit">确认</el-button>
			<el-button round @click="onCancel">取消</el-button>
		</span>
	</el-dialog>
</template>

<script>
import { getChangeTypeField } from '@/api/index.js' // api
export default {
	// 组件名称
	name: 'partyInfoRightField',
	// 组件参数 接收来自父组件的数据
	props: {
		title: {
			type: String,
		},
		width: {
			type: Number,
			default: 677,
		},
		// 父组件点击传递过来的值
		scope: {
			type: Object,
		},
	},
	// 组件状态值
	data() {
		return {
			isShowDialog: false, // 弹窗状态
			fieldData: [], // 可更新字段
			selection: [], // 选择的内容
			loading: false, // 加载状态
		}
	},
	// 组件方法
	methods: {
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

		/**
		 * @description: 获取可更新字段
		 * @return {*}
		 */
		onGetChangeTypeField() {
			this.loading = true
			getChangeTypeField().then((res) => {
				this.fieldData = res.EDIT_DATA

				// 设置默认选中
				let EDIT_FIELD_NAME = this.scope.EDIT_FIELD_NAME.split(',')
				EDIT_FIELD_NAME.forEach((item) => {
					res.EDIT_DATA.forEach((val) => {
						if (val.CMPY_FIELD_CODE === item) {
							this.$nextTick(() => {
								this.$refs.tableRef.toggleRowSelection(val, true)
							})
						}
					})
				})

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 选中内容
		 * @param {*} val
		 * @return {*}
		 */
		handleSelectionChange(val) {
			this.selection = val
		},

		/**
		 * @description: 提交
		 * @return {*}
		 */
		onSubmit() {
			let CMPY_FIELD_CODE = [] // id
			let CMPY_FIELD_NAME = [] // name
			this.selection.forEach((item) => {
				CMPY_FIELD_CODE.push(item.CMPY_FIELD_CODE)
				CMPY_FIELD_NAME.push(item.CMPY_FIELD_NAME)
			})
			this.scope.EDIT_FIELD_NAME = CMPY_FIELD_CODE.join()
			this.scope.CMPY_FIELD_NAME = CMPY_FIELD_NAME.join()
			this.onCancel()
			this.onCancel()
		},
	},
}
</script>

<style lang="scss" scoped></style>
