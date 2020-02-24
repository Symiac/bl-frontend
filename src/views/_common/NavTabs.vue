<template>
  <div class="nav-tabs">
    <el-tabs v-model="currentTab"
             type="card"
             closable
             @tab-click="tabClick"
             @tab-remove="tabRemove">
      <el-tab-pane v-for="(route) in routeTabs"
                   :key="route.name"
                   :name="route.name"
                   :label="route.title">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State, Mutation, namespace } from 'vuex-class'

const vuexA01 = namespace('A01')

@Component
export default class NavTabs extends Vue {
  @State routeTabs: any
  @Mutation SET_ROUTE_TABS: any
  @vuexA01.State count: any
  @vuexA01.State table_data: any
  currentTab: string = 'home'

  @Watch('$route')
  handle$route(route: any) {
    // console.log(this.$route)
    this.currentTab = route.name
    const isExist = this.routeTabs.some((item: any) => {
      return item.path === route.path
    })
    !isExist &&
      this.routeTabs.push({
        path: route.fullPath,
        name: route.name,
        title: route.meta.title
        // name: route.matched[1].components.default.name
      })
  }
  created() {
    // console.log('navtabs')
    // console.log(this.count)
    // console.log(this.table_data)
    // console.log(this.routeTabs)
    // console.log(this.$route)
  }
  tabRemove(name: string) {
    // console.log(name)
    // const delItem = this.routeTabs.splice(index, 1)[0]
    // const item = this.routeTabs[index] ? this.routeTabs[index] : this.routeTabs[index - 1]
    // if (item) {
    //   delItem.path === this.$route.fullPath && this.$router.push(item.path)
    // } else {
    //   this.$router.push('/')
    // }
    if (name === 'home') {
      return
    }
    const tabs = this.routeTabs
    let activeName = this.currentTab
    // console.log(tabs)
    // console.log(activeName)
    if (activeName === name) {
      tabs.forEach((tab: any, index: any) => {
        if (tab.name === name) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    this.currentTab = activeName
    const routeTabs = tabs.filter((tab: any) => tab.name !== name)
    this.SET_ROUTE_TABS(routeTabs)
    this.$router.push({ name: this.currentTab })
  }
  tabClick(tab: any) {
    // console.log(tab)
    this.$router.push({ name: tab.name })
  }
}
</script>

<style lang="scss">
.nav-tabs {
  margin-left: 10px;
  height: 40px;
  overflow: hidden;
  user-select: none;
  .el-tabs {
    height: 40px;
    background: #fff;
    .el-tabs__header {
      margin: 0;
      .el-tabs__nav-prev {
        left: 4px;
      }
      .el-tabs__nav-next {
        right: 4px;
      }
      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        line-height: 40px;
      }
      .el-tabs__nav {
        border-radius: 0;
        border-top: none;
        border-left: none;
      }
    }
    .el-tabs__item {
      height: 40px;
      line-height: 40px;
      &.is-active {
        background:#e60013;
        border-bottom-color: #fafafa;
        color: #fff;
      }
     &:hover {
       color: #000;
      }
    }
    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      border-bottom-color: #fafafa;
    }
  }
}
</style>