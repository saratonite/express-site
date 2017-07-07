import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';


// Create store
const store = createStore(rootReducer,{},applyMiddleware(thunk));

export default store;

