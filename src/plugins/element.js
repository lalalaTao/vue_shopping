import Vue from 'vue'
// 对导入的ui进行整合优化
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 导入之后，通过Vue.use()设置为全局可用的样式
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
