/*
 * @Description: OA 角色/字典
 * @Date: 2022-07-22 12:42:55
 * @LastEditTime: 2022-07-22 14:05:11
 */
import { Message } from 'element-ui' // 消息提示

const useRoutesList = {
	namespaced: true,
	state: {
		// OA 角色/字典
		dictionary: {
			STOCK_FOUND_TYPE: [], // 任务类型
			STOCK_MANAGE_TEAM: [], // 管理团队
			STOCK_THIS_TYPE: [], // 任务状态
			SY_ORG_ROLE_STOCK: [], // 可维护角色
			STOCK_CMPY_TYPE: [], // 公司状况
			STOCK_OPERATE_TERM: [], // 经营期限
			STOCK_LOG_TYPE: [], // 登记注册类型
			STOCK_MANAGE_LEVEL: [], // 管理层级
			STOCK_RIGHT_LEVEL: [], // 产权层级
			STOCK_S_SUPERVISION: [], // 国资监管范围
			STOCK_S_CHENGFA: [], // 是否城发体系
			STOCK_CMPY_ATTRIBUTE: [], // 公司属性(公司职能)
			STOCK_CMPY_USE: [], // 公司用途
			STOCK_S_SHARE: [], // 是否分红
			STOCK_S_OPERATE: [], // 是否操盘
			STOCK_FCR_TYPE: [], // 税控机类型
			STOCK_MAX_QUOTA: [], // 增值税专用发票最高限额
			STOCK_S_MERGE_CHART: [], // 是否并表
			STOCK_S_STOCK_FROZEN: [], // 冻结标识
			STOCK_STAY_PARTY_NAME: [], // 所属党组织名称
			STOCK_PARTY_CHAPTER: [], // 党建入章情况
			STOCK_S_SET_DIRECTOR: [], // 是否建立董事会
			STOCK_S_SET_RULE: [], // 是否建立《董事会议事规则》
			STOCK_S_EQUAL: [], // 董事会设立情况是否与章程规定一致
			STOCK_S_SIX_RULE: [], // 董事会议事规则是否明确六项职权
			STOCK_S_WORKABLE_SET: [], // 落实董事会六项职权
			STOCK_S_DIRECTOR_CMPY: [], // 是否属于应建立董事会的公司
			STOCK_S_DIRECTOR_MAJORITY: [], // 董事会外部董事是否应占多数
			STOCK_S_DIRECTOR_OCCUPY: [], // 董事会外部董事是否已占多数
			STOCK_S_DIRECTOR_INSTITUTION: [], // 是否建立《董事会授权管理制度》
		},
	},
	mutations: {
		// 存储 未处理 component 路由菜单
		SER_DICTIONARY(state, data) {
			const key = Object.getOwnPropertyNames(data)[0]
			if (state.dictionary.hasOwnProperty(key)) {
				state.dictionary[key] = data[key]
			} else {
				Message.warning(`dictionary 字典中缺少${key}字段`)
			}
		},
	},
	actions: {
		// 存储 未处理 component 路由菜单
		async setDictionary({ commit }, data) {
			commit('SER_DICTIONARY', data)
		},
	},
}

export default useRoutesList
