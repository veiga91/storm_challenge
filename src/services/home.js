import axiosInstance from './configureService';
import { API_KEY, HASH, TIME_STAMP } from 'react-native-dotenv';

export const getCharacters = async () => {
  try {
    const payload = await axiosInstance(`characters?apikey=${API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`);
    return payload.data.data.results;
  } catch (e) {
    throw(e);
  }
};
