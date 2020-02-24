<template>
  <el-menu router
           unique-opened
           ref="navMenu"
           :default-active="$route.path"
           @select="select"
           @open="open"
           @close="close">
    <template v-for="menu in menus">
      <el-submenu v-if="menu.children&&menu.children.length>0"
                  :key="menu.name"
                  :index="menu.path"
                  class="current-sub-menu-item">
        <template slot="title">
          <i :class="getIcon(menu)"></i>
          <span>{{menu.meta.title}}</span>
        </template>
        <template v-for="childMenu in menu.children">
          <el-submenu v-if="childMenu.children&&childMenu.children.length>0"
                      :key="childMenu.name"
                      :index="childMenu.path"
                      class="current-sub-menu-item">
            <template slot="title">
              <i :class="getIcon(childMenu)"></i>
              <span>{{childMenu.meta.title}}</span>
            </template>
            <el-menu-item v-for="lastMenu in childMenu.children"
                          :key="lastMenu.name"
                          :index="lastMenu.path"
                          class="child-sub-menu">
              <i :class="lastMenu.meta&&lastMenu.meta.icon||'el-icon-document'"></i>
              <span slot="title">{{lastMenu.meta.title}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else
                        :key="childMenu.name"
                        :index="childMenu.path"
                        class="child-sub-menu-item">
            <i :class="childMenu.meta&&childMenu.meta.icon||'el-icon-document'"></i>
            <span slot="title">{{childMenu.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else
                    :key="menu.name"
                    :index="menu.path"
                    class="current-sub-menu-item">
        <i :class="menu.meta&&menu.meta.icon||'el-icon-folder'"></i>
        <span slot="title">{{menu.meta.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace, Mutation } from 'vuex-class'
import { get } from 'lodash'

@Component({
  components: {}
})
export default class Index extends Vue {
  @State routeTabs: any
  @Mutation SET_ROUTE_TABS
  menus: any = {}
  opened: any[] = []
  created() {
    this.menus = get(this.$router, 'options.routes[0].children', [])
    const opened = sessionStorage.getItem('opened')
    // console.log(opened)
    this.opened = opened ? opened.split(',') : []
    // console.log(this.opened)
  }
  mounted() {
    this.opened &&
      this.opened.forEach((x: string) => {
        // @ts-ignore
        this.$refs.navMenu.open(x)
      })
  }
  select(index: any, indexPath: any) {
    // console.log(index, indexPath)
    // console.log(this.routeTabs)
    // this.routeTabs.push(index)
    // this.SET_ROUTE_TABS(this.routeTabs)
    // console.log(this.routeTabs)
  }
  open(key: any, keyPath: any) {
    // console.log(key, keyPath)
    this.opened = keyPath
    // console.log(this.opened)
    sessionStorage.setItem('opened', this.opened.toString())
  }
  close(key: any, keyPath: any) {
    // console.log(key, keyPath)
    // console.log(this.opened)
    // let b = new Set(keyPath)
    // this.opened = this.opened.filter(x => !b.has(x))
    this.opened = this.opened.filter(x => x !== key)
    // console.log(this.opened)
    sessionStorage.setItem('opened', this.opened.toString())
  }
  getIcon(menu: any) {
    const opened = this.opened.includes(menu.path)
    return (menu.meta && menu.meta.icon) || (opened ? 'el-icon-folder-opened' : 'el-icon-folder')
  }
}
</script>
<style lang="scss">
.el-menu{
  
 .el-menu-item.is-active {
    color: #fff;
    background:brown;
}
}
</style>