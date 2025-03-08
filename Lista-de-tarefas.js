// esse é meu primeiro projeto usando terminal de entrada...
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function taskList() {
  let taskList = [];

  function askTask() {
    rl.question("Digite uma tarefa, 'remover' para apagar a ultima tarefa ou 'sair' para encerrar: ", (task) => {
      if (task.toLowerCase() === "sair") {
        if (taskList.length === 0) { console.log("Voce não tem tarefas"); }
        else { console.log("Suas tarefas são: " + taskList.join(", ")); }
        rl.close();
      }
      else if (task.toLowerCase() === "remover") {
        taskList.pop();
        askTask();
      }
      else {
        taskList.push(task);
        askTask();
      }
    });
  } askTask();
} taskList();


