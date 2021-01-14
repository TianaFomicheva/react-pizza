import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {createStore} from 'redux'
// import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom'
import store from'./redux/store'
import { Provider } from 'react-redux'

// const inc = ()=>{
//   store.dispatch({type: 'INCREMENT'})
// }
// store.subscribe(()=>{
//   console.log('изменился - ', store.getState())
// })
ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter >
     <Provider store={store}> 
     {/* <Provider/>  */}
    {/* <button onClick={inc}>
      +
    </button> */}
    <App/>  
    </Provider>  
    </BrowserRouter>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
