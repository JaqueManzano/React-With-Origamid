const App = () =>{
   const produtos = [<li key='e1'>Notebook</li>, <li key='e2'>Tablet</li>,<li key='e3'> Smartphone</li>]

   const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']

   const livros = [
    { nome: 'A Game Of Thrones', ano: 1996 },
    { nome: 'A Clash Of Kings', ano: 1998 },
    { nome: 'A Storm Of Swords', ano: 2000 },
   ]
    return(
        <div>
            <ul>{filmes.map(filme => <li key={filme}>{filme}</li>)}</ul>
        <ul>
            {livros.filter(({ano}) => ano >= 1998).map(({nome, ano}) => <li key={nome}>{nome}, {ano}</li>)}
        </ul>
        </div>
    )
}