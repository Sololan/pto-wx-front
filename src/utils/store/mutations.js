import {Mutations} from '../constant'

const mutations = {
  [Mutations.SetToken] (state, token) {
    state.token = token
  },
  [Mutations.ClearToken] (state) {
    state.token = ''
  },
  [Mutations.SetAgreement] (state, agreement) {
    if (!agreement) return
    state.agreement = {
      success: true,
      privacyAgreement: JSON.parse(agreement.privacyAgreement),
      userAgreement: JSON.parse(agreement.userAgreement)
    }
  }
}

export default mutations
