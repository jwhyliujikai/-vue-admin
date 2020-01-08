<template>
  <div id="app">
    <div id="gride_bird">
      <ul class="net">
        <li>1 <div>诉求</div></li>
        <li>2 <div>查询</div></li>
        <li>3 <div>投诉</div></li>
      </ul>
      <ul class="net bottom">
        <li>4 <div>维护</div></li>
        <li>5 <div>故障</div></li>
      </ul>
    </div>
    <div id="gride_bird">
      <ul class="net">
        <li>1 <div>诉求</div></li>
        <li>2 <div>查询</div></li>
        <li>3 <div>投诉</div></li>
      </ul>
      <ul class="net bottom">
        <li>4 <div>维护</div></li>
        <li>5 <div>故障</div></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control',
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
#gride_bird {
  width: 600px;
  height: 400px;
}
.net {
  display: flex;
}
.net li {
  width: 100px;
  height: 100px;
  margin-right: 50px;
  background: url('../../assets/img/net.jpg') no-repeat center ;
  background-size: 90% 90%;
  text-align: center;
  line-height: 100px;
}
.net div {
  margin-top: -45px;
}
.bottom {
  margin:-50px 0 0 75px;
}
</style>
