import { combineReducers } from 'redux';
import task from './task';
import greetings from './greetings';
import user from './user';
import todo from './todo';
export default combineReducers({
    task,
    greetings,
    user,
    todo
})