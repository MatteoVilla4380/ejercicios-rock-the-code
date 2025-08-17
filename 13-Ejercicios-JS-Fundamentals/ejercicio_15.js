// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

function filterCamisetas(products) {
  const camisetas = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
      camisetas.push(products[i])
    }
  }
  return camisetas
}

console.log(filterCamisetas(products))
