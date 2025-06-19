import { useState } from 'react'

import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import { Routes, Route } from "react-router-dom"



function App() {
  const [count, setCount] = useState('home')

  return (
        <>
        <Routes>
          <Route path='/'
          element={<Home/>}
          />
        </Routes>
        <Routes>
          <Route path='/account'
          element={<Account/>}
          />
        </Routes>        
          
          
        </>
  )
}

export default App
