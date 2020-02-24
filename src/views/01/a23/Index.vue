<template>
  <data-view ref="dataView"
             :columns="columns"
             :rows="rows"
             :request="request"
             :loading="loading"
             :operation="false"
             :form-query="formQuery"
             :selectable="false"
             :doubleClickable="false"
           >
    <template slot="query">
      <query :form-query="formQuery"></query>
    </template>        
  </data-view>   
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import DataView from '@/views/_common/DataView.vue'
import Query from './Query.vue'


const vuex = namespace('A22')

@Component({
  components: {
    DataView,
    Query,
  }
})
export default class Index extends Vue {
  // @vuex.State columns
  @vuex.State rows
  @vuex.State loading
  @vuex.Action COMMIT_QUERY
 // @vuex.Action COMMIT_ADD
//  @vuex.Action COMMIT_EDIT
 // @vuex.Action COMMIT_REMOVE

  public $refs!: {
    dataView: any
  }

  request: any = {
    query: this.COMMIT_QUERY,
   // add: this.COMMIT_ADD,
   // edit: this.COMMIT_EDIT,
   // remove: this.COMMIT_REMOVE
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
      label: '申请单位',
      prop: 'applied_com',
      align: 'center',
      width: '200',
    },
    {
      index: 2,
      prop: 'applied_by',
      label: '申请人',
      align: 'center',
      width: '110'
    },
    {
       index: 3,
       prop: 'name',
       label: `软件名称
               （申请）`,
       align: 'left',
       width: '240',
    },
    {
      index: 4,
      prop: 'names',
       label: `软件名称
               （审批）`,
       align: 'left',
       width: '240',
    },
    {
      index: 5,
      prop: 'manufacturer',
      label: '生产厂商',
      align: 'left',
      width: '110'
    },
    {
      index: 6,
       prop: 'state',
      label: '状态',
      sortable: true,
      align: 'left',
      width: '80'
      
    },
    {
      index: 7,
      prop: 'applied_at',
      label: '申请时间',
      sortable: true,
      align: 'left',
      width: '110'
      
     
    },
    {
      index: 8,
      prop: 'reviewed_at',
      label: '审批时间',
      sortable: true,
      align: 'left',
      width: '110'
    },
    {
      index: 9,
      prop: 'reviewed_length',
      label: '审批时长',
      sortable: true,
      align: 'left',
      width: '120'
    }
  ]
  created() {
    console.log('a21')
  }

}
</script>