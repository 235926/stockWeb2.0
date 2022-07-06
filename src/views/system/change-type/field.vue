<!--
 * @Description: 变更类型维护 - 可更新字段
 * @Date: 2022-06-16 21:02:56
 * @LastEditTime: 2022-06-23 11:57:44
-->

<template>
	<el-dialog
		:visible.sync="visible"
		:width="width + 'px'"
		:close-on-click-modal="false"
		:destroy-on-close="true"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
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
	model: {
		// v-model 绑定的值
		prop: 'visible',
		event: 'close',
	},
	// 组件参数 接收来自父组件的数据
	props: {
		// v-model 绑定的值
		visible: {
			type: Boolean,
			default: false,
		},
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
	// 局部注册的组件
	components: {},
	// 组件状态值
	data() {
		return {
			fieldData: [], // 可更新字段
			selection: [], // 选择的内容
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {
		/**
		 * @description: 获取可更新字段
		 * @return {*}
		 */
		onGetChangeTypeField() {
			this.loading = true
			getChangeTypeField().then((res) => {
				this.fieldData = res.data

				// 设置默认选中
				let EDIT_FIELD_NAME = this.scope.EDIT_FIELD_NAME.split(',')
				EDIT_FIELD_NAME.forEach((item) => {
					res.data.forEach((val) => {
						if (`'${val.CMPY_FIELD_CODE}'` == item) {
							this.$nextTick(() => {
								this.$refs.tableRef.toggleRowSelection(val, true)
							})
						}
					})
				})

				this.loading = false
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
		 * @description: 关闭弹窗
		 * @return {*}
		 */
		onCancel() {
			this.$emit('update:visible', false)
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
			this.$emit('update:scope', this.scope)
			this.onCancel()
		},
	},
	/**
	 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	 */
	created() {},
}
</script>

<style lang="scss" scoped></style>
