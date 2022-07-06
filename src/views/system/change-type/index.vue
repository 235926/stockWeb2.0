<!--
 * @Description: 变更类型维护
 * @Date: 2022-06-14 18:51:44
 * @LastEditTime: 2022-07-06 13:53:28
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20" v-loading="loading">
			<el-table
				:data="tableData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				@selection-change="handleSelectionChange"
			>
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="65" />

				<el-table-column label="企业变更类型">
					<template slot-scope="scope">
						<div @dblclick="dbEditName(scope)">
							<el-input v-model="scope.row.EDIT_NAME" v-if="scope.row.edit" @blur="blurEditName(scope)" />
							<span v-else>{{ scope.row.EDIT_NAME }}</span>
						</div>
					</template>
				</el-table-column>

				<el-table-column show-overflow-tooltip label="可更新字段">
					<template slot-scope="scope">
						<div class="flex-between-center c-pointer" @click="onField(scope)">
							<span class="ellipsis">{{ scope.row.CMPY_FIELD_NAME }}</span>
							<i class="el-icon-document"></i>
						</div>
					</template>
				</el-table-column>

				<el-table-column prop="LINK_ROLE" label="变更角色" width="200">
					<template slot-scope="scope">
						<el-select v-model="scope.row.LINK_ROLE" placeholder="请选择" class="border-none">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>
					</template>
				</el-table-column>
			</el-table>

			<div class="btn mt30 mb10 flex-center">
				<el-button round @click="onAdd">新增</el-button>
				<el-button round @click="onSave">保存</el-button>
				<el-button round @click="onDelete">删除</el-button>
			</div>
		</div>

		<Add ref="addRef" title="新增" @childClick="onGetChangeType" />
		<Field ref="fieldRef" title="可更新字段" :scope.sync="fieldScope" />
	</div>
</template>

<script>
import { getChangeType, updateChangeType, deleteChangeTypeList } from '@/api/index.js' // api
export default {
	name: 'systemChangeType',
	components: {
		PageHeader: () => import('@/views/component/PageHeader/index.vue'), // main 头部
		Add: () => import('./add.vue'), // 新增页面
		Field: () => import('./field.vue'), // 新增页面
	},
	data() {
		return {
			tableData: [],
			options: [
				{
					value: 'role1',
					label: '变更角色1',
				},
			],
			selection: [], // 选中的数据
			fieldScope: {}, // 选中传给子组件
			loading: false, // 加载状态
		}
	},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetChangeType()
	},
	methods: {
		/**
		 * @description: 企业变更类型 - 获取数据列表
		 * @return {*}
		 */
		onGetChangeType() {
			this.loading = true
			getChangeType().then((res) => {
				this.tableData = res.data
				this.tableData.map((item) => {
					this.$set(item, 'edit', false)
				})
				setTimeout(() => {
					this.loading = false
				}, 500)
			})
		},

		/**
		 * @description: 双击 table 内编辑
		 * @return {*}
		 */
		dbEditName(scope) {
			this.tableData.map((item) => {
				item.edit = false
			})
			scope.row.edit = true
		},

		/**
		 * @description: table 内编辑 失去焦点
		 * @return {*}
		 */
		blurEditName(scope) {
			scope.row.edit = false
		},

		/**
		 * @description: 选中的数据
		 * @return {*}
		 */
		handleSelectionChange(val) {
			this.selection = val
		},

		/**
		 * @description: 可更新字段
		 * @return {*}
		 */
		onField(scope) {
			this.fieldScope = scope.row
			this.$refs.fieldRef.openDialog()
		},

		/**
		 * @description: 新增
		 * @return {*}
		 */
		onAdd() {
			this.$refs.addRef.openDialog()
		},

		/**
		 * @description: 保存
		 * @return {*}
		 */
		onSave() {
			let params = {
				updateKeys: this.tableData,
			}
			updateChangeType(params).then((res) => {
				if (res._MSG_.includes('OK,')) {
					this.onGetChangeType()
					this.$message.success('更新成功')
				}
			})
		},

		/**
		 * @description: 删除
		 * @return {*}
		 */
		onDelete() {
			if (this.selection.length === 0) {
				this.$message.warning('请先勾选要删除的对象')
			} else {
				let params = {
					EDIT_CODES: [],
				}
				this.selection.forEach((item) => {
					params.EDIT_CODES.push(item.EDIT_CODE)
				})

				this.$confirm('您确认要删除吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(() => {
						deleteChangeTypeList(params).then((res) => {
							if (res._MSG_.includes('OK,')) {
								this.onGetChangeType()
								this.$message.success('删除成功')
							}
						})
					})
					.catch(() => {})
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
