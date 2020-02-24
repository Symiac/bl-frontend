<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <img src="../assets/logo.png"
             height="46" />
      </div>
      <div class="name"><span>百炼ERP系统</span></div>
      <div style="flex:1"></div>
      
      <div class="btn"
           :title="fullscreen?'恢复窗口':'全屏'"
           @click="toggleFullscreen">
        <i :class="fullscreen?'el-icon-monitor':'el-icon-full-screen'"></i>
      </div>
      <div class="btn"
           title="帮助">
        <i class="el-icon-question"></i>
      </div>
      <div class="btn"
           title="待办">
        <el-badge :value="12"
                  is-dot
                  class="badge">
          <i class="el-icon-user-solid"></i>
        </el-badge>
      </div>
      <div class="user">
        <el-dropdown style="width:100%;text-align:right;">
          <span class="el-dropdown-link">
            个人中心
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">我的权限</el-dropdown-item>
            <el-dropdown-item divided
                              command="">修改密码</el-dropdown-item>
            <el-dropdown-item command="">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header-line"></div>
    <div class="center">
      <div class="collapse"
           :title="collapseTitle"
           @click="toggleCollapse">
        <i class="arrow el-icon-caret-left"></i>
      </div>
      <div class="aside">
        <nav-menu></nav-menu>
      </div>
      <div class="main">
        <nav-tabs></nav-tabs>
        <transition name="el-zoom-in-top">
          <router-view />
        </transition>
      </div>
    </div>
    <div class="footer">
      <!-- <span style="float:left">首页</span> -->
    百炼ERP系统（V1.0） 技术支持：<span>&nbsp;&copy;大连海事大学2020届毕设</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import NavMenu from '@/views/_common/NavMenu.vue'
import NavTabs from '@/views/_common/NavTabs.vue'

@Component({
  components: {
    NavMenu,
    NavTabs
  }
})
export default class Index extends Vue {
  public $refs!: {
    fullscreenButton: any
  }
  collapsed: any = '0'
  fullscreen: boolean = false
  created() {
    // console.log(this.$route.path)
    // console.log(this.$route.path.split('/')[1])
    sessionStorage.setItem('user', '郭虎城')
  }
  mounted() {
    // console.dir(document.querySelector('.main'))
    // console.log(this.$refs.fullscreenButton)
    // this.$refs.fullscreenButton.$el.click()
    // const collapsed = sessionStorage.getItem('collapsed')
    // console.log(collapsed)
    // this.collapsed = collapsed === null ? '0' : collapsed
    // console.log(this.collapsed)
    // this.toggleCollapse()
  }
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      this.fullscreen = true
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        this.fullscreen = false
      }
    }
  }
  toggleCollapse() {
    const aside: HTMLElement | null = document.querySelector('.aside')
    const main: HTMLElement | null = document.querySelector('.main')
    const collapse: HTMLElement | null = document.querySelector('.collapse')
    const arrow: HTMLElement | null = document.querySelector('.arrow')
    console.dir(1)
    if (this.collapsed === '0') {
      aside && (aside.style.width = '0')
      // aside && (aside.style.display = 'none')
      const width = document.body.clientWidth
      console.log(width)
      // main && (main.style.width = width + 'px')
      main && (main.style.width = '100%')
      collapse && (collapse.style.left = '0')
      arrow && (arrow.className = 'arrow el-icon-caret-right')
      this.collapsed = '1'
      sessionStorage.setItem('collapsed', '0')
    } else {
      aside && (aside.style.width = '200px')
      // aside && (aside.style.display = 'block')
      const width = document.body.clientWidth - 200
      console.log(width)
      // main && (main.style.width = width + 'px')
      main && (main.style.width = 'calc(100% - 200px)')
      collapse && (collapse.style.left = 200 + 'px')
      arrow && (arrow.className = 'arrow el-icon-caret-left')
      this.collapsed = '0'
      sessionStorage.setItem('collapsed', '1')
    }
  }
  get routerPath() {
    return this.$route.path
  }
  get collapseTitle() {
    return this.collapsed === '0' ? '隐藏菜单' : '显示菜单'
  }
}
</script>

<style lang="scss">
.index {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 50px;
   // background: #004098;
   // background-image: url(../assets/header.jpg);
    background-repeat: no-repeat;
    background-position-x: right;
    color: #000;
    display: flex;
    flex-direction: row;
    .logo {
      width: 50px;
      height: 50px;
      line-height: 50px;
      padding-left: 25px;
      margin-top: 4px;
    }
    .name {
      width: 300px;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      font-weight: bold;
      font-size: 18px;
    }
    .btn {
      // width: 50px;
      padding: 0 15px;
      // height: 50px;
      text-align: center;
      // line-height: 50px;
      background: transparent;
      transition: all 0.4s ease;
      cursor: pointer;
      &:hover {
        // background: #3366ad;
        // background: rgba(152, 181, 223, 0.6);
        background: #e60013;
        color: #fff;
      }
      i {
        font-size: 18px;
        line-height: 50px;
      }
      .fullscreen {
        font-size: 14px;
        color: #eee;
        &:hover {
          color: #fff;
        }
      }
      .badge {
        .el-badge__content {
          &.is-fixed {
            top: 15px;
            right: 5px;
          }
        }
      }
    }
    .user {
      height: 50px;
      padding: 0 10px 0 15px;
      font-weight: bold;
      cursor: pointer;
      .el-dropdown{
        color: #000; 
        &:hover {
        color: #fff;
      }
      }
      &:hover {
        background:#e60013;
      }
      
      .el-dropdown-link {
        line-height: 50px;
        font-size: 14px;
      }
    }
  }
  .header-line {
    width: 100%;
    height: 10px;
    background: #fafafa;
  }
  .center {
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    flex-direction: row;
    // flex: 1;
    background: #ddd;
    position: relative;
    .collapse {
      position: absolute;
      top: 50%;
      bottom: 50%;
      left: 200px;
      margin-top: -20px;
      width: 6px;
      height: 40px;
      background: #efefef;
      border: 1px solid #e4e7ed;
      border-left: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: all 0.2s ease;
      cursor: pointer;
      i {
        position: absolute;
        top: 14px;
        left: -3px;
        font-size: 12px;
        color: #ccc;
      }
      &:hover {
        background: #ddd;
      }
      &:hover i {
        color: #666;
      }
    }
    .collapsed {
      width: 0;
    }
    .aside {
      width: 200px;
      height: 100%;
      overflow-x: hidden;
      overflow-y: overlay;
      background: #fefefe;
      position: relative;
      transition: all 0.4s ease;
      .el-menu {
        height: 100%;
        background: #fefefe;
        // color: #fff;
      }
      .el-menu-item.is-active {
        color: #fff;
        background: #e60013;
      }
      .el-menu-item.is-active:hover {
        background: #e60013;
      }
      .el-menu-item:focus {
        background: #e60013;
      }
      .el-menu-item:hover {
        background: #dd626da6;
      }
      .el-submenu__title:hover {
        background: #dd626da6;
      }
      .el-menu-item,
      .el-submenu__title {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        font-weight: bold;
        margin: 5px 0;
        .is-active {
          background: #e60013;
        }
      }
    }
    .main {
      width: calc(100% - 200px);
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      background: #fafafa;
      transition: width 0.4s ease;
      // .tabs {
      //   width: 100%;
      // }
      // .content {
      //   > div {
      //     display: flex;
      //     flex-direction: column;
      //   }
      // }
    }
  }
  .footer {
    width: 100%;
    height: 26px;
    line-height: 26px;
    padding-left: 20px;
    // border-top: 1px solid #ccc;
    background: #fafafa url(../assets/line1.png) repeat-x;
    text-align: left;
    color: #999;
    font-size: 12px;
    a {
      color: #666;
      text-decoration: none;
      &:hover {
        color: #369;
      }
    }
    span {
      color: #ccc;
    }
  }
}
</style>
