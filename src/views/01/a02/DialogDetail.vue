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
                       placeholder="请选择"
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
                       placeholder="请选择"
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="生产厂商"
                        prop="manufacturer">
            <el-select v-model="form.manufacturer"
                       disalbed>
              <el-option label="微软"
                         value="01"></el-option>
              <el-option label="甲骨文"
                         value="02"></el-option>
              <el-option label="中标软件"
                         value="03"></el-option>
              <el-option label="IBM"
                         value="04"></el-option>
              <el-option label="金山"
                         value="05"></el-option>
              <el-option label="福昕"
                         value="06"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="软件产地"
                        prop="area">
            <el-select v-model="form.area"
                       disalbed>
              <el-option label="国内"
                         value="01"></el-option>
              <el-option label="国外"
                         value="02"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="软件品种名称"
                    prop="variety">
        <!-- <el-input v-model="form.variety"
                  placeholder="请填写软件品种名称，长度不能超过20个字符"
                  autocomplete="off"
                  clearable></el-input> -->
        <el-autocomplete class="inline-input"
                         style="width:100%"
                         v-model="form.variety"
                         :fetch-suggestions="querySearch"
                         placeholder="请填写软件品种名称，长度不能超过20个字符"
                         @select="handleSelect"></el-autocomplete>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark"
                  type="textarea"
                  :rows="2"
                  placeholder="请填写软件品种备注，长度不能超过200个字符"
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
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
@Component
export default class DialogDetail extends Vue {
  @Prop({ type: Function, default: () => {} }) readonly onRefresh

  public $refs!: {
    form: any
  }

  visible: boolean = false
  title: string = '新增品种'
  level: number = 1
  form: object = {
    category1: '',
    category2: '',
    variety: '',
    remark: ''
  }
  rules: object = {
    category1: [{ required: true, message: '请选择类目一名称', trigger: 'change' }],
    category2: [{ required: true, message: '请选择类目一名称', trigger: 'change' }],
    manufacturer: [{ required: true, message: '请选择生产厂商', trigger: 'blur' }],
    area: [{ required: true, message: '请选择软件产地', trigger: 'blur' }],
    variety: [{ required: true, message: '请输入品种名称', trigger: 'blur' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: ['blur', 'change'] }]
  }
  varietySuggestion: any[] = [
    { id: 1, value: 'Windows Server' },
    { id: 2, value: 'AIX' },
    { id: 3, value: 'HPUnix' },
    { id: 4, value: 'Solaris' },
    { id: 5, value: 'RedHat' },
    { id: 6, value: 'SUSE' },
    { id: 7, value: 'Debian' },
    { id: 8, value: 'Ubuntu' },
    { id: 9, value: 'Oracle' },
    { id: 10, value: 'Oracle RAC' },
    { id: 11, value: 'Real Application Clusters' },
    { id: 12, value: 'Partitioning' },
    { id: 13, value: 'Golden gate' },
    { id: 14, value: 'Active DataGuard' },
    { id: 15, value: 'Oracle Database Enterprise Edition' },
    { id: 16, value: 'SQLServer' },
    { id: 17, value: 'MySQL' },
    { id: 18, value: 'DM' },
    { id: 19, value: 'KingbaseES' },
    { id: 20, value: 'Gbase' },
    { id: 21, value: 'OSCAR' },
    { id: 22, value: 'WebSphere' },
    { id: 23, value: 'WebLogic' },
    { id: 24, value: 'Vmware vSphere' },
    { id: 25, value: 'Vmware vCenter' }
  ]
  open(isNew = true) {
    if (isNew) {
      this.title = '新增品种'
    } else {
      this.title = '修改品种'
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
        this.$alert('品种保存成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
        this.visible = false
      }
    })
  }
  querySearch(queryString, cb) {
    var options = this.varietySuggestion
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