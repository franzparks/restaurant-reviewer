import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';

const rootReducer = combineReducers({
  appState: restaurantsReducer
});

export default rootReducer;
