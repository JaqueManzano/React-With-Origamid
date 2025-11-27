import {  useLocation, useParams, Outlet, NavLink } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import ProductEvaluation from './ProductEvaluation';
import ProductCustomized from './ProductCustomized';

const Product = () => {
    const params = useParams();
    const location = useLocation();
    const search = new URLSearchParams(location.search);
    
    console.log(search.get('meuParam'))
  return (
    <div>
      <h1>Produto {params.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
        <Routes>
          <Route path='' element={<ProductDescription/>}/>
          <Route path='avaliacao' element={<ProductEvaluation/>}/>
          <Route path='customizado' element={<ProductCustomized/>}/>
        </Routes>
        <Outlet/>
    </div>
  )
}

export default Product
