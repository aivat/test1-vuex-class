import { Module } from 'vuex'
import { State } from '../../types'
import { ActionTree } from 'vuex'
import { MutationTree } from 'vuex'

// interface ITodosState {
//     id: number;
//     name: string;
//   }

const state: State = {
    todos: [
        { text: 'Айват'}
    ]
}
export const todos = {
    state
}
// export const actions: ActionTree<ITodosState, IRootState> = {
//     editName({commit}): any {
//         setTimeout(()=> {
//             const payload: string = 'Ken'
//             commit('profileLoaded', payload);
//         }, 150)
//     }
// }
// export const mutations: MutationTree<ITodosState> = {
//     EDIT_NAME(state, name: string) {
//         state.name = name
//     }
// }
// const namespaced: boolean = true
// export const todos: Module<ITodosState, IRootState> = {
//     namespaced,
//     state,
//     actions,
//     mutations
// }
