import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';
import Login from './Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter  >
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='sobre' element={<Sobre/>} />
          <Route path='login' element={<Login/>}></Route>
          <Route path='*' element={<NaoEncontrada/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
