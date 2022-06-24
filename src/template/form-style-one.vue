<!--
 * @Description: 自定义样 form 样式一
 * @Author: cdl
 * @Date: 2022-06-19 12:07:39
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 12:53:22
-->
<template>
	<el-form label-width="150px" class="form-style-one mlr20">
		<el-form-item
			:label="item.label"
			v-for="(item, index) in form"
			:key="index"
			:class="{ textarea: item.type === 'textarea' }"
			:style="{ width: item.type === 'textarea' ? '100%' : '50%' }"
		>
			<el-input v-if="item.type === 'input'" v-model="item.name" :readonly="readonly"></el-input>

			<el-input
				v-if="item.type === 'textarea'"
				v-model="item.name"
				type="textarea"
				:rows="3"
				resize="none"
				placeholder="请输入内容"
				:readonly="readonly"
			>
			</el-input>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	// 组件名称
	name: 'form-style-one',
	// 组件参数 接收来自父组件的数据
	props: {
		// 数据列表
		// data: {
		// 	type: Array,
		// },
	},
	// 组件状态值
	data() {
		return {
			form: [
				{ label: '公司名称', name: '工商注册公司名称', readonly: false, type: 'input' },
				{ label: '统一信用代码', name: '91110115MA04BH9K88', readonly: true, type: 'input' },
				{ label: '法定代表人', name: '李松平', readonly: true, type: 'input' },
				{ label: '公司状况', name: '正常运营', readonly: true, type: 'input' },
				{ label: '工商成立日期', name: '开发商首次获取股权', readonly: true, type: 'input' },
				{ label: '注册资本币种', name: '人民币', readonly: true, type: 'input' },
				{ label: '注册资本(万元)', name: '2,988,196.016', readonly: true, type: 'input' },
				{ label: '所属公司', name: '北京首都创业集团', readonly: true, type: 'input' },
				{ label: '企业类别', name: '国有全资', readonly: true, type: 'input' },
				{ label: '经营期限', name: '长期', readonly: true, type: 'input' },
				{ label: '登记注册类型', name: '股份有限公司', readonly: true, type: 'input' },
				{ label: '管理层级', name: '一级', readonly: true, type: 'input' },
				{ label: '产权层级', name: '一级', readonly: true, type: 'input' },
				{ label: '管理团队', name: '城发总部', readonly: true, type: 'input' },
				{ label: '国资监管范围', name: '国资监管', readonly: true, type: 'input' },
				{ label: '是否城发体系', name: '国资监管', readonly: true, type: 'input' },
				{ label: '注册地址(详)', name: '请填写', readonly: true, type: 'input' },
				{ label: '注册地街道门牌号', name: '请填写', readonly: true, type: 'input' },
				{ label: '经营范围', name: '请填写', readonly: true, type: 'textarea' },
				{ label: '公司属性(公司职能)', name: '城发总部', readonly: true, type: 'input' },
				{ label: '地块名称', name: '请填写', readonly: true, type: 'input' },
				{ label: '公司用途', name: '全资子公司', readonly: true, type: 'input' },
				{ label: '是否分红', name: 1, readonly: true, type: 'radio' },
				{ label: '是否分红', name: '是', readonly: true, type: 'input' },
				{ label: '是否操盘', name: '主操盘', readonly: true, type: 'input' },
			],
		}
	},
	computed: {
		// 是否只读
		readonly() {
			const isTrue = this.$route.query?.readonly
			return isTrue ? false : true
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
}
</script>

<style lang="scss" scoped></style>
