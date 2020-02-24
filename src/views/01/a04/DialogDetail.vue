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
      <el-form-item label="授权方式"
                    prop="authorization">
        <!-- <el-input v-model="form.authorization"
                  placeholder="请填写授权方式名称，长度不能超过20个字符"
                  autocomplete="off"
                  clearable></el-input> -->
        <el-autocomplete class="inline-input"
                style="width:100%"
                v-model="form.authorization"
                :fetch-suggestions="querySearch"
                placeholder="如单机永久、云租赁等，长度不能超过20个字符"
                @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark"
                  type="textarea"
                  :rows="2"
                  placeholder="请填写授权方式备注，长度不能超过200个字符"
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
  title: string = '新增授权方式'
  level: number = 1
  form: object = {
    authorization: '',
    remark: ''
  }
  rules: object = {
    authorization: [{ required: true, message: '请填写授权方式', trigger: 'blur' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }]
  }
  inputSuggestion: any[] = [
    { id: 1, value: '单机永久' },
    { id: 2, value: '单机租赁' },
    { id: 3, value: '网络永久' },
    { id: 4, value: '网络租赁' },
    { id: 5, value: '云租赁' },
  ]
  open(isNew = true) {
    if (isNew) {
      this.title = '新增授权方式'
    } else {
      this.title = '修改授权方式'
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
        this.$alert('授权方式保存成功！', '操作成功', {
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