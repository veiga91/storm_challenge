import axiosInstance from './configureService';

export const getCharacters = async () => {
  try {
    const payload = await axiosInstance();
    return payload.data.data.results;
  } catch (e) {
    throw(e);
  }
};
