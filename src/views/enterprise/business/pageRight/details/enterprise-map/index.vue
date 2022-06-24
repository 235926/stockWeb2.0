<!--
 * @Description: 企业图谱
 * @Author: cdl
 * @Date: 2022-06-18 12:09:58
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 14:27:11
-->
<template>
	<div class="business-details enterprise-map">
		<div class="business-details-item">
			<div class="flex-center header">法定代表人 / 高管</div>
			<ul>
				<li v-for="(item, index) in tableData1" :key="index" v-html="filterTextWrap(item.name)"></li>
			</ul>
		</div>

		<div class="business-details-item">
			<div class="flex-center header">投资方</div>
			<el-table
				:data="tableData2.tableData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
			>
				<el-table-column label="序号" type="index" align="center" width="55" />

				<el-table-column
					v-for="item in tableData2.tableHeader"
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

		<div class="business-details-item">
			<div class="flex-center header">对外投资</div>
			<el-table
				:data="tableData3.tableData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
			>
				<el-table-column label="序号" type="index" align="center" width="55" />

				<el-table-column
					v-for="item in tableData3.tableHeader"
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
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'enterpriseMap',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			tableData1: [
				{ name: '李松平（法定代表人）' },
				{ name: '李松平（董事长）' },
				{ name: '邓文斌（董事）' },
				{ name: '李章（董事会主席）' },
				{ name: '黄自权（董事）' },
				{ name: '孙宝杰（董事）' },
				{ name: '杨亚楠（监事）' },
				{ name: '张海滨（监事）' },
				{ name: '李文（监事）' },
				{ name: '万宝常（监事）' },
			],
			tableData2: {
				tableHeader: [
					{ label: '公司名称', key: 'data1' },
					{ label: '投资占比', key: 'data2' },
					{ label: '认缴金额', key: 'data3' },
				],
				tableData: [
					{
						data1: '北京首创城市发展集团有限公司',
						data2: '90%',
						data3: '50,000万(元)',
					},
					{
						data1: '首都创业集团有限公司',
						data2: '10%',
						data3: '10,000万(元)',
					},
				],
			},
			tableData3: {
				tableHeader: [
					{ label: '公司名称', key: 'data1' },
					{ label: '投资占比', key: 'data2' },
					{ label: '认缴金额', key: 'data3' },
				],
				tableData: [
					{
						data1: '北京首创城市发展集团有限公司',
						data2: '90%',
						data3: '50,000万(元)',
					},
					{
						data1: '首都创业集团有限公司',
						data2: '10%',
						data3: '10,000万(元)',
					},
				],
			},
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {
		/**
		 * @description: 过滤文字换行
		 * @param {*} name
		 * @return {*}
		 * @author: cdl
		 */
		filterTextWrap(name) {
			let index = name.indexOf('（')
			let prev = name.slice(0, index)
			let next = name.slice(index)
			let str = `
				<div>${prev}</div>
				<div>${next}</div>
			`
			return str
		},
	},
}
</script>

<style lang="scss" scoped>
.enterprise-map {
	.business-details-item {
		margin: 0 20px 30px;

		.header {
			height: 50px;
			font-size: 14px;
			font-weight: 500;
			color: var(--rh-color-black);
			border: 1px solid var(--rh-border-color-light);
			border-bottom: none;
			background: var(--rh-table-header-bg-color);
		}

		ul {
			display: flex;
			margin: 0;
			padding: 0;
			border-top: 1px solid var(--rh-border-color-light);
			border-left: 1px solid var(--rh-border-color-light);

			li {
				list-style: none;
				height: 80px;
				border-right: 1px solid var(--rh-border-color-light);
				border-bottom: 1px solid var(--rh-border-color-light);
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
				color: var(--rh-text-color-primary);
			}
		}

		::v-deep .el-table th.el-table__cell {
			background: none;
			font-weight: normal;
			color: var(--rh-text-color-primary);
		}
	}
}
</style>
