import { combineReducers } from 'redux';
import home from './home';
import topic from './topic';

const combineReduce = combineReducers({ home, topic });
export default combineReduce;
