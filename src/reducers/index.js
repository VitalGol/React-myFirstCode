import {combineReducers} from 'redux';
import ClientsReducers from './clients.js';
import ActiveClient from './client-active.js';


const allReducers = combineReducers({
  clients: ClientsReducers,
  active: ActiveClient
});

export default allReducers;
