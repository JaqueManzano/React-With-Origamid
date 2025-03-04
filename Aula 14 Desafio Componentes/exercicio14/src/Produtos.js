import Titulo from './Titulo.js'
import Produto from './Produto';

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
]

const Produtos = () => {
    return ( 
        <div>
        <Titulo titulo='Produtos'/>
        {produtos.map((produto) => 
            <Produto produto={produto}/>
        )}
        </div> 
    );
}
 
export default Produtos;