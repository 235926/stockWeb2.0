/*
 * @Description: es6 转 es5 语法
 * @Date: 2022-06-08 14:44:01
 * @LastEditTime: 2022-06-18 00:07:30
 */
module.exports = {
	presets: ['@vue/cli-plugin-babel/preset'],
	plugins: [
		[
			'component',
			{
				libraryName: 'element-ui',
				styleLibraryName: 'theme-chalk',
			},
		],
	],
}
