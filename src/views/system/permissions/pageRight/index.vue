<!--
 * @Description: 企业信息更新权限 - 右侧页面
 * @Date: 2022-06-15 09:19:42
 * @LastEditTime: 2022-07-09 01:09:40
-->
<template>
	<div class="right pl0 pr0">
		<Add v-if="activeName === 'add'" />
		<Edit ref="editRef" v-else-if="activeName === 'edit'" @editActiveName="editActiveName" />
	</div>
</template>

<script>
export default {
	name: 'systemPermissionsRight',
	components: {
		Add: () => import('./add.vue'), // 新增
		Edit: () => import('./edit.vue'), // 编辑
	},
	data() {
		return {
			activeName: 'add',
		}
	},
	mounted() {
		// 监听点击左侧显示右侧数据
		this.bus.$on('onGetPermissionsRightList', (data) => {
			this.activeName = data.activeName

			setTimeout(() => {
				this.$nextTick(() => {
					this.$refs.editRef.onGetPermissionsRightList(data.EDIT_CODE)
				})
			}, 100)
		})
	},
	methods: {
		/**
		 * @description: 修改显示页面
		 * @return {*}
		 */
		editActiveName() {
			this.activeName = 'add'
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('onGetPermissionsRightList')
	},
}
</script>

<style lang="scss" scoped></style>
