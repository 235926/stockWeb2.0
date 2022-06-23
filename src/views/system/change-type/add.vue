<!--
 * @Description: 变更类型维护 - 新增
 * @Author: cdl
 * @Date: 2022-06-15 23:00:02
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 11:06:35
-->
<template>
	<el-dialog :visible.sync="visible" :width="width + 'px'" :destroy-on-close="true" :before-close="onCancel">
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="form" :model="form" label-width="120px" class="pr50">
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
			fieldData: [], // 可更新字段
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetChangeTypeField()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取可更新字段
		 * @return {*}
		 * @author: cdl
		 */
		onGetChangeTypeField() {
			getChangeTypeField().then((res) => {
				this.fieldData = res.data
			})
		},

		/**
		 * @description: 关闭弹窗
		 * @return {*}
		 * @author: cdl
		 */
		onCancel() {
			this.$emit('update:visible', false)
			this.$refs.form.resetFields()
		},

		/**
		 * @description: 提交
		 * @return {*}
		 * @author: cdl
		 */
		onSubmit() {
			addChangeType(this.form).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.$message.success('新增成功')
					this.$emit('childClick')
					this.onCancel()
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
