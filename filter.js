const numeros = [0,1,2,3,4,5,6,7,8,9]
const mascotas = [
    {nombre: 'Puchin', edad: 12, raza: 'perro'},
    {nombre: 'Chanchito feliz', edad: 3, raza: 'perro'},
    {nombre: 'Pulga', edad: 10, raza: 'perro'},
    {nombre: 'Pelusa', edad: 16, raza: 'gato'}
]
/*
filter es inmutable, no modifica el arreglo original, devuelve un nuevo arreglo
*/
//const numerosFiltrados = numeros.filter(x => x < 5)
//console.log(numerosFiltrados)

const perros = mascotas.filter(x => x.raza == 'perro')

console.log(perros)