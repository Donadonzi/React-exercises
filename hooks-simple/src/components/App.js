import React, { useState } from 'react';

import ResourceList from './ResourceList';

// ===== We changed this to a functional component to use hooks =====

// class App extends React.Component {

// 	state = { resource: 'ports' };

// 	render() {
// 		return (
// 			<div className="ui container">
// 				<div>
// 					<button className="ui button primary" onClick={() => this.setState({ resource: 'posts' })}>
// 						Posts
// 					</button>
// 					<button className="ui button primary" onClick={() => this.setState({ resource: 'todos' })}>
// 						ToDos
// 					</button>
// 				</div>
// 				{this.state.resource}
// 			</div>
// 		);
// 	}
// }

const App = () => {
	const [resource, setResource] = useState('posts');
	return (
		<div className="ui container">
			<div>
				<button className="ui button orange" onClick={() => setResource('posts')}>
					Posts
				</button>
				<button className="ui button grey" onClick={() => setResource('todos')}>
					ToDos
				</button>
			</div>
			<ResourceList resource={resource} />
		</div>
	);
}

export default App;