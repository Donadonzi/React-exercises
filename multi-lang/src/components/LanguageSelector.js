
// This component is built in order to refactor the app to use Context to maintain the state.
// It's about the whole Context vs. Redux debate thing!

import React from 'react';

import LanguageContext from '../contexts/LanguageContext'; /*This is a default export so we changed the name*/

class LanguageSelector extends React.Component {

	static contextType = LanguageContext;

	render() {
		console.log(this.context);
		return (
			<div>
				Select a language:	&nbsp;	&nbsp;
				<i className="flag ca" onClick={() => this.context.onLanguageChange('english')} />
				<i className="flag fr" onClick={() => this.context.onLanguageChange('french')} />
			</div>
		);
	}
}

export default LanguageSelector;