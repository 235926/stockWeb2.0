<!--
 * @Description: 党组织信息管理 - 右侧内容
 * @Date: 2022-06-15 12:29:14
 * @LastEditTime: 2022-07-18 18:29:14
-->
<template>
	<div class="right">
		<div class="btn mb10">
			<el-button round @click="onAdd">添加</el-button>
		</div>

		<el-table
			ref="tableRef"
			v-loading="loading"
			:data="tableData"
			:border="true"
			empty-text="暂无下级党组织信息"
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
			class="c-all-scroll"
		>
			<el-table-column label="序号" type="index" width="55" />
			<el-table-column prop="INFO_NAME" label="党组织名称" />
			<el-table-column prop="INFO_LEVEL" label="级别" width="80" />

			<el-table-column label="操作" class-name="operation" width="200">
				<template slot-scope="scope">
					<el-button class="mr20" type="text" @click="onEdit(scope)">
						<span class="span-svg-icon edit">
							<SvgIcon name="edit" color="#fff" />
						</span>
						<span class="edit">修改</span>
					</el-button>
					<el-popconfirm
						confirm-button-text="确定"
						cancel-button-text="取消"
						:title="`您确定要删除'${scope.row.INFO_NAME}'吗?`"
						placement="left"
						@confirm="onDelete(scope)"
					>
						<template slot="reference">
							<el-button type="text">
								<span class="span-svg-icon close">
									<SvgIcon name="close" color="#fff" />
								</span>
								<span class="del">删除</span>
							</el-button>
						</template>
					</el-popconfirm>
				</template>
			</el-table-column>
		</el-table>

		<!-- 添加/修改页面 -->
		<Add ref="addRef" title="添加" />
		<Edit ref="editRef" title="修改" />
	</div>
</template>

<script>
import {
	getPartyInfoRightList,
	getPartyInfoisHaveLower,
	getPartyInfoDelete,
	getPartyInfoUpdateSort,
} from '@/api/index.js' // api
import Sortable from 'sortablejs' // 拖拽插件
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
			leftId: '', // 点击左侧ID
			sortable: null,
		}
	},
	mounted() {
		this.bus.$on('onGetPartyInfoRightList', (id) => {
			this.leftId = id
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
			this.tableData = []

			let params = {
				INFO_CODE: id,
			}
			getPartyInfoRightList(params).then((res) => {
				this.tableData = res.listData

				this.$nextTick(() => {
					this.initSortable()
				})

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		// 初始化拖拽
		initSortable() {
			const tbody = this.$refs.tableRef.$el.querySelectorAll('.el-table__body-wrapper tbody')[0]
			Sortable.create(tbody, {
				onEnd: ({ newIndex, oldIndex }) => {
					// 当前拖拽的对象
					const targetRow = this.tableData.splice(oldIndex, 1)[0]
					this.tableData.splice(newIndex, 0, targetRow)

					// 重新赋值排序字段
					const newArr = []
					this.tableData.forEach((item, index) => {
						newArr.push({
							INFO_CODE: item.INFO_CODE,
							S_SORT: (item.S_SORT = index),
						})
					})

					// 保存拖拽排序后的数据
					const params = {
						listData: newArr,
					}
					getPartyInfoUpdateSort(params).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.bus.$emit('partyInfoSortable', this.leftId)
						}
					})
				},
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
			getPartyInfoisHaveLower({ INFO_CODE: scope.row.INFO_CODE }).then((res) => {
				if (res.num === '0') {
					getPartyInfoDelete(params).then((res) => {
						if (res._MSG_.includes('OK,')) {
							this.$message.success('删除成功')
							this.bus.$emit('getPartyInfoAddEditDelete')
						}
					})
				} else {
					this.$message.error('请先删除子级，在删除当前级')
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
