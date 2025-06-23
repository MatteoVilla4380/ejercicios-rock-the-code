// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas.
// Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

function replaceNonVeganFoodsWithFruits(foodArray, fruitArray) {
  const uniqueFruits = [...new Set(fruitArray)] // Remove duplicates
  let fruitIndex = 0

  for (let i = 0; i < foodArray.length; i++) {
    if (!foodArray[i].isVegan) {
      if (fruitIndex < uniqueFruits.length) {
        foodArray[i].name = uniqueFruits[fruitIndex]
        fruitIndex++
      } else {
        foodArray.splice(i, 1) // Remove non-vegan food if no more fruits are available
      }
    }
  }

  return foodArray
}

console.log(replaceNonVeganFoodsWithFruits(foodSchedule, fruits))
