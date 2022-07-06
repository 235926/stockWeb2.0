<!--
 * @Description: 非国资监管企业报表
 * @Date: 2022-06-14 18:49:02
 * @LastEditTime: 2022-06-28 15:27:32
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content">
			<div class="w100">
				<el-form :model="form" label-width="120px" class="padding30">
					<el-row class="row-gap20 justify-content-between">
						<el-col :span="11">
							<el-form-item prop="type" label="公司状况">
								<el-select v-model="form.data1" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="是否城发体系">
								<el-select v-model="form.data2" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="注册地址">
								<el-select v-model="form.data3" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="参控股">
								<el-select v-model="form.data4" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<div class="search-btn-wrap">
					<el-button round type="primary" @click="searchClick">查询</el-button>
					<el-button round>导出</el-button>
				</div>
			</div>

			<div class="padding30">
				<el-scrollbar class="horizontal">
					<el-table
						:data="tableData"
						:border="true"
						empty-text="暂无数据"
						:header-cell-style="{ 'text-align': 'center' }"
						:cell-style="{ 'text-align': 'center' }"
						class="column-nowrap"
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
	</div>
</template>

<script>
export default {
	name: 'parameterStateOwnedNot',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			form: {}, // 表单
			tableHeader: [
				{ label: '公司名称', key: 'data1' },
				{ label: '我方股东法人名称', key: 'data2' },
				{ label: '工商口径持股比例（我方股东）', key: 'data3' },
				{ label: '其他股东法人名称', key: 'data4' },
				{ label: '工商口径持股比例（其他股东）', key: 'data5' },
				{ label: '工商成立日期', key: 'data6' },
				{ label: '管理层级', key: 'data7' },
				{ label: '管理团队', key: 'data8' },
				{ label: '是否并表', key: 'data9' },
				{ label: '是否操盘', key: 'data10' },
				{ label: '注册资本币种', key: 'data11' },
				{ label: '注册资本金额（万元）', key: 'data12' },
				{ label: '实收资本金额（万元）', key: 'data13' },
				{ label: '地块名称', key: 'data14' },
				{ label: '公司属性（公司职能）', key: 'data15' },
			],
			tableData: [
				{
					data1: 'XXXX股份有限公司',
					data2: '张三',
					data3: '70%',
					data4: '李四',
					data5: '30%',
					data6: '2018-09-02',
					data7: '2',
					data8: '',
					data9: '是',
					data10: '是',
					data11: '人民币',
					data12: '3900,300',
					data13: '3900,300',
					data14: '',
					data15: '',
				},
			],
		}
	},
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 查询
		 * @return {*}
		 */
		searchClick() {
			console.log(this.form)
		},
	},
}
</script>

<style lang="scss" scoped></style>
