
const livres = [1,2,3,4,5,];
const reservados = [6,7,8,9,10];

function reservas(cadeiras) {
    let i = cadeiras
    if ( livres.includes(cadeiras)) {console.log("acento " + cadeiras + " reservado com sucesso")} 
    else if (reservados.includes(cadeiras)) {console.log("acento " + cadeiras + " ja esta reservado")} 
    else {console.log("Escolha um acento valido")}
    return i
}
reservas(11);
//esse foi bem mais rapoido. ta bem cru, mas depois eu melhoro conforme for aprendendo mais.