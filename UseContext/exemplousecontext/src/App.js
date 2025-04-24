import Product from './Product';
//import UserContext from './UserContext';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    //<UserContext.Provider value={{nome:"André"}}>
    
    <GlobalStorage>
    <Product/>
    </GlobalStorage>
    //</UserContext.Provider>


  );
}

export default App;
