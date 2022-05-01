import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todo/ListTodo';
import Nav from './Nav/Nav';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
      <Nav/>
        <img src={logo} className="App-logo" alt="logo" />

        {/* <MyComponent/> */}
        {/* <ListTodo/> */}
        
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/todo"><ListTodo/></Route>
          <Route path="/about"><MyComponent/></Route>
          <Route path="/user" exact><ListUser/></Route>
          <Route path="/user/:id"><DetailUser/></Route>
        </Switch>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
