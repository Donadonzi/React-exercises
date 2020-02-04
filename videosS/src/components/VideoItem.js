import React from 'react';
import './VideoItem.css';

const VideoItem = props => {

    return (
        <div className="item video-item" onClick={() => props.onSelectVideo(props.video)}>
            <img className="ui image thumbnail" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}/>
            <div className="content">
                <div className="header video-title">
                    {props.video.snippet.title}
                </div>   
            </div>    
        </div>
    );

};

export default VideoItem;