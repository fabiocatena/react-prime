

import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';

function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="react-prime/sign-in" element={<SignIn/>}></Route>
    <Route path="react-prime/" element={<Home/>}> </Route>
      <Route path="react-prime/home" element={<Home />}> 
        <Route index element={<Home />} />
      </Route>
     
    </Routes>
  </BrowserRouter>
     
  );
}

export default App;
