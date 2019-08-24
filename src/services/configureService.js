import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
});

export default axiosInstance;
