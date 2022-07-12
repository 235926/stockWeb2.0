<!--
 * @Description: 基本信息
 * @Date: 2022-06-17 21:19:30
 * @LastEditTime: 2022-07-12 17:52:41
-->
<template>
	<div class="business-details" v-loading="loading">
		<!-- 基础信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="基础信息" :background="false" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="CMPY_NAME" label="公司名称">
					<el-input
						v-model="form.CMPY_NAME"
						placeholder="请输入"
						:disabled="isdisabled('COLLECTION_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CREDIT_CODE" label="统一信用代码">
					<el-input
						v-model="form.CREDIT_CODE"
						placeholder="请输入"
						:disabled="isdisabled('CREDIT_CODE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LEGAL_AGENT" label="法定代表人">
					<el-input
						v-model="form.LEGAL_AGENT"
						placeholder="请输入"
						:disabled="isdisabled('LEGAL_AGENT')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_TYPE" label="公司状况">
					<el-input
						v-model="form.CMPY_TYPE"
						placeholder="请输入"
						:disabled="isdisabled('CMPY_TYPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="BUSINESS_DATE" label="工商成立日期">
					<el-input
						v-model="form.BUSINESS_DATE"
						placeholder="请输入"
						:disabled="isdisabled('BUSINESS_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LOG_MONEY_TYPE" label="注册资本币种">
					<el-input
						v-model="form.LOG_MONEY_TYPE"
						placeholder="请输入"
						:disabled="isdisabled('LOG_MONEY_TYPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LOG_MONEY" label="注册资本(万元)">
					<el-input
						v-model="form.LOG_MONEY"
						placeholder="请输入"
						:disabled="isdisabled('LOG_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_BELONG" label="所属公司">
					<el-input
						v-model="form.CMPY_BELONG"
						placeholder="请输入"
						:disabled="isdisabled('CMPY_BELONG')"
					></el-input>
				</el-form-item>

				<el-form-item prop="OPERATE_TERM" label="经营期限">
					<el-input
						v-model="form.OPERATE_TERM"
						placeholder="请输入"
						:disabled="isdisabled('OPERATE_TERM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LOG_TYPE" label="登记注册类型">
					<el-input
						v-model="form.LOG_TYPE"
						placeholder="请输入"
						:disabled="isdisabled('LOG_TYPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="MANAGE_LEVEL" label="管理层级">
					<el-input
						v-model="form.MANAGE_LEVEL"
						placeholder="请输入"
						:disabled="isdisabled('MANAGE_LEVEL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="RIGHT_LEVEL" label="产权层级">
					<el-input
						v-model="form.RIGHT_LEVEL"
						placeholder="请输入"
						:disabled="isdisabled('RIGHT_LEVEL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="MANAGE_TEAM" label="管理团队">
					<el-input
						v-model="form.MANAGE_TEAM"
						placeholder="请输入"
						:disabled="isdisabled('MANAGE_TEAM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_SUPERVISION" label="国资监管范围">
					<el-input
						v-model="form.S_SUPERVISION"
						placeholder="请输入"
						:disabled="isdisabled('S_SUPERVISION')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_CHENGFA" label="是否城发体系">
					<el-input
						v-model="form.S_CHENGFA"
						placeholder="请输入"
						:disabled="isdisabled('S_CHENGFA')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_URL" label="注册地址(详)">
					<el-input
						v-model="form.CMPY_URL"
						placeholder="请输入"
						:disabled="isdisabled('CMPY_URL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_URL_MPH" label="注册地街道门牌号">
					<el-input
						v-model="form.CMPY_URL_MPH"
						placeholder="请输入"
						:disabled="isdisabled('CMPY_URL_MPH')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_ATTRIBUTE" label="公司属性(公司职能)">
					<el-input
						v-model="form.CMPY_ATTRIBUTE"
						placeholder="请输入"
						:disabled="isdisabled('COLLECTION_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item
					prop="OPERATE_SCOPE"
					label="经营范围"
					:style="!$route.query.isAside ? 'width: calc(100% - 20px)' : 'width:100%'"
				>
					<el-input
						v-model="form.OPERATE_SCOPE"
						type="textarea"
						:rows="3"
						resize="none"
						placeholder="请输入"
						:disabled="isdisabled('OPERATE_SCOPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LAND_NAME" label="地块名称">
					<el-input
						v-model="form.LAND_NAME"
						placeholder="请输入"
						:disabled="isdisabled('LAND_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_USE" label="公司用途">
					<el-input
						v-model="form.CMPY_USE"
						placeholder="请输入"
						:disabled="isdisabled('CMPY_USE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_SHARE" label="是否分红">
					<el-input v-model="form.S_SHARE" placeholder="请输入" :disabled="isdisabled('S_SHARE')"></el-input>
				</el-form-item>

				<el-form-item prop="S_OPERATE" label="是否操盘">
					<el-input
						v-model="form.S_OPERATE"
						placeholder="请输入"
						:disabled="isdisabled('S_OPERATE')"
					></el-input>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 股东信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="股东信息" />
			<div class="ml20 mr20">
				<el-table
					ref="tableRef"
					:data="tableData"
					:border="true"
					table-layout="auto"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
					class="white-space-nowrap"
				>
					<el-table-column label="序号" type="index" align="center" width="55" />

					<el-table-column label="股东名称">
						<template #default="scope">
							<el-input
								v-model.trim="scope.row.GD_NAME"
								placeholder="股东名称内容不能为空"
								type="textarea"
								maxlength="40"
								autosize
								show-word-limit
								resize="none"
								:disabled="isdisabled('GD_NAME')"
							/>
						</template>
					</el-table-column>

					<el-table-column label="股东类型">
						<template #default="scope">
							<el-input
								v-model.trim="scope.row.GD_TYPE"
								placeholder="股东类型内容不能为空"
								type="textarea"
								maxlength="40"
								autosize
								show-word-limit
								resize="none"
								:disabled="isdisabled('GD_TYPE')"
							/>
						</template>
					</el-table-column>

					<el-table-column label="工商口径持股比例">
						<template #default="scope">
							<el-input
								v-model.trim="scope.row.GS_CG_RATIO"
								placeholder="工商口径持股比例内容不能为空"
								type="textarea"
								maxlength="40"
								autosize
								show-word-limit
								resize="none"
								:disabled="isdisabled('GS_CG_RATIO')"
							/>
						</template>
					</el-table-column>

					<el-table-column label="会计口径持股比例">
						<template #default="scope">
							<el-input
								v-model.trim="scope.row.HJ_CG_RATIO"
								placeholder="会计口径持股比例内容不能为空"
								type="textarea"
								maxlength="40"
								autosize
								show-word-limit
								resize="none"
								:disabled="isdisabled('HJ_CG_RATIO')"
							/>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<el-divider />
		</div>

		<!-- 财务管理信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="财务管理信息" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="COLLECTION_MONEY" label="实收资本(万元)">
					<el-input
						v-model="form.COLLECTION_MONEY"
						:disabled="isdisabled('COLLECTION_MONEY')"
						placeholder="请输入"
					></el-input>
				</el-form-item>

				<el-form-item prop="PAY_TAXES_LEVEL" label="纳税人资质">
					<el-input
						v-model="form.PAY_TAXES_LEVEL"
						placeholder="请输入"
						:disabled="isdisabled('PAY_TAXES_LEVEL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="FCR_TYPE" label="税控机类型">
					<el-input
						v-model="form.FCR_TYPE"
						placeholder="请输入"
						:disabled="isdisabled('FCR_TYPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CPMY_TELEPHONE" label="电话">
					<el-input
						v-model="form.CPMY_TELEPHONE"
						placeholder="请输入"
						:disabled="isdisabled('CPMY_TELEPHONE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="MAX_QUOTA" label="增值税专用发票最高限额">
					<el-input
						v-model="form.MAX_QUOTA"
						placeholder="请输入"
						:disabled="isdisabled('MAX_QUOTA')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_MERGE_CHART" label="是否并表">
					<el-input
						v-model="form.S_MERGE_CHART"
						placeholder="请输入"
						:disabled="isdisabled('S_MERGE_CHART')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE" label="是否并表">
					<el-input v-model="form.PLEDGEE" placeholder="请输入" :disabled="isdisabled('PLEDGEE')"></el-input>
				</el-form-item>

				<el-form-item prop="YIELD_RATIO" label="出质比例">
					<el-input
						v-model="form.YIELD_RATIO"
						placeholder="请输入"
						:disabled="isdisabled('YIELD_RATIO')"
					></el-input>
				</el-form-item>

				<el-form-item prop="WARRANT_BILIE" label="担保金额">
					<el-input
						v-model="form.WARRANT_BILIE"
						placeholder="请输入"
						:disabled="isdisabled('WARRANT_BILIE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_DATE" label="质押设立时间">
					<el-input
						v-model="form.PLEDGEE_DATE"
						placeholder="请输入"
						:disabled="isdisabled('PLEDGEE_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_LOGOUT_DATE" label="质押注销时间">
					<el-input
						v-model="form.PLEDGEE_LOGOUT_DATE"
						placeholder="请输入"
						:disabled="isdisabled('PLEDGEE_LOGOUT_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_STOCK_FROZEN" label="冻结标识">
					<el-input
						v-model="form.S_STOCK_FROZEN"
						placeholder="请输入"
						:disabled="isdisabled('S_STOCK_FROZEN')"
					></el-input>
				</el-form-item>

				<el-form-item
					prop="FROZEN_EXPLAIN"
					label="司法冻结情况说明"
					:style="!$route.query.isAside ? 'width: calc(100% - 20px)' : 'width:100%'"
				>
					<el-input
						v-model="form.FROZEN_EXPLAIN"
						type="textarea"
						:rows="3"
						resize="none"
						placeholder="请输入"
						:disabled="isdisabled('FROZEN_EXPLAIN')"
					></el-input>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 党组织信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="党组织信息" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="PARTY_NAME" label="党组织名称">
					<el-input
						v-model="form.PARTY_NAME"
						placeholder="请输入"
						:disabled="isdisabled('PARTY_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="STAY_PARTY_NAME" label="所属党组织名称">
					<el-input
						v-model="form.STAY_PARTY_NAME"
						placeholder="请输入"
						:disabled="isdisabled('STAY_PARTY_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PRACTICE_NUM" label="从业人员数(劳动关系)">
					<el-input
						v-model="form.PRACTICE_NUM"
						placeholder="请输入"
						:disabled="isdisabled('PRACTICE_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_NUM" label="党员人数">
					<el-input
						v-model="form.PARTY_NUM"
						placeholder="请输入"
						:disabled="isdisabled('PARTY_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_CHAPTER" label="“党建入章”情况">
					<el-input
						v-model="form.PARTY_CHAPTER"
						placeholder="请输入"
						:disabled="isdisabled('PARTY_CHAPTER')"
					></el-input>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 董事会管理信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="董事会管理信息" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="S_SET_DIRECTOR" label="是否建立董事会">
					<el-input
						v-model="form.S_SET_DIRECTOR"
						placeholder="请输入"
						:disabled="isdisabled('S_SET_DIRECTOR')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_SET_RULE" label="是否建立《董事会议事规则》">
					<el-input
						v-model="form.S_SET_RULE"
						placeholder="请输入"
						:disabled="isdisabled('S_SET_RULE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_EQUAL" label="董事会设立情况是否与章程规定一致">
					<el-input v-model="form.S_EQUAL" placeholder="请输入" :disabled="isdisabled('S_EQUAL')"></el-input>
				</el-form-item>

				<el-form-item prop="S_SIX_RULE" label="董事会议事规则是否明确六项职权">
					<el-input
						v-model="form.S_SIX_RULE"
						placeholder="请输入"
						:disabled="isdisabled('S_SIX_RULE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_WORKABLE_SET" label="落实董事会六项职权">
					<el-input
						v-model="form.S_WORKABLE_SET"
						placeholder="请输入"
						:disabled="isdisabled('S_WORKABLE_SET')"
					></el-input>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 附件 -->
		<div class="business-details-item">
			<BusinessListHeader title="附件" />
		</div>
	</div>
</template>

<script>
import { getBusinessBasicInfoDetails, getBusinessBasicInfoGetEditData } from '@/api/index.js' // api
export default {
	// 组件名称
	name: 'basicInfo',
	// 局部注册的组件
	components: {
		BusinessListHeader: () => import('@/views/component/BusinessListHeader/index.vue'), // 列表头部
		FormStyleOne: () => import('@/components/CustomStyles/form/form-style-one.vue'), // form 样式一
		TableRenderLoop: () => import('@/components/CustomStyles/table/table-render-loop.vue'), // form 样式一
	},
	// 组件状态值
	data() {
		return {
			form: {}, // 表单对象
			tableData: [], // 股东信息
			loading: false, // 加载状态
			EDIT_WORD: [], // 可编辑字段
		}
	},
	// 侦听器
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				if (!to.query.isAside) {
					this.onGetBusinessBasicInfoGetEditData()
				}
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessBasicInfoDetails()
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取信息详情
		 * @return {*}
		 */
		onGetBusinessBasicInfoDetails() {
			this.loading = true

			const params = {
				CMPY_BASE_CODE: this.$route.query.id,
			}
			getBusinessBasicInfoDetails(params).then((res) => {
				this.form = res.DATA
				this.tableData = res.GD_DATA

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 获取可编辑字段
		 * @return {*}
		 */
		onGetBusinessBasicInfoGetEditData() {
			getBusinessBasicInfoGetEditData().then((res) => {
				this.EDIT_WORD = res.EDIT_WORD
			})
		},

		/**
		 * @description: 判断是否可编辑
		 * @return {*}
		 */
		isdisabled(code) {
			if (this.EDIT_WORD != '' && !this.$route.query.isAside) {
				const arr = this.EDIT_WORD?.split(',')
				arr.pop() // 删除最后一个因为逗号转换的空字符串
				return arr.some((item) => {
					return code === item
				})
			} else {
				return true
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.basic-info {
	.basic-info-item {
		.business-list-header {
			margin-bottom: 20px;
		}

		.form-style-one {
			margin-left: 20px;
			margin-right: 20px;
		}

		.table-render-loop {
			margin-left: 20px;
			margin-right: 20px;
		}

		.el-divider {
			margin-bottom: 0;
		}

		.file {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.item {
				padding: 0 15px;
				height: 32px;
				background: #fafafa;
				border-radius: 16px;
				border: 1px solid #e8e8e8;
				color: var(--el-text-color-primary);
				font-size: 14px;
				font-weight: 400;

				.svg-icon {
					margin-right: 5px;
					font-size: 20px;
				}

				.close {
					margin-left: 15px;
					background-color: #f3737e;
					border-radius: 50%;
					color: #fff;
					padding: 2px;
					font-size: 16px;
				}
			}
		}
	}
}
</style>
