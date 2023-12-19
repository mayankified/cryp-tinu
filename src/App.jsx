import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Coins,Footer } from './Components/index'
import './Styles/styles'
import './Styles/App.css'
import Home from './Components/Home'

const App = () => {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<Coins/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;