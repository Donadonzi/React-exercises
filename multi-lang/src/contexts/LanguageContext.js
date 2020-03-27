import React from 'react';

// This should be refactored in order to use Context instead of Redux
// export default React.createContext('english');

// Refactoring the above statement(?)
const Context = React.createContext('english');

export class LanguageStore extends React.Component {

	state = { language: 'english' };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<Context.Provider value={ { ...this.state, onLanguageChange: this.onLanguageChange } }>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;