<!--
 * @Description: 登录页面
 * @Author: cdl
 * @Date: 2022-06-21 15:05:21
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-21 15:05:44
-->
<template>
	<div>login</div>
</template>

<script>
export default {
	// 组件名称
	name: 'login',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {
		// 监听路由的变化
		route: {
			handler(to) {
				console.log(to)
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped></style>
