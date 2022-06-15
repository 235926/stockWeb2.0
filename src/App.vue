<!--
 * @Description: 入口页面
 * @Author: cdl
 * @Date: 2022-06-08 14:44:01
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-11 01:18:23
-->
<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import { login } from '@/api/index.js' // api
import { Local } from '@/utils/storage.js' // 浏览器存储
export default {
	name: 'app',
	data() {
		return {}
	},
	created() {
		// 登录接口
		// this.onLogin()
	},
	methods: {
		/**
		 * @description: 登录接口
		 * @return {*}
		 * @author: cdl
		 */
		onLogin() {
			let params = {
				loginName: 'admin_exexm',
				password: '123Qwe',
			}
			login(params).then((res) => {
				Local.set('token', res.USER_TOKEN)
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
