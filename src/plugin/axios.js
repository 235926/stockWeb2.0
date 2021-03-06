/*
 * @Description: ajax 请求接口
 * @Date: 2022-06-08 15:14:36
 * @LastEditTime: 2022-06-23 21:30:39
 */
import axios from 'axios' // ajax 请求插件
import { Local } from '@/utils/storage.js' // 浏览器存储
import { Message } from 'element-ui' // 消息提示

// 创建一个 axios 实例
const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	timeout: 50000, // 请求时长
	withCredentials: false, // 当发送跨域请求时携带 cookie
	headers: {
		'Content-Type': 'application/json',
		'X-DEVICE-NAME': 'DESKTOP',
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		// // // 在发送请求之前做些什么 token
		if (Local.get('token')) {
			config.headers.common['X-XSRF-TOKEN'] = `${Local.get('token')}`
		}
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 如果状态码为 401 跳转首页
		if (response.status == 401) {
			window.location.href = '/'
		}

		// ERROR,报错提示
		if (response.data._MSG_?.indexOf('ERROR,') == 0) {
			Message.error(response.data._MSG_)
		}

		return response.data
	},
	(error) => {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export default service
