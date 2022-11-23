//
//----------se encargara de agregar a la lista de las tareas
// tenemos una funcion addtask (que recibe )un evento y este evento es el que genera el formulario
const addTask = (evento) => {
  evento.preventDefault(); //     Previene la auto carga de la pagina que viene por defecto el formulario
  //nos trae la lista, elemento en el cual ireamos agregando las tareas
  const list = document.querySelector("[data-list]"); // Agregar al elemento padre
  // input el usuario llena el titulo que quiere hacer
  const input = document.querySelector("[data-form-input]");
  //Obtener informacion de la etiqueta date
  const calendar = document.querySelector("[data-form-date]");
  // ya etamos aqui obteniendo el texto que puso el usuario
  const value = input.value; // guardamos en esta variable (el texto que vamos agregar) para luego ...
  // const task = document.querySelector("[data-task]");    seleccionar todo el elemento de la lista  li  1ra parte.
  const date = calendar.value; // obtenemos el valor o formato diferente al usudo en latino america
  //pasaremos la fecha y luego el formato de la libreria moment
  //console.log(moment(date).format("DD/MM/YYYY"));
  // mandamos a llamar la funcion moment (pasando parametro la fecha) luego el formato que queremos que se muestre
  const dateFormat = moment(date).format("DD/MM/YYYY");
  //console.log(calendar); //obtenemos el elemento
  //
  //si no hay nombre de tarea y fecha, no agrega nada y no sigue el codigo. con el return se sale
  if (value == "" || date == "") {
    return;
  }
  //
  input.value = " "; // ser borrada aqui el input // pantalla en blanco para otra tarea
  calendar.value = ""; // limpie el calendario despues de colocar la fecha
  //
  //para el check
  const complete = false;

  //Creamos el objeto en el cual vamos a almacenar value como dateformat
  const taskObj = {
    value, // esto es igual a   value : value,
    dateFormat,
    complete,
    //identificador. cada que se agregue una tarea, se agregue este identificador unico y asi sabremos cual añadir o eliminr
    id: uuid.v4(),
  };
  // por cada una de las tareas que se esten agregando (clicl al boton) inicializarla en "0" y despues ya
  //despues readTasks se va a encargar de ir agregando cada una d las tareas
  list.innerHTML = "";
  // agregaremos los elementos de la lista a nuestro arreglo  taskList

  //
  //Almacenar todas las tareas que se esten haciendo para que no se reescriban (se agregaran con push) y
  // obtener la informacion del local storage de la llave que queremos encontrar
  //
  // estos || significan que en caso de todo el localStore sea indefinido(null) lo que voy hacer es formatearla
  //o darle un valor por defecto, en este caso seria un arreglo vacio.
  // revierte de string a objeto manipulable

  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  // a nuestro tasklist le vamos agregar nuestro taskObj que es la ultima tarea que estamos registrando
  taskList.push(taskObj);

  //
  // opcion de almacenamiento con el metodo JSON.stringify para convertir un objeto JS a string
  //con este se borrara la informacion cuando se recargue o cieree la pagina
  //sessionStorage.setItem("tasks", JSON.stringify(taskList));
  //
  //volver a almacenar nuestro arreglo de tarea ya actualizado y convirtiendolo a un formato JSON(todo strign)
  //Con este la informacion quedara guaradada sin importar si se cierra o carga la pagina
  localStorage.setItem("tasks", JSON.stringify(taskList));

  displayTasks(); // se encargara de hacer toda la estructura y mostrarla
};
//
//

//   ------------------------------- Todo esto es de la tarea --------------------------------------------
// funcion tipo
//la constante recibira al objeto
//Se encargara de crea toda la estructura HTML, Tomar los datos (texto tarea y fecha )y ponerlos donde corresponde,
const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement("li"); // Creamos todo el elemento "li"  2 parte
  task.classList.add("card"); // crear una nueva clase a este elemento

  //
  //   ------- Agregaremos contenido al HTML   y usaremos template strings (para convinar etiquetas html)-----
  //Creamos el div -- Ejecutamos el check
  const taskContent = document.createElement("div"); // Agregar el hijo al div que ya  esta creado con la funcion(<i class="far fa-check-square icon"></i>)

  //
  //Creamos un objeto en el cual almacenara la informacion que nosotros creemos necesaria
  //console.log(value, dateFormat); // es la informacion que necesitamos ( tarea que realiza el ususrio y la fecha de cuando la hara)

  const check = checkComplete(id);
  //verificar si la tarea ha sido completada para agregar el check
  console.log(complete);
  if (complete) {
    //sobreescribimos las clases y estara con el estilo azul de tarea completada
    check.classList.toggle("fas"); // cambiar forma del icono
    check.classList.toggle("completeIcon"); // clse para cambiar color, esta en styles
    check.classList.toggle("far");
  }
  //
  //
  //Creamos el span
  const titleTask = document.createElement("span");
  titleTask.classList.add("task"); // al elemento span le agregamos una clase
  titleTask.innerText = value; // ñe agregamos el valor o el texo que escribio el usuario
  taskContent.appendChild(check); //agregar el checklist y le pasamos el id
  taskContent.appendChild(titleTask); //Agregar el titulo al elemento padre

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
  //
  //Creamos un elemento span que mostrara la fecha a un lado de la tarea, lo quitamos porque ya esta arriba de la fecha
  //const dateElement = document.createElement("span");
  //agregarle el contenido de la fecha que se recibe del usuario
  //dateElement.innerHTML = dateFormat;
  //
  //task.innerHTML = content;  Original
  task.appendChild(taskContent);
  //
  //Agregamos nuevo elemento de la fecha
  //task.appendChild(dateElement);
  // agregar el elemento creado  BASURA al elemento padre
  task.appendChild(deleteIcon(id));
  return task; //retornar la funcion (tosa la estructura HTML que estamos creando)
};

// ------------------------------------------- Termina la tarea ---------------------------------------------------
