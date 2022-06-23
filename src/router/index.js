/*
 * @Description: 路由根文件
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 12:09:14
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js' // vuex
import { getMenuList } from '@/api/index.js' // api
import { dynamicRoutes } from './dynamicRoutes.js' // 动态路由
import { staticRoutes } from './staticRoutes.js' // 静态路由

// 解决 点击同一路由，控制台报错问题，适用所有UI框架
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

// 安装 VueRouter 插件
Vue.use(VueRouter)

// 加载静态路由
const createRouter = () =>
	new VueRouter({
		routes: staticRoutes,
	})

// 创建路由
const router = createRouter()

// 处理后端返回的 `component` 路径，拼装实现懒加载
export function loadView(path) {
	if (path.indexOf('layout') > -1) return () => Promise.resolve(require(`@/${path}.vue`))
	else return () => Promise.resolve(require(`@/views/${path}.vue`))
}

// 递归处理每一项 `component` 中的路径
export function dynamicRouter(routes) {
	return routes.map((view) => {
		if (view.component) view.component = loadView(view.component)
		if (view.children) dynamicRouter(view.children)
		return view
	})
}

/**
 * @description: 把后端传回来的字段处理成我们想要的字段
 * @return 处理后适合我们用的字段类型
 * @author: cdl
 */
export function filterEndMyField(routes) {
	routes.forEach((item) => {
		item.component = item.TIP
		item.path = item.INFO
		item.meta = {
			title: item.NAME,
			icon: item.ICON,
			isHidden: item.MENU_NODE_VIRTUAL === '1' ? true : false,
			activeMenu: item.COMPONENT,
		}
		item.children = item.CHILD
		item.redirect = item.BASE_MENU_ID

		if (item.CHILD && item.CHILD.length > 0) {
			filterEndMyField(item.CHILD)
		}
	})
	return routes
}

// 重置路由
export function resetRouter() {
	router.matcher = createRouter().matcher
}

// 动态加载后端返回路由路由(模拟数据)
export function getRouterList(router, to, next) {
	resetRouter()
	getMenuList().then(async (res) => {
		const newRoute = filterEndMyField(res.CHILD[0].CHILD)
		store.dispatch('routesList/setOldRoutesList', newRoute)
		dynamicRoutes[0].children = newRoute

		const awaitRoute = await dynamicRouter(dynamicRoutes)
		for (let i = 0; i < awaitRoute.length; i++) {
			router.addRoute(awaitRoute[i])
		}

		// router.addRoute({ path: '*', redirect: '/404' })
		next({ ...to, replace: true })
	})
}

// 路由加载前
router.beforeEach((to, from, next) => {
	if (Object.keys(store.state.routesList.oldRoutesList).length <= 0) {
		getRouterList(router, to, next)
	} else {
		next()
	}
})

export default router
