<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/> -->
    <h4>Todo</h4>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)">{{ todo.text }}
      </li>
    </ul>
    <h4>Dones</h4>
    <ul>
      <li v-for="done in dones">
        <input type="checkbox" :checked="done.checked" @change="toggleTodo(done)"> {{ done.text }}
      </li>
    </ul>

    <p>
      <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)">
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'
import { Todo } from './types'

@Component
export default class App extends Vue {
  //@State(state => state.todos) bla!: Todo[]
  // @State('todos') todos!: Todo[]
  @Getter todos!: Todo[]
  @Getter dones!: Todo[]

  @Mutation addTodo
  @Mutation toggleTodo

  newTodo: Todo = {
    text: '',
    checked: false
  }
}
</script>

<style>

</style>
