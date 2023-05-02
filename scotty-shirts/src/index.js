import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import './index.css';
import Header from './layout/header'
import Footer from './layout/footer'
import HomePage from './routes/homePage';
import NotImplemented from './routes/not_implemented';
import Products from './routes/products';
import Product from './routes/product';
import Cart from './routes/cart'

/* cartItemID: only increase, never decrease. 
    new item added: ID increase.
    some item deleted: do nothing.
*/
function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartItemID, setCartItemID] = useState(1)
  const countCartShirts = cartItems.reduce(
    (accumulator, item) => {
      return accumulator + Number(item.quantity)
    }, 0)

  return (
    <>
      <Header countCartShirts={countCartShirts} />
      <Routes>
        < Route path="/" >
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route
              path=":name"
              element={<Product handleAddToCart={handleAddToCart} />} />
          </Route>
          <Route
            path="cart"
            element={<Cart
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              handleChangeQuantity={handleChangeQuantity} />}
          />
          <Route path="not-implemented" element={<NotImplemented />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
  function handleAddToCart(name, color, size, quantity) {
    const newItem = {
      id: cartItemID,
      name: name,
      color: color,
      size: size,
      quantity: quantity
    }
    setCartItems([newItem, ...cartItems])
    setCartItemID(cartItemID + 1)
  }
  function handleRemoveFromCart(id) {
    setCartItems(
      cartItems.filter(item => item.id != id)
    )
  }
  function handleChangeQuantity(id, quantity) {
    setCartItems(
      cartItems.map(item => {
        if (item.id == id) {
          return { ...item, quantity: quantity }
        } else {
          return item
        }
      }))
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

