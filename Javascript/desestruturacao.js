function handleMouse(event){
    const {clientX, clientY} = event;

    console.log(clientX, clientY)
}
document.addEventListener('click', handleMouse)


const frutas = ['banana', 'uva']
const [PrimeiraFruta, SegundaFruta] = frutas; // pega na ordem do array
console.log(PrimeiraFruta, SegundaFruta);

const useQuadrado = [
    4,
    function (lado) {
        return 4 * lado;
    },
]

const [lados, perimetro] = useQuadrado
console.log(lados)
console.log(perimetro(2))
