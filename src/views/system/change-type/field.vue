<!--
 * @Description: 变更类型维护 - 可更新字段
 * @Author: cdl
 * @Date: 2022-06-16 21:02:56
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 21:11:17
-->

<template>
	<el-dialog
		:visible.sync="visible"
		:width="width + 'px'"
		:destroy-on-close="true"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar class="scrollbar-x">
			<div class="dialog-main">
				<el-table
					:data="tableData"
					border
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="55" />
					<el-table-column label="序号" type="index" width="55" />
					<el-table-column prop="name" label="可更新字段" />
				</el-table>
			</div>
		</el-scrollbar>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" round @click="onSubmit">确认</el-button>
			<el-button round @click="onCancel">取消</el-button>
		</span>
	</el-dialog>
</template>

<script>
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
		height: {
			default: '',
		},
	},
	// 局部注册的组件
	components: {},
	// 组件状态值
	data() {
		return {
			tableData: [
				{ name: '公司名称' },
				{ name: '经营范围' },
				{ name: '法定代表人' },
				{ name: '董监事变更' },
			],
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
		 * @description: 选中内容
		 * @param {*} val
		 * @return {*}
		 * @author: cdl
		 */
		handleSelectionChange(val) {
			this.selection = val
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 * @author: cdl
		 */
		onCancel() {
			this.$emit('update:visible', false)
		},

		/**
		 * @description: 提交
		 * @return {*}
		 * @author: cdl
		 */
		onSubmit() {
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
