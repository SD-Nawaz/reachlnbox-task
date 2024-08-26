import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Mail from './pages/mail';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path='/mail' element={<Mail/>}/>
      
      </Routes>
  </div>
   
  );
}

export default App;