<!--
 * @Description: 自定义样 form 样式一
 * @Author: cdl
 * @Date: 2022-06-19 12:07:39
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 14:41:45
-->
<template>
	<el-form label-width="150px" size="medium" class="form-style-one mlr20">
		<el-form-item
			:label="item.label"
			v-for="(item, index) in data"
			:key="index"
			:style="{ width: item.type === 'textarea' ? '100%' : '50%' }"
		>
			<el-input v-if="item.type === 'input'" v-model="item.name" :readonly="item.readonly"></el-input>

			<el-input
				v-if="item.type === 'textarea'"
				v-model="item.name"
				type="textarea"
				:rows="3"
				resize="none"
				placeholder="请输入内容"
				:readonly="item.readonly"
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
		data: {
			type: Array,
		},
	},
}
</script>

<style lang="scss" scoped></style>
