/*
 * @Description: 配置文件
 * @Date: 2022-06-08 14:44:01
 * @LastEditTime: 2022-06-28 15:06:46
 */
import Vue from 'vue'
import App from './App.vue'

// 根路由
import router from './router'

// 页面共享状态 vuex
import store from './store'

// ElementUI 组件库 - 按需引入方式
import element from '@/plugin/element.js'
import '@/assets/scss/element-variables.scss'

// icons
import './icons'

// 重置样式表
import 'normalize.css/normalize.css'

// 自定义样式表
import '@/assets/scss/index.scss'

// 引入进度条插件
import '@/plugin/nprogress.js'

// element-tree-line 结构线
import ElementTreeLine from 'element-tree-line'
import 'element-tree-line/dist/style.css'
Vue.component(ElementTreeLine.name, ElementTreeLine)

// el-table column 宽度自适应
import AFTableColumn from 'af-table-column'
Vue.use(AFTableColumn)

// element ui 设置按需引入
Vue.use(element)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.config.productionTip = false
Vue.prototype.bus = new Vue() // 事件总线

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
