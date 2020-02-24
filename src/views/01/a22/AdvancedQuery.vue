<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form-item label="类目一名称"
                      prop="category1">
          <el-select v-model="formAdvancedQuery.category1"
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
          <el-select v-model="formAdvancedQuery.category2"
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
      <el-input v-model="formAdvancedQuery.variety"
          placeholder="请填写软件品种"
          autocomplete="off"
          clearable></el-input>
    </el-form-item>
    <el-row>
      <el-form-item label="软件规格"
                    prop="configuration">
        <el-col :span="15">
          <el-form-item prop="configuration">
            <el-input v-model="formAdvancedQuery.configuration"
                      placeholder="请填写软件功能配置"
                      autocomplete="off"
                      clearable></el-input>
            <!-- <el-autocomplete class="inline-input"
                              style="width:100%"
                              v-model="formAdvancedQuery.configuration"
                              :fetch-suggestions="querySearchConfiguration"
                              placeholder="型号，如标准版、专业版等"
                              @select="handleSelect"></el-autocomplete> -->
          </el-form-item>
        </el-col>
        <el-col :span="8"
                :offset="1">
          <el-form-item prop="version">
            <el-input v-model="formAdvancedQuery.version"
                      placeholder="请填写软件版本"
                      autocomplete="off"
                      clearable></el-input>
            <!-- <el-autocomplete class="inline-input"
                              style="width:100%"
                              v-model="formAdvancedQuery.version"
                              :fetch-suggestions="querySearchVersion"
                              placeholder="版本，如V2019等"
                              @select="handleSelect"></el-autocomplete> -->
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-row>
    <el-form-item label="备注">
      <el-input v-model="formAdvancedQuery.remark"
                type="textarea"
                :rows="2"
                placeholder="请填写软件规格备注，长度不能超过200个字符"
                autocomplete="off"></el-input>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

const vuex = namespace('A21')

@Component
export default class Index extends Vue {
  @Prop({ type: Object, default: () => ({}) }) readonly formAdvancedQuery //    高级查询表单
}
</script>