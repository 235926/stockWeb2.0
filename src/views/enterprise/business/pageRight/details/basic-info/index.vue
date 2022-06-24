<!--
 * @Description: 基本信息
 * @Author: cdl
 * @Date: 2022-06-17 21:19:30
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-24 12:57:33
-->
<template>
	<div class="basic-info">
		<div class="basic-info-item">
			<BusinessListHeader :data="information[0]" :background="false" />
			<FormStyleOne :data="information[0].form" class="mt15" />
			<el-divider />
		</div>
		<div class="basic-info-item">
			<BusinessListHeader :data="shareholders[0]" />
			<TableRenderLoop :tableHeader="shareholders[0].tableHeader" :tableData="shareholders[0].tableData" />
			<el-divider />
		</div>
		<div class="basic-info-item">
			<BusinessListHeader :data="attachment[0]" />
			<div class="file gap12 mlr20">
				<div class="item flex-center" v-for="(item, index) in attachment[0].file" :key="index">
					<SvgIcon :name="item.type" :class="item.type" />
					<span>{{ item.desc }}</span>
					<SvgIcon name="close" class="close" v-if="!readonly" />
				</div>
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
		TableRenderLoop: () => import('@/components/CustomStyles/table/table-render-loop.vue'), // form 样式一
	},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			information: [
				{
					title: '基础信息',
					type: '新设立/收购',
					form: [
						{ label: '公司名称', name: '工商注册公司名称', type: 'input' },
						{ label: '统一信用代码', name: '91110115MA04BH9K88', type: 'input' },
						{ label: '法定代表人', name: '李松平', type: 'input' },
						{ label: '公司状况', name: '正常运营', type: 'input' },
						{ label: '工商成立日期', name: '开发商首次获取股权', type: 'input' },
						{ label: '注册资本币种', name: '人民币', type: 'input' },
						{ label: '注册资本(万元)', name: '2,988,196.016', type: 'input' },
						{ label: '所属公司', name: '北京首都创业集团', type: 'input' },
						{ label: '企业类别', name: '国有全资', type: 'input' },
						{ label: '经营期限', name: '长期', type: 'input' },
						{ label: '登记注册类型', name: '股份有限公司', type: 'input' },
						{ label: '管理层级', name: '一级', type: 'input' },
						{ label: '产权层级', name: '一级', type: 'input' },
						{ label: '管理团队', name: '城发总部', type: 'input' },
						{ label: '国资监管范围', name: '国资监管', type: 'input' },
						{ label: '是否城发体系', name: '国资监管', type: 'input' },
						{ label: '注册地址(详)', name: '请填写', type: 'input' },
						{ label: '注册地街道门牌号', name: '请填写', type: 'input' },
						{ label: '经营范围', name: '请填写', type: 'textarea' },
						{ label: '公司属性(公司职能)', name: '城发总部', type: 'input' },
						{ label: '地块名称', name: '请填写', type: 'input' },
						{ label: '公司用途', name: '全资子公司', type: 'input' },
						{ label: '是否分红', name: '是', type: 'input' },
						{ label: '是否操盘', name: '主操盘', type: 'input' },
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
			attachment: [
				{
					title: '附件',
					type: '',
					file: [
						{ desc: '企业注销/解散登记申请书.doc', type: 'wps' },
						{ desc: '指定代表或者共同委托代理人的证明.pdf', type: 'pdf' },
						{ desc: '公司(企业)法定代表人登记表2022-05-05.doc', type: 'wps' },
						{ desc: '公司(企业)法定代表人登记表2022-05-05修改最终版.doc', type: 'wps' },
						{ desc: '企业法人营业执照.jpg', type: 'image' },
						{ desc: '企业法人身份证反正面.jpg', type: 'image' },
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
	methods: {},
}
</script>

<style lang="scss" scoped>
.basic-info {
	.basic-info-item {
		.business-list-header {
			margin-bottom: 20px;
		}

		.form-style-one {
			margin-left: 20px;
			margin-right: 20px;
		}

		.table-render-loop {
			margin-left: 20px;
			margin-right: 20px;
		}

		.el-divider {
			margin-bottom: 0;
		}

		.file {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.item {
				padding: 0 15px;
				height: 32px;
				background: #fafafa;
				border-radius: 16px;
				border: 1px solid #e8e8e8;
				color: var(--el-text-color-primary);
				font-size: 14px;
				font-weight: 400;

				.svg-icon {
					margin-right: 5px;
					font-size: 20px;
				}

				.close {
					margin-left: 15px;
					background-color: #f3737e;
					border-radius: 50%;
					color: #fff;
					padding: 2px;
					font-size: 16px;
				}
			}
		}
	}
}
</style>
