import style from './Produto.module.css'

const Produto = ({produto}) => {
    console.log(produto)
    return ( 
        <div className={style.div_border}>
            <p>{produto.nome}  </p>
            {produto.propriedades.map((propriedade, index) => ( 
                <ul key={index}>
                    <li>{propriedade}</li>
                </ul>
            ))}
        </div>
     );
}
 
export default Produto;