/*
 * @Description: 接口文档
 * @Date: 2022-06-06 06:05:03
 * @LastEditTime: 2022-07-14 17:19:21
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
 * @description: 获取 OA 角色/字典
 * @param {*} data
 * @return {*}
 */
export const getOaData = (data) => {
	return request({
		url: '/GET_OA_DATA.getOaData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 左侧导航树
 * @param {*} data
 * @return {*}
 */
export const getBusinessLeftTree = (data) => {
	return request({
		url: '/CMPY_BASE_INFO.query.do',
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
 * @description: 企业信息管理 - 业务办理 - 占有派单
 * @param {*} data
 * @return {*}
 */
export const getBusinessSendOwn = (data) => {
	return request({
		url: '/CMPY_BASE_INFO.own.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 基本信息获取详情
 * @param {*} data
 * @return {*}
 */
export const getBusinessBasicInfoDetails = (data) => {
	return request({
		url: '/CMPY_BASE_INFO.details.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 基本信息获取可编辑字段
 * @param {*} data
 * @return {*}
 */
export const getBusinessBasicInfoGetEditData = (data) => {
	return request({
		url: '/CMPY_BASE_INFO.getEditData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 主要人员查询
 * @param {*} data
 * @return {*}
 */
export const getBusinessMainStaff = (data) => {
	return request({
		url: '/CMPY_MAIN_USER.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 主要人员添加
 * @param {*} data
 * @return {*}
 */
export const getBusinessMainStaffAdd = (data) => {
	return request({
		url: '/CMPY_MAIN_USER.saveData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 主要人员修改
 * @param {*} data
 * @return {*}
 */
export const getBusinessMainStaffEdit = (data) => {
	return request({
		url: '/CMPY_MAIN_USER.updateData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 业务办理 - 主要人员删除
 * @description: USER_CODE 需要删除的用户
 * @description: S_FLAG = 2 固定,删除标识
 * @param {*} data
 * @return {*}
 */
export const getBusinessMainStaffDel = (data) => {
	return request({
		url: '/CMPY_MAIN_USER.deleteData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 企业信息管理 - 任务列表
 * @param {*} data
 * @return {*}
 */
export const getBusinessTaskList = (data) => {
	return request({
		url: '/CMPY_TAST.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业信息编辑权限 - 左侧导航树
 * @param {*} data
 */
export const getPermissionsLeftTree = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.editQuery.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业信息编辑权限 - 新增
 * @param {*} data
 */
export const getPermissionsAdd = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.addData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业信息编辑权限 - 修改
 * @param {*} data
 */
export const getPermissionseUpdate = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.updateData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业信息编辑权限 - 删除
 * @param {*} data
 */
export const getPermissionsDelete = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.deleteData.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业信息编辑权限 - 右侧列表
 * @param {*} data
 */
export const getPermissionsRightList = (data) => {
	return request({
		url: '/COMPAY_FIELD_EDIT.query.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 系统设置 - 企业变更类型维护 - 获取数据列表
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
 * @description: 系统设置 - 企业变更类型维护 - 获取可更新字段
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
 * @description: 系统设置 - 企业变更类型维护 - 新增
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
 * @description: 系统设置 - 企业变更类型维护 - 保存
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
 * @description: 系统设置 - 企业变更类型维护 - 删除
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
