<!--
 * @Description: 业务办理 - 右侧内容
 * @Author: cdl
 * @Date: 2022-06-16 21:15:33
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 00:49:18
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
				ref="tableData"
				:data="tableData"
				border
				@selection-change="handleSelectionChange"
			>
				<el-table-column type="selection" label="选择" align="center" width="55" />
				<el-table-column type="index" label="序号" align="center" width="65" />
				<el-table-column prop="data1" show-overflow-tooltip label="公司名称" width="250" />
				<el-table-column prop="data2" show-overflow-tooltip label="产权层级" width="100" />
				<el-table-column prop="data3" show-overflow-tooltip label="管理层级" width="100" />
				<el-table-column
					prop="data4"
					show-overflow-tooltip
					label="统一社会信息代码"
					width="200"
				/>
				<el-table-column prop="data5" show-overflow-tooltip label="成立时间" width="150" />
				<el-table-column
					prop="data6"
					show-overflow-tooltip
					label="注册资本金"
					width="150"
				/>
				<el-table-column prop="data7" show-overflow-tooltip label="法人" width="80" />
				<el-table-column prop="data8" show-overflow-tooltip label="状态" width="80" />
			</el-table>
		</el-scrollbar>

		<Possession
			title="占有"
			:visible="possessionVisible"
			@update:visible="possessionVisible = $event"
		/>
		<Change title="变更" :visible="changeVisible" @update:visible="changeVisible = $event" />
		<Cancel title="注销" :visible="cancelVisible" @update:visible="cancelVisible = $event" />
		<Edit title="编辑" :visible="editVisible" @update:visible="editVisible = $event" />
	</div>
</template>

<script>
import Vue from 'vue'
import Plugin from 'v-fit-columns'
Vue.use(Plugin)
export default {
	// 组件名称
	name: 'enterpriseBusinessRight',
	// 局部注册的组件
	components: {
		Possession: () => import('./component/possession.vue'), // 占有
		Change: () => import('./component/change.vue'), // 变更
		Cancel: () => import('./component/cancel.vue'), // 注销
		Edit: () => import('./component/edit.vue'), // 编辑
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
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
			possessionVisible: false,
			changeVisible: false,
			cancelVisible: false,
			editVisible: false,
			tableDataWidth: 0, // table 容器宽度
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {
		this.$nextTick(function () {
			this.tableDataWidth = this.$refs.tableData.bodyWidth
		})
		console.log(this.$refs.tableData.bodyWidth)
	},
	// 组件方法
	methods: {
		/**
		 * @description: 打开弹窗组件
		 * @param {*} item
		 * @return {*}
		 * @author: cdl
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
					this.editVisible = true
					break
			}
		},

		/**
		 * @description: 选中的数据
		 * @return {*}
		 * @author: cdl
		 */
		handleSelectionChange(val) {
			// console.log(val)
		},
	},
}
</script>

<style lang="scss" scoped></style>
