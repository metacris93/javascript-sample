const suma = (ns) => {
    let acumulado = 0
    for (i = 0 ; i < ns.length ; i++)
    {
        acumulado += ns[i]
    }
    return acumulado
}
const numeros = [1,2,3,4,5]
// multiplicar por 2
//const multiplicados = numeros.map(x=> x * 2)
//console.log(multiplicados)

//a pares
//const parejas = numeros.map(x => [x,x])
//console.log(parejas)

const mascotas = [
    {nombre: 'Puchin', edad: 12, tipo: 'perro'},
    {nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
    {nombre: 'Pulga', edad: 10, tipo: 'perro'},
    {nombre: 'Pelusa', edad: 16, tipo: 'gato'}
]
//edad promedio
const edades = mascotas.map(x => x.edad)
const resultado = suma(edades)
const promedio = resultado / edades.length
