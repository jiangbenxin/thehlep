<template>
  <div class="amap-page-container">
    <div :style="{width:'70%',height:'400px'}">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
        <!-- <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
        <el-amap-ground-image v-for="groundimage in groundimages" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>
        <el-amap-circle v-for="circle in circles" :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"></el-amap-circle>
        <el-amap-polygon v-for="(polygon, index) in polygons" :vid="index" :ref="`polygon_${index}`" :path="polygon.path" :draggable="polygon.draggable" :events="polygon.events"></el-amap-polygon>
        <el-amap-polyline :editable="polyline.editable"  :path="polyline.path" :events="polyline.events"></el-amap-polyline>
        <el-amap-text v-for="text in texts" :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>
        <el-amap-circle-marker v-for="marker in markers" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-circle-marker> -->
        <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
        </el-amap-info-window>
      </el-amap>
      <button @click="switchWindow(0)">Show First Window</button>
      <button @click="switchWindow(1)">Show Second Window</button>
    </div>
    <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
      <span v-else>????????????</span>
    </div>
    <div
      v-on:click="req_post()"
    >
      ????????????
    </div>
  </div>
</template>
<script>
export default {
  data () {
    const self = this
    return {
      center: [121.5273285, 31.21515044],
      searchOption: {
        city: '??????',
        citylimit: true
      },
      mapCenter: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      markers: [
        {
          position: [121.5273285, 31.21515044],
          events: {
            click: () => {
              alert('click marker')
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>'
        },
        {
          center: [121.5273285, 31.21515044],
          radius: 20,
          fillOpacity: 1,
          fillColor: 'rgba(0,0,255,1)',
          events: {
            click: () => {
              alert('click')
            }
          }
        }
      ],
      groundimages: [
        {
          url: `../../../assets/images/icon-social-bilibili.svg`,
          bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]],
          events: {
            click () {
              alert('click groundimage')
            }
          }
        }
      ],
      circles: [
        {
          center: [121.5273285, 31.21515044],
          radius: 200,
          fillOpacity: 0.5,
          events: {
            click: () => {
              alert('click')
            }
          }
        }
      ],
      polygons: [
        {
          draggable: true,
          path: [[121.5273285, 31.21515044], [121.5293285, 31.21515044], [121.5293285, 31.21915044], [121.5273285, 31.21515044]],
          events: {
            click: () => {
              alert('click polygon')
              console.log(amapManager.getComponent(0))
              console.log(this.$refs.map.$$getCenter())
              console.log(this.$refs.polygon_0[0].$$getPath())
            }
          }
        }
      ],
      polyline: {
        path: [[121.5389385, 31.21515044], [121.5389385, 31.29615044], [121.5273285, 31.21515044]],
        events: {
          click (e) {
            alert('click polyline')
          },
          end: (e) => {
            let newPath = e.target.getPath().map(point => [point.lng, point.lat])
            console.log(newPath)
          }
        },
        editable: false
      },
      texts: [
        {
          position: [121.5273285, 31.21515044],
          text: 'hello world',
          offset: [0, 0],
          events: {
            click: () => {
              alert('click text')
            }
          }
        }
      ],
      lines: [
        {
          path: [
            [116.39, 39.91, 116.37, 39.91],
            [116.380298, 39.907771, 116.38, 39.90],
            [116.385298, 39.907771, 116.40, 39.90]
          ],
          strokeDasharray: [10, 10],
          strokeColor: `#FF33FF`, // ?????????
          strokeOpacity: 1, // ????????????
          strokeWeight: 3, // ??????
          strokeStyle: `solid`, // ?????????
          events: {
            click: () => {
              alert('click')
            }
          }
        }
      ],
      windows: [
        {
          position: [121.5273285, 31.21515044],
          content: 'Hi! I am here!',
          visible: true,
          events: {
            close () {
              console.log('close infowindow1')
            }
          }
        }, {
          position: [121.5375285, 31.21515044],
          content: 'Hi! I am here too!',
          visible: true,
          events: {
            close () {
              console.log('close infowindow2')
            }
          }
        }
      ],
      slotWindow: {
        position: [121.5163285, 31.21515044]
      },
      currentWindow: {
        position: [0, 0],
        content: '',
        events: {},
        visible: false
      },
      addMarker: function () {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000
        this.markers.push([lng, lat])
      },
      onSearchResult (pois) {
        let latSum = 0
        let lngSum = 0
        if (pois.length > 0) {
          pois.forEach(poi => {
            let { lng, lat } = poi
            lngSum += lng
            latSum += lat
            this.markers.push([poi.lng, poi.lat])
          })
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          }
          this.mapCenter = [center.lng, center.lat]
        }
      },
      plugin: [{
        enableHighAccuracy: true, // ????????????????????????????????????:true
        timeout: 100, // ??????10???????????????????????????????????????
        maximumAge: 0, // ??????????????????0??????????????????0
        convert: true, // ??????????????????????????????????????????????????????????????????true
        showButton: true, // ??????????????????????????????true
        buttonPosition: 'RB', // ????????????????????????????????????'LB'????????????
        showMarker: true, // ???????????????????????????????????????????????????????????????true
        showCircle: true, // ????????????????????????????????????????????????????????????true
        panToLocation: true, // ?????????????????????????????????????????????????????????????????????true
        zoomToAccuracy: true, // ????????????????????????????????????????????????????????????????????????????????????????????????f
        extensions: 'all',
        pName: 'Geolocation',
        events: {
          init (o) {
            // o ?????????????????????????????????
            o.getCurrentPosition((status, result) => {
              console.log(result)
              if (result && result.position) {
                self.lng = result.position.lng
                self.lat = result.position.lat
                self.center = [self.lng, self.lat]
                self.loaded = true
                self.$nextTick()
              }
            })
          }
        }
      },
      {
        // pName???????????????
        pName: 'MapType',
        defaultType: 0
      },
      {
        pName: 'OverView',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      },
      {
        pName: 'Scale',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      },
      {
        pName: 'ToolBar',
        events: {
          init (instance) {
            console.log(instance)
          }
        }
      }
      ]
    }
  },
  mounted () {
    this.currentWindow = this.windows[0]
  },
  methods: {
    // ????????????
    changeEditable () {
      this.polyline.editable = !this.polyline.editable
    },
    switchWindow (tab) {
      this.currentWindow.visible = false
      this.$nextTick(() => {
        this.currentWindow = this.windows[tab]
        this.currentWindow.visible = true
      })
    }
  }
}
</script>

<style>
  .amap-demo {
    height: 300px;
  }
</style>
