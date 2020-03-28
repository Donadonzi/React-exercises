import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ===== We refactored this to a functional component to use Hooks
// class ResourceList extends React.Component {

// 	state = { resources: [] };

// 	async componentDidMount() {
// 		const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
// 		this.setState({ resources: response.data });
		
// 	}

// 	async componentDidUpdate(prevProps) {
// 		if (prevProps.resource !== this.props.resource) {
// 			const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
// 			this.setState({ resources: response.data });
// 		}
// 	}

// 	render() {
// 		return <div>{this.state.resources.length}</div>
// 	}
// }

const ResourceList = ({resource}) => { /* Destructuring resource out of props ?!? */

	const [resources, setResources] = useState([]);

	const fetchResources =  async (resource) => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
		// this.setState({ resources: response.data });
		setResources(response.data);
	};

	useEffect( () => {
		fetchResources(resource);
	}, [resource]);

	return (
		<ol>{resources.map( el => <li key={el.id}>{el.title}</li> )}</ol>	
	); 
};


export default ResourceList;