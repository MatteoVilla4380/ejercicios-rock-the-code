// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numbersArray) {
  let numberAverage = 0
  for (let i = 0; i < numbersArray.length; i++) {
    numberAverage += numbersArray[i]
  }
  return numberAverage / numbersArray.length
}

console.log(average(numbers))
