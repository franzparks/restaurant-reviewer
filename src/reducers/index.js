import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants';
import filtersReducer from './filters';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  appState: restaurantsReducer,
  form: formReducer,
  filterState: filtersReducer

});

export default rootReducer;
