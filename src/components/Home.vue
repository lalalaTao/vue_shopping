<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header>
            <div>
                <img src="../assets/logo.png" alt="">
                <span>电商平台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主页区域 -->
        <el-container>
            <!-- 侧边栏区域 -->
            <el-aside>
                <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <!-- 一级菜单 -->
                    <el-submenu index="1">
                        <!-- 以及菜单的模版区域 -->
                        <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>导航一</span>
                        </template>                 
                        <!-- 二级菜单区域 -->
                        <el-menu-item index="1-2-1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航二</span>
                            </template>
                        </el-menu-item>
                        </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 主体内容区域 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        methods: {
            logout() {
                window.sessionStorage.clear();
                this.$router.push("/login");
            }
        }
    };
</script>

<style lang="less" scoped>
.home_container {
    height: 100%;
    margin: 0;
    padding: 0;
}
.el-header {
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;  // 左右两边贴边对齐
    align-items: center;
    color: #fff;
    font-size: 25px;
    > div {
        display: flex;
        align-items: center;   // 设置标题居中对齐
        margin-left: 10px;
        > img {
            width: 40px;
            height: 40px;
        }
        > span {
            margin-left: 15px;
        }
    }
}
.el-aside {
    width: 200px;
    background-color: antiquewhite;
}
.el-main {
    background-color: cornflowerblue;
}


    
</style>