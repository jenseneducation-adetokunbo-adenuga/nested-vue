import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import json from "./assets/staff.json";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    staff: json.staff
  }),
  render: h => h(App)
}).$mount("#app");
