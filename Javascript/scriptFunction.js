const funcaoAnonima = function (name){
    return name.toUpperCase()
}

const upperNameSintaxeCurta = (name) => name.toUpperCase();

function upperName(name){
    return name.toUpperCase()
}

const lowerName = (name) => {
    return name.toLowerCase()
}

console.log(upperNameSintaxeCurta('jaque'))
console.log(upperName("Jaque"))
console.log(lowerName("JAQUE"))
console.log(funcaoAnonima("Jaqueline"))