// pages/dance/dance.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 2,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 3,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 4,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
      {
        imageurl: '/res/videos/homeimg/video01.jpg',
        videourl: 'res/videos/video01.mp4',
        hardlevel: 1,
        teacher: 2,
        dancetype: 3
      },
    ]
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
    switch (event.currentTarget.dataset.kind) {
      case 'diffcult':
        func = event.currentTarget.dataset.sorttype == 'asc' ? desc_difficult : asc_difficult;
        break;
      case 'teacher':
        func = event.currentTarget.dataset.sorttype == 'asc' ? desc_teacher : asc_teacher;
        break;
      case 'type':
        func = event.currentTarget.dataset.sorttype == 'asc' ? desc_danceType : asc_danceType;
        break;
    }
    that.setData({
      courses: that.data.courses.sort(func)
    })
  }
})

function asc_difficult(data1, data2) {
  return data1.hardlevel - data2.hardlevel
}
function desc_difficult(data1, data2) {
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