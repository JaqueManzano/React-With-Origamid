import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import NaoEncontrada from './NaoEncontrada';
import Sobre from './Sobre';
import Home from './Home'
import Product from './Product';
import Login from './Login';

function App() {
  return (
 <div className="App">
      <BrowserRouter  >
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='sobre' element={<Sobre/>} />
          <Route path='login' element={<Login/>} />
          <Route path='produto/:id/*' element={<Product/>}/>
          <Route path='*' element={<NaoEncontrada/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
