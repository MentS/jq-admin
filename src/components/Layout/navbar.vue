<template>
  <div>
    <el-menu class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">消息管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>平台消息</el-breadcrumb-item>
        <el-breadcrumb-item>站点消息</el-breadcrumb-item>
        <el-breadcrumb-item>会员消息</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="nav-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出</el-dropdown-item>
            <el-dropdown-item>查看</el-dropdown-item>
           
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div> 
</template>

<script>
export default {
  
}
</script>

<style>
  .navbar {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6  
  }
  .nav-right {
    float: right;
    height: 100%;
    margin-right: 10px;
  }
  .el-breadcrumb{
    float: left;
    line-height: 50px;
    margin-left: 10px;
  }
</style>
