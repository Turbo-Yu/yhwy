// pages/content/content.js

const host = 'https://yhwy.xyz'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    teacherarr: [],
    videoobj: {},
    teachers: [
      {
        courseids: [1, 2, 3, 7, 9, 12],
        imgurl: host + '/res/img/teachers/liuhaiming.jpg',
        headname: '校长',
        name: '刘海明',
        description: '　　青年舞蹈编导乌兰察布优秀舞蹈教师 毕业于内蒙古大学艺术学院 内蒙古舞蹈家协会会员 创作作品《呼唤》《察哈尔骑士》《牧童》等作品荣获全国各项大奖! 曾多次担任春晚及个大型音乐节舞蹈总监！'
      },
      {
        courseids: [2, 3, 4, 8, 10],
        imgurl: host + '/res/img/teachers/wangxianyun.jpg',
        headname: '教师',
        name: '王鲜云',
        description: '　　少儿舞蹈教育家,从事舞蹈工作40余年，曾多次参与国内外各大演出及红色主题政治晚会……在艺术教育的道路上培养出了众多的出色人才！现都活跃在内蒙古自治区文艺工作的一线！'
      },
      {
        courseids: [3, 4, 5, 12, 11, 9],
        imgurl: host + '/res/img/teachers/haoshanyi.jpg',
        headname: '教师',
        name: '郝珊艺',
        description: '　　乌兰察布市优秀青年舞蹈教师，国家三级演员，毕业于云南艺术学院，主修专业民族民间舞、国标舞。任职与乌兰察布市艺术学校，曾荣获第四节"七彩云南"杯优秀表演奖，多次参加大型舞台剧"云南印象"与著名舞蹈家杨丽萍同台演出《雀之灵》。'
      },
      {
        courseids: [4, 5, 6, 1, 11, 8],
        imgurl: host + '/res/img/teachers/zhangxiong.jpg',
        headname: '教师',
        name: '张雄',
        description: '　　乌兰察布优秀舞蹈教师，青年舞蹈家，毕业于内蒙古大学艺术学院，毕业后赴北京舞蹈学院进修中国民族民间舞，作品《酒香情浓》《心灵睡过的地方》《励练》《塔拉额吉》等作品荣获全国及国际各项大奖! 曾担任音乐剧《拓跋大帝》 、舞剧《追寻》男一号 ，2017年受邀参加中央电视台《综艺盛典》！'
      },
      {
        courseids: [5, 6, 7, 2, 10, 12],
        imgurl: host + '/res/img/teachers/litiantian.jpg',
        headname: '教师',
        name: '李甜甜',
        description: '　　乌兰察布市青年优秀舞蹈教师，毕业于内蒙古大学艺术学院，进修于中央民族大学民族舞蹈研究专修班。代表作品《春天》《追寻》等作品荣获全国各项大奖，曾多次担任各大型晚会及舞剧女一号。'
      },
      {
        courseids: [6, 7, 8, 3, 11, 1],
        imgurl: host + '/res/img/teachers/guoyubo.jpg',
        headname: '教师',
        name: '郭宇擘',
        description: '　　乌兰察布市优秀青年舞蹈教师，毕业于北京现代音乐学院，进修于北京CBDF国际标准舞大师班，曾获得北京赛区男子单人拉丁表演金奖，华北赛区男子六人组最佳表演奖，多次担任各大型演出少儿国标舞编导。'
      },
      {
        courseids: [7, 8, 9, 12, 3, 11],
        imgurl: host + '/res/img/teachers/wangjing.jpg',
        headname: '教师',
        name: '王静',
        description: '　　国家三级演员，内蒙古舞蹈家协会会员，乌兰察布市舞蹈家协会理事，2005年毕业于内蒙古艺术学院，2006年在集宁乌兰牧骑工作至今，2007年编创的少儿舞蹈《勤劳的小蜜蜂》荣获少儿舞蹈比赛一等奖，2008年舞蹈《我可爱的家乡》荣获自治区五个一工程奖！'
      }
    ],
    courses: [
      {
        imageurl: host + '/res/videos/video01/homeimg.jpg',
        videourl: host + '/res/videos/video01/video.mp4',
        index: 1,
        hardlevel: 1,//1:入门,2:简单,3:普通,4:困难,5:极难
        teacher: 2,//主教老师:1:刘海明,2:王鲜云,3:郝珊艺,4:张雄,5:李甜甜,6:郭宇孹,7:王静
        dancetype: 2,//1:民族民间舞,2:国标,3:芭蕾基训
        dancename:'国标'
      },
      {
        imageurl: host + '/res/videos/video02/homeimg.jpg',
        videourl: '',
        index: 2,
        hardlevel: 2,
        teacher: 2,
        dancetype: 1,
        dancename: '民族民间舞'
      },
      {
        imageurl: host + '/res/videos/video03/homeimg.jpg',
        videourl: '',
        index: 3,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3,
        dancename: '芭蕾基训'
      },
      {
        imageurl: host + '/res/videos/video04/homeimg.jpg',
        videourl: '',
        index: 4,
        hardlevel: 4,
        teacher: 2,
        dancetype: 1,
        dancename: '民族民间舞'
      },
      {
        imageurl: host + '/res/videos/video05/homeimg.jpg',
        videourl: host + '/res/videos/video05/video.mp4',
        index: 5,
        hardlevel: 4,
        teacher: 2,
        dancetype: 2,
        dancename: '国标'
      },
      {
        imageurl: host + '/res/videos/video11/homeimg.jpg',
        videourl: host + '/res/videos/video11/video.mp4',
        index: 6,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3,
        dancename: '芭蕾基训'
      },
      {
        imageurl: host + '/res/videos/video12/homeimg.jpg',
        videourl: '',
        index: 7,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3,
        dancename: '芭蕾基训'
      },
      {
        imageurl: host + '/res/videos/video14/homeimg.jpg',
        videourl: '',
        index: 8,
        hardlevel: 5,
        teacher: 2,
        dancetype: 1,
        dancename: '民族民间舞'
      },
      {
        imageurl: host + '/res/videos/video15/homeimg.jpg',
        videourl: '',
        index: 9,
        hardlevel: 4,
        teacher: 2,
        dancetype: 2,
        dancename: '国标'
      },
      {
        imageurl: host + '/res/videos/video16/homeimg.jpg',
        videourl: '',
        index: 10,
        hardlevel: 4,
        teacher: 2,
        dancetype: 1,
        dancename: '民族民间舞'
      },
      {
        imageurl: host + '/res/videos/video17/homeimg.jpg',
        videourl: '',
        index: 11,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3,
        dancename: '芭蕾基训'
      },
      {
        imageurl: host + '/res/videos/video18/homeimg.jpg',
        videourl: '',
        index: 12,
        hardlevel: 2,
        teacher: 2,
        dancetype: 3,
        dancename: '芭蕾基训'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var index = parseInt(options.index)
    var teacherarr = this.data.teachers.findAll((n) => n.courseids.contains(index))
    var videoobj = this.data.courses.find((n) => n.index == index)
    this.setData({
      teacherarr: teacherarr,
      videoobj: videoobj
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

Array.prototype.contains = function (needle) {
  for (var i in this) {
    if (this[i] == needle) return true;
  }
  return false;
}
//在数组中查找所有出现的x，并返回一个包含匹配索引的数组
Array.prototype.findAll = function (func) {
  var results = [],
    len = this.length,
    pos = 0;
  while (pos < len) {
    if (func(this[pos])) {//未找到就退出循环完成搜索
      results.push(this[pos]);//找到就存储索引
    }
    pos += 1;//并从下个位置开始搜索
  }
  return results;
}