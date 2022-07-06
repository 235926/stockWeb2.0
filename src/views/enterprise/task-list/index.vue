<!--
 * @Description: 任务列表
 * @Date: 2022-06-14 18:43:15
 * @LastEditTime: 2022-06-27 19:23:57
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
							<el-form-item prop="name" label="公司名称">
								<el-input v-model="form.name" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="type" label="任务类型">
								<el-select v-model="form.type" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item label="派单时间">
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
							<el-form-item prop="state" label="任务状态">
								<el-select v-model="form.state" :clearable="true" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
				<div class="search-btn-wrap">
					<el-button round type="primary" @click="searchClick">查询</el-button>
				</div>
			</div>

			<div class="padding30">
				<el-table :data="tableData" :border="true">
					<el-table-column label="选择" align="center" width="55">
						<template slot-scope="scope">
							<div class="flex-center">
								<span class="status status1 width18 height18 mr0"></span>
							</div>
						</template>
					</el-table-column>
					<el-table-column label="序号" type="index" align="center" width="55" />
					<el-table-column prop="data1" align="center" label="业务类型" />
					<el-table-column prop="data2" align="left" label="公司名称" />
					<el-table-column prop="data3" align="center" label="办理人" />
					<el-table-column prop="data4" align="center" label="派单时间" />
					<el-table-column prop="data5" align="center" label="任务状态" />
				</el-table>
				<ul class="desc">
					<li>
						1、提醒规则： <span class="status status1"></span> 为派单二周内任务；
						<span class="status status2"></span>为派单二周以上至一个月内任务；
						<span class="status status3"></span>为派单一个月以上任务。
					</li>
					<li>2、按派单时间倒排序。</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'enterpriseTaskList',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			form: {}, // 表单
			tableData: [
				{
					data1: '占有',
					data2: '置威科技（上海）有限公司',
					data3: '角色名称（张山）',
					data4: '2022-05-20',
					data5: '完成',
				},
				{
					data1: '法人变更',
					data2: '首创新城镇建设投资有限公司',
					data3: '角色名称（李四））',
					data4: '2022-05-20',
					data5: '完成',
				},
				{
					data1: '占有',
					data2: '北京首创生态环保集团股份有限公司',
					data3: '角色名称（王五）',
					data4: '2022-05-20',
					data5: '完成',
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
		 */
		searchClick() {
			console.log(this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
.desc {
	padding-left: 0;

	li {
		list-style: none;
		font-size: 12px;
		font-weight: 400;
		color: #797979;
		line-height: 20px;
		display: flex;
		align-items: center;
	}
}

.status {
	display: inline-block;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	margin-right: 5px;

	&.status1 {
		background: #6ac685;
	}
	&.status2 {
		background: #ffc33b;
	}
	&.status3 {
		background: #f3737e;
	}
}
</style>
