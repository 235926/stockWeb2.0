/*
 * @Description: 工具栏
 * @Author: cdl
 * @Date: 2022-06-07 17:06:52
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-18 14:39:08
 */

/**
 * @description: 判断浏览器
 * @return {*}
 * @author: cdl
 */
export function isBrowser() {
	const userAgent = navigator.userAgent

	//判断是否Opera浏览器
	if (userAgent.indexOf('Opera') > -1) {
		return 'Opera'
	}

	//判断是否Firefox浏览器
	if (userAgent.indexOf('Firefox') > -1) {
		return 'Firefox'
	}

	//判断是否chorme浏览器
	if (userAgent.indexOf('Chrome') > -1) {
		return 'Chrome'
	}

	//判断是否Safari浏览器
	if (userAgent.indexOf('Safari') > -1) {
		return 'Safari'
	}

	//判断是否IE浏览器
	if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
		return 'IE'
	}

	//判断是否Edge浏览器
	if (userAgent.indexOf('Trident') > -1) {
		return 'Edge'
	}
}
