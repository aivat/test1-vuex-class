<template>
  <div class="home">
    {{todos}}
    hbhb
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { State, Action } from 'vuex-class';
const namespace: string = 'modules';
interface ITodosState {
    id: number;
    name: string;
  }

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  // @State('todos') stateTodos: any;
@State('modules') todos: any;
 // @State('modules') todos: ITodosState;
  //  @State(state => state.todos) stateTodos: ITodosState
    created () {
    this.todos
  }
}
</script>
