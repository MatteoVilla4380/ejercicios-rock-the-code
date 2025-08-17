// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

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
function repeatCounter(words) {
  const wordCount = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (wordCount[word]) {
      wordCount[word]++
    } else {
      wordCount[word] = 1
    }
  }
  return wordCount
}

console.log(repeatCounter(counterWords))
