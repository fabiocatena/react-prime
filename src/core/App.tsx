

import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import SignIn from '../pages/sign-in/SignIn';

const App:React.FC = () => {
  return (

    <Routes>
    <Route path="/sign-in" element={<SignIn />}> </Route>
    <Route path="/" element={<Home/>}> </Route>
      <Route path="/home" element={<Home />}> 
        <Route index element={<Home />} />
      </Route>
     
    </Routes>
  
     
  );
}

export default App;
