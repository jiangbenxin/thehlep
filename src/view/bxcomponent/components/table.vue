<template>
  <div>
    <el-table
    :data="tableData"
    style="width: 100%"
    >
    <el-table-column
      type="index">
    </el-table-column>
    <el-table-column
      v-for="(item, index) in tableType2"
      :key="index"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
      align="center">
    </el-table-column>
    <el-table-column
      prop="操作"
      label="操作"
      align="center">
        <template slot-scope="scope">
        <el-button
          @click.native.prevent="view(scope.$index)"
          type="text"
          size="small">
          查看
        </el-button>
        <el-button
          @click.native.prevent="edit(scope.$index)"
          type="text"
          size="small">
          编辑
        </el-button>
        <el-button
          @click.native.prevent="delete(scope.$index)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>

export default {
  name: 'table',
  props: {
    tableType: {
      type: Array,
      default: () => {}
    }
  },
  watch: {
    tableType: {
      handler (val) {
        this.tableType2 = val
        if (this.tableType2[0].type === 'index') {
          this.tableType2 = this.tableType2.splice(0, 1)
        }
        const num = this.tableType2.length - 1
        if (this.tableType2[num].label === '操作') {
          this.tableType2 = this.tableType2.splice(num, 1)
        }
      },
      immediate: true // 初次监听即执行
    }
  },
  mounted () {
    console.log(222)
  },
  data () {
    return {
      tableType2: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    view () {
      console.log('view')
    },
    edit () {
      console.log('edit')
    },
    delete () {
      console.log('delete')
    }
  }
}
</script>
