// Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
// Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

function removeToysWithCat(toysArray) {
  for (let i = 0; i < toysArray.length; i++) {
    if (toysArray[i].name.includes('gato')) {
      toysArray.splice(i, 1)
    }
  }
  return toysArray
}

console.log(removeToysWithCat(toys))
