<template>
  <div class="spanOneComponent">
    <span>{{ spanOneObj.name }}</span>
    <span>{{ spanOneObj.num }}</span>
    <span>{{ spanOneObj.unit }}</span>
  </div>
</template>

<script>
export default {
  props: {
    spanOneObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.spanOneComponent{
  width: auto;
  height: 40px;
  background: #e4e4e4;
  float: left;
  span:first-child {
    // color: red;
    display: block;
    float: left;
    line-height: 40px;
    font-size: 18px;
    font-weight: 650;

  }
  span:nth-child(2){
    display: block;
    float: left;
    height: 40px;
    color: #6f71cc;
    line-height: 30px;
    font-size: 18px;
    font-weight: 650;
    margin-left: 20px;
  }
  span:last-child{
    color: rgb(22, 5, 5);
    float: left;
    font-size: 16px;
    margin-left: 15px;
    line-height: 40px;
  }
}
</style>
