import React from 'react';
import SearchBar from './SearchBar';
// import youtube from '../api/youtube';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };
    onSearchSubmit = async(term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyA-05uNQUGjHv9CloQbENxktx99j8TWbkE',
                type: 'video'
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
            });
        };

    onSelectVideo = (video) => {
        this.setState({selectedVideo: video});
    };

    componentDidMount() {
        this.onSearchSubmit('VW Car'); // Setting a default search
    };



    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar Submit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
                        </div>    
                    </div>
                </div>
    
            </div>
        );
    }

}

export default App;