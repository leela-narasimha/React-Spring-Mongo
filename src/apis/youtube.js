import axios from 'axios';

const KEY = 'AIzaSyDZyMg-NYzwMVISN8DANn9BwtFizOyam6Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});