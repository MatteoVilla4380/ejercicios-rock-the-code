// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina
// para retornar un array sin los elementos duplicados.

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(food) {
  const uniqueFood = []
  for (let i = 0; i < food.length; i++) {
    if (!uniqueFood.includes(food[i])) {
      uniqueFood.push(food[i])
    }
  }
  return uniqueFood
}

console.log(removeDuplicates(duplicates))
