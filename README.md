### 使用文档
### 1.git clone 这个项目
### 2.在vue项目引入common.js
### 3.main.js全局引入
### 4.import common from './assets/js/common'(你存放文件的路径)
###  Vue.use(common);
### 5.示例(在任何方法/生命周期都可以调用)：created(){ this.fullScreen() }

------------------------------------------------------------------------------
### 方法文档
###1.全屏/关闭全屏
### this.fullScreen()
### 2.验证手机号格式
### this.verifyPhone(data) //data是你传的参数名
