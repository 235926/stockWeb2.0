<!--
 * @Description: 入口页面
 * @Date: 2022-06-08 14:44:01
 * @LastEditTime: 2022-07-22 14:07:34
-->
<template>
	<div id="app">
		<!-- 路由出口 -->
		<router-view />

		<!-- 系统配置 -->
		<SystemConfig />
	</div>
</template>

<script>
import { login, getOaData } from '@/api/index.js' // api
import { Local } from '@/utils/storage.js' // 浏览器存储
export default {
	name: 'app',
	components: {
		SystemConfig: () => import('@/components/SystemConfig/drawer.vue'), // main 头部
	},
	// 计算属性
	computed: {
		// 获取系统配置
		getSystemConfig() {
			return this.$store.state.systemConfig.systemConfig
		},
	},
	// 侦听器
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				this.$nextTick(() => {
					let webTitle = to.meta.title
					let { globalTitle } = this.$store.state.systemConfig.systemConfig
					document.title = `${webTitle} - ${globalTitle}` || globalTitle
				})
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	created() {
		// 登录接口
		this.onLogin()
	},
	mounted() {
		this.getLayoutSystemConfig()
	},
	methods: {
		/**
		 * @description: 获取缓存中的布局配置
		 * @return {*}
		 */
		getLayoutSystemConfig() {
			if (Local.get('systemConfig')) {
				this.$store.dispatch('systemConfig/setSystemConfig', Local.get('systemConfig'))
				document.documentElement.style.cssText = Local.get('systemConfigStyle')
			} else {
				Local.set('systemConfig', this.$store.state.systemConfig.systemConfig)
			}
		},

		/**
		 * @description: 登录接口
		 * @return {*}
		 */
		onLogin() {
			login().then((res) => {
				if (res._MSG_.includes('OK,')) {
					Local.set('token', res.USER_TOKEN)
					this.onGetOaData()
				}
			})
		},

		/**
		 * @description: 获取 OA 角色/字典
		 * @description: 对应获取 src/pinia/dictionary.js 中字段字典
		 * @return {*}
		 */
		onGetOaData() {
			const dictionary = this.$store.state.dictionary.dictionary
			Object.keys(dictionary).map((item) => {
				if (dictionary[item].length <= 0) {
					getOaData({ dictId: item }).then((res) => {
						const data = {}
						data[item] = res.bean._DATA_
						this.$store.dispatch('dictionary/setDictionary', data)
					})
				}
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
