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
       
      </el-row>
    </el-form>
    <el-form class="four" label-width="200px">
      <el-form-item label="图号" prop="pp">
        <el-select
          class="inline-input"
          v-model="form.drawingNumber"
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
      <el-form-item label="数量" prop="number">
                <el-input-number v-model="form.number" size="small"  style="width:150px"  :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="材质" prop="materialQuality">
                <el-input v-model="form.materialQuality" placeholder="输入材质"   style="width:150px" ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
         <el-input style="width:200px" type="textarea" :row="5" v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="save">提交</el-button>
      <el-button @click="close">关闭</el-button>
    </div>
    <four ref="add"></four>
  </el-dialog>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Four from './four.vue'

@Component({
  components: {
    Four
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
    add: any
  }

  title: string = '添加工装件'
  visible: boolean = false
  formDetail: any = {
    con: ''
  }
  form: any = {
  
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
      this.title = '添加工装件'
    } else {
      this.title = '修改工装件'
    }
    this.visible = true
  }

  save() {
     this.visible = false
  }
  close() {
    this.visible = false
  }
}
</script>

<style lang="scss">
.four{
    margin-top: 30px;
        .el-form-item {
          margin-bottom: 22px;
        }
    
}
</style>
