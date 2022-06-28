<!--
 * @Description: 测试页面
 * @Author: cdl
 * @Date: 2022-06-15 18:11:26
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 15:04:28
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-scrollbar class="horizontal">
				<el-table
					:data="tableData"
					:border="true"
					empty-text="暂无数据"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
					class="column-nowrap c-pointer"
				>
					<el-table-column label="序号" type="index" align="center" width="55" />

					<af-table-column
						v-for="item in tableHeader"
						:key="item.key"
						:label="item.label"
						:property="item.key"
					>
						<template slot-scope="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</af-table-column>
				</el-table>
			</el-scrollbar>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: '',
	// 组件参数 接收来自父组件的数据
	props: {},
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件状态值
	data() {
		return {
			tableHeader: [
				{ label: '公司名称', key: 'data1' },
				{ label: '是否参股企业', key: 'data2' },
				{ label: '股权比例', key: 'data3' },
				{ label: '产权层级', key: 'data4' },
				{ label: '管理层级', key: 'data5' },
				{ label: '党建入章程完成情况', key: 'data6' },
				{ label: '从业人员数量', key: 'data7' },
				{ label: '党员数量', key: 'data8' },
				{ label: '建立董事会情况', key: 'data9' },
				{ label: '董事长姓名', key: 'data10' },
				{ label: '党组织书记姓名', key: 'data11' },
				{ label: '上市公司情况', key: 'data12' },
				{ label: '管理团队', key: 'data13' },
			],
			tableData: [
				{
					data1: '置威科技（上海）有限公司',
					data2: '是',
					data3: '2%',
					data4: '3',
					data5: '2',
					data6: '是',
					data7: '2000',
					data8: '300',
					data9: '是',
					data10: '李四',
					data11: '张三',
					data12: '是',
					data13: '管理团队',
				},
			],
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件方法
	methods: {},
	/**
	 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	 */
	created() {},
}
</script>

<style lang="scss" scoped></style>
