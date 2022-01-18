<template>
  <div id="work-flow-project" class="app-wrapper">
    <div class="main-container">
      <div class="fixed-header" style="border-bottom: 1px solid rgb(220, 223, 230);">
        <breadcrumb />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import '@/staticDict/onlineStaticDict.js'
import AppMain from './AppMain'
import Breadcrumb from '@/components/Breadcrumb'
import { mapGetters } from 'vuex'
import { SystemController } from '@/api'
import { getToken } from '@/utils'

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    AppMain
  },
  computed: {
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    ...mapGetters(['getUserInfo'])
  },
  mounted() {
    const resetHeight = this.resetDocumentClientHeight()
    resetHeight()
    window.onresize = () => {
      resetHeight()
    }
    // 重新获取登录信息
    // if (getToken() != null && getToken() !== '' && this.getUserInfo == null) {
    //   SystemController.getLoginInfo(this, {}).then(data => {
    //     delete data.data.menuList
    //     this.$store.commit('user/SET_USER_INFO', data.data)
    //   }).catch(e => {})
    // }
  },
  methods: {
    resetDocumentClientHeight() {
      let timerID
      return () => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
          var h = document.documentElement['clientHeight']
          var w = document.documentElement['clientWidth']
          this.$store.commit('settings/SET_CLIENT_HEIGHT', h)
          this.$store.commit('settings/SET_CLIENT_WIDTH', w)
        }, 50)
      }
    }
  }
}
</script>

