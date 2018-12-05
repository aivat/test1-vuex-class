import Vue from 'vue'
import Vuex from 'vuex'
import { todos } from './store/modules/todos';
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
export const store = new Vuex.Store(todos)