function calcularAnioPromedio(canciones) {

    const totalAnios = canciones.reduce((acumulador, cancion) => acumulador + cancion.year, 0);
    
    return totalAnios / canciones.length;

  }
  
export default calcularAnioPromedio;  