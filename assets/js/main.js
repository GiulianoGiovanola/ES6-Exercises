/*
Exercises

Tips: 
1. To show the result of each exercise write a consol log with the form: console.log('Ex 1.', value or function).
2. Make some research about the usage of reduce, some and many.
3. Create a js file called utils.js and place all helper functions in it. (Ex 10 and 14)

1) Import songs array using modules.

2. Use the map function to create a new array with the title of each song in uppercase letters.

3. Use the filter function to create a new array with all the songs released before 1975.

4. Use destructuring to create a variable that stores the title of the first song in the array.

5. Use the find function to get the object representing the song "Hotel California".

6. Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

7. Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

8. Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

9. Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

10. Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)

11. Use the find function to get the object representing the song with the longest title.

12. Use destructuring and template literals to log the title, artist and year of the first element of the array.

13. Use the rest operator to create a new array without the first element.

14. Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

15. Use the every() method to check if all the songs have titles that are 5 or more characters long.

16. Use the some() method to check if there are any songs from the 80s.

17. Use a template literal to create a string that says "The Beatles released Let It Be in 1970."

18. Use the map() method to create a new array with just the artist names.

19. Create a function called randomMovie that returns one movie from the songs array randomly. Log the call of this function 3 times.

20. Write your own function using at least 3 concepts.

*/

//Ejercicio 1

import songs from "./songs.js";

console.log("Ex 1.", songs);

//Ejercicio 2

const cancionesMayusculas = songs.map((cancion) => cancion.title.toUpperCase());

console.log("Ex 2.", cancionesMayusculas);

//Ejercicio 3

const cancionesFiltradas = songs.filter((cancion) => cancion.year < 1975);

console.log("Ex 3.", cancionesFiltradas);

//Ejercicio 4

const cancionNumero1 = songs[0];
const titulo = cancionNumero1.title;

console.log("Ex 4.", titulo);

//Ejercicio 5

const cancionesEncontrada = songs.find(
  (cancion) => (cancion.title === "Hotel California")
);

console.log("Ex 5.", cancionesEncontrada);

//Ejercicio 6

function sumarCanciones(...cancion) {
  return cancion.reduce((total, index) => total + songs[index].year, 0);
}

console.log("Ex 6.", sumarCanciones(0, 1, 2, 3, 4, 5, 6, 7, 8, 9));

//Ejercicio 7

const cancionesFormato = songs.map(cancion => `${cancion.title} - ${cancion.artist} (${cancion.year})`);

console.log("Ex 7.", cancionesFormato);

//Ejercicio 8

const cancionesTheBeatles = songs.filter((cancion) => cancion.artist === 'The Beatles');

const titulosTheBeatles = cancionesTheBeatles.map(({ title }) => title);

console.log("Ex 8.", titulosTheBeatles);

//Ejercicio 9

console.log("Ex 9.", "No lo hice (consultar)");

//Ejercicio 10

import calcularAnioPromedio from "./calcularPromedio.js";

const anioPromedio = calcularAnioPromedio(songs);

console.log("Ex 10.", anioPromedio);

//Ejercicio 11

const cancionMasLarga = songs.find((cancion, index, array) => {
  const esLaMasLarga = array.every((otraCancion) => cancion.title.length >= otraCancion.title.length);
  return esLaMasLarga;
});

console.log("Ex 11.", cancionMasLarga);

//Ejercicio 12

const [primeraCancion] = songs;
const {title, artist, year} = primeraCancion;


console.log("Ex 12.", `Título: ${title}, Artista: ${artist}, Año: ${year}`);

//Ejercicio 13

const [...nuevoArray] = songs;
nuevoArray.splice(0, 1);

console.log("Ex 13.", nuevoArray);

//Ejercicio 14

/*import { filter } from './utils.js';

const cancionesConLove = filter(songs, (cancion) => cancion.title.includes('Love'));*/

console.log("Ex 14.", "No lo hice (consultar)"/*, cancionesConLove*/);

//Ejercicio 15

const canciones5Caracteres = songs.every((cancion) => cancion.title.length >= 5);

console.log("Ex 15.", canciones5Caracteres);

//Ejercicio 16

const cancionesDeLos80 = songs.some((cancion) => cancion.year >= 1980 && cancion.year < 1990);

console.log("Ex 16.", cancionesDeLos80);

//Ejercicio 17

const cancionLetItBe = songs.find((cancion) => cancion.title === 'Let It Be' && cancion.artist === 'The Beatles');

if (cancionLetItBe) {
  const { title, year, artist } = cancionLetItBe;
  const mensaje = `Los ${artist} lanzaron ${title} en ${year}.`;
  console.log("Ex 17.", mensaje);
} else {
  console.log('No se encontró la canción "Let It Be" de The Beatles en la lista de canciones.');
}

//Ejercicio 18

const nombresDeArtistas = songs.map((cancion) => cancion.artist);

console.log("Ex 18.", nombresDeArtistas);

//Ejercicio 19

// Definir la función randomMovie
function randomMovie(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

// Registra la llamada de randomMovie 3 veces
for (let i = 1; i <= 3; i++) {
  const peliculaAleatoria = randomMovie(songs);
  console.log("Ex 19.", `Llamada ${i}: ${peliculaAleatoria.title} - ${peliculaAleatoria.artist}`);
}

//Ejercicio 20

console.log("Ex 20.", "No lo hice (consultar)");
