<template>
  <div class="header">
    <div class="logo">
      <span>{{title}}</span>
    </div>
    <div class="user">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userInfo.username}}
          <img :src="userInfo.avator" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/login">退出登陆</el-dropdown-item>
          <el-dropdown-item command="setting">设置</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '后台管理系统'
    }
  },
  data () {
    return {
      userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : ''
    }
  },
  methods: {
    handleCommand (command) {
      if (command === '/login') {
        this.$router.replace('/login')
      } else {
        this.$router.push(command)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header{
    height: 60px;
    line-height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .logo{
      display: flex;
      justify-content: center;
      align-items: center;
      span{
        display: block;
        color: #fff;
        margin: 0 10px;
        font-size: 24px;
      }
    }
    .user{
      cursor: pointer;
      span{
        color: #fff;
        margin: 0 10px;
        display: flex;
        align-items: center;
        img{
          margin: 0 10px;
          height: 36px;
          width: 36px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
