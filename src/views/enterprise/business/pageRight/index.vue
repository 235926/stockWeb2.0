<!--
 * @Description: 业务办理 - 右侧内容
 * @Date: 2022-06-16 21:15:33
 * @LastEditTime: 2022-07-06 10:23:19
-->
<template>
	<div class="right">
		<div class="btn mb20">
			<el-button round @click="onOpenDialog('possession')">占有</el-button>
			<el-button round @click="onOpenDialog('change')">变更</el-button>
			<el-button round @click="onOpenDialog('cancel')">注销</el-button>
			<el-button round @click="onOpenDialog('edit')">编辑</el-button>
		</div>
		<el-scrollbar class="horizontal">
			<el-table
				ref="tableRef"
				v-loading="loading"
				:data="tableData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				@select="handleSelectionRow"
				@row-click="handleRowClick"
				class="column-nowrap c-pointer"
			>
				<el-table-column class-name="custom-label" type="selection" align="center" width="55">
				</el-table-column>
				<el-table-column type="index" label="序号" align="center" width="65" />

				<af-table-column v-for="item in tableHeader" :key="item.key" :label="item.label" :property="item.key">
					<template slot-scope="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</af-table-column>
			</el-table>
		</el-scrollbar>

		<Possession title="占有" :visible="possessionVisible" @update:visible="possessionVisible = $event" />
		<Change title="变更" :visible="changeVisible" @update:visible="changeVisible = $event" />
		<Cancel title="注销" :visible="cancelVisible" @update:visible="cancelVisible = $event" />
	</div>
</template>

<script>
import { getBusinessrightQuery } from '@/api/index.js' // api
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
			tableHeader: [
				{ label: '公司名称', key: 'data1' },
				{ label: '产权层级', key: 'data2' },
				{ label: '管理层级', key: 'data3' },
				{ label: '产权层级', key: 'data4' },
				{ label: '统一社会信息代码', key: 'data5' },
				{ label: '成立时间', key: 'data6' },
				{ label: '注册资本金', key: 'data7' },
				{ label: '法人', key: 'data8' },
				{ label: '状态', key: 'data9' },
			],
			tableData: [
				{
					data1: '北京首创城市发展集团有限公司',
					data2: 1,
					data3: 1,
					data4: '91110115MA04BH9K88',
					data5: '1990年11月',
					data6: '330,000（万元）',
					data7: '张三',
					data8: '有效',
				},
				{
					data1: '首创置业有限公司',
					data2: 2,
					data3: 2,
					data4: '91110115MA04BH822M',
					data5: '1990年11月',
					data6: '436,294.1（万元）',
					data7: '张三',
					data8: '有效',
				},
			],
			possessionVisible: false, // 占有状态
			changeVisible: false, // 变更状态
			cancelVisible: false, // 注销状态
			selectionRow: {}, // 勾选的单条数据
			loading: false, // 加载状态
		}
	},
	mounted() {
		this.bus.$on('onGetBusinessRightList', (id) => {
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
			}
			getBusinessrightQuery(params).then((res) => {
				this.tableData = res.DATA
		
				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 打开弹窗组件
		 * @param {*} item
		 * @return {*}
		 */
		onOpenDialog(item) {
			switch (item) {
				case 'possession':
					this.possessionVisible = true
					break
				case 'change':
					this.changeVisible = true
					break
				case 'cancel':
					this.cancelVisible = true
					break
				case 'edit':
					if (JSON.stringify(this.selectionRow) == '{}') {
						this.$message.warning('请先勾选要编辑的对象')
					} else {
						this.$router.push({
							path: '/enterprise/business/details',
							query: {
								title: '内容编辑',
							},
						})
					}
					break
			}
		},

		/**
		 * @description: 当用户手动勾选数据行的 Checkbox 时触发的事件
		 * @return {*}
		 */
		handleSelectionRow(selection, row) {
			this.selectionRow = row
			this.$refs.tableRef.clearSelection()
			this.$refs.tableRef.toggleRowSelection(row)
		},

		/**
		 * @description: table 当某一行被点击时会触发该事件
		 * @param {*} row
		 * @return {*}
		 */
		handleRowClick(row) {
			let routeUrl = this.$router.resolve({
				path: '/enterprise/business/details',
				query: {
					title: '内容预览',
				},
			})
			window.open(routeUrl.href, '_blank')
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('onGetBusinessRightList')
	},
}
</script>

<style lang="scss" scoped></style>
