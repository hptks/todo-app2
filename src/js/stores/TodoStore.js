import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.todos=[];
	}

	createTodo(text) {
		const id=Date.now();
		this.todos.push({
			id,
			text,
			edit: 0,
			editText: 'Edit',
			val: text
		});

		this.emit('create');
	}

	editTodo(id, text) {
		for (let i=0;i<this.todos.length;i++) {
			if (this.todos[i].id===id) {
				this.todos[i].edit^=1;
				if (this.todos[i].edit==0) {
					this.todos[i].editText='Edit';
					this.todos[i].val=text;
				} else {
					this.todos[i].editText='Save';
					this.todos[i].val=null;
				}
				break;
			}
		}

		this.emit('edit');
	}

	deleteTodo(id) {
		this.todos=this.todos.filter((object) => {
			return object.id!==id;
		});

		this.emit('delete');
	}

	handleAction(action) {
		switch(action.type) {
			case 'CREATE_TODO': {
				this.createTodo(action.text);
				break;
			}
			case 'EDIT_TODO': {
				this.editTodo(action.id, action.text);
				break;
			}
			case 'DELETE_TODO': {
				this.deleteTodo(action.id);
				break;
			}
		}
	}

	getAllTodos() {
		return this.todos;
	}
}

const todoStore=new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;