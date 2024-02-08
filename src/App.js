import React, { Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home'
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Register from './screens/Register.js';
import CartProvider from './components/ContextReducer.js';
import { Provider } from 'react-redux';
import store from './redux/store';
import MyCart from './components/MyCart.js';



const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <Fragment>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<MyCart />} />
          </Routes>
        </Fragment>
      </CartProvider>
    </Provider>



  )
}

export default App