<template>
  <el-dialog width="900px" :close-on-click-modal="false" :title="title" :visible.sync="visible">
    <el-tabs v-model="first">
      <el-tab-pane label="通知单详情" name="first">
        <el-form>
        <el-row>
          <el-form-item label="基础信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="产品信息" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="办理记录" style=" width:100%;font-weight:bold;background:#fafafa"></el-form-item>
        </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="审批结论" name="second">
        <el-form>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="审批结论"
                label-width="120px"
                prop="con"
                :rules="{required: true, message: '未填写审批结论', trigger: 'blur' }"
              >
                <el-autocomplete
                  class="inline-input"
                  style="width:100%"
                  clearable
                  v-model="formDetail.con"
                  placeholder="请填写审批结论"
                ></el-autocomplete>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="审批意见" label-width="120px" prop>
                <!-- <el-autocomplete
            class="inline-input"
            style="width:100%"
            clearable
            v-model="formDetail.adv"
            placeholder="请填写审批结论"
                ></el-autocomplete>-->
                <el-input type="textarea" :row="3" v-model="formDetail.adv"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="办理记录" label-width="120px">
            <el-table :data="datas" border class="custom-table">
              <el-table-column type="index" label="序号" align="right" width="50"></el-table-column>
              <el-table-column label="办理类型" prop="type" width="80"></el-table-column>
              <el-table-column label="办理单位" prop="unit" width="220"></el-table-column>
              <el-table-column label="办理人" prop="handled_by" width="80"></el-table-column>
              <el-table-column label="办理时间" prop="handled_at" width="110"></el-table-column>
              <el-table-column label="办理意见" prop="suggestion" min-width="80"></el-table-column>
              <!-- <el-table-column label="状态" prop="state" width="70"></el-table-column> -->
            </el-table>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">保存</el-button>
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

  datas: any[] = []
  formDetail: any = {
    con: ''
  }
  first: string = 'first'
  visible: boolean = false
  title: string = '审核生产通知单'

  open() {
    this.visible = true
  }

  submitForm() {}
  close() {}
}
</script>