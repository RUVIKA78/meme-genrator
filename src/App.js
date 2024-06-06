import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';
const App = () => {
  return (
    <>
  
      <div className='App'>
      <h1>Meme Generator App</h1>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </div>
      

    </>
  )
}

export default App