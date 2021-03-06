// pages/Home/Quiz/Quiz.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    'value': '',   // 文本的内容
    'maxlength': -1,  // 最大输入长度，设置为 -1 的时候不限制最大长度
    'focus': true,
    'auto-height': true,  // 是否自动增高，设置auto-height时，style.height不生效
    'adjust-position': true // 键盘弹起时，是否自动上推页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  titleInput: function (event) {
    this.setData({
      title:event.detail.value
    })
  },

  detailInput: function (event) {
    this.setData({
      detail: event.detail.value
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