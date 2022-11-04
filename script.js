// obtenemos los datos del boton por medio de Atributos de datos
const btn = document.querySelector("[data-form-btn]");

// funcion tipo
const createTask = (evento) => {
  evento.preventDefault(); //     Previene la auto carga de la pagina que viene por defecto el formulario
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
};

//llamar a la funcion
btn.addEventListener("click", createTask);

// funcion antes de implementar Arrow function

// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
