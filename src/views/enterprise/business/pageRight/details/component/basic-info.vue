<!--
 * @Description: 基本信息
 * @Author: cdl
 * @Date: 2022-06-17 21:19:30
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 15:11:25
-->
<template>
	<div class="basic-info">
		<div class="basic-info-item">
			<BusinessListHeader :data="data.information[0]" :background="false" />
			<FormStyleOne :data="data.information[0].form" class="mt15" />
		</div>
		<div class="basic-info-item">
			<BusinessListHeader :data="data.shareholders[0]" />
			<div class="mlr20">
				<el-table :data="data.shareholders[0].tableData" border class="mt20">
					<el-table-column label="序号" type="index" align="center" width="50" />

					<el-table-column
						v-for="item in data.shareholders[0].tableHeader"
						:key="item.key"
						:label="item.label"
						:property="item.key"
						:width="item.width"
						:align="item.align"
					>
						<template slot-scope="scope">
							{{ scope.row[scope.column.property] }}
						</template>
					</el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'basicInfo',
	// 局部注册的组件
	components: {
		BusinessListHeader: () => import('@/views/component/BusinessListHeader/index.vue'), // 列表头部
		FormStyleOne: () => import('@/components/CustomStyles/form/form-style-one.vue'), // form 样式一
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			data: {
				information: [
					{
						title: '基础信息',
						type: '新设立/收购',
						form: [
							{ label: '公司名称', name: '工商注册公司名称', readonly: true, type: 'input' },
							{ label: '统一信用代码', name: '91110115MA04BH9K88', readonly: true, type: 'input' },
							{ label: '法定代表人', name: '李松平', readonly: true, type: 'input' },
							{ label: '公司状况', name: '正常运营', readonly: true, type: 'input' },
							{ label: '工商成立日期', name: '开发商首次获取股权', readonly: true, type: 'input' },
							{ label: '注册资本币种', name: '人民币', readonly: true, type: 'input' },
							{ label: '注册资本(万元)', name: '2,988,196.016', readonly: true, type: 'input' },
							{ label: '所属公司', name: '北京首都创业集团', readonly: true, type: 'input' },
							{ label: '企业类别', name: '国有全资', readonly: true, type: 'input' },
							{ label: '经营期限', name: '长期', readonly: true, type: 'input' },
							{ label: '登记注册类型', name: '股份有限公司', readonly: true, type: 'input' },
							{ label: '管理层级', name: '一级', readonly: true, type: 'input' },
							{ label: '产权层级', name: '一级', readonly: true, type: 'input' },
							{ label: '管理团队', name: '城发总部', readonly: true, type: 'input' },
							{ label: '国资监管范围', name: '国资监管', readonly: true, type: 'input' },
							{ label: '是否城发体系', name: '国资监管', readonly: true, type: 'input' },
							{ label: '注册地址(详)', name: '请填写', readonly: true, type: 'input' },
							{ label: '注册地街道门牌号', name: '请填写', readonly: true, type: 'input' },
							{ label: '经营范围', name: '请填写', readonly: true, type: 'textarea' },
							{ label: '公司属性(公司职能)', name: '城发总部', readonly: true, type: 'input' },
							{ label: '地块名称', name: '请填写', readonly: true, type: 'input' },
							{ label: '公司用途', name: '全资子公司', readonly: true, type: 'input' },
							{ label: '是否分红', name: '是', readonly: true, type: 'input' },
							{ label: '是否操盘', name: '主操盘', readonly: true, type: 'input' },
						],
					},
				],
				shareholders: [
					{
						title: '股东信息',
						type: '',
						tableHeader: [
							{ label: '股东名称', key: 'name', width: '', align: 'left' },
							{ label: '股东类型', key: 'type', width: '200px', align: 'center' },
							{ label: '工商口径持股比例', key: 'industrial', width: '200px', align: 'center' },
							{ label: '会计口径持股比例', key: 'accounting', width: '200px', align: 'center' },
						],
						tableData: [
							{
								name: '北京首创城市发展集团有限公司',
								type: '我方',
								industrial: '30%',
								accounting: '40',
							},
							{
								name: 'XXX有限公司',
								type: '其他股东',
								industrial: '12%',
								accounting: '32',
							},
							{
								name: 'XXX有限公司',
								type: '其他股东',
								industrial: '5%',
								accounting: '27',
							},
						],
					},
				],
			},
		}
	},
	// 计算属性
	computed: {},
	// 侦听器
	watch: {},
	// 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
	created() {},
	// 组件挂载后，此方法执行后，页面显示
	mounted() {},
	// 组件方法
	methods: {},
}
</script>

<style lang="scss" scoped>
.basic-info-item {
	border-bottom: 1px solid #e2e2e2;
	padding-bottom: 20px;
}
</style>
