import { useState } from "react";
import Product from './Product'

function App() {
  
  const [productSelected, setProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleClick =  async (e)=>{
    setLoading(true);
    const nameProduct = e.target.innerText;
    const json = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${nameProduct}`)
    const response = await json.json();
    setTimeout(()=>{
      setLoading(false); 
      setProduct(response);
    }, 600);
  }

  return (<>
    <div style={{ display: 'flex', gap: '10px' }}>
      <button style={{backgroundColor:'green', color:'white', padding:'10px'}} onClick={handleClick}>Notebook</button> 
      <button style={{backgroundColor:'green', color:'white', padding:'10px'}}  onClick={handleClick}> Smartphone</button> 
      <button style={{backgroundColor:'green', color:'white', padding:'10px'}}  onClick={handleClick}> Tablet</button> 
    </div>

    {loading && <p>Carregando...</p>}
    {!loading && productSelected && <Product product={productSelected} />}
    </>
  );
}

export default App;
