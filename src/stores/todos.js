import { defineStore } from 'pinia'

// export const useTodos = defineStore('todos', () => {
// 	let todos = ref([]);
// 	const changeTodos = (val) => {
// 		todos.value.push(val);
// 	}
// 	return {
// 		todos,
// 		changeTodos,
// 	}
// });

export const useTodos = defineStore('todos', {
	state: () => ({
		todos: []
	}),
	getters: {},
	actions: {
		changeTodos(val) {
			console.log(val);
			console.log(this, this.todos)
			this.todos.push(val);
		}
	},
});
