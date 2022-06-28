<!--
 * @Description: 党组织台账查询
 * @Author: cdl
 * @Date: 2022-06-14 18:46:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-28 15:26:33
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
							<el-form-item label="更新时间">
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
							<el-form-item prop="name" label="管理团队">
								<el-input v-model="form.data3" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="党组织名称">
								<el-input v-model="form.data4" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="参股控股">
								<el-select v-model="form.data5" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="date" label="注册资金">
								<el-input v-model="form.data6" :clearable="true" placeholder="请输入" />
								<span class="flex-center width50">到</span>
								<el-input v-model="form.data7" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="表内/表外">
								<el-select v-model="form.data8" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="管理级别">
								<el-select v-model="form.data9" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="产权级别">
								<el-select v-model="form.data10" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="父级企业名称">
								<el-input v-model="form.data11" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="name" label="企业名称">
								<el-input v-model="form.data12" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<div class="search-btn-wrap">
					<el-button round type="primary" @click="searchClick">查询</el-button>
					<el-button round>列表定义</el-button>
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
	name: 'parameterOrganization',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			form: {}, // 表单
			tableHeader: [
				{ label: '公司名称', key: 'data1', width: '300' },
				{ label: '是否参股企业', key: 'data2', width: '110' },
				{ label: '股权比例', key: 'data3', width: '110' },
				{ label: '产权层级', key: 'data4', width: '110' },
				{ label: '管理层级', key: 'data5', width: '110' },
				{ label: '党建入章程完成情况', key: 'data6', width: '200' },
				{ label: '从业人员数量', key: 'data7', width: '150' },
				{ label: '党员数量', key: 'data8', width: '110' },
				{ label: '建立董事会情况', key: 'data9', width: '150' },
				{ label: '董事长姓名', key: 'data10', width: '110' },
				{ label: '党组织书记姓名', key: 'data11', width: '150' },
				{ label: '上市公司情况', key: 'data12', width: '110' },
				{ label: '管理团队', key: 'data13', width: '110' },
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
					data13: '北京党支部',
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
