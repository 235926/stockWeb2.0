<!--
 * @Description: 党组织信息管理 - 右侧内容
 * @Author: cdl
 * @Date: 2022-06-15 12:29:14
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-23 21:34:36
-->
<template>
	<div class="right">
		<el-table
			:data="tableData"
			border
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column prop="organ" label="党组织名称" />
			<el-table-column prop="team" label="团队名称" />
			<el-table-column prop="level" label="级别" width="80" />
			<el-table-column label="操作" width="180">
				<template #default="scope">
					<div class="flex-center-inline c-pointer" @click="onEdit(scope)">
						<span class="span-svg-icon edit">
							<SvgIcon name="edit" color="#fff" />
						</span>
						<span>修改</span>
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
									<span>删除</span>
								</div>
							</template>
						</el-popconfirm>
					</div>
				</template>
			</el-table-column>
		</el-table>

		<div class="table-btn">
			<el-button round @click="onAdd">添加</el-button>
		</div>

		<!-- 添加/修改页面 -->
		<Add :visible="addVisible" title="添加" @update:visible="addVisible = $event" />
		<Edit :visible="editVisible" title="修改" @update:visible="editVisible = $event" />
	</div>
</template>

<script>
export default {
	name: 'partyInfoRight',
	components: {
		Add: () => import('./add.vue'), // 添加页面
		Edit: () => import('./edit.vue'), // 添加页面
	},
	data() {
		return {
			tableData: [
				{
					organ: '总部第一党支部',
					team: '置业公司',
					level: 1,
				},
				{
					organ: '总部第二党支部',
					team: '置业公司',
					level: 2,
				},
				{
					organ: '北京公司党总支',
					team: '北京公司',
					level: 3,
				},
			],
			addVisible: false, // 添加页面状态
			editVisible: false, // 修改页面状态
		}
	},
	// 计算属性
	computed: {},
	created() {},
	methods: {
		/**
		 * @description: 添加
		 * @return {*}
		 * @author: cdl
		 */
		onAdd() {
			this.addVisible = true
		},

		/**
		 * @description: 修改
		 * @return {*}
		 * @author: cdl
		 */
		onEdit() {
			this.editVisible = true
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
