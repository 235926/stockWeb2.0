<!--
 * @Description: 基本信息
 * @Date: 2022-06-17 21:19:30
 * @LastEditTime: 2022-07-22 18:58:54
-->
<template>
	<div class="business-details" v-loading="loading">
		<!-- 基础信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="基础信息" :background="false" class="plr20" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="CMPY_NAME" label="公司名称">
					<el-input
						v-model="form.CMPY_NAME"
						:placeholder="isDisabled('CMPY_NAME') ? '' : '请输入'"
						:disabled="isDisabled('CMPY_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CREDIT_CODE" label="统一信用代码">
					<el-input
						v-model="form.CREDIT_CODE"
						:placeholder="isDisabled('CREDIT_CODE') ? '' : '请输入'"
						:disabled="isDisabled('CREDIT_CODE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LEGAL_AGENT" label="法定代表人">
					<el-input
						v-model="form.LEGAL_AGENT"
						:placeholder="isDisabled('LEGAL_AGENT') ? '' : '请输入'"
						:disabled="isDisabled('LEGAL_AGENT')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_TYPE" label="公司状况">
					<el-select v-model="form.CMPY_TYPE" :placeholder="isDisabled('CMPY_TYPE') ? ' ' : '请选择'" :disabled="isDisabled('CMPY_TYPE')">
						<el-option v-for="item in dictionary.STOCK_CMPY_TYPE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="BUSINESS_DATE" label="工商成立日期">
					<el-date-picker
						v-model="form.BUSINESS_DATE"
						type="date"
						value-format="yyyy-MM-dd"
						:placeholder="isDisabled('BUSINESS_DATE') ? '' : '请输入'"
						:disabled="isDisabled('BUSINESS_DATE')"
					/>
				</el-form-item>

				<el-form-item prop="LOG_MONEY_TYPE" label="注册资本币种">
					<el-input
						v-model="form.LOG_MONEY_TYPE"
						:placeholder="isDisabled('LOG_MONEY_TYPE') ? '' : '请输入'"
						:disabled="isDisabled('LOG_MONEY_TYPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LOG_MONEY" label="注册资本(万元)">
					<el-input
						v-model="form.LOG_MONEY"
						:placeholder="isDisabled('LOG_MONEY') ? '' : '请输入'"
						:disabled="isDisabled('LOG_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_BELONG" label="所属公司">
					<el-input
						v-model="form.CMPY_BELONG"
						:placeholder="isDisabled('CMPY_BELONG') ? '' : '请输入'"
						:disabled="isDisabled('CMPY_BELONG')"
					></el-input>
				</el-form-item>

				<el-form-item prop="OPERATE_TERM" label="经营期限">
					<el-select
						v-model="form.OPERATE_TERM"
						:placeholder="isDisabled('OPERATE_TERM') ? ' ' : '请选择'"
						:disabled="isDisabled('OPERATE_TERM')"
					>
						<el-option
							v-for="item in dictionary.STOCK_OPERATE_TERM"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="LOG_TYPE" label="登记注册类型">
					<el-select v-model="form.LOG_TYPE" :placeholder="isDisabled('LOG_TYPE') ? ' ' : '请选择'" :disabled="isDisabled('LOG_TYPE')">
						<el-option v-for="item in dictionary.STOCK_LOG_TYPE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="MANAGE_LEVEL" label="管理层级">
					<el-select
						v-model="form.MANAGE_LEVEL"
						:placeholder="isDisabled('MANAGE_LEVEL') ? ' ' : '请选择'"
						:disabled="isDisabled('MANAGE_LEVEL')"
					>
						<el-option
							v-for="item in dictionary.STOCK_MANAGE_LEVEL"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="RIGHT_LEVEL" label="产权层级">
					<el-select
						v-model="form.RIGHT_LEVEL"
						:placeholder="isDisabled('RIGHT_LEVEL') ? ' ' : '请选择'"
						:disabled="isDisabled('RIGHT_LEVEL')"
					>
						<el-option
							v-for="item in dictionary.STOCK_RIGHT_LEVEL"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="MANAGE_TEAM" label="管理团队">
					<el-cascader
						v-model="form.MANAGE_TEAM"
						:options="dictionary.STOCK_MANAGE_TEAM"
						:props="propsTeam"
						:show-all-levels="false"
						:placeholder="isDisabled('MANAGE_TEAM') ? ' ' : '请选择'"
						:disabled="isDisabled('MANAGE_TEAM')"
					>
						<template #default="{ node, data }">
							<span>{{ data.NAME }}</span>
							<span v-if="!node.isLeaf"> ({{ data.CHILD.length }}) </span>
						</template>
					</el-cascader>
				</el-form-item>

				<el-form-item prop="S_SUPERVISION" label="国资监管范围">
					<el-select
						v-model="form.S_SUPERVISION"
						:placeholder="isDisabled('S_SUPERVISION') ? ' ' : '请选择'"
						:disabled="isDisabled('S_SUPERVISION')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_SUPERVISION"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_CHENGFA" label="是否城发体系">
					<el-select v-model="form.S_CHENGFA" :placeholder="isDisabled('S_CHENGFA') ? ' ' : '请选择'" :disabled="isDisabled('S_CHENGFA')">
						<el-option v-for="item in dictionary.STOCK_S_CHENGFA" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="CMPY_ATTRIBUTE" label="公司属性(公司职能)">
					<el-select
						v-model="form.CMPY_ATTRIBUTE"
						:placeholder="isDisabled('CMPY_ATTRIBUTE') ? ' ' : '请选择'"
						:disabled="isDisabled('CMPY_ATTRIBUTE')"
					>
						<el-option
							v-for="item in dictionary.STOCK_CMPY_ATTRIBUTE"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="CMPY_URL" label="注册地址(详)" :style="$route.query.isAside ? 'width:100%' : 'width: calc(100% - 20px)'">
					<el-input
						v-model="form.CMPY_URL"
						:placeholder="isDisabled('CMPY_URL') ? '' : '请输入'"
						:disabled="isDisabled('CMPY_URL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="OPERATE_SCOPE" label="经营范围" :style="$route.query.isAside ? 'width:100%' : 'width: calc(100% - 20px)'">
					<el-input
						v-model="form.OPERATE_SCOPE"
						type="textarea"
						:rows="3"
						resize="none"
						:placeholder="isDisabled('OPERATE_SCOPE') ? '' : '请输入'"
						:disabled="isDisabled('OPERATE_SCOPE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="LAND_NAME" label="地块名称">
					<el-input
						v-model="form.LAND_NAME"
						:placeholder="isDisabled('LAND_NAME') ? '' : '请输入'"
						:disabled="isDisabled('LAND_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="CMPY_USE" label="公司用途">
					<el-select v-model="form.CMPY_USE" :placeholder="isDisabled('CMPY_USE') ? ' ' : '请选择'" :disabled="isDisabled('CMPY_USE')">
						<el-option v-for="item in dictionary.STOCK_CMPY_USE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SHARE" label="是否分红">
					<el-select v-model="form.S_SHARE" :placeholder="isDisabled('S_SHARE') ? ' ' : '请选择'" :disabled="isDisabled('S_SHARE')">
						<el-option v-for="item in dictionary.STOCK_S_SHARE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="S_OPERATE" label="是否操盘">
					<el-select v-model="form.S_OPERATE" :placeholder="isDisabled('S_OPERATE') ? ' ' : '请选择'" :disabled="isDisabled('S_OPERATE')">
						<el-option v-for="item in dictionary.STOCK_S_OPERATE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 股东信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="股东信息" class="plr20" />
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
					<el-table-column label="序号" type="index" width="55" />
					<el-table-column :show-overflow-tooltip="true" prop="GD_NAME" label="股东名称" />
					<el-table-column :show-overflow-tooltip="true" prop="GD_TYPE" label="股东类型" />
					<el-table-column :show-overflow-tooltip="true" prop="GS_CG_RATIO" label="工商口径持股比例(%)" />
					<el-table-column :show-overflow-tooltip="true" prop="HJ_CG_RATIO" label="会计口径持股比例(%)" />
					<el-table-column :show-overflow-tooltip="true" prop="YS_CG_RATIO" label="预算口径持股比例(%)" />

					<el-table-column label="操作" v-if="!$route.query?.isAside" class-name="operation">
						<template slot-scope="scope">
							<el-button class="mr20" type="text" @click="onEdit(scope)" :disabled="isDisabled('STOCK_INFO')">
								<span class="span-svg-icon edit">
									<SvgIcon name="edit" color="#fff" />
								</span>
								<span class="edit">修改</span>
							</el-button>
							<el-popconfirm
								confirm-button-text="确定"
								cancel-button-text="取消"
								:title="`您确定要删除'${scope.row.GD_NAME}'吗?`"
								placement="left"
								@confirm="onDelete(scope)"
							>
								<template slot="reference">
									<el-button type="text" :disabled="isDisabled('STOCK_INFO')">
										<span class="span-svg-icon close">
											<SvgIcon name="close" color="#fff" />
										</span>
										<span class="del">删除</span>
									</el-button>
								</template>
							</el-popconfirm>
						</template>
					</el-table-column>
				</el-table>
				<div class="table-btn" v-if="!$route.query?.isAside">
					<el-button round @click="onAdd(2)" :disabled="isDisabled('STOCK_INFO')">添加</el-button>
				</div>
			</div>
			<el-divider />
		</div>

		<!-- 财务管理信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="财务管理信息" class="plr20" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="COLLECTION_MONEY" label="实收资本(万元)">
					<el-input
						v-model="form.COLLECTION_MONEY"
						:placeholder="isDisabled('COLLECTION_MONEY') ? '' : '请输入'"
						:disabled="isDisabled('COLLECTION_MONEY')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PAY_TAXES_LEVEL" label="纳税人资质">
					<el-input
						v-model="form.PAY_TAXES_LEVEL"
						:placeholder="isDisabled('PAY_TAXES_LEVEL') ? '' : '请输入'"
						:disabled="isDisabled('PAY_TAXES_LEVEL')"
					></el-input>
				</el-form-item>

				<el-form-item prop="FCR_TYPE" label="税控机类型">
					<el-select v-model="form.FCR_TYPE" :placeholder="isDisabled('FCR_TYPE') ? ' ' : '请选择'" :disabled="isDisabled('FCR_TYPE')">
						<el-option v-for="item in dictionary.STOCK_FCR_TYPE" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="CPMY_TELEPHONE" label="电话">
					<el-input
						v-model="form.CPMY_TELEPHONE"
						:placeholder="isDisabled('CPMY_TELEPHONE') ? '' : '请输入'"
						:disabled="isDisabled('CPMY_TELEPHONE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="MAX_QUOTA" label="增值税专用发票最高限额">
					<el-select v-model="form.MAX_QUOTA" :placeholder="isDisabled('MAX_QUOTA') ? ' ' : '请选择'" :disabled="isDisabled('MAX_QUOTA')">
						<el-option v-for="item in dictionary.STOCK_MAX_QUOTA" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="S_MERGE_CHART" label="是否并表">
					<el-select
						v-model="form.S_MERGE_CHART"
						:placeholder="isDisabled('S_MERGE_CHART') ? ' ' : '请选择'"
						:disabled="isDisabled('S_MERGE_CHART')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_MERGE_CHART"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="YIELD_RATIO" label="出质比例">
					<el-input
						v-model="form.YIELD_RATIO"
						:placeholder="isDisabled('YIELD_RATIO') ? '' : '请输入'"
						:disabled="isDisabled('YIELD_RATIO')"
					></el-input>
				</el-form-item>

				<el-form-item prop="WARRANT_BILIE" label="担保金额">
					<el-input
						v-model="form.WARRANT_BILIE"
						:placeholder="isDisabled('WARRANT_BILIE') ? '' : '请输入'"
						:disabled="isDisabled('WARRANT_BILIE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_DATE" label="质押设立时间">
					<el-input
						v-model="form.PLEDGEE_DATE"
						:placeholder="isDisabled('PLEDGEE_DATE') ? '' : '请输入'"
						:disabled="isDisabled('PLEDGEE_DATE')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PLEDGEE_LOGOUT_DATE" label="质押注销时间">
					<el-input
						v-model="form.PLEDGEE_LOGOUT_DATE"
						:placeholder="isDisabled('PLEDGEE_LOGOUT_DATE') ? '' : '请输入'"
						:disabled="isDisabled('PLEDGEE_LOGOUT_DATE')"
					></el-input>
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
						:placeholder="isDisabled('FROZEN_EXPLAIN') ? '' : '请输入'"
						:disabled="isDisabled('FROZEN_EXPLAIN')"
					></el-input>
				</el-form-item>

				<el-form-item prop="S_STOCK_FROZEN" label="冻结标识">
					<el-select
						v-model="form.S_STOCK_FROZEN"
						:placeholder="isDisabled('S_STOCK_FROZEN') ? ' ' : '请选择'"
						:disabled="isDisabled('S_STOCK_FROZEN')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_STOCK_FROZEN"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>
			</el-form>
			<el-divider />
		</div>

		<!-- 党组织信息 -->
		<div class="business-details-item">
			<BusinessListHeader title="党组织信息" class="plr20" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="PARTY_NAME" label="党组织名称">
					<el-input
						v-model="form.PARTY_NAME"
						:placeholder="isDisabled('PARTY_NAME') ? '' : '请输入'"
						:disabled="isDisabled('PARTY_NAME')"
					></el-input>
				</el-form-item>

				<el-form-item prop="STAY_PARTY_NAME" label="所属党组织名称">
					<el-cascader
						v-model="form.STAY_PARTY_NAME"
						:options="parent"
						:props="parentProps"
						:show-all-levels="false"
						:clearable="true"
						placeholder="请选择"
					>
						<template #default="{ node, data }">
							<span>{{ data.CMPY_NAME }}</span>
							<span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
						</template>
					</el-cascader>
				</el-form-item>

				<el-form-item prop="PRACTICE_NUM" label="从业人员数(劳动关系)">
					<el-input
						v-model="form.PRACTICE_NUM"
						:placeholder="isDisabled('PRACTICE_NUM') ? '' : '请输入'"
						:disabled="isDisabled('PRACTICE_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_NUM" label="党员人数">
					<el-input
						v-model="form.PARTY_NUM"
						:placeholder="isDisabled('PARTY_NUM') ? '' : '请输入'"
						:disabled="isDisabled('PARTY_NUM')"
					></el-input>
				</el-form-item>

				<el-form-item prop="PARTY_CHAPTER" label="“党建入章”情况">
					<el-select
						v-model="form.PARTY_CHAPTER"
						:placeholder="isDisabled('PARTY_CHAPTER') ? ' ' : '请选择'"
						:disabled="isDisabled('PARTY_CHAPTER')"
					>
						<el-option
							v-for="item in dictionary.STOCK_PARTY_CHAPTER"
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
			<BusinessListHeader title="董事会管理信息" class="plr20" />
			<el-form label-width="170px" :class="$route.query.isAside ? 'form-style-one' : 'form-style-two'">
				<el-form-item prop="S_SET_DIRECTOR" label="是否建立董事会">
					<el-select
						v-model="form.S_SET_DIRECTOR"
						:placeholder="isDisabled('S_SET_DIRECTOR') ? ' ' : '请选择'"
						:disabled="isDisabled('S_SET_DIRECTOR')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_SET_DIRECTOR"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SET_RULE" label="是否建立《董事会议事规则》">
					<el-select
						v-model="form.S_SET_RULE"
						:placeholder="isMainDisabled('S_SET_RULE') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_SET_RULE')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_SET_RULE"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_EQUAL" label="董事会设立情况是否与章程规定一致">
					<el-select v-model="form.S_EQUAL" :placeholder="isMainDisabled('S_EQUAL') ? ' ' : '请选择'" :disabled="isMainDisabled('S_EQUAL')">
						<el-option v-for="item in dictionary.STOCK_S_EQUAL" :key="item.ITEM_CODE" :label="item.ITEM_NAME" :value="item.ITEM_CODE" />
					</el-select>
				</el-form-item>

				<el-form-item prop="S_SIX_RULE" label="董事会议事规则是否明确六项职权">
					<el-select
						v-model="form.S_SIX_RULE"
						:placeholder="isMainDisabled('S_SIX_RULE') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_SIX_RULE')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_SIX_RULE"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_WORKABLE_SET" label="落实董事会六项职权">
					<el-select
						v-model="form.S_WORKABLE_SET"
						:placeholder="isMainDisabled('S_WORKABLE_SET') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_WORKABLE_SET')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_WORKABLE_SET"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_DIRECTOR_CMPY" label="是否属于应建立董事会的公司">
					<el-select
						v-model="form.S_DIRECTOR_CMPY"
						:placeholder="isMainDisabled('S_DIRECTOR_CMPY') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_DIRECTOR_CMPY')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_DIRECTOR_CMPY"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<!-- 当 '是否属于应建立董事会的公司' 为 '是' 的情况下方可选择 -->
				<el-form-item prop="S_DIRECTOR_MAJORITY" label="董事会外部董事是否应占多数">
					<el-select
						v-model="form.S_DIRECTOR_MAJORITY"
						:placeholder="isMainDisabled('S_DIRECTOR_MAJORITY') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_DIRECTOR_MAJORITY')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_DIRECTOR_MAJORITY"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<!-- 当 '是否属于应建立董事会的公司' 为 '是' 的情况下方可选择 -->
				<el-form-item prop="S_DIRECTOR_OCCUPY" label="董事会外部董事是否已占多数">
					<el-select
						v-model="form.S_DIRECTOR_OCCUPY"
						:placeholder="isMainDisabled('S_DIRECTOR_OCCUPY') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_DIRECTOR_OCCUPY')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_DIRECTOR_OCCUPY"
							:key="item.ITEM_CODE"
							:label="item.ITEM_NAME"
							:value="item.ITEM_CODE"
						/>
					</el-select>
				</el-form-item>

				<el-form-item prop="S_DIRECTOR_INSTITUTION" label="是否建立《董事会授权管理制度》">
					<el-select
						v-model="form.S_DIRECTOR_INSTITUTION"
						:placeholder="isMainDisabled('S_DIRECTOR_INSTITUTION') ? ' ' : '请选择'"
						:disabled="isMainDisabled('S_DIRECTOR_INSTITUTION')"
					>
						<el-option
							v-for="item in dictionary.STOCK_S_DIRECTOR_INSTITUTION"
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
		<div class="business-details-item pb70">
			<BusinessListHeader title="附件" class="plr20" />
		</div>

		<div class="btn-group" v-if="!$route.query.isAside">
			<el-button type="primary" @click="onSave">保存</el-button>
		</div>

		<!-- 添加/修改页面 -->
		<Add ref="addRef" title="添加" />
		<Edit ref="editRef" title="修改" />
	</div>
</template>

<script>
import {
	getBusinessBasicInfoDetails,
	getBusinessLeftTree,
	getBusinessBasicInfoGetEditData,
	getBusinessGdDel,
	getBusinessBasicInfoEdit,
} from '@/api/index.js' // api
import { Local } from '@/utils/storage.js' // 浏览器存储

export default {
	// 组件名称
	name: 'basicInfo',
	// 局部注册的组件
	components: {
		BusinessListHeader: () => import('@/views/component/BusinessListHeader/index.vue'), // 列表头部
		Add: () => import('./add.vue'), // 添加
		Edit: () => import('./edit.vue'), // 修改
	},
	// 组件状态值
	data() {
		return {
			form: {}, // 表单对象
			tableData: [], // 股东信息
			parent: [], // 上级股权公司
			loading: false, // 加载状态
			EDIT_WORD: '', // 可编辑字段
			// 管理团队 cascader 配置选项
			propsTeam: {
				value: 'ID', // 绑定 ID
				label: 'NAME', // 显示 label
				children: 'CHILD', // 指定选项的子选项为选项对象的某个属性值
				checkStrictly: true, // 单选，否则只能选择最后一级
				emitPath: false, // 只返回当前选中的节点，父级节点不返回
			},
			// 所属党组织 cascader 配置选项
			parentProps: {
				value: 'CMPY_BASE_CODE', // 绑定 ID
				label: 'CMPY_NAME', // 显示 label
				children: 'children', // 指定选项的子选项为选项对象的某个属性值
				checkStrictly: true, // 单选，否则只能选择最后一级
				emitPath: false, // 只返回当前选中的节点，父级节点不返回
			},
		}
	},
	computed: {
		// 获取 OA 角色/字典
		dictionary() {
			return this.$store.getters?.dictionary
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessBasicInfoDetails()
		this.onGetBusinessLeftTree()

		// 编辑页的时候获取编辑权限
		if (!this.$route.query.isAside) {
			this.onGetBusinessBasicInfoGetEditData()
		}
	},
	mounted() {
		// 监听添加/修改/删除操作
		this.bus.$on('getBusinessBasicInfoAddEditDel', () => {
			this.onGetBusinessBasicInfoDetails(1)
		})
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取信息详情
		 * @return {*}
		 */
		onGetBusinessBasicInfoDetails(type) {
			this.loading = true

			const params = {
				CMPY_BASE_CODE: this.$route.query.id,
			}
			getBusinessBasicInfoDetails(params).then((res) => {
				if (type !== 1) {
					this.form = res.DATA
				}
				this.tableData = res.GD_DATA
				// 存储给其他子页面使用
				Local.set('enterpriseMapList', res.DATA)

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 获取上级党组织
		 * @return {*}
		 */
		onGetBusinessLeftTree() {
			// 获取上级党组织
			getBusinessLeftTree().then((res) => {
				this.parent = res.treeData
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
		isDisabled(code) {
			if (this.EDIT_WORD !== '') {
				return !this.EDIT_WORD.includes(code)
			} else {
				return true
			}
		},

		/**
		 * @description: 董事会管理信息 - 判断是否可编辑
		 * @return {*}
		 */
		isMainDisabled(code) {
			// 先判断自身是否可编辑
			if (!this.isDisabled(code)) {
				switch (code) {
					// '董事会外部董事是否应占多数'：当 '是否属于应建立董事会的公司' 为 '是' 的情况下方可选择；
					case 'S_DIRECTOR_MAJORITY':
						if (this.form.S_DIRECTOR_CMPY === '1' || this.form.S_DIRECTOR_CMPY === '是') {
							return false
						} else {
							return true
						}
					// '董事会外部董事是否已占多数'：当 '是否属于应建立董事会的公司' 为 '是' 的情况下方可选择
					case 'S_DIRECTOR_OCCUPY':
						if (this.form.S_DIRECTOR_CMPY === '1' || this.form.S_DIRECTOR_CMPY === '是') {
							return false
						} else {
							return true
						}
					// 首先判断 '是否建立董事会' 是否选择 '是'，如果选择 '是'，董事会其他信息才可编辑，如果选择 '否'，董事会其他信息都不可编辑
					default:
						if (this.form.S_SET_DIRECTOR === '1' || this.form.S_SET_DIRECTOR === '是') {
							return false
						} else {
							return true
						}
				}
			} else {
				return true
			}
		},

		/**
		 * @description: 股东信息添加
		 * @return {*}
		 */
		onAdd() {
			this.$refs.addRef.openDialog()
		},

		/**
		 * @description: 股东信息修改
		 * @return {*}
		 */
		onEdit(scope) {
			this.$refs.editRef.openDialog(scope.row)
		},

		/**
		 * @description: 股东信息删除
		 * @return {*}
		 */
		onDelete(scope) {
			const params = {
				GD_CODE: scope.row.GD_CODE,
				S_FLAG: 2,
			}
			getBusinessGdDel(params).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.$message.success('删除成功')
					this.onGetBusinessBasicInfoDetails(1)
				}
			})
		},

		/**
		 * @description: 保存
		 * @return {*}
		 */
		onSave() {
			Object.assign(this.form, { CMPY_CODE: this.$route.query.id })
			getBusinessBasicInfoEdit(this.form).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.$message.success('保存成功')
					this.onGetBusinessBasicInfoDetails()
				}
			})
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('getBusinessBasicInfoAddEditDel')
	},
}
</script>

<style lang="scss" scoped>
.btn-group {
	height: 70px;
	background: #fcfcfc;
	border-radius: 0px 0px 4px 4px;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 0;
	left: 320px;
	right: 20px;
	z-index: 999;

	.el-button {
		min-width: 100px;
	}
}
</style>
