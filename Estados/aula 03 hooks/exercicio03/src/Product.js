import React, { useEffect } from 'react'

const Product = ({product}) => {

  useEffect(() =>{
    console.log()
  }, [product.id])

  return (
    <div key={product.id}>
      <h1>{product.nome}</h1>
      <p>R$ {product.preco}</p>
      <img src={product.fotos[0].src} alt={`${product.fotos[0].titulo}`}/>
    </div>
  )
}

export default Product
