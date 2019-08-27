import { combineReducers } from 'redux';
import home from './reducers/home';
import detail from './reducers/detail';
import search from './reducers/search';

export default combineReducers({
  home,
  detail,
  search
});
