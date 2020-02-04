// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
function getBtnText() {
    return 'Click on me!';
};

const App = function() {
    return (
    <div>
        <label class="Label" for="name">Enter name:</label>
        <input id="name" type="text" />
        {/* <button style="background-color: purple; color: white;">Submit</button> this is HTML. Inline styles should change in order to achieve JSX */}
        <button style={{backgroundColor: 'purple', color: 'white'}}>{getBtnText()}</button>
    </div>
    );
};



// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);