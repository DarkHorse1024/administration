<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="210px">
        <navlist :list="shuju" @change1="change1" @change2="change2"></navlist>
      </el-aside>
      <el-container>
        <el-header>
          <div class="header-top">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="(item, index) in textArr"
                :key="index"
                >{{ item }}</el-breadcrumb-item
              >
            </el-breadcrumb>
          </div>
          <div class="header-bottom"></div>
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
import navlist from "@/components/navlist.vue";
export default {
  name: "layout",
  data() {
    return {
      shuju: [
        {
          name: "档案管理",
          id: "1",
          list: [
            {
              name: "人员档案管理",
              id: "1-1",
              path: "/PersonnelFiles",
            },
            {
              name: "查阅管理",
              id: "1-2",
              path: "/consult",
            },
            {
              name: "档案转出",
              id: "1-3",
              path: "/transferOut",
            },
            {
              name: "数据导出",
              id: "1-4",
              path: "/dataExport",
            },
            {
              name: "打印",
              id: "1-5",
              path: "/printing",
            },
            {
              name: "案例统计",
              id: "1-6",
              path: "/statistics",
            },
            {
              name: "系统日志",
              id: "1-7",
              path: "/journal",
            },
          ],
        },
        {
          name: "系统设置",
          id: "2",
          list: [
            {
              name: "组织架构管理",
              id: "2-1",
              path: "/structure",
            },
            {
              name: "系统参数",
              id: "2-2",
              path: "/parameter",
            },
          ],
        },
      ],
      text1: "",
      text2: "",
      textArr: [],
    };
  },
  components: {
    navlist,
  },
  methods: {
    change1(el) {
      var num = 0;
      for (var i = 0; i < this.shuju.length; i++) {
        for (var j = 0; j < this.shuju[i].list.length; j++) {
          if (this.shuju[i].list[j].path == el) {
            this.text2 = this.shuju[i].list[j].name;
          }
        }
      }
      this.textArr = [this.text1, this.text2];
      if (el == "/") {
        this.textArr = [];
      }
    },
    change2(el) {
      this.text1 = this.shuju[el - 1].name;
    },
    click() {
      console.log(1);
    },
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