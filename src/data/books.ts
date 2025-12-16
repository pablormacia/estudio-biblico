export type Book = {
  id: string;
  name: string;
  year: number;

  lat: number;
  lng: number;

  section: string;

  authors: {
    traditional?: string;
    academic?: string;
    certainty: "alta" | "media" | "baja";
  };

  writtenAt: {
    place: string;
    region: string;
    notes?: string;
  };
};

export const JERUSALEM = {
  lat: 31.778,
  lng: 35.235
};

export const books: Book[] = [

/* =========================
   PENTATEUCO
========================= */

{
  id: "genesis",
  name: "Génesis",
  year: -550,
  lat: 32.54,
  lng: 44.42,
  section: "Pentateuco",
  authors: {
    traditional: "Moisés",
    academic: "Redactores sacerdotales y tradiciones antiguas (J, E, P, D)",
    certainty: "media"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia",
    notes: "Edición final durante el exilio"
  }
},
{
  id: "exodus",
  name: "Éxodo",
  year: -550,
  lat: 32.54,
  lng: 44.42,
  section: "Pentateuco",
  authors: {
    traditional: "Moisés",
    academic: "Tradiciones mosaicas editadas en período exílico",
    certainty: "media"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
},
{
  id: "leviticus",
  name: "Levítico",
  year: -540,
  lat: 32.54,
  lng: 44.42,
  section: "Pentateuco",
  authors: {
    traditional: "Moisés",
    academic: "Escuela sacerdotal",
    certainty: "alta"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
},
{
  id: "numbers",
  name: "Números",
  year: -540,
  lat: 32.54,
  lng: 44.42,
  section: "Pentateuco",
  authors: {
    traditional: "Moisés",
    academic: "Tradiciones antiguas editadas en el exilio",
    certainty: "media"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
},
{
  id: "deuteronomy",
  name: "Deuteronomio",
  year: -620,
  lat: 31.778,
  lng: 35.235,
  section: "Pentateuco",
  authors: {
    traditional: "Moisés",
    academic: "Escuela deuteronomista",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá",
    notes: "Base pre-exílica, edición posterior"
  }
},

/* =========================
   HISTÓRICOS
========================= */

{
  id: "joshua",
  name: "Josué",
  year: -620,
  lat: 31.778,
  lng: 35.235,
  section: "Históricos",
  authors: {
    traditional: "Josué",
    academic: "Redacción deuteronomista",
    certainty: "media"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "judges",
  name: "Jueces",
  year: -620,
  lat: 31.778,
  lng: 35.235,
  section: "Históricos",
  authors: {
    traditional: "Samuel",
    academic: "Redacción deuteronomista",
    certainty: "media"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "ruth",
  name: "Rut",
  year: -500,
  lat: 31.778,
  lng: 35.235,
  section: "Históricos",
  authors: {
    traditional: "Samuel",
    academic: "Autor post-exílico desconocido",
    certainty: "baja"
  },
  writtenAt: {
    place: "Judá",
    region: "Israel"
  }
},
{
  id: "samuel",
  name: "1–2 Samuel",
  year: -600,
  lat: 31.778,
  lng: 35.235,
  section: "Históricos",
  authors: {
    traditional: "Samuel, Gad y Natán",
    academic: "Redactores deuteronomistas",
    certainty: "media"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "kings",
  name: "1–2 Reyes",
  year: -580,
  lat: 32.54,
  lng: 44.42,
  section: "Históricos",
  authors: {
    traditional: "Jeremías",
    academic: "Redactores deuteronomistas en el exilio",
    certainty: "media"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
},
{
  id: "chronicles",
  name: "1–2 Crónicas",
  year: -430,
  lat: 31.778,
  lng: 35.235,
  section: "Históricos",
  authors: {
    traditional: "Esdras",
    academic: "Cronista post-exílico",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "ezra",
  name: "Esdras",
  year: -450,
  lat: 30.0,
  lng: 52.0,
  section: "Históricos",
  authors: {
    traditional: "Esdras",
    academic: "Esdras y círculos sacerdotales",
    certainty: "media"
  },
  writtenAt: {
    place: "Persia",
    region: "Imperio Persa"
  }
},
{
  id: "nehemiah",
  name: "Nehemías",
  year: -445,
  lat: 30.0,
  lng: 52.0,
  section: "Históricos",
  authors: {
    traditional: "Nehemías",
    academic: "Memorias personales editadas",
    certainty: "alta"
  },
  writtenAt: {
    place: "Persia",
    region: "Imperio Persa"
  }
},
{
  id: "esther",
  name: "Ester",
  year: -450,
  lat: 32.19,
  lng: 48.25,
  section: "Históricos",
  authors: {
    traditional: "Mardoqueo",
    academic: "Autor judío en la diáspora",
    certainty: "baja"
  },
  writtenAt: {
    place: "Susa",
    region: "Persia"
  }
},

/* =========================
   POÉTICOS / SAPIENCIALES
========================= */

{
  id: "job",
  name: "Job",
  year: -600,
  lat: 35.0,
  lng: 36.0,
  section: "Poéticos",
  authors: {
    traditional: "Job",
    academic: "Autor sapiencial desconocido",
    certainty: "baja"
  },
  writtenAt: {
    place: "Siria / Edom",
    region: "Levant"
  }
},
{
  id: "psalms",
  name: "Salmos",
  year: -500,
  lat: 31.778,
  lng: 35.235,
  section: "Poéticos",
  authors: {
    traditional: "David y otros",
    academic: "Colección litúrgica compuesta",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "proverbs",
  name: "Proverbios",
  year: -600,
  lat: 31.778,
  lng: 35.235,
  section: "Poéticos",
  authors: {
    traditional: "Salomón",
    academic: "Colecciones sapienciales",
    certainty: "media"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "ecclesiastes",
  name: "Eclesiastés",
  year: -300,
  lat: 31.778,
  lng: 35.235,
  section: "Poéticos",
  authors: {
    traditional: "Salomón",
    academic: "Autor post-exílico",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "song",
  name: "Cantar de los Cantares",
  year: -500,
  lat: 31.778,
  lng: 35.235,
  section: "Poéticos",
  authors: {
    traditional: "Salomón",
    academic: "Poemas amorosos compilados",
    certainty: "media"
  },
  writtenAt: {
    place: "Judá",
    region: "Israel"
  }
},

/* =========================
   PROFETAS MAYORES
========================= */

{
  id: "isaiah",
  name: "Isaías",
  year: -700,
  lat: 31.778,
  lng: 35.235,
  section: "Profetas",
  authors: {
    traditional: "Isaías ben Amoz",
    academic: "Isaías histórico + redactores",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "jeremiah",
  name: "Jeremías",
  year: -600,
  lat: 31.778,
  lng: 35.235,
  section: "Profetas",
  authors: {
    traditional: "Jeremías",
    academic: "Jeremías y escribas",
    certainty: "alta"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "lamentations",
  name: "Lamentaciones",
  year: -580,
  lat: 31.778,
  lng: 35.235,
  section: "Profetas",
  authors: {
    traditional: "Jeremías",
    academic: "Poetas exílicos",
    certainty: "media"
  },
  writtenAt: {
    place: "Jerusalén",
    region: "Judá"
  }
},
{
  id: "ezekiel",
  name: "Ezequiel",
  year: -580,
  lat: 32.54,
  lng: 44.42,
  section: "Profetas",
  authors: {
    traditional: "Ezequiel",
    academic: "Ezequiel en el exilio",
    certainty: "alta"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
},
{
  id: "daniel",
  name: "Daniel",
  year: -530,
  lat: 32.54,
  lng: 44.42,
  section: "Profetas",
  authors: {
    traditional: "Daniel",
    academic: "Autor judío del período persa",
    certainty: "media"
  },
  writtenAt: {
    place: "Babilonia",
    region: "Mesopotamia"
  }
}

];
