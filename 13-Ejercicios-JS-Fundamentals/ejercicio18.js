// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
function removePlacesById(places, idsToRemove) {
  for (let i = 0; i < places.length; i++) {
    if (idsToRemove.includes(places[i].id)) {
      places.splice(i, 1)
    }
  }
  return places
}

console.log(removePlacesById(placesToTravel, [11, 40]))
