import React from 'react';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<nav class="navbar navbar-default">
					<div class="container">
						<div class="navbar-brand">TODO app with Flux</div>
					</div>
				</nav>
			</header>
		)
	}
}