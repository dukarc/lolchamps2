import { combineReducers } from 'redux';
import ChampsReducer from './reducer_champs';

const rootReducer = combineReducers({
  champs: ChampsReducer,
});

export default rootReducer;
