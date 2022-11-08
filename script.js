// Proteger nuestro codigo IIFE
//(() => {
// import checkComplete from "./checkComplete.js";
// import deleteIcon from "./deleteIcon.js";

// obtenemos los datos del boton por medio de Atributos de datos
const btn = document.querySelector("[data-form-btn]");

// funcion tipo
const createTask = (evento) => {
  evento.preventDefault(); //     Previene la auto carga de la pagina que viene por defecto el formulario
  const input = document.querySelector("[data-form-input]");
  const value = input.value; // guardamos en esta variable (el texto que vamos agregar) para luego ...
  // const task = document.querySelector("[data-task]");    seleccionar todo el elemento de la lista  li  1ra parte.

  const list = document.querySelector("[data-list]"); // Agregar al elemento padre

  //   --------------------- Todo esto es de la tarea --------------------------------------------
  const task = document.createElement("li"); // Creamos todo el elemento "li"  2 parte
  task.classList.add("card"); // crear una nueva clase a este elemento
  input.value = " "; // ser borrada aqui

  //   ------- Agregaremos contenido al HTML   y usaremos template strings (para convinar etiquetas html)-----
  //Creamos el div -- Ejecutamos el check
  const taskContent = document.createElement("div"); // Agregar el hijo al div que ya  esta creado con la funcion(<i class="far fa-check-square icon"></i>)

  //Creamos el span
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask); //Agrgar al elemento padre

  //Ejecutamos Eliminar
  //taskContent.appendChild(deleteIcon());

  //     const content = `          3) Original- se elimina este bloque y se coloco en la funcion de ELIMINAR, para el icono de basura
  // <i class="fas fa-trash-alt trashIcon icon"></i>`;

  //--------

  //Origial, el nuevo esta arriba de este (descompuesto para ir mostrandose)
  //  const content = `<div>                     2) en este paso se creara un div con js
  // <i class="far fa-check-square icon"></i>    1)lo convertiremos en un elemento que vivira en una funcion para luego llamarla (se creara en la funcion checkComplete)
  // <span class="task">${value}</span>
  // </div>
  // <i class="fas fa-trash-alt trashIcon icon"></i>`; 3)

  // ------ Agregar el contenido al elemento  li
  //task.innerHTML = content;  Original
  task.appendChild(taskContent);

  // agregar el elemento creado  BASURA al elemento padre
  task.appendChild(deleteIcon());

  // Ahora se agregara toda nuestra TAREA al elemento lista
  list.appendChild(task); // Al elemento lista quiero agregarle un hijo.  (padre-lista) (hijo-tarea)
  //console.log(content);  mostrara el nuevo contenido
};

// ------------------------------------------- Termina la tarea ---------------------------------------------------

//llamar a la funcion
btn.addEventListener("click", createTask);

//})();
