
import { getCharactersDetail } from '../../services/detail';

const NAME_SPACE = 'detail';

export const TYPES = {
  FETCH_CHARACTER_DETAIL: `${NAME_SPACE}/FETCH_CHARACTER_DETAIL`,
  FETCH_CHARACTER_DETAIL_SUCCESS: `${NAME_SPACE}/FETCH_CHARACTER_DETAIL_SUCCESS`,
  FETCH_CHARACTER_DETAIL_FAILURE: `${NAME_SPACE}/FETCH_CHARACTER_DETAIL_FAILURE`,
};

export const fetchCharacterDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.FETCH_CHARACTER_DETAIL });

    try {
      const results = await getCharactersDetail(id);
      dispatch({ type: TYPES.FETCH_CHARACTER_DETAIL_SUCCESS, payload: results });
    } catch(e) {
      dispatch({ type: TYPES.FETCH_CHARACTER_DETAIL_FAILURE, payload: e.message });
    }
  }
};
