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

let calcMedia = 0;
let listStudent = [];

function media() {
  let calcMedia = (nota1 + nota2) / 2;
  return calcMedia;
}

if (calcMedia >= 7) {
  alert(`Parabéns ${listStudent.push(listStudents.name)}, você foi aprovado com a média ${calcMedia}`)
} else {
  alert(`Não foi dessa vez ${listStudent.push(listStudents.name)} , você foi reprovado com a média ${calcMedia}`)
}