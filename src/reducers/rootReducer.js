import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import FxReducer from './FxReducer';
import CryptoReducer from './CryptoReducer';
import SectorReducer from './SectorReducer';
import StockReducer from './StockReducer';

export default combineReducers({
 simpleReducer,
 FxReducer,
 CryptoReducer,
 SectorReducer, 
 StockReducer
});