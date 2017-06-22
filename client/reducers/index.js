import { combineReducers } from 'redux';
import task from './task';
import greetings from './greetings';

export default combineReducers({
    task,
    greetings
})