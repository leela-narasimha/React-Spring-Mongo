import React from 'react';


const VideoItem = ({ video }) => {
    return (
    <div className = "item">
        <img className = "ui imange" src={video.snippet.thumbnails.medium.url}/>
        <div calssName = "content">
            <div className = "header">{video.snippet.title}</div>
        </div>
    </div>
    );
};

export default VideoItem;