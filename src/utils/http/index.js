import {Gateway, HttpCode, HttpMethod, LoginError, LoginInfoInvalid, Mutations, PasswordError, SuccessCode} from '../constant'
import NativeUtil from '../native'
import StoreUtil from '../store'

const HttpUtil = {
  async login (username, password) {
    const {code} = await NativeUtil.login()
    const requestUrl = `${process.env.SITE_URL}/login/oauth/callback`
    if (!username) username = ''
    if (!password) password = ''
    const response = await NativeUtil.request(requestUrl, {type: 'wx', code, username, password}, undefined, HttpMethod.Get)
    if (response.statusCode === HttpCode.Unauthorized) throw new Error(PasswordError)
    if (response.statusCode !== HttpCode.Ok || (response.statusCode === HttpCode.Ok && response.data.code !== SuccessCode)) throw new Error(LoginError)
    StoreUtil.commit(Mutations.SetToken, response.data.data.token)
    return response.data.data.token
  },
  async get ({api, gateway, data, header}) {
    return doRequest({api, gateway, data, header, method: HttpMethod.Get})
  },
  async post ({api, gateway, data, header}) {
    return doRequest({api, gateway, data, header, method: HttpMethod.Post})
  },
  async put ({api, gateway, data, header}) {
    return doRequest({api, gateway, data, header, method: HttpMethod.Put})
  },
  async delete ({api, gateway, data, header}) {
    return doRequest({api, gateway, data, header, method: HttpMethod.Delete})
  },
  async upload ({api, gateway, filePath, data, header}) {
    if (!gateway) gateway = Gateway.Uc
    const requestUrl = getRequestUrl(api, gateway)
    const requestHeader = getRequestHeader(header)
    const response = await NativeUtil.uploadFile(requestUrl, filePath, 'file', requestHeader, data)
    return handleRequestResponse({response, api, gateway, data, header: requestHeader, method: HttpMethod.Upload, filePath})
  }
}

/**
 * 获取请求路径
 * @param api
 * @param gateway
 * @returns {string}
 */
function getRequestUrl (api, gateway) {
  if (!gateway) gateway = Gateway.Wechat
  if (api.indexOf('/') === 0) api = api.substring(1)
  return `${process.env.SITE_URL}/${gateway}/${api}`
}

/**
 * 获取请求头
 * @param header
 * @returns {Object}
 */
function getRequestHeader (header) {
  if (!header) header = {}
  if (StoreUtil.state.token) header['Authorization'] = `Bearer ${StoreUtil.state.token}`
  return header
}

/**
 * 处理请求响应
 * @param response
 * @param api
 * @param gateway
 * @param data
 * @param header
 * @param method
 * @param filePath
 * @returns {Promise<*>}
 */
function handleRequestResponse ({response, api, gateway, data, header, method, filePath}) {
  return new Promise((resolve, reject) => {
    // 请求成功
    if (response.statusCode === 200) {
      if (method === HttpMethod.Upload) response.data = JSON.parse(response.data)
      response.data.code === SuccessCode ? resolve(response.data.data) : reject(response.data)
      return
    }
    // token失效，自动刷新token，再次请求
    if (response.statusCode === 401) {
      if (header['Authorization']) {
        NativeUtil.showAlert(LoginInfoInvalid).then((res) => {
          if (res.confirm) NativeUtil.reLaunch('pages/common/login/main')
        })
        return
      }
      HttpUtil.login().then(() => {
        if (method === HttpMethod.Get) {
          HttpUtil.get({api, gateway, data, header}).then(resolve)
        } else if (method === HttpMethod.Post) {
          HttpUtil.post({api, gateway, data, header}).then(resolve)
        } else if (method === HttpMethod.Put) {
          HttpUtil.put({api, gateway, data, header}).then(resolve)
        } else if (method === HttpMethod.Delete) {
          HttpUtil.delete({api, gateway, data, header}).then(resolve)
        } else if (method === HttpMethod.Upload) {
          HttpUtil.upload({api, gateway, filePath, data, header}).then(resolve)
        }
      })
      return
    }
    NativeUtil.redirectTo(`pages/common/error/main?statusCode=${response.statusCode}`)
  })
}

/**
 * 发起请求
 * @param api
 * @param gateway
 * @param data
 * @param header
 * @param method
 * @returns {Promise<*>}
 */
async function doRequest ({api, gateway, data, header, method}) {
  const requestUrl = getRequestUrl(api, gateway)
  const requestHeader = getRequestHeader(header)
  const response = await NativeUtil.request(requestUrl, data, requestHeader, method)
  return handleRequestResponse({response, api, gateway, data, header: requestHeader, method})
}

export default HttpUtil
