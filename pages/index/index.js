//index.js
//获取应用实例
const app = getApp()
const host = 'https://yhwy.xyz'
Page({
  data: {
    showPlayer: 'none',
    showMask: 'none',
    playerUrl: host + '/res/videos/video01/video.mp4',
    videourls: [
      {
        imgurl: host + '/res/videos/video01/homeimg.jpg',
        videourl: host + '/res/videos/video01/video.mp4',
        title: '你所认为的“杂技”都是BBoy用生命和激情在创造这个世界',
        visitsum: '4671次观看'
      },
      {
        imgurl: host + '/res/videos/video02/homeimg.jpg',
        videourl: host + '/res/videos/video02/video.mp4',
        title: '你所认为的“杂技”都是BBoy用生命和激情在创造这个世界',
        visitsum: '4671次观看'
      },
      {
        imgurl: host + '/res/videos/video03/homeimg.jpg',
        videourl: host + '/res/videos/video03/video.mp4',
        title: '你所认为的“杂技”都是BBoy用生命和激情在创造这个世界',
        visitsum: '4671次观看'
      },
      {
        imgurl: host + '/res/videos/video11/homeimg.jpg',
        videourl: host + '/res/videos/video11/video.mp4',
        title: '你所认为的“杂技”都是BBoy用生命和激情在创造这个世界',
        visitsum: '4671次观看'
      },
      {
        imgurl: host + '/res/videos/video14/homeimg.jpg',
        videourl: '/res/videos/video14/video.mp4',
        title: '你所认为的“杂技”都是BBoy用生命和激情在创造这个世界',
        visitsum: '4671次观看'
      }
    ]
  },
  onLoad: function () {
  },
  showPlayer: function (event) {
    var that = this;
    that.setData({
      showPlayer: 'block',
      showMask: 'block',
      playerUrl: event.currentTarget.dataset.videourl
    })
  },
  closevideo: function () {
    var that = this;
    that.setData({
      showPlayer: 'none',
      showMask: 'none'
    })
  }
})
