// llamar funcion check ( crearemos toda la linea de codigo del bloque TAREA)
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

// ----  para AÑADIR el listener para el icono check cambie ----
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

// export default checkComplete;
