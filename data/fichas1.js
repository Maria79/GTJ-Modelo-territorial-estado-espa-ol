export const fichas = [
  // ========== MODELOS TERRITORIALES ==========
  {
    id: 1,
    tema: "modelos",
    titulo: "Modelos Territoriales Tradicionales",
    contenido:
      "Formas en que los estados organizan su territorio administrativa, geográfica y políticamente.",
    detalles: `
      <table>
        <tr><th>Modelo</th><th>Características</th></tr>
        <tr><td><strong>Estado Centralista</strong></td><td>Los tres poderes (ejecutivo, legislativo, judicial) están centralizados. Puede permitir ciertas competencias administrativas a entidades locales.</td></tr>
        <tr><td><strong>Estado Regionalizado</strong></td><td>Las regiones tienen cierta autonomía, pero esta es cedida por el Gobierno central.</td></tr>
        <tr><td><strong>Estado Federal</strong></td><td>Existe una jurisdicción federal y otra local, ambas supeditadas a una Constitución federal.</td></tr>
        <tr><td><strong>Estado Confederal</strong></td><td>Las confederaciones poseen mayor soberanía e independencia que en un modelo federal.</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 2,
    tema: "modelos",
    titulo: "El Modelo Territorial Español",
    contenido:
      "La Constitución Española no define un nombre concreto, pero el Tribunal Constitucional lo define como 'Estado de las Autonomías'.",
    detalles: `
      <p><strong>Naturaleza:</strong> Es un híbrido entre un Estado centralizado-regionalizado y un Estado federal.</p>
      <p><strong>Base Legal:</strong></p>
      <ul>
        <li><strong>Artículo 2 CE:</strong> Se fundamenta en la indisoluble unidad de la Nación española y reconoce el derecho a la autonomía.</li>
        <li><strong>Título VIII CE:</strong> Trata directamente la organización territorial.</li>
      </ul>
      <p><strong>Organización Territorial (Art. 137 CE):</strong> El Estado se organiza en municipios, provincias y comunidades autónomas. Todas estas entidades gozan de autonomía para la gestión de sus respectivos intereses.</p>
    `,
    estudiado: false,
  },
  {
    id: 3,
    tema: "modelos",
    titulo: "Principios del Estado de las Autonomías",
    contenido:
      "Principios fundamentales que rigen la organización territorial del Estado español.",
    detalles: `
      <table>
        <tr><th>Principio</th><th>Descripción</th></tr>
        <tr><td><strong>Constitucionalidad</strong></td><td>La organización territorial está tratada en la Constitución. Ninguna norma puede ir contra ella.</td></tr>
        <tr><td><strong>Autonomía</strong></td><td>Los entes territoriales tienen autonomía para gestionar sus intereses.</td></tr>
        <tr><td><strong>Unidad</strong></td><td>La autonomía nunca puede ir en contra de la unidad de la nación española.</td></tr>
        <tr><td><strong>Solidaridad</strong></td><td>Las autonomías deben ser solidarias entre sí.</td></tr>
        <tr><td><strong>Cooperación</strong></td><td>Permite la cooperación y firma de acuerdos entre territorios.</td></tr>
        <tr><td><strong>No Federalidad</strong></td><td>Prohíbe que las comunidades autónomas formen una federación entre ellas (Art. 145 CE).</td></tr>
        <tr><td><strong>Libertad</strong></td><td>Libertad de los territorios para acceder a la autonomía y de los ciudadanos para circular y establecerse.</td></tr>
        <tr><td><strong>Igualdad</strong></td><td>Garantiza que todos los españoles tengan los mismos derechos y obligaciones.</td></tr>
        <tr><td><strong>Diversidad</strong></td><td>Reconoce y protege la existencia de territorios histórica y culturalmente diferentes.</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 4,
    tema: "modelos",
    titulo: "Órganos de Cooperación entre Administraciones",
    contenido:
      "Su función es evitar duplicidades, optimizar recursos y mejorar la coordinación.",
    detalles: `
      <table>
        <tr><th>Órgano</th><th>Composición</th><th>Función Principal</th></tr>
        <tr><td><strong>Conferencia de Presidentes</strong></td><td>Presidente del Gobierno + Presidentes de las 17 CCAA y Ceuta y Melilla</td><td>Máximo órgano de cooperación multilateral Estado-CCAA</td></tr>
        <tr><td><strong>Conferencias Sectoriales</strong></td><td>Titular del ministerio + Consejeros autonómicos de la misma materia</td><td>Cooperación multilateral en un sector concreto</td></tr>
        <tr><td><strong>Comisiones Bilaterales</strong></td><td>Miembros del Gobierno central y de un Gobierno autonómico</td><td>Diálogo bilateral Estado-una Comunidad Autónoma</td></tr>
        <tr><td><strong>Comisiones Territoriales de Coordinación</strong></td><td>Representantes de administraciones con territorios colindantes</td><td>Coordinar prestaciones de servicios para evitar duplicidades</td></tr>
      </table>
      <p><strong>Normativa de Referencia:</strong> Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público.</p>
    `,
    estudiado: false,
  },

  // ========== COMUNIDADES AUTÓNOMAS ==========
  {
    id: 5,
    tema: "autonomias",
    titulo: "El Proceso Autonómico",
    contenido:
      "Procedimiento mediante el cual un territorio accede a constituirse como Comunidad Autónoma.",
    detalles: `
      <p><strong>Base Legal:</strong> Artículos 143, 144, 151 y Disposiciones Transitorias de la CE.</p>
      <p><strong>¿Quién puede acceder? (Art. 143 CE):</strong></p>
      <ul>
        <li>Provincias limítrofes con características históricas, culturales y económicas comunes</li>
        <li>Territorios insulares</li>
        <li>Provincias con entidad regional histórica</li>
      </ul>
      <p><strong>Vías de Acceso:</strong></p>
      <table>
        <tr><th>Criterio</th><th>Tipo</th><th>Artículo / Vía</th></tr>
        <tr><td rowspan="2">Por duración</td><td>Vía Lenta</td><td>Artículo 143</td></tr>
        <tr><td>Vía Rápida</td><td>Artículo 151</td></tr>
        <tr><td rowspan="3">Por articulado</td><td>Ordinario</td><td>Art. 143 (lento) / Art. 151 (rápido)</td></tr>
        <tr><td>Especial</td><td>Disposiciones Adicionales y Transitorias</td></tr>
        <tr><td>Excepcional</td><td>Artículo 144</td></tr>
      </table>
      <p><strong>Casos excepcionales (Art. 144):</strong></p>
      <ul>
        <li>Madrid como comunidad uniprovincial</li>
        <li>Ceuta y Melilla como Ciudades Autónomas</li>
        <li>Integración de Almendá en Andalucía</li>
        <li>Incorporación de Segovia a Castilla y León</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 6,
    tema: "autonomias",
    titulo: "El Estatuto de Autonomía",
    contenido:
      "Es la norma institucional básica de cada Comunidad Autónoma. Es la 'constitución' de la comunidad.",
    detalles: `
      <p><strong>Carácter Jurídico:</strong> Forma parte del ordenamiento jurídico estatal y debe ser aprobado por las Cortes Generales mediante una Ley Orgánica.</p>
      <p><strong>Contenido Mínimo (según la CE):</strong></p>
      <ul>
        <li>La denominación de la comunidad</li>
        <li>La delimitación de su territorio</li>
        <li>La denominación, organización y sede de las instituciones autónomas propias</li>
        <li>Las competencias asumidas dentro del marco de la Constitución</li>
      </ul>
      <p><strong>Importante:</strong> El acceso y la ampliación de competencias es voluntario. Cualquier ampliación posterior también requiere Ley Orgánica.</p>
      <p><strong>Antecedentes Históricos (Segunda República):</strong> Se aprobaron los estatutos de Cataluña (1932), País Vasco (1936) y Galicia (1936).</p>
    `,
    estudiado: false,
  },
  {
    id: 7,
    tema: "autonomias",
    titulo: "Las Competencias de las CC.AA.",
    contenido:
      "Las competencias son el ámbito de atribuciones que corresponden a una entidad pública.",
    detalles: `
      <p><strong>Clasificación de las Competencias:</strong></p>
      <ol>
        <li><strong>Competencias en materias exclusivas de las CC.AA. (Art. 148 CE):</strong> Son las competencias básicas y de aceptación voluntaria.</li>
        <li><strong>Competencias en materias exclusivas del Estado (Art. 149.1 CE):</strong> Lista extensa de materias reservadas al Estado.</li>
        <li><strong>Competencias no exclusivas del Estado (Art. 149.3 CE):</strong> Permite a las CC.AA. asumir materias no reservadas en exclusiva al Estado.</li>
        <li><strong>Competencias transferidas (Art. 150 CE):</strong> El Estado puede transferir competencias a las CC.AA. mediante Ley Orgánica.</li>
      </ol>
      <p><strong>Principios para Resolver Conflictos:</strong></p>
      <ul>
        <li><strong>Cláusula Residual:</strong> Las competencias no asumidas por las CC.AA. las asume el Estado.</li>
        <li><strong>Prevalencia o Supremacía:</strong> La norma estatal prevalece sobre la autonómica.</li>
        <li><strong>Supletoriedad del Derecho:</strong> Si no hay norma autonómica, se aplica la legislación estatal.</li>
      </ul>
      <p><strong>Límites a la Autonomía:</strong></p>
      <ul>
        <li>Principio de unidad e interés general</li>
        <li>Solidaridad y lealtad</li>
        <li>Igualdad de derechos y obligaciones</li>
        <li>El territorio (su ámbito de validez)</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 8,
    tema: "autonomias",
    titulo: "Órganos de Gobierno de las CC.AA.",
    contenido:
      "La organización institucional debe basarse en el principio de separación de poderes (Art. 152 CE).",
    detalles: `
      <table>
        <tr><th>Órgano</th><th>Función Principal</th><th>Características</th></tr>
        <tr><td><strong>Asamblea Legislativa</strong></td><td>Potestad legislativa, aprobación de presupuestos, control del gobierno</td><td>Unicameral. Elección por sufragio universal. Circunscripción normalmente provincial.</td></tr>
        <tr><td><strong>Consejo de Gobierno</strong></td><td>Competencias ejecutivas y administrativas</td><td>Lo preside el Presidente (elegido por la asamblea y nombrado por el Rey). Compuesto por vicepresidente(s) y consejeros.</td></tr>
        <tr><td><strong>Tribunal Superior de Justicia</strong></td><td>Culmina la organización judicial en el territorio de la CC.AA.</td><td>El Poder Judicial es único en todo el Estado. Las CC.AA. colaboran en la provisión de medios.</td></tr>
      </table>
      <p><strong>La Administración Autonómica:</strong></p>
      <ul>
        <li>Se estructura en <strong>Consejerías o Departamentos</strong> (equivalentes a los ministerios estatales)</li>
        <li>En comunidades pluriprovinciales, existe una <strong>Administración Periférica</strong> (delegaciones en las provincias)</li>
      </ul>
      <p><strong>Ejemplos de denominaciones:</strong></p>
      <ul>
        <li>Andalucía: Parlamento y Junta de Andalucía</li>
        <li>Cataluña: Parlament y Generalitat</li>
        <li>País Vasco: Parlamento Vasco y Gobierno Vasco</li>
        <li>Galicia: Parlamento y Xunta de Galicia</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 9,
    tema: "autonomias",
    titulo: "La Financiación de las CC.AA.",
    contenido:
      "Base Legal: Artículos 156, 157 y 158 de la CE y la Ley Orgánica de Financiación de las CC.AA. (LOFCA).",
    detalles: `
      <p><strong>Principios Rectores:</strong></p>
      <ul>
        <li>Coordinación con la Hacienda estatal</li>
        <li>Solidaridad entre territorios</li>
      </ul>
      <p><strong>Modelos de Financiación:</strong></p>
      <table>
        <tr><th>Modelo</th><th>Características</th><th>CC.AA. que lo aplican</th></tr>
        <tr><td><strong>Régimen Común</strong></td><td>Gestión de ingresos limitados por el Estado. Regulado por la LOFCA.</td><td>Todas, excepto País Vasco y Navarra</td></tr>
        <tr><td><strong>Régimen Foral (Concierto Económico)</strong></td><td>Mayor autonomía para gestionar sus ingresos. Realizan aportación al Estado ("cupo").</td><td>País Vasco y Navarra</td></tr>
      </table>
      <p><strong>Recursos de las CC.AA.:</strong></p>
      <ul>
        <li>Ingresos de su patrimonio</li>
        <li>Tributos propios</li>
        <li>Tributos cedidos por el Estado (IRPF, IVA, Impuestos Especiales, etc.)</li>
        <li>Participación en fondos estatales (Fondo de Garantía de Servicios Públicos Fundamentales)</li>
        <li>Recargos sobre tributos estatales</li>
        <li>Operaciones de crédito</li>
      </ul>
      <p><strong>Fondos Europeos disponibles:</strong></p>
      <ul>
        <li>FEDER (Fondo Europeo de Desarrollo Regional)</li>
        <li>Fondo de Cohesión</li>
        <li>FSE (Fondo Social Europeo)</li>
        <li>Fondo de Solidaridad de la UE</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 10,
    tema: "autonomias",
    titulo: "Control sobre las CC.AA.",
    contenido:
      "Sistemas para verificar que las actuaciones autonómicas respetan la legalidad y la Constitución.",
    detalles: `
      <table>
        <tr><th>Mecanismo de Control</th><th>Órgano que lo ejerce</th><th>Función</th></tr>
        <tr><td><strong>Control de Constitucionalidad</strong></td><td>Tribunal Constitucional</td><td>Verifica la constitucionalidad del estatuto y las leyes autonómicas</td></tr>
        <tr><td><strong>Control Contencioso-Administrativo</strong></td><td>Jurisdicción Contencioso-Administrativa</td><td>Controla la actividad y normas reglamentarias de la Administración autonómica</td></tr>
        <tr><td><strong>Control Económico y Presupuestario</strong></td><td>Tribunal de Cuentas</td><td>Controla la actividad económica, contable y presupuestaria</td></tr>
        <tr><td><strong>Control del Gobierno Central</strong></td><td>Gobierno (y Delegados del Gobierno)</td><td>Controla las competencias delegadas</td></tr>
        <tr><td><strong>Control Parlamentario</strong></td><td>Cortes Generales</td><td>Controla las competencias transferidas y acuerdos de cooperación</td></tr>
        <tr><td><strong>Control Interno</strong></td><td>Propios de la CC.AA.</td><td>Mecanismos de autovigilancia previstos en los estatutos</td></tr>
        <tr><td><strong>Control Extraordinario (Art. 155 CE)</strong></td><td>Gobierno / Senado</td><td>Para adoptar medidas ante funcionamiento anormal</td></tr>
      </table>
      <p><strong>Órganos de Control Externo (OCEx):</strong> Existen 12 órganos autonómicos de control, como la Cámara de Cuentas de Andalucía, Sindicatura de Comptes de Catalunya, etc.</p>
    `,
    estudiado: false,
  },
  {
    id: 11,
    tema: "autonomias",
    titulo: "El Concepto de Autonomía",
    contenido:
      "La autonomía implica la capacidad de gestión de sus propios intereses (Art. 137 CE).",
    detalles: `
      <p><strong>Niveles de Autonomía:</strong></p>
      <ul>
        <li><strong>Estado:</strong> Titular de la soberanía</li>
        <li><strong>Comunidades Autónomas:</strong> Autonomía política, normativa, administrativa y financiera</li>
        <li><strong>Provincias y Municipios:</strong> Autonomía administrativa en diferentes materias</li>
      </ul>
      <p><strong>Definición RAE de Autonomía:</strong></p>
      <ol>
        <li>Facultad de regirse mediante normas y órganos de gobierno propios</li>
        <li>Condición de quien, para ciertas cosas, no depende de nadie</li>
        <li>En España, comunidad autónoma</li>
      </ol>
      <p><strong>Características:</strong></p>
      <ul>
        <li>La autonomía no es soberanía</li>
        <li>Se ejerce dentro del marco constitucional</li>
        <li>Es graduable según el nivel territorial</li>
        <li>Puede ampliarse con el tiempo mediante reformas estatutarias</li>
      </ul>
    `,
    estudiado: false,
  },

  // ========== PROVINCIAS ==========
  {
    id: 12,
    tema: "provincias",
    titulo: "La Provincia y su Organización",
    contenido:
      "La provincia es una entidad territorial local con personalidad jurídica propia, compuesta por una agrupación de municipios.",
    detalles: `
      <p><strong>Fines:</strong></p>
      <ul>
        <li>Garantizar los principios de solidaridad y equilibrio intermunicipal</li>
        <li>Asegurar la prestación integral de los servicios de competencia municipal</li>
      </ul>
      <p><strong>Organización Provincial:</strong></p>
      <table>
        <tr><th>Régimen</th><th>¿Qué es?</th><th>Ejemplos</th></tr>
        <tr><td><strong>Ordinario</strong></td><td>Diputaciones Provinciales</td><td>Aplica a la mayoría de las provincias</td></tr>
        <tr><td><strong>Comunidades Autónomas Uniprovinciales</strong></td><td>No existen diputaciones</td><td>Madrid, Murcia, Asturias, La Rioja, Cantabria, Navarra</td></tr>
        <tr><td><strong>Ciudades Autónomas</strong></td><td>No existen diputaciones</td><td>Ceuta, Melilla</td></tr>
        <tr><td><strong>País Vasco</strong></td><td>Órganos forales provinciales (Diputaciones Forales)</td><td>Álava, Guipúzcoa, Vizcaya</td></tr>
        <tr><td><strong>Canarias</strong></td><td>Cabildos Insulares</td><td>Cada isla tiene su cabildo</td></tr>
        <tr><td><strong>Islas Baleares</strong></td><td>Consejos Insulares</td><td>Cada isla tiene su consejo</td></tr>
      </table>
      <p><strong>Base Legal:</strong> Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local.</p>
      <p><strong>Dato:</strong> España tiene 50 provincias, resultado de la división de Javier de Burgos en 1833.</p>
    `,
    estudiado: false,
  },
  {
    id: 13,
    tema: "provincias",
    titulo: "Órganos de las Diputaciones (Régimen Ordinario)",
    contenido:
      "Estructura organizativa de las diputaciones provinciales en el régimen ordinario.",
    detalles: `
      <table>
        <tr><th>Órgano</th><th>Composición</th><th>Funciones Principales</th></tr>
        <tr><td><strong>Pleno</strong></td><td>Presidente y los diputados</td><td>Organización de la diputación, aprobación de ordenanzas y presupuestos, control de órganos de gobierno</td></tr>
        <tr><td><strong>Presidente</strong></td><td>Elegido de entre los diputados</td><td>Dirigir el gobierno y la administración, máximo representante</td></tr>
        <tr><td><strong>Junta de Gobierno</strong></td><td>Presidente + diputados (no superior a 1/3 del total)</td><td>Asistir al presidente, gestionar competencias delegadas</td></tr>
        <tr><td><strong>Órganos Voluntarios</strong></td><td>(Comisiones, etc.)</td><td>Estudio, informe o consulta de asuntos, seguimiento de la gestión</td></tr>
      </table>
      <p><strong>Elección de los Diputados:</strong> Son elegidos de entre los concejales electos de los municipios de la provincia según la Ley Orgánica del Régimen Electoral General.</p>
      <p><strong>Servicios en municipios pequeños (&lt; 20.000 hab):</strong> La diputación coordina servicios como recogida de residuos, abastecimiento de agua, limpieza viaria, alumbrado público, etc.</p>
    `,
    estudiado: false,
  },
  {
    id: 14,
    tema: "provincias",
    titulo: "Competencias y Financiación Provincial",
    contenido:
      "Ámbito de actuación y recursos económicos de las diputaciones provinciales.",
    detalles: `
      <p><strong>A) Competencias de las Diputaciones:</strong></p>
      <ol>
        <li><strong>Competencias Propias (Art. 36 LRBRL):</strong>
          <ul>
            <li>Coordinación de los servicios de los municipios</li>
            <li>Asistencia a municipios pequeños</li>
            <li>Prestación de servicios supramunicipales</li>
            <li>Fomento del desarrollo económico y social provincial</li>
            <li>Ayuda en la gestión de la recaudación tributaria</li>
            <li>Prestación de servicios de administración electrónica</li>
          </ul>
        </li>
        <li><strong>Competencias Delegadas:</strong> Pueden ser delegadas por el Estado o por las CC.AA.</li>
      </ol>
      <p><strong>B) Financiación (Ley Reguladora de Haciendas Locales):</strong></p>
      <ul>
        <li>Ingresos de su patrimonio</li>
        <li>Tributos propios y recargos</li>
        <li>Participaciones en tributos del Estado y CC.AA.</li>
        <li>Subvenciones</li>
        <li>Precios públicos</li>
        <li>Operaciones de crédito</li>
        <li>Multas y sanciones</li>
      </ul>
      <p><strong>Dato:</strong> La financiación básica proviene principalmente del Fondo Complementario de Financiación.</p>
    `,
    estudiado: false,
  },

  // ========== MUNICIPIOS ==========
  {
    id: 15,
    tema: "municipios",
    titulo: "El Municipio - Concepto y Organización",
    contenido:
      "El municipio es la entidad territorial básica, con personalidad jurídica y capacidad para cumplir sus fines.",
    detalles: `
      <p><strong>Términos Clave:</strong></p>
      <ul>
        <li><strong>Término Municipal:</strong> Territorio donde el ayuntamiento ejerce sus competencias. Cada municipio pertenece a una única provincia.</li>
        <li><strong>Población / Vecino:</strong> Personas inscritas en el Padrón Municipal. Toda persona que viva en España debe inscribirse en el padrón de su municipio de residencia habitual.</li>
      </ul>
      <p><strong>Órgano de Gobierno:</strong> El Ayuntamiento, compuesto por el Alcalde y los Concejales.</p>
      <p><strong>Organización Municipal (Órganos Obligatorios):</strong></p>
      <table>
        <tr><th>Órgano</th><th>Composición</th><th>Funciones Principales</th></tr>
        <tr><td><strong>Alcalde</strong></td><td>Elegido por los concejales</td><td>Presidente de la corporación, dirige el gobierno y administración</td></tr>
        <tr><td><strong>Tenientes de Alcalde</strong></td><td>Nombrados por el Alcalde</td><td>Sustituyen al Alcalde, asumen atribuciones delegadas</td></tr>
        <tr><td><strong>Pleno</strong></td><td>Alcalde + Todos los Concejales</td><td>Control y fiscalización, aprobación de ordenanzas y presupuestos</td></tr>
        <tr><td><strong>Junta de Gobierno Local</strong></td><td>Alcalde + Concejales (no más de 1/3)</td><td>Asistir al Alcalde, gestionar competencias delegadas</td></tr>
        <tr><td><strong>Comisión Especial de Cuentas</strong></td><td></td><td>Examinar, estudiar e informar las cuentas municipales</td></tr>
        <tr><td><strong>Comisión Especial de Sugerencias</strong></td><td></td><td>Defender los derechos de los vecinos frente a la actividad municipal</td></tr>
      </table>
      <p><strong>Régimen Especial:</strong> El Concejo Abierto (para municipios pequeños): Gobierno a cargo de un Alcalde y una Asamblea Vecinal.</p>
    `,
    estudiado: false,
  },
  {
    id: 16,
    tema: "municipios",
    titulo: "Competencias y Financiación Municipal",
    contenido:
      "Ámbito de actuación y recursos económicos de los ayuntamientos.",
    detalles: `
      <p><strong>A) Competencias Municipales (Art. 25 LRBRL):</strong></p>
      <ul>
        <li><strong>Función Básica:</strong> Satisfacer las necesidades de los ciudadanos</li>
        <li><strong>Competencias Propias:</strong> Urbanismo, abastecimiento de agua, servicios sociales, policía local, protección civil, extinción de incendios, promoción turística, deportiva y cultural, etc.</li>
        <li><strong>Competencias Delegadas:</strong> Pueden ser delegadas por el Estado o las CC.AA., siempre con una memoria económica.</li>
      </ul>
      <p><strong>B) Financiación: Tributos Municipales:</strong></p>
      <table>
        <tr><th>Tributo</th><th>Descripción</th><th>Ejemplos</th></tr>
        <tr><td><strong>Tasa</strong></td><td>Se exige por la utilización de un servicio público. Hay contraprestación directa.</td><td>Tasas académicas de un centro municipal</td></tr>
        <tr><td><strong>Contribución Especial</strong></td><td>Se exige por un beneficio debido a una obra pública.</td><td>Contribución por aumento de valor de un terreno</td></tr>
        <tr><td><strong>Impuesto</strong></td><td>Tributo exigido sin contraprestación.</td><td>IBI, IAE, IVTM, Impuesto sobre construcciones, etc.</td></tr>
      </table>
    `,
    estudiado: false,
  },
  {
    id: 17,
    tema: "municipios",
    titulo: "Otras Entidades Locales",
    contenido:
      "Agrupaciones de municipios o divisiones dentro de ellos para una gestión más eficiente.",
    detalles: `
      <table>
        <tr><th>Entidad</th><th>Descripción</th><th>Regulación</th></tr>
        <tr><td><strong>Comarcas</strong></td><td>Agrupación de municipios con intereses comunes en la prestación de servicios</td><td>Creadas por las CC.AA.</td></tr>
        <tr><td><strong>Áreas Metropolitanas</strong></td><td>Agrupación de municipios limítrofes de grandes aglomeraciones urbanas</td><td>Creadas por las CC.AA.</td></tr>
        <tr><td><strong>Mancomunidades</strong></td><td>Asociación de municipios para la ejecución de obras o prestación de servicios comunes</td><td>En sus estatutos se refleja el ámbito territorial</td></tr>
        <tr><td><strong>Entidades Inframunicipales</strong></td><td>Núcleos de población separados del casco urbano (pedanías, aldeas, barrios...)</td><td>Reguladas por las leyes autonómicas</td></tr>
      </table>
      <p><strong>Órganos de Cooperación:</strong></p>
      <ul>
        <li><strong>Comisión Nacional de Administración Local:</strong> Informa sobre normativa estatal que afecta a entidades locales</li>
        <li><strong>Conferencia Sectorial de la Administración Local:</strong> Reúne al Estado, CC.AA. y entidades locales</li>
      </ul>
      <p><strong>Asociaciones:</strong></p>
      <ul>
        <li><strong>FEMP (Federación Española de Municipios y Provincias):</strong> Agrupa a más de 7200 entidades</li>
        <li><strong>Federaciones Autonómicas:</strong> Existen federaciones de municipios en el ámbito regional</li>
      </ul>
      <p><strong>Dato sobre Cataluña:</strong> Su Estatuto organiza el territorio en municipios y veguerías (sustituyen a las provincias).</p>
    `,
    estudiado: false,
  },
  {
    id: 18,
    tema: "autonomias",
    titulo: "Vías de Acceso a la Autonomía: Artículo 143 vs 151 CE",
    contenido:
      "Diferencias principales entre la vía lenta (art. 143) y rápida (art. 151) para constituirse como Comunidad Autónoma.",
    detalles: `
      <table>
        <tr><th>Característica</th><th>Vía Lenta (Art. 143)</th><th>Vía Rápida (Art. 151)</th></tr>
        <tr><td><strong>Iniciativa</strong></td><td>Diputaciones o órganos interinsulares + 2/3 municipios</td><td>3/4 municipios + mayoría del censo electoral</td></tr>
        <tr><td><strong>Competencias Iniciales</strong></td><td>Solo las del Art. 148</td><td>Todas las competencias desde el inicio</td></tr>
        <tr><td><strong>Órganos de Gobierno</strong></td><td>No exige separación de poderes</td><td>Exige separación de poderes (Art. 152)</td></tr>
        <tr><td><strong>Plazo de Autonomía</strong></td><td>5 años para ampliar competencias</td><td>Autonomía plena desde el inicio</td></tr>
        <tr><td><strong>Referéndum</strong></td><td>No obligatorio</td><td>Obligatorio para ratificación</td></tr>
      </table>
      <p><strong>Casos Históricos:</strong></p>
      <ul>
        <li><strong>Andalucía:</strong> Única comunidad que accedió por Art. 151 sin haber tenido estatuto durante la República</li>
        <li><strong>Canarias:</strong> Accedió por vía lenta pero con competencias ampliadas mediante Ley Orgánica</li>
      </ul>
    `,
    estudiado: false,
  },
  {
    id: 19,
    tema: "autonomias",
    titulo: "Competencias Exclusivas del Estado (Art. 149.1 CE)",
    contenido:
      "Lista de materias reservadas exclusivamente al Estado que no pueden ser asumidas por las CC.AA.",
    detalles: `
      <p><strong>Competencias Estatales Exclusivas:</strong></p>
      <ul>
        <li>Nacionalidad, inmigración y extranjería</li>
        <li>Relaciones internacionales</li>
        <li>Defensa y Fuerzas Armadas</li>
        <li>Administración de Justicia (excepto competencias autonómicas en organización)</li>
        <li>Sistema monetario</li>
        <li>Servicios básicos de correos y telecomunicaciones</li>
        <li>Legislación laboral y de Seguridad Social</li>
        <li>Hacienda general y Deuda del Estado</li>
        <li>Comercio exterior</li>
        <li>Infraestructuras de interés general (puertos, aeropuertos)</li>
        <li>Legislación básica sobre medio ambiente</li>
        <li>Estatuto básico de los funcionarios</li>
      </ul>
      <p><strong>Principio de Prevalencia:</strong> En caso de conflicto, la normativa estatal prevalece sobre la autonómica.</p>
    `,
    estudiado: false,
  },
  {
    id: 20,
    tema: "autonomias",
    titulo: "Competencias de las CC.AA. (Art. 148 CE)",
    contenido:
      "Materias que las Comunidades Autónomas pueden asumir en sus estatutos de autonomía.",
    detalles: `
      <p><strong>Competencias que pueden asumir las CC.AA.:</strong></p>
      <ul>
        <li>Organización de sus instituciones de autogobierno</li>
        <li>Ordenación del territorio, urbanismo y vivienda</li>
        <li>Obras públicas de interés para la Comunidad</li>
        <li>Ferrocarriles, carreteras y transportes</li>
        <li>Puertos y aeropuertos no comerciales</li>
        <li>Agricultura, ganadería y aprovechamientos forestales</li>
        <li>Proyectos y construcción de obras hidráulicas</li>
        <li>Pesca en aguas interiores y marisqueo</li>
        <li>Ferias interiores y mercados</li>
        <li>Promoción del desarrollo económico</li>
        <li>Artesanía, cultura, museos y bibliotecas</li>
        <li>Turismo, deporte y ocio</li>
        <li>Asistencia social y sanidad</li>
        <li>Enseñanza en su lengua propia (donde la haya)</li>
      </ul>
      <p><strong>Límite:</strong> Estas competencias se ejercen en los términos establecidos en los estatutos y dentro del marco constitucional.</p>
    `,
    estudiado: false,
  },

  // ========== MUNICIPIOS (AMPLIACIÓN) ==========
  {
    id: 21,
    tema: "municipios",
    titulo: "El Pleno Municipal: Composición y Funciones",
    contenido:
      "Órgano máximo de gobierno municipal, compuesto por todos los concejales electos.",
    detalles: `
      <p><strong>Composición del Pleno:</strong></p>
      <ul>
        <li>Alcalde (presidente del Pleno)</li>
        <li>Todos los Concejales (número según población del municipio)</li>
      </ul>
      <p><strong>Funciones Principales:</strong></p>
      <table>
        <tr><th>Función</th><th>Descripción</th></tr>
        <tr><td><strong>Control y Fiscalización</strong></td><td>Controla y supervisa a los órganos de gobierno</td></tr>
        <tr><td><strong>Aprobación Normativa</strong></td><td>Aprueba ordenanzas, reglamentos y bandos</td></tr>
        <tr><td><strong>Presupuestaria</strong></td><td>Aprueba y modifica el presupuesto municipal</td></tr>
        <tr><td><strong>Planificación</strong></td><td>Aprueba planes urbanísticos y de ordenación</td></tr>
        <tr><td><strong>Designaciones</strong></td><td>Nombra y separa a los Tenientes de Alcalde</td></tr>
        <tr><td><strong>Control de Gestión</strong></td><td>Aprueba la gestión del Alcalde y la Junta de Gobierno</td></tr>
      </table>
      <p><strong>Sesiones:</strong> Se reúne en sesión ordinaria una vez al mes y en sesión extraordinaria cuando sea convocado.</p>
    `,
    estudiado: false,
  },
  {
    id: 22,
    tema: "municipios",
    titulo: "Elección del Alcalde y Concejales",
    contenido:
      "Procedimiento electoral para la constitución de los órganos de gobierno municipal.",
    detalles: `
      <p><strong>Elección de Concejales:</strong></p>
      <ul>
        <li>Se eligen por sufragio universal cada 4 años</li>
        <li>Número de concejales según población (de 5 a 31 concejales)</li>
        <li>Sistema electoral proporcional (método D'Hondt)</li>
      </ul>
      <p><strong>Elección del Alcalde:</strong></p>
      <ul>
        <li>Es elegido por el Pleno Municipal en la sesión constitutiva</li>
        <li>Puede ser elegido:
          <ul>
            <li>Entre los concejales que encabezan las listas electorales</li>
            <li>Por mayoría absoluta en primera votación</li>
            <li>Por mayoría simple en segunda votación</li>
          </ul>
        </li>
        <li>Si no se elige en dos meses, se disuelve el Pleno y se convocan nuevas elecciones</li>
      </ul>
      <p><strong>Moción de Censura:</strong> Requiere mayoría absoluta del Pleno y candidato alternativo.</p>
      <p><strong>Cuestión de Confianza:</strong> El Alcalde puede plantearla vinculada a la aprobación de asuntos importantes.</p>
    `,
    estudiado: false,
  },
  {
    id: 23,
    tema: "municipios",
    titulo: "Régimen de Concejo Abierto",
    contenido:
      "Sistema de organización municipal especial para municipios con poca población.",
    detalles: `
      <p><strong>Características:</strong></p>
      <ul>
        <li>Sistema de gobierno directo para municipios pequeños</li>
        <li>Aplicable a municipios de menos de 100 habitantes</li>
        <li>También puede aplicarse a municipios tradicionalmente con este sistema</li>
      </ul>
      <p><strong>Órganos de Gobierno:</strong></p>
      <table>
        <tr><th>Órgano</th><th>Composición</th><th>Funciones</th></tr>
        <tr><td><strong>Alcalde</strong></td><td>Elegido por los vecinos</td><td>Representación municipal, dirección administrativa</td></tr>
        <tr><td><strong>Asamblea Vecinal</strong></td><td>Todos los vecinos electores</td><td>Máximo órgano de decisión, funciones del Pleno</td></tr>
      </table>
      <p><strong>Competencias de la Asamblea Vecinal:</strong></p>
      <ul>
        <li>Aprobación de ordenanzas y bandos</li>
        <li>Aprobación del presupuesto</li>
        <li>Control de la gestión del Alcalde</li>
        <li>Aprobación de la gestión económica</li>
      </ul>
      <p><strong>Ventajas:</strong> Mayor participación ciudadana y gestión más cercana.</p>
    `,
    estudiado: false,
  },
  {
    id: 24,
    tema: "municipios",
    titulo: "Servicios Municipales Obligatorios",
    contenido:
      "Servicios que los municipios deben prestar obligatoriamente según su población.",
    detalles: `
      <p><strong>Servicios Obligatorios por Población:</strong></p>
      <table>
        <tr><th>Población</th><th>Servicios Obligatorios</th></tr>
        <tr><td><strong>Todos los municipios</strong></td><td>Alumbrado público, cementerio, recogida de residuos, limpieza viaria, abastecimiento de agua, alcantarillado, acceso a núcleos, pavimentación</td></tr>
        <tr><td><strong>+5.000 habitantes</strong></td><td>Parque público, biblioteca, mercado, tratamiento de residuos</td></tr>
        <tr><td><strong>+20.000 habitantes</strong></td><td>Protección civil, evaluación de información ambiental, servicios sociales, prevención de incendios, instalaciones deportivas</td></tr>
        <tr><td><strong>+50.000 habitantes</strong></td><td>Transporte colectivo urbano, protección del medio ambiente</td></tr>
      </table>
      <p><strong>Base Legal:</strong> Artículo 26 de la Ley 7/1985, de 2 de abril, Reguladora de las Bases de Régimen Local.</p>
      <p><strong>Financiación:</strong> Los municipios pueden establecer tasas por la prestación de estos servicios.</p>
    `,
    estudiado: false,
  },
  {
    id: 25,
    tema: "municipios",
    titulo: "Impuestos Municipales Principales",
    contenido:
      "Principales tributos que gestionan los ayuntamientos para financiar sus servicios.",
    detalles: `
      <table>
        <tr><th>Impuesto</th><th>Nombre Completo</th><th>Características</th></tr>
        <tr><td><strong>IBI</strong></td><td>Impuesto sobre Bienes Inmuebles</td><td>Grava la propiedad de bienes inmuebles. Tipo máximo del 1,1% sobre el valor catastral</td></tr>
        <tr><td><strong>IAE</strong></td><td>Impuesto sobre Actividades Económicas</td><td>Grava el ejercicio de actividades empresariales. Exentas empresas con facturación &lt; 1 millón €</td></tr>
        <tr><td><strong>IVTM</strong></td><td>Impuesto sobre Vehículos de Tracción Mecánica</td><td>Grava la titularidad de vehículos. Se paga anualmente</td></tr>
        <tr><td><strong>IIVTNU</strong></td><td>Impuesto sobre el Incremento de Valor de los Terrenos</td><td>Grava el aumento de valor de terrenos en transmisiones</td></tr>
      </table>
      <p><strong>Otros Ingresos Municipales:</strong></p>
      <ul>
        <li><strong>Tasas:</strong> Por utilización de servicios públicos (mercados, piscinas, escuelas)</li>
        <li><strong>Contribuciones Especiales:</strong> Por obras públicas que benefician directamente</li>
        <li><strong>Participación en Tributos Estatales:</strong> Parte del IRPF e IVA recaudado</li>
        <li><strong>Subvenciones:</strong> De CC.AA. y Estado para servicios específicos</li>
      </ul>
    `,
    estudiado: false,
  },
];
