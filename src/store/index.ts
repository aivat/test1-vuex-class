import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex'

//import { state, getters, mutations } from './modules/todos';

import { todos } from './modules/todos'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todos
    }
})
// export const store = new Vuex.Store({
//     state,
//     getters,
//     mutations
// })

// export interface IRootState {
//   hotels: IHotelsStateList;
//   hotel: IHotelState;
// }

// interface IRootState {
//   version: string
// }
// export const storeOptions: StoreOptions<IRootState> = {
//     state: {
//       version: '1.0.0', // a simple property
//     },
//     modules: {
//         todos
//     },
//   }

// export default new Vuex.Store<IRootState>(storeOptions)
