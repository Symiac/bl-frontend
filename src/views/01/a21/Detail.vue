<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form-item
          label="类目一名称"
          label-width="120px"
          prop="category1"
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-select v-model="formDetail.category1" placeholder="请选择" clearable>
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-select v-model="formDetail.category2" placeholder="请选择" clearable>
            <el-option label="操作系统" value="01"></el-option>
            <el-option label="数据库" value="02"></el-option>
            <el-option label="中间件" value="03"></el-option>
            <el-option label="安全杀毒" value="04"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <!--
        <el-col :span="6">
          <el-form-item label="申请人"
                        label-width="120px"
                        prop="applied_by">
            <el-input v-model="formDetail.applied_by" disabled>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="申请日期"
                        label-width="120px"
                        prop="applied_at">
            <el-input v-model="formDetail.applied_at" disabled>
            </el-input>
          </el-form-item>
        </el-col>
      -->
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item
          label="软件品种名称"
          label-width="120px"
          prop="variety"
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.variety"
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.service"
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.configuration"
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.version"
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.manufacturer"
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
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.area"
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
          prop
          :rules="{
      required: true, message: '必填', trigger: 'blur'
    }"
        >
          <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.adv"
            placeholder="请填写授权方式"
          ></el-autocomplete>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-form-item label="备注" label-width="120px" prop="remark">
        <el-input type="textarea" :row="2" v-model="formDetail.remark"></el-input>
      </el-form-item>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="申请人" label-width="120px" prop="applied_by">
          <el-input v-model="formDetail.applied_by" disabled></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="申请日期" label-width="120px" prop="applied_at">
          <el-input v-model="formDetail.applied_at" disabled></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="办理记录" label-width="120px">
      <el-table border class="custom-table">
        <el-table-column type="index" label="序号" align="right" width="50"></el-table-column>
        <el-table-column label="办理类型" width="80"></el-table-column>
        <el-table-column label="办理单位" width="200"></el-table-column>
        <el-table-column label="办理人" width="80"></el-table-column>
        <el-table-column label="办理时间" width="80"></el-table-column>
        <el-table-column label="办理意见" min-width="200"></el-table-column>
        <el-table-column label="状态" width="80"></el-table-column>
      </el-table>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

const vuex = namespace('A21')

@Component
export default class Index extends Vue {
  @Prop({ type: Object, default: () => ({}) }) readonly formDetail //    详情表单

  // formDetail: any = {

  // }
  created() {
    this.formDetail.applied_by = '郭虎城'
    this.formDetail.applied_at = '2019-12-10 08:32:45'
  }
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
  createFilter(queryString) {
    return option => {
      return option.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }
  handleSelect() {}
}
</script>