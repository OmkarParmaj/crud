import Create from './Create';
import Edit from './Edit';
import Home from './Home';
import Read from './Read';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Create></Create>}></Route>
      <Route path='/read/:id' element={<Read></Read>}></Route>
      <Route path='/edit/:id' element={<Edit></Edit>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
