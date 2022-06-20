<!--
 * @Description: svg 图标使用
 * @Author: cdl
 * @Date: 2022-06-14 19:42:08
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-20 15:32:35
-->
<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script>
export default {
	name: 'SvgIcon',
	props: {
		// svg 前缀
		prefix: {
			type: String,
			default: 'icon',
		},
		// svg 图标组件名字
		name: {
			type: String,
		},
		// svg 颜色
		color: {
			type: String,
		},
	},
	computed: {
		symbolId() {
			return `#${this.prefix}-${this.name}`
		},
	},
}
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	fill: currentColor;
	font-size: 16px;
	vertical-align: -0.15em;
	overflow: hidden;
	cursor: pointer;
}
</style>
