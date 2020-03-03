<template>
  <el-dialog
    width="600px"
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="visible"
    append-to-body
  >
    <el-form class="information">
      <el-row>
        <el-col :span="7">
          <el-form-item label="图号" label-width="40px" prop="drawingNumber">
            <el-input class="inline-input" style="width:120px" v-model="basics.drawingNumber" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品名称" label-width="80px" prop="name">
            <el-input v-model="basics.name" style="width:120px" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="数量" label-width="100px" prop="number">
            <el-input v-model="basics.number" style="width:120px" placeholder="产品工号" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form class="information">
      <el-form-item label="合格" prop="numberQualified" label-width="150px">
        <el-input-number v-model="form.numberQualified"  style="width:150px" size="small" :min="0" :max="5"></el-input-number>
      </el-form-item>

      <el-form-item label="工废" prop="numberWasteIndustrial" label-width="150px">
        <el-input-number v-model="form.numberWasteIndustrial"  style="width:150px" size="small" :min="0" :max="5"></el-input-number>
      </el-form-item>
      <el-form-item label="返修" prop="numberRework" label-width="150px">
        <el-input-number v-model="form.numberRework"  style="width:150px" size="small" :min="0" :max="5"></el-input-number>
      </el-form-item>
      <el-form-item label="废料" prop="numberWasteMaterial" label-width="150px">
        <el-input-number v-model="form.numberWasteMaterial"  style="width:150px" size="small" :min="0" :max="5"></el-input-number>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
  </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

@Component({
  components: {}
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
    addProduct: any
  }

  title: string = '技术评审'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
  form: any = {
    numberQualified: 0,
    numberWasteIndustrial: 0,
    numberRework: 0,
    numberWasteMaterial: 0
  }
  basics: any = {
    drawingNumber: 'D1118-02',
    name: 'NP-700齿轮',
    number: '5'
  }
  product: any[] = [
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    },
    {
      orderNumber: ''
    }
  ]


  open(isNew = true) {
    if (isNew) {
      this.title = '技术评审'
    } else {
      this.title = ''
    }
    this.visible = true
  }

  save() {
    this.visible = false
    this.$alert('保存成功！', '操作成功', {
      confirmButtonText: '确定',
      type: 'success'
    })
  }
  close() {
    this.visible = false
  }
}
</script>

<style lang="scss">
</style>
