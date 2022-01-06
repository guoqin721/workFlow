import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings
// import { initUserInfo, findMenuItem } from './utils';
import { setObjectToSessionStorage, findItemFromList, treeDataTranslate, getObjectFromSessionStorage } from '@/utils';
const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  // 浏览器客户区高度
  documentClientHeight: 100,
  // 浏览器客户区宽度
  documentClientWidth: undefined,
  // 缓存页面
  cachePages: getObjectFromSessionStorage('cachePages', []),
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  addCachePage (state, name) {
    if (state.cachePages.indexOf(name) === -1) {
      let temp = [...state.cachePages];
      temp.push(name);
      setObjectToSessionStorage('cachePages', temp);
      state.cachePages = temp;
    }
  },
  setClientHeight: (state, height) => {
    state.documentClientHeight = height;
  },
  setClientWidth: (state, width) => {
    state.documentClienWidth = width;
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

