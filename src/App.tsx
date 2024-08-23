import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'; "react-router-dom";
import Mainpage from './page/Mainpage'
import Loginpage from './page/Loginpage'
import Template from './templates/Template';

function App() {

  return (
    <>
      <Routes >
        <Route element={<Template />}>
          <Route index element={<Mainpage />}>
          </Route >
          <Route path='/login' element={<Loginpage />}>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
