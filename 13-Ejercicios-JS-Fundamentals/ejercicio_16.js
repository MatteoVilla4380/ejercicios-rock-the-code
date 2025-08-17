// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

function printDestinations(destinations) {
  for (const destination of destinations) {
    console.log(destination)
  }
}

printDestinations(placesToTravel)
