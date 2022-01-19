import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import App from './App'
import store from './store'
import router from './router'

import '@/core/http'
import '@/core/mixins/global.js'
import '@/icons' // icon
import '@/permission' // permission control
import DateRange from '@/components/DateRange'
import FilterBox from '@/components/FilterBox'

Vue.component('date-range', DateRange)
Vue.component('filter-box', FilterBox)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable-next-line */
if (window.__POWERED_BY_QIANKUN__) {
/* eslint-disable-next-line */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
let instance = null;

function render (props = {}) {
  const { container } = props
  router.base = window.__POWERED_BY_QIANKUN__ ? '/setting/loadVueApp/vue/' : '/'
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
  //   mode: 'history',
  //   routes: router.routes
  // });
  console.log('container', container)
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app2') : '#app2');
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest (props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => {
        // setToken(value.token);
        // const token = getToken()
        console.log("sessionStorage.getItem('token')", sessionStorage.getItem('token'))
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
      }
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name
      }
    });
}
  
export async function bootstrap () {
  console.log('[vue] vue app bootstraped');
}

export async function mount (props) {
  console.log('[vue] props from main framework', props);
  props.container.className = 'orange-project'
  storeTest(props);
  render(props);
}

export async function unmount () {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}

new Vue({
  el: '#app2',
  router,
  store,
  render: h => h(App)
})
