import Vue from "vue";
import VueCompositionApi from '@vue/composition-api'; Vue.use(VueCompositionApi);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCompositionApi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
