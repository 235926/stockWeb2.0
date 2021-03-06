/*
 * @Description: 定义静态路由
 * @Date: 2022-06-21 15:07:19
 * @LastEditTime: 2022-06-22 02:24:47
 */

// 定义静态路由
export const staticRoutes = [
	// {
	// 	path: '/',
	// 	name: '/',
	// 	component: () => import('@/layout/index.vue'),
	// 	meta: {
	// 		title: '布局界面',
	// 	},
	// 	redirect: '/enterprise',
	// 	children: [
	// 		{
	// 			path: '/enterprise',
	// 			name: 'enterprise',
	// 			component: () => import('@/layout/openWay/routerView.vue'),
	// 			meta: {
	// 				title: '企业信息管理',
	// 				icon: 'message',
	// 			},
	// 			hidden: false,
	// 			redirect: '/enterprise/business',
	// 			children: [
	// 				{
	// 					path: '/enterprise/business',
	// 					name: 'enterpriseBusiness',
	// 					component: () => import('@/views/enterprise/business/index.vue'),
	// 					meta: {
	// 						title: '业务办理',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/enterprise/business/details',
	// 					name: 'enterpriseBusinessDetails',
	// 					component: () => import('@/views/enterprise/business/pageRight/details/index.vue'),
	// 					meta: {
	// 						title: '内容预览',
	// 						activeMenu: '/enterprise/business',
	// 					},
	// 					hidden: true,
	// 				},
	// 				{
	// 					path: '/enterprise/task-list',
	// 					name: 'enterpriseTaskList',
	// 					component: () => import('@/views/enterprise/task-list/index.vue'),
	// 					meta: {
	// 						title: '任务列表',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/enterprise/verification',
	// 					name: 'enterpriseVerification',
	// 					component: () => import('@/views/enterprise/verification/index.vue'),
	// 					meta: {
	// 						title: '信息核查',
	// 					},
	// 					hidden: false,
	// 				},
	// 			],
	// 		},
	// 		{
	// 			path: '/party-info',
	// 			name: 'partyInfo',
	// 			component: () => import('@/views/party-info/index.vue'),
	// 			meta: {
	// 				title: '党组织信息管理',
	// 				icon: 'tree',
	// 			},
	// 			hidden: false,
	// 		},
	// 		{
	// 			path: '/parameter',
	// 			name: 'parameter',
	// 			component: () => import('@/layout/openWay/routerView.vue'),
	// 			meta: {
	// 				title: '台账查询报表',
	// 				icon: 'money',
	// 			},
	// 			hidden: false,
	// 			redirect: '/parameter/custom',
	// 			children: [
	// 				{
	// 					path: '/parameter/custom',
	// 					name: 'parameterCustom',
	// 					component: () => import('@/views/parameter/custom/index.vue'),
	// 					meta: {
	// 						title: '自定义报表',
	// 					},
	// 					hidden: true,
	// 				},
	// 				{
	// 					path: '/parameter/organization',
	// 					name: 'parameterOrganization',
	// 					component: () => import('@/views/parameter/organization/index.vue'),
	// 					meta: {
	// 						title: '党组织台账查询',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/parameter/executives',
	// 					name: 'parameterExecutives',
	// 					component: () => import('@/views/parameter/executives/index.vue'),
	// 					meta: {
	// 						title: '董监高台账查询',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/parameter/state-owned',
	// 					name: 'parameterStateOwned',
	// 					component: () => import('@/views/parameter/state-owned/index.vue'),
	// 					meta: {
	// 						title: '国资监管企业报表',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/parameter/state-owned-not',
	// 					name: 'parameterStateOwnedNot',
	// 					component: () => import('@/views/parameter/state-owned-not/index.vue'),
	// 					meta: {
	// 						title: '非国资监管企业报表',
	// 					},
	// 					hidden: false,
	// 				},
	// 			],
	// 		},
	// 		{
	// 			path: '/system',
	// 			name: 'system',
	// 			component: () => import('@/layout/openWay/routerView.vue'),
	// 			meta: {
	// 				title: '系统设置',
	// 				icon: 'settings',
	// 			},
	// 			hidden: false,
	// 			redirect: '/system/basic-info',
	// 			children: [
	// 				{
	// 					path: '/system/basic-info',
	// 					name: 'systemBasicInfo',
	// 					component: () => import('@/views/system/basic-info/index.vue'),
	// 					meta: {
	// 						title: '基础信息维护',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/system/permissions',
	// 					name: 'systemPermissions',
	// 					component: () => import('@/views/system/permissions/index.vue'),
	// 					meta: {
	// 						title: '企业信息更新权限',
	// 					},
	// 					hidden: false,
	// 				},
	// 				{
	// 					path: '/system/change-type',
	// 					name: 'systemChangeType',
	// 					component: () => import('@/views/system/change-type/index.vue'),
	// 					meta: {
	// 						title: '变更类型维护',
	// 					},
	// 					hidden: false,
	// 				},
	// 			],
	// 		},
	// 		{
	// 			path: '/icons',
	// 			name: 'icons',
	// 			component: () => import('@/views/icons/index.vue'),
	// 			meta: {
	// 				title: 'icons',
	// 				icon: 'icons',
	// 			},
	// 			hidden: false,
	// 		},
	// 		{
	// 			path: '/test',
	// 			name: 'test',
	// 			component: () => import('@/views/test/index.vue'),
	// 			meta: {
	// 				title: '测试页面',
	// 				icon: 'test',
	// 			},
	// 			hidden: false,
	// 		},
	// 		{
	// 			path: '/nested',
	// 			name: 'nested',
	// 			component: () => import('@/layout/openWay/routerView.vue'),
	// 			meta: {
	// 				title: '嵌套组件',
	// 				icon: 'nested',
	// 			},
	// 			hidden: false,
	// 			redirect: '/nested/menu1',
	// 			children: [
	// 				{
	// 					path: '/nested/menu1',
	// 					name: 'nestedMenu1',
	// 					component: () => import('@/layout/openWay/routerView.vue'),
	// 					meta: {
	// 						title: 'menu1',
	// 					},
	// 					hidden: false,
	// 					children: [
	// 						{
	// 							path: '/nested/menu1/menu1-1',
	// 							name: 'menu1-1',
	// 							component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
	// 							meta: {
	// 								title: 'menu1-1',
	// 							},
	// 							hidden: true,
	// 						},
	// 						{
	// 							path: '/nested/menu1/menu1-2',
	// 							name: 'menu1-2',
	// 							component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
	// 							meta: {
	// 								title: 'menu1-2',
	// 							},
	// 							hidden: false,
	// 						},
	// 					],
	// 				},
	// 				{
	// 					path: '/nested/menu2',
	// 					name: 'nestedMenu2',
	// 					component: () => import('@/views/nested/menu2/index.vue'),
	// 					meta: {
	// 						title: 'menu2',
	// 					},
	// 					hidden: false,
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login'),
		meta: {
			title: '登录',
		},
	},
	{
		path: '/404',
		name: 'notFound',
		component: () => import('@/views/error/404.vue'),
		meta: {
			title: '404',
		},
	},
	{
		path: '/401',
		name: 'noPower',
		component: () => import('@/views/error/401.vue'),
		meta: {
			title: '401',
		},
	},
]
