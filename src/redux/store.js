import {createStore, compose, applyMiddleware}  from 'redux'
import rootReducer  from './reducers'
import thunk  from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
const composeEnhancers =  compose


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store