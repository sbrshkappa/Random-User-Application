import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

const store = createStore(usersReducer, applyMiddleware(thunk));

store.subscribe(() => {
 console.log('store data:', store.getState());
});
export default store;