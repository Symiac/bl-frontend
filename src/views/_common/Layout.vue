<template>
  <div class="layout">
    
    <div v-if="search"
         class="search">
      <slot name="search"></slot>
    </div>
    <div v-if="operation"
         class="operation">
      <slot name="operation"></slot>
    </div>
    <div v-if="content"
         class="content">
      <div v-if="nav"
           class="nav">
        <slot name="nav"></slot>
      </div>
      <div class="list">
        <slot name="content"></slot>
      </div>
    </div>
    <slot name="dialog"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace, Action } from 'vuex-class'

@Component
export default class Layout extends Vue {
  @Prop({ type: Boolean, default: true }) readonly showSearch!: boolean
  @Prop({ type: Boolean, default: true }) readonly operation!: boolean
  @Prop({ type: Boolean, default: true }) readonly search!: boolean
  @Prop({ type: Boolean, default: true }) readonly content!: boolean
  @Prop({ type: Boolean, default: false }) readonly nav!: boolean
}
</script>

<style lang="scss">
.layout {
  width: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  .operation {
    width: 100%;
    min-height: 30px;
    box-sizing: border-box;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    a {
      color: #fff;
      text-decoration: none;
    }
    .collapse-search {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #004098;
      cursor: pointer;
      .el-collapse-item__arrow {
        margin: 2px 0 0 10px;
      }
    }
  }
  @media (max-width:1400px) {   //屏幕缩小自动换行后按钮展示
    // .search {
    //   min-height:30px; height:auto!important; height:80px;
    // }
  }
  .search {
    width: 100%;
    max-height: 120px;
    // overflow: hidden;
    // transform: translateY(100%);
    transition: max-height .3s ease;
    // height: 30px;
    box-sizing: border-box;
    // margin-bottom: 10px;
    .el-form--inline {
      display: flex;
      justify-content: space-between;
      .el-form-item__label {
        padding-right: 10px;
      }
      .el-form-item {
        margin-bottom: 10px;
      }
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .content {
    // height: calc(100% - 130px);
    // width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    overflow: hidden;
    flex: 1;
    .nav {
      width: 280px;
      height: 100%;
      border: 1px solid #DCDFE6;
      margin-right: 10px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .list {
      width: auto;
      height: 100%;
      box-sizing: border-box;
      flex: 1;
      overflow: auto;
      > div {
        height: 100%;
      }
    }
  }
}
</style>