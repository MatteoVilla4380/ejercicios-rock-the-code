// 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers01 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers01[0]) // HULK
console.log('----------------')

// 4.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers02 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers02[0] = 'IRONMAN'
console.log(avengers02[0]) // IRONMAN
console.log('----------------')

// 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers03 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers03.length) // 3
console.log('----------------')

// 4.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters01 = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters01.push('Morty', 'Summer')
console.log(rickAndMortyCharacters01[rickAndMortyCharacters01.length - 1]) // Summer
console.log('----------------')

// 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters02 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters02.pop() // Elimina el último elemento
console.log(rickAndMortyCharacters02[0]) // Rick
console.log(rickAndMortyCharacters02[rickAndMortyCharacters02.length - 1]) // Summer
console.log('----------------')

// 4.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters03 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters03.splice(1, 1) // Elimina el segundo elemento
console.log(rickAndMortyCharacters03) // ['Rick', 'Jerry', 'Morty', 'Summer', 'Lapiz Lopez']
console.log('----------------')
