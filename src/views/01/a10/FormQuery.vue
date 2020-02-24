<template>
  <el-form inline
           ref="form"
           :model="form">
    <div>
      <el-form-item prop="name">
        <el-input v-model="form.name"
                  placeholder="软件名称"></el-input>
      </el-form-item>
      <el-form-item prop="post">
        <el-input v-model="form.keyword"
                  placeholder="模糊查询"></el-input>
      </el-form-item>
    </div>
    <div>
      <el-button @click="query">清空</el-button>
      <el-button type="primary"
                 @click="query">查询</el-button>
      <el-button plain
                 @click="advancedQuery">高级查询</el-button>
      <dialog-advanced-query ref="dialogAdvancedQuery">
        <template slot="formAdvancedQuery">
          <el-form>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>

          </el-form>
        </template>
      </dialog-advanced-query>
    </div>
  </el-form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import DialogAdvancedQuery from './DialogAdvancedQuery.vue'

@Component({
  components: {
    DialogAdvancedQuery
  }
})
export default class DialogDetail extends Vue {
  public $refs!: {
    form: any
    dialogAdvancedQuery: any
  }

  form: object = {
    name: '',
    keyword: ''
  }
  query() {}
  advancedQuery() {
    this.$refs.dialogAdvancedQuery.open()
  }
}
</script>