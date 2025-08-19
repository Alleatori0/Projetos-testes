//Lista de alunos e suas notas
const alunos = {
  Ione: [10, 10, 9, 10],
  Rafael: [9, 7, 8, 10],
  Renan: [7, 5, 4, 6],
};
const medias = {};

//Calculo das notas
for (let nome in alunos) {
  medias[nome] =
    alunos[nome].reduce((acc, num) => acc + num, 0) / alunos[nome].length;
  if (medias[nome] >= 6) {
    console.log(`${nome}: Aprovado`);
  } else {
    console.log(`${nome}: Reprovado`);
  }
}

// Estrutura nova, mais "complexa"(com muitas aspas). Mas agora fica mais fácil implementar um terminal de entrada,
// que inclusive será o próximo passo do código.
