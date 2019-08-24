import { TYPES } from '../actions/home';

const INITIAL_STATE = {
  fetching: true,
  characters: [],
  error: undefined
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch(type) {
    case TYPES.FETCH_CHARACTERS:
      return { ...state, fetching: true, error: undefined };
    case TYPES.FETCH_CHARACTERS_SUCCESS:
      return { characters: payload, fetching: false, error: false };
    case TYPES.FETCH_CHARACTERS_FAILURE:
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
}