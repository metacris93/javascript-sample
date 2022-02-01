const _ = require('lodash')
const users = [
    {id: 1, nombre: 'cristian', apellido: 'pisco'}
]

const compose = (...fns) => x => fns.reduceRight((y,f) => f(y), x)
const head = x => x[0]
const capitalizaNombreYApellido = x => ({
    nombre: _.upperFirst(primero.nombre),
    apellido: _.upperFirst(primero.apellido),
})
const setNombre = x => `${x.nombre} ${x.apellido}`

// const getNombreCompleto = (_users) => {
//     const primero = head(_users)
//     const capitalizados = capitalizaNombreYApellido(primero)
//     return setNombre(capitalizados)
// }

// point free
const getNombreCompleto = compose(setNombre, capitalizaNombreYApellido, head)

const x = getNombreCompleto(users)
console.log(x)