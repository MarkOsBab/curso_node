const operacion = (func, a, b) => func(a, b);

const sumar = (a, b) => a+b

console.log(`Suma: `+operacion(sumar, 1,1));

function dividir(dividendo, divisor){
    return new Promise((resolve, reject) => {
        if(divisor == 0){
            reject('No se puede dividir por 0')
        } else {
            resolve(dividendo/divisor)
        }
    })
}

dividir(10, 2)
.then(result => {
    console.log(`Division async: ${result}`);
}).catch(e => {
    console.log(`Error: ${e}`);
})