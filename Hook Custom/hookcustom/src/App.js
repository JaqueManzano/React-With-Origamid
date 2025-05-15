import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage'
import React from 'react';

function App() {
   const [produto, setProduto] = useLocalStorage('produto', '');
  const {request, data, loading, error} = useFetch();

    React.useEffect(() =>{
    async function fetchData(){
    const {response, json} = await request('https://ranekapi.origamid.dev/json/api/produto/')
        console.log(response, json)
    }

    fetchData();
  },[request])

   function handleClick({target}){
    setProduto(target.innerText);
   }
   
  if(error) return <p>ERRO</p>
  if(loading) return <p>Carregando</p>
  if(data)
      return (
        <div className="App">
          <p>Produto Preferido: {produto}</p>
          <button onClick={handleClick}>Notebook</button>
          <button onClick={handleClick}>Smartphone</button>
      
          { data !== null && data.map((produto) => <div key={produto.id}><h1>{produto.nome}</h1></div>)}
        </div>
      );
}

export default App;
