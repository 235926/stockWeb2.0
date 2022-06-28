<!--
 * @Description: 董监高台账查询
 * @Author: cdl
 * @Date: 2022-06-14 18:47:38
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 15:24:38
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
							<el-form-item label="任职日期">
								<el-date-picker
									v-model="form.startDate"
									type="date"
									value-format="yyyy-MM-dd"
									placeholder="请选择"
								/>
								<span class="flex-center width50">到</span>
								<el-date-picker
									v-model="form.endDate"
									type="date"
									value-format="yyyy-MM-dd"
									:picker-options="pickerOptions"
									placeholder="请选择"
								/>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="公司名称">
								<el-input v-model="form.data1" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="所属公司名称">
								<el-input v-model="form.data2" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="董监高姓名">
								<el-input v-model="form.data3" :clearable="true" placeholder="请输入" />
								<el-radio-group v-model="form.data4">
									<el-radio label="1">工商</el-radio>
									<el-radio label="2">全局</el-radio>
								</el-radio-group>
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
				<el-table
					:data="tableData"
					:border="true"
					empty-text="暂无数据"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
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
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'parameterExecutives',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			form: {}, // 表单
			tableHeader: [
				{ label: '任职日期', key: 'data1' },
				{ label: '截止日期', key: 'data2' },
				{ label: '公司名称', key: 'data3' },
				{ label: '姓名', key: 'data4' },
				{ label: '职务', key: 'data5' },
			],
			tableData: [
				{
					data1: '2021-02-02',
					data2: '2022-02-02',
					data3: 'XXX公司',
					data4: '张三',
					data5: '董事',
				},
			],
		}
	},
	computed: {
		pickerOptions() {
			let _this = this
			return {
				disabledDate(time) {
					let startDate = new Date(_this.form?.startDate)
					return time.getTime() < startDate.getTime()
				},
			}
		},
	},
	created() {},
	methods: {
		/**
		 * @description: 查询
		 * @return {*}
		 * @author: cdl
		 */
		searchClick() {
			console.log(this.form)
		},
	},
}
</script>

<style lang="scss" scoped></style>
