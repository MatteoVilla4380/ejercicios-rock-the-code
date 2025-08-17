// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario
// cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(elements) {
  let total = 0
  let count = 0

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === 'number') {
      total += elements[i]
      count++
    } else if (typeof elements[i] === 'string') {
      total += elements[i].length
      count++
    }
  }

  return total / count
}

console.log(averageWord(mixedElements))
