import BtnLimpar from "./BtnLimpar";
import { GlobalStorage } from "./GlobalContext";
import Product from "./Product";

function App() {
  return (
    <div className="App">
        <GlobalStorage>
          <Product/>
          <BtnLimpar/>
        </GlobalStorage>
    </div>
  );
}

export default App;
