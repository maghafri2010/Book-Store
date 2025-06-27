import { useState } from 'react'

import './App.css'
import Home from './pages/home'
import Account from './pages/account'
import {Routes, Route } from "react-router-dom"
import Store from './pages/store'
import Book from './components/store/Books/book'
import ScrollToTop from './components/utility/scrollToTop'


function App() {
  const [count, setCount] = useState('home')

  return (
    <>
        <ScrollToTop />   
        <Routes>
          <Route path='/'
          element={<Home/>}
          />
          <Route path='/account'
          element={<Account/>}
          />
          <Route path='/store/:genreIndex' element={<Store/>} />
          
          <Route path='/book/:genreIndex/:bookIndex' element={<Book/>}/>
        </Routes> 
    </>
          
          
        
  )
}

export default App
