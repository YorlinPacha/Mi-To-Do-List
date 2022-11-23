// Agrupar los elemento o tareas por la fecha
const dateElement = (date) => {
  //Crearemos la estructura HTML para poderla agregar al DOM ( va a vivir dentro de la lista)
  const dateelement = document.createElement("li");
  dateelement.classList.add("date");
  dateelement.innerHTML = date;
  return dateelement;
};
