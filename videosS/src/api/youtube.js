import axios from 'axios';

const KEY = 'AIzaSyA-05uNQUGjHv9CloQbENxktx99j8TWbkE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        // part: 'snippet',
        maxResults: 5,
        key: `${KEY}`,
        type: 'video'
    }
});
