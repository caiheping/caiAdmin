<template>
  <div class="musicLists">
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    </el-dialog>
    <div class="top">
      <div class="item">
        <span for="sdf">歌名：</span>
        <el-input
          placeholder="请输入内容"
          v-model="song"
          label="sdf"
          clearable>
        </el-input>
      </div>
      <div class="item">
        <span for="sdf">歌手：</span>
        <el-input
          placeholder="请输入内容"
          v-model="song"
          label="sdf"
          clearable>
        </el-input>
      </div>
      <div class="item">
        <span for="sdf">语言：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span for="sdf">类型：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="item">
        <span for="sdf">出版时间：</span>
        <el-input
          placeholder="请输入内容"
          v-model="song"
          label="sdf"
          clearable>
        </el-input>
      </div>
      <div class="item">
        <el-button  icon="el-icon-search" type="primary">查找</el-button>
      </div>
    </div>
    <div class="content">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        :stripe="true"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          align="center"
          prop="song"
          label="歌名"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="singer"
          label="歌手"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="url"
          label="url"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          label="图片"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <img class="image" :src="scope.row.image" alt="">
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="language"
          label="语言"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="genre"
          label="类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="hot"
          label="热度"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          prop="publish_time"
          label="出版时间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="bottom">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      currentPage: 2,
      song: '',
      multipleSelection: [],
      tableData: [
        {
          'music_id': 1,
          'song': '最佳损友',
          'singer': '任素汐',
          'album': '最佳损友 国语版',
          'language': '国语',
          'recordCompany': '北京听见时代娱乐传媒有限公司',
          'publish_time': '2019-03-01',
          'hot': 99,
          'genre': 'Pop 流行',
          'image': '//y.gtimg.cn/music/photo_new/T002R300x300M0000015rUVB2OUdGA.jpg?max_age=2592000',
          'url': 'http://113.113.69.164/amobile.music.tc.qq.com/C400004WTcut1gjTcW.m4a?guid=4451169631&vkey=EA8D19B49FD3268AA3BD25B6B2B19B4531008707CF23626916EA53E84AB9312179B31F4C06F1310D120170C679081BFF93CB70732029F654&uin=0&fromtag=66',
          'lyrics': [
            '最佳损友 (国语版) (《绿皮书》电影中国区推广曲) - 任素汐',
            '词：樊冲',
            '原词：黄伟文',
            '原曲：Eric Kwok',
            'OP：Wyman',
            'SP：环球音乐出版有限公司',
            'OP：Warner/Chappell Music, H.K. Ltd.',
            'SP：Warner/Chappell Music Publishing Agency (Beijing) Ltd.',
            '制作人：陈雪燃/林乔',
            '...'
          ]
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleClick (row) {
      console.log(row)
      this.dialogFormVisible = true;
    }
  }
}
</script>

<style scoped lang="scss">
  .musicLists{
    .top{
      display: flex;
      flex-wrap: wrap;
      .item{
        display: flex;
        align-items: center;
        width: 300px;
        margin-right: 20px;
        margin-bottom: 20px;
        span{
          display: block;
          white-space: nowrap;
          padding: 0 5px;
        }
      }
    }
    .content{
      margin: 15px 0;
      .image{
        width: 50px;
      }
    }
  }
</style>
