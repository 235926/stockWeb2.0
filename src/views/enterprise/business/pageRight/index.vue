<!--
 * @Description: 业务办理 - 右侧内容
 * @Date: 2022-06-16 21:15:33
 * @LastEditTime: 2022-07-14 19:01:30
-->
<template>
	<div class="right">
		<div class="btn mb20">
			<el-button round @click="onOpenDialog('possessionRef')">占有</el-button>
			<el-button round @click="onOpenDialog('changeRef')">变更</el-button>
			<el-button round @click="onOpenDialog('cancelRef')">注销</el-button>
			<el-button round @click="onOpenDialog('editRef')">编辑</el-button>
		</div>
		<el-scrollbar class="horizontal">
			<el-table ref="tableRef" v-loading="loading" :data="tableData" :border="true"
				:header-cell-style="{ 'text-align': 'center' }" :cell-style="{ 'text-align': 'center' }"
				@select="handleSelectionRow" @row-click="handleRowClick" class="column-nowrap c-pointer">
				<el-table-column class-name="custom-label" type="selection" :selectable="selectable" width="55" />

				<el-table-column type="index" label="序号" width="55">
					<template slot-scope="scope">
						<span>{{ (NOWPAGE - 1) * SHOWNUM + scope.$index + 1 }}</span>
					</template>
				</el-table-column>

				<af-table-column v-for="item in tableHeader" :key="item.key" :label="item.label" :property="item.key">
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</af-table-column>

				<el-table-column :show-overflow-tooltip="true" prop="CMPY_TYPE" label="状态">
					<template slot-scope="scope">
						<span v-if="scope.row.CMPY_TYPE === '1'">正常运营</span>
						<span v-if="scope.row.CMPY_TYPE === '2'">注销</span>
						<span v-if="scope.row.CMPY_TYPE === '3'">已转让</span>
					</template>
				</el-table-column>
			</el-table>

			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="NOWPAGE"
				:background="true" :page-sizes="[10, 20, 30, 50]" :page-size="SHOWNUM"
				layout="total, sizes, prev, pager, next, jumper" :total="ALLNUM" class="mb20" />
		</el-scrollbar>

		<Possession title="占有" :visible="possessionVisible" @update:visible="possessionVisible = $event" />
		<Change title="变更" :visible="changeVisible" @update:visible="changeVisible = $event" />
		<Cancel title="注销" :visible="cancelVisible" @update:visible="cancelVisible = $event" />
	</div>
</template>

<script>
	import {
		getBusinessrightQuery
	} from '@/api/index.js' // api
	export default {
		// 组件名称
		name: 'enterpriseBusinessRight',
		// 局部注册的组件
		components: {
			Possession: () => import('./component/possession.vue'), // 占有
			Change: () => import('./component/change.vue'), // 变更
			Cancel: () => import('./component/cancel.vue'), // 注销
		},
		// 组件参数 接收来自父组件的数据
		props: {},
		// 组件状态值
		data() {
			return {
				leftId: '', // 左侧列表当前项 ID
				// table 表头
				tableHeader: [{
						label: '公司名称',
						key: 'CMPY_NAME'
					},
					{
						label: '产权层级',
						key: 'RIGHT_LEVEL'
					},
					{
						label: '管理层级',
						key: 'MANAGE_LEVEL'
					},
					{
						label: '统一社会信息代码',
						key: 'CREDIT_CODE'
					},
					{
						label: '成立时间',
						key: 'BUSINESS_DATE'
					},
					{
						label: '注册资本金',
						key: 'LOG_MONEY'
					},
					{
						label: '法人',
						key: 'LEGAL_AGENT'
					},
				],
				tableData: [], // 数据列表
				NOWPAGE: 1, // 当前页
				SHOWNUM: 10, // 每页条数
				ALLNUM: 0, // 总条数
				possessionVisible: false, // 占有状态
				changeVisible: false, // 变更状态
				cancelVisible: false, // 注销状态
				selectionRow: {}, // 勾选的单条数据
				loading: false, // 加载状态
			}
		},
		mounted() {
			this.bus.$on('onGetBusinessRightList', (id) => {
				this.leftId = id
				this.onGetBusinessrightQuery(id)
			})
		},
		// 组件方法
		methods: {
			/**
			 * @description: 获取右侧列表
			 * @return {*}
			 */
			onGetBusinessrightQuery(id) {
				this.loading = true

				const params = {
					CMPY_BASE_CODE: id,
					NOWPAGE: this.NOWPAGE,
					SHOWNUM: this.SHOWNUM,
				}
				getBusinessrightQuery(params).then((res) => {
					this.tableData = res._DATA_
					this.ALLNUM = ++res._PAGE_.ALLNUM

					setTimeout(() => {
						this.loading = false
					}, 500)
				})
			},

			// 切换每页条数
			handleSizeChange(val) {
				// 解决当前页不是第一页的时候进行切换每页展示条数不回到第一页的问题
				this.NOWPAGE = 1
				this.SHOWNUM = val
				this.onGetBusinessrightQuery(this.leftId)
			},

			// 切换当前页
			handleCurrentChange(val) {
				this.NOWPAGE = val
				this.onGetBusinessrightQuery(this.leftId)
			},

			/**
			 * @description: 根据条件禁用行复选框
			 * @description: 函数必须有返回值且是布尔值
			 * @description: 页面刷新后该函数会执行 N 次进行判断(N 为表格行数)
			 * @description: 如果没有返回值则默认返回false(全部无法选中)
			 * @return {*}
			 */
			selectable(row) {
				if (row.CMPY_TYPE === '2') {
					return false
				} else {
					return true
				}
			},

			/**
			 * @description: 当用户手动勾选数据行的 Checkbox 时触发的事件
			 * @return {*}
			 */
			handleSelectionRow(selection, row) {
				if (Object.is(this.selectionRow.CMPY_BASE_CODE, row.CMPY_BASE_CODE)) {
					this.selectionRow = {}
					this.$refs.tableRef.clearSelection()
				} else {
					this.selectionRow = row
					this.$refs.tableRef.clearSelection()
					this.$refs.tableRef.toggleRowSelection(row)
				}
			},

			/**
			 * @description: table 当某一行被点击时会触发该事件
			 * @param {*} row
			 * @return {*}
			 */
			handleRowClick(row, column) {
				if (column.type !== 'selection') {
					let routeUrl = this.$router.resolve({
						path: '/enterprise/business/details',
						query: {
							isAside: true,
							id: row.CMPY_BASE_CODE,
						},
					})
					window.open(routeUrl.href, '_blank')
				}
			},

			/**
			 * @description: 打开弹窗组件
			 * @param {*} item
			 * @return {*}
			 */
			onOpenDialog(item) {
				switch (item) {
					case 'possessionRef':
						if (JSON.stringify(this.selectionRow) == '{}') {
							this.$message.warning('请先勾选要占有的对象')
						} else {
							this.bus.$emit('possessionRef', this.selectionRow)
							this.possessionVisible = true
						}
						break
					case 'editRef':
						if (JSON.stringify(this.selectionRow) == '{}') {
							this.$message.warning('请先勾选要编辑的对象')
						} else {
							this.$router.push({
								path: '/enterprise/business/details',
								query: {
									id: this.selectionRow.CMPY_BASE_CODE,
								},
							})
						}
						break
				}
			},
		},
		// 页面销毁
		destroyed() {
			this.bus.$off('onGetBusinessRightList')
		},
	}
</script>

<style lang="scss" scoped></style>
