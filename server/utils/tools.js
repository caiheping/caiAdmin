// 格式歌词
function getSong(str) {
  let arr = []
  let newArr = []
  str.split(/\n/g).forEach(item => {
    if (item.replace(/(^\s*)|(\s*$)/g, "")) {
      arr = [...arr, item.replace(/(^\s*)|(\s*$)/g, "")]
    }
  })
  arr.forEach(list => {
    let obj = {
      time: list.substr(list.indexOf('[')+1,list.indexOf(']')-1),
      lyrics: list.substr(list.indexOf(']')+1)
    }
    newArr = [...newArr, obj]
  })
  return newArr
}

module.exports = {
  getSong
}