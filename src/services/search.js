import axiosInstance, { PARAMS } from './configureService';

export const getCharactersByName = async (name) => {
  try {
    const payload = await axiosInstance({ params: { ...PARAMS, name }});
    return payload.data.data.results;
  } catch (e) {
    throw(e);
  }
};