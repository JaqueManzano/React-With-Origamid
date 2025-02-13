const App = () =>{
    const produtos = [
        {id: 1, nome: 'Smatphone', preco: 'R$ 2000', cores: ['#29d8d5', '#252a34', '#fc3766']},
        {id: 2, nome: 'Notebook', preco: 'R$ 3000', cores: ['#ffd045', '#d4394b', '#f37c59']},
        {id: 3, nome: 'Tablet', preco: 'R$ 1500', cores: ['#365069', '#47c1c8', '#f95786']}
        
    ]
  
    const produtosAjustados = produtos.map((produtos) => ({
        ...produtos,
        preco: Number(produtos.preco.replace('R$ ',''))
    }))
      
    const dados = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500)

      return(
        <section>
        {produtosAjustados.filter(({preco}) => preco > 1500).map(({id, nome, preco, cores}) =>(
          <div key={id}>
            <h1>{nome}</h1>
            <p>Preço: R$ {preco}</p>
            {cores.map((cor) => (
                <div key={cor}  style={{backgroundColor: cor, color: 'white', marginBottom: '5px'}}><span>{cor}</span></div>
            ))}
           </div>
        ))}         
   </section>        
       
    )
}
