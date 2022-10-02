const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo Massa
console.log(pilotos)

pilotos.push('Verstappen') // adicionar o ultimo
console.log(pilotos)

pilotos.shift() // remove o primeiro Vettel
console.log(pilotos)

pilotos.unshift('Hamilton') //adicionar o primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //indice 1 entra, 4 nao
console.log(algunsPilotos2)