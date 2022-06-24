<!--
 * @Description: 主要人员 - 修改
 * @Author: cdl
 * @Date: 2022-06-23 21:14:29
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 22:47:35
-->
<template>
	<el-dialog :visible.sync="isShowDialog" :width="width + 'px'" :destroy-on-close="true" :before-close="onCancel">
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="formRef" :model="form" label-width="120px" class="pr50">
				<el-form-item prop="region1" label="上级党组织">
					<el-select v-model="form.region1" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="input" label="党组织名称">
					<el-input v-model="form.input" placeholder="请输入"></el-input>
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
	// 局部注册的组件
	components: {},
	// 组件状态值
	data() {
		return {
			isShowDialog: false, // 弹窗状态
			form: {}, // 表单
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {
		/**
		 * @description: 打开弹窗
		 * @return {*}
		 * @author: cdl
		 */
		openDialog() {
			this.isShowDialog = true
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 * @author: cdl
		 */
		onCancel() {
			this.isShowDialog = false
			this.$refs.formRef.resetFields()
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
