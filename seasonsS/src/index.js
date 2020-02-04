import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log('Nashod ke beshe :(')
//     );
//     return <div>It's gonna be all right :)</div>
// };   We can't handle async with functional components. So we swith to class component

class App extends React.Component {

    /*
    constructor(props) {
        super(props);
        
        // THIS IS THE ONLY TIME we assign this.state directly. Othertimes we must use setState()
        this.state = { lat: null, errorMsg: ''};

    } */

    state = { lat: null, errorMsg: ''}; // In mo'adele hamoon constructor balayee hast.

    componentDidMount() {
        // console.log('My component was rendered to the screen!');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMsg: err.message}) // Vase inke dobare render beshe az setState estefade kardim   
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated; It rerendered!');
    }

    renderContent() {
        if (this.state.errorMsg && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMsg}
                </div>
            );
        }
        if (!this.state.errorMsg && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            );
        }
        return <Loader msg='Please allow us to locate you' />;
    }   

    render() {
    return <div className="border">{this.renderContent()}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);




