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
          <el-form-item label="图号" label-width="40px" prop="name">
            <el-input class="inline-input" style="width:120px" v-model="basics.name" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="产品名称" label-width="80px" prop="type">
            <el-input v-model="basics.order_unit" style="width:120px" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="数量" label-width="100px" prop="area">
            <el-input v-model="basics.num" style="width:120px" placeholder="产品工号" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form class="information">
      <el-form-item label="合格" prop="pp" label-width="150px">
        <el-input-number v-model="form.n" size="small" :min="0"></el-input-number>
      </el-form-item>

      <el-form-item label="工废" prop="name" label-width="150px">
        <el-input-number v-model="form.name" size="small" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="返修" prop="aa" label-width="150px">
        <el-input-number v-model="form.aa" size="small" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="废料" prop="num" label-width="150px">
        <el-input-number v-model="form.num" size="small" :min="0"></el-input-number>
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
    name: 0,
    n: 0,
    aa: 0,
    num: 0
  }
  basics: any = {
    name: 'D1118-02',
    order_unit: 'NP-700齿轮',
    num: '5'
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

  handle: any[] = [
    {
      handle_name: '系统数据',
      handle_by: ''
    },
    {
      handle_name: '',
      handle_by: ''
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
