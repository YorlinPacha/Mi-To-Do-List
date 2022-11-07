// Proteger nuestro codigo IIFE
(() => {
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
    //Creamos el div
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete()); // Agregar el hijo al div que ya  esta creado con la funcion(<i class="far fa-check-square icon"></i>)
    //Creamos el span
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(titleTask); //Agrgar al elemento padre

    const content = `
<i class="fas fa-trash-alt trashIcon icon"></i>`;

    //Origial, el nuevo esta arriba de este (descompuesto para ir mostrandose)
    //  const content = `<div>                     2) en este paso se creara un div con js
    // <i class="far fa-check-square icon"></i>    1)lo convertiremos en un elemento que vivira en una funcion para luego llamarla (se creara en la funcion checkComplete)
    // <span class="task">${value}</span>
    // </div>
    // <i class="fas fa-trash-alt trashIcon icon"></i>`;

    // ------ Agregar el contenido al elemento  li
    //task.innerHTML = content;  Original
    task.appendChild(taskContent);
    // ----------------------------- Termina la tarea ----------------------------------------------

    // Ahora se agregara toda nuestra TAREA al elemento lista
    list.appendChild(task); // Al elemento lista quiero agregarle un hijo.  (padre-lista) (hijo-tarea)
    //console.log(content);  mostrara el nuevo contenido
  };

  //llamar a la funcion
  btn.addEventListener("click", createTask);
  // llamar funcion check ( crearemos toda la linea de codigo de arriba)
  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask); // Al hacer click llamamos la funcion
    return i;
  };

  // funcion antes de implementar Arrow function

  // btn.addEventListener("click", function (evento) {
  //   evento.preventDefault();
  //   const input = document.querySelector("[data-form-input]");
  //   console.log(input.value);
  // });

  // Añadir el listener para el icono check cambie
  // event = muesta todo un objeto y hace referencia al elemento que se esta realizando la accion, mostrando toda una lista de informacion (inspet)
  // target = saber cual es el elemento que esta tocando el usuario
  const completeTask = (event) => {
    // console.log(event); para ver toda la informacion
    const element = event.target;
    element.classList.toggle("fas"); // cambiar forma del icono
    element.classList.toggle("completeIcon"); // clse para cambiar color, esta en styles
    element.classList.toggle("far");
    // toogle = verifica si existe o no la clase, si existe la quita, si no la agrega
  };
})();
