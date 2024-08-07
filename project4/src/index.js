import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Layout from './Layout.js';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import User from './Components/User/User.js';
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.js';
import Instagram, { instagramInfoLoader } from './Components/Instagram/Instagram.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
<Route path='' element={<Home/>}/>
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>}/>
<Route path='user/:userData' element={<User/>}/>
<Route loader={githubInfoLoader}
 path='gitHub' element={<GitHub/>}/>
 <Route loader={instagramInfoLoader}
 path='instagram' element={<Instagram/>}/>
    </Route>
  )
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
