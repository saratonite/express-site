import { createStore , applyMiddleware } from 'redux';
import rootReducer from './reducers/index';


// Create store
const store = createStore(rootReducer);

export default store;

