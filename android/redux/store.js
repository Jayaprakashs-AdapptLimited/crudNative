import {createStore} from 'redux';
import rootReducer from '../redux/list/reducers';

const store = createStore(rootReducer);

export default store;
