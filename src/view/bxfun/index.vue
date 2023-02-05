<template>
  <div>
  </div>
</template>
<script>
export default {
  name: 'myfunction',
  methods: {
    thisfunctionI () {
      /* es6数组操作方法
      1-map
      2-forEach
      3-filter
      4-every
      5-some
      6-reduce
      7-findIndex
      8-find
      9-slice
      10-splice
      11-includes
      */

      // var arr = [1, 2, 3, 4, 5, 4, 2]
      /* 1-forEach
      a-返回值：没有
      b:有不有return:没有
      c:问题：如果想实现return
      */
      // var newArr = arr.forEach((item) => {
      //   // console.log(arr, 99)
      //   return 123
      // })
      // console.log(newArr, 8)

      /* 2-map
      a-返回值：有,返回一个新数组
      b:有不有return:有，可以自定义返回值
      */
      // var newArr = arr.map((item, index) => {
      //   return {
      //     id: item,
      //     index,
      //   }
      // })
      // console.log(newArr)
      // var arr2 = [
      //   { id: 1, name: 'jack', age: 18 },
      //   { id: 2, name: 'rose', age: 28 },
      //   { id: 3, name: 'tom', age: 38 },
      // ]
      // var newArr2 = arr2.map((item, index) => {
      //   return {
      //     ...item,
      //     gender: 1,
      //   }
      // })
      // console.log(newArr2)
      /* 3-filter
      a-返回值：有,返回一个新数组
      b:有不有return:有，返回满足条件的那一项数据
      */

      // var arr3 = [
      //   { id: 1, name: 'jack', age: 18 },
      //   { id: 2, name: 'rose', age: 28 },
      //   { id: 1, name: 'tom', age: 38 },
      // ]
      // var newArr3 = arr3.filter((item) => {
      //   if (item.id == 1) {
      //     return item
      //   }
      //   // if (item.age > 18) {
      //   //   return item
      //   // }
      // })
      // console.log(newArr3)

      /* 4-some
      a-返回值：有,返回一个bool
      b:有不有return:有，只要一项满足条件就立刻终止循环
      */
      // var arr4 = [
      //   { id: 1, name: 'jack', age: 18 },
      //   { id: 2, name: 'rose', age: 28 },
      //   { id: 3, name: 'tom', age: 38 },
      // ]
      // var newArr4 = arr4.some((item) => {
      //   return item.id == 4
      // })
      // console.log(newArr4)

      /* 4-every
      a-返回值：有,返回一个bool
      b:有不有return:有，只要有一个不满足就是一个false
      */
      // var arr5 = [
      //   { id: 1, name: 'jack', age: 18, flag: true },
      //   { id: 2, name: 'rose', age: 28, flag: false },
      //   { id: 3, name: 'tom', age: 38, flag: true },
      // ]
      // var newArr5 = arr5.every((item) => {
      //   return item.flag
      // })
      // console.log(newArr5)

      /* 4-reduce
      a-返回值：有,返回一个bool
      b:有不有return:有，只要有一个不满足就是一个false
      */
      // var arr6 = [
      //   { id: 1, name: 'lining', price: 100, num: 1 },
      //   { id: 2, name: 'anta', price: 200, num: 2 },
      //   { id: 3, name: 'nike', price: 300, num: 3 },
      //   { id: 4, name: 'tebu', price: 400, num: 1 },
      // ]
      // // var newArr6 = arr6.reduce((sum, item) => {
      // //   return sum += item.price * item.num
      // // }, 0)
      // var newArr6 = arr6.reduce((sum, item) => sum + item.price * item.num, 1)
      // console.log(newArr6)
      /* 数组去重 var arr = [1, 2, 3, 4, 5, 4, 2]

      arr2===得到处理之后的新数组 []是arr2的初始值
      item===arr数组的每一项
      */
      // var newArr7 = arr.reduce((arr2, item) => {
      //   if (!arr2.includes(item)) {
      //     arr2.push(item)
      //   }
      //   return arr2
      // }, [])
      // console.log(newArr7)
      // var newArr8 = [...new Set(arr)]
      // var newArr8 = Array.from(new Set(arr))
      // console.log(newArr8)

      /* 7-findIndex
      a-返回值：有,返回一个索引【下标】
      b:有不有return:有，只要有条件满足就会返回索引
      */
      // var arr7 = [
      //   { id: 1, name: 'lining', price: 100, num: 1 },
      //   { id: 2, name: 'anta', price: 200, num: 2 },
      //   { id: 3, name: 'nike', price: 300, num: 3 },
      //   { id: 4, name: 'tebu', price: 400, num: 1 },
      // ]
      // var index = arr7.findIndex((item) => {
      //   if (item.id === 4) {
      //     return true
      //   }

      //   return item.id === 1
      // })
      // console.log(index)

      /* 8-find
      a-返回值：有,返回一个对象
      b:有不有return:有，只要有条件满足就会返回当前满足项
      */
      var arr8 = [
        { id: 1, name: 'lining', price: 100, num: 1 },
        { id: 2, name: 'anta', price: 200, num: 2 },
        { id: 3, name: 'nike', price: 300, num: 3 },
        { id: 4, name: 'tebu', price: 400, num: 1 }
      ]
      var obj = arr8.find((item) => {
        return item.id === 2
      })
      console.log(obj)
      /*
      9-slice  ===截取数据
      = 1个参数：截取数组中的数据返回一个新的数组，不会影响原数组
      = 2个参数：从参数1开始，到参数2的前一位结束  //[ )
      ps:  slice(1,3)   从索引1开始到索引2结束
      10-splice
      */
      // var arr9 = ['a', 'b', 'c', 'd', 'e', 'f']
      // console.log(arr9.slice(2, 5)) //[ )
      /* 11-splice
      = 1个参数：截取数组中的数据返回一个新的数组，会影响原数组
        = 从当前参数的索引开始往后截取
        = 打印原数组返回的是没有背截取的数组
        = 2个参数：从参数1开始，到参数2的前一位结束  //[ )
      */
      var arr9 = ['a', 'b', 'c', 'd', 'e', 'f']
      // console.log(arr9.splice(0, 3)) //[ ) abc
      // console.log(arr9) //  def
      console.log(arr9.splice(3)) // def
    }
  }
}
</script>
