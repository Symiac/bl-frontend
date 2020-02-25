<template>
  <el-dialog width="600px"
             style="margin-top:60px"
             :close-on-click-modal="false"
             :title="title"
             :visible.sync="visible">
    <el-form :model="form"
             :rules="rules"
             ref="form"
             label-width="100px">
      <el-form-item label="采购模式"
                    prop="service">
        <!-- <el-input v-model="form.authorization"
                  placeholder="请填写采购模式名称，长度不能超过20个字符"
                  autocomplete="off"
                  clearable></el-input> -->
        <el-autocomplete class="inline-input"
                         style="width:100%"
                         v-model="form.service"
                         :fetch-suggestions="querySearch"
                         placeholder="如数量授权、场地授权等，长度不能超过20个字符"
                         @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark"
                  type="textarea"
                  :rows="2"
                  placeholder="请填写采购模式备注，长度不能超过200个字符"
                  autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button type="primary"
                 @click="submitForm">保存</el-button>
      <el-button @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
@Component
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
  }

  visible: boolean = false
  title: string = '新增采购模式'
  level: number = 1
  form: object = {
    authorization: '',
    remark: ''
  }
  rules: object = {
    service: [{ required: true, message: '请填写采购模式', trigger: 'blur' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }]
  }
  inputSuggestion: any[] = [
    { id: 1, value: '数量授权' },
    { id: 2, value: '嵌入授权' },
    { id: 3, value: '特定授权' },
    { id: 4, value: '完全授权' },
    { id: 5, value: '场地授权' },
    { id: 6, value: '节点授权' }
  ]
  open(isNew = true) {
    if (isNew) {
      this.title = '新增生产通知单'
    } else {
      this.title = '修改生产通知单'
    }
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
        this.$alert('采购模式保存成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
        this.visible = false
      }
    })
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