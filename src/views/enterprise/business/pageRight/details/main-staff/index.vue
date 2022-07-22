<!--
 * @Description: 主要人员
 * @Date: 2022-06-18 12:06:57
 * @LastEditTime: 2022-07-22 18:59:03
-->
<template>
	<div class="business-details" v-loading="loading">
		<!-- 工商注册 -->
		<div class="business-details-item">
			<BusinessListHeader title="工商注册" :background="false" class="plr20" />
			<div class="mlr20">
				<el-table
					:data="tableData.UP_DATA"
					:border="true"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
				>
					<el-table-column label="序号" type="index" width="55" />

					<el-table-column
						v-for="item in UP_DATA_HEAD"
						:key="item.key"
						:label="item.label"
						:property="item.key"
						:show-overflow-tooltip="true"
					>
						<template slot-scope="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</el-table-column>

					<!-- <el-table-column label="操作" v-if="!$route.query?.isAside" class-name="operation">
						<template slot-scope="scope">
							<el-button
								class="mr20"
								type="text"
								@click="onEdit(scope, 1)"
								:disabled="isDisabled('DJG_INFO')"
							>
								<span class="span-svg-icon edit">
									<SvgIcon name="edit" color="#fff" />
								</span>
								<span class="edit">修改</span>
							</el-button>
							<el-popconfirm
								confirm-button-text="确定"
								cancel-button-text="取消"
								:title="`您确定要删除'${scope.row.USER_NAME}'吗?`"
								placement="left"
								@confirm="onDelete(scope)"
							>
								<template slot="reference">
									<el-button type="text" :disabled="isDisabled('DJG_INFO')">
										<span class="span-svg-icon close">
											<SvgIcon name="close" color="#fff" />
										</span>
										<span class="del">删除</span>
									</el-button>
								</template>
							</el-popconfirm>
						</template>
					</el-table-column> -->
				</el-table>
				<!-- <div class="table-btn" v-if="!$route.query?.isAside">
					<el-button round @click="onAdd(1)">添加</el-button>
				</div> -->
			</div>
			<el-divider />
		</div>

		<!-- 审批情况 -->
		<div class="business-details-item">
			<BusinessListHeader title="审批情况" class="plr20" />
			<div class="mlr20">
				<el-table
					:data="tableData.DOWN_DATA"
					:border="true"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
				>
					<el-table-column label="序号" type="index" width="55" />

					<el-table-column
						v-for="item in DOWN_DATA_HEAD"
						:key="item.key"
						:label="item.label"
						:property="item.key"
						:show-overflow-tooltip="true"
					>
						<template slot-scope="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</el-table-column>

					<el-table-column label="操作" v-if="!$route.query?.isAside" class-name="operation">
						<template slot-scope="scope">
							<el-button class="mr20" type="text" @click="onEdit(scope, 2)" :disabled="isDisabled('DJG_INFO')">
								<span class="span-svg-icon edit">
									<SvgIcon name="edit" color="#fff" />
								</span>
								<span class="edit">修改</span>
							</el-button>
							<el-popconfirm
								confirm-button-text="确定"
								cancel-button-text="取消"
								:title="`您确定要删除'${scope.row.USER_NAME}'吗?`"
								placement="left"
								@confirm="onDelete(scope)"
							>
								<template slot="reference">
									<el-button type="text" :disabled="isDisabled('DJG_INFO')">
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
				<div class="table-btn" v-if="!$route.query?.isAside">
					<el-button round @click="onAdd(2)" :disabled="isDisabled('DJG_INFO')">添加</el-button>
				</div>
			</div>
			<el-divider />
		</div>

		<!-- 添加/修改页面 -->
		<Add ref="addRef" title="添加" />
		<Edit ref="editRef" title="修改" />
	</div>
</template>

<script>
import { getBusinessMainStaff, getBusinessMainStaffDel, getBusinessBasicInfoGetEditData } from '@/api/index.js' // api

export default {
	// 组件名称
	name: 'main-staff',
	// 局部注册的组件
	components: {
		BusinessListHeader: () => import('@/views/component/BusinessListHeader/index.vue'), // 列表头部
		Add: () => import('./add.vue'), // 添加页面
		Edit: () => import('./edit.vue'), // 添加页面
	},
	// 组件状态值
	data() {
		return {
			tableData: {}, // 数据列表
			EDIT_WORD: '', // 可编辑字段
			// 工商注册头部
			UP_DATA_HEAD: [
				{ label: '股东名称', key: 'USER_NAME' },
				{ label: '职务', key: 'USER_POST' },
				{ label: '派出单位', key: 'OUT_DEPT' },
				{ label: '任职时间', key: 'START_TIME' },
				{ label: '是否外部董事', key: 'S_DIR' },
			],
			// 审批情况头部
			DOWN_DATA_HEAD: [
				{ label: '股东名称', key: 'USER_NAME' },
				{ label: '职务', key: 'USER_POST' },
				{ label: '派出单位', key: 'OUT_DEPT' },
				{ label: '任职时间', key: 'START_TIME' },
			],
			loading: false, // 加载状态
		}
	},
	// 侦听器
	watch: {
		// 监听路由的变化
		$route: {
			handler(to) {
				if (!to.query.isAside) {
					this.onGetBusinessBasicInfoGetEditData()
				}
			},
			deep: true, // 深度监听
			immediate: true, // 不管数据是否发生变化都监听一次
		},
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetBusinessMainStaff()
	},
	mounted() {
		// 监听添加/修改/删除操作
		this.bus.$on('getBusinessMainStaffAddEditDel', () => {
			this.onGetBusinessMainStaff()
		})
	},
	// 组件方法
	methods: {
		/**
		 * @description: 获取数据列表
		 * @return {*}
		 */
		onGetBusinessMainStaff() {
			this.loading = true

			const params = {
				CMPY_ID: this.$route.query.id,
			}
			getBusinessMainStaff(params).then((res) => {
				res.UP_DATA.map((item) => {
					item.S_DIR = item.S_DIR === '1' ? '是' : '不是'
				})
				this.tableData = res

				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 获取可编辑字段
		 * @return {*}
		 */
		onGetBusinessBasicInfoGetEditData() {
			getBusinessBasicInfoGetEditData().then((res) => {
				this.EDIT_WORD = res.EDIT_WORD
			})
		},

		/**
		 * @description: 判断是否可编辑
		 * @return {*}
		 */
		isDisabled(code) {
			if (this.EDIT_WORD !== '') {
				const arr = this.EDIT_WORD?.split(',')
				arr.pop() // 删除最后一个因为逗号转换的空字符串
				return !arr.some((item) => {
					return code === item
				})
			} else {
				return true
			}
		},

		/**
		 * @description: 添加
		 * @return {*}
		 */
		onAdd(type) {
			this.$refs.addRef.openDialog(type)
		},

		/**
		 * @description: 修改
		 * @return {*}
		 */
		onEdit(scope, type) {
			this.$refs.editRef.openDialog(scope.row, type)
		},

		/**
		 * @description: 删除
		 * @return {*}
		 */
		onDelete(scope) {
			const params = {
				USER_CODE: scope.row.USER_CODE,
				S_FLAG: 2,
			}
			getBusinessMainStaffDel(params).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.$message.success('删除成功')
					this.onGetBusinessMainStaff()
				}
			})
		},
	},
	// 页面销毁
	destroyed() {
		this.bus.$off('getBusinessMainStaffAddEditDel')
	},
}
</script>

<style lang="scss" scoped></style>
