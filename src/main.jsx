import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Delivery from './pages/Delivery.jsx'
import DingingOut from './pages/DingingOut.jsx'
import NightLife from './pages/NightLife.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />} />
      <Route path='/Delivery' element= {<Delivery />} />
      <Route path='/DingingOut' element= {<DingingOut />} />
      <Route path='/NightLife' element= {<NightLife />} />
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
)
