import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID da1cd5b80e046b4f701bfcee4e66f2e983e3f36cecfbf66e1eca39f0260278fa'
    }

});