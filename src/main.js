import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
window.$ =window.jQuery=jQuery;
import 'bootstrap';
import './assets/app.scss';
import 'popper.js';
import {fb} from './firebase';
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})


Vue.use(VueFirestore)

//  

import store from './store.js';

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters)


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

window.Swal=Swal;

Vue.config.productionTip = false;
 
let app='';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){ 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
  }
});

