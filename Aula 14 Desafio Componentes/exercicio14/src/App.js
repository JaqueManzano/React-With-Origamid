import Header from "./Header";
import Home from './Home'
import Produtos from "./Produtos";

function App() {
  const { pathname } = window.location;

  return (
    <section>       
        <Header/>
        {pathname === '/' && 
            <Home/>
          }
          {pathname === '/Produtos' &&
          <Produtos/>
          }
    </section>
  );
}

export default App;
