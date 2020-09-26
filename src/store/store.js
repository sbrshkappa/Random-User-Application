import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(usersReducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
 console.log('store data:', store.getState());
});
export default store;