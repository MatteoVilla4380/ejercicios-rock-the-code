// Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
// Puedes usar este array:

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

function showPlaces(array) {
  for (const place of array) {
    console.log(place)
  }
}

showPlaces(placesToTravel)
