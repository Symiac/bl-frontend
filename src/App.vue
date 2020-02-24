<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      <RouterView />
    </transition>
  </div>
</template>

<style lang="scss">
html {
  overflow-x: auto;
  overflow-y: hidden;
}
body {
  margin: 0;
  padding: 0;
  min-width: 1336px;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #ccc;
  background-clip: padding-box;
  // border-radius: 9px;
  min-height: 28px;
}
::-webkit-scrollbar-track-piece {
  background-color: #e4e7ed;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
#app {
  font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-button {
  padding: 7px 12px !important;
  // border-radius: 0!important;
}
.el-button--small {
  font-size: 14px !important;
}
.el-input {
  .el-input__inner {
    height: 30px;
    line-height: 30px;
    padding: 0 12px !important;
  }
  .el-input__icon {
    line-height: 30px;
  }
}
.el-input__suffix {
  height: 30px !important;
  line-height: 30px !important;
}
.el-autocomplete-suggestion li {
  line-height: 30px !important;
}
.el-select {
  width: 100%;
}
.el-date-editor {
  .el-input__inner {
    padding-left: 30px !important;
  }
}
.el-checkbox {
  margin-right: 20px !important;
}
.el-form--inline {
  .el-form-item {
    // height: 30px !important;
    // line-height: 30px !important;
    // margin-bottom: 0 !important;
  }
  .el-form-item__content {
    height: 30px !important;
    line-height: 30px !important;
  }
}
.el-form-item__label {
  line-height: 30px !important;
}
.el-form-item__content {
  line-height: 30px !important;
}
.el-table {
  th {
    background-color: #eff3fa !important;
    display: table-cell!important; 
  }
  th,
  td {
    padding: 0 !important;
    border-bottom: 1px solid #e4e7ed !important;
  }
  thead {
    color: #606266 !important;
  }
  .cell {
    line-height: 30px !important;
  }
  .caret-wrapper {
    // 排序列高度
    height: 26px !important;
  }
  .sort-caret.ascending {
    // 升序图标位置
    top: 1px !important;
  }
  .sort-caret.descending {
    // 降序图标位置
    bottom: 3px !important;
  }
  &::before {
    //表格底部边线颜色
    background-color: #dcdfe6 !important;
    z-index: 100 !important;
    height: 0 !important;
  }
  &::after {
    height: 0 !important;
  }
  .el-table__fixed::before {
    height: 0 !important;
  }
}
.el-table--group,
.el-table--border {
  border: 1px solid #dcdfe6 !important;
  border-right: none;
  border-bottom: none;
}
.el-table--border {
  // 表格左侧、上部边线颜色
  // border-top: 1px solid #dcdfe6 !important;
  // border-left: 1px solid #dcdfe6 !important;
  th {
    border-right: 1px solid #dcdfe6 !important;
    .gutter {
      border: none !important;
    }
  }
  td {
    border-right: 1px solid #dcdfe6 !important;
  }
  th:nth-last-child(2),
  th:last-child,
  td:last-child {
    border-right: none !important;
  }
  tr:first-child th:last-child.gutter {
    border: none !important;
  }
  tr:nth-child(2) th:last-child:not(.gutter),
  tr:nth-child(2) th:nth-last-child(2) {
    border-right: 1px solid #dcdfe6 !important;
  }
  // tbody tr:last-child td {
  //   border-bottom: none !important;
  // }
  &::after {
    // 表格右侧边线颜色
    background: #dcdfe6 !important;
  }
}
.el-dialog.is-fullscreen {
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex:1;
    padding: 10px;
    overflow:auto;
  }
}
.el-dialog__wrapper{
  overflow: hidden !important;
  .el-dialog {
    .el-dialog__header {
      height: 40px;
      line-height: 40px;
      padding: 0px 20px;
      background: #eff3fa;
      color: #fff;
      border-bottom: 1px solid #dcdfe6;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      .el-dialog__title {
        font-size: 16px;
        // font-weight: bold;
      }
      .el-dialog__headerbtn {
        top: 12px;
      }
    }
    .el-dialog__body {
      padding: 20px;
    }
    .el-dialog__footer {
      // padding: 10px 20px 15px 20px;
      padding: 10px 20px;
      text-align: center;
    }
  }
}

.el-message {
  top: 80px !important;
  // padding: 8px 20px !important;
}
.el-message-box {
  padding-bottom: 15px !important;
  .el-message-box__btns {
    text-align: center;
  }
}
.el-pagination {
  height: 28px;
  padding: 10px 0 0 0 !important;
  text-align: right;
  .el-input__suffix {
    top: -2px;
  }
  span {
    font-size: 14px !important;
  }
  .btn-prev,
  .btn-next,
  .el-pager li {
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px !important;
    line-height: 26px;
  }
  .el-pager li.active + li {
    border: 1px solid #dcdfe6;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #004098 !important;
  }
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .el-pager li {
    background-color: #fff !important;
  }
  .el-pagination__editor.el-input .el-input__inner {
    line-height: 28px;
  }
}
input,
textarea {
  font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
}
::-webkit-input-placeholder {
  color: #ddd !important;
}
::-moz-input-placeholder {
  color: #ddd !important;
}
::-ms-input-placeholder {
  color: #ddd !important;
}


//日期选择小图标不展示
.date-icon {
    visibility: hidden;
}
</style>
