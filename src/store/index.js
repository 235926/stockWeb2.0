/*
 * @Description: vuex
 * @Date: 2022-06-09 16:54:40
 * @LastEditTime: 2022-07-22 13:50:17
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate' // 存储vuex
import getters from './getters.js'

Vue.use(Vuex)

let moduleFn = require.context('./modules', false, /\.js$/)
let modules = moduleFn.keys().reduce((p, c) => {
	let mod = moduleFn(c).default
	mod = { ...mod, namespaced: true }
	let modName = c.match(/\.\/(\w+)\.js$/)[1]
	p[modName] = mod
	return p
}, {})

export default new Vuex.Store({
	modules,
	getters,
	plugins: [
		createPersistedstate({
			key: 'dictionary',
			paths: ['dictionary'],
			storege: window.loaclStorege,
		}),
	],
})
