import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: "Client-ID 8lPrCZKkN0A1X3zpUyqmniY4XoMZGCvnU83zjlXlEnk"
      }
})