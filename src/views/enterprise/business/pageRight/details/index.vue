<!--
 * @Description: 企业信息内容 - 内容预览
 * @Author: cdl
 * @Date: 2022-06-17 10:17:51
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-18 12:16:59
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content pt20 pb20">
			<el-tabs v-model="activeName" type="card" class="tabs-style-one">
				<el-tab-pane label="基本信息" name="basicInfo">
					<BasicInfo />
				</el-tab-pane>
				<el-tab-pane label="主要人员" name="mainStaff">
					<MainStaff />
				</el-tab-pane>
				<el-tab-pane label="投资企业" name="investment">
					<Investment />
				</el-tab-pane>
				<el-tab-pane label="企业图谱" name="enterpriseMap">
					<EnterpriseMap />
				</el-tab-pane>
				<el-tab-pane label="变更记录" name="changeRecord">
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
		BasicInfo: () => import('./basic-info.vue'), // 基本信息
		MainStaff: () => import('./main-staff.vue'), // 主要人员
		Investment: () => import('./investment.vue'), // 投资企业
		EnterpriseMap: () => import('./enterprise-map.vue'), // 企业图谱
		ChangeRecord: () => import('./change-record.vue'), // 变更记录
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			activeName: 'basicInfo', // tabs 默认展示
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
