//
const uniqueDates = (tasks) => {
  const unique = [];

  //vamos a recorrer nuestro arreglo
  tasks.forEach((task) => {
    //si todavia no existe (task.dateFormat) en nuestro arreglo(unique) lo agrego
    if (!unique.includes(task.dateFormat)) {
      unique.push(task.dateFormat);
    }
  });
  return unique;
};

//ordenar las fechas
const orderDates = (dates) => {
  // metodo que ordena los arreglos
  return dates.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YY");
    const secondDate = moment(b, "DD/MM/YY");
    return firstDate - secondDate;
  });
};
