/*
 * @Description: 接口文档
 * @Date: 2022-06-06 06:05:03
 * @LastEditTime: 2022-07-06 10:12:08
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
 * @description: 党组织信息管理 - 新增/编辑/删除
 * @param {*} data
 */
export const getPartyInfoAddEditDelete = (data) => {
	return request({
		url: '/PARTY_ORG_INFO.updateData.do',
		method: 'get',
		params: data,
	})
}
