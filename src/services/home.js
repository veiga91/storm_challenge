import axiosInstance, { PARAMS } from './configureService';

export const getCharacters = async () => {
  try {
    const payload = await axiosInstance({ params: PARAMS });
    return payload.data.data.results;
  } catch (e) {
    throw(e);
  }
};
