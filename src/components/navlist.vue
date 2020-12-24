<template>
  <div class="wrap">
    <el-row>
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#447FC1"
          text-color="#fff"
          active-text-color="#fff"
          default-active="/"
          router
          @select="select"
          @open="open"
        >
          <div class="header">
            <span>人事档案管理</span>
          </div>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu v-for="item in list" :index="item.id" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="item.path"
                v-for="item in item.list"
                :key="item.id"
                ><i class="el-icon-location"></i>{{ item.name }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    select(index) {
      this.$emit("change1", index);
    },
    open(index) {
      this.$emit("change2", index);
    },
  },
};
</script>

<style scope>
.el-col {
  width: 100%;
}
.header {
  height: 50px;
  border-bottom: #3d70aa solid 2px;
  margin-bottom: 4px;
}
.header span {
  display: block;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
}
.wrap /deep/ .is-active {
  background-color: #fff !important;
  color: #447fc1 !important;
}
.wrap /deep/ .is-opened {
  background-color: #fff;
}
.wrap /deep/ .el-icon-location {
  color: #fff;
}
.wrap /deep/ .el-icon-menu {
  color: #fff;
}
.wrap /deep/ .el-submenu__icon-arrow {
  color: #fff;
}
</style>