<!--
 * @Description: 变更类型维护
 * @Author: cdl
 * @Date: 2022-06-14 18:51:44
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 11:58:38
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-table
				v-loading="loading"
				:data="tableData"
				:border="true"
				:header-cell-style="{ 'text-align': 'center' }"
				:cell-style="{ 'text-align': 'center' }"
				@selection-change="handleSelectionChange"
			>
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="65" />
				<el-table-column prop="EDIT_NAME" label="企业变更类型" />

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

		<Add title="新增" :visible="addVisible" @update:visible="addVisible = $event" @childClick="onGetChangeType" />
		<Field
			ref="fieldRef"
			title="可更新字段"
			:visible="fieldVisible"
			@update:visible="fieldVisible = $event"
			:scope.sync="fieldScope"
		/>
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
			addVisible: false, // 添加页面状态
			fieldVisible: false, // 可更新字段
			selection: [], // 选中的数据
			fieldScope: {}, // 选中传给子组件
			loading: false, // 加载状态
		}
	},
	// 计算属性
	computed: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {
		this.onGetChangeType()
	},
	methods: {
		/**
		 * @description: 企业变更类型 - 获取数据列表
		 * @return {*}
		 * @author: cdl
		 */
		onGetChangeType() {
			this.loading = true
			getChangeType().then((res) => {
				this.tableData = res.data
				this.loading = false
			})
		},

		/**
		 * @description: 选中的数据
		 * @return {*}
		 * @author: cdl
		 */
		handleSelectionChange(val) {
			this.selection = val
		},

		/**
		 * @description: 可更新字段
		 * @return {*}
		 * @author: cdl
		 */
		onField(scope) {
			this.fieldScope = scope.row
			this.fieldVisible = true
			this.$refs.fieldRef.onGetChangeTypeField()
		},

		/**
		 * @description: 新增
		 * @return {*}
		 * @author: cdl
		 */
		onAdd() {
			this.addVisible = true
		},

		/**
		 * @description: 保存
		 * @return {*}
		 * @author: cdl
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
		 * @author: cdl
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
				deleteChangeTypeList(params).then((res) => {
					if (res._MSG_.includes('OK,')) {
						this.onGetChangeType()
						this.$message.success('删除成功')
					}
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
