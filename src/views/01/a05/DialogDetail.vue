<template>
<!--
  <el-dialog width="400px"
             style="margin-top:60px"
             :close-on-click-modal="false"
             :title="title"
             :visible.sync="visible"
             append-to-body>
   
    <div slot="footer"
         class="dialog-footer">
      <el-button type="primary"
                 @click="submitForm">保存</el-button>
      <el-button @click="close">取消</el-button>
    </div>
  </el-dialog>
  -->
  <base-dialog ref="dialogDetail" type="table"  :title="title" :appendToBody="true" footer>
        <template slot="body">
          
        </template>
        <template slot="footer">
          <el-button type="primary" @click="save">提交</el-button>
          <el-button @click="quit">保存</el-button>
        </template>
      </base-dialog>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import BaseDialog from '@/views/_common/BaseDialog.vue'

@Component({
  components: {
    BaseDialog, 
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any,
     dialogDetail: any
  }


  title: string = '新增生产通知单'
 
  open(isNew = true) {
    if (isNew) {
      this.title = '新增生产通知单'
    } else {
      this.title = '修改生产通知单'
    }
       this.$refs.dialogDetail.visible = true
  }
  save() {
    this.$refs.dialogDetail.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
  quit() {
    this.$refs.dialogDetail.visible = false
  }
}
</script>

<style lang="scss">

</style>