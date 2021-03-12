const palabras = ['perro', 'gato', 'elefante','pizza'];

const texto = document.getElementById('texto');
const lista = document.getElementById('lista');

const pintarLista = arr => {
    let cajita = ''; // acá es en donde va a pintar los li
    for (let index = 0; index < arr.length; index++) {
        
        console.log(arr[index]);
        const li = `<li> ${arr[index]} </li>`; //Creo la etiqueta li con cada elemento que contiene el arreglo
        cajita += li; // para guardar cada palabra del array
        
    }
    lista.innerHTML = cajita; // tengo que pintar esas li
}

pintarLista(palabras);

texto.addEventListener('keyup', () => {
    let result = [];
    console.log(texto.value); //acceder a lo que el usuario ingresa en el input 
    for (let index = 0; index < palabras.length; index++) {
        const palabra = palabras[index].toUpperCase();
        const ingresado = texto.value.toUpperCase();

    //   Cada vez que el usuario ingresa algo en el input se tiene que recorrer el arreglo para ver si existe coincidencia
        if( palabra.includes(ingresado)){ // el includes me devuelve verdadero o falso
            console.log(palabras[index]);
            result.push(palabras[index]); // Para saber cuales son las palabras que contienen el texto ingresado en el input
        }
    }
    pintarLista(result); 
}); 