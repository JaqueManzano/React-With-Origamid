import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom'

const Product = () => {
    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    
    console.log(search.get('meuParam'))
  return (
    <div>
      <h1>Produto {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> { }
        <NavLink to="avaliacao">Avaliação</NavLink> { }
        <NavLink to="customizado">Customizado</NavLink> { }
      </nav>
        <Outlet/>
    </div>
  )
}

export default Product
