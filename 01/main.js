// your code goes here
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
];

const contarOvejas = (ovejas) =>{
    return `Vamos a contar ${ovejas} ovejas`
}//contarOvejas
console.log( contarOvejas(2));


const ovejasFiltradas = ovejas.filter(ovejas  => ovejas.color === 'rojo' && ovejas.name.toLowerCase().includes('a') && ovejas.name.toLowerCase().includes('n'))
 
console.log(ovejasFiltradas);
