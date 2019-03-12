<template>
  <div class="tagsView">
    <div class="box">
      <div v-for="(item, index) in $store.state.TagsViews" :key="index">
        <span @click="goto(item.path)" :style="item.title === $store.state.breadcrumbList[$store.state.breadcrumbList.length-1]?`background:${$store.state.theme}`:''" :class="item.title === $store.state.breadcrumbList[$store.state.breadcrumbList.length-1]?'active':''">
          {{item.title}}
          <i class="el-icon-close" @click.stop="delPath(index)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : ''
    }
  },
  methods: {
    goto (item) {
      this.$router.push(item)
    },
    delPath (index) {
      this.$store.state.TagsViews.splice(index, 1)
      if (this.$store.state.TagsViews.length === 0) {
        this.$router.push('/layout/home')
      } else {
        this.$router.push(this.$store.state.TagsViews[0].path)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .tagsView{
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    .box{
      padding: 5px 15px;
      overflow: auto;
      flex-wrap: nowrap;
      display: flex;
      align-items: center;
      &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 3px;
      }
      &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(200,200,200,0.2);
        background: #999;
      }
      &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(200,200,200,0.2);
        border-radius: 10px;
        background: #EDEDED;
      }
      div{
        &:last-child{
          span{
            margin-right: 15px;
          }
        }
        span{
          cursor: pointer;
          margin-right: 5px;
          border: 1px solid rgb(230,230,230);
          border-radius: 3px;
          height: 20px;
          line-height: 20px;
          padding: 2px 8px;
          font-size: 12px;
          white-space: nowrap;
          &.active{
            background: #42b983;
            color: #fff;
            i{
              color: #fff;
            }
          }
          i{
            color: #333;
            height: 16px;
            line-height: 16px;
            width: 16px;
            border-radius: 50%;
            &:hover{
              color: #fff;
              background: #bebebe;
            }
          }
        }
      }
    }
  }
</style>
