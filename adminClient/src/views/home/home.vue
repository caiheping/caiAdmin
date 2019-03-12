<template>
  <div class="home">
    <div class="top">
      <div class="item">
        <div class="content">
          <div class="itemLogo film">
            电影
          </div>
          <div class="right">
            <span>库存</span>
            <countTo class="num" :startVal='0' :endVal='3333' :duration='2000'></countTo>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <div class="itemLogo TV">
            TV
          </div>
          <div class="right">
            <span>库存</span>
            <countTo class="num" :startVal='0' :endVal='3333' :duration='2000'></countTo>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <div class="itemLogo anime">
            动漫
          </div>
          <div class="right">
            <span>库存</span>
            <countTo class="num" :startVal='0' :endVal='3333' :duration='2000'></countTo>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <div class="itemLogo music">
            音乐
          </div>
          <div class="right">
            <span>库存</span>
            <countTo class="num" :startVal='0' :endVal='3333' :duration='2000'></countTo>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  data () {
    return {
      startVal: 0,
      endVal: 2017
    }
  },
  components: { 
    countTo
  },
}
</script>

<style lang="scss">
  .home{
    .top{
      display: flex;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;
      .item{
        width: 25%;
        padding: 15px;
        box-sizing: border-box;
        .content{
          cursor: pointer;
          background: #fff;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          padding: 20px;
          box-shadow: 4px 4px 40px rgba(0,0,0,.1);
          &:hover{
            .itemLogo{
              color: #fff;
            }
            .film{
              background: #40c9c6;
            }
            .TV{
              background: #36a3f7;
            }
            .anime{
              background: #f4516c;
            }
            .music{
              background: #42b983;
            }
          }
          .itemLogo{
            border-radius: 4px;
            font-size: 30px;
            padding: 10px;
            width: 100px;
            color: #333;
            box-sizing: border-box;
            text-align: center;
          }
          .right{
            color: #999;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .num{
              font-size: 24px;
              font-weight: bold;
              color: #666
            }
          }
        }
      }
    }
  }
</style>
