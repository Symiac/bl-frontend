<template>
  <layout class="a02">
    <template slot="operation">
      <el-button-group>
        <el-button type="primary"
                   @click="add">新增</el-button>
        <el-button type="primary"
                   :disabled="!singleSelected"
                   @click="edit">修改</el-button>
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
             download="软件品种.xlsx">导出</a></el-button>
      </el-button-group>
      <dialog-detail ref="dialog"></dialog-detail>
    </template>
    <template slot="search">
      <el-form inline
               :model="formSearch">
        <div class="search-left">
          <el-form-item>
            <!-- <el-input v-model="formSearch.category1"
                      style="width:150px"
                      placeholder="类目一"
                      clearable></el-input> -->
            <el-select v-model="formSearch.category1"
                       style="width:120px"
                       placeholder="类目一"
                       clearable>
              <el-option label="服务器用"
                         value="01"></el-option>
              <el-option label="个人终端"
                         value="02"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <!-- <el-input v-model="formSearch.category2"
                      style="width:150px"
                      placeholder="类目二"
                      clearable></el-input> -->
            <el-select v-model="formSearch.category2"
                       style="width:120px"
                       placeholder="类目二"
                       clearable>
              <el-option label="操作系统"
                         value="01"></el-option>
              <el-option label="数据库"
                         value="02"></el-option>
              <el-option label="中间件"
                         value="03"></el-option>
              <el-option label="安全杀毒"
                         value="04"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formSearch.variety"
                      style="width:150px"
                      placeholder="软件品种"
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
          <el-button type="primary">查询</el-button>
        </div>

      </el-form>
    </template>
    <template slot="content">
      <el-table height="100%"
                border
                stripe
                :data="tableData"
                :default-sort="defaultSort"
                row-key="id"
                @selection-change="selectionChange">
        <el-table-column type="selection"
                         fixed
                         width="40">
        </el-table-column>
        <el-table-column type="index"
                         fixed
                         label="序号"
                         align="right"
                         width="50">
        </el-table-column>
        <el-table-column label="软件类别"
                         fixed
                         align="center"
                         width="240">
          <el-table-column prop="category1"
                           fixed
                           label="类目一名称"
                           sortable
                           width="120">
          </el-table-column>
          <el-table-column prop="category2"
                           fixed
                           label="类目二名称"
                           sortable
                           width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="variety"
                         fixed
                         label="软件品种名称"
                         sortable
                         min-width="160">
          <template slot-scope="scope">
            <span style="color:#004098;cursor:pointer"
                  title="点击修改"
                  @click="edit">{{scope.row.variety}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state"
                         fixed
                         label="状态"
                         sortable
                         align="center"
                         width="80">
        </el-table-column>
        <el-table-column prop="creator"
                         fixed
                         label="创建人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="createTime"
                         fixed
                         label="创建时间"
                         sortable
                         align="center"
                         width="110">
        </el-table-column>
        <el-table-column prop="updatePerson"
                         label="最近更新人"
                         sortable
                         align="center"
                         width="120">
        </el-table-column>
        <el-table-column prop="updateTime"
                         label="最近更新时间"
                         sortable
                         align="center"
                         width="130">
        </el-table-column>
        <el-table-column prop="enablePerson"
                         label="启用人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="enableTime"
                         label="启用时间"
                         sortable
                         align="center"
                         width="110">
        </el-table-column>
        <el-table-column prop="disablePerson"
                         label="禁用人"
                         sortable
                         align="center"
                         width="90">
        </el-table-column>
        <el-table-column prop="disableTime"
                         label="禁用时间"
                         sortable
                         align="center"
                         width="110">
        </el-table-column>
        <el-table-column prop="remark"
                         label="备注"
                         sortable
                         min-width="200">
        </el-table-column>
      </el-table>
      <!-- <el-pagination @size-change="sizeChange"
                     @current-change="currentChange"
                     background
                     :hide-on-single-page="true"
                     :current-page="1"
                     :page-sizes="[10, 20, 50, 100]"
                     :page-size="20"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="84">
      </el-pagination> -->
    </template>
  </layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Layout from '@/views/_common/Layout.vue'
import DialogDetail from './DialogDetail.vue'

interface ISoftwareVariety {
  category1: string
  category2: string
  variety: string
  remark: string
}
interface ISoftwareVarietySearch {
  category1: string
  category2: string
  variety: string
  keyword: string
}
@Component({
  components: {
    Layout,
    DialogDetail
  }
})
export default class Index extends Vue {
  public $refs!: {
    dialog: any
  }
  selected: boolean = false
  singleSelected: boolean = false
  selection: any[] = []
  formSearch: ISoftwareVarietySearch = {
    category1: '',
    category2: '',
    variety: '',
    keyword: ''
  }
  tableData: any[] = [
    {
      id: 1,
      category1: '服务器用',
      category2: '操作系统',
      variety: 'Windows Server',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-11',
      updatePerson: '郭虎城',
      updateTime: '2019-11-22',
      enablePerson: '郭虎城',
      enableTime: '2019-10-11',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 2,
      category1: '服务器用',
      category2: '操作系统',
      variety: 'RedHat',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-10',
      updatePerson: '郭虎城',
      updateTime: '2019-11-21',
      enablePerson: '郭虎城',
      enableTime: '2019-11-11',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 3,
      category1: '服务器用',
      category2: '操作系统',
      variety: 'SUSE',
      state: '禁用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-09',
      updatePerson: '郭虎城',
      updateTime: '2019-11-20',
      enablePerson: '郭虎城',
      enableTime: '2019-11-12',
      disablePerson: '郭虎城',
      disableTime: '2019-11-13'
    },
    {
      id: 4,
      category1: '服务器用',
      category2: '操作系统',
      variety: 'Debian',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-08',
      updatePerson: '郭虎城',
      updateTime: '2019-11-19',
      enablePerson: '郭虎城',
      enableTime: '2019-11-08',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 5,
      category1: '服务器用',
      category2: '操作系统',
      variety: 'Ubuntu',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-07',
      updatePerson: '郭虎城',
      updateTime: '2019-11-18',
      enablePerson: '郭虎城',
      enableTime: '2019-11-08',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 6,
      category1: '服务器用',
      category2: '数据库',
      variety: 'Oracle',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-07',
      updatePerson: '郭虎城',
      updateTime: '2019-11-17',
      enablePerson: '郭虎城',
      enableTime: '2019-11-07',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 7,
      category1: '服务器用',
      category2: '数据库',
      variety: 'Oracle RAC',
      state: '未启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-06',
      updatePerson: '郭虎城',
      updateTime: '2019-11-17',
      enablePerson: '',
      enableTime: '',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 8,
      category1: '服务器用',
      category2: '数据库',
      variety: 'Partitioning',
      state: '未启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-16',
      updatePerson: '郭虎城',
      updateTime: '2019-11-15',
      enablePerson: '',
      enableTime: '',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 9,
      category1: '服务器用',
      category2: '数据库',
      variety: 'SQLServer',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-11-01',
      updatePerson: '郭虎城',
      updateTime: '2019-11-07',
      enablePerson: '郭虎城',
      enableTime: '2019-11-01',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 10,
      category1: '服务器用',
      category2: '数据库',
      variety: 'MySQL',
      state: '启用',
      remark: '',
      creator: '郭虎城',
      createTime: '2019-10-30',
      updatePerson: '郭虎城',
      updateTime: '2019-11-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-30',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 11,
      category1: '服务器用',
      category2: '中间件',
      variety: 'WebSphere',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-25',
      updatePerson: '郭虎城',
      updateTime: '2019-11-07',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 12,
      category1: '服务器用',
      category2: '中间件',
      variety: 'WebLogic',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-24',
      updatePerson: '郭虎城',
      updateTime: '2019-11-04',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 13,
      category1: '服务器用',
      category2: '虚拟化',
      variety: 'Vmware vSphere',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-22',
      updatePerson: '郭虎城',
      updateTime: '2019-11-01',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 14,
      category1: '服务器用',
      category2: '虚拟化',
      variety: 'Vmware vCenter',
      state: '禁用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-21',
      updatePerson: '郭虎城',
      updateTime: '2019-10-28',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '郭虎城',
      disableTime: '2019-10-30'
    },
    {
      id: 15,
      category1: '服务器用',
      category2: '虚拟化',
      variety: 'FusionCompute',
      state: '禁用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-21',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '郭虎城',
      disableTime: '2019-10-30'
    },
    {
      id: 16,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: '趋势杀毒软件',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-21',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-28',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 17,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: '瑞星杀毒软件',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-20',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-25',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 18,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: '诺顿杀毒软件',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-20',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-25',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 19,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: 'Mcafee',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-19',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-21',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 20,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: '卡巴斯基杀毒软件',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-19',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-21',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 21,
      category1: '服务器用',
      category2: '安全杀毒',
      variety: '江民杀毒软件',
      state: '禁用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-18',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-21',
      disablePerson: '郭虎城',
      disableTime: '2019-10-22'
    },
    {
      id: 22,
      category1: '服务器用',
      category2: '云服务',
      variety: 'Azure',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-17',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-21',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 23,
      category1: '服务器用',
      category2: '云服务',
      variety: 'System Center',
      state: '启用',
      remark: '',
      creator: '陆妍鲲',
      createTime: '2019-10-16',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-16',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 24,
      category1: '个人终端',
      category2: '操作系统',
      variety: 'Windows',
      state: '启用',
      remark: '',
      creator: '张羽',
      createTime: '2019-10-16',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-16',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 25,
      category1: '个人终端',
      category2: '操作系统',
      variety: 'OS X',
      state: '启用',
      remark: '',
      creator: '张羽',
      createTime: '2019-10-15',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-16',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 26,
      category1: '个人终端',
      category2: '日常办公',
      variety: 'MS Office',
      state: '启用',
      remark: '',
      creator: '张羽',
      createTime: '2019-10-15',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-16',
      disablePerson: '',
      disableTime: ''
    },
    {
      id: 27,
      category1: '个人终端',
      category2: '日常办公',
      variety: 'WPS Office',
      state: '启用',
      remark: '',
      creator: '张羽',
      createTime: '2019-10-14',
      updatePerson: '郭虎城',
      updateTime: '2019-10-27',
      enablePerson: '郭虎城',
      enableTime: '2019-10-16',
      disablePerson: '',
      disableTime: ''
    }
  ]
  defaultSort: object = {
    prop: 'createTime',
    order: 'descending'
  }
  created() {
    // console.log(this.$router)
    // console.log(this.$route.path)
  }
  add() {
    this.$refs.dialog.open(true)
  }
  edit() {
    this.$refs.dialog.open(false)
  }
  remove() {
    this.$alert('您选了“启用”或“禁用”的数据，不能删除！', '错误提示', {
      confirmButtonText: '确定',
      type: 'error',
      callback: action => {
        // this.$message({
        //   type: 'info',
        //   message: `action: ${action}`
        // })
        if (action === 'confirm') {
          this.$confirm('此操作将永久删除该软件品种, 是否继续?', '操作提示', {
            cancelButtonText: '取消',
            confirmButtonText: '确定',
            type: 'warning'
          })
            .then(() => {
              this.$alert('品种删除成功！', '操作成功', {
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
    // this.$alert('您选择了2条不是 “未启用” 或 “禁用” 状态的数据，不能进行启用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
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
  disable() {
    // this.$alert('您选择了2条不是“启用”状态的数据，不能进行禁用操作，请重新选择！', '错误提示', {
    //   confirmButtonText: '确定',
    //   type: 'error'
    // })
    this.$confirm('是否禁用所选数据?', '操作提示', {
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
  refresh() {}
  export() {}
  clear() {
    this.formSearch.category1 = ''
    this.formSearch.category2 = ''
    this.formSearch.variety = ''
    this.formSearch.keyword = ''
  }
  selectionChange(selection: any) {
    this.selected = selection.length > 0
    this.singleSelected = selection.length === 1
    console.log(selection)
  }
  sizeChange() {}
  currentChange() {}
}
</script>

<style lang="scss">
.a02 {
}
</style>