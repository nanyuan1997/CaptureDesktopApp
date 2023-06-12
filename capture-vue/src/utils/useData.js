import { computed, getCurrentInstance } from 'vue'

//封装对todoArray的获取和更新
export function useTodo () {
  const { proxy } = getCurrentInstance()  //获取调用该方法的vue实例
  const todoArray = computed(() => proxy.$store.state.todoArray)  //定义计算属性todoArray
  const updateTodo = (payload) => {   //定义方法
    proxy.$store.commit('SET_TODO_ARRAY', payload)
  }
  return {
    todoArray,
    updateTodo
  }
}

//封装对finishedArray的获取和更新
export function useFinished () {
  //... 和上面todoArray类似
}

//封装对keepTimes的获取和更新
export function useKeepTimes () {
  //... 和上面todoArray类似
}
