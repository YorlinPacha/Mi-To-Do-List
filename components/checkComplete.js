// llamar funcion check ( crearemos toda la linea de codigo del bloque TAREA)
const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id)); // Al hacer click llamamos la funcion
  return i;
};

// funcion antes de implementar Arrow function

// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });

// ----  para AÑADIR el listener para el icono check cambie ----
// event = muesta todo un objeto y hace referencia al elemento que se esta realizando la accion, mostrando toda una lista de informacion (inspet)
// target = saber cual es el elemento que esta tocando el usuario
const completeTask = (event, id) => {
  // console.log(event); para ver toda la informacion
  const element = event.target;
  element.classList.toggle("fas"); // cambiar forma del icono
  element.classList.toggle("completeIcon"); // clse para cambiar color, esta en styles
  element.classList.toggle("far");
  // toogle = verifica si existe o no la clase, si existe la quita, si no la agrega

  //verificar cual es la posicion en local storage
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);

  //accediendo al indice y vamos a negar el valor que esta almacenado, false por true y true por false
  tasks[index]["complete"] = !tasks[index]["complete"];
  //volver a guardar el arreglo a local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// export default checkComplete;
