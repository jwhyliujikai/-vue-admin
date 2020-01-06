<template>
  <div class="spanTwoComponent">
    <span>{{ spanTwoObj.name }}</span>
    <span>{{ spanTwoObj.num }}</span>
    <span>{{ spanTwoObj.unit }}</span>
  </div>
</template>

<script>
export default {
  props: {
    spanTwoObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.spanTwoObj)
  }
}
</script>

<style lang="scss" scoped>
.spanTwoComponent{
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
    color: #ff3333;
    line-height: 30px;
    font-size: 18px;
    font-weight: 650;
    margin-left: 40px;
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
