import { Module } from 'vuex'
import { TodoState } from '../../types'
import { GetterTree } from 'vuex'
import { ActionTree } from 'vuex'
import { MutationTree } from 'vuex'

// interface ITodosState {
//     id: number;
//     name: string;
//   }

export const state: TodoState = {
    todos: [
        { text: 'Айват', checked: false},
        { text: 'Лена', checked: false},
        { text: 'Татьяна', checked: true}
    ]
}
// export const todos = {
//     state
// }

export const getters: GetterTree<TodoState, any> = {
    todos: state => state.todos.filter(todo => !todo.checked),
    dones: state => state.todos.filter(todo => todo.checked)
}

export const mutations: MutationTree<TodoState> = {
    addTodo(state, newTodo) {
        const todoCopy = Object.assign({}, newTodo)
        state.todos.push(todoCopy)
    },
    toggleTodo(state, todo) {
        todo.checked = !todo.checked
    }
}
export const actions: ActionTree<TodoState, any> = {

}

export const todos = {
    state,
    getters,
    mutations
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
