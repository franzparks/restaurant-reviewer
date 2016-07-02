import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  appState: restaurantsReducer,
  form: formReducer
});

export default rootReducer;
