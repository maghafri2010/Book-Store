import { useState } from 'react'

import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import {Routes, Route } from "react-router-dom"
import Store from './pages/store'



function App() {
  const [count, setCount] = useState('home')

  return (
        <Routes>
          <Route path='/'
          element={<Home/>}
          />
          <Route path='/account'
          element={<Account/>}
          />
          <Route path='/store/:genreIndex' element={<Store/>} />
        </Routes> 
          
          
        
  )
}

export default App
