<template>
  <div>
    <el-radio-group v-model="radio">
    <el-radio
     v-for="(item,index) in radioArr"
     :key="index"
     :label="item.label" :id="index">
     {{item.name}}
    </el-radio>

  </el-radio-group>
  </div>
</template>
<script>
export default {
  name: 'radio',
  props: {
    radioInfo: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      radio: 3,
      radioArr: [
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
