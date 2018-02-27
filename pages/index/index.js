//index.js
//获取应用实例
const app = getApp()
const host = 'https://yhwy.xyz'
Page({
  data: {
    showPlayer: 'none',
    showMask: 'none',
    playerUrl: '',
    videourls: [
      {
        imgurl: host + '/res/videos/video11/homeimg.jpg',
        videourl: host + '/res/videos/video11/video.mp4',
        title: '热烈欢迎各位家长的莅临，孩子们热情的舞蹈。',
        visitsum: '104,671次观看'
      },
      {
        imgurl: host + '/res/videos/video01/homeimg.jpg',
        videourl: host + '/res/videos/video01/video.mp4',
        title: '艺海舞苑荣幸参加春晚节目彩排。',
        visitsum: '203,892次观看'
      },
      {
        imgurl: host + '/res/videos/video05/homeimg.jpg',
        videourl: host + '/res/videos/video05/video.mp4',
        title: '艺海舞苑住大家新春快乐',
        visitsum: '125,451次观看'
      }
    ]
  },
  onLoad: function () {
  },
  showPlayer: function (event) {
    this.setData({
      playerUrl: event.currentTarget.dataset.videourl
    })
  },
  closevideo: function () {
    this.setData({
      playerUrl: ""
    })
  }
})
