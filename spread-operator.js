const gato = {
    nombre: 'Chanchito',
    edad: 15
}
const gato2 = {...gato}//creamos una copia de la constante gato
gato2.nombre = 'lala'
const gatos = [gato, gato2]
console.log(gatos)