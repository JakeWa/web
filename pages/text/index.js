Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText:"这是一个按钮",
    text:"这是文本 ",
    show:true,
    abc:["aaa","bbb","ccc","ddd"]
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
  primary:function(){
    var btndata=this.data.btnText
    console.log(btndata)
    var showdata = this.data.show

    var abcdata=this.data.abc
    abcdata.shift()

    this.setData({ btnText: "修改这个按钮的内容", text: "修改文本的内容", show: !showdata, abc: abcdata})

  }
})