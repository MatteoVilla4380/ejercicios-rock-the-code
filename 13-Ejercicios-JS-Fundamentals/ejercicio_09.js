//  Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(numbersArray) {
  let total = 0
  for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i]
  }
  return total
}

console.log(sumAll(numbers))
