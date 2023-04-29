import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import './index.css';
import Header from './layout/header'
import Footer from './layout/footer'
import HomePage from './routes/homePage';
import NotImplemented from './routes/not_implemented';
import Products from './routes/products';
import Details from './routes/details';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BasicLayout />}>
      <Route index element={<HomePage />} />
      <Route path="not-implemented" element={<NotImplemented />} />
      <Route path="products" element={<Products />}></Route>
      <Route path="details" element={<Details />}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

