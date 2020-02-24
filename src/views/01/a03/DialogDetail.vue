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
      <el-row>
        <el-col :span="12">
          <el-form-item label="类目一名称"
                        prop="category1">
            <el-select v-model="form.category1"
                       placeholder="请选择类目一名称"
                       clearable>
              <el-option label="服务器用"
                         value="01"></el-option>
              <el-option label="个人终端"
                         value="02"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类目二名称"
                        prop="category2">
            <el-select v-model="form.category2"
                       placeholder="请选择类目二名称"
                       clearable>
              <el-option label="操作系统"
                         value="01"></el-option>
              <el-option label="数据库"
                         value="02"></el-option>
              <el-option label="中间件"
                         value="03"></el-option>
              <el-option label="安全杀毒"
                         value="04"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="软件品种名称"
                    prop="variety">
        <el-select v-model="form.variety"
                   style="width:100%"
                   placeholder="请选择品种名称"
                   clearable>
          <el-option label="Windows Server"
                     value="01"></el-option>
          <el-option label="RedHat"
                     value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-row>
        <el-form-item label="软件规格"
                      prop="configuration">
          <el-col :span="15">
            <el-form-item prop="configuration">
              <!-- <el-input v-model="form.configuration"
                        placeholder="请填写软件功能配置"
                        autocomplete="off"
                        clearable></el-input> -->
              <el-autocomplete class="inline-input"
                               style="width:100%"
                               v-model="form.configuration"
                               :fetch-suggestions="querySearchConfiguration"
                               placeholder="型号，如标准版、专业版等"
                               @select="handleSelect"></el-autocomplete>
            </el-form-item>
          </el-col>
          <el-col :span="8"
                  :offset="1">
            <el-form-item prop="version">
              <!-- <el-input v-model="form.version"
                        placeholder="请填写软件版本"
                        autocomplete="off"
                        clearable></el-input> -->
              <el-autocomplete class="inline-input"
                               style="width:100%"
                               v-model="form.version"
                               :fetch-suggestions="querySearchVersion"
                               placeholder="版本，如V2019等"
                               @select="handleSelect"></el-autocomplete>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-row>
      <el-form-item label="备注">
        <el-input v-model="form.remark"
                  type="textarea"
                  :rows="2"
                  placeholder="请填写软件规格备注，长度不能超过200个字符"
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
  title: string = '新增规格'
  level: number = 1
  form: object = {
    category1: '',
    category2: '',
    variety: '',
    configuration: '',
    version: '',
    remark: ''
  }
  rules: object = {
    category1: [{ required: true, message: '请选择类目一名称', trigger: 'change' }],
    category2: [{ required: true, message: '请选择类目一名称', trigger: 'change' }],
    variety: [{ required: true, message: '请选择品种名称', trigger: 'change' }],
    configuration: [{ required: true, message: '请填写软件功能配置', trigger: 'blur' }, { min: 0, max: 1, message: '您录入的软件(类别+品种+规格)数据重复', trigger: ['blur', 'change'] }],
    version: [{ required: true, message: '请填写软件版本', trigger: 'blur' }, { min: 0, max: 1, message: ' ', trigger: ['blur', 'change'] }]
  }
  configurationSuggestion: any[] = [
    { id: 1, value: '标准版' },
    { id: 2, value: '数据中心版' },
    { id: 3, value: '外部连接版' },
    { id: 4, value: '服务器端访问许可' },
  ]
  versionSuggestion: any[] = [
    { id: 1, value: '2003' },
    { id: 2, value: '2003R2' },
    { id: 3, value: '2008' },
    { id: 4, value: '2008R2' },
    { id: 5, value: '2012' },
    { id: 6, value: '2012R2' },
    { id: 7, value: '2016' },
    { id: 8, value: '2019' },
  ]
  version: any[] = []
  open(isNew = true) {
    if (isNew) {
      this.title = '新增规格'
    } else {
      this.title = '修改规格'
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
        this.$alert('规格保存成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
        this.visible = false
      }
    })
  }
  querySearchConfiguration(queryString, cb) {
    var options = this.configurationSuggestion
    var options = this.configurationSuggestion
    var results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchVersion(queryString, cb) {
    var options = this.versionSuggestion
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
