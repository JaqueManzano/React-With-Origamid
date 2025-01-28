const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'}
    ],
    ativa: true
};

const mario = {
    cliente: 'Mario',
    idade: 27,
    compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'},
        {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativa: false
};

const App = () =>{
    const dados = luana;
    const precos = dados.compras.filter(x => x.preco.includes('R$')).map(item => item.preco);
    const valorTotal = precos.map((preco) => Number(preco.replace("R$ ",''))).reduce((acc, preco) => acc + preco, 0);


    const precoOrigamid = dados.compras.map(item => item.preco)

    console.log(precos)
    console.log(valorTotal)
    return(
        <div>
            <p>Nome: {dados.nome}</p>
            <p>Idade: {dados.idade}</p>
            <p>Situação: <span style={{ color: dados.ativa ? 'green' : 'red' }} > {dados.ativa ? 'Ativa':  Inativa }</span></p>
            <p>Total Gasto: R$ {valorTotal}</p>
            {valorTotal > 10000 && (<p>Você está gastando muito.</p>)}
        </div>
    )
}