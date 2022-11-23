// --- ----------para el boton ELIMINAR-----------------------------------
// Crearemos todo el elemento donde esta el icono de basura
const deleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => deleteTask(id));
  return i;
};
// eliminar toda la CARD
const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  //volver a obtener la informacion de local storage
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  //
  const index = tasks.findIndex((item) => item.id === id);
  //cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
  // (donde empieza, # total de elementos)
  console.log(index);
  tasks.splice(index, 1);
  li.innerHTML = "";
  console.log(tasks);
  //volver a almacenar tasks al localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //cada que haya un cambio en el proyecto, hay que llamar a displayTask
  displayTasks();
};

// export default deleteIcon;
