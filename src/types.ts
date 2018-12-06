// export interface IRootState {
//     version: string
//   }
export interface TodoState {
  todos: Todo[]
}

export interface Todo {
  text: string,
  checked: boolean
}