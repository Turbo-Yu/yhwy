// pages/dance/dance.js

const host = 'https://yhwy.xyz'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        imageurl: host + '/res/videos/video01/homeimg.jpg',
        videourl: host + 'res/videos/video01/video.mp4',
        index: 1,
        hardlevel: 1,//1:入门,2:简单,3:普通,4:困难,5:极难
        teacher: 2,//主教老师:1:刘海明,2:王鲜云,3:郝珊艺,4:张雄,5:李甜甜,6:郭宇孹,7:王静
        dancetype: 2//1:芭蕾舞,2:国标,3:芭蕾基训
      },
      {
        imageurl: host + '/res/videos/video02/homeimg.jpg',
        videourl: '',
        index: 2,
        hardlevel: 2,
        teacher: 2,
        dancetype: 1
      },
      {
        imageurl: host + '/res/videos/video03/homeimg.jpg',
        videourl: '',
        index: 3,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video04/homeimg.jpg',
        videourl: '',
        index: 4,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      }, 
      {
        imageurl: host + '/res/videos/video05/homeimg.jpg',
        videourl: host + 'res/videos/video05/video.mp4',
        index: 5,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video11/homeimg.jpg',
        videourl: host + 'res/videos/video11/video.mp4',
        index: 6,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video12/homeimg.jpg',
        videourl: '',
        index: 7,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video14/homeimg.jpg',
        videourl: '',
        index: 8,
        hardlevel: 5,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video15/homeimg.jpg',
        videourl: '',
        index: 9,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video16/homeimg.jpg',
        videourl: '',
        index: 10,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video17/homeimg.jpg',
        videourl: '',
        index: 11,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: host + '/res/videos/video18/homeimg.jpg',
        videourl: '',
        index: 12,
        hardlevel: 2,
        teacher: 2,
        dancetype: 3
      },
    ],
    hard_asc: true,
    teacher_asc: true,
    dance_asc: true
  },
  changeOrder: function (event) {
    var that = this;
    var func;
    var order_asc = true;
    switch (event.currentTarget.dataset.kind) {
      case 'all':
        func = asc_all;
        break;
      case 'diffcult':
        order_asc = that.data.hard_asc
        func = order_asc ? desc_hard : asc_hard;
        that.setData({
          hard_asc: !order_asc
        })
        break;
      case 'teacher':
        order_asc = that.data.teacher_asc
        func = order_asc ? desc_teacher : asc_teacher;
        that.setData({
          teacher_asc: !order_asc
        })
        break;
      case 'type':
        order_asc = that.data.dance_asc
        func = order_asc ? desc_danceType : asc_danceType;
        that.setData({
          dance_asc: !order_asc
        })
        break;
    }
    
    that.setData({
      courses: that.data.courses.sort(func)
    })
  },
  openContent: function(event){
    var index = event.currentTarget.dataset.index;
    var obj = this.data.courses.find((n) => n.index == index);
    wx.navigateTo({
      url: '/pages/content/content?index=' + index,
    })
  }
})

function asc_all(data1, data2) {
  return data1.index - data2.index
}
function desc_all(data1, data2) {
  return data2.index - data1.index
}
function asc_hard(data1, data2) {
  return data1.hardlevel - data2.hardlevel
}
function desc_hard(data1, data2) {
  return data2.hardlevel - data1.hardlevel
}
function asc_teacher(data1, data2) {
  return data1.teacher - data2.teacher
}
function desc_teacher(data1, data2) {
  return data2.teacher - data1.teacher
}
function asc_danceType(data1, data2) {
  return data1.dancetype - data2.dancetype
}
function desc_danceType(data1, data2) {
  return data2.dancetype - data1.dancetype
}