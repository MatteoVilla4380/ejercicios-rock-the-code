// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

function averageSales(products) {
  let total = 0
  for (const product of products) {
    total += product.sellCount
  }
  const average = total / products.length
  console.log('Total de ventas:', total)
  console.log('Media de ventas:', average)
}

averageSales(products)
