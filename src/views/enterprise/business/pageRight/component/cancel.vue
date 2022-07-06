<!--
 * @Description: 注销页面
 * @Date: 2022-06-16 21:23:43
 * @LastEditTime: 2022-06-16 21:41:43
-->
<template>
	<el-dialog :visible.sync="visible" :width="width + 'px'" :destroy-on-close="true" :before-close="onCancel">
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="formRef" :model="form" label-width="120px" class="pr50">
				<el-form-item prop="input1" label="任务类型">
					<el-select v-model="form.input1" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="input2" label="注销机构">
					<el-select v-model="form.input2" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="input3" label="处理角色">
					<el-select v-model="form.input3" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
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
export default {
	// 组件名称
	name: 'enterpriseBusinessCancel',
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
		 * @description: 关闭弹窗
		 * @return {*}
		 */
		onCancel() {
			this.$emit('update:visible', false)
			this.$refs.formRef.resetFields()
		},

		/**
		 * @description: 提交
		 * @return {*}
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
