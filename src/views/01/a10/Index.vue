<template>
  <data-view
    :columns="columns"
    :rows="rows"
    :request="request"
    :loading="loading"
    :button-add="false"
    :button-edit="false"
    :button-remove="false"
    :form-query="formQuery"
    :show-advanced-query="false"
    :form-advanced-query="formAdvancedQuery"
    :doubleClickable="false"

  >
    <template slot="query">
      <el-form-item label prop="category1" >
        <el-select style="width:120px" v-model="formAdvancedQuery.category1" placeholder="类目一名称" clearable>
          <el-option label="服务器用" value="01"></el-option>
          <el-option label="个人终端" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label prop="category2">
        <el-select style="width:120px" v-model="formAdvancedQuery.category2" placeholder="类目二名称" clearable>
          <el-option label="操作系统" value="01"></el-option>
          <el-option label="数据库" value="02"></el-option>
          <el-option label="中间件" value="03"></el-option>
          <el-option label="安全杀毒" value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop>
        <el-input style="width:120px" v-model="formQuery.variety" clearable placeholder="软件品种"></el-input>
      </el-form-item>

      <el-form-item prop>
        <el-input style="width:100px" v-model="formQuery.keyword" clearable placeholder="功能配置"></el-input>
      </el-form-item>
      <el-form-item prop>
        <el-input style="width:100px" v-model="formQuery.name" clearable placeholder="版本"></el-input>
      </el-form-item>
<el-form-item prop>
        <el-input style="width:100px" v-model="formQuery.manufacturer" clearable placeholder="生产厂商"></el-input>
      </el-form-item>
      <!--
      <el-form-item style="padding-left:20px">
        <el-checkbox checked>启用</el-checkbox>
        <el-checkbox checked>禁用</el-checkbox>
      </el-form-item>
      -->
      <el-form-item>
        <el-select
          v-model="formQuery.state"
          style="width:150px"
          placeholder="状态"
          clearable
          multiple
          collapse-tags
        >
          <el-option label="启用" value="01"></el-option>
          <el-option label="禁用" value="02"></el-option>
        </el-select>
      </el-form-item>
    </template>
    <template slot="advancedQuery">
      <el-form-item prop="name" label="软件名称">
        <el-input v-model="formAdvancedQuery.variety" placeholder="请输入软件名称"></el-input>
      </el-form-item>
      <el-form-item prop="state" label="状态">
        <el-input v-model="formAdvancedQuery.state" placeholder="请输入软件名称"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="类目一名称" prop="category1">
            <el-select v-model="formAdvancedQuery.category1" placeholder="请选择" clearable>
              <el-option label="服务器用" value="01"></el-option>
              <el-option label="个人终端" value="02"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类目二名称" prop="category2">
            <el-select v-model="formAdvancedQuery.category2" placeholder="请选择" clearable>
              <el-option label="操作系统" value="01"></el-option>
              <el-option label="数据库" value="02"></el-option>
              <el-option label="中间件" value="03"></el-option>
              <el-option label="安全杀毒" value="04"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item prop="variety" label="软件品种名称">
        <el-input v-model="formAdvancedQuery.variety" placeholder="请输入软件品种名称"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="软件配置" prop="configuration">
            <el-input v-model="formAdvancedQuery.configuration" placeholder="请输入软件配置"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="版本" prop="version">
            <el-input v-model="formAdvancedQuery.version" placeholder="请输入软件版本"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="生产厂商" prop="manufacturer">
            <el-select v-model="formAdvancedQuery.manufacturer" placeholder="请选择" clearable>
              <el-option label="微软" value="01"></el-option>
              <el-option label="IBM" value="02"></el-option>
              <el-option label="金山" value="03"></el-option>
              <el-option label="福昕" value="04"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产地" prop="area">
            <el-select v-model="formAdvancedQuery.area" placeholder="请选择" clearable>
              <el-option label="国内" value="01"></el-option>
              <el-option label="国外" value="02"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </template>
  </data-view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import DataView from '@/views/_common/DataView.vue'
import FormQuery from './FormQuery.vue'

const vuexA10 = namespace('A10')

@Component({
  components: {
    DataView,
    FormQuery
  }
})
export default class Index extends Vue {
  @vuexA10.State columns
  @vuexA10.State rows
  @vuexA10.State loading
  @vuexA10.Action COMMIT_QUERY
  @vuexA10.Action COMMIT_ADD
  @vuexA10.Action COMMIT_EDIT
  @vuexA10.Action COMMIT_REMOVE

  request: any = {
    query: this.COMMIT_QUERY,
    add: this.COMMIT_ADD,
    edit: this.COMMIT_EDIT,
    remove: this.COMMIT_REMOVE
  }
  formQuery: any = {}
  formAdvancedQuery: any = {}
  created() {
    console.log('a10')
    // console.log(this.request.query)
    // console.log(this.COMMIT_QUERY)
    this.request.query()
    // console.log(this.columns)
    // console.log(this.rows)
    // console.log(this.loading)
  }
}
</script>