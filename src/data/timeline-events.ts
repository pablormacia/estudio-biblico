export type TimelineEvent = {
  id: string;
  title: string;

  // años astronómicos: a.C. negativos, d.C. positivos
  start: number;
  end?: number;

  level: 1 | 2 | 3;

  description?: string;

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
  {
    id: "exodus",
    title: "Éxodo de Egipto",
    start: -1300,
    level: 1,
    books: [{ book: "exodo", chapters: "1–15" }]
  },

  {
    id: "desert",
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
  }
];
