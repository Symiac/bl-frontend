<template>
  <data-view ref="dataView"
             :columns="columns"
             :rows="rows"
             :request="request"
             :loading="loading"
             :button-add="false"
             :button-edit="false"
             :button-remove="false"
             :button-enable="false"
             :button-disable="false"
             :button-submit="false"
             :button-review="true"
             :button-export="false"
             :form-query="formQuery"
             :doubleClickable="false"
             :show-advanced-query="false"
             :form-advanced-query="formAdvancedQuery"
             :form-advanced-query-label-width="'120px'"
             :form-detail="formDetail"
             :rules-detail="rulesDetail"
             :dialog-detail-width="'1200px'"
             :form-detail-label-width="'0'"
             :title="'新增审核'">
    <template slot="query">
      <query :form-query="formQuery"></query>
    </template>
    <template slot="advancedQuery">
      <advanced-query :form-advanced-query="formAdvancedQuery"></advanced-query>
    </template>
    <template slot="detail">
      <detail :form-detail="formDetail" style="width:70%; margin-left:15%"></detail>
    </template>        
  </data-view>   
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import DataView from '@/views/_common/DataView.vue'
import Detail from './Detail.vue'
import Query from './Query.vue'
import AdvancedQuery from './AdvancedQuery.vue'

const vuex = namespace('A22')

@Component({
  components: {
    DataView,
    Detail,
    Query,
    AdvancedQuery
  }
})
export default class Index extends Vue {
  // @vuex.State columns
  @vuex.State rows
  @vuex.State loading
  @vuex.Action COMMIT_QUERY
  @vuex.Action COMMIT_ADD
  @vuex.Action COMMIT_EDIT
  @vuex.Action COMMIT_REMOVE

  public $refs!: {
    dataView: any
  }

  request: any = {
    query: this.COMMIT_QUERY,
    add: this.COMMIT_ADD,
    edit: this.COMMIT_EDIT,
    remove: this.COMMIT_REMOVE
  }
  formQuery: any = {}
  formAdvancedQuery: any = {}
  formDetail: any = {}
  rulesDetail: any = {}
  columns: any[] = [
    // {
    //   index: 0,
    //   prop: 'name',
    //   label: '软件名称',
    //   align: 'left',
    //   width: '300',
    //   fixed: true
    // },
    {
      index: 1,
      label: '软件类别',
      align: 'center',
      width: '240',
      children: [
        {
          index: 11,
          prop: 'category1',
          label: '类目一名称',
          align: 'center',
          width: '120'
        },
        {
          index: 12,
          prop: 'category2',
          label: '类目二名称',
          align: 'center',
          width: '120'
        }
      ]
    },
    {
      index: 2,
      prop: 'variety',
      label: '软件品种名称',
      sortable: true,
      align: 'left',
      width: '160'
    },
    {
      index: 3,
      label: '软件规格',
      align: 'center',
      width: '260',
      children: [
        {
          index: 31,
          prop: 'configuration',
          label: '功能配置',
          align: 'left',
          width: '140'
        },
        {
          index: 32,
          prop: 'version',
          label: '版本',
          align: 'left',
          width: '80'
        }
      ]
    },
    {
      index: 4,
      prop: 'authorization',
      label: '授权方式',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 5,
      prop: 'service',
      label: '采购模式',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 6,
      prop: 'manufacturer',
      label: '生产厂商',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 7,
      prop: 'area',
      label: '产地',
      sortable: true,
      align: 'left',
      width: '80'
    },
    {
      index: 8,
      prop: 'state',
      label: '状态',
      sortable: true,
      align: 'left',
      width: '80'
    },
    {
      index: 9,
      prop: 'applied_by',
      label: '申请人',
      sortable: true,
      align: 'left',
      width: '90'
    },
    {
      index: 10,
      prop: 'applied_com',
      label: '申请单位',
      sortable: true,
      align: 'left',
      width: '120'
    },
    {
      index: 11,
      prop: 'applied_at',
      label: '申请时间',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 12,
      prop: 'reviewed_at',
      label: '审批时间',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 13,
      prop: 'remark',
      label: '备注',
      sortable: true,
      align: 'left',
      width: '90'
    },
  ]
  created() {
    console.log('a21')
  }
}
</script>