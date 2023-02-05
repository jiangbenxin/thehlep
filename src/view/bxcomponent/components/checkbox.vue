<template>
  <div>
    <el-checkbox-group v-model="checkList">
    <el-checkbox
     v-for="(item, index) in checkArr"
      :key="index"
      :label="item.label">
      {{item.name}}
    </el-checkbox>
  </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: 'check',
  props: {
    checkboxInfo: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checkList: [3, 9],
      checkArr: [
        { label: 3, name: '三' },
        { label: 9, name: '九' },
        { label: 6, name: '六' }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
</style>
