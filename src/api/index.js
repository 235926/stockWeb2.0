/*
 * @Description: 接口文档
 * @Author: cdl
 * @Date: 2022-06-08 15:13:35
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-22 00:11:29
 */
import request from '@/plugin/axios.js' // axios

/**
 * @description: 用户登录
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const login = (data) => {
	return request({
		url: '/SY_ORG_LOGIN.login.do',
		method: 'get',
		params: {
			loginName: 'admin_exexm',
			password: '123Qwe',
		},
	})
}

/**
 * @description: 获取菜单列表
 * @param {*} data
 * @return {*}
 * @author: cdl
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
