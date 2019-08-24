import axios from 'axios';
import { API_KEY, HASH, TIME_STAMP } from 'react-native-dotenv';

const axiosInstance = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/characters',
  params: {
    apikey: API_KEY,
    hash: HASH,
    ts: TIME_STAMP
  }
});

export default axiosInstance;
