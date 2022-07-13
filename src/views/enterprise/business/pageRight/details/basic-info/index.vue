<!--
 * @Description: 基本信息
 * @Date: 2022-06-17 21:19:30
 * @LastEditTime: 2022-07-13 10:12:30
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
						:placeholder="isdisabled('COLLECTION_MONEY') ? '' : '请输入'"
						:disabled="isdisabled('COLLECTION_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CREDIT_CODE" label="统一信用代码">
					<el-input
						v-model="form.CREDIT_CODE"
						:placeholder="isdisabled('CREDIT_CODE') ? '' : '请输入'"
						:disabled="isdisabled('CREDIT_CODE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LEGAL_AGENT" label="法定代表人">
					<el-input
						v-model="form.LEGAL_AGENT"
						:placeholder="isdisabled('LEGAL_AGENT') ? '' : '请输入'"
						:disabled="isdisabled('LEGAL_AGENT')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_TYPE" label="公司状况">
					<el-select
						v-model="form.CMPY_TYPE"
						:clearable="true"
						:placeholder="isdisabled('CMPY_TYPE') ? ' ' : '请选择'"
						:disabled="isdisabled('CMPY_TYPE')"
						@focus="onGetOaData('CMPY_TYPE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="BUSINESS_DATE" label="工商成立日期">
					<el-input
						v-model="form.BUSINESS_DATE"
						:placeholder="isdisabled('BUSINESS_DATE') ? '' : '请输入'"
						:disabled="isdisabled('BUSINESS_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LOG_MONEY_TYPE" label="注册资本币种">
					<el-select
						v-model="form.LOG_MONEY_TYPE"
						:clearable="true"
						:placeholder="isdisabled('LOG_MONEY_TYPE') ? ' ' : '请选择'"
						:disabled="isdisabled('LOG_MONEY_TYPE')"
						@focus="onGetOaData('LOG_MONEY_TYPE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="LOG_MONEY" label="注册资本(万元)">
					<el-input
						v-model="form.LOG_MONEY"
						:placeholder="isdisabled('LOG_MONEY') ? '' : '请输入'"
						:disabled="isdisabled('LOG_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_BELONG" label="所属公司">
					<el-input
						v-model="form.CMPY_BELONG"
						:placeholder="isdisabled('CMPY_BELONG') ? '' : '请输入'"
						:disabled="isdisabled('CMPY_BELONG')"
					></el-input>
				</el-form-item>

				<el-form-item prop="OPERATE_TERM" label="经营期限">
					<el-select
						v-model="form.OPERATE_TERM"
						:clearable="true"
						:placeholder="isdisabled('OPERATE_TERM') ? ' ' : '请选择'"
						:disabled="isdisabled('OPERATE_TERM')"
						@focus="onGetOaData('OPERATE_TERM')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="LOG_TYPE" label="登记注册类型">
					<el-select
						v-model="form.LOG_TYPE"
						:clearable="true"
						:placeholder="isdisabled('LOG_TYPE') ? ' ' : '请选择'"
						:disabled="isdisabled('LOG_TYPE')"
						@focus="onGetOaData('LOG_TYPE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="MANAGE_LEVEL" label="管理层级">
					<el-select
						v-model="form.MANAGE_LEVEL"
						:clearable="true"
						:placeholder="isdisabled('MANAGE_LEVEL') ? ' ' : '请选择'"
						:disabled="isdisabled('MANAGE_LEVEL')"
						@focus="onGetOaData('MANAGE_LEVEL')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="RIGHT_LEVEL" label="产权层级">
					<el-select
						v-model="form.RIGHT_LEVEL"
						:clearable="true"
						:placeholder="isdisabled('RIGHT_LEVEL') ? ' ' : '请选择'"
						:disabled="isdisabled('RIGHT_LEVEL')"
						@focus="onGetOaData('RIGHT_LEVEL')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="MANAGE_TEAM" label="管理团队">
					<el-select
						v-model="form.MANAGE_TEAM"
						:clearable="true"
						:placeholder="isdisabled('MANAGE_TEAM') ? ' ' : '请选择'"
						:disabled="isdisabled('MANAGE_TEAM')"
						@focus="onGetOaData('MANAGE_TEAM')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SUPERVISION" label="国资监管范围">
					<el-select
						v-model="form.S_SUPERVISION"
						:clearable="true"
						:placeholder="isdisabled('S_SUPERVISION') ? ' ' : '请选择'"
						:disabled="isdisabled('S_SUPERVISION')"
						@focus="onGetOaData('S_SUPERVISION')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_CHENGFA" label="是否城发体系">
					<el-select
						v-model="form.S_CHENGFA"
						:clearable="true"
						:placeholder="isdisabled('S_CHENGFA') ? ' ' : '请选择'"
						:disabled="isdisabled('S_CHENGFA')"
						@focus="onGetOaData('S_CHENGFA')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="CMPY_ATTRIBUTE" label="公司属性(公司职能)">
					<el-select
						v-model="form.CMPY_ATTRIBUTE"
						:clearable="true"
						:placeholder="isdisabled('CMPY_ATTRIBUTE') ? ' ' : '请选择'"
						:disabled="isdisabled('CMPY_ATTRIBUTE')"
						@focus="onGetOaData('CMPY_ATTRIBUTE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item
					prop="CMPY_URL"
					label="注册地址(详)"
					:style="$route.query.isAside ? 'width:100%' : 'width: calc(100% - 20px)'"
				>
					<el-input
						v-model="form.CMPY_URL"
						:placeholder="isdisabled('CMPY_URL') ? '' : '请输入'"
						:disabled="isdisabled('CMPY_URL')"
					></el-input>
				</el-form-item>

				<el-form-item
					prop="OPERATE_SCOPE"
					label="经营范围"
					:style="$route.query.isAside ? 'width:100%' : 'width: calc(100% - 20px)'"
				>
					<el-input
						v-model="form.OPERATE_SCOPE"
						type="textarea"
						:rows="3"
						resize="none"
						:placeholder="isdisabled('OPERATE_SCOPE') ? '' : '请输入'"
						:disabled="isdisabled('OPERATE_SCOPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LAND_NAME" label="地块名称">
					<el-select
						v-model="form.LAND_NAME"
						:clearable="true"
						:placeholder="isdisabled('LAND_NAME') ? ' ' : '请选择'"
						:disabled="isdisabled('LAND_NAME')"
						@focus="onGetOaData('LAND_NAME')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="CMPY_USE" label="公司用途">
					<el-select
						v-model="form.CMPY_USE"
						:clearable="true"
						:placeholder="isdisabled('CMPY_USE') ? ' ' : '请选择'"
						:disabled="isdisabled('CMPY_USE')"
						@focus="onGetOaData('CMPY_USE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SHARE" label="是否分红">
					<el-select
						v-model="form.S_SHARE"
						:clearable="true"
						:placeholder="isdisabled('S_SHARE') ? ' ' : '请选择'"
						:disabled="isdisabled('S_SHARE')"
						@focus="onGetOaData('S_SHARE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_OPERATE" label="是否操盘">
					<el-select
						v-model="form.S_OPERATE"
						:clearable="true"
						:placeholder="isdisabled('S_OPERATE') ? ' ' : '请选择'"
						:disabled="isdisabled('S_OPERATE')"
						@focus="onGetOaData('S_OPERATE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
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
								:placeholder="isdisabled('GD_NAME') ? '' : '请输入'"
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
								:placeholder="isdisabled('GD_TYPE') ? '' : '请输入'"
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
								:placeholder="isdisabled('GS_CG_RATIO') ? '' : '请输入'"
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
								:placeholder="isdisabled('HJ_CG_RATIO') ? '' : '请输入'"
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
						:placeholder="isdisabled('COLLECTION_MONEY') ? '' : '请输入'"
						:disabled="isdisabled('COLLECTION_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PAY_TAXES_LEVEL" label="纳税人资质">
					<el-input
						v-model="form.PAY_TAXES_LEVEL"
						:placeholder="isdisabled('PAY_TAXES_LEVEL') ? '' : '请输入'"
						:disabled="isdisabled('PAY_TAXES_LEVEL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="FCR_TYPE" label="税控机类型">
					<el-select
						v-model="form.FCR_TYPE"
						:clearable="true"
						:placeholder="isdisabled('FCR_TYPE') ? ' ' : '请选择'"
						:disabled="isdisabled('FCR_TYPE')"
						@focus="onGetOaData('FCR_TYPE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="CPMY_TELEPHONE" label="电话">
					<el-input
						v-model="form.CPMY_TELEPHONE"
						:placeholder="isdisabled('CPMY_TELEPHONE') ? '' : '请输入'"
						:disabled="isdisabled('CPMY_TELEPHONE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="MAX_QUOTA" label="增值税专用发票最高限额">
					<el-select
						v-model="form.MAX_QUOTA"
						:clearable="true"
						:placeholder="isdisabled('MAX_QUOTA') ? ' ' : '请选择'"
						:disabled="isdisabled('MAX_QUOTA')"
						@focus="onGetOaData('MAX_QUOTA')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_MERGE_CHART" label="是否并表">
					<el-select
						v-model="form.S_MERGE_CHART"
						:clearable="true"
						:placeholder="isdisabled('S_MERGE_CHART') ? ' ' : '请选择'"
						:disabled="isdisabled('S_MERGE_CHART')"
						@focus="onGetOaData('S_MERGE_CHART')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="PLEDGEE" label="是否并表">
					<el-input
						v-model="form.PLEDGEE"
						:placeholder="isdisabled('PLEDGEE') ? '' : '请输入'"
						:disabled="isdisabled('PLEDGEE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="YIELD_RATIO" label="出质比例">
					<el-input
						v-model="form.YIELD_RATIO"
						:placeholder="isdisabled('YIELD_RATIO') ? '' : '请输入'"
						:disabled="isdisabled('YIELD_RATIO')"
					></el-input>
				</el-form-item>

				<el-form-item prop="WARRANT_BILIE" label="担保金额">
					<el-input
						v-model="form.WARRANT_BILIE"
						:placeholder="isdisabled('WARRANT_BILIE') ? '' : '请输入'"
						:disabled="isdisabled('WARRANT_BILIE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_DATE" label="质押设立时间">
					<el-input
						v-model="form.PLEDGEE_DATE"
						:placeholder="isdisabled('PLEDGEE_DATE') ? '' : '请输入'"
						:disabled="isdisabled('PLEDGEE_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_LOGOUT_DATE" label="质押注销时间">
					<el-input
						v-model="form.PLEDGEE_LOGOUT_DATE"
						:placeholder="isdisabled('PLEDGEE_LOGOUT_DATE') ? '' : '请输入'"
						:disabled="isdisabled('PLEDGEE_LOGOUT_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_STOCK_FROZEN" label="冻结标识">
					<el-select
						v-model="form.S_STOCK_FROZEN"
						:clearable="true"
						:placeholder="isdisabled('S_STOCK_FROZEN') ? ' ' : '请选择'"
						:disabled="isdisabled('S_STOCK_FROZEN')"
						@focus="onGetOaData('S_STOCK_FROZEN')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item
					prop="FROZEN_EXPLAIN"
					label="司法冻结情况说明"
					:style="$route.query.isAside ? 'width:100%' : 'width: calc(100% - 20px)'"
				>
					<el-input
						v-model="form.FROZEN_EXPLAIN"
						type="textarea"
						:rows="3"
						resize="none"
						:placeholder="isdisabled('FROZEN_EXPLAIN') ? '' : '请输入'"
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
					<el-select
						v-model="form.S_STOCK_FROZEN"
						:clearable="true"
						:placeholder="isdisabled('PARTY_NAME') ? ' ' : '请选择'"
						:disabled="isdisabled('PARTY_NAME')"
						@focus="onGetOaData('PARTY_NAME')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="STAY_PARTY_NAME" label="所属党组织名称">
					<el-select
						v-model="form.STAY_PARTY_NAME"
						:clearable="true"
						:placeholder="isdisabled('STAY_PARTY_NAME') ? ' ' : '请选择'"
						:disabled="isdisabled('STAY_PARTY_NAME')"
						@focus="onGetOaData('STAY_PARTY_NAME')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="PRACTICE_NUM" label="从业人员数(劳动关系)">
					<el-input
						v-model="form.PRACTICE_NUM"
						:placeholder="isdisabled('PRACTICE_NUM') ? '' : '请输入'"
						:disabled="isdisabled('PRACTICE_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_NUM" label="党员人数">
					<el-input
						v-model="form.PARTY_NUM"
						:placeholder="isdisabled('PARTY_NUM') ? '' : '请输入'"
						:disabled="isdisabled('PARTY_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_CHAPTER" label="“党建入章”情况">
					<el-select
						v-model="form.PARTY_CHAPTER"
						:clearable="true"
						:placeholder="isdisabled('PARTY_CHAPTER') ? ' ' : '请选择'"
						:disabled="isdisabled('PARTY_CHAPTER')"
						@focus="onGetOaData('PARTY_CHAPTER')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 董事会管理信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="董事会管理信息" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="S_SET_DIRECTOR" label="是否建立董事会">
					<el-select
						v-model="form.S_SET_DIRECTOR"
						:clearable="true"
						:placeholder="isdisabled('S_SET_DIRECTOR') ? ' ' : '请选择'"
						:disabled="isdisabled('S_SET_DIRECTOR')"
						@focus="onGetOaData('S_SET_DIRECTOR')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SET_RULE" label="是否建立《董事会议事规则》">
					<el-select
						v-model="form.S_SET_RULE"
						:clearable="true"
						:placeholder="isdisabled('S_SET_RULE') ? ' ' : '请选择'"
						:disabled="isdisabled('S_SET_RULE')"
						@focus="onGetOaData('S_SET_RULE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_EQUAL" label="董事会设立情况是否与章程规定一致">
					<el-select
						v-model="form.S_EQUAL"
						:clearable="true"
						:placeholder="isdisabled('S_EQUAL') ? ' ' : '请选择'"
						:disabled="isdisabled('S_EQUAL')"
						@focus="onGetOaData('S_EQUAL')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SIX_RULE" label="董事会议事规则是否明确六项职权">
					<el-select
						v-model="form.S_SIX_RULE"
						:clearable="true"
						:placeholder="isdisabled('S_SIX_RULE') ? ' ' : '请选择'"
						:disabled="isdisabled('S_SIX_RULE')"
						@focus="onGetOaData('S_SIX_RULE')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_WORKABLE_SET" label="落实董事会六项职权">
					<el-select
						v-model="form.S_WORKABLE_SET"
						:clearable="true"
						:placeholder="isdisabled('S_WORKABLE_SET') ? ' ' : '请选择'"
						:disabled="isdisabled('S_WORKABLE_SET')"
						@focus="onGetOaData('S_WORKABLE_SET')"
					>
						<el-option
							v-for="item in options"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
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
import { getBusinessBasicInfoDetails, getBusinessBasicInfoGetEditData, getOaData } from '@/api/index.js' // api
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
			options: [], // OA 角色/字典
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
		 * @description: 获取 OA 角色/字典
		 * @return {*}
		 */
		onGetOaData(id) {
			const params = {
				dictId: `STOCT_${id}`,
			}
			getOaData(params).then((res) => {
				this.options = res.bean._DATA_
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
