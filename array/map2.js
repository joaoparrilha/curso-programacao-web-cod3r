const carrinho =[
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 13.90}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar array apenas com o preco

const paraObjeto = json => JSON.parse(json) //.parse() transformar json para objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)