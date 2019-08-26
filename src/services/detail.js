import axiosInstance, { PARAMS } from './configureService';

export const getCharactersDetail = async (id) => {
  try {
    const payload = await axiosInstance({ params: { ...PARAMS, id }});
    return payload.data.data.results[0];
  } catch (e) {
    throw(e);
  }
};