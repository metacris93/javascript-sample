// un closure se crea al momento de ejecutar una funcion, forma de composicion que se utiliza en javascript, 
// closure es el alcance lexico que tiene una funcion al momento de ejecutarla, vamos a poder acceder a las variables que estén al alance de la funcion
// const x = 'Fluffy'
// const f = () =>
// {
//     const y = 'Kins'
//     console.log(x,y)
// }
// f()

require('isomorphic-fetch')
const crudder = dominio => recurso =>
{
    const url = `${dominio}/${recurso}`
    return ({
        create: () => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}
const Base = crudder('https://jsonplaceholder.typicode.com')
const Todos = Base('todos')
const Users = Base('users')
Todos.get().then(x => console.log(x[0]))