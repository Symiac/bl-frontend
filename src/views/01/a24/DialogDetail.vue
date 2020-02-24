<template>
  <div class="dialog">
    <el-dialog width="1200px"
               custom-class="el-dialog-form"
               :close-on-click-modal="false"
               :title="title"
               :visible.sync="visible">
      <el-form :model="form"
               :rules="rules"
               ref="form"
               label-width="150px"
               style="width:70%; margin-left:15%">
       <el-row>
      <el-col :span="12">
        <el-form-item
          label="类目一名称"
          label-width="120px"
          prop="category1"
        >
          <el-select v-model="form.category1" placeholder="请选择" clearable>
            <el-option label="服务器用" value="01"></el-option>
            <el-option label="个人终端" value="02"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item
          label="类目二名称"
          label-width="120px"
          prop="category2"
        >
          <el-select v-model="form.category2" placeholder="请选择" clearable>
            <el-option label="操作系统" value="01"></el-option>
            <el-option label="数据库" value="02"></el-option>
            <el-option label="中间件" value="03"></el-option>
            <el-option label="安全杀毒" value="04"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item
          label="软件品种名称"
          label-width="120px"
          prop="variety"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.variety"
            :fetch-suggestions="querySearchVariety"
            placeholder="请填写软件品种名称，长度不能超过20个字符"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item
          label="采购模式"
          label-width="120px"
          prop="service"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.service"
            :fetch-suggestions="querySearchService"
            placeholder="请填写采购模式"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item
          label="功能配置"
          label-width="120px"
          prop="configuration"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.configuration"
            :fetch-suggestions="querySearchConfiguration"
            placeholder="请填写功能配置"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item
          label="版本"
          label-width="120px"
          prop="version"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.version"
            :fetch-suggestions="querySearchVersion"
            placeholder="请填写版本"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item
          label="生产厂商"
          label-width="120px"
          prop="manufacturer"
          >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.manufacturer"
            :fetch-suggestions="querySearchManufacturer"
            placeholder="请填写生产厂商"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item
          label="软件产地"
          label-width="120px"
          prop="area"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.area"
            :fetch-suggestions="querySearchArea"
            placeholder="请填写产地"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item
          label="授权方式"
          label-width="120px"
          prop="adv"
          >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="form.adv"
            placeholder="请填写授权方式"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item label="备注" label-width="120px" prop="remark">
        <el-input type="textarea" :row="2" v-model="form.remark"></el-input>
      </el-form-item>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item
          label="审批结论"
          label-width="120px"
          prop="con"
         >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            :fetch-suggestions="querySearchArea"
            v-model="formDetail.con"
            placeholder="请填写审批结论"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="审批意见" label-width="120px" prop>
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.adv"
            placeholder="请填写审批结论"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="办理记录" label-width="120px">
      <el-table :data="data" border class="custom-table">
        <el-table-column type="index" label="序号" align="right" width="50"></el-table-column>
        <el-table-column label="办理类型" prop="type" width="80"></el-table-column>
        <el-table-column label="办理单位" prop="unit" width="220"></el-table-column>
        <el-table-column label="办理人" prop="handled_by" width="80"></el-table-column>
        <el-table-column label="办理时间" prop="handled_at" width="110"></el-table-column>
        <el-table-column label="办理意见" prop="suggestion" min-width="80"></el-table-column>
        <el-table-column label="状态" prop="state" width="70"></el-table-column>
      </el-table>
    </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button type="primary"
                   @click="submitForm">保存</el-button>
        <el-button @click="close">取消</el-button>
      </div>
    </el-dialog>

  </div>
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
  title: string = '新增供应商'
  level: number = 1
  form: object = {
    authorization: '',
    remark: ''
  }
  formDetail:any=[]
  
  rules: object = {
    category1: [{ required: true, message: '未填写类目一名称', trigger: 'change' }],
    category2: [{ required: true, message: '未填写类目二名称', trigger: 'change' }],
    variety: [{ required: true, message: '未填写软件品类名称', trigger: 'change' }, { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }],
    service:[{ required: true, message: '未填写采购模式', trigger: 'change' }],
    configuration:[{ required: true, message: '未填写功能配置', trigger: 'change' }],
    version:[{ required: true, message: '未填写版本', trigger: 'change' }],
    manufacturer:[{ required: true, message: '未填写生产厂商', trigger: 'change' }],
    area:[{ required: true, message: '未填写软件产地', trigger: 'change' }],
    adv:[{ required: true, message: '未填写授权方式', trigger: 'change' }],
    con:[{ required: true, message: '未填写审批结论', trigger: 'change' }]
  }

   data: any[] = [
    {
      id: 1,
      type: '申请',
      unit: '中国铁建十一局集团有限公司',
      handled_by: '郭虎城',
      handled_at: '2019-12-09',
      suggestion: '提交',
      state: '已提交'
    },
    {
      id: 2,
      type: '审核',
      unit: '中铁建网络信息科技有限公司',
      handled_by: '陆妍鲲',
      handled_at: '2019-12-10',
      suggestion: '提交',
      state: '已通过'
    }
  ]
  inputSuggestion: any[] = [{ id: 1, value: '微软' }, { id: 2, value: 'IBM' }, { id: 3, value: '甲骨文' }, { id: 4, value: '金山' }, { id: 5, value: '华为' }]
  tableDataBusinessSupport: any[] = [
    { id: 1, name: '胡晓明', post: '东软国际', mobile: '13387223137', email: 'huxm@mgroup.com', state: '启用' },
    { id: 2, name: '刘魏', post: '东软国际', mobile: '18677362139', email: 'liuwei@mgroup.com', state: '启用' }
  ]
  tableDataTechnologySupport: any[] = [
    { id: 1, name: '李美凤', post: '东软国际', mobile: '13753567988', email: 'lm981002@mgroup.com', state: '启用' },
    { id: 2, name: '王立方', post: '用友软件', mobile: '18961669199', email: 'wangcube@sohu.com', state: '启用' }
  ]
  tableDataMarketingSupport: any[] = [
    { id: 1, name: '杨志峰', post: '东软国际', mobile: '18611861120', email: 'yangzhifeng@mgroup.com', state: '启用' },
    { id: 2, name: 'Michael Donald', post: '东软国际', mobile: '13610112019', email: 'Michael.Donald@mgroup.com', state: '启用' }
  ]
  open() {
    
      this.title = '新增审批'
    
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
        this.$alert('供应商保存成功！', '操作成功', {
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
 
   querySearchVariety(queryString, cb) {
    const options = [
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
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchConfiguration(queryString, cb) {
    const options = [{ id: 1, value: '标准版' }, { id: 2, value: '数据中心版' }, { id: 3, value: '外部链接版' }]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchVersion(queryString, cb) {
    const options = [
      { id: 1, value: '2003' },
      { id: 2, value: '2003R2' },
      { id: 3, value: '2008' },
      { id: 4, value: '2008R2' },
      { id: 5, value: '2012' },
      { id: 6, value: '2012R2' },
      { id: 7, value: '2016' },
      { id: 8, value: '2019' }
    ]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchManufacturer(queryString, cb) {
    const options = [{ id: 1, value: '微软' }, { id: 2, value: 'IBM' }, { id: 3, value: '金山' }, { id: 4, value: '福昕' }]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchArea(queryString, cb) {
    const options = [{ id: 1, value: '国内' }, { id: 2, value: '国外' }]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchAuthorization(queryString, cb) {
    const options = [{ id: 1, value: '单机永久' }, { id: 2, value: '单机租赁' }, { id: 3, value: '网络永久' }, { id: 4, value: '网络租赁' }, { id: 5, value: '云租赁' }]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
  querySearchService(queryString, cb) {
    const options = [{ id: 1, value: '数量授权' }, { id: 2, value: '嵌入授权' }, { id: 3, value: '特定授权' }, { id: 4, value: '完全授权' }, { id: 5, value: '节点授权' }, { id: 6, value: '场地授权' }]
    const results = queryString ? options.filter(this.createFilter(queryString)) : options
    cb(results)
  }
 
}
</script>

<style lang="scss">
.dialog {
  .el-dialog__wrapper {
    overflow: hidden;
    .el-dialog-form {
      width: 1200px;
      height: 90vh;
      margin-top: 5vh !important;
      display: flex;
      flex-direction: column;
      .el-dialog__body {
        flex: 1;
        height: 450px;
        overflow: auto;
      }
      .el-dialog__footer {
        border-top: 1px solid #eee;
        padding: 10px 20px;
        background: #fefefe;
      }
      .custom-table {
        // 取消表格下边线
        tbody tr:last-child td {
          border-bottom: none !important;
        }
      }
    }
  }
}
</style>