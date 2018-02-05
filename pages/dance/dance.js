// pages/dance/dance.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        imageurl: '/res/videos/video01/homeimg.jpg',
        videourl: 'res/videos/video01/video.mp4',
        index: 1,
        hardlevel: 1,
        teacher: 2,
        dancetype: 2
      },
      {
        imageurl: '/res/videos/video02/homeimg.jpg',
        videourl: 'res/videos/video02/video.mp4',
        index: 2,
        hardlevel: 2,
        teacher: 2,
        dancetype: 1
      },
      {
        imageurl: '/res/videos/video03/homeimg.jpg',
        videourl: 'res/videos/video03/video.mp4',
        index: 3,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video04/homeimg.jpg',
        videourl: 'res/videos/video04/video.mp4',
        index: 4,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video12/homeimg.jpg',
        videourl: 'res/videos/video12/video.mp4',
        index: 5,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video14/homeimg.jpg',
        videourl: 'res/videos/video14/video.mp4',
        index: 6,
        hardlevel: 3,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video15/homeimg.jpg',
        videourl: 'res/videos/video15/video.mp4',
        index: 7,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video16/homeimg.jpg',
        videourl: 'res/videos/video16/video.mp4',
        index: 8,
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video17/homeimg.jpg',
        videourl: 'res/videos/video17/video.mp4',
        index: 9,
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video18/homeimg.jpg',
        videourl: 'res/videos/video018/video.mp4',
        index: 10,
        hardlevel: 2,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/video19/homeimg.jpg',
        videourl: 'res/videos/video019/video.mp4',
        index: 11,
        hardlevel: 5,
        teacher: 2,
        dancetype: 3
      },
    ],
    hard_asc: true,
    teacher_asc: true,
    dance_asc: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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