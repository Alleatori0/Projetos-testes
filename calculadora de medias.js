//Lista de alunos e suas notas
const Ione = [10, 10, 9, 10];
const Rafael =[9, 7, 8, 10];
const Renan = [7, 5, 4, 6];          

//Calculo das notas
function calculaMedia(aluno) {
   let soma = 0;
    for( let i = 0; i < aluno.length; i++)
soma += aluno[i];
    let media = soma / aluno.length;
    if (media >= 6) {console.log("Aprovado")} else {console.log("Reprovado")}
    return media; 
    
}

//Resultado
console.log(calculaMedia(Ione));
console.log(calculaMedia(Rafael));
console.log(calculaMedia(Renan)); 
    
//demorei quase 12 minutos para fazer isso porque a "let soma" tava fora da função e tava dando as medias erradas