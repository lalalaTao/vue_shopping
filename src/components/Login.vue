<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avater_box">
                <img src="../assets/logo02.jpeg" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input  v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="用户名"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input  v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="密码" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="primary" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 这是登录表单的数据绑定对象
                loginForm: {
                    username: "admin",
                    password: "123456"
                },
                // 这是表单的验证规则对象
                loginFormRules: {
                    // 验证用户名是否合法
                    username: [
                        { required: true, message: '请输入登录名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    // 验证密码是否合法
                    password: [
                        { required: true, message: '请输入登录密码', trigger: 'blur' },
                        { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
                    ]

                }
            }
        },
        methods: {
            // 点击重置按钮
            resetLoginForm(){
                this.$refs.loginFormRef.resetFields();
            },
            login() {
                this.$refs.loginFormRef.validate(async valid => {    // valid为布尔值，设置为异步操作，false直接返回
                    if(!valid) return;
                    const { data: res} = await this.$http.post("login", this.loginForm);    // await配合着async使用
                    if(res.meta.status !== 200) return this.$message.error('登录失败！请检查用户名和密码是否正确！');  // 通过message设置登录状态弹窗
                    this.$message.success('登录成功！');
                    //  1. 将登录成功之后的 token 保存到客户端的 sessionStorage 中
                    //     - 项目中出现了登录之外的其他API接口，必须在登录之后才能访问
                    //     - token 只应在当前网页打开时生效，所以将 token 保存在sessionStorage 中
                    console.log(res);
                    window.sessionStorage.setItem('token', res.data.token);
                    //  2. 通过编程式导航跳转到后台主页，路由地址是 /home
                    this.$router.push("/home");
                })
            }
        },
    };
</script>

<!-- 添加scoped，只在自己组件中生效 -->
<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
// 设置盒子水平垂直居中
.login_box {
    width: 450px;
    height: 310px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.avater_box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 5px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50% , -50%);
    background-color: rgb(255, 255, 255);
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
        filter: opacity(95%);
    }

}

.login_form {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: flex-end;
}

</style>
