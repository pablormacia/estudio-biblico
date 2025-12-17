export type TimelineEvent = {
  id: string;
  title: string;

  // años astronómicos: a.C. negativos, d.C. positivos
  start: number;
  end?: number;

  level: 1 | 2 | 3;

  description?: string;

  parentId?: string;

  books: {
    book: string;       // id del libro (coincide con tus JSON)
    chapters?: string;  // opcional
  }[];
};

export const timelineEvents: TimelineEvent[] = [

  // ───────── CREACIÓN Y PRIMEROS TIEMPOS
  {
    id: "creation",
    title: "Creación",
    start: -4000,
    level: 1,
    description: "Creación del mundo según el relato bíblico",
    books: [{ book: "genesis", chapters: "1–2" }]
  },

  {
    id: "fall",
    title: "Caída del hombre",
    start: -4000,
    level: 1,
    books: [{ book: "genesis", chapters: "3" }]
  },

  {
    id: "flood",
    title: "Diluvio",
    start: -2500,
    end: -2300,
    level: 1,
    books: [{ book: "genesis", chapters: "6–9" }]
  },

  {
    id: "babel",
    title: "Torre de Babel",
    start: -2200,
    level: 1,
    books: [{ book: "genesis", chapters: "11" }]
  },

  // ───────── PATRIARCAS
  {
    id: "abraham",
    title: "Llamado de Abraham",
    start: -2000,
    level: 1,
    books: [{ book: "genesis", chapters: "12–25" }]
  },

  {
    id: "isaac-jacob",
    title: "Isaac y Jacob",
    start: -1900,
    end: -1700,
    level: 1,
    books: [{ book: "genesis", chapters: "26–36" }]
  },

  {
    id: "joseph",
    title: "José en Egipto",
    start: -1700,
    level: 1,
    books: [{ book: "genesis", chapters: "37–50" }]
  },

  // ───────── ÉXODO E ISRAEL


  // NIVEL 1
{
  id: "exodus",
  title: "Éxodo de Egipto",
  start: -1300,
  level: 1,
  books: [{ book: "exodo", chapters: "1–15" }]
},


{
  id: "wilderness-40-years",
  title: "40 años en el desierto",
  start: -1300,
  end: -1260,
  level: 1,
  books: [
    { book: "exodo" },
    { book: "numeros" },
    { book: "deuteronomio" }
  ]
},

  {
    id: "conquest",
    title: "Conquista de Canaán",
    start: -1250,
    level: 1,
    books: [{ book: "josue" }]
  },

  {
    id: "judges",
    title: "Época de los jueces",
    start: -1200,
    end: -1050,
    level: 1,
    books: [{ book: "jueces" }]
  },

  // ───────── MONARQUÍA
  {
    id: "kingdom",
    title: "Monarquía unida (Saúl, David, Salomón)",
    start: -1050,
    end: -930,
    level: 1,
    books: [
      { book: "1_samuel" },
      { book: "2_samuel" },
      { book: "1_reyes" }
    ]
  },

  {
    id: "divided-kingdom",
    title: "Reinos divididos (Israel y Judá)",
    start: -930,
    end: -722,
    level: 1,
    books: [
      { book: "1_reyes" },
      { book: "2_reyes" }
    ]
  },

  // ───────── EXILIO
  {
    id: "exile",
    title: "Exilio en Babilonia",
    start: -586,
    end: -538,
    level: 1,
    books: [
      { book: "jeremias" },
      { book: "lamentaciones" },
      { book: "ezequiel" },
      { book: "daniel" }
    ]
  },

  {
    id: "return",
    title: "Retorno del exilio",
    start: -538,
    level: 1,
    books: [
      { book: "esdras" },
      { book: "nehemias" },
      { book: "hageo" },
      { book: "zacarias" }
    ]
  },

  // ───────── JESÚS (CENTRO)
  {
    id: "jesus-birth",
    title: "Nacimiento de Jesús",
    start: 0,
    level: 1,
    books: [
      { book: "mateo", chapters: "1–2" },
      { book: "lucas", chapters: "1–2" }
    ]
  },

  {
    id: "jesus-ministry",
    title: "Ministerio de Jesús",
    start: 30,
    end: 33,
    level: 1,
    books: [
      { book: "mateo" },
      { book: "marcos" },
      { book: "lucas" },
      { book: "juan" }
    ]
  },

  {
    id: "crucifixion",
    title: "Crucifixión y resurrección",
    start: 33,
    level: 1,
    books: [
      { book: "mateo", chapters: "27–28" },
      { book: "marcos", chapters: "15–16" },
      { book: "lucas", chapters: "23–24" },
      { book: "juan", chapters: "19–21" }
    ]
  },

  // ───────── IGLESIA PRIMITIVA
  {
    id: "church",
    title: "Iglesia primitiva",
    start: 33,
    end: 100,
    level: 1,
    books: [
      { book: "hechos" },
      { book: "romanos" },
      { book: "corintios" }
    ]
  },

  //NIVEL 2:
  //CREACION

  {
  id: "creation-days",
  title: "Días de la creación",
  start: -4000,
  level: 2,
  parentId: "creation",
  books: [{ book: "genesis", chapters: "1" }]
},
{
  id: "eden",
  title: "El huerto del Edén",
  start: -4000,
  level: 2,
  parentId: "creation",
  books: [{ book: "genesis", chapters: "2" }]
},

{
  id: "fall-eden",
  title: "Desobediencia y expulsión del Edén",
  start: -4000,
  level: 2,
  parentId: "fall",
  books: [{ book: "genesis", chapters: "3" }]
},

{
  id: "flood-judgment",
  title: "Juicio y preservación por medio del arca",
  start: -2500,
  end: -2300,
  level: 2,
  parentId: "flood",
  books: [{ book: "genesis", chapters: "6–9" }]
},

{
  id: "babel-dispersion",
  title: "Confusión de lenguas y dispersión",
  start: -2200,
  level: 2,
  parentId: "babel",
  books: [{ book: "genesis", chapters: "11" }]
},

//PATRIARCAS:
{
  id: "abraham-covenant",
  title: "Pacto con Abraham",
  start: -2000,
  level: 2,
  parentId: "abraham",
  books: [{ book: "genesis", chapters: "12, 15, 17" }]
},
{
  id: "abraham-isaac",
  title: "Sacrificio de Isaac",
  start: -1900,
  level: 2,
  parentId: "abraham",
  books: [{ book: "genesis", chapters: "22" }]
},

{
  id: "jacob-esau",
  title: "Jacob y Esaú",
  start: -1900,
  level: 2,
  parentId: "isaac-jacob",
  books: [{ book: "genesis", chapters: "25–28" }]
},
{
  id: "jacob-israel",
  title: "Jacob recibe el nombre Israel",
  start: -1800,
  level: 2,
  parentId: "isaac-jacob",
  books: [{ book: "genesis", chapters: "32" }]
},

{
  id: "joseph-slavery",
  title: "José vendido y llevado a Egipto",
  start: -1700,
  level: 2,
  parentId: "joseph",
  books: [{ book: "genesis", chapters: "37" }]
},
{
  id: "joseph-rule",
  title: "José gobernador de Egipto",
  start: -1680,
  level: 2,
  parentId: "joseph",
  books: [{ book: "genesis", chapters: "41" }]
},

//EXODO E ISRAEL:
{
  id: "exodus-passover",
  title: "Pascua y salida de Egipto",
  start: -1300,
  level: 2,
  parentId: "exodus",
  books: [{ book: "exodo", chapters: "12–14" }]
},
{
  id: "exodus-sinai",
  title: "Pacto y Ley en el Sinaí",
  start: -1290,
  level: 2,
  parentId: "exodus",
  books: [{ book: "exodo", chapters: "19–24" }]
},
{
  id: "exodus-wilderness",
  title: "Travesía por el desierto",
  start: -1290,
  end: -1260,
  level: 2,
  parentId: "exodus",
  books: [
    { book: "exodo" },
    { book: "numeros" },
    { book: "deuteronomio" }
  ]
},

{
  id: "conquest-canaan",
  title: "Entrada y conquista de Canaán",
  start: -1250,
  level: 2,
  parentId: "conquest",
  books: [{ book: "josue" }]
},

{
  id: "judges-cycle",
  title: "Ciclo de jueces y liberación",
  start: -1200,
  end: -1050,
  level: 2,
  parentId: "judges",
  books: [{ book: "jueces" }]
},

//MONARQUIA
{
  id: "kingdom-saul",
  title: "Reinado de Saúl",
  start: -1050,
  level: 2,
  parentId: "kingdom",
  books: [{ book: "1_samuel" }]
},
{
  id: "kingdom-david",
  title: "Reinado de David",
  start: -1010,
  level: 2,
  parentId: "kingdom",
  books: [{ book: "2_samuel" }]
},
{
  id: "kingdom-solomon",
  title: "Reinado de Salomón",
  start: -970,
  level: 2,
  parentId: "kingdom",
  books: [{ book: "1_reyes", chapters: "1–11" }]
},

{
  id: "divided-israel",
  title: "Reino del norte (Israel)",
  start: -930,
  end: -722,
  level: 2,
  parentId: "divided-kingdom",
  books: [{ book: "2_reyes" }]
},
{
  id: "divided-judah",
  title: "Reino del sur (Judá)",
  start: -930,
  end: -586,
  level: 2,
  parentId: "divided-kingdom",
  books: [{ book: "2_reyes" }]
},


//EXILIO Y RETORNO:
{
  id: "exile-jerusalem",
  title: "Caída de Jerusalén",
  start: -586,
  level: 2,
  parentId: "exile",
  books: [{ book: "2_reyes", chapters: "25" }]
},
{
  id: "exile-babylon",
  title: "Cautiverio en Babilonia",
  start: -586,
  end: -538,
  level: 2,
  parentId: "exile",
  books: [
    { book: "ezequiel" },
    { book: "daniel" }
  ]
},

{
  id: "return-cyrus",
  title: "Decreto de Ciro",
  start: -538,
  level: 2,
  parentId: "return",
  books: [{ book: "esdras", chapters: "1" }]
},
{
  id: "return-temple",
  title: "Reconstrucción del templo",
  start: -520,
  level: 2,
  parentId: "return",
  books: [{ book: "esdras", chapters: "3–6" }]
},


//JESUS:
{
  id: "jesus-birth-nativity",
  title: "Nacimiento y niñez",
  start: 0,
  level: 2,
  parentId: "jesus-birth",
  books: [
    { book: "mateo", chapters: "1–2" },
    { book: "lucas", chapters: "1–2" }
  ]
},

{
  id: "jesus-baptism",
  title: "Bautismo de Jesús",
  start: 30,
  level: 2,
  parentId: "jesus-ministry",
  books: [{ book: "mateo", chapters: "3" }]
},
{
  id: "jesus-galilee",
  title: "Ministerio en Galilea",
  start: 30,
  level: 2,
  parentId: "jesus-ministry",
  books: [{ book: "mateo", chapters: "4–18" }]
},
{
  id: "jesus-jerusalem",
  title: "Ministerio en Jerusalén",
  start: 33,
  level: 2,
  parentId: "jesus-ministry",
  books: [{ book: "mateo", chapters: "19–25" }]
},

{
  id: "crucifixion-passion",
  title: "Pasión y crucifixión",
  start: 33,
  level: 2,
  parentId: "crucifixion",
  books: [{ book: "mateo", chapters: "26–27" }]
},
{
  id: "crucifixion-resurrection",
  title: "Resurrección",
  start: 33,
  level: 2,
  parentId: "crucifixion",
  books: [{ book: "mateo", chapters: "28" }]
},

//IGLESIA PRIMITIVA

{
  id: "church-pentecost",
  title: "Pentecostés",
  start: 33,
  level: 2,
  parentId: "church",
  books: [{ book: "hechos", chapters: "2" }]
},
{
  id: "church-expansion",
  title: "Expansión de la iglesia",
  start: 35,
  end: 70,
  level: 2,
  parentId: "church",
  books: [{ book: "hechos" }]
},
{
  id: "church-epistles",
  title: "Cartas apostólicas",
  start: 50,
  end: 100,
  level: 2,
  parentId: "church",
  books: [
    { book: "romanos" },
    { book: "corintios" }
  ]
},



];
