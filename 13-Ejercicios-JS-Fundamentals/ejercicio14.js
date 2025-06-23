// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]

function repeatCounter(param) {
  return function (word) {
    const count = param.filter((item) => item === word).length
    if (count > 0) {
      return { exists: true, count: count }
    } else {
      return { exists: false }
    }
  }
}

console.log(repeatCounter(counterWords)('sleep'))
