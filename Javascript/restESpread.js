// Rest ( Pega tudo que passei ddepois do primeiro parâmetro e coloca no array clientes ) 
function showList(empresa, ...clientes){
    clientes.forEach(cliente => {
        console.log(cliente, empresa)
    });
}

showList('Google', 'André', 'Rafael', 'Joice', 'Denise')


// Spread
const numeros = [10, 90, 34, 87, 69]
const maior = Math.max(...numeros);
console.log(maior)

const numeros2 = [25, ...numeros, 108]
console.log(numeros2)

const carro = {
    cor: 'Azul',
    portas: 4
}

const carro2 = {...carro, ano: 2020}
console.log(carro)
console.log(carro2)
