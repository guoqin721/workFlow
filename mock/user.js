
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
const menuList = [
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "formRouterName": "formFlowCategory",
    "menuId": 1418057835631087611,
    "menuName": "流程分类",
    "menuType": 1,
    "parentId": 1418057714138878000,
    "showOrder": 1,
    "updateTime": "2021-09-23 00:00:00",
    "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "formRouterName": "formFlowEntry",
    "menuId": 1418058289182150700,
    "menuName": "流程设计",
    "menuType": 1,
    "parentId": 1418057714138878000,
    "showOrder": 2,
    "updateTime": "2021-09-23 00:00:00",
    "updateUserId": 1440911410581213400
  },
  {
    "createTime": "2021-09-23 00:00:00",
    "createUserId": 1440911410581213400,
    "deletedFlag": 1,
    "formRouterName": "formAllInstance",
    "menuId": 1418058744037642200,
    "menuName": "流程实例",
    "menuType": 1,
    "parentId": 1418057714138878000,
    "showOrder": 3,
    "updateTime": "2021-09-23 00:00:00",
    "updateUserId": 1440911410581213400
  },
]
module.exports = [
  // user mune
  {
    url: 'admin/menu/list',
    type: 'get',
    response: config => {

      return {
        code: 20000,
        data: {
          success: true,
          menuList
        }
      }
    }
  },
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
