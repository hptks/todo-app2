import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import InputTodoItem from '../components/InputTodoItem';

export default class Home extends React.Component {
	constructor() {
		super();
		this.getTodo=this.getTodos.bind(this);
		this.state={
			todos: TodoStore.getAllTodos()
		};
	}

	componentWillMount() {
		TodoStore.on('create', this.getTodo);
		TodoStore.on('edit', this.getTodo);
		TodoStore.on('delete', this.getTodo);		
	}

	componentWillUnmount() {
		TodoStore.removeListener('create', this.getTodo);
		TodoStore.removeListener('edit', this.getTodo);
		TodoStore.removeListener('delete', this.getTodo);
	}

	getTodos() {
		this.setState({
			todos: TodoStore.getAllTodos()
		});
	}

	render() {
		const Todos=this.state.todos.map((todo) => {
			return <Todo key={todo.id} {...todo} />
		});

		return (
			<div class="container">
				<Header />
				<div class="container">
					<InputTodoItem />
					<br />
					<div>{Todos}</div>
				</div>
				<Footer />
			</div>
		)
	}
}