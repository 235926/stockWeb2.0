/*
 * @Description: 路由根文件
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 14:03:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

// 安装 VueRouter 插件
Vue.use(VueRouter)

export const routes = [
	{
		path: '/',
		name: '/',
		component: () => import('@/layout/index.vue'),
		meta: {
			title: '首页',
			icon: 'home_fill',
		},
		redirect: '/enterprise',
		children: [
			{
				path: '/enterprise',
				name: 'enterprise',
				component: () => import('@/layout/openWay/routerView.vue'),
				meta: {
					title: '企业信息管理',
					icon: 'message',
				},
				redirect: '/enterprise/business',
				children: [
					{
						path: '/enterprise/business',
						name: 'enterpriseBusiness',
						component: () => import('@/views/enterprise/business/index.vue'),
						meta: {
							title: '业务办理',
						},
					},
					{
						path: '/enterprise/task-list',
						name: 'enterpriseTaskList',
						component: () => import('@/views/enterprise/task-list/index.vue'),
						meta: {
							title: '任务列表',
						},
					},
					{
						path: '/enterprise/verification',
						name: 'enterpriseVerification',
						component: () => import('@/views/enterprise/verification/index.vue'),
						meta: {
							title: '信息核查',
						},
					},
				],
			},
			{
				path: '/party-info',
				name: 'partyInfo',
				component: () => import('@/views/party-info/index.vue'),
				meta: {
					title: '党组织信息管理',
					icon: 'tree',
				},
			},
			{
				path: '/parameter',
				name: 'parameter',
				component: () => import('@/layout/openWay/routerView.vue'),
				meta: {
					title: '台账查询报表',
					icon: 'money',
				},
				redirect: '/parameter/custom',
				children: [
					{
						path: '/parameter/custom',
						name: 'parameterCustom',
						component: () => import('@/views/parameter/custom/index.vue'),
						meta: {
							title: '自定义报表',
						},
					},
					{
						path: '/parameter/organization',
						name: 'parameterOrganization',
						component: () => import('@/views/parameter/organization/index.vue'),
						meta: {
							title: '党组织台账查询',
						},
					},
					{
						path: '/parameter/executives',
						name: 'parameterExecutives',
						component: () => import('@/views/parameter/executives/index.vue'),
						meta: {
							title: '董监高台账查询',
						},
					},
					{
						path: '/parameter/state-owned',
						name: 'parameterStateOwned',
						component: () => import('@/views/parameter/state-owned/index.vue'),
						meta: {
							title: '国资监管企业报表',
						},
					},
					{
						path: '/parameter/state-owned-not',
						name: 'parameterStateOwnedNot',
						component: () => import('@/views/parameter/state-owned-not/index.vue'),
						meta: {
							title: '非国资监管企业报表',
						},
					},
				],
			},
			{
				path: '/system',
				name: 'system',
				component: () => import('@/layout/openWay/routerView.vue'),
				meta: {
					title: '系统设置',
					icon: 'settings',
				},
				redirect: '/system/basic-info',
				children: [
					{
						path: '/system/basic-info',
						name: 'systemBasicInfo',
						component: () => import('@/views/system/basic-info/index.vue'),
						meta: {
							title: '基础信息维护',
						},
					},
					{
						path: '/system/permissions',
						name: 'systemPermissions',
						component: () => import('@/views/system/permissions/index.vue'),
						meta: {
							title: '企业信息更新权限',
						},
					},
					{
						path: '/system/change-type',
						name: 'systemChangeType',
						component: () => import('@/views/system/change-type/index.vue'),
						meta: {
							title: '变更类型维护',
						},
					},
				],
			},
			{
				path: '/icons',
				name: 'icons',
				component: () => import('@/views/icons/index.vue'),
				meta: {
					title: 'icons',
					icon: 'icons',
				},
			},
			{
				path: '/test',
				name: 'test',
				component: () => import('@/views/test/index.vue'),
				meta: {
					title: '测试页面',
					icon: 'test',
				},
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

export default router
