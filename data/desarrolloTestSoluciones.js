// Transformación: agrupamos todos los ejercicios en un array plano.
// Se mantiene id, titulo, tipo y soluciones.
// Esto permite usarlo directamente en la página de respuestas.

import { desarrolloTestSoluciones as raw } from "./desarrolloTestSoluciones_original";

const grupos = raw.ejercicios;

// Convertimos grupos → array plano
const soluciones = Object.entries(grupos).flatMap(([grupoClave, grupo]) => {
  return grupo.ejercicios.map((ej) => ({
    id: ej.id,
    grupo: grupoClave,
    titulo: ej.titulo,
    tipo: ej.tipo,
    soluciones: ej.soluciones,
    columnas: ej.columnas || null,
    filas: ej.filas || null,
  }));
});

export default soluciones;
