<template>
  <el-dialog
    width="400px"
    style="margin-top:60px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
  >
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="订货单位" prop="orderUnit">
        <el-select
          class="inline-input"
          v-model="form.orderUnit"
          placeholder="输入订货单位"
          style="width:150px"
        >
          <el-option label="BL1901" value="01"></el-option>
          <el-option label="BL1902" value="02"></el-option>
          <el-option label="（历史记录）" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品工号" prop="workingNumber">
        <el-select
          class="inline-input"
          v-model="form.workingNumber"
          placeholder="输入产品工号"
          style="width:150px"
        >
          <el-option label="BL1901" value="01"></el-option>
          <el-option label="BL1902" value="02"></el-option>
          <el-option label="（历史记录）" value="03"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">下一步</el-button>
      <el-button @click="close">取消</el-button>
      <dialog-1 ref="dialog1"></dialog-1>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Dialog1 from './DialogDetail.vue'
@Component({
  components: {
    Dialog1
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
    dialog1: any
  }

  visible: boolean = false
  title: string = '新增生产通知单'
  level: number = 1
  form: object = {
    orderUnit: '', //订货单位
    workingNumber: '' //产品工号
  }
  rules: object = {
    orderUnit: [{ required: true, message: '请填写订货单位', trigger: 'blur' }],
    workingNumber: [{ required: true, message: '请填写产品工号', trigger: 'blur' }]
  }
  inputSuggestion: any[] = [
    { id: 1, value: '数量授权' },
    { id: 2, value: '嵌入授权' },
    { id: 3, value: '特定授权' },
    { id: 4, value: '完全授权' },
    { id: 5, value: '场地授权' },
    { id: 6, value: '节点授权' }
  ]
  open() {
    this.visible = true
  }
  close() {
    this.$refs.form.resetFields()
    this.visible = false
  }
  submitForm() {
    this.$refs.form.validate((valid: any) => {
      if (valid) {
        console.log(this.form)
        this.visible = false
      }
    })
    if (!this.visible) {
      this.$refs.dialog1.open(true)
    }
  }
  querySearch(queryString, cb) {
    var options = this.inputSuggestion
    var results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  createFilter(queryString) {
    return option => {
      return option.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }
  handleSelect() {}
}
</script>

<style lang="scss">
</style>