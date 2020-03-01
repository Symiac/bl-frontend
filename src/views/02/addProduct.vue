<template>
  <el-dialog
    width="500px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
    class="add"
  >
    <el-form :model="form" :rules="rules" ref="form" label-width="150px" style="margin-top:100px">
       <el-form-item  prop="radio" label="工作方式">
         <el-radio v-model="form.radio" label="1">单机</el-radio>
            <el-radio v-model="form.radio" label="2">双击</el-radio>
      </el-form-item>
      <el-form-item label="设备" prop="pp">
        <el-select
          class="inline-input"
          v-model="form.pp"
          placeholder="设备A"
          style="width:150px"
        >
         <el-option label="设备A" value="01"></el-option>
          <el-option label="设备B" value="01"></el-option>
          <el-option label="设备C" value="02"></el-option>
          <el-option label="设备D" value="03"></el-option>
        </el-select>
      </el-form-item>
     
      
     
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">确定</el-button>
      <el-button @click="close">取消</el-button>

    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

@Component({
  components: {

  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any

  }

  visible: boolean = false
  title: string = '新增设备'
  level: number = 1
  form: object = {
    radio:'1'
  }
  rules: object = {
    pp: [{ required: true, message: '请填写', trigger: 'blur' }],
  
    radio: [{ required: true, message: '', trigger: 'blur' }]
  }
  
  open() {
    this.visible = true
  }
  close() {
    this.visible = false
  }
   save() {
    this.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
}
</script>

<style lang="scss">
.add{
  .el-dialog__wrapper {
  overflow: hidden;
  .el-dialog {
    height: 50vh;
   
  }
  }
}
</style>