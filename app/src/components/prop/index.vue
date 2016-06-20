<template>
  <section class="prop dialog" :class="{ 'hide': isHideProp }">
    <div class="dialog-close" @click="hideProp()"></div>
    <header>
      <h1 class="prop-title">道具</h1>
    </header>
    <ul class="prop-list">
      <li v-for="item in data"><img :src="item" alt=""></li>
    </ul>
  </section>
  <section class="house" @click="hideProp()"></section>
</template>

<script>
import { hideProp } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isHideProp: state => state.isHideProp
    },
    actions: {
      hideProp
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: [
        'http://img0.fengqucdn.com/cmsres/20160608/8060b7c7-7028-4610-8d19-5dc9817f08c8.png',
        'http://img0.fengqucdn.com/cmsres/20160608/8a925e7c-c86b-4472-a006-2fdf9d9c0748.png',
        'http://img0.fengqucdn.com/cmsres/20160608/41784b05-293b-4abe-beb3-ac244e1f2cf1.png',
        'http://img0.fengqucdn.com/cmsres/20160608/7beec9b3-7c6d-4a50-a1b8-7225acbcfd7d.png',
        'http://img0.fengqucdn.com/cmsres/20160608/2131e4cf-dc36-43f8-b105-26f5f171d6eb.png',
        'http://img0.fengqucdn.com/cmsres/20160608/57e3abc6-fd1e-499a-b4d1-6318172a9784.png',
        'http://img0.fengqucdn.com/cmsres/20160608/9b344d75-f717-455e-8eb2-b9ce181ba9e9.png',
        'http://img0.fengqucdn.com/cmsres/20160608/bda0cf7e-0b92-4afe-83f8-11ced9770fff.png',
        'http://img0.fengqucdn.com/cmsres/20160608/cc75658f-eaa4-4c5b-8343-989ceffedf6c.png'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog{
  width: 1133px;
  height: 570px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%,-50%);
  background-image: url(img/dialog.png?__sprite);
}
.dialog-close{
  width: 64px;
  height: 64px;
  background-image: url(img/close.png?__sprite);
  right: -12px;
  top: -12px;
  position: absolute;
}
.dialog header{
  width: 283px;
  height: 70px;
  color: #fff;
  font-size: 36px;
  background-image: url(img/header.png?__sprite);
  text-align: center;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translate(-50%,0);
  text-align: center;
  padding-top:11px;
}
.prop-title{
  text-indent: -999em;
  width: 151px;
  height: 43px;
  display: inline-block;
  background-image: url(img/title.png?__sprite);
}

.prop-list{
  overflow: hidden;
  margin-left: 61px;
  margin-top: 105px;
  background-image: url(img/ul.png?__sprite);
  width: 999px;
  height: 387px;
}
.prop-list li{
  float: left;
  width: 152px;
  height: 122px;
  margin-right: 17px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.prop-list li:nth-child(6n+6){
  margin-right: 0;
}
.prop-list img{
  display: block;
}
.house{
  position: absolute;
  width: 299px;
  height: 300px;
  left: 766px;
  top: 16px;
}
</style>
