const Product = ({dados}) => {
    return (
        <div>
          <h1>{dados.nome}</h1>
          <p>Preço: R$ {Number(dados.preco).toFixed(2)}</p>
        </div>
      );
}
 
export default Product;