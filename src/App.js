
import React from 'react';

import './App.css';
import {Header} from './components';
import {Home, Cart} from './pages';
import {Route} from 'react-router-dom'
import axios from 'axios'
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'
import { createStore } from 'redux';
import {connect} from 'react-redux'
import store from'./redux/store'




// function App() {
  

   
  
  
// }
class App extends React.Component{
  
  //   const [pizzas, setPizzas] = React.useState([])
  // React.useEffect(()=>{
  //   axios.get('http://localhost:3000/db.json').then(({data})=>{setPizzas(data.pizzas)})
   
  // },[])

  componentDidMount(){
    // alert(1)
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      // console.log(setPizzas(data.pizzas))
     this.props.setPizzas(data.pizzas)
})
  }
  
  render(){
    console.log(this.props)
    return (

      <div className="wrapper">
        <Header/>
        <Route path="/" render={()=><Home items={this.props.items}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      
        
        <div className="content">
  
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  console.log(state.pizzas.items)
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    setPizzas: (items)=> dispatch(setPizzasAction(items))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App
