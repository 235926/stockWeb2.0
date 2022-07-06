<!--
 * @Description: 测试页面
 * @Date: 2022-06-15 18:11:26
 * @LastEditTime: 2022-07-06 11:42:59
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<div id="container"></div>
		</div>
	</div>
</template>

<script>
import G6 from '@antv/g6'
export default {
	// 组件名称
	name: '',
	// 组件参数 接收来自父组件的数据
	props: {},
	// 局部注册的组件
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
	},
	// 组件状态值
	data() {
		return {
			data: [
				{
					ITEM_MEMO: 'id',
					ITEM_NAME: '1',
					ITEM_INPUT_TYPE: '1',
				},
				{
					ITEM_MEMO: 'id',
					ITEM_NAME: '2',
					ITEM_INPUT_TYPE: '1',
				},
				{
					ITEM_MEMO: 'id',
					ITEM_NAME: '3',
					ITEM_INPUT_TYPE: '1',
				},
			],
			data1: {
				_PK_: '11111',
				S_OPERATE: '22222',
				LEGAL_AGENT: '33333',
			},
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	created() {
		this.init()
	},
	mounted() {},
	// 组件方法
	methods: {
		init() {
			const str = Object.values(this.data1)
			this.data.forEach((item, index) => {
				item.ITEM_NAME = str[index]
			})
		},
	},
}
</script>

<style lang="scss" scoped></style>
