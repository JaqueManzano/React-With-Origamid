import React from 'react'
//import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext';
import Button from './Button';

const Product = () => {

  //const dados = React.useContext(UserContext);
  //console.log(dados);

  const global = React.useContext(GlobalContext);

  return (
    <div>
        {global.contar}
       <Button/>
    </div>
  )
}

export default Product;
