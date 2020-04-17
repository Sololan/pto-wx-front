import { WechatError } from '../constant'

const NativeUtil = {
  // 获取系统信息
  getSystemInfo () {
    return new Promise((resolve) => mpvue.getSystemInfo({ success: resolve, fail: handleFail }))
  },
  // 检查小程序版本更新
  checkForUpdate () {
    const updateManager = mpvue.getUpdateManager()
    updateManager.onUpdateReady(() => {
      showModal('更新提示', '新版本已经准备好，是否重启应用？').then((res) => {
        if (res.confirm) updateManager.applyUpdate()
      })
    })
  },
  // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
  switchTab (url) {
    if (url.indexOf('/') === 0) url = url.substring(1)
    return new Promise((resolve) => mpvue.switchTab({ url: `/${url}`, success: resolve, fail: handleFail }))
  },
  // 关闭所有页面，打开到应用内的某个页面
  reLaunch (url) {
    if (url.indexOf('/') === 0) url = url.substring(1)
    return new Promise((resolve) => mpvue.reLaunch({ url: `/${url}`, success: resolve, fail: handleFail }))
  },
  // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面
  redirectTo (url) {
    if (url.indexOf('/') === 0) url = url.substring(1)
    return new Promise((resolve) => mpvue.redirectTo({ url: `/${url}`, success: resolve, fail: handleFail }))
  },
  // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面
  navigateTo (url, events) {
    if (url.indexOf('/') === 0) url = url.substring(1)
    return new Promise((resolve) => mpvue.navigateTo({ url: `/${url}`, events, success: resolve, fail: handleFail }))
  },
  // 关闭当前页面，返回上一页面或多级页面
  navigateBack (delta) {
    return new Promise((resolve) => mpvue.navigateBack({ delta, success: resolve, fail: handleFail }))
  },
  // 隐藏返回首页按钮。微信7.0.7版本起，当用户打开的小程序最底层页面是非首页时，默认展示“返回首页”按钮，开发者可在页面 onShow 中调用 hideHomeButton 进行隐藏
  hideHomeButton () {
    return new Promise((resolve) => mpvue.hideHomeButton({ success: resolve }))
  },
  // 显示成功消息提示框（最多显示7个汉字长度）
  showOkToast (title) {
    if (title === undefined) title = '成功'
    return showToast(title)
  },
  // 显示失败消息提示框（最多可显示两行）
  showFailToast (title) {
    if (title === undefined) title = '失败'
    return showToast(title, 'none')
  },
  // 显示提示
  showAlert (content, title) {
    return showModal(title, content, false)
  },
  // 询问框
  showConfirm (content, title) {
    return showModal(title, content)
  },
  // 显示 loading 提示框
  showLoading (title) {
    return new Promise((resolve) => mpvue.showLoading({ title, mask: true, success: resolve, fail: handleFail }))
  },
  // 隐藏 loading 提示框
  hideLoading () {
    return new Promise((resolve) => mpvue.hideLoading({ success: resolve, fail: handleFail }))
  },
  // 动态设置当前页面的标题
  setNavigationBarTitle (title) {
    return new Promise((resolve) => mpvue.setNavigationBarTitle({ title, success: resolve, fail: handleFail }))
  },
  // 停止当前页面下拉刷新
  stopPullDownRefresh () {
    return new Promise((resolve) => mpvue.stopPullDownRefresh({ success: resolve, fail: handleFail }))
  },
  // 将页面滚动到目标位置（滚动距离）
  distanceScrollTo (scrollTop, duration) {
    return pageScrollTo(scrollTop, undefined, duration)
  },
  // 将页面滚动到目标位置（选择器）
  selectorScrollTo (selector, duration) {
    return pageScrollTo(undefined, selector, duration)
  },
  // 延迟一部分操作到下一个时间片再执行
  nextTick () {
    return new Promise(resolve => mpvue.nextTick(resolve))
  },
  // 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
  hideKeyboard () {
    return new Promise((resolve) => mpvue.hideKeyboard({ success: resolve, fail: handleFail }))
  },
  // 发起 HTTPS 网络请求
  request (url, data, header, method) {
    return new Promise((resolve, reject) => mpvue.request({ url, data, header, method, success: resolve, fail: handleFail }))
  },
  // 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 50MB
  downloadFile (url, header, filePath) {
    return new Promise((resolve) => mpvue.downloadFile({ url, header, filePath, success: resolve, fail: handleFail }))
  },
  // 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data
  uploadFile (url, filePath, name, header, formData) {
    return new Promise((resolve) => mpvue.uploadFile({ url, filePath, name, header, formData, success: resolve, fail: handleFail }))
  },
  // 创建一个 WebSocket 连接
  connectSocket (url, header) {
    let socketTask
    return new Promise((resolve) => (socketTask = mpvue.connectSocket({ url, header, success: resolve, fail: handleFail }))).then(() => socketTask)
  },
  // 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB
  setStorage (key, data) {
    return new Promise((resolve) => mpvue.setStorage({ key, data, success: resolve, fail: handleFail }))
  },
  // 从本地缓存中移除指定 key
  removeStorage (key) {
    return new Promise((resolve) => mpvue.removeStorage({ key, success: resolve, fail: handleFail }))
  },
  // 异步获取当前storage的相关信息
  getStorageInfo () {
    return new Promise((resolve) => mpvue.getStorageInfo({ success: resolve, fail: handleFail }))
  },
  // 从本地缓存中异步获取指定 key 的内容
  getStorage (key) {
    return new Promise((resolve) => mpvue.getStorage({ key, success: resolve, fail: handleFail }))
  },
  // 清理本地数据缓存
  clearStorage () {
    return new Promise((resolve) => mpvue.clearStorage({ success: resolve, fail: handleFail }))
  },
  // 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作
  previewImage (urls, current) {
    return new Promise((resolve) => mpvue.previewImage({ urls, current, success: resolve, fail: handleFail }))
  },
  // 压缩图片接口，可选压缩质量
  compressImage (src, quality) {
    return new Promise((resolve) => mpvue.compressImage({ src, quality, success: resolve, fail: handleFail }))
  },
  // 从本地相册选择图片或使用相机拍照
  chooseImage (count, sizeType, sourceType) {
    return new Promise((resolve) => mpvue.chooseImage({ count, sizeType, sourceType, success: resolve, fail: handleFail }))
  },
  // 创建 camera 上下文 CameraContext 对象
  createCameraContext () {
    return mpvue.createCameraContext()
  },
  // 调用接口获取登录凭证（code）
  login () {
    return new Promise((resolve) => mpvue.login({ success: resolve, fail: handleFail }))
  },
  // 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
  authorize (scope) {
    return new Promise((resolve) => mpvue.authorize({ scope, success: resolve, fail: handleFail }))
  },
  // 获取用户的当前设置
  getSetting () {
    return new Promise((resolve) => mpvue.getSetting({ success: resolve, fail: handleFail }))
  },
  // 2.8.2 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面
  requestSubscribeMessage (tmplIds) {
    return new Promise((resolve) => mpvue.requestSubscribeMessage({ tmplIds, success: resolve, fail: handleFail }))
  },
  // 调起客户端扫码界面进行扫码
  scanCode (onlyFromCamera, scanType) {
    return new Promise((resolve, reject) => mpvue.scanCode({ onlyFromCamera, scanType, success: resolve, fail: reject }))
  }
}

/**
 * 处理错误
 * @param error
 */
function handleFail (error) {
  console.error(error.errMsg)
  NativeUtil.showAlert(error.errMsg, WechatError)
}

// 显示消息提示框
function showToast (title, icon) {
  return new Promise((resolve) => mpvue.showToast({ title, icon, mask: true, success: () => setTimeout(resolve, 1500), fail: handleFail }))
}

// 显示模态对话框
function showModal (title, content, showCancel) {
  if (title === undefined) title = '信息'
  return new Promise((resolve) => mpvue.showModal({ title, content, showCancel, success: resolve, fail: (error) => console.log(error.errMsg) }))
}

// 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
function pageScrollTo (scrollTop, selector, duration) {
  return new Promise((resolve) => mpvue.pageScrollTo({ scrollTop, selector, duration, success: resolve, fail: handleFail }))
}

export default NativeUtil
