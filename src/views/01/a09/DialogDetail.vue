<template>
  <el-dialog width="600px"
             style="margin-top:60px"
             :close-on-click-modal="false"
             :title="title"
             :visible.sync="visible">
    <el-form :model="form"
             :rules="rules"
             ref="form"
             label-width="120px">
      <el-form-item label="生产厂商名称"
                    prop="name">
        <el-autocomplete class="inline-input"
                         style="width:100%"
                         v-model="form.name"
                         :fetch-suggestions="querySearch"
                         placeholder="如微软、ORACLE等，长度不能超过20个字符"
                         @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="产地"
                    prop="area">
        <el-select v-model="form.area"
                   style="width:120px"
                   placeholder="请选择产地"
                   clearable>
          <el-option label="国内"
                     value="01"></el-option>
          <el-option label="国外"
                     value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark"
                  type="textarea"
                  :rows="2"
                  placeholder="请填写软件产地备注，长度不能超过200个字符"
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
  title: string = '新增软件产地'
  level: number = 1
  form: object = {
    authorization: '',
    remark: ''
  }
  rules: object = {
    name: [{ required: true, message: '请填写生产厂商名称', trigger: 'change' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }],
    area: [{ required: true, message: '请填写软件产地', trigger: 'change' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }]
  }
  inputSuggestion: any[] = [{ id: 1, value: '微软' }, { id: 2, value: 'IBM' }, { id: 3, value: '甲骨文' }, { id: 4, value: '金山' }, { id: 5, value: '华为' }]
  open(isNew = true) {
    if (isNew) {
      this.title = '新增软件产地'
    } else {
      this.title = '修改软件产地'
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
        this.$alert('软件产地保存成功！', '操作成功', {
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