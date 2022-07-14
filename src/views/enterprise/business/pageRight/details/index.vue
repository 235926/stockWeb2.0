<!--
 * @Description: 企业信息内容 - 内容预览
 * @Date: 2022-06-17 10:17:51
 * @LastEditTime: 2022-07-14 17:37:12
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content pt20 pb20">
			<el-tabs v-model="activeName" type="card" class="tabs-style-one">
				<el-tab-pane :lazy="true" label="基本信息" name="basicInfo">
					<BasicInfo />
				</el-tab-pane>
				<el-tab-pane :lazy="true" label="主要人员" name="mainStaff">
					<MainStaff />
				</el-tab-pane>
				<el-tab-pane :lazy="true" label="投资企业" name="investment" v-if="$route.query?.isAside">
					<Investment />
				</el-tab-pane>
				<el-tab-pane :lazy="true" label="企业图谱" name="enterpriseMap" v-if="$route.query?.isAside">
					<EnterpriseMap />
				</el-tab-pane>
				<el-tab-pane :lazy="true" label="变更记录" name="changeRecord" v-if="$route.query?.isAside">
					<ChangeRecord />
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'enterpriseBusinessDetails',
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
		BasicInfo: () => import('./basic-info/index.vue'), // 基本信息
		MainStaff: () => import('./main-staff/index.vue'), // 主要人员
		Investment: () => import('./investment/index.vue'), // 投资企业
		EnterpriseMap: () => import('./enterprise-map/index.vue'), // 企业图谱
		ChangeRecord: () => import('./change-record/index.vue'), // 变更记录
	},
	// 组件状态值
	data() {
		return {
			activeName: 'basicInfo', // tabs 默认展示
		}
	},
}
</script>

<style lang="scss" scoped></style>
