<template>
  <el-dialog width="600px"
             class="dialog-export"
             style="margin-top:60px"
             :close-on-click-modal="false"
             :title="title"
             :visible.sync="visible">
    <el-form :model="form"
             :rules="rules"
             ref="form"
             label-width="80px">
      <el-form-item label="文件夹"
                    prop="path">
        <el-input v-model="form.path"
                  placeholder="请选择要保存的文件夹"
                  autocomplete="off"
                  clearable>
          <el-button slot="append"
                     style="font-size:16px"
                     icon="el-icon-folder"
                     @click="folder"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="文件名"
                    prop="file">
        <el-input v-model="form.file"
                  placeholder="请填写要保存的文件名，长度不能超过255个字符"
                  autocomplete="off"
                  clearable>
          <template slot="append">.xlsx</template></el-input>
      </el-form-item>
      <!-- <a href="/get/Downloads/MySQL-8.0/mysql-8.0.18-winx64.zip">No thanks, just start my download.</!--> -->
      <a href="data:text/txt;charset=utf-8,测试下载纯文本"
         download="测试.txt"></a>
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button type="primary"
                 @click="submitForm">导出</el-button>
      <el-button @click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

interface IExportForm {
  path: string
  file: string
}

@Component
export default class DialogExport extends Vue {
  public $refs!: {
    form: any
  }
  visible: boolean = false
  level: number = 1
  title: string = '导出EXCEL'
  form: IExportForm = {
    path: '',
    file: ''
  }
  rules: object = {
    path: [{ required: true, message: '请选择要保存的文件夹', trigger: 'change' }],
    file: [
      { required: true, message: '请输入要保存的文件名', trigger: 'blur' },
      { min: 0, max: 20, message: '长度不能超过255个字符', trigger: 'blur' }
    ]
  }
  open() {
    this.visible = true
  }
  close() {
    this.$refs.form.resetFields()
    this.visible = false
  }
  folder() {
    // var inputObj = document.createElement('input')
    // inputObj.setAttribute('id', '_ef')
    // inputObj.setAttribute('type', 'file')
    // inputObj.setAttribute('style', 'visibility:hidden')
    // document.body.appendChild(inputObj)
    // inputObj.click()
    // inputObj.value
    // try {
    //   let msg = '\u8bf7\u9009\u62e9\u6587\u4ef6\u5939'
    //   let shell = new ActiveXObject('Shell.Application')
    //   let folder = shell.BrowseFolder(0, msg, 0)
    //   if(folder !== null) {
    //     folder = folder.items()
    //     folder = folder.item()
    //     folder = folder.Path
    //     if(folder.charAt(folder.length - 1) != '\\') {
    //       folder = folder + '\\'
    //     }
    //     this.form.path =folder
    //     return folder
    //   }
    // }
    // catch(e) {
    //   this.$message.warning(e.message)
    // }
  }
  submitForm() {
    this.$refs.form.validate((valid: any) => {
      if (valid) {
        console.log(this.form)
        this.$alert('导出成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
        this.visible = false
      }
    })
  }
}
</script>

<style lang="scss">
.dialog-export {
  .el-input-group__append {
    width: 28px;
    padding: 0 10px;
    text-align: center;
  }
}
</style>