/*
 * @Description: 接口文档
 * @Date: 2022-06-06 06:05:03
 * @LastEditTime: 2022-07-07 17:44:40
 */
import request from '@/plugin/axios.js' // axios

/**
 * @description: 用户登录
 * @param {*} data
 * @return {*}
 */
export const login = (data) => {
	return request({
		url: '/SY_ORG_LOGIN.login.do',
		method: 'get',
		params: {
			loginName: 'zhaoym',
			password: '123456',
		},
	})
}

/**
 * @description: 获取菜单列表
 * @param {*} data
 * @return {*}
 */
export const getMenuList = (data) => {
	return request({
		url: '/SY_COMM_INFO.dict.do',
		method: 'get',
		params: {
			DICT_ID: 'SY_COMM_MENU_USER',
		},
	})
}

/**
 * @description: 获取 OA 角色
 * @param {*} data
 * @return {*}
 */
export const getOaData = (data) => {
	return request({
		url: '/GET_OA_DATA.getOaData.do',
		method: 'get',
		params: {
			dictId: 'SY_ORG_ROLE_STOCK',
		},
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 左侧导航树
 * @param {*} data
 * @return {*}
 */
export const getBusinessLeftTree = (data) => {
	return request({
		url: '/CMPY_INFO.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 右侧列表
 * @param {*} data
 * @return {*}
 */
export const getBusinessrightQuery = (data) => {
	return request({
		url: '/CMPY_INFO.rightQuery.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 获取详情
 * @param {*} data
 * @return {*}
 */
export const getBusinessDetails = (data) => {
	return request({
		url: '/CMPY_INFO.details.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业变更类型 - 获取数据列表
 * @param {*} data
 */
export const getChangeType = (data) => {
	return request({
		url: '/COMPAY_EDIT_TYPE.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业变更类型 - 获取可更新字段
 * @param {*} data
 */
export const getChangeTypeField = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业变更类型 - 新增
 * @param {*} data
 */
export const addChangeType = (data) => {
	return request({
		url: '/COMPAY_EDIT_TYPE.addData.do',
		method: 'get',
		params: {
			// 传递数组需要JSON.stringify转换
			data: JSON.stringify(data),
		},
	})
}

/**
 * @description: 企业变更类型 - 保存
 * @param {*} data
 */
export const updateChangeType = (data) => {
	return request({
		url: '/COMPAY_EDIT_TYPE.updateData.do',
		method: 'get',
		params: {
			// 传递数组需要JSON.stringify转换
			data: JSON.stringify(data),
		},
	})
}

/**
 * @description: 企业变更类型 - 删除
 * @param {*} data
 */
export const deleteChangeTypeList = (data) => {
	return request({
		url: '/COMPAY_EDIT_TYPE.deleData.do',
		method: 'get',
		params: {
			// 传递数组需要JSON.stringify转换
			data: JSON.stringify(data),
		},
	})
}

/**
 * @description: 党组织信息管理 - 左侧导航栏
 * @param {*} data
 */
export const getPartyInfoTree = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.selectDictValByKey.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 右侧列表
 * @param {*} data
 */
export const getPartyInfoRightList = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.lookPartyOrgInfo.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 拖拽保存
 * @param {*} data
 */
export const getPartyInfoUpdateSort = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.updateSort.do',
		method: 'get',
		params: {
			// 传递数组需要JSON.stringify转换
			data: JSON.stringify(data),
		},
	})
}

/**
 * @description: 党组织信息管理 - 判断是否有下一级
 * @description: 必选：INFO_CODE 党组织id，返回 num = 0，没有下一级，大于0有下一级
 * @param {*} data
 */
export const getPartyInfoisHaveLower = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.isHaveLower.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 重名判断
 * @description: 创建或修改前根据 INFO_NAME 查看是否有重名
 * @param {*} data
 */
export const getPartyInfoRepeatName = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.repeatName.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 新增
 * @param {*} data
 */
export const getPartyInfoAdd = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.addData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 编辑
 * @param {*} data
 */
export const getPartyInfoUpdate = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.updateData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 党组织信息管理 - 删除
 * @param {*} data
 */
export const getPartyInfoDelete = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.deleteData.do',
		method: 'get',
		params: data,
	})
}
