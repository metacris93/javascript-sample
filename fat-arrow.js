/**
 * Fat Arrow function es una forma de escribir nuestras funciones,
 * la sintaxis es corta a la que estamos acostumbrado. 
 * La palabra reservada function no es necesario.
 * Podemos tomar las funciones como valores y podemos asignarla a una variable.
*/

// function suma (a, b)
// {
//     return a + b
// }
// const resultado = suma(1 , 5)

const suma = (a,b) => {
    return a + b
}
const resultado = suma(1,5)
console.log(resultado)