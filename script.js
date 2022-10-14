/* Lista com alunos e suas notas */

let listStudents = [ /* Cria um array com objetos dentro */
  {
    name: "Fabio",
    nota1: 2,
    nota2: 1,
  },
  {
    name: "Vanessa",
    nota1: 8,
    nota2: 9,
  },
  {
    name: "Bernardo",
    nota1: 7,
    nota2: 4,
  }
]

let media = 0; /* Declara a variável media que será usada na função */

function result(listStudents) { /* Executa a função na listStudents */
  let media = (listStudents.nota1 + listStudents.nota2)/2 /* calcula a média */
  if (media >= 7) {
  return (`A média do ${listStudents.name} é de ${media}. Parabéns ${listStudents.name}, você foi aprovado!`) /* Se media >= 7 faz isso */
} else {
  return (`A média do ${listStudents.name} é de ${media}. Não foi dessa vez ${listStudents.name}, você foi reprovado.`) /* Se media < 7 faz isso */
}
}

for (let listStudent of listStudents) { /* Cria e propriedada listStudent dentro da listStudents e depois escreve */
  let mediaMessage = result(listStudent)
  alert(mediaMessage)
}

