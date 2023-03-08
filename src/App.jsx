import { useState } from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Form from './pages/Form';


import RootLayout from './layouts/RootLayout';

//creates our routes and then we pass them into the RouterProvider
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={< Home />} />
      <Route path='about' element={< About />} />
      <Route path='help' element={< Help />} />
      <Route path='contact' element={< Contact />} />
      <Route path='cart' element={< Cart />} />
      <Route path='form' element={< Form />} />
    </Route>
  )
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
