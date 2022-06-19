<!--
 * @Description: 股权管理系统文档
 * @Author: cdl
 * @Date: 2022-06-08 14:44:06
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 11:45:01
-->

# 股权管理系统
- 以 Vue2.O 为主要版本

### 系统配置
- 在 src/pinia/systemConfig.js 中修改系统配置，如（布局方案，主题色等）

### 菜单列表配置
- 登录 http://10.0.17.21:8090/stock 开发管理-》服务配置-》搜索【菜单管理】-》双击进入 -》预览服务
- 在对应的目录下配置菜单的链接及其他配置

### SVG 图标优化冗余和无用的信息
- 需要安装 svgo 插件 npm i svgo d
- 执行 npm run svgo