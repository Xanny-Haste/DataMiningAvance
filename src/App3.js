import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import App from './App'
import App2 from './App2'

function App3() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
                <Route path="/"   exact={true} element={<App />} />
                <Route path="/Project" exact element={<App2/>} />
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App3;
