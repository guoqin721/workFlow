<template>
  <div class="app-wrapper">
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
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

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
