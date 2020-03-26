import React from 'react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

// This is one way of getting data out of context object. Another way is by using Consumer. I am commenting this out to implement the other way below.
	// static contextType = LanguageContext;

	// render() {
	// 	const text = this.context === 'english' ? 'Submit' : 'Soumettre';
	// 	return <button className="ui primary button">{text}</button>;	
	// }
	renderClassName(value) {

	}

	render() {
		return (
			<ColorContext.Consumer>
				{ color => (
					<button className={`ui button ${color}`}>
						<LanguageContext.Consumer>
							{ (value) => value === 'english' ? 'Submit' : 'Soumettre' }
						</LanguageContext.Consumer>
					</button>
				)}
			</ColorContext.Consumer>	
		);		
	}
}

export default Button;

// Attention: We can define a helper method if the logic in that child function is too complicated. 
// Example:
// ...
// { value => this.renderText(value) }
// ...
// renderText(value) {
// 		return  value === 'english' ? 'Submit' : 'Soumettre';
// }