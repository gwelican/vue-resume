import Vue from 'vue'
import Resume from './Resume.vue'
import vuetify from './plugins/vuetify'
import createRouter from './router'

Vue.config.productionTip = false

export default () => {
  const router = createRouter()
  return new Vue({
    vuetify,
    router,
    render: h => h(Resume)
  })
}
