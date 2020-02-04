import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Kolbeh', duration: '4:30'},
        { title: 'Raz-e-Hamishegi', duration: '4:37'},
        { title: 'Chakavak', duration: '4:55'},
        { title: 'Shabzadeh', duration: '3:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
}); 