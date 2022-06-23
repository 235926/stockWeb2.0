/*
 * @Description: 定义动态路由
 * @Author: cdl
 * @Date: 2022-06-21 15:09:21
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 10:51:14
 */
export const dynamicRoutes = [
	{
		path: '/',
		name: '/',
		component: 'layout/index',
		meta: {
			title: '首页',
			icon: 'home_fill',
		},
		redirect: '/enterprise',
		children: [],
	},
]
