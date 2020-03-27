import React from 'react';

import UserCreate from './UserCreate';

//import LanguageContext from '../contexts/LanguageContext'; ===> Refactoring to:
import { LanguageStore } from '../contexts/LanguageContext';

import ColorContext from '../contexts/ColorContext';

import LanguageSelector from './LanguageSelector';


class App extends React.Component {

	// state = { language: 'english' };

	// onLanguageChange = language => {
	// 	this.setState({ language: language });
	// };

  render() {
    return (
			<div className="ui container">
				{/* This block is moved to LanguageSelector component as a part of refactoring  */}
				{/* <div>
					Select a language:	&nbsp;	&nbsp;
					<i className="flag ca" onClick={ () => this.onLanguageChange('english') } />
					<i className="flag fr" onClick={ () => this.onLanguageChange('french') } />
				</div> */}
				<LanguageStore>
					{/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> LanguageSelector compo is gonna get the ability to change the lang, the callback, via Context obj. So we remove this value prop here */}
					<LanguageSelector />
					<ColorContext.Provider value="red">
						{/* Not using this anymore<LanguageContext.Provider value={this.state.language}> */}
						<UserCreate />
						{/* </LanguageContext.Provider> */}
					</ColorContext.Provider>
				</LanguageStore>
			</div> 
		);  
  }
}
  
export default App;