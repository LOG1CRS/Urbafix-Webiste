import { pdfs } from '../../assets';

const señalamientoVertical = [
  {
    title: 'SIOP',
    pdf: pdfs.siop,
  },
  {
    title: 'SCT',
    pdf: pdfs.sct,
  },
  {
    title: 'Señalamiento preventivo',
    pdf: null,
  },
  {
    title: 'Señalamiento restrictivo',
    pdf: null,
  },
  {
    title: 'Señalamiento turistico',
    pdf: null,
  },
  {
    title: 'Señalamiento de servicios',
    pdf: null,
  },
  {
    title: 'Señalamiento informativo',
    pdf: null,
  },
  // {
  //   title: 'Señalamiento de información general',
  //   pdf: null,
  // },
];

const dispositivos = [
  {
    title: 'Bolardos tipo 2',
    pdf: pdfs.bolardo2,
  },
  {
    title: 'Bolardos tipo 3',
    pdf: pdfs.bolardo3,
  },
  {
    title: 'Reductores de velocidad',
    pdf: pdfs.reductorDeVelocidad,
  },
  {
    title: 'Topes de estacionamiento',
    pdf: pdfs.topesDeEstacionamiento,
  },
  {
    title: 'Esquineros tipo 1',
    pdf: pdfs.esquinero,
  },
  {
    title: 'Esquineros tipo 2',
    pdf: pdfs.esquinero2,
  },
];

const vinilesReflejantes = [
  {
    title: 'Alta intensidad',
    pdf: null,
  },
  {
    title: 'Topes de Alta intensidad fluorescente',
    pdf: null,
  },
  {
    title: 'Grado ingeniería prismático',
    pdf: null,
  },
];

const botones = [
  {
    title: 'Botón hibrido 360',
    pdf: pdfs.botonHibrido,
  },
  {
    title: 'Botón óptico',
    pdf: pdfs.botonOptico,
  },
  {
    title: 'Botón metálico',
    pdf: pdfs.botonMetalico,
  },
];

const delineadores = [
  {
    title: 'Trafitambos',
    pdf: pdfs.trafitambo,
  },
  {
    title: 'Conos',
    pdf: pdfs.conos,
  },
  {
    title: 'Conos con base negra',
    pdf: pdfs.conosBaseNegra,
  },
  {
    title: 'Barrera mini',
    pdf: pdfs.barreraMini,
  },
  {
    title: 'Barrera bicentenario',
    pdf: pdfs.barrera,
  },
  {
    title: 'Lámparas',
    pdf: pdfs.lampara,
  },
  {
    title: 'Delineadores',
    pdf: pdfs.delineador,
  },
  {
    title: 'Delimitadores',
    pdf: null,
  },
  {
    title: 'Poste alineador',
    pdf: pdfs.posteAlineador,
  },
  {
    title: 'Hito flex',
    pdf: null,
  },
  {
    title: 'Poste cónico',
    pdf: null,
  },
  {
    title: 'Panel vertical',
    pdf: null,
  },
  {
    title: 'Flechero 18 módulos',
    pdf: pdfs.flechero,
  },
];

const boyas = [
  {
    title: 'Boya premium',
    pdf: null,
  },
  {
    title: 'Boya solar',
    pdf: pdfs.boyaSolar,
  },
  {
    title: 'Boya solida',
    pdf: pdfs.boyaSolida,
  },
  {
    title: 'Boya delineadora',
    pdf: pdfs.boyaDelineadora,
  },
  {
    title: 'Mini boya',
    pdf: pdfs.miniBoya,
  },
  {
    title: 'Micro boya',
    pdf: pdfs.microBoya,
  },
  {
    title: 'Boya metálica',
    pdf: pdfs.boyaMetalica,
  },
];

const marcadorReflectivo = [
  {
    title: 'Unidireccional',
    pdf: null,
  },
  {
    title: 'Bidireccional',
    pdf: pdfs.marcadorReflectivo,
  },
  {
    title: 'Vialetas metálicas',
    pdf: pdfs.vialetaSolar,
  },
];

export {
  señalamientoVertical,
  dispositivos,
  vinilesReflejantes,
  botones,
  delineadores,
  boyas,
  marcadorReflectivo,
};
