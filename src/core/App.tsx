import "primereact/resources/themes/lara-light-indigo/theme.css";
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
      <Route>
      
      </Route>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
