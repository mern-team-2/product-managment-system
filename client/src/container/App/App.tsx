
import React from 'react';
import './App.css';
import Home from "../../component/home/Home";
import ProductTable  from "../../component/productTable/ProductTable"
import Nav from "../../component/navbar/Nav";
import Input from "../../component/productInput/ProductInput";
import ProductView from "../../component/productView/ProductView";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{

  render(){
    return(
      <>
      <Router>
      <Nav/>

        <Switch>
          <Route path='/' component={Home} exact  />
          <Route path='/home' component={Home} exact />
          <Route path='/input' component={Input} exact />
          <Route path='/table' component={ProductTable} exact />
          <Route path='/view' component={ProductView} exact />
          <Route path='/input/:id' component={Input} exact />
          <Route path='/table/view/:id' component={ProductView} exact />
          <Route path='/input/table/:id' component={ProductTable} exact />
        </Switch>
      </Router>
      </>
    )
  }
}

export default App;
