<template>
  <layout class="a01" :operation=false>
    <!--
    <template slot="operation">
      <el-button-group>
        <el-button type="primary"
                   @click="addCategory1">类目一</el-button>
        <el-button type="primary"
                   @click="addCategory2">类目二</el-button>
        <el-button type="primary"
                   :disabled="!singleSelected"
                   @click="edit(selection.children)">修改</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="remove">删除</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="enable">启用</el-button>
        <el-button type="primary"
                   :disabled="!selected"
                   @click="disable">禁用</el-button>
        <el-button type="primary"
                   @click="refresh">刷新</el-button>
        <el-button type="primary">
          <a href="data:text/txt;charset=utf-8,导出下载"
             download="软件类别.xlsx">导出</a>
        </el-button>
      </el-button-group>
    </template>
    -->
    <template slot="search">
      <el-form inline
               :model="formSearch">
        <div class="search-left">
          <el-form-item>
            <el-input v-model="formSearch.category1"
                      style="width:150px"
                      placeholder="类目一"
                      clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formSearch.category2"
                      style="width:150px"
                      placeholder="类目二"
                      clearable></el-input>
          </el-form-item>
          <el-form-item style="margin-right:20px">
            <el-input v-model="formSearch.keyword"
                      style="width:150px"
                      placeholder="模糊搜索"
                      clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="formSearch.apply"
              style="width:150px"
              placeholder="状态"
              clearable
              multiple
              collapse-tags
            >
              <el-option label="未启用" value="01"></el-option>
              <el-option label="启用" value="02"></el-option>
              <el-option label="禁用" value="03"></el-option>
            </el-select>
          </el-form-item>
        <!--
          <el-form-item>
            <el-checkbox checked>未启用</el-checkbox>
            <el-checkbox checked>启用</el-checkbox>
            <el-checkbox checked>禁用</el-checkbox>
          </el-form-item>
          -->
        </div>
        <div class="search-right">
          <el-button @click="clear">清空</el-button>
          <el-button type="primary"
                     @click="search">查询</el-button>
        </div>
      </el-form>
    </template>
    <template slot="content">
      <!-- <div class="table-wrap" v-loading="loading"> -->
      <el-table v-loading="loading"
                height="100%"
                border
                stripe
                :data="tableData"
                :default-sort="defaultSort"
                row-key="id"
                @selection-change="selectionChange">
        <el-table-column type="selection"
                         width="40"> </el-table-column>
        <el-table-column type="index"
                         label="序号"
                         align="right"
                         width="50"> </el-table-column>
        <el-table-column prop="category1"
                         label="类目一名称"
                         sortable
                         width="120">
          <template slot-scope="scope"
                    prop="category1">
            <span :style="scope.row.children ? 'color:#004098;cursor:pointer' : ''"
                  title="点击修改"
                  @click="edit(!!scope.row.children)">{{ scope.row.category1 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="类目二名称"
                         sortable
                         width="120">
          <template slot-scope="scope"
                    prop="category2">
            <span style="color:#004098;cursor:pointer"
                  title="点击修改"
                  @click="edit(false)">{{ scope.row.category2 }}</span>
          </template>
          <!-- <template slot-scope="scope"
                      prop="category2">
              <el-input class="inline-input"
                        v-model="scope.row.category2">{{scope.row.category2}}</el-input>
            </template> -->
        </el-table-column>
        <el-table-column prop="state"
                         label="状态"
                         align="center"
                         sortable
                         width="80"> </el-table-column>
        <el-table-column prop="created_by"
                         label="创建人"
                         sortable
                         align="center"
                         width="90"> </el-table-column>
        <el-table-column prop="created_at"
                         label="创建时间"
                         sortable
                         align="center"
                         width="110">
          <template slot-scope="scope"
                    prop="category2">
            <span>{{ scope.row.created_at | DayFormat }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updated_by"
                         label="最近更新人"
                         sortable
                         align="center"
                         width="120"> </el-table-column>
        <el-table-column prop="updated_at"
                         label="最近更新时间"
                         sortable
                         align="center"
                         width="130"> </el-table-column>
        <el-table-column prop="enabled_by"
                         label="启用人"
                         sortable
                         align="center"
                         width="90"> </el-table-column>
        <el-table-column prop="enabled_at"
                         label="启用时间"
                         sortable
                         align="center"
                         width="110"> </el-table-column>
        <el-table-column prop="disabled_by"
                         label="禁用人"
                         sortable
                         align="center"
                         width="90"> </el-table-column>
        <el-table-column prop="disabled_at"
                         label="禁用时间"
                         sortable
                         align="center"
                         width="110"> </el-table-column>
        <el-table-column prop="remark"
                         label="备注"
                         sortable
                         min-width="200"> </el-table-column>
      </el-table>
      <!-- </div> -->
      <dialog-detail ref="dialogDetail"
                     :on-refresh="refresh"></dialog-detail>
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { Notification, Message } from 'element-ui'
import { get } from 'lodash'
import { getCategories, removeCategories } from '@/api/01/a01.ts'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'

@Component({
  components: {
    Layout,
    DialogDetail
  }
})
export default class Index extends Vue {
  public $refs!: {
    dialogDetail: any
    dialogExport: any
  }

  loading: boolean = false
  level: boolean = true
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  selectionId: string[] = []
  formSearch: any = {
    category1: '',
    category2: '',
    keyword: ''
  }
  tableData: any[] = [
    // {
    //   id: 1,
    //   category1: '服务器用',
    //   category2: '',
    //   state: '启用',
    //   remark: '',
    //   creator: '郭虎城',
    //   createTime: '2019-10-03',
    //   updatePerson: '郭虎城',
    //   updateTime: '2019-10-07',
    //   enablePerson: '郭虎城',
    //   enableTime: '2019-10-07',
    //   disablePerson: '',
    //   disableTime: '',
    //   children: [
    //     {
    //       id: 11,
    //       category1: '服务器用',
    //       category2: '操作系统',
    //       state: '启用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-11',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-11',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-11',
    //       disablePerson: '',
    //       disableTime: ''
    //     },
    //     {
    //       id: 12,
    //       category1: '服务器用',
    //       category2: '数据库',
    //       state: '启用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-10',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-10',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-10',
    //       disablePerson: '',
    //       disableTime: ''
    //     },
    //     {
    //       id: 13,
    //       category1: '服务器用',
    //       category2: '中间件',
    //       state: '禁用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-09',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-10',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-10',
    //       disablePerson: '郭虎城',
    //       disableTime: '2019-10-11'
    //     },
    //     {
    //       id: 14,
    //       category1: '服务器用',
    //       category2: '安全杀毒',
    //       state: '启用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-08',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-10',
    //       enablePerson: '陆妍鲲',
    //       enableTime: '2019-10-11',
    //       disablePerson: '',
    //       disableTime: ''
    //     },
    //     {
    //       id: 15,
    //       category1: '服务器用',
    //       category2: '云服务',
    //       state: '禁用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-07',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-08',
    //       enablePerson: '陆妍鲲',
    //       enableTime: '2019-10-10',
    //       disablePerson: '郭虎城',
    //       disableTime: '2019-10-10'
    //     },
    //     {
    //       id: 16,
    //       category1: '服务器用',
    //       category2: '虚拟化',
    //       state: '禁用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-06',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-07',
    //       enablePerson: '陆妍鲲',
    //       enableTime: '2019-10-07',
    //       disablePerson: '陆妍鲲',
    //       disableTime: '2019-10-10'
    //     },
    //     {
    //       id: 17,
    //       category1: '服务器用',
    //       category2: '其他',
    //       state: '禁用',
    //       remark: '',
    //       creator: '陆妍鲲',
    //       createTime: '2019-10-05',
    //       updatePerson: '陆妍鲲',
    //       updateTime: '2019-10-05',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-06',
    //       disablePerson: '郭虎城',
    //       disableTime: '2019-10-08'
    //     }
    //   ]
    // },
    // {
    //   id: 2,
    //   category1: '个人终端',
    //   category2: '',
    //   state: '启用',
    //   remark: '',
    //   creator: '郭虎城',
    //   createTime: '2019-10-02',
    //   updatePerson: '郭虎城',
    //   updateTime: '2019-10-02',
    //   enablePerson: '郭虎城',
    //   enableTime: '2019-10-02',
    //   disablePerson: '',
    //   disableTime: '',
    //   children: [
    //     {
    //       id: 21,
    //       category1: '个人终端',
    //       category2: '操作系统',
    //       state: '启用',
    //       remark: '',
    //       creator: '张羽',
    //       createTime: '2019-10-10',
    //       updatePerson: '张羽',
    //       updateTime: '2019-10-10',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-11',
    //       disablePerson: '',
    //       disableTime: ''
    //     },
    //     {
    //       id: 22,
    //       category1: '个人终端',
    //       category2: '日常办公',
    //       state: '启用',
    //       remark: '',
    //       creator: '张羽',
    //       createTime: '2019-10-09',
    //       updatePerson: '张羽',
    //       updateTime: '2019-10-10',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-11',
    //       disablePerson: '',
    //       disableTime: ''
    //     },
    //     {
    //       id: 23,
    //       category1: '个人终端',
    //       category2: '专业软件',
    //       state: '禁用',
    //       remark: '',
    //       creator: '张羽',
    //       createTime: '2019-10-09',
    //       updatePerson: '张羽',
    //       updateTime: '2019-10-10',
    //       enablePerson: '郭虎城',
    //       enableTime: '2019-10-11',
    //       disablePerson: '郭虎城',
    //       disableTime: '2019-10-12'
    //     },
    //     {
    //       id: 24,
    //       category1: '个人终端',
    //       category2: '安全防护',
    //       state: '禁用',
    //       remark: '',
    //       creator: '张羽',
    //       createTime: '2019-10-08',
    //       updatePerson: '张羽',
    //       updateTime: '2019-10-08',
    //       enablePerson: '张羽',
    //       enableTime: '2019-10-08',
    //       disablePerson: '张羽',
    //       disableTime: '2019-10-10'
    //     },
    //     {
    //       id: 25,
    //       category1: '个人终端',
    //       category2: '其他',
    //       state: '未启用',
    //       remark: '',
    //       creator: '郭虎城',
    //       createTime: '2019-10-07',
    //       updatePerson: '郭虎城',
    //       updateTime: '2019-10-09',
    //       enablePerson: '',
    //       enableTime: '',
    //       disablePerson: '',
    //       disableTime: ''
    //     }
    //   ]
    // }
  ]
  defaultSort: object = {
    prop: 'createTime',
    order: 'descending'
  }
  created() {
    console.log(this.$router)
    console.log(this.$route.path)
    this.refresh()
  }
  addCategory1() {
    this.$refs.dialogDetail.open(true, 1)
  }
  addCategory2() {
    this.$refs.dialogDetail.open(true, 2)
  }
  edit(children: boolean = true) {
    if (children) {
      this.$refs.dialogDetail.open(false, 1)
    } else {
      this.$refs.dialogDetail.open(false, 2)
    }
  }
  remove() {
    removeCategories(this.selectionId).then(res => {
      getCategories().then(res => {
        this.tableData = res.data.records
      })
    })
    // this.$alert('该类目一下级存在类目二数据，不能删除！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error',
    //   callback: action => {
    //     // this.$message({
    //     //   type: 'info',
    //     //   message: `action: ${action}`
    //     // })
    //     if (action === 'confirm') {
    //       this.$confirm('此操作将永久删除该类目, 是否继续?', '操作提示', {
    //         cancelButtonText: '取消',
    //         confirmButtonText: '确定',
    //         type: 'warning'
    //       })
    //         .then(() => {
    //           this.$alert('类目删除成功！', '操作成功', {
    //             confirmButtonText: '确定',
    //             type: 'success'
    //           })
    //         })
    //         .catch(() => {
    //           this.$message({
    //             type: 'info',
    //             message: '已取消删除'
    //           })
    //         })
    //     }
    //   }
    // })
  }
  enable() {
    // this.$alert('您选择了2条不是 “未启用” 或 “禁用” 状态的数据，不能进行启用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
    this.$confirm('是否启用所选类目?', '操作提示', {
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
  disable() {
    // this.$alert('您选择了2条不是“启用”状态的数据，不能进行禁用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
    this.$confirm('是否禁用所选类目?', '操作提示', {
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      type: 'warning'
    })
      .then(() => {
        this.$alert('禁用成功！', '操作成功', {
          confirmButtonText: '确定',
          type: 'success'
        })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消禁用'
        })
      })
  }
  async refresh() {
    this.loading = true
    // setTimeout(() => {
    const res = await getCategories().catch(e => {
      Notification.error(`请求错误: ${e.message}`)
      this.loading = false
    })
    this.tableData = get(res, 'data.records')
    this.loading = false
    // }, 2000)
  }
  exportExcel() {
    // console.log(1)
    // let url = 'http://www.111.com/asd.xlsx'
    // try {
    //   var elemIF = document.createElement('iframe')
    //   elemIF.src = url
    //   elemIF.style.display = 'none'
    //   document.body.appendChild(elemIF)
    // } catch (e) {}

    this.$refs.dialogExport.open()

    // var file = event.target.files
    // for (var i = 0; i < file.length; i++) {
    //   //    上传类型判断
    //   var imgName = file[i].name
    //   var idx = imgName.lastIndexOf('.')
    //   if (idx != -1) {
    //     var ext = imgName.substr(idx + 1).toUpperCase()
    //     ext = ext.toLowerCase()
    //     if (ext != 'pdf' && ext != 'doc' && ext != 'docx') {
    //     } else {
    //       this.addArr.push(file[i])
    //     }
    //   } else {
    //   }
    // }
  }
  clear() {
    this.formSearch.category1 = ''
    this.formSearch.category2 = ''
    this.formSearch.keyword = ''
  }
  search() {}
  selectionChange(selection: any) {
    this.selection = selection
    this.selected = selection.length > 0
    this.selectionId = this.selection.map(item => item.id)
    this.singleSelected = selection.length === 1
  }
}
</script>

<style lang="scss">
.a01 {
  .inline-input {
    input {
      border: none;
      background: transparent;
    }
  }
}
</style>
