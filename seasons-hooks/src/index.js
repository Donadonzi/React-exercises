import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log('Nashod ke beshe :(')
//     );
//     return <div>It's gonna be all right :)</div>
// };   We can't handle async with functional components. So we swith to class component

// LATER NOTE: I am using Hooks now. So we are converting the previous class compo to a functional compo along with using hooks:
// We first wrote this functional component and it works as before. But now we want to extract the hooks for reusability.


const App = () => {

/* We are moving this part to the useLocation component

	const [lat, setLat] = useState(null);
	const [errMsg, setErrMsg] = useState('');

	useEffect( () => {
		window.navigator.geolocation.getCurrentPosition(
			position => setLat(position.coords.latitude),
			err => setErrMsg(err.message) 
		);

	}, []);
*/

	const [lat, errMsg] = useLocation();

	let content;
	if(errMsg) {
		content = <div>Error: {errMsg}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Loader msg='Please allow us to locate you' />;
	}

	return <div className="border red">{content}</div>;
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);




