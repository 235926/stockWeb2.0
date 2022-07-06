/*
 * @Description:
 * @Date: 2022-06-21 15:34:35
 * @LastEditTime: 2022-06-21 15:45:16
 */
const useRoutesList = {
	namespaced: true,
	state: {
		oldRoutesList: [], // 未处理 component
		newRoutesList: [], // 已处理 component
	},
	mutations: {
		// 存储 未处理 component 路由菜单
		SET_OLD_ROUTES_LIST(state, data) {
			state.oldRoutesList = data
		},

		// 存储 已处理 component 路由菜单
		SET_NEW_ROUTES_LIST(state, data) {
			state.newRoutesList = data
		},
	},
	actions: {
		// 存储 未处理 component 路由菜单
		async setOldRoutesList({ commit }, data) {
			commit('SET_OLD_ROUTES_LIST', data)
		},

		// 存储 已处理 component 路由菜单
		async setNewRoutesList({ commit }, data) {
			commit('SET_NEW_ROUTES_LIST', data)
		},
	},
}

export default useRoutesList
