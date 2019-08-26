import { combineReducers } from 'redux';
import home from './reducers/home';
import detail from './reducers/detail';

export default combineReducers({
  home,
  detail
});
