fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data) =>{
    console.log(data)
})



async function fetchProdutos(url){
    const response = await fetch(url)
    const json = response.json()
    return json;
}


// Adicione um contexto assíncrono
async function main() {
    const produtos = await fetchProdutos("https://jsonplaceholder.typicode.com/todos/1");
    console.log(produtos); // Agora o valor resolvido estará disponível
}

main();