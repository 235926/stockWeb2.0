<!--
 * @Description: 占有页面
 * @Date: 2022-06-16 21:20:52
 * @LastEditTime: 2022-07-18 10:32:59
-->
<template>
	<el-dialog
		:visible.sync="visible"
		:width="width + 'px'"
		:destroy-on-close="true"
		:close-on-click-modal="false"
		:before-close="onCancel"
	>
		<span slot="title" class="dialog-header">{{ title }}</span>

		<el-scrollbar>
			<el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
				<el-form-item prop="FOUND_TYPE" label="任务类型">
					<el-select v-model="form.FOUND_TYPE" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="CMPY_NAME" label="占有公司名称">
					<el-input
						v-model="form.CMPY_NAME"
						placeholder="请输入"
						type="textarea"
						maxlength="40"
						autosize
						show-word-limit
						resize="none"
					/>
				</el-form-item>

				<el-form-item prop="CMPY_BELONG" label="上级股权公司">
					<el-cascader
						v-model="form.CMPY_BELONG"
						:options="parent"
						:props="parentProps"
						:show-all-levels="false"
						:clearable="true"
						placeholder="请选择"
					>
						<template #default="{ node, data }">
							<span>{{ data.CMPY_NAME }}</span>
							<span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
						</template>
					</el-cascader>
				</el-form-item>

				<el-form-item prop="ODEPT_CODE" label="管理团队">
					<el-cascader
						v-model="form.ODEPT_CODE"
						:options="team"
						:props="teamProps"
						:show-all-levels="false"
						:clearable="true"
						placeholder="请选择"
					>
						<template #default="{ node, data }">
							<span>{{ data.NAME }}</span>
							<span v-if="!node.isLeaf"> ({{ data.CHILD.length }}) </span>
						</template>
					</el-cascader>
				</el-form-item>
			</el-form>
		</el-scrollbar>

		<span slot="footer" class="dialog-footer">
			<el-button type="primary" round @click="onSubmit">派单</el-button>
			<el-button round @click="onCancel">取消</el-button>
		</span>
	</el-dialog>
</template>

<script>
import { getBusinessLeftTree, getOaData, getBusinessSendOwn } from '@/api/index.js' // api

export default {
	// 组件名称
	name: 'enterpriseBusinessPossession',
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
	},
	// 组件状态值
	data() {
		return {
			form: {}, // 表单
			options: [], // OA 角色/字典
			parent: [], // 上级股权公司
			// 上级股权公司 cascader 配置选项
			parentProps: {
				value: 'CMPY_BASE_CODE', // 绑定 ID
				label: 'CMPY_NAME', // 显示 label
				children: 'children', // 指定选项的子选项为选项对象的某个属性值
				checkStrictly: true, // 单选，否则只能选择最后一级
				emitPath: false, // 只返回当前选中的节点，父级节点不返回
			},
			team: [], // 管理团队
			// team cascader 配置选项
			teamProps: {
				value: 'ID', // 绑定 ID
				label: 'NAME', // 显示 label
				children: 'CHILD', // 指定选项的子选项为选项对象的某个属性值
				checkStrictly: true, // 单选，否则只能选择最后一级
				emitPath: false, // 只返回当前选中的节点，父级节点不返回
			},
			// 表单验证
			rules: {
				FOUND_TYPE: [{ required: true, trigger: 'change', message: '请选择任务类型' }],
				CMPY_NAME: [{ required: true, trigger: 'blur', message: '请输入占有公司名称' }],
				CMPY_BELONG: [{ required: true, trigger: 'blur', message: '请选择上级股权公司' }],
				ODEPT_CODE: [{ required: true, trigger: 'change', message: '请选择管理团队' }],
			},
		}
	},
	mounted() {
		// 监听侧坐导航栏点击获取右侧列表数据
		this.bus.$on('possessionRef', (data) => {
			if(data){
				this.form.CMPY_BELONG = data.CMPY_BASE_CODE
			}
			this.onGetOaData()
		})
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取 OA 角色/字典
		 * @return {*}
		 */
		onGetOaData() {
			// 获取任务类型
			getOaData({ dictId: 'STOCK_FOUND_TYPE' }).then((res) => {
				if (res.bean._MSG_?.indexOf('ERROR,') == 0) {
					this.$message.error(res.bean._MSG_)
				} else {
					this.options = res.bean._DATA_
				}
			})

			// 获取管理团队
			getOaData({ dictId: 'STOCK_MANAGE_TEAM' }).then((res) => {
				this.team = res.bean._DATA_
			})

			// 获取上级党组织
			getBusinessLeftTree().then((res) => {
				this.parent = res.treeData
			})
		},

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
			this.$refs.formRef.validate((valid) => {
				if (valid) {
					getBusinessSendOwn(this.form).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.bus.$emit('possessionRefRefresh')
							this.$message.success('派单成功')
							this.onCancel()
						}
					})
				} else {
					return false
				}
			})
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('possessionRef')
	},
}
</script>

<style lang="scss" scoped></style>
