<template>
  <el-dialog width="600px" :close-on-click-modal="false" :title="title" :visible.sync="visible">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="类目一名称" prop="category1" v-if="level === 1">
        <el-input v-model="form.category1" placeholder="请填写类目一名称，长度不能超过20个字符" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="类目一名称" prop="category1Selected" v-if="level === 2">
        <el-select v-model="form.category1Selected" placeholder="请选择类目一名称" clearable>
          <el-option label="服务器用" value="01"></el-option>
          <el-option label="个人终端" value="02"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类目二名称" prop="category2" v-if="level === 2">
        <el-input v-model="form.category2" placeholder="请填写类目二名称，长度不能超过20个字符" autocomplete="off" clearable></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark" type="textarea" :rows="2" placeholder="请填写软件类别备注，长度不能超过200个字符" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm">保存</el-button>
      <el-button @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { addCategory } from '@/api/01/a01'

interface IFormSoftwareCategory {
  category1: string
  category1Selected: string
  category2: string
  created_by: string
  remark: string
}

@Component
export default class DialogDetail extends Vue {
  @Prop({ type: Function, default: () => {} }) readonly onRefresh

  public $refs!: {
    form: any
  }

  visible: boolean = false
  level: number = 1
  title: string = ''
  form: IFormSoftwareCategory = {
    category1: '',
    category1Selected: '',
    category2: '',
    created_by: '',
    remark: ''
  }
  rules: object = {
    category1: [
      { required: true, message: '请输入类目一名称', trigger: 'blur' },
      { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }
    ],
    category1Selected: [{ required: true, message: '请选择类目一名称', trigger: 'change' }],
    category2: [
      { required: true, message: '请输入类目二名称', trigger: 'blur' },
      { min: 0, max: 20, message: '长度不能超过20个字符', trigger: 'blur' }
    ]
  }
  created() {}
  open(isNew: boolean, level: number) {
    if (isNew) {
      if (level === 1) {
        this.title = '新增类目一'
      } else {
        this.title = '新增类目二'
      }
    } else {
      if (level === 1) {
        this.title = '修改类目一'
      } else {
        this.title = '修改类目二'
      }
    }
    this.level = level
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
        this.form.created_by = sessionStorage.getItem('user') || '未知'
        addCategory(this.form)
          .then(res => {
            this.$alert('类目保存成功！', '操作成功', {
              confirmButtonText: '确定',
              type: 'success'
            })
            this.visible = false
            this.onRefresh()
          })
          .catch(err => {
            this.$alert('类目保存失败！', '操作失败', {
              confirmButtonText: '确定',
              type: 'error'
            })
          })
      }
    })
  }
}
</script>
