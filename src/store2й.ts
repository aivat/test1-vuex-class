import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './store/modules/todos';
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
export const store = new Vuex.Store({ state })