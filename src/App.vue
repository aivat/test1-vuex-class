<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view/> -->
    <ul>
      <li v-for="todo in todos"> {{ todo.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { Todo } from './types'

@Component
export default class App extends Vue {
  @State todos!: Todo[]
  // @State('todos') todos!: Todo[]
}
</script>

<style>

</style>
