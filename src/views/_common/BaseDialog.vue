<template>
  <div class="base-dialog">
    <el-dialog :type="type"
               :width="width"
               :custom-class="customClass"
               :fullscreen="fullscreen"
               :title="title"
               :close-on-click-modal="closeOnClickModal"
               :append-to-body="appendToBody"
               :visible.sync="visible">
      <slot name="body"></slot>
      <div v-if="footer"
           slot="footer"
           class="dialog-footer">
        <slot name="footer"></slot>    
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

@Component
export default class BaseDialog extends Vue {
  @Prop({ type: String, default: '' }) readonly type                // 对话框类型：1.基础表单[base-dialog-form] 2.表格[base-dialog-table] 3.全屏 [base-dialog-fullscreen]                
  @Prop({ type: String, default: '' }) readonly width               // 对话框title              
  @Prop({ type: String, default: '标题' }) readonly title               // 对话框title              
  @Prop({ type: Boolean, default: false }) readonly closeOnClickModal   // 是否可以点击关闭
  @Prop({ type: Boolean, default: false }) readonly appendToBody        // 是否嵌套
  @Prop({ type: Boolean, default: true }) readonly footer        // 是否显示底部

  visible: boolean = false
  fullscreen: boolean = false
  created() {
    this.type === 'fullscreen' && (this.fullscreen = true)
  }
  open() {
    this.visible = true
  }
  close() {
    this.visible = false
  }

  get customClass() {
    let className: string = ''
    switch(this.type) {
      case 'form':
        className = 'base-dialog-form'
        break
      case 'table':
        className = 'base-dialog-table'
        break
      case 'fullscreen':
        className = 'base-dialog-fullscreen'
        break
    }
    return className
  }
}
</script>

<style lang="scss">
.base-dialog {
  .el-dialog__wrapper {
    overflow: hidden;
    .el-dialog {
      display: flex;
      flex-direction: column;
      .el-dialog__header {
        height: 40px;
        line-height: 40px;
        padding: 0px 20px;
        background: #eff3fa;
        color: #fff;
        border-bottom: 1px solid #dcdfe6;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        .el-dialog__title {
          font-size: 16px;
          // font-weight: bold;
        }
        .el-dialog__headerbtn {
          top: 12px;
        }
      }
      .el-dialog__body {
        flex: 1;
        overflow: auto;
        padding: 20px;
      }
      .el-dialog__footer {
        text-align: center;
        border-top: 1px solid #eee;
        padding: 8px 20px;
        background: #fefefe;
      }
    }
    .base-dialog-form {
      height: auto;
      margin-top: 15vh !important;     
      .el-dialog__body {
        padding: 20px 20px 0 20px;
      }
      .el-dialog__footer {
        border: none;
        padding: 10px 20px 20px;
        background: none;
      }
      .custom-table {
        // 取消表格下边线
        tbody tr:last-child td {
          border-bottom: none !important;
        }
      }
    }
    .base-dialog-table {
      height: 90vh;
      margin-top: 5vh !important;
      .el-dialog__body {

      }
    }
    .base-dialog-fullscreen {
      height: 100vh;
      width: 100vw;
      .el-dialog__body {
        padding: 10px;
      }
    }
  }
}
</style>