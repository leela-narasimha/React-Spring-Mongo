import React from 'react';
import Form from './Form';
import youtube from '../apis/youtube';
import VideoList from "./VideoList";


class App extends React.Component{
    state = { videos: []};
    onTermSubmit = async term => {
        
        const respnse = await youtube.get('/search',{
            params:{
                q: term
            }
        });

        this.setState({videos: response.data.items});
    };

    render() {
    return (
    <div className = "ui container">
        <Form onFormSubmit={this.onTermSubmit} />
        <VideoList videos = {this.state.videos} />
    </div>
    );
};

}

export default App;