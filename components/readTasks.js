// leer la informacion que ya tenemos almacenada en local storage

//import dateElement from "./dateElement.js";

//
const displayTasks = () => {

  // seleccionamos la lista a la cual vamos a querer Agregar nuestras tareas almacenadas
  const list = document.querySelector("[data-list]");

  //tomamos la informacion que ya esta almacenada en localStorage
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  //
  const dates = uniqueDates(taskList);
  //
  //modifica directamente al arreglo dates
  orderDates(dates);
  //
  //cada una de las fechas que estan almacenadas en el arreglo
  //por cada uno de los elementos que existen dentro de nuestro arreglo (dates) vas a ir a nuestro arreglo
  // (taskList) y vas a ir a cada uno de ellos generando nuestra estructura
  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM//YY");

    //
    //por cada una de las tareas que estan entro del storage (aparecera arriba de la tarea)
    list.appendChild(dateElement(date));
    //recorremos nuestro arreglo
    //para cada uno de los elementos o tareas que existan en mi arreglo le vamos a mandar la tarea o el objeto que tiene
    //el formato de (value y dateformat)y lo mandamos a l funcion createTask
    taskList.forEach((task) => {
      //createTask: nos regresara toda la estructura html ya definida con clases y todo
      const taskDate = moment(task.dateFormat, "DD/MM//YY");

      //saber la diferencia entre una fecha y otra
      const diff = dateMoment.diff(taskDate);

      if (diff == 0) {
        //Agregar nuestra estructura HTML que estamos creando aqui a la lista
        list.appendChild(createTask(task));
      }
    });
  });
};
