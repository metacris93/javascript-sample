// maximum call stack size exceeded
// podemos hacer llamados recursivos muchas veces a la misma funcion
// const suma = (number, sum = 0) =>
// {
//     number === 0 ? sum : suma(number - 1, sum + number)
// }
// const r = suma(100)
// console.log(r)

const trampoline = fn => (...args) =>
{
    let result = fn(...args)
    while (typeof result === 'function')
    {
        result = result()
    }
    return result
}
const suma = (number, sum = 0) =>
{
    number === 0 ? sum : () => suma(number - 1, sum + number)
}
const tsuma = trampoline(suma)
const r = tsuma(5000)
console.log(r)

//Memoization es cuando el resultado de una función se guarda en memoria 
//para no tener que realizar el cálculo de nuevo, y se guarda en base al argumento entregado. 
//Los trampolines son para escribir recursividad sin tener el problema del stack overflow.