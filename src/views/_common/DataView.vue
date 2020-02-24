<template>
  <layout class="data-view"
          :operation="operation"
          :search="search"
          :showSearch="showSearch"
          :nav="nav">
    <template v-if="operation"
              slot="operation">
      <el-button-group>
        <el-button v-if="buttonAdd"
                   type="primary"
                   @click="add">新增</el-button>
        <el-button v-if="buttonEdit"
                   type="primary"
                   :disabled="disableEdit"
                   @click="edit">修改</el-button>
        <el-button v-if="buttonRemove"
                   type="primary"
                   :disabled="disableRemove"
                   @click="remove">删除</el-button>
        <el-button v-if="buttonEnable"
                   type="primary"
                   :disabled="disableEnable"
                   @click="enable">启用</el-button>
        <el-button v-if="buttonDisable"
                   type="primary"
                   :disabled="disableDisable"
                   @click="disable">禁用</el-button>
        <el-button v-if="buttonSubmit"
                   type="primary"
                   :disabled="disableSubmit"
                   @click="submit">提交</el-button>
        <el-button v-if="buttonReview"
                   type="primary"
                   :disabled="disableReview"
                   @click="review">审核</el-button>
        <el-button v-if="buttonRefresh"
                   type="primary"
                   @click="refresh">刷新</el-button>
        <el-button v-if="detailCustom" type="primary"
                   @click="saveDetailCustom">保存</el-button>
      </el-button-group>

      <div v-if="search && searchSwitch" class="collapse-search" @click="toggleSearch">
        <span>隐藏查询</span><i class="el-collapse-item__arrow el-icon-arrow-right is-active"></i>
      </div>
      
    </template>
    <template slot="dialog">
      <div class="dialog-detail">
        <el-dialog :width="dialogDetailWidth"
                   :fullscreen="dialogFullscreen"
                   :custom-class="customClass"
                   :close-on-click-modal="false"
                   :title="detailTitle"
                   :append-to-body="appendToBody"
                   :visible.sync="visibleDialogDetail">
          <el-form v-if="!detailTable && !detailCustom"
                   ref="formDetail"
                   :model="formDetail"
                   :rules="rulesDetail"
                   :label-width="formDetailLabelWidth">
            <slot name="detail"></slot>
          </el-form>
          <slot v-else-if="detailTable"
                name="detail-table"></slot>
          <slot v-else
                name="detail-custom">
          </slot>
          <div v-if="!detailTable && !detailCustom"
               slot="footer"
               class="dialog-footer">
            <el-button type="primary"
                        @click="saveDetail">保存</el-button>
            <el-button @click="closeDetail">取消</el-button>
          </div>
        </el-dialog>
      </div>
    </template>
    <template v-if="search"
              slot="search">
      <el-form inline
               ref="formQuery"
               :model="formQuery">
        <div style="width:1000px">
          <slot name="query"></slot>
        </div>
        <div>
          <el-button @click="clearQuery">清空</el-button>
          <el-button type="primary"
                     @click="query">查询</el-button>
          <el-button v-if="showAdvancedQuery"
                     plain
                     @click="openAdvancedQuery">高级查询</el-button>
          <el-button v-if="buttonExport"
                   type="primary">
          <a href="data:text/txt;charset=utf-8,导出下载"
             download="download.xlsx">导出</a></el-button>
        </div>
      </el-form>
      <el-dialog ref="dialogAdvancedQuery"
                 custom-class="dialog-advanced-query"
                 title="高级查询"
                 :visible.sync="visibleDialogAdvancedQuery">
        <el-form ref="formAdvancedQuery"
                 :model="formAdvancedQuery"
                 :label-width="formAdvancedQueryLabelWidth">
          <slot name="advancedQuery"></slot>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="clearAdvancedQuery">清空</el-button>
          <el-button type="primary"
                     @click="advancedQuery">查询</el-button>
          <el-button @click="closeAdvancedQuery">关闭</el-button>
        </div>
      </el-dialog>
    </template>
    <template v-if="nav" 
              slot="nav">
      <org-tree></org-tree>
    </template>
    <template slot="content">
      <slot v-if="contentCustom" name="content"></slot>
      <div v-else-if="table" class="">
        <el-table height="100%"
                  border
                  stripe
                  show-overflow-tooltip
                  v-loading="loading"
                  :data="rows"
                  :default-sort="defaultSort"
                  row-key="id"
                  @selection-change="selectionChange"
                  @row-dblclick="rowDoubleClick">
          <el-table-column v-if="selectable"
                          type="selection"
                          width="40">
          </el-table-column>
          <el-table-column v-if="index"
                          type="index"
                          
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
    
  </layout>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { Notification, Message } from 'element-ui'
import { get } from 'lodash'
import Layout from '@/views/_common/Layout.vue'
import OrgTree from '@/views/_common/OrgTree.vue'

@Component({
  components: {
    Layout,
    OrgTree
  }
})
export default class DataView extends Vue {
  @Prop({ type: Boolean, default: true }) readonly operation //    是否显示操作按钮
  @Prop({ type: Boolean, default: true }) readonly search //    是否显示搜索区
  @Prop({ type: Boolean, default: true }) readonly searchSwitch //    是否显示搜索区
  @Prop({ type: Boolean, default: false }) readonly nav //    是否显示搜索区
  @Prop({ type: Boolean, default: false }) readonly showAdvancedQuery //    是否显示高级查询按钮
  @Prop({ type: Boolean, default: true }) readonly defaultSearch //    是否显示搜索区
  @Prop({ type: Boolean, default: true }) readonly content //    是否显示内容区
  @Prop({ type: Boolean, default: true }) readonly table //    是否显示表格
  @Prop({ type: Boolean, default: false }) readonly pagination //    是否显示分页
  @Prop({ type: Boolean, default: true }) readonly buttonAdd //    是否显示新增按钮
  @Prop({ type: Boolean, default: true }) readonly buttonEdit //    是否显示修改按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonEditDisabled //    是否禁用修改按钮
  @Prop({ type: Boolean, default: true }) readonly buttonRemove //    是否显示删除按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonRemoveDisabled //    是否禁用删除按钮
  @Prop({ type: Boolean, default: true }) readonly buttonEnable //    是否显示启用按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonEnableDisabled //    是否禁用启用按钮
  @Prop({ type: Boolean, default: true }) readonly buttonDisable //    是否显示禁用按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonDisableDisabled //    是否禁用禁用按钮
  @Prop({ type: Boolean, default: false }) readonly buttonSubmit //    是否显示提交按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonSubmitDisabled //    是否显示提交按钮
  @Prop({ type: Boolean, default: false }) readonly buttonReview //    是否显示提交按钮
  @Prop({ type: Boolean, default: false }) readonly isButtonReviewDisabled //    是否显示提交按钮
  @Prop({ type: Boolean, default: true }) readonly buttonExport //    是否显示导出按钮
  @Prop({ type: Boolean, default: true }) readonly buttonRefresh //    是否显示刷新按钮

  @Prop({ type: Boolean, default: true }) readonly doubleClickable //    表格行是否可以双击

  @Prop({ type: Boolean, default: false }) readonly detailTable //    详情是否是表格
  @Prop({ type: Boolean, default: false }) readonly detailCustom //    详情是否是自定义
  @Prop({ type: Boolean, default: false }) readonly appendToBody //    详情是否二级dialog
  @Prop({ type: Boolean, default: false }) readonly contentCustom //    内容区是否自定义
  @Prop({ type: Boolean, default: true }) readonly dialogFooter //    是否显示对话框底部

  @Prop({ type: Object, default: () => ({}) }) readonly formQuery //    查询表单
  @Prop({ type: Object, default: () => ({}) }) readonly formAdvancedQuery //    高级查询表单
  @Prop({ type: Object, default: () => ({}) }) readonly formDetail //    详情表单

  @Prop({ type: Boolean, default: false }) readonly dialogFullscreen //    详情对话框全屏
  @Prop({ type: String, default: '600px' }) readonly dialogDetailWidth //    详情对话框宽度
  @Prop({ type: String, default: '120px' }) readonly formDetailLabelWidth //    详情表单Label宽度
  @Prop({ type: String, default: '120px' }) readonly formAdvancedQueryLabelWidth //    详情表单Label宽度
  @Prop({ type: String, default: '' }) readonly title //    详情title
  @Prop({ type: Object, default: () => ({}) }) readonly rulesDetail //    详情表单

  @Prop({ type: Boolean, default: true }) readonly selectable //    是否显示选择列
  @Prop({ type: Boolean, default: true }) readonly index //    是否显示序号列

  @Prop({ type: Boolean, default: false }) readonly loading // 是否加载
  @Prop({ type: Array, default: () => [] }) readonly columns // 表格数据
  @Prop({ type: Array, default: () => [] }) readonly rows // 表格数据
  @Prop({ type: Object, default: () => ({}) }) readonly request // 表格数据
  @Prop({
    type: Object,
    default: () => ({
      prop: 'create_at',
      order: 'descending'
    })
  })
  readonly defaultSort // 默认排序字段规则 prop: field_name, order: 'ascend/descend'

  $refs!: {
    dialogAdvancedQuery: any
    formQuery: any
    formAdvancedQuery: any
  }
  showSearch: boolean = true
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  selectionId: string[] = []
  visibleDialogAdvancedQuery: boolean = false
  visibleDialogDetail: boolean = false
  detailTitle: string = ''

  created() {
    this.request.query && this.request.query()
  }
  add() {
    this.detailTitle = `新增${this.title}`
    console.log(this.detailTitle)
    this.visibleDialogDetail = true
  }
  edit(row) {
    console.log(row)
    this.detailTitle = `修改${this.title}`
    // const selectedRow = row ? row : this.selection[0]
    // console.log(selectedRow)
    // for(let key in this.formDetail){
    //   delete this.formDetail[key]
    // }
    // console.log(this.formDetail)
    // Object.assign(this.formDetail, selectedRow)
    // console.log(this.formDetail)

    this.visibleDialogDetail = true
    console.log(this.visibleDialogDetail)
  }
  remove() {
    this.$alert('您选了“启用”或“禁用”的数据，不能删除！', '错误提示', {
      confirmButtonText: '确定',
      type: 'error',
      callback: action => {
        if (action === 'confirm') {
          this.$confirm('此操作将永久删除该数据, 是否继续?', '操作提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
          })
            .then(() => {
              this.$alert('数据删除成功！', '操作成功', {
                confirmButtonText: '确定',
                type: 'success'
              })
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            })
        }
      }
    })
  }
  enable() {
    const length = this.selection.length
    let error = false
    if (length === 0) {
      this.$alert('未选择数据，请先选择！', '操作提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })
    } else {
      error = this.selection.some((item: any) => {
        item.state === '启用'
      })
      if (error) {
        this.$alert('您选择了不是 “未启用” 或 “禁用” 状态的数据，不能进行启用操作，请重新选择！', '错误提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
      } else {
        this.$confirm('是否启用所选数据?', '操作提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        })
          .then(() => {
            this.$alert('启用成功！', '操作成功', {
              confirmButtonText: '确定',
              type: 'success'
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消启用'
            })
          })
      }
    }
  }
  disable() {
    this.$alert('您选择了2条 “禁用” 状态的数据，不能进行禁用操作，请重新选择！', '错误提示', {
          confirmButtonText: '确定',
          type: 'error'
        })
  }
  submit() {}
  review() {
    this.detailTitle = '新增审核'
    this.visibleDialogDetail = true
  }
  refresh() {
    this.request.query && this.request.query()
  }
  clearQuery() {
    this.$refs.formQuery.resetFields()
  }
  clearAdvancedQuery() {
    this.$refs.formAdvancedQuery.resetFields()
  }
  query() {
    console.log(this.formQuery)
    this.request.query && this.request.query(this.formQuery)
  }
  advancedQuery() {
    console.log(this.formAdvancedQuery)
    this.request.query && this.request.query(this.formAdvancedQuery)
  }
  openAdvancedQuery() {
    this.visibleDialogAdvancedQuery = true
  }
  closeAdvancedQuery() {
    this.visibleDialogAdvancedQuery = false
  }
  openDetail() {
    this.visibleDialogDetail = true
  }
  closeDetail() {
    this.visibleDialogDetail = false
  }
  saveDetail() {
    console.log(this.formDetail)
    this.visibleDialogDetail = false
  }
  saveDetailCustom() {
    
  }
  selectionChange(selection: any) {
    this.selection = selection
    this.selectionId = selection.map(item => item.id)
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
  }
  sizeChange() {}
  currentChange() {}
  rowDoubleClick(row) {
    this.doubleClickable && this.edit(row)
  }
  toggleSearch(e) {
    console.dir(e.target)
    let self : HTMLElement | null = null
    let parent : HTMLElement | null = null
    let search : ChildNode | null = null

    if(e.target.tagName === 'DIV') {
      self = e.target
      parent = e.target.parentNode
    }
    else {
      self = e.target.parentNode
      parent = e.target.parentNode.parentNode
    }
    search = parent ? parent.nextSibling : null
    console.dir(self)
    console.dir(parent)
    console.dir(search)
    this.showSearch = !this.showSearch
    // const el: HTMLElement | null = document.querySelector('.search')
    const i: HTMLElement | null = self && self.querySelector('.el-collapse-item__arrow')
    const span: HTMLElement | null = self && self.querySelector('.collapse-search span')

    if(this.showSearch) {
      // @ts-ignore
      search && (search.style.maxHeight = '100px')
      i && i.classList.add('is-active')
      span && (span.textContent = '隐藏查询')
    }
    else {
      // @ts-ignore
      search && (search.style.maxHeight = '0')
      i && i.classList.remove('is-active')
      span && (span.textContent = '显示查询')
    }
  }
  get disableEdit() {
    return !this.singleSelected || this.isButtonEditDisabled
  }
  get disableRemove() {
    return !this.selected || this.isButtonRemoveDisabled
  }
  get disableEnable() {
    return !this.selected || this.isButtonEnableDisabled
  }
  get disableDisable() {
    return !this.selected || this.isButtonDisableDisabled
  }
  get disableSubmit() {
    return !this.selected || this.isButtonSubmitDisabled
  }
  get disableReview() {
    return !this.selected || this.isButtonReviewDisabled
  }
  get customClass() {
    if(this.dialogFullscreen) {
      return '.el-dialog-fullscreen'
    }
    else {
      return this.detailTable||this.detailCustom?'el-dialog-table':'el-dialog-form'
    }
  }
}
</script>

<style lang="scss">
.data-view {
  .dialog-detail {
    .el-dialog__wrapper {
      overflow: hidden;
      .el-dialog-form {
        height: 90vh;
        margin-top: 5vh !important;
        display: flex;
        flex-direction: column;
        .el-dialog__body {
          flex: 1;
          // height: 450px;
          overflow: auto;
        }
        .el-dialog__footer {
          border-top: 1px solid #eee;
          padding: 10px 20px;
          background: #fefefe;
        }
        .custom-table {
          // 取消表格下边线
          tbody tr:last-child td {
            border-bottom: none !important;
          }
        }
      }
      
    }
  }
}
.el-dialog-table {
  height: 90vh;
  margin-top: 5vh !important;
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex:1;
    padding: 10px;
    overflow:auto;
  }
}
.el-dialog-fullscreen {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .el-dialog__body {
    flex:1;
    padding: 10px;
    overflow:auto;
  }
}
</style>