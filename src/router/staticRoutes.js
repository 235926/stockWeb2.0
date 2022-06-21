/*
 * @Description: 定义静态路由
 * @Author: cdl
 * @Date: 2022-06-21 15:07:19
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-21 15:07:26
 */

// 定义静态路由
export const staticRoutes = [
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
