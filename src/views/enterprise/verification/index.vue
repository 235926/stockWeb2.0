<!--
 * @Description: 信息核查
 * @Date: 2022-06-14 18:43:33
 * @LastEditTime: 2022-06-28 11:16:57
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content margin20">
			<div class="flex-between-center mb20">
				<div class="search width259">
					<el-input v-model="filterText" placeholder="请输入关键词" />
					<el-divider direction="vertical" />
					<span class="search-btn">搜索</span>
				</div>
				<div class="date">核查时间：2022-03-01</div>
			</div>

			<el-table
				:data="tableData"
				:border="true"
				empty-text="暂无数据"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				@row-click="handleRowClick"
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
	name: 'enterpriseVerification',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			filterText: '', // 搜索
			tableHeader: [
				{ label: '企业名称', key: 'data1' },
				{ label: '参股控股', key: 'data2' },
				{ label: '管理团队', key: 'data3' },
				{ label: '差异', key: 'data4' },
			],
			tableData: [
				{
					data1: '置威科技（上海）有限公司',
					data2: '控股',
					data3: '北京公司',
					data4: '法人、注册资金',
				},
				{
					data1: '首创新城镇建设投资有限公司',
					data2: '控股',
					data3: '北京公司',
					data4: '法人、注册资金',
				},
				{
					data1: '北京首创生态环保集团股份有限公司',
					data2: '控股',
					data3: '北京公司',
					data4: '法人、注册资金',
				},
			],
		}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: table 当某一行被点击时会触发该事件
		 * @param {*} row
		 * @return {*}
		 */
		handleRowClick(row) {
			let routeUrl = this.$router.resolve({
				path: '/enterprise/verification/details',
				query: {
					item: JSON.stringify(row),
				},
			})
			window.open(routeUrl.href, '_blank')
		},
	},
}
</script>

<style lang="scss" scoped></style>
