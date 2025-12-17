export type TimelineEvent = {
  id: string;
  title: string;

  start: number; // año (a.C. negativo)
  end?: number;  // si es un período

  level: 1 | 2 | 3; // nivel de zoom
  parentId?: string;

  description?: string;

  books?: {
    name: string;
    chapters?: string;
  }[];
};

export const timelineEvents: TimelineEvent[] = [

  // ───────── NIVEL 1 (macro)
  {
    id: "creation-era",
    title: "Creación y primeros tiempos",
    start: -4000,
    end: -2300,
    level: 1
  },

  // ───────── NIVEL 2
  {
    id: "flood",
    title: "Diluvio",
    start: -2400,
    end: -2300,
    level: 2,
    parentId: "creation-era",
    description: "Juicio y renovación según la tradición bíblica",
    books: [{ name: "Génesis", chapters: "6–9" }]
  },

  {
    id: "babel",
    title: "Torre de Babel",
    start: -2200,
    level: 2,
    parentId: "creation-era",
    books: [{ name: "Génesis", chapters: "11" }]
  },

  // ───────── NIVEL 1
  {
    id: "exodus-era",
    title: "Éxodo y formación de Israel",
    start: -1300,
    end: -1200,
    level: 1
  },

  // ───────── NIVEL 2
  {
    id: "exodus",
    title: "Éxodo",
    start: -1250,
    level: 2,
    parentId: "exodus-era",
    books: [{ name: "Éxodo", chapters: "1–15" }]
  },

  // ───────── NIVEL 3
  {
    id: "desert",
    title: "40 años en el desierto",
    start: -1250,
    end: -1210,
    level: 3,
    parentId: "exodus",
    books: [
      { name: "Éxodo" },
      { name: "Números" },
      { name: "Deuteronomio" }
    ]
  },

  // ───────── CENTRO
  {
    id: "jesus-birth",
    title: "Nacimiento de Jesús",
    start: 0,
    level: 1,
    description: "Centro de la línea del tiempo",
    books: [
      { name: "Mateo", chapters: "1–2" },
      { name: "Lucas", chapters: "1–2" }
    ]
  }

];
