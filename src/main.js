import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer
})
 
Vue.use(VueFbCustomerChat, {
  page_id: 'barrajanos', //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
