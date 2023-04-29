import { getToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatat: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
