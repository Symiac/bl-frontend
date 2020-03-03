<template>
  <el-dialog
    width="500px"
    style="margin-top:60px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
  >
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="图号" prop="pp">
        <el-select
          class="inline-input"
          v-model="form.pp"
          placeholder="输入图号"
          style="width:150px"
        >
          <el-option label="BL1901" value="01"></el-option>
          <el-option label="BL1902" value="02"></el-option>
          <el-option label="（历史记录）" value="03"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="品名" prop="name">
        <el-input
                class="inline-input"
                style="width:150px"
                v-model="form.name"
                placeholder="输入品名"
              ></el-input>
      </el-form-item>
      <el-form-item label="材质" prop="materialQuality">
        <el-input
                class="inline-input"
                style="width:150px"
                v-model="form.materialQuality"
                placeholder="输入材质"
              ></el-input>
      </el-form-item>
      <el-form-item label="数量" prop="num">
        <el-input
                class="inline-input"
                style="width:150px"
                v-model="form.num"
                placeholder="输入数量"
              ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="workingNumber">
         <el-input style="width:200px" type="textarea" :row="5" v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">确定</el-button>
      <el-button @click="close">取消</el-button>

    </div>
  </el-dialog>
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
  title: string = '新增产品'
  level: number = 1
  form: object = {
    
  }
  rules: object = {
    pp: [{ required: true, message: '请填写', trigger: 'blur' }],
    num: [{ required: true, message: '', trigger: 'blur' }],
    aa: [{ required: true, message: '', trigger: 'blur' }],
    name: [{ required: true, message: '', trigger: 'blur' }],
    remark: [{ required: true, message: '', trigger: 'blur' }]
  }
  
  open() {
    this.visible = true
  }
  close() {
    this.visible = false
  }
   save() {
    this.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
}
</script>

<style lang="scss">
</style>