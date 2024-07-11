import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home.jsx';
import Profile from './components/profile.jsx';
import Settings from './components/settings.jsx';
import ErrorPage from './components/error.jsx'
import ProfileChild from './components/profilechild.jsx';
import Users from './components/user.jsx';
import Userprofile from './components/userprofile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/profile', // Corrected path for Profile component
    element: <Profile />,
    children:[
      {
        path:'/profile/:profileid',
        element:<ProfileChild/>
      },
    ]
  },

 
  
  {
    path: '/settings', // Corrected path for Settings component
    element: <Settings />
  },
  {
    path:'/settings/:settingsid',
    element:<Settings/>
  },
  {
    path: '/Home',
    element:<Home/>
  },
  {
    path :'/users',
    element: <Users/>
  },
  {
    path:'/userprofile',
    element: <Userprofile/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


