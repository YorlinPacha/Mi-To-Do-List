// --- ----------para el boton ELIMINAR-----------------------------------
// Crearemos todo el elemento donde esta el icono de basura
const deleteIcon = () => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", deleteTask);
  return i;
};
// eliminar toda la CARD
const deleteTask = (event) => {
  const parent = event.target.parentElement; // localizamos o accedemos el elemento padre de la CARD
  //console.log("parent");
  parent.remove(); // la eliminamos con este metodo
};

// export default deleteIcon;
