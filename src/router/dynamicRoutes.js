/*
 * @Description: 定义动态路由
 * @Author: cdl
 * @Date: 2022-06-21 15:09:21
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-22 02:24:24
 */
export const dynamicRoutes = [
	{
		path: '/',
		name: '/',
		component: 'layout/index',
		meta: {
			title: '布局页面',
		},
		redirect: '/enterprise',
		children: [],
	},
]
