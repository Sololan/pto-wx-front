export const Gateway = {
  Wechat: process.env.GATEWAY_WECHAT,
  Uc: process.env.GATEWAY_UC
}
export const HttpMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Upload: 'UPLOAD'
}
export const HttpCode = {
  Ok: 200,
  Unauthorized: 401,
  NotFound: 404
}
export const EventName = {
  FromOpenerPage: 'fromOpenerPage',
  FromOpenedPage: 'fromOpenedPage'
}
export const Actions = {
  GetAgreement: 'getAgreement'
}
export const Mutations = {
  SetToken: 'setToken',
  ClearToken: 'clearToken',
  SetAgreement: 'setAgreement'
}
export const PolicyType = {
  Privacy: 'privacy',
  User: 'user'
}
export const ScheduleType = {
  Attend: 'attend',
  SignIn: 'signIn'
}

export const WechatError = '微信接口调用异常'
export const RequestError = '请求异常'
export const SuccessCode = 0
export const PasswordError = '用户名或密码错误'
export const LoginInfoInvalid = '登录信息失效，请重新登录'
export const LoginError = '登录异常'
