import { TYPES } from '../actions/detail';

const INITIAL_STATE = {
  fetching: true,
  character: undefined,
  error: undefined,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch(type) {
    case TYPES.FETCH_CHARACTER_DETAIL:
      return { ...state, fetching: true, error: undefined };
    case TYPES.FETCH_CHARACTER_DETAIL_SUCCESS:
      return { character: payload, fetching: false, error: false };
    case TYPES.FETCH_CHARACTER_DETAIL_FAILURE:
      return { ...state, fetching: false, error: payload };
    default:
      return state;
  }
}