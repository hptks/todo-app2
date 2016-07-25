import dispatcher from '../dispatcher';

export function createTodo(text) {
	dispatcher.dispatch({
		type: 'CREATE_TODO',
		text
	});
}

export function editTodo(id, text) {
	dispatcher.dispatch({
		type: 'EDIT_TODO',
		id,
		text
	});
}

export function deleteTodo(id) {
	dispatcher.dispatch({
		type: 'DELETE_TODO',
		id
	});
}