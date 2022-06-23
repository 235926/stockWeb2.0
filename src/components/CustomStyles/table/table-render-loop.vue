<!--
 * @Description: table 循环渲染数据
 * @Author: cdl
 * @Date: 2022-06-20 15:34:53
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 15:33:11
-->
<template>
	<div class="table-render-loop">
		<el-table :data="tableData" :border="true">
			<el-table-column label="序号" type="index" align="center" width="55" />

			<!-- 设置表头数据源，并循环渲染出来，自定义绑定  property 对应列内容的字段名 -->
			<el-table-column
				v-for="item in tableHeader"
				:key="item.key"
				:label="item.label"
				:property="item.key"
				:align="item.align"
				:width="item.width"
			>
				<template #default="scope">
					{{ scope.row[scope.column.property] }}
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'table-render-loop',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {
		tableHeader: {
			type: Array,
			default: () => [],
		},
		tableData: {
			default: () => [],
		},
	},
	// 组件状态值
	data() {
		return {}
	},
	// 计算属性
	computed: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
