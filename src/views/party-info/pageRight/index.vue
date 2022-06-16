<!--
 * @Description: 党组织信息管理 - 右侧内容
 * @Author: cdl
 * @Date: 2022-06-15 12:29:14
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-15 23:14:45
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
					<div class="flex-center-inline">
						<span class="span-svg-icon edit">
							<SvgIcon name="edit" :size="12" color="#fff" />
						</span>
						<el-button type="text">修改</el-button>
					</div>
					<div class="flex-center-inline ml20">
						<span class="span-svg-icon close">
							<SvgIcon name="close" :size="12" color="#fff" />
						</span>
						<el-button type="text">删除</el-button>
					</div>
				</template>
			</el-table-column>
		</el-table>

		<div class="btn pt10 pb10 flex-center">
			<el-button round @click="onAdd">添加</el-button>
		</div>

		<!-- 添加页面 -->
		<Add :visible="dialogVisible" title="新增" @update:visible="dialogVisible = $event" />
	</div>
</template>

<script>
export default {
	name: 'partyInfoRight',
	components: {
		Add: () => import('./add.vue'), // 添加页面
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
			dialogVisible: false, // 添加页面状态
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
			this.dialogVisible = true
		},
	},
}
</script>

<style lang="scss" scoped>
.btn {
	background-color: var(--rh-table-header-bg-color);
	border: 1px solid var(--rh-border-color-light);
	border-top: none;
}

.span-svg-icon {
	width: 16px;
	height: 16px;
	padding: 3px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-right: 5px;

	.svg-color {
		color: #fff;
	}

	&.edit {
		background: #67b5ff;
	}

	&.close {
		background: #f3737e;
	}
}
</style>
