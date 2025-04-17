import { useState, useEffect } from "react";
import Product from "./Product";

function App() {

  const [dados, setDados ] = useState();
  const [nameProduct, setNameProduct] = useState();

  useEffect(() =>{
    if(window.localStorage.getItem('product'))
    setNameProduct(window.localStorage.getItem('product'))
  },[])


  useEffect(() =>{
    if(nameProduct && nameProduct !== undefined && nameProduct !== '')
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${nameProduct}`)
    .then(response => response.json())
    .then(json => setDados(json));
  },[nameProduct])


  useEffect(() =>{
    if(dados && dados.nome !== window.localStorage.getItem('product'))
    window.localStorage.setItem('product', dados.nome);
  },[dados])

  const handleClickProduct = (e) =>{
    setNameProduct(e.target.innerText)
  }

  return (
    <div className="App">
    <h1>Preferência: {nameProduct}</h1>
    <button onClick={handleClickProduct} style={{marginRight: '1rem'}}>Notebook</button>
    <button onClick={handleClickProduct}>Smartphone</button>

    {dados &&  <Product dados={dados}/> }
    </div>
  );
}

export default App;
