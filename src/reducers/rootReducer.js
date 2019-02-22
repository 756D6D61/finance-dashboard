import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import FxReducer from './FxReducer';
export default combineReducers({
 simpleReducer,
 FxReducer
});