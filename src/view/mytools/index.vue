<template>
  <div>
  <div>mytools</div>
  <div>npm run 加第三方包名下载第三方包可以下载淘宝镜像npm install -g cnpm --registry=https://registry.npm.taobao.org，cnpm -v，npm i yarn</div>
  <div>md5加密：{{$md5("这里编写你加密的东西")}}</div>
  <div>sha256加密：{{ $sha256('2222') }}</div>
  <div>format时间格式转换:<el-button type="success" plain @click="timeFilter()">DD/MM/YYYY</el-button>，{{date1}}</div>
  <div><el-button type="info" plain @click="fangdou()">防抖</el-button><el-button type="info" plain @click="jieliu()">节流</el-button></div>
  <div>qrcodejs2生成二维码<div class="qrcode" ref="qrCodeUrl"></div></div>
  <vueAmap></vueAmap>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import QRCode from 'qrcodejs2'
import _ from 'lodash'
import vueAmap from './vue-amap/index.vue'

export default {
  name: 'mytools',
  components: {
    vueAmap
  },
  data () {
    return {
      date1: '2019-01-25',
      qrCodeUrl: null
    }
  },
  mounted () {
    this.creatQrCode()
    this.toTree()
  },
  methods: {
    // 防抖
    fangdou: _.debounce(() => {
      console.log('防抖')
    }, 1000),
    // 节流
    jieliu: _.throttle(() => {
      console.log('节流')
    }, 3000),
    // 时间过滤
    timeFilter () {
      this.date1 = dayjs(this.date1).format('DD/MM/YYYY')
    },
    // 生成二维码
    creatQrCode () {
      qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: 'https://www.baidu.com', // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    // 数组转树
    toTree () {
      const data = [
        { pid: 1, id: 2, name: '一级' },
        { pid: 2, id: 3, name: '二级' },
        { pid: 3, id: 4, name: '三级' },
        { pid: 4, id: 5, name: '四级' },
        { pid: 4, id: 6, name: '五级' },
        { pid: 4, id: 7, name: '六级' }
      ]
      // 使用方法
      console.log(data)
      this.arrayToTree(data, { id: 'id', pid: 'pid' })
      console.log(data)
    },
    arrayToTree (array, paramsKey) {
      const pid = paramsKey.pid
      const id = paramsKey.id
      let copyArr = JSON.parse(JSON.stringify(array))
      array.forEach(function (item) {
        copyArr = copyArr.filter(function (child) {
          return child[pid] !== item[id]
        })
      })
      function treeLoop (arr = [], total = []) {
        for (let i = 0; i<arr.length; i++) {
          const aid = arr[i][id]
          let children = total.filter(function (child) {
            return child[pid] === aid
          })
          if (children.length > 0) {
            children = treeLoop(children, total)
          }
          arr[i].children = children
        }
        return arr
      }
      return treeLoop(copyArr, array)
    }
  }
}
</script>

<style lang="less" scoped>
.el-button {
  padding: 5px;
}
</style>
