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
  const content = `<div>
<i class="far fa-check-square icon"></i>
<span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`;
  // ------ Agregar el contenido al elemento  li
  task.innerHTML = content;
  // ----------------------------- Termina la tarea ----------------------------------------------

  // Ahora se agregara toda nuestra TAREA al elemento lista
  list.appendChild(task); // Al elemento lista quiero agregarle un hijo.  (padre-lista) (hijo-tarea)
  console.log(content); // mostrara el nuevo contenido
};

//llamar a la funcion
btn.addEventListener("click", createTask);

// funcion antes de implementar Arrow function

// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
