<!--
 * @Description: 股权管理系统接口文档
 * @Author: cdl
 * @Date: 2022-06-10 13:02:15
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 14:41:05
-->
# 股权管理系统接口文档

## 测试地址
- http://10.0.17.21:8090/stock


### 用户登录
- url: /SY_ORG_LOGIN.login.do
- method: get
- 参数: let params = { loginName: 'admin_exexm', password: '123Qwe' }


### 获取菜单列表
- url: /SY_COMM_MENU.getSingleMenuList.do
- method: get
- 参数: 