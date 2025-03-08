//implementação do terminal de entrada
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let livres = [1, 2, 3, 4, 5];
let reservados = [6, 7, 8, 9, 10];

function reservasDeAssentos() {
    console.log("Assentos disponiveis: " + livres.join(", "));
    rl.question("Escolha seu assento: ", (input) => {
      let assento = parseInt(input)
    if (livres.includes(assento)) { console.log(`Assento ${assento} reservado com sucesso`)
        reservados.push(assento);
        livres = livres.filter(num => num !== assento);
        rl.close();
    }
    else if (reservados.includes(assento)) {
         console.log(`Assento ${assento} ja esta reservado`) 
         reservasDeAssentos();
    }
    else {
         console.log("Escolha um acento valido") 
         reservasDeAssentos();
    
        }
  });
} reservasDeAssentos();
//alguns ajustes e a implementação do terminal de entrada, da para dar uma melhorada. Quem sabe uma API... mas não aprendi sobre ainda