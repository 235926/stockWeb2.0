<!--
 * @Description: 党组织信息管理 - 右侧内容
 * @Date: 2022-06-15 12:29:14
 * @LastEditTime: 2022-07-06 12:27:50
-->
<template>
	<div class="right" v-loading="loading">
		<div class="btn mb10">
			<el-button round @click="onAdd">添加</el-button>
		</div>

		<el-table
			:data="tableData"
			:border="true"
			empty-text="暂无下级党组织信息"
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column prop="INFO_NAME" label="党组织名称" />
			<el-table-column prop="INFO_LEVEL" label="级别" width="80" />
			<el-table-column label="操作" width="180">
				<template #default="scope">
					<div class="flex-center-inline c-pointer" @click="onEdit(scope)">
						<span class="span-svg-icon edit">
							<SvgIcon name="edit" color="#fff" />
						</span>
						<span class="edit">修改</span>
					</div>
					<div class="flex-center-inline c-pointer">
						<el-popconfirm
							confirm-button-text="确定"
							cancel-button-text="取消"
							title="你确定要删除这个吗?"
							placement="left"
							@confirm="onDelete(scope)"
						>
							<template slot="reference">
								<div class="flex-row-center">
									<span class="span-svg-icon close">
										<SvgIcon name="close" color="#fff" />
									</span>
									<span class="del">删除</span>
								</div>
							</template>
						</el-popconfirm>
					</div>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加/修改页面 -->
		<Add ref="addRef" title="添加" />
		<Edit ref="editRef" title="修改" />
	</div>
</template>

<script>
import { getPartyInfoRightList, getPartyInfoAddEditDelete } from '@/api/index.js' // api
export default {
	name: 'partyInfoRight',
	components: {
		Add: () => import('./add.vue'), // 添加页面
		Edit: () => import('./edit.vue'), // 添加页面
	},
	data() {
		return {
			tableData: [], // 数据列表
			loading: false, // 加载状态
		}
	},
	mounted() {
		this.bus.$on('onGetPartyInfoRightList', (id) => {
			this.onGetPartyInfoRightList(id)
		})
	},
	methods: {
		/**
		 * @description: 获取数据列表
		 * @return {*}
		 */
		onGetPartyInfoRightList(id) {
			this.loading = true
			let params = {
				INFO_CODE: id,
			}
			getPartyInfoRightList(params).then((res) => {
				this.tableData = res.listData
				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 添加
		 * @return {*}
		 */
		onAdd() {
			this.$refs.addRef.openDialog()
		},

		/**
		 * @description: 修改
		 * @return {*}
		 */
		onEdit(scope) {
			this.$refs.editRef.openDialog(scope.row)
		},

		/**
		 * @description: 删除
		 * @return {*}
		 */
		onDelete(scope) {
			let params = {
				INFO_CODE: scope.row.INFO_CODE,
				S_FLAG: 2,
			}
			getPartyInfoAddEditDelete(params).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.$message.success('删除成功')
					this.bus.$emit('getPartyInfoAddEditDelete')
				}
			})
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('onGetPartyInfoRightList')
	},
}
</script>

<style lang="scss" scoped></style>
