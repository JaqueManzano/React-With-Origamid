import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';
import Login from './Login'
import Product from './Product';
import ProductDescription from './ProductDescription'
import ProductEvaluation from './ProductEvaluation'
import ProductCustomized from './ProductCustomized'

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='sobre' element={<Sobre/>} />
          <Route path='login' element={<Login/>}></Route>
          <Route path='produto/:id/*' element={<Product/>}>
              <Route path='' element={<ProductDescription/>}/>
              <Route path='avaliacao' element={<ProductEvaluation/>}/>
              <Route path='customizado' element={<ProductCustomized/>}/>
          </Route>
          <Route path='*' element={<NaoEncontrada/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
