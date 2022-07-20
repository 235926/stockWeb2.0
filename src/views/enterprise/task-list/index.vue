<!--
 * @Description: 任务列表
 * @Date: 2022-06-14 18:43:15
 * @LastEditTime: 2022-07-20 11:16:26
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content">
			<div class="w100">
				<el-form :model="form" label-width="120px" class="plr30 pt30 pb10">
					<el-row class="row">
						<el-col :span="11">
							<el-form-item prop="CMPY_NAME" label="公司名称">
								<el-input v-model="form.CMPY_NAME" :clearable="true" placeholder="请输入" />
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="TAST_TYPE" label="任务类型">
								<el-select v-model="form.TAST_TYPE" :clearable="true">
									<el-option v-for="item in TAST_TYPE" :key="item.EDIT_CODE" :label="item.EDIT_NAME" :value="item.EDIT_CODE" />
								</el-select>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="START_TIME" label="派单时间">
								<el-date-picker v-model="form.START_TIME" type="date" value-format="YYYY-MM-DD" placeholder="请选择" />
								<span class="flex-center width50">到</span>
								<el-date-picker
									v-model="form.END_TIME"
									type="date"
									value-format="YYYY-MM-DD"
									:disabled-date="disabledDate"
									placeholder="请选择"
								/>
							</el-form-item>
						</el-col>

						<el-col :span="11">
							<el-form-item prop="THIS_TYPE" label="任务状态">
								<el-select v-model="form.THIS_TYPE" :clearable="true" @visible-change="onGetOaData($event, 'THIS_TYPE')">
									<el-option v-for="item in options" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
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
					<el-table-column label="选择" width="55">
						<template slot-scope="scope">
							<div class="flex-center">
								<span class="status status1" v-if="scope.row.COLOUR_TYPE === '1'"></span>
								<span class="status status2" v-if="scope.row.COLOUR_TYPE === '2'"></span>
								<span class="status status3" v-if="scope.row.COLOUR_TYPE === '3'"></span>
							</div>
						</template>
					</el-table-column>

					<el-table-column type="index" label="序号" width="55">
						<template slot-scope="scope">
							<span>{{ (NOWPAGE - 1) * SHOWNUM + scope.$index + 1 }}</span>
						</template>
					</el-table-column>

					<el-table-column prop="TAST_TYPE" label="业务类型">
						<template slot-scope="scope">
							<span v-if="scope.row.TAST_TYPE === '1'">新设立</span>
							<span v-if="scope.row.TAST_TYPE === '2'">占有</span>
						</template>
					</el-table-column>

					<el-table-column prop="CMPY_NAME" label="公司名称" />
					<el-table-column prop="S_USER" label="办理人" />
					<el-table-column prop="PD_TIME" label="派单时间" />

					<el-table-column prop="THIS_TYPE" label="任务状态">
						<template slot-scope="scope">
							<span v-if="scope.row.THIS_TYPE === '1'">处理中</span>
							<span v-if="scope.row.THIS_TYPE === '2'">已完成</span>
						</template>
					</el-table-column>
				</el-table>

				<el-pagination
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page="NOWPAGE"
					:background="true"
					:page-sizes="[10, 20, 30, 50]"
					:page-size="SHOWNUM"
					layout="total, sizes, prev, pager, next, jumper"
					:total="ALLNUM"
					class="mb20"
				/>

				<ul class="desc">
					<li>
						1、提醒规则： <span class="status status1 mr5"></span> 为派单二周内任务；
						<span class="status status2 mr5"></span>为派单二周以上至一个月内任务；
						<span class="status status3 mr5"></span>为派单一个月以上任务。
					</li>
					<li>2、按派单时间倒排序。</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { getBusinessTaskList, getOaData, getBusinessTaskListGetRoleType } from '@/api/index.js' // api
export default {
	name: 'enterpriseTaskList',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	data() {
		return {
			form: {}, // 表单
			options: [], // OA 角色/字典
			TAST_TYPE: [], // 任务类型
			tableData: [], // 数据列表
			NOWPAGE: 1, // 当前页
			SHOWNUM: 10, // 每页条数
			ALLNUM: 0, // 总条数
			loading: false, // 加载状态
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
	created() {
		this.onTaskType()
		this.onGetBusinessTaskList()
	},
	methods: {
		/**
		 * @description: 查询
		 * @return {*}
		 */
		searchClick() {
			this.currentPage = 1
			this.onGetBusinessTaskList()
		},

		/**
		 * @description: 获取数据列表
		 * @return {*}
		 */
		onGetBusinessTaskList() {
			this.loading = true

			const params = {
				NOWPAGE: this.NOWPAGE,
				SHOWNUM: this.SHOWNUM,
			}
			Object.assign(params, this.form)

			getBusinessTaskList(params).then((res) => {
				this.tableData = res._DATA_
				this.ALLNUM = ++res._PAGE_.ALLNUM

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 获取 任务类型
		 * @param {*} val
		 * @return {*}
		 */
		onTaskType() {
			getBusinessTaskListGetRoleType().then((res) => {
				this.TAST_TYPE = res._DATA_
			})
		},

		/**
		 * @description: 获取 OA 角色/字典 - 任务状态
		 * @return {*}
		 */
		onGetOaData(val, id) {
			const params = {
				dictId: `STOCK_${id}`,
			}
			if (val) {
				this.options = []
				getOaData(params).then((res) => {
					if (res.bean._MSG_?.indexOf('ERROR,') == 0) {
						this.$message.error(res.bean._MSG_)
					} else {
						this.options = res.bean._DATA_
					}
				})
			}
		},

		// 切换每页条数
		handleSizeChange(val) {
			// 解决当前页不是第一页的时候进行切换每页展示条数不回到第一页的问题
			this.NOWPAGE = 1
			this.SHOWNUM = val
			this.onGetBusinessTaskList()
		},

		// 切换当前页
		handleCurrentChange(val) {
			this.NOWPAGE = val
			this.onGetBusinessTaskList()
		},

		/**
		 * @description: 设置 endDate 禁选日期
		 * @param {*} time
		 * @return {*}
		 */
		disabledDate(time) {
			let startDate = new Date(this.form.START_TIME)
			return time.getTime() < startDate.getTime()
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

.row {
	display: flex;
	flex-wrap: wrap;
	row-gap: 20px;
}

.status {
	display: inline-block;
	width: 18px;
	height: 18px;
	border-radius: 50%;

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
