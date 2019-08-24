
import { getCharacters } from '../../services/home';

const NAME_SPACE = 'home';

export const TYPES = {
  FETCH_CHARACTERS: `${NAME_SPACE}/FETCH_CHARACTERS`,
  FETCH_CHARACTERS_SUCCESS: `${NAME_SPACE}/FETCH_CHARACTERS_SUCCESS`,
  FETCH_CHARACTERS_FAILURE: `${NAME_SPACE}/FETCH_CHARACTERS_FAILURE`
};


export const fetchCharacters = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FETCH_CHARACTERS });

    try {
      const results = await getCharacters();
      dispatch({ type: TYPES.FETCH_CHARACTERS_SUCCESS, payload: results });
    } catch(e) {
      dispatch({ type: TYPES.FETCH_CHARACTERS_FAILURE, payload: e.message });
    }
  }
}
