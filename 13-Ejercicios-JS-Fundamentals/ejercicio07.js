// Completa la función que tomando dos números como argumento devuelva el más alto.
let numberOne = 10
let numberTwo = 20

function getMaxNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberTwo > numberOne) {
    return numberTwo
  } else {
    return 'Los números son iguales'
  }
}

console.log(getMaxNumber(numberOne, numberTwo)) // 20
