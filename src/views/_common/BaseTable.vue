<template>
  <div class="base-table">
    <el-table height="100%"
              :border="border"
              :stripe="stripe"
              show-overflow-tooltip
              v-loading="loading"
              :data="rows"
              :default-sort="defaultSort"
              row-key="id"
              @selection-change="selectionChange"
              @row-dblclick="rowDblClick">
      <el-table-column v-if="selectable"
                      type="selection"
                      fixed
                      width="40">
      </el-table-column>
      <el-table-column v-if="index"
                      type="index"
                      fixed
                      label="序号"
                      align="right"
                      width="50">
      </el-table-column>
      <template v-for="item in columns">
        <el-table-column v-if="item.children"
                        :key="item.prop"
                        v-bind="item">
          <el-table-column v-for="subItem in item.children"
                          :key="subItem.prop"
                          v-bind="subItem">
          </el-table-column>
        </el-table-column>
        <el-table-column v-else-if="item.useTemplate"
                        :key="item.prop"
                        v-bind="item">
          <template slot-scope="scope"
                    :prop="item.prop">
            <i v-if="scope.row.inForce" class="el-icon-check inforce"></i>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.select"
                        :key="item.prop"
                        v-bind="item">
          <template slot-scope="scope"
                    :prop="item.prop">
            <el-select v-model="scope.row[item.prop]"
                       :disabled="scope.row[item.inherited]"
                       @change="onSelectChange">
              <el-option v-for="option in item.options"
                         :key="option.value"
                         :label="option.label"
                         :value="option.value"></el-option>
            </el-select>
            <!-- <el-select v-model="scope.row[item.prop]" @change="onSelectChange">
              <el-option label="股份集中采购" value="01"></el-option>
              <el-option label="自主采购" value="02"></el-option>
            </el-select> -->
          </template>
        </el-table-column>
        <el-table-column v-else
                        :key="item.prop"
                        v-bind="item">
        </el-table-column>
      </template>
    </el-table>
    <el-pagination v-if="pagination"
                  @size-change="sizeChange"
                  @current-change="currentChange"
                  background
                  :hide-on-single-page="true"
                  :current-page="1"
                  :page-sizes="[10, 20, 50, 100]"
                  :page-size="20"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="84">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { Notification, Message } from 'element-ui'
import { get } from 'lodash'

@Component
export default class BaseTable extends Vue {
  @Prop({ type: Boolean, default: true }) readonly border                 // 是否显示选择列
  @Prop({ type: Boolean, default: true }) readonly stripe                 // 是否显示选择列
  @Prop({ type: Boolean, default: true }) readonly selectable             // 是否显示选择列
  @Prop({ type: Boolean, default: true }) readonly index                  // 是否显示序号列
  @Prop({ type: Boolean, default: false }) readonly loading               // 是否加载
  @Prop({ type: Boolean, default: true }) readonly doubleClickable        // 表格行是否可以双击
  @Prop({ type: Array, default: () => [] }) readonly columns              // 表格数据列（表头字段属性）
  @Prop({ type: Array, default: () => [] }) readonly rows                 // 表格数据行
  @Prop({ type: Object, default: () => ({}) }) readonly request           // 表格数据接口
  @Prop({ type: Boolean, default: false }) readonly pagination            // 表格是否显示分页
  @Prop({
    type: Object,
    default: () => ({
      prop: 'create_at',
      order: 'descending'
    })
  })
  readonly defaultSort    // 表格默认排序列

  selection: any[] = []             // 表格数据行选集
  selectionId: any[] = []           // 表格数据行id选集
  selected: boolean = false         // 表格数据行选集是否不为空
  singleSelected: boolean = false   // 表格数据行选集是否为单选

  created() {
    this.request.query && this.request.query()
  }
  selectionChange(selection: any) {
    this.selection = selection
    this.selectionId = selection.map(item => item.id)
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
    console.log(selection)
    this.$emit('selection-change', this.selected)
  }
  rowDblClick(row) {
    // this.doubleClickable && this.edit(row)
    this.$emit('row-dblclick', row)
  }
  edit(row) {
    console.log(`修改行: ${row.id}`)
  }
  onSelectChange(value) {
    console.log(value)
    console.log(this.rows)
  }
}
</script>

<style lang="scss">
.base-table {
  height: 100%;
  .el-select {
    .el-input__inner {
      border: none;
      background: transparent;
      padding: 0 !important;
    }
  }
  .inforce {
    font-size: 18px;
    font-weight: bold;
    color: #67C23A;
    vertical-align: middle;
  }
}
</style>