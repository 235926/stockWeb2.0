<!--
 * @Description: 信息核查详情
 * @Author: cdl
 * @Date: 2022-06-28 11:14:10
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 11:16:33
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content margin20">
			<div class="flex-between-center mb20">
				<div class="name weight600">北京益凯优置业有限公司</div>
				<div class="date">核查时间：2022-03-01</div>
			</div>

			<el-table
				:data="tableData"
				:border="true"
				empty-text="暂无数据"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				class="c-pointer"
			>
				<el-table-column label="序号" type="index" align="center" width="55" />

				<el-table-column
					v-for="item in tableHeader"
					:key="item.key"
					:label="item.label"
					:property="item.key"
					:align="item.align"
					:width="item.width"
				>
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: '',
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '项目', key: 'data1' },
				{ label: '自有库', key: 'data2' },
				{ label: '管理天眼查团队', key: 'data3' },
			],
			tableData: [
				{
					data1: '法人',
					data2: '张三',
					data3: '李四',
				},
				{
					data1: '注册资金',
					data2: '200000',
					data3: '3000000',
				},
			],
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {
		// 监听路由的变化
		route: {
			handler(to) {
				console.log(to)
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
