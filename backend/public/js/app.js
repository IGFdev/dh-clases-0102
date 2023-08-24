/* //alert('Bienvenido al sitio!');

/* const rta = confirm('Te gusta el dulce de leche?');

if (rta) {
    console.log('Me caes bien');
} else {
    console.log('No sos humano');
}

const edad = prompt('Cuántos años tienes?');

console.log(Number(edad));
 */

/* const titulo = document.getElementById('titular');
const h1s = document.getElementsByTagName('h1');

titulo.innerHTML = 'Este es el nuevo contenido!';

const caja = document.getElementById('caja');

let paises = Array.from(document.getElementsByClassName('pais'));

paises.forEach(pais => {
    console.log(pais.innerHTML);
});
 */
// document.getElementById('id');                       // Trae un solo elemento
// document.getElementsByClassName('clase');            // Trae multiples elementos
// document.getElementsByTagName('etiqueta');           // Trae multiples elementos


/* El querySelector solo trae un elemento, y en caso de que hayan varios que cumplan con el selector, solo nos trae el primero */
// document.querySelector('.caja');
// document.querySelector('#titular');


/* El querySelectorAll nos trae un NodeList con todos los elementos que cumplan con el selector (Hay que convertirlo en array para usar los métodos) */
/* const todos = Array.from(document.querySelectorAll('h1'));
const h2 = document.querySelector('div#caja h2#subtitulo');

caja.classList.add('clase-nueva');      // Agregamos una clase
caja.classList.remove('clase-nueva');   // Quitamos una clase

caja.classList.toggle('prueba');        // Agrega o quita clase dependiendo si ya la tiene

console.table('🤦‍♂️', caja.classList.contains('prueba')); // Retorna booleano indicando si ya tiene la clase

const modo = confirm('Desea modo oscuro?');

const body = document.querySelector('body');

if(modo){
    body.style.backgroundColor = 'grey';
} else {
    body.style.backgroundColor = 'whitesmoke';
} 

document.querySelector('body').style.backgroundColor = modo ? 'grey' : 'whitesmoke';

console.log(caja.style.alignItems); */

