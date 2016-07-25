import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';
import InputTodoItem from '../components/InputTodoItem';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state={
			todos: TodoStore.getAllTodos()
		};
	}

	componentWillMount() {
		TodoStore.on('create', () => {
			this.setState({
				todos: TodoStore.getAllTodos()
			});
		});

		TodoStore.on('edit', () => {
			this.setState({
				todos: TodoStore.getAllTodos()
			});
		});

		TodoStore.on('delete', () => {
			this.setState({
				todos: TodoStore.getAllTodos()
			});
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