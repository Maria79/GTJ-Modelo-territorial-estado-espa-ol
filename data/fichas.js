export const fichas = [
  // ========== MODELOS TERRITORIALES ==========
  {
    id: 1,
    tema: "modelos",
    titulo: "Modelos Territoriales Tradicionales",
    contenido:
      "Diferentes formas de organizar un país a nivel territorial y político.",
    detalles: `
      <p>Los estados pueden organizarse de varias maneras:</p>
      <table>
        <tr><th>Modelo</th><th>¿Cómo funciona?</th></tr>
        <tr><td><strong>Estado Centralista</strong></td><td>Todo el poder se concentra en la capital. Las decisiones importantes las toma el gobierno central.</td></tr>
        <tr><td><strong>Estado Regionalizado</strong></td><td>Las regiones tienen algo de autonomía, pero el gobierno central puede quitársela si quiere.</td></tr>
        <tr><td><strong>Estado Federal</strong></td><td>Existe un gobierno federal (nacional) y gobiernos locales, ambos deben obedecer la Constitución federal.</td></tr>
        <tr><td><strong>Estado Confederal</strong></td><td>Los territorios que se unen mantienen casi toda su independencia y soberanía.</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 2,
    tema: "modelos",
    titulo: "El Modelo Territorial Español",
    contenido:
      "España tiene un sistema único llamado 'Estado de las Autonomías'.",
    detalles: `
      <p><strong>¿Qué es?</strong> Un sistema mixto que no es completamente centralizado ni completamente federal.</p>
      <p><strong>Base Legal:</strong></p>
      <ul>
        <li><strong>Artículo 2 de la Constitución:</strong> Dice que España es una sola nación pero reconoce el derecho a la autonomía de las regiones.</li>
        <li><strong>Título VIII de la Constitución:</strong> Explica cómo se organiza el territorio.</li>
      </ul>
      <p><strong>Organización Territorial:</strong> España se divide en municipios, provincias y comunidades autónomas. Cada una tiene autonomía para gestionar sus asuntos.</p>
    `,
    estudiado: false,
  },
  {
    id: 3,
    tema: "modelos",
    titulo: "Principios del Estado de las Autonomías",
    contenido:
      "Las reglas básicas que siguen las comunidades autónomas en España.",
    detalles: `
      <table>
        <tr><th>Principio</th><th>¿Qué significa?</th></tr>
        <tr><td><strong>Constitucionalidad</strong></td><td>Todo debe cumplir la Constitución. Ninguna ley puede ir en su contra.</td></tr>
        <tr><td><strong>Autonomía</strong></td><td>Las regiones pueden tomar sus propias decisiones sobre ciertos temas.</td></tr>
        <tr><td><strong>Unidad</strong></td><td>La autonomía no puede romper la unidad de España.</td></tr>
        <tr><td><strong>Solidaridad</strong></td><td>Las comunidades más ricas deben ayudar a las más pobres.</td></tr>
        <tr><td><strong>Cooperación</strong></td><td>Las comunidades pueden trabajar juntas y firmar acuerdos.</td></tr>
        <tr><td><strong>No Federalidad</strong></td><td>Las comunidades autónomas no pueden unirse para formar una federación.</td></tr>
        <tr><td><strong>Libertad</strong></td><td>Libertad para ser comunidad autónoma y para que los ciudadanos se muevan por todo el país.</td></tr>
        <tr><td><strong>Igualdad</strong></td><td>Todos los españoles tienen los mismos derechos sin importar dónde vivan.</td></tr>
        <tr><td><strong>Diversidad</strong></td><td>Se reconocen y respetan las diferencias culturales e históricas de cada región.</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 4,
    tema: "modelos",
    titulo: "Órganos de Cooperación entre Administraciones",
    contenido:
      "Espacios donde se reúnen el Estado y las comunidades autónomas para coordinarse.",
    detalles: `
      <p>Estos órganos evitan que se hagan las mismas cosas dos veces y ayudan a trabajar mejor.</p>
      <table>
        <tr><th>Órgano</th><th>¿Quién participa?</th><th>Función Principal</th></tr>
        <tr><td><strong>Conferencia de Presidentes</strong></td><td>Presidente del Gobierno + Presidentes de las 17 CCAA</td><td>Máximo órgano de cooperación</td></tr>
        <tr><td><strong>Conferencias Sectoriales</strong></td><td>Ministro + Consejeros autonómicos de la misma materia (ej: educación)</td><td>Coordinar temas específicos como sanidad o educación</td></tr>
        <tr><td><strong>Comisiones Bilaterales</strong></td><td>Gobierno central + un Gobierno autonómico</td><td>Dialogar problemas de una comunidad en concreto</td></tr>
        <tr><td><strong>Comisiones Territoriales</strong></td><td>Comunidades vecinas</td><td>Coordinar servicios en zonas fronterizas</td></tr>
      </table>
    `,
    estudiado: false,
  },

  // ========== COMUNIDADES AUTÓNOMAS ==========
  {
    id: 5,
    tema: "autonomias",
    titulo: "El Proceso Autonómico",
    contenido: "Cómo un territorio puede convertirse en Comunidad Autónoma.",
    detalles: `
      <p><strong>¿Quién puede ser comunidad autónoma?</strong></p>
      <ul>
        <li>Provincias vecinas con historia, cultura y economía similares</li>
        <li>Islas</li>
        <li>Provincias con identidad regional histórica</li>
      </ul>
      <p><strong>Dos formas de acceder:</strong></p>
      <table>
        <tr><th></th><th>Vía Lenta (Art. 143)</th><th>Vía Rápida (Art. 151)</th></tr>
        <tr><td><strong>Competencias</strong></td><td>Solo las básicas al principio</td><td>Todas desde el inicio</td></tr>
        <tr><td><strong>Órganos</strong></td><td>No necesita separación estricta de poderes</td><td>Debe tener separación de poderes</td></tr>
        <tr><td><strong>Plazo</strong></td><td>5 años para ampliar competencias</td><td>Autonomía plena inmediata</td></tr>
        <tr><td><strong>Referéndum</strong></td><td>No obligatorio</td><td>Obligatorio</td></tr>
      </table>
      <p><strong>Casos especiales:</strong> Madrid, Ceuta y Melilla fueron creadas por el Estado mediante ley.</p>
    `,
    estudiado: false,
  },
  {
    id: 6,
    tema: "autonomias",
    titulo: "El Estatuto de Autonomía",
    contenido: "Es como la 'constitución' de cada comunidad autónoma.",
    detalles: `
      <p><strong>¿Qué es?</strong> La ley más importante de cada comunidad autónoma.</p>
      <p><strong>¿Qué debe contener?</strong></p>
      <ul>
        <li>El nombre de la comunidad</li>
        <li>Sus límites territoriales</li>
        <li>Sus instituciones de gobierno</li>
        <li>Las competencias que asume</li>
      </ul>
      <p><strong>Importante:</strong> Debe ser aprobado por las Cortes Generales y cualquier cambio también requiere aprobación estatal.</p>
      <p><strong>Curiosidad:</strong> En la Segunda República ya existían estatutos para Cataluña, País Vasco y Galicia.</p>
    `,
    estudiado: false,
  },
  {
    id: 7,
    tema: "autonomias",
    titulo: "Las Competencias de las CC.AA.",
    contenido: "Qué cosas puede decidir y gestionar cada comunidad autónoma.",
    detalles: `
      <p><strong>Tipos de competencias:</strong></p>
      <ol>
        <li><strong>Competencias de las CC.AA.:</strong> Materias que pueden asumir voluntariamente (educación, sanidad, cultura...)</li>
        <li><strong>Competencias del Estado:</strong> Materias que solo decide el Estado (defensa, moneda, relaciones internacionales...)</li>
        <li><strong>Competencias compartidas:</strong> Ambas pueden legislar, pero la ley estatal prevalece</li>
        <li><strong>Competencias transferidas:</strong> El Estado cede competencias a las CC.AA.</li>
      </ol>
      <p><strong>Reglas para resolver conflictos:</strong></p>
      <ul>
        <li>Lo que no asuman las CC.AA., lo hace el Estado</li>
        <li>La ley estatal prevalece sobre la autonómica</li>
        <li>Si no hay ley autonómica, se aplica la estatal</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 8,
    tema: "autonomias",
    titulo: "Órganos de Gobierno de las CC.AA.",
    contenido: "Cómo se organiza el gobierno de cada comunidad autónoma.",
    detalles: `
      <table>
        <tr><th>Órgano</th><th>Función Principal</th><th>Características</th></tr>
        <tr><td><strong>Asamblea Legislativa</strong></td><td>Aprueba leyes y presupuestos, controla al gobierno</td><td>Parlamento autonómico, elegido por votación</td></tr>
        <tr><td><strong>Consejo de Gobierno</strong></td><td>Gobierna y administra la comunidad</td><td>Lo preside el Presidente, tiene consejeros (como ministros)</td></tr>
        <tr><td><strong>Tribunal Superior de Justicia</strong></td><td>Máximo órgano judicial en la comunidad</td><td>Parte del Poder Judicial único de España</td></tr>
      </table>
      <p><strong>La Administración Autonómica:</strong> Se organiza en Consejerías (como ministerios en pequeño).</p>
      <p><strong>Nombres curiosos:</strong></p>
      <ul>
        <li>Andalucía: Junta de Andalucía</li>
        <li>Cataluña: Generalitat</li>
        <li>Galicia: Xunta de Galicia</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 9,
    tema: "autonomias",
    titulo: "La Financiación de las CC.AA.",
    contenido: "De dónde sacan dinero las comunidades autónomas.",
    detalles: `
      <p><strong>Principios:</strong> Coordinación con el Estado y solidaridad entre territorios.</p>
      <p><strong>Dos sistemas:</strong></p>
      <table>
        <tr><th>Sistema</th><th>¿Cómo funciona?</th><th>¿Quién lo usa?</th></tr>
        <tr><td><strong>Régimen Común</strong></td><td>El Estado gestiona la mayoría de los impuestos y luego reparte</td><td>15 comunidades</td></tr>
        <tr><td><strong>Régimen Foral</strong></td><td>Gestionan sus impuestos y pagan un "cupo" al Estado</td><td>País Vasco y Navarra</td></tr>
      </table>
      <p><strong>Fuentes de ingresos:</strong></p>
      <ul>
        <li>Impuestos propios</li>
        <li>Parte del IRPF, IVA e Impuestos Especiales</li>
        <li>Fondos del Estado para servicios básicos</li>
        <li>Préstamos</li>
      </ul>
      <p><strong>Fondos Europeos:</strong> También reciben dinero de la UE para desarrollo.</p>
    `,
    estudiado: false,
  },
  {
    id: 10,
    tema: "autonomias",
    titulo: "Control sobre las CC.AA.",
    contenido: "Quién vigila que las comunidades autónomas cumplan la ley.",
    detalles: `
      <table>
        <tr><th>¿Quién controla?</th><th>¿Qué controla?</th></tr>
        <tr><td><strong>Tribunal Constitucional</strong></td><td>Que las leyes autonómicas cumplan la Constitución</td></tr>
        <tr><td><strong>Tribunales</strong></td><td>La actividad administrativa de las CC.AA.</td></tr>
        <tr><td><strong>Tribunal de Cuentas</strong></td><td>El dinero: presupuestos y gastos</td></tr>
        <tr><td><strong>Gobierno Central</strong></td><td>Las competencias que ha delegado</td></tr>
        <tr><td><strong>Cortes Generales</strong></td><td>Las competencias transferidas</td></tr>
        <tr><td><strong>Artículo 155 CE</strong></td><td>Medidas excepcionales si una comunidad no funciona</td></tr>
      </table>
      <p><strong>Órganos de control autonómicos:</strong> Cada comunidad tiene su propio tribunal de cuentas.</p>
    `,
    estudiado: false,
  },
  {
    id: 11,
    tema: "autonomias",
    titulo: "El Concepto de Autonomía",
    contenido: "Qué significa realmente ser autónomo.",
    detalles: `
      <p><strong>¿Qué es autonomía?</strong> Capacidad de gestionar tus propios asuntos.</p>
      <p><strong>Niveles de autonomía en España:</strong></p>
      <ul>
        <li><strong>Estado:</strong> Tiene soberanía (poder total)</li>
        <li><strong>Comunidades Autónomas:</strong> Tienen autonomía política y administrativa</li>
        <li><strong>Provincias y Municipios:</strong> Tienen autonomía administrativa</li>
      </ul>
      <p><strong>Importante:</strong> La autonomía NO es soberanía. Las CC.AA. pueden tomar decisiones pero dentro de lo que permite la Constitución.</p>
      <p><strong>Características:</strong> Se puede ir ampliando con el tiempo mediante reformas de los estatutos.</p>
    `,
    estudiado: false,
  },

  // ========== PROVINCIAS ==========
  {
    id: 12,
    tema: "provincias",
    titulo: "La Provincia y su Organización",
    contenido: "Qué es una provincia y para qué sirve.",
    detalles: `
      <p><strong>¿Qué es?</strong> Una agrupación de municipios. España tiene 50 provincias.</p>
      <p><strong>Fines:</strong> Garantizar solidaridad entre municipios y asegurar servicios en pueblos pequeños.</p>
      <p><strong>Organización diferente según territorios:</strong></p>
      <table>
        <tr><th>Territorio</th><th>Órgano de gobierno</th></tr>
        <tr><td><strong>Mayoría de provincias</strong></td><td>Diputación Provincial</td></tr>
        <tr><td><strong>Comunidades uniprovinciales</strong></td><td>No tienen diputación (Madrid, Murcia, etc.)</td></tr>
        <tr><td><strong>País Vasco</strong></td><td>Diputaciones Forales</td></tr>
        <tr><td><strong>Canarias</strong></td><td>Cabildos Insulares (cada isla tiene el suyo)</td></tr>
        <tr><td><strong>Baleares</strong></td><td>Consejos Insulares</td></tr>
      </table>
      <p><strong>Dato histórico:</strong> Las provincias las creó Javier de Burgos en 1833.</p>
    `,
    estudiado: false,
  },
  {
    id: 13,
    tema: "provincias",
    titulo: "Órganos de las Diputaciones",
    contenido: "Cómo se organiza una diputación provincial.",
    detalles: `
      <table>
        <tr><th>Órgano</th><th>¿Quién lo forma?</th><th>Funciones Principales</th></tr>
        <tr><td><strong>Pleno</strong></td><td>Presidente + todos los diputados</td><td>Aprueba presupuestos y controla al gobierno</td></tr>
        <tr><td><strong>Presidente</strong></td><td>Elegido entre los diputados</td><td>Dirige la diputación</td></tr>
        <tr><td><strong>Junta de Gobierno</strong></td><td>Presidente + algunos diputados</td><td>Gestiona las competencias del presidente</td></tr>
      </table>
      <p><strong>¿Quiénes son los diputados?</strong> Concejales elegidos de los municipios de la provincia.</p>
      <p><strong>Función importante:</strong> Ayudan a los pueblos pequeños (menos de 20.000 hab) con servicios como basura, agua y alumbrado.</p>
    `,
    estudiado: false,
  },
  {
    id: 14,
    tema: "provincias",
    titulo: "Competencias y Financiación Provincial",
    contenido: "Qué hacen y de dónde sacan dinero las diputaciones.",
    detalles: `
      <p><strong>¿Qué hacen las diputaciones?</strong></p>
      <ul>
        <li>Coordinar servicios entre municipios</li>
        <li>Ayudar a pueblos pequeños</li>
        <li>Prestar servicios que afectan a varios municipios</li>
        <li>Promover desarrollo económico de la provincia</li>
        <li>Gestionar algunos trámites electrónicos</li>
      </ul>
      <p><strong>¿De dónde sacan dinero?</strong></p>
      <ul>
        <li>Impuestos propios</li>
        <li>Participación en impuestos del Estado y CC.AA.</li>
        <li>Subvenciones</li>
        <li>Préstamos</li>
      </ul>
      <p>La mayor parte del dinero viene del Fondo Complementario de Financiación.</p>
    `,
    estudiado: false,
  },

  // ========== MUNICIPIOS ==========
  {
    id: 15,
    tema: "municipios",
    titulo: "El Municipio - Concepto y Organización",
    contenido: "El ayuntamiento: el gobierno más cercano al ciudadano.",
    detalles: `
      <p><strong>¿Qué es un municipio?</strong> El territorio básico donde viven las personas. Cada municipio pertenece a una provincia.</p>
      <p><strong>Padrón Municipal:</strong> Lista donde deben apuntarse todos los que viven en el municipio.</p>
      <p><strong>Órganos del Ayuntamiento:</strong></p>
      <table>
        <tr><th>Órgano</th><th>¿Quién lo forma?</th><th>Funciones Principales</th></tr>
        <tr><td><strong>Alcalde</strong></td><td>Elegido por los concejales</td><td>Dirige el ayuntamiento</td></tr>
        <tr><td><strong>Tenientes de Alcalde</strong></td><td>Nombrados por el Alcalde</td><td>Sustituyen al Alcalde</td></tr>
        <tr><td><strong>Pleno</strong></td><td>Alcalde + Todos los Concejales</td><td>Aprueba ordenanzas y presupuestos</td></tr>
        <tr><td><strong>Junta de Gobierno</strong></td><td>Alcalde + algunos concejales</td><td>Gestiona competencias del Alcalde</td></tr>
      </table>
      <p><strong>Para pueblos muy pequeños:</strong> Existe el Concejo Abierto (Alcalde + Asamblea de vecinos).</p>
    `,
    estudiado: false,
  },
  {
    id: 16,
    tema: "municipios",
    titulo: "Competencias y Financiación Municipal",
    contenido: "Qué hace el ayuntamiento y cómo se paga.",
    detalles: `
      <p><strong>¿Qué hace el ayuntamiento?</strong></p>
      <ul>
        <li>Urbanismo (licencias de obras)</li>
        <li>Agua, alcantarillado, limpieza</li>
        <li>Servicios sociales</li>
        <li>Policía local</li>
        <li>Protección civil</li>
        <li>Promoción cultural y deportiva</li>
      </ul>
      <p><strong>¿Cómo se financia?</strong></p>
      <table>
        <tr><th>Tributo</th><th>¿Qué es?</th></tr>
        <tr><td><strong>Tasa</strong></td><td>Por usar un servicio (ej: entrada piscina municipal)</td></tr>
        <tr><td><strong>Contribución Especial</strong></td><td>Por obras que te benefician (ej: nueva acera)</td></tr>
        <tr><td><strong>Impuesto</strong></td><td>Pago obligatorio (ej: IBI por tener una casa)</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 17,
    tema: "municipios",
    titulo: "Otras Entidades Locales",
    contenido: "Otras formas de organizar el territorio local.",
    detalles: `
      <table>
        <tr><th>Entidad</th><th>¿Qué es?</th></tr>
        <tr><td><strong>Comarcas</strong></td><td>Agrupación de municipios con intereses comunes</td></tr>
        <tr><td><strong>Áreas Metropolitanas</strong></td><td>Ciudad grande + municipios alrededor</td></tr>
        <tr><td><strong>Mancomunidades</strong></td><td>Varios municipios que se juntan para un servicio</td></tr>
        <tr><td><strong>Pedanías/Barrios</strong></td><td>Pueblos o zonas dentro de un municipio</td></tr>
      </table>
      <p><strong>Asociaciones importantes:</strong></p>
      <ul>
        <li><strong>FEMP:</strong> Agrupa a casi todos los ayuntamientos y diputaciones</li>
        <li><strong>Conferencia Sectorial:</strong> Donde Estado, CC.AA. y ayuntamientos se coordinan</li>
      </ul>
      <p><strong>Curiosidad:</strong> Cataluña organiza su territorio en municipios y veguerías (en lugar de provincias).</p>
    `,
    estudiado: false,
  },
  {
    id: 18,
    tema: "autonomias",
    titulo: "Vías de Acceso a la Autonomía",
    contenido:
      "Las dos formas principales de convertirse en comunidad autónoma.",
    detalles: `
      <p><strong>Vía Lenta (Artículo 143):</strong></p>
      <ul>
        <li>Competencias básicas al principio</li>
        <li>5 años para ampliar competencias</li>
        <li>No necesita referéndum</li>
        <li>No exige separación estricta de poderes</li>
      </ul>
      <p><strong>Vía Rápida (Artículo 151):</strong></p>
      <ul>
        <li>Todas las competencias desde el inicio</li>
        <li>Autonomía plena inmediata</li>
        <li>Referéndum obligatorio</li>
        <li>Debe tener separación de poderes</li>
      </ul>
      <p><strong>Casos curiosos:</strong></p>
      <ul>
        <li>Andalucía: única que usó el 151 sin haber tenido estatuto en la República</li>
        <li>Canarias: usó vía lenta pero con competencias ampliadas</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 19,
    tema: "autonomias",
    titulo: "Competencias Exclusivas del Estado",
    contenido: "Cosas que solo decide el gobierno central.",
    detalles: `
      <p><strong>El Estado decide sobre:</strong></p>
      <ul>
        <li>Nacionalidad y extranjería</li>
        <li>Relaciones con otros países</li>
        <li>Ejército y defensa</li>
        <li>Sistema de justicia</li>
        <li>Moneda (el euro)</li>
        <li>Correos y telecomunicaciones básicas</li>
        <li>Leyes laborales y pensiones</li>
        <li>Hacienda general e impuestos importantes</li>
        <li>Comercio con el extranjero</li>
        <li>Puertos y aeropuertos importantes</li>
        <li>Medio ambiente (leyes básicas)</li>
        <li>Funcionarios (normas básicas)</li>
      </ul>
      <p><strong>Regla importante:</strong> Si hay conflicto, la ley estatal prevalece sobre la autonómica.</p>
    `,
    estudiado: false,
  },
  {
    id: 20,
    tema: "autonomias",
    titulo: "Competencias de las CC.AA.",
    contenido: "Qué pueden hacer las comunidades autónomas.",
    detalles: `
      <p><strong>Las comunidades autónomas pueden ocuparse de:</strong></p>
      <ul>
        <li>Organizar su propio gobierno</li>
        <li>Urbanismo y vivienda</li>
        <li>Carreteras y transportes autonómicos</li>
        <li>Puertos y aeropuertos no comerciales</li>
        <li>Agricultura y ganadería</li>
        <li>Pesca en ríos y marisqueo</li>
        <li>Ferias y mercados</li>
        <li>Promover el desarrollo económico</li>
        <li>Museos, bibliotecas y cultura</li>
        <li>Turismo y deporte</li>
        <li>Servicios sociales y sanidad</li>
        <li>Enseñanza en su lengua propia (si la tienen)</li>
      </ul>
      <p><strong>Límite:</strong> Todo dentro de lo que permiten la Constitución y su estatuto.</p>
    `,
    estudiado: false,
  },
  {
    id: 21,
    tema: "municipios",
    titulo: "El Pleno Municipal",
    contenido:
      "La 'asamblea' del ayuntamiento donde se toman las decisiones importantes.",
    detalles: `
      <p><strong>¿Quién forma el Pleno?</strong> El Alcalde + todos los Concejales.</p>
      <p><strong>¿Qué hace el Pleno?</strong></p>
      <table>
        <tr><th>Función</th><th>Ejemplo</th></tr>
        <tr><td><strong>Controlar al gobierno</strong></td><td>Vigilar que el Alcalde cumple lo prometido</td></tr>
        <tr><td><strong>Aprobar normas</strong></td><td>Ordenanzas de tráfico o medio ambiente</td></tr>
        <tr><td><strong>Aprobar presupuesto</strong></td><td>Decidir en qué se gasta el dinero</td></tr>
        <tr><td><strong>Planificación</strong></td><td>Planes urbanísticos</td></tr>
        <tr><td><strong>Nombramientos</strong></td><td>Elegir Tenientes de Alcalde</td></tr>
      </table>
      <p><strong>Se reúne:</strong> Una vez al mes normalmente, y más veces si es necesario.</p>
    `,
    estudiado: false,
  },
  {
    id: 22,
    tema: "municipios",
    titulo: "Elección del Alcalde y Concejales",
    contenido: "Cómo se elige a los gobernantes del municipio.",
    detalles: `
      <p><strong>Elección de Concejales:</strong></p>
      <ul>
        <li>Se vota cada 4 años</li>
        <li>Número de concejales depende de la población</li>
        <li>Sistema proporcional: los partidos obtienen concejales según los votos</li>
      </ul>
      <p><strong>Elección del Alcalde:</strong></p>
      <ul>
        <li>Lo eligen los concejales en la primera sesión</li>
        <li>Normalmente es el que encabeza la lista más votada</li>
        <li>Si no hay acuerdo en 2 meses, se repiten elecciones</li>
      </ul>
      <p><strong>Mecanismos de control:</strong></p>
      <ul>
        <li><strong>Moción de censura:</strong> Los concejales pueden quitar al Alcalde si tienen mayoría</li>
        <li><strong>Cuestión de confianza:</strong> El Alcalde puede preguntar si sigue teniendo apoyo</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 23,
    tema: "municipios",
    titulo: "Régimen de Concejo Abierto",
    contenido: "Gobierno municipal para pueblos muy pequeños.",
    detalles: `
      <p><strong>¿Qué es?</strong> Un sistema donde todos los vecinos participan directamente.</p>
      <p><strong>¿Para qué pueblos?</strong></p>
      <ul>
        <li>Menos de 100 habitantes</li>
        <li>O pueblos que tradicionalmente lo han tenido</li>
      </ul>
      <p><strong>Órganos de gobierno:</strong></p>
      <table>
        <tr><th>Órgano</th><th>¿Quién lo forma?</th><th>Funciones</th></tr>
        <tr><td><strong>Alcalde</strong></td><td>Elegido por todos los vecinos</td><td>Representa al pueblo</td></tr>
        <tr><td><strong>Asamblea Vecinal</strong></td><td>Todos los vecinos con derecho a voto</td><td>Toma las decisiones importantes</td></tr>
      </table>
      <p><strong>La Asamblea decide sobre:</strong></p>
      <ul>
        <li>Ordenanzas municipales</li>
        <li>Presupuesto anual</li>
        <li>Control de la gestión del Alcalde</li>
        <li>Cuentas del ayuntamiento</li>
      </ul>
      <p><strong>Ventaja:</strong> Los vecinos participan directamente en las decisiones.</p>
    `,
    estudiado: false,
  },
  {
    id: 24,
    tema: "municipios",
    titulo: "Servicios Municipales Obligatorios",
    contenido: "Servicios que todo ayuntamiento debe dar a sus ciudadanos.",
    detalles: `
      <p><strong>Servicios que TODOS los municipios deben tener:</strong></p>
      <ul>
        <li>Alumbrado público</li>
        <li>Cementerio</li>
        <li>Recogida de basura</li>
        <li>Limpieza de calles</li>
        <li>Agua potable y alcantarillado</li>
        <li>Pavimentación de calles</li>
      </ul>
      <p><strong>Según la población, además deben tener:</strong></p>
      <table>
        <tr><th>Población</th><th>Servicios adicionales</th></tr>
        <tr><td><strong>+5.000 hab</strong></td><td>Parque público, biblioteca, mercado</td></tr>
        <tr><td><strong>+20.000 hab</strong></td><td>Protección civil, servicios sociales, polideportivo</td></tr>
        <tr><td><strong>+50.000 hab</strong></td><td>Transporte urbano, protección medio ambiente</td></tr>
      </table>
      <p><strong>Base legal:</strong> Ley de Bases de Régimen Local de 1985.</p>
    `,
    estudiado: false,
  },
  {
    id: 25,
    tema: "municipios",
    titulo: "Impuestos Municipales Principales",
    contenido:
      "Los impuestos más importantes que pagan los ciudadanos al ayuntamiento.",
    detalles: `
      <table>
        <tr><th>Impuesto</th><th>Nombre completo</th><th>¿Qué grava?</th></tr>
        <tr><td><strong>IBI</strong></td><td>Impuesto sobre Bienes Inmuebles</td><td>Tener una casa o local</td></tr>
        <tr><td><strong>IAE</strong></td><td>Impuesto sobre Actividades Económicas</td><td>Tener un negocio (empresas pequeñas no pagan)</td></tr>
        <tr><td><strong>IVTM</strong></td><td>Impuesto sobre Vehículos</td><td>Tener un coche o moto</td></tr>
        <tr><td><strong>IIVTNU</strong></td><td>Impuesto sobre el Incremento de Valor</td><td>Ganar dinero vendiendo un terreno</td></tr>
      </table>
      <p><strong>Otros ingresos del ayuntamiento:</strong></p>
      <ul>
        <li><strong>Tasas:</strong> Por usar servicios (piscina, escuela municipal)</li>
        <li><strong>Contribuciones:</strong> Por obras que te benefician</li>
        <li><strong>Participación en impuestos:</strong> Parte del IRPF e IVA</li>
        <li><strong>Subvenciones:</strong> De CC.AA. y Estado</li>
      </ul>
    `,
    estudiado: false,
  },
];
