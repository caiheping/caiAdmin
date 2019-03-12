<template>
  <div class="layout">
    <el-container>
      <el-header :style="`background:${$store.state.theme}`">
        <v-header :title="title"></v-header>
      </el-header>
      <el-container>
        <el-aside width="auto">
          <el-scrollbar style="height: 100%;border-right: solid 1px #e6e6e6;">
            <el-menu :default-active="$store.state.activeMenu" :router=true class="el-menu-vertical-demo" :collapse="isCollapse">
              <el-menu-item index="home">
                <i class="fa fa-th-list" aria-hidden="true"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="musicManagement">
                <template slot="title">
                  <i class="fa fa-music" aria-hidden="true"></i>
                  <span slot="title">音乐模块</span>
                </template>
                <el-menu-item index="musicLists">
                  <span slot="title">音乐列表</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="movieManagement">
                <template slot="title">
                  <i class="fa fa-film" aria-hidden="true"></i>
                  <span slot="title">影视模块</span>
                </template>
                <el-menu-item index="TV">
                  <span slot="title">电视剧</span>
                </el-menu-item>
                <el-menu-item index="film">
                  <span slot="title">电影</span>
                </el-menu-item>
                <el-menu-item index="anime">
                  <span slot="title">动漫</span>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="userManagement">
                <template slot="title">
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <span slot="title">用户模块</span>
                </template>
                <el-menu-item index="userLists">
                  <span slot="title">用户列表</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item index="setting">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <span slot="title">系统设置</span>
              </el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <el-scrollbar style="height: 100%;">
            <div class="contentBox">
              <div class="top">
                <div class="breadcrumb">
                  <i class="fa fa-bars" aria-hidden="true" :class="isCollapse?'active':''" @click="isCollapse=!isCollapse"></i>
                  <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(item, index) in $store.state.breadcrumbList" :key="index"><a href="javascript:void(0);">{{item}}</a></el-breadcrumb-item>
                  </el-breadcrumb>
                </div>
                <div class="right-menu">
                  <el-tooltip content="全屏" effect="dark" placement="bottom">
                    <screenfull class="screenfull right-menu-item"/>
                  </el-tooltip>
                  <el-tooltip content="全屏" effect="dark" placement="bottom">
                    <theme-picker class="theme-switch right-menu-item"/>
                  </el-tooltip>
                </div>
              </div>
              <tags-view></tags-view>
              <div class="content">
                <transition name="router-fade" mode="out-in">
                  <router-view/>
                </transition>
              </div>
            </div>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import TagsView from './components/TagsView'
import Screenfull from './components/Screenfull'
import ThemePicker from './components/ThemePicker'

export default {
  data () {
    return {
      isCollapse: false,
      title: '小菜管理系统'
    }
  },
  components: {
    'v-header': Header,
    TagsView,
    Screenfull,
    ThemePicker
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    height: calc(100vh);

    .el-header, .el-footer {
      color: #333;
      text-align: center;
      height: 60px;
      box-sizing: border-box;
    }

    .el-aside {
      background-color: rgba(0, 0, 0, 0);
      color: #333;
      text-align: left;
      height: calc(100vh - 60px);
      box-sizing: border-box;
      i{
        margin: 0 5px;
      }
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      height: calc(100vh - 60px);
      text-align: center;
      box-sizing: border-box;
      padding: 0;
      .contentBox{
        box-sizing: border-box;
        .top{
          padding: 5px 15px;
          height: 50px;
          box-sizing: border-box;
          border-bottom: 1px solid rgb(230, 230, 230);
          background: #fff;
          display: flex;
          justify-content: space-between;
          .breadcrumb {
            display: flex;
            font-size: 16px;
            align-items: center;
            .fa-bars {
              margin-right: 15px;
              font-size: 24px;
              cursor: pointer;
              transition: all .5s;

              &.active {
                transform: rotate(90deg);
              }
            }
          }
          .right-menu{
            display: flex;
            align-items: center;
            .right-menu-item{
              display: inline-block;
              margin: 0 10px;
            }
          }
        }
        .content{
          padding: 20px;
        }
      }
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      box-sizing: border-box;
    }
    .el-menu{
      border: none;
    }
  }
</style>
