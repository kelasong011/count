// miniprogram/pages/countdown/countdown.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countdown_list:[]
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
    this.setData({
      countdown_list:app.globalData.countdown_list
    })
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
  goToCountdown:function(){
    if(this.data.countdown_list.length>0){
      wx.navigateTo({
        url: './FS_countdown',
      })
    }else{
      wx.showModal({
        title:'没有倒计时',
        content:'必须要设置一个倒计时哦',
        showCancel:false
      })
    }
  },

  //点击删除按钮 实现删除倒计时功能
  deleteItem:function(e){
    var index = e.currentTarget.dataset.idx
    var list = this.data.countdown_list
    var that = this
    wx.showModal({
      title: '删除',
      content:'是否删除' + list[index].time_str,
      success:function(res){
        if(res.confirm){
          list.splice(index,1)
          that.setData({
            countdown_list:list
          })
        }
      }
    })
  },
  //点击添加按钮 跳转到添加计时器页面
  addCountdown:function(){
    wx.navigateTo({
      url:'./countdown_setting'
    })
  }
})