<template>
  <el-tree
    class="base-tree"
    ref="baseTree"
    v-loading="loading"
    :data="nodes"
    :props="defaultProps"
    :lazy="lazy"
    :load="load"
    :node-key="nodeKey"
    :show-checkbox="showCheckbox"
    :check-strictly="checkStrictly"
    :default-expanded-keys="defaultExpandedKeys"
    :render-after-expand="true"
    :expand-on-click-node="false"
    :highlight-current="true"
    @node-click="nodeClick"
    @check-change="handleCheck"
  >
    <!-- <span slot-scope="{ node }" class="custom-tree-node">
      <span v-if="node.label" class="el-icon">
        <i class="icon-company"></i>
      </span>
      <span>{{ node.label }}</span>
    </span> -->
    <span slot-scope="{ node }" class="custom-tree-node">
      <span v-if="node.label" class="el-icon"><i class="el-icon-office-building"></i></span>
      <span>{{ node.label }}</span>
    </span>
  </el-tree>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

@Component
export default class BaseTree extends Vue {
  @Prop({ type: Boolean, default: true }) readonly loading                //    加载提示
  @Prop({ type: Boolean, default: true }) readonly showCheckbox           //    是否显示复选框
  @Prop({ type: Boolean, default: false }) readonly checkStrictly         //    是否显示复选框
  @Prop({ type: Boolean, default: false }) readonly lazy                  //    是否懒加载
  @Prop({ type: Function, default: false }) readonly node                  //    是否懒加载
  @Prop({ type: String, default: 'id' }) readonly nodeKey                 //    属性node-key
  @Prop({ type: Array, default: () => [] }) readonly defaultExpandedKeys  //    默认打开node keys
  @Prop({ type: Array, default: () => [] }) readonly nodes                //    nodes数据
  @Prop({
    type: Object,
    default: () => ({
      label: 'name',
      children: 'children',
      disabled: 'disabled',
      isLeaf: 'isLeaf'
    })
  })
  readonly defaultProps    // 默认属性

  $refs!: {
    baseTree: any
  }
  datas: any[]=[] 

  data: any[] = [
    {
      zhujian: '0',
      jiancheng: '中国铁建股份有限公司',
      children: [
        {
          zhujian: '1',
          jiancheng: '本级机关',
          children: [
            {
              parent: '1',
              zhujian: '101',
              jiancheng: '信息化管理部'
            },
            {
              parent: '1',
              zhujian: '102',
              jiancheng: '经济管理部'
            },
            {
              parent: '1',
              zhujian: '103',
              jiancheng: '国际部'
            },
          ]
        },
        {
          zhujian: '2',
          jiancheng: '直属机构',
          children: [

          ]
        },
        {
          zhujian: '3',
          jiancheng: '所属单位',
          children: [
            {
              parent: '3',
              zhujian: '10',
              jiancheng: '中土集团',
            }
          ]
        },
        {
          parent: '0',
          zhujian: '10',
          jiancheng: '中土集团',
          children: [
            {
               parent: '10',
              zhujian: '1001',
              jiancheng: '尼日利亚国别公司'
            },
            {
               parent: '10',
              zhujian: '1002',
              jiancheng: '埃塞俄比亚国别公司'
            },
            {
               parent: '10',
              zhujian: '1003',
              jiancheng: '东南非区域市场'
            },
            {
               parent: '10',
              zhujian: '1004',
              jiancheng: '中东北非区域市场'
            },
            {
               parent: '10',
              zhujian: '1005',
              jiancheng: '中西非区域市场'
            },
            {
               parent: '10',
              zhujian: '1006',
              jiancheng: '亚大区域市场'
            },
            {
               parent: '10',
              zhujian: '1007',
              jiancheng: '欧洲区域市场'
            },
            {
               parent: '10',
              zhujian: '1008',
              jiancheng: '美洲区域市场'
            },
            {
               parent: '10',
              zhujian: '1009',
              jiancheng: '欧亚区域市场'
            },
            {
               parent: '10',
              zhujian: '1010',
              jiancheng: '援外区域市场'
            }
          ]
        },
        {
          zhujian: '11',
          jiancheng: '中铁十一局',
          children: [
            {
              parent: '11',
              zhujian: '1101',
              jiancheng: '一公司'
            },
            {
              parent: '11',
              zhujian: '1102',
              jiancheng: '二公司'
            },
            {
              parent: '11',
              zhujian: '11021',
              jiancheng: '西安公司'
            },
            {
              parent: '11',
              zhujian: '1103',
              jiancheng: '三公司'
            },
            {
              parent: '11',
              zhujian: '11031',
              jiancheng: '华东公司'
            },
            {
              parent: '11',
              zhujian: '1104',
              jiancheng: '四公司'
            },
            {
              parent: '11',
              zhujian: '1105',
              jiancheng: '五公司'
            },
            {
              parent: '11',
              zhujian: '1106',
              jiancheng: '六公司'
            },
            {
              parent: '11',
              zhujian: '1107',
              jiancheng: '电务公司'
            },
            {
              parent: '11',
              zhujian: '1108',
              jiancheng: '建安公司'
            },
            {
              parent: '11',
              zhujian: '1109',
              jiancheng: '建发公司'
            },
            {
              parent: '11',
              zhujian: '1110',
              jiancheng: '桥梁公司'
            },
            {
              parent: '11',
              zhujian: '1111',
              jiancheng: '城轨公司'
            },
            {
              parent: '11',
              zhujian: '1112',
              jiancheng: '物贸公司'
            },
            {
              parent: '11',
              zhujian: '1113',
              jiancheng: '汉江重工'
            },
            {
              parent: '11',
              zhujian: '1114',
              jiancheng: '设计院'
            },
            {
              parent: '11',
              zhujian: '1115',
              jiancheng: '房地产公司'
            },
            {
              parent: '11',
              zhujian: '1116',
              jiancheng: '投资公司'
            },
            {
              parent: '11',
              zhujian: '1117',
              jiancheng: '海外工程事业部'
            },
            {
              parent: '11',
              zhujian: '1118',
              jiancheng: '产业拓展事业部'
            }
          ]
        },
        {
          zhujian: '12',
          jiancheng: '中铁十二局',
          children: [
            {
              parent: '12',
              zhujian: '1201',
              jiancheng: '十二局一公司'
            },
            {
              parent: '12',
              zhujian: '1202',
              jiancheng: '十二局二公司'
            },
            {
              parent: '12',
              zhujian: '1203',
              jiancheng: '十二局三公司'
            },
            {
              parent: '12',
              zhujian: '1204',
              jiancheng: '十二局四公司'
            },
            {
              parent: '12',
              zhujian: '1205',
              jiancheng: '十二局五公司'
            },
            {
              parent: '12',
              zhujian: '1206',
              jiancheng: '十二局六公司'
            }
          ]
        },
        {
          zhujian: '13',
          jiancheng: '大桥局',
          children: [
            {
              parent: '13',
              zhujian: '1301',
              jiancheng: '大桥局一公司'
            },
            {
              parent: '13',
              zhujian: '1302',
              jiancheng: '大桥局二公司'
            },
            {
              parent: '13',
              zhujian: '1303',
              jiancheng: '大桥局三公司'
            },
            {
              parent: '13',
              zhujian: '1304',
              jiancheng: '大桥局四公司'
            },
            {
              parent: '13',
              zhujian: '1305',
              jiancheng: '大桥局五公司'
            },
            {
              parent: '13',
              zhujian: '1306',
              jiancheng: '大桥局六公司'
            }
          ]
        },
        {
          zhujian: '14',
          jiancheng: '中铁十四局',
          children: [
            {
              parent: '14',
              zhujian: '1401',
              jiancheng: '一公司'
            },
            {
              parent: '14',
              zhujian: '1402',
              jiancheng: '二公司'
            },
            {
              parent: '14',
              zhujian: '1403',
              jiancheng: '三公司'
            },
            {
              parent: '14',
              zhujian: '1404',
              jiancheng: '四公司'
            },
            {
              parent: '14',
              zhujian: '1405',
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: '15',
          jiancheng: '中铁十五局',
          children: [
            {
              parent: '15',
              zhujian: '1501',
              jiancheng: '一公司'
            },
            {
              parent: '15',
              zhujian: '1502',
              jiancheng: '二公司'
            },
            {
                parent: '15',
              zhujian: '1503',
              jiancheng: '三公司'
            },
            {
                parent: '15',
              zhujian: '1504',
              jiancheng: '四公司'
            },
            {
                parent: '15',
              zhujian: '1505',
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: '16',
          jiancheng: '中铁十六局',
          children: [
            {
              parent: '16',
              zhujian: '1601',
              jiancheng: '一公司'
            },
            {
               parent: '16',
              zhujian: '1602',
              jiancheng: '二公司'
            },
            {
               parent: '16',
              zhujian: '1603',
              jiancheng: '三公司'
            },
            {
               parent: '16',
              zhujian: '1604',
              jiancheng: '四公司'
            },
            {
               parent: '16',
              zhujian: '1605',
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: 17,
          jiancheng: '中铁十七局',
          children: [
            {
              zhujian: 1701,
              jiancheng: '一公司'
            },
            {
              zhujian: 1702,
              jiancheng: '二公司'
            },
            {
              zhujian: 1703,
              jiancheng: '三公司'
            },
            {
              zhujian: 1704,
              jiancheng: '四公司'
            },
            {
              zhujian: 1705,
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: 18,
          jiancheng: '中铁十八局',
          children: [
            {
              zhujian: 1801,
              jiancheng: '一公司'
            },
            {
              zhujian: 1802,
              jiancheng: '二公司'
            },
            {
              zhujian: 1803,
              jiancheng: '三公司'
            },
            {
              zhujian: 1804,
              jiancheng: '四公司'
            },
            {
              zhujian: 1805,
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: 19,
          jiancheng: '中铁十九局',
          children: [
            {
              zhujian: 1901,
              jiancheng: '一公司'
            },
            {
              zhujian: 1902,
              jiancheng: '二公司'
            },
            {
              zhujian: 1903,
              jiancheng: '三公司'
            },
            {
              zhujian: 1904,
              jiancheng: '四公司'
            },
            {
              zhujian: 1905,
              jiancheng: '五公司'
            },
          ]
        },
        {
          zhujian: 20,
          jiancheng: '中铁二十局',
          children: [
            {
              zhujian: 2001,
              jiancheng: '一公司'
            },
            {
              zhujian: 2002,
              jiancheng: '二公司'
            },
            {
              zhujian: 2003,
              jiancheng: '三公司'
            },
            {
              zhujian: 2004,
              jiancheng: '四公司'
            },
            {
              zhujian: 2005,
              jiancheng: '五公司'
            },
            {
              zhujian: 2006,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 21,
          jiancheng: '中铁二十一局',
          children: [
            {
              zhujian: 2101,
              jiancheng: '一公司'
            },
            {
              zhujian: 2102,
              jiancheng: '二公司'
            },
            {
              zhujian: 2103,
              jiancheng: '三公司'
            },
            {
              zhujian: 2104,
              jiancheng: '四公司'
            },
            {
              zhujian: 2105,
              jiancheng: '五公司'
            },
            {
              zhujian: 2106,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 22,
          jiancheng: '中铁二十二局',
          children: [
            {
              zhujian: 2201,
              jiancheng: '一公司'
            },
            {
              zhujian: 2202,
              jiancheng: '二公司'
            },
            {
              zhujian: 2203,
              jiancheng: '三公司'
            },
            {
              zhujian: 2204,
              jiancheng: '四公司'
            },
            {
              zhujian: 2205,
              jiancheng: '五公司'
            },
            {
              zhujian: 2206,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 23,
          jiancheng: '中铁二十三局',
          children: [
            {
              zhujian: 2301,
              jiancheng: '一公司'
            },
            {
              zhujian: 2302,
              jiancheng: '二公司'
            },
            {
              zhujian: 2303,
              jiancheng: '三公司'
            },
            {
              zhujian: 2304,
              jiancheng: '四公司'
            },
            {
              zhujian: 2305,
              jiancheng: '五公司'
            },
            {
              zhujian: 2306,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 24,
          jiancheng: '中铁二十四局',
          children: [
            {
              zhujian: 2401,
              jiancheng: '一公司'
            },
            {
              zhujian: 2402,
              jiancheng: '二公司'
            },
            {
              zhujian: 2403,
              jiancheng: '三公司'
            },
            {
              zhujian: 2404,
              jiancheng: '四公司'
            },
            {
              zhujian: 2405,
              jiancheng: '五公司'
            },
            {
              zhujian: 2406,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 25,
          jiancheng: '中铁二十五局',
          children: [
            {
              zhujian: 2501,
              jiancheng: '一公司'
            },
            {
              zhujian: 2502,
              jiancheng: '二公司'
            },
            {
              zhujian: 2503,
              jiancheng: '三公司'
            },
            {
              zhujian: 2504,
              jiancheng: '四公司'
            },
            {
              zhujian: 2505,
              jiancheng: '五公司'
            },
            {
              zhujian: 2506,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 26,
          jiancheng: '中铁建设集团',
          children: [
            {
              zhujian: 2601,
              jiancheng: '一公司'
            },
            {
              zhujian: 2602,
              jiancheng: '二公司'
            },
            {
              zhujian: 2603,
              jiancheng: '三公司'
            },
            {
              zhujian: 2604,
              jiancheng: '四公司'
            },
            {
              zhujian: 2605,
              jiancheng: '五公司'
            },
            {
              zhujian: 2606,
              jiancheng: '六公司'
            },
          ]
        },
        {
          zhujian: 27,
          jiancheng: '电气化局'
        },
        {
          zhujian: 28,
          jiancheng: '港航局'
        },
        {
          zhujian: 29,
          jiancheng: '地产集团'
        },
        {
          zhujian: 30,
          jiancheng: '铁一院'
        },
        {
          zhujian: 31,
          jiancheng: '铁四院'
        },
        {
          zhujian: 32,
          jiancheng: '铁五院'
        },
        {
          zhujian: 33,
          jiancheng: '上海院'
        },
        {
          zhujian: 34,
          jiancheng: '物资集团'
        },
        {
          zhujian: 35,
          jiancheng: '重工集团'
        },
        {
          zhujian: 36,
          jiancheng: '国际集团'
        },
        {
          zhujian: 37,
          jiancheng: '城建集团'
        },
        {
          zhujian: 38,
          jiancheng: '投资集团'
        },
        {
          zhujian: 39,
          jiancheng: '财务公司'
        },
        {
          zhujian: 40,
          jiancheng: '诚合保险'
        },
        {
          zhujian: 41,
          jiancheng: '商务集团'
        },
        {
          zhujian: 42,
          jiancheng: '党校（培训中心）'
        },
        {
          zhujian: 43,
          jiancheng: '中铁金租'
        },
        {
          zhujian: 44,
          jiancheng: '中铁磁浮'
        },
        {
          zhujian: 45,
          jiancheng: '资产管理公司'
        },
        {
          zhujian: 46,
          jiancheng: '华南公司'
        },
        {
          zhujian: 47,
          jiancheng: '锦鲤资产'
        },
        {
          zhujian: 48,
          jiancheng: '国际投资'
        },
        {
          zhujian: 49,
          jiancheng: '网信科技'
        },
        {
          zhujian: 50,
          jiancheng: '发展集团'
        },
      ]
    }
  ]
  // defaultProps: object = {}
  created() {
    this.$nextTick(() => {
      this.$refs.baseTree.setCurrentKey(this.data[0].zhujian); 
  })
  }
  nodeClick(data, node) {
    this.$emit('node-click', data)
  }
  //复选框点击事件
  handleCheck(data,checked,indeterminate){

    let nodes = this.$refs.baseTree.getCheckedNodes().concat(this.$refs.baseTree.getHalfCheckedNodes()) 
    let filterNodes = nodes.filter(node=>{ // 过滤出子节点，也就是不含childred字段的节点数据
        return node.children === undefined
    })
    
    let node: any[]=[] 
    for(var i=0 ;i<filterNodes.length;i++){
      if(filterNodes[i].parent){
        let  pnode= this.$refs.baseTree.getNode(filterNodes[i].parent)
        let parent=pnode.data.jiancheng
        node[i]=parent+'/'+filterNodes[i].jiancheng
      }
      else{
          node[i]=filterNodes[i].jiancheng
      }
    }       
    this.datas=node
    this.$emit('getdata',this.datas)
  }
}
</script>

<style lang="scss">
.base-tree {
  height: 100%;
  overflow: auto;
  .el-tree-node__content {
    height: 30px !important;
  }

  .el-icon {
    padding: 0 7px 0 3px;
    color: #004098;
  }
  .custom-tree-node {
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    //padding: 5px 12px 5px 0;
    //padding: 5px 12px 5px 5px;
  }
}
</style>
