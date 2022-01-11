import { initUserInfo } from '../utils'
import { setObjectToSessionStorage, getToken } from '@/utils'
import { SystemController } from '@/api'
import Vue from 'vue'

const getDefaultState = () => {
  return {
    token: getToken(),
    // name: '',
    // avatar: '',
    userInfo: initUserInfo()
  }
}

const state = getDefaultState()

const mutations = {
  SET_USER_INFO: (state, info) => {
    setObjectToSessionStorage('userInfo', info)
    state.userInfo = initUserInfo(info)
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.log('this', this, Vue, Vue.prototype)
      SystemController.getLoginInfo(Vue.prototype, {}).then(response => {
        const { data } = response
        console.log('333', data)
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      setObjectToSessionStorage('token', null) // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

