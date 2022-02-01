//const reducer = (acumulador, valorActual) => nuevoAcumulador
//const reducido = [1,2].reduce((acumulador, elemento) => acumulador + elemento, 0)
//console.log(reducido)

const mascotas = [
    {nombre: 'Puchin', edad: 12, tipo: 'perro'},
    {nombre: 'Chanchito-Feliz', edad: 3, tipo: 'perro'},
    {nombre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Pelusa', edad: 16, tipo: 'gato'}
]
const index = mascotas.reduce((ac,el) => ({
    ...ac,
    [el.nombre]: el,
}),{})
console.log(index)
console.log(index['Pelusa'])

const anidado = [1,[2,3], 4, [5]]
// 1,2,3,4,5
const plano = anidado.reduce((ac,el) => ac.concat(el), [])
console.log(plano)