import React from 'react'
import { GlobalContext } from './GlobalContext';

const Product = () => {
    const global = React.useContext(GlobalContext);
    
  return (
    <div>
        <h1>Produtos: </h1>
        {global.dados && global.dados.map((product, index) => {
          return (
            <ul key={index}>
              <li>{product.nome}</li>
            </ul>
          );
      })}

    </div>
  )
}

export default Product
