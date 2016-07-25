import React from 'react';

import * as TodoAction from '../actions/TodoAction';

export default class Todo extends React.Component {
	constructor() {
		super();
		this.newText='';
	}

	getText(e) {
		this.newText=e.target.value;
	}

	editOrSaveTodo() {
		let { id }=this.props;
		TodoAction.editTodo(id, this.newText);
	}

	deleteTodo() {
		let { id }=this.props;
		TodoAction.deleteTodo(id);
	}

	render() {
		const { text, editText, val }=this.props;

		return (
			<div>
				<div class="row">
					<div class="col-md-4">
						<div class="input-group">
							<span class="input-group-addon">
								<input type="checkbox" />
							</span>
							<input type="text" class="form-control" onChange={this.getText.bind(this)} value={val} />
							<div class="input-group-btn">
								<button class="btn btn-default" onClick={this.editOrSaveTodo.bind(this)}>{editText}</button>
								<button class="btn btn-default" onClick={this.deleteTodo.bind(this)}>Delete</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}