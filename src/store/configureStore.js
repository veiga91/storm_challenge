import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './combinedReducers';
import thunk from 'redux-thunk';

export default createStore(
  combinedReducers,
  applyMiddleware(
    thunk
  )
);
