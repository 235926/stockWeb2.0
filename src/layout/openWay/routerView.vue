<!--
 * @Description: 路由出口
 * @Author: cdl
 * @Date: 2022-06-10 22:23:37
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 21:25:27
-->
<template>
	<transition mode="out-in">
		<router-view />
	</transition>
</template>

<script>
export default {
	name: 'openWayRouterView',
	data() {
		return {}
	},
	computed: {},
	created() {},
	methods: {},
}
</script>

<style lang="scss" scoped></style>
