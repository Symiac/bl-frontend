<template>
  <el-dialog custom-class="dialog-advanced-query"
             :title="title"
             :visible.sync="visible">
    <slot name="formAdvancedQuery"></slot>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DialogDetail extends Vue {
  visible: boolean = false
  title: string = '高级查询'
  open() {
    this.visible = true
  }
  close() {
    this.visible = false
  }
}
</script>

<style lang="scss">
.dialog-advanced-query {
}
</style>