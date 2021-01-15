
import React from 'react';

import './App.css';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom'
import axios from 'axios'
import {fetchPizzas, setPizzas} from './redux/actions/pizzas'
import { createStore } from 'redux';
import {connect} from 'react-redux'
import store from'./redux/store'
import {useDispatch} from 'react-redux'




function App() {

  const dispatch = useDispatch()


 

  React.useEffect(()=>{
    
    console.log(dispatch(fetchPizzas()))
  },[])
  return (

    <div className="wrapper">
      <Header/>
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
    
      
      <div className="content">

      </div>
    </div>
  );
   
  
  
}

export default App

// export default connect(
//   (state) =>{
  
//     return {
//       items: state.pizzas.items
//     }
//   },
//   (dispatch)=>{
//     return {
//       setPizzas: (items)=> dispatch(setPizzas(items))
//     }
//   }
// )(App);
