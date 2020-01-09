import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

// for all the resources
export default combineReducers({
  log: logReducer,
  tech: techReducer
});
