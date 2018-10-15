import { combineReducers } from 'redux';
import counter from './reducer-counter'

import counter from counter;
const reducerMain=combineReducers({
  counter:counter
})
export default reducerMain;