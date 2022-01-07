<template>
  <div class="app-wrapper">
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

export default {
  name: 'Layout',
  components: {
    Breadcrumb,
    AppMain
  },
  computed: {
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    }
  },
  mounted() {
    const resetHeight = this.resetDocumentClientHeight()
    resetHeight()
    window.onresize = () => {
      resetHeight()
    }
  },
  methods: {
    resetDocumentClientHeight() {
      let timerID
      return () => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
          var h = document.documentElement['clientHeight']
          var w = document.documentElement['clientWidth']
          this.$store.commit('settings/setClientHeight', h)
          this.$store.commit('settings/setClientWidth', w)
        }, 50)
      }
    }
  }
}
</script>

