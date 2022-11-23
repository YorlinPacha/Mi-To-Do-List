// Proteger nuestro codigo IIFE
//(() => {
// import checkComplete from "./checkComplete.js";
// import deleteIcon from "./deleteIcon.js";
// import { addTask } from "./addTask.js";

// obtenemos los datos del boton por medio de Atributos de datos
const btn = document.querySelector("[data-form-btn]");
//
//

//llamar a la funcion
btn.addEventListener("click", addTask);

//})();
//Solo llamar
displayTasks();
