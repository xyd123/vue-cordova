<template>
  <section class="farm">
    <ul v-for="items in data">
      <li v-for="item in items.cols" @click="change(item)">
        <div class="farm-floor" v-show="item.hasFloor" :class="{'empty': item.isFloorEmpty}"></div>
        <div :class="item.object" v-show="item.isShow"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  vuex: {
    state: {
      isCollect: state => state.isCollect,
      isBasket: state => state.isBasket,
      isChemical: state => state.isChemical,
      isPickaxe: state => state.isPickaxe
    }
  },
  methods: {
    change (item) {
      if (this.isCollect && item.isShow) {
        window.alert('您成功获得' + item.name)
        item.isShow = false
      } else if (this.isBasket && item.isShow) {
        window.alert('已收获至仓库')
        item.isShow = false
      } else if (this.isChemical) {
        window.alert('已施肥')
      } else if (this.isPickaxe && !item.isFloorEmpty) {
        item.isShow = false
        item.isFloorEmpty = true
      } else if (item.isShow) {
        var confirm = window.confirm('是否要预定此物品')
        if (confirm === true) {
          window.alert('预定成功')
        }
      }
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: [
        {
          cols: [
            {
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }, {
              name: '西红柿',
              object: 'farm-persimmon',
              isShow: true,
              hasFloor: false,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              object: 'farm-cabbage',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              object: 'farm-corn',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              object: 'farm-flower',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .farm-flower{
  width: 122px;
  height: 91px;
  background-image: url(img/flower.png?__sprite);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.farm-corn{
  width: 62px;
  height: 67px;
  background-image: url(img/corn.png?__sprite);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.farm-cabbage{
  width: 73px;
  height: 70px;
  background-image: url(img/cabbage.png?__sprite);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.farm-persimmon{
  width: 177px;
  height: 154px;
  background-image: url(img/persimmon.png?__sprite);
}
.farm-floor{
  width: 199px;
  height: 100px;
  background-image: url(img/floor.png?__sprite);
}
.farm-floor.empty{
  background-image: url(img/floor-empty.png?__sprite);
}

.farm{
  display: flex;
  align-items: flex-end;
  padding-left: 200px;
}
.farm ul{
  transform: rotate(64deg);
}
.farm li{
  transform: rotate(-64deg);
  position: relative;
  margin:8px 0;
  width:199px;
  height: 100px;
}
.farm ul:nth-child(1){
  transform: rotate(64deg) translateY(-20px);
}
.farm ul:nth-child(1) li{
  margin: -26px 0;
  width: 177px;
  height: 154px;
}
.farm ul:nth-child(2){
  transform: rotate(64deg) translate(35px,91px)
}
.farm ul:nth-child(3){
  transform: rotate(64deg) translate(35px,202px)
}
.farm ul:nth-child(4){
  transform: rotate(64deg) translate(95px,269px)
}
.farm ul:nth-child(5){
  transform: rotate(64deg) translate(95px,382px)
}
.farm ul:nth-child(6){
  transform: rotate(64deg) translate(95px,493px);
}
</style>
