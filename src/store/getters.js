const getters = {
  // device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  getUserInfo: (state) => state.user.userInfo,
  getClientHeight: (state) => state.settings.documentClientHeight,
  getClientWidth: (state) => state.settings.documentClienWidth,
}
export default getters
