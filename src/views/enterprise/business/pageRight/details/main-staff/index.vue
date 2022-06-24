<!--
 * @Description: 主要人员
 * @Author: cdl
 * @Date: 2022-06-18 12:06:57
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 22:46:18
-->
<template>
	<div class="business-details">
		<div class="business-details-item">
			<BusinessListHeader :data="registered[0]" :background="false" />
			<div class="table-render-loop">
				<el-table
					:data="registered[0].tableData"
					:border="true"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
				>
					<el-table-column label="序号" type="index" align="center" width="55" />

					<el-table-column
						v-for="item in registered[0].tableHeader"
						:key="item.key"
						:label="item.label"
						:property="item.key"
						:align="item.align"
						:width="item.width"
					>
						<template #default="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</el-table-column>

					<el-table-column label="操作" v-if="!readonly">
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
				<div class="table-btn" v-if="!readonly">
					<el-button round @click="onAdd">添加</el-button>
				</div>
			</div>
			<el-divider />
		</div>

		<div class="business-details-item">
			<BusinessListHeader :data="approval[0]" />
			<div class="table-render-loop">
				<el-table
					:data="approval[0].tableData"
					:border="true"
					:header-cell-style="{ 'text-align': 'center' }"
					:cell-style="{ 'text-align': 'center' }"
				>
					<el-table-column label="序号" type="index" align="center" width="55" />

					<el-table-column
						v-for="item in approval[0].tableHeader"
						:key="item.key"
						:label="item.label"
						:property="item.key"
						:align="item.align"
						:width="item.width"
					>
						<template #default="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</el-table-column>

					<el-table-column label="操作" v-if="!readonly">
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
				<div class="table-btn" v-if="!readonly">
					<el-button round @click="onAdd">添加</el-button>
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
export default {
	// 组件名称
	name: 'main-staff',
	// 局部注册的组件
	components: {
		BusinessListHeader: () => import('@/views/component/BusinessListHeader/index.vue'), // 列表头部
		Add: () => import('./add.vue'), // 添加页面
		Edit: () => import('./edit.vue'), // 添加页面
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			registered: [
				{
					title: '工商注册',
					tableHeader: [
						{ label: '股东名称', key: 'data1' },
						{ label: '职务', key: 'data2' },
						{ label: '派出单位', key: 'data3' },
						{ label: '任职时间', key: 'data4' },
						{ label: '是否外部董事', key: 'data5' },
					],
					tableData: [
						{
							data1: '李松平',
							data2: '董事长',
							data3: '首创集团',
							data4: '2022-02-02',
							data5: '否',
						},
						{
							data1: '邓文斌',
							data2: '董事',
							data3: '',
							data4: '2022-02-02',
							data5: '否',
						},
						{
							data1: '李章',
							data2: '监事会主席',
							data3: '',
							data4: '2022-02-02',
							data5: '否',
						},
					],
				},
			],
			approval: [
				{
					title: '审批情况',
					tableHeader: [
						{ label: '股东名称', key: 'data1' },
						{ label: '职务', key: 'data2' },
						{ label: '派出单位', key: 'data3' },
						{ label: '任职时间', key: 'data4' },
					],
					tableData: [
						{
							data1: '李松平',
							data2: '董事长',
							data3: '首创集团',
							data4: '2022-02-02',
							data5: '否',
						},
						{
							data1: '邓文斌',
							data2: '董事',
							data3: '',
							data4: '2022-02-02',
							data5: '否',
						},
						{
							data1: '李章',
							data2: '监事会主席',
							data3: '',
							data4: '2022-02-02',
							data5: '否',
						},
					],
				},
			],
		}
	},
	// 计算属性
	computed: {
		// 是否只读
		readonly() {
			const isTrue = this.$route.query?.readonly
			return isTrue ? false : true
		},
	},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {
		/**
		 * @description: 添加
		 * @return {*}
		 * @author: cdl
		 */
		onAdd() {
			this.$refs.addRef.openDialog()
		},

		/**
		 * @description: 修改
		 * @return {*}
		 * @author: cdl
		 */
		onEdit() {
			this.$refs.editRef.openDialog()
		},

		/**
		 * @description: 删除
		 * @return {*}
		 * @author: cdl
		 */
		onDelete(scope) {
			console.log(scope.row)
		},
	},
}
</script>

<style lang="scss" scoped></style>
