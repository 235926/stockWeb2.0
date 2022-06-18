<!--
 * @Description: 基本信息列表
 * @Author: cdl
 * @Date: 2022-06-18 14:43:25
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-18 16:56:19
-->
<template>
	<div class="item-list">
		<div class="pl20 pr20">
			<div class="flex">
				<div class="name flex-column">
					<span class="title">基础信息</span>
					<span class="border mt12"></span>
				</div>
				<div class="desc pt5 ml30">
					<span>占有类型：</span>
					<span class="type">新设立/收购</span>
				</div>
			</div>

			<div class="content mt15">
				<el-form label-width="150px" class="form-style-one">
					<el-form-item :label="item.label" v-for="item in form">
						<el-input v-model="item.name" disabled></el-input>
					</el-form-item>
				</el-form>
			</div>
		</div>

		<el-divider></el-divider>
	</div>
</template>

<script>
export default {
	// 组件名称
	name: 'item-list',
	// 局部注册的组件
	components: {},
	// 组件参数 接收来自父组件的数据
	props: {},
	// 组件状态值
	data() {
		return {
			form: [
				{ label: '公司名称', name: '工商注册公司名称' },
				{ label: '统一信用代码', name: '91110115MA04BH9K88' },
				{ label: '法定代表人', name: '李松平' },
				{ label: '公司状况', name: '正常运营' },
				{ label: '工商成立日期', name: '开发商首次获取股权的工商登记的时间' },
				{ label: '注册资本币种', name: '人民币' },
				{ label: '注册资本(万元)', name: '2,988,196.016' },
				{ label: '所属公司', name: '北京首都创业集团有限公司' },
				{ label: '企业类别', name: '国有全资' },
				{ label: '经营期限', name: '长期' },
				{ label: '登记注册类型', name: '股份有限公司' },
				{ label: '管理层级', name: '一级' },
				{ label: '产权层级', name: '一级' },
				{ label: '管理团队', name: '城发总部' },
				{ label: '国资监管范围', name: '国资监管' },
				{ label: '是否城发体系', name: '国资监管' },
				{ label: '注册地址(详)', name: '请填写' },
				{ label: '注册地街道门牌号', name: '请填写' },
				{ label: '公司属性(公司职能)', name: '城发总部' },
				{ label: '地块名称', name: '请填写' },
				{ label: '公司用途', name: '全资子公司' },
				{ label: '是否分红', name: '是' },
				{ label: '是否操盘', name: '主操盘' },
			],
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
.item-list {
	.name {
		.title {
			font-size: 24px;
			font-weight: 400;
			color: var(--rh-text-color-primary);
		}

		.border {
			width: 48px;
			height: 5px;
			background: var(--rh-color-primary);
			border-radius: 2px;
		}
	}

	.desc {
		font-size: 18px;
		font-weight: 400;

		.type {
			color: var(--rh-color-primary);
		}
	}
}
</style>
