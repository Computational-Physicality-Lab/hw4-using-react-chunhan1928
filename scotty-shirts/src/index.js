import React from 'react';
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

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      < Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="not-implemented" element={<NotImplemented />} />
      </Route>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

