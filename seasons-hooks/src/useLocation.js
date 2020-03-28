import { useState, useEffect } from 'react';

export default () => {
	const [lat, setLat] = useState(null);
	const [errMsg, setErrMsg] = useState('');

	useEffect( () => {
		window.navigator.geolocation.getCurrentPosition(
			position => setLat(position.coords.latitude),
			err => setErrMsg(err.message) 
		);

	}, []);

		// We can return those values as an object, but the community convention is to return them as an array
		// return { lat: lat, errMsg: errMsg };

		return [lat, errMsg];

};