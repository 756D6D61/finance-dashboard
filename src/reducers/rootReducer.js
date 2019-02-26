import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import FxReducer from './FxReducer';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
 simpleReducer,
 FxReducer,
 CryptoReducer,
});