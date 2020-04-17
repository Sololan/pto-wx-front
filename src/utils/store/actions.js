import HttpUtil from '../http'
import {Actions, Mutations} from '../constant'

const actions = {
  [Actions.GetAgreement] ({commit, state}) {
    if (state.agreement.success) return
    HttpUtil.get({api: '/base/info/findJiaSpaceAgreement'}).then((agreement) => commit(Mutations.SetAgreement, agreement))
  }
}

export default actions
