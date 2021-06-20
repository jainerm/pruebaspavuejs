import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'

import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);

Vue.loadScript("/lib/jquery.jcarousel.pack.js")
    .then(() => {
      Vue.loadScript("/lib/jquery.jcarousel.setup.js")
      .then(() => {
        Vue.loadScript("/lib/jquery.min.js")
        .then(() => {
          // Script is loaded, do something
        })
        .catch(() => {
          // Failed to fetch script
        });
        // Script is loaded, do something
      })
      .catch(() => {
        // Failed to fetch script
      });
      // Script is loaded, do something
    })
    .catch(() => {
      // Failed to fetch script
    }
);
    
// The Style
import '../statics/styles/layout.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
