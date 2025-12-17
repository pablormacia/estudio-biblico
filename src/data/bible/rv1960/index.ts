import genesis from "./genesis.json";
import exodo from "./exodo.json";
import levitico from "./levitico.json";
import numeros from "./numeros.json";
import deuteronomio from "./deuteronomio.json";

import josue from "./josue.json";
import jueces from "./jueces.json";
import rut from "./rut.json";

import samuel1 from "./1_samuel.json";
import samuel2 from "./2_samuel.json";
import reyes1 from "./1_reyes.json";
import reyes2 from "./2_reyes.json";
import cronicas1 from "./1_cronicas.json";
import cronicas2 from "./2_cronicas.json";

import esdras from "./esdras.json";
import nehemias from "./nehemias.json";
import ester from "./ester.json";

import job from "./job.json";
import salmos from "./salmos.json";
import proverbios from "./proverbios.json";
import eclesiastes from "./eclesiastes.json";
import cantares from "./cantar_de_los_cantares.json";

import isaias from "./isaias.json";
import jeremias from "./jeremias.json";
import lamentaciones from "./lamentaciones.json";
import ezequiel from "./ezequiel.json";
import daniel from "./daniel.json";

import oseas from "./oseas.json";
import joel from "./joel.json";
import amos from "./amos.json";
import abdias from "./abdias.json";
import jonas from "./jonas.json";
import miqueas from "./miqueas.json";
import nahum from "./nahum.json";
import habacuc from "./habacuc.json";
import sofonias from "./sofonias.json";

import zacarias from "./zacarias.json";
import malaquias from "./malaquias.json";

import mateo from "./mateo.json";
import marcos from "./marcos.json";
import lucas from "./lucas.json";
import juan from "./juan.json";
import hechos from "./hechos.json";

import romanos from "./romanos.json";
import corintios1 from "./1_corintios.json";
import corintios2 from "./2_corintios.json";
import galatas from "./galatas.json";
import efesios from "./efesios.json";
import filipenses from "./filipenses.json";
import colosenses from "./colosenses.json";
import tesalonicenses1 from "./1_tesalonicenses.json";
import tesalonicenses2 from "./2_tesalonicenses.json";
import timoteo1 from "./1_timoteo.json";
import timoteo2 from "./2_timoteo.json";
import tito from "./tito.json";
import filemon from "./filemon.json";

import hebreos from "./hebreos.json";
import santiago from "./santiago.json";
import pedro1 from "./1_pedro.json";
import pedro2 from "./2_pedro.json";
import juan1 from "./1_juan.json";
import juan2 from "./2_juan.json";
import juan3 from "./3_juan.json";
import judas from "./judas.json";

import apocalipsis from "./apocalipsis.json";

import { BibleBook } from "@/src/types/bible";




export const bibleRv1960: Record<string, BibleBook> = {
  genesis,
  exodo,
  levitico,
  numeros,
  deuteronomio,

  josue,
  jueces,
  rut,

  "1-samuel": samuel1,
  "2-samuel": samuel2,
  "1-reyes": reyes1,
  "2-reyes": reyes2,
  "1-cronicas": cronicas1,
  "2-cronicas": cronicas2,

  esdras,
  nehemias,
  ester,

  job,
  salmos,
  proverbios,
  eclesiastes,
  cantares,

  isaias,
  jeremias,
  lamentaciones,
  ezequiel,
  daniel,

  oseas,
  joel,
  amos,
  abdias,
  jonas,
  miqueas,
  nahum,
  habacuc,
  sofonias,
  zacarias,
  malaquias,

  mateo,
  marcos,
  lucas,
  juan,
  hechos,

  romanos,
  "1-corintios": corintios1,
  "2-corintios": corintios2,
  galatas,
  efesios,
  filipenses,
  colosenses,
  "1-tesalonicenses": tesalonicenses1,
  "2-tesalonicenses": tesalonicenses2,
  "1-timoteo": timoteo1,
  "2-timoteo": timoteo2,
  tito,
  filemon,

  hebreos,
  santiago,
  "1-pedro": pedro1,
  "2-pedro": pedro2,
  "1-juan": juan1,
  "2-juan": juan2,
  "3-juan": juan3,
  judas,

  apocalipsis,
};
