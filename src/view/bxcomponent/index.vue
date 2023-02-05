<template>
  <div>
  <div>mycomponents</div>

  城市级联选择器
  <cascader :cascaderInfo="cascaderInfo"></cascader>
  <!-- <dateTimePiker :dateTimePikerInfo="dateTimePikerInfo"></dateTimePiker> -->
  <div>
    下拉选择器
  <select :selectInfo="selectInfo"></select>
  </div>
  单选组件
  <radio :radioInfo="radioInfo"></radio>
  富文本编辑器3
  <editor :edtorInfo="edtorInfo"></editor>
  <checkbox :checkboxInfo="checkboxInfo"></checkbox>
  <tableCom :tableType="tableType"></tableCom>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
import editor from './components/editor.vue'
import radio from './components/radio.vue'
import checkbox from './components/checkbox.vue'
import select from './components/select.vue'
import cascader from './components/cascader.vue'
import dateTimePiker from './components/dateTimepiker.vue'
import tableCom from './components/table.vue'
export default {
  name: 'mytools',
  components: {
    editor,
    radio,
    checkbox,
    select,
    cascader,
    dateTimePiker,
    tableCom
  },
  data () {
    return {
      edtorInfo: '富文本编辑器信息',
      radioInfo: 'info',
      checkboxInfo: 'info',
      checkboxInfo2: 'info',
      selectInfo: 'info',
      cascaderInfo: 'info',
      dateTimePikerInfo: 'info',
      tableType: [
        { type: 'index', width: '100' },
        { prop: 'date', label: '日期', width: '100' },
        { prop: 'name', label: '姓名', width: '100' },
        { prop: 'address', label: '地址', width: '100' },
        { prop: '', label: '操作', width: '180' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
