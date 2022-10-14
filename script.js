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

let media = 0;

function result(listStudents) {
  let media = (listStudents.nota1 + listStudents.nota2)/2
  if (media >= 7) {
  return (`A média do ${listStudents.name} é de ${media}. Parabéns ${listStudents.name}, você foi aprovado!`)
} else {
  return (`A média do ${listStudents.name} é de ${media}. Não foi dessa vez ${listStudents.name}, você foi reprovado.`)
}
}

for (let listStudent of listStudents) {
  let mediaMessage = result(listStudent)
  alert(mediaMessage)
}

