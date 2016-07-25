import React from 'react';

import * as TodoAction from '../actions/TodoAction';

export default class InputTodoItem extends React.Component {
	constructor() {
		super();
		this.todo='';
	}

	getTodo(e) {
		this.todo=e.target.value;
	}

	createTodo() {
		TodoAction.createTodo(this.todo);
		document.getElementById('in').value='';
	}

	render() {
		return (
			<div>
				<input id="in" type="text" onChange={this.getTodo.bind(this)} />
				<button onClick={this.createTodo.bind(this)}>Create</button>
			</div>
		)
	}
}