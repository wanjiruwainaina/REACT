import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home.jsx';
import Landingpage from './components/landingpage.jsx';
const router= createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    errorElement:
  },
  {
    path:'/home',
    element:<Home/>
  },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider/>
  </React.StrictMode>,
)
