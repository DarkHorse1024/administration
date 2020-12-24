<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="210px">
        左侧
      </el-aside>
      <el-container>
        <el-header>
          头部
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
    };
  },
};
</script>

<style scope>
.el-aside {
  height: 100vh;
  background-color: #447fc1;
}
.el-header {
  padding: 0;
  height: 80px;
  min-height: 80px;
  background-color: red;
}

.header-top {
  height: 45px;
  background-color: blue;
}

.el-main {
  margin: 15px;
  background-color: blue;
}
.layout-container /deep/ .el-footer {
  background-color: pink;
  height: 35px !important;
  min-height: 35px !important;
}
</style>