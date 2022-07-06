/*
 * @Description: 注册 SvgIcon
 * @Date: 2022-06-14 20:40:28
 * @LastEditTime: 2022-06-14 22:41:04
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('SvgIcon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
