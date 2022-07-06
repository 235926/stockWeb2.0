<!--
 * @Description: 自定义样 form 样式一
 * @Date: 2022-06-19 12:07:39
 * @LastEditTime: 2022-06-23 15:36:35
-->
<template>
	<el-form label-width="150px" class="form-style-one mlr20">
		<el-form-item
			:label="item.label"
			v-for="(item, index) in data"
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
		data: {
			type: Array,
		},
	},
	// 组件状态值
	data() {
		return {}
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
