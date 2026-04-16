/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Rugby
   Datos de referencia: Temporada 2024-25
═══════════════════════════════════════════════════════════ */

window.SS21.rugby = {

  /* ──────────────────────────────────────────────────────
     🌍  WORLD RUGBY RANKINGS (Actualizado 2024-25)
  ────────────────────────────────────────────────────── */
  ranking: [
    { pos: 1,  pais: 'Sudáfrica',    bandera: '🇿🇦', pts: 94.33, titulos_rpc: 4 },
    { pos: 2,  pais: 'Irlanda',      bandera: '🇮🇪', pts: 93.72, titulos_rpc: 0 },
    { pos: 3,  pais: 'Nueva Zelanda',bandera: '🇳🇿', pts: 91.58, titulos_rpc: 3 },
    { pos: 4,  pais: 'Francia',      bandera: '🇫🇷', pts: 88.41, titulos_rpc: 0 },
    { pos: 5,  pais: 'Argentina',    bandera: '🇦🇷', pts: 85.09, titulos_rpc: 0 },
    { pos: 6,  pais: 'Inglaterra',   bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', pts: 83.74, titulos_rpc: 1 },
    { pos: 7,  pais: 'Escocia',      bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', pts: 82.15, titulos_rpc: 0 },
    { pos: 8,  pais: 'Australia',    bandera: '🇦🇺', pts: 79.88, titulos_rpc: 2 },
    { pos: 9,  pais: 'Fiyi',         bandera: '🇫🇯', pts: 77.32, titulos_rpc: 0 },
    { pos: 10, pais: 'Georgia',      bandera: '🇬🇪', pts: 74.55, titulos_rpc: 0 },
    { pos: 11, pais: 'Japón',        bandera: '🇯🇵', pts: 73.21, titulos_rpc: 0 },
    { pos: 12, pais: 'Gales',        bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', pts: 72.88, titulos_rpc: 0 },
    { pos: 13, pais: 'Italia',       bandera: '🇮🇹', pts: 71.44, titulos_rpc: 0 },
    { pos: 14, pais: 'Samoa',        bandera: '🇼🇸', pts: 70.19, titulos_rpc: 0 },
    { pos: 15, pais: 'Portugal',     bandera: '🇵🇹', pts: 68.77, titulos_rpc: 0 },
  ],

  /* ──────────────────────────────────────────────────────
     🏆  COPA MUNDIAL DE RUGBY (World Cup)
  ────────────────────────────────────────────────────── */
  worldCup: {
    titulos: {
      'Nueva Zelanda':{ n: 3, años: [1987, 2011, 2015] },
      'Sudáfrica':    { n: 4, años: [1995, 2007, 2019, 2023] },
      'Australia':    { n: 2, años: [1991, 1999] },
      'Inglaterra':   { n: 1, años: [2003] },
    },
    ediciones: [
      { año: 2027, sede: '🇦🇺 Australia',    campeon: '-', subcampeon: '-', resultado: 'Próxima edición' },
      { año: 2023, sede: '🇫🇷 Francia',      campeon: '🇿🇦 Sudáfrica',    subcampeon: '🇳🇿 Nueva Zelanda', resultado: '12-11', nota: '4to título Springboks' },
      { año: 2019, sede: '🇯🇵 Japón',        campeon: '🇿🇦 Sudáfrica',    subcampeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',    resultado: '32-12' },
      { año: 2015, sede: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', campeon: '🇳🇿 Nueva Zelanda',subcampeon: '🇦🇺 Australia',    resultado: '34-17', nota: 'Bicampeón' },
      { año: 2011, sede: '🇳🇿 Nueva Zelanda',campeon: '🇳🇿 Nueva Zelanda',subcampeon: '🇫🇷 Francia',      resultado: '8-7' },
      { año: 2007, sede: '🇫🇷 Francia',      campeon: '🇿🇦 Sudáfrica',    subcampeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',    resultado: '15-6' },
      { año: 2003, sede: '🇦🇺 Australia',    campeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra', subcampeon: '🇦🇺 Australia',    resultado: '20-17 DT', nota: 'Jonny Wilkinson drop' },
      { año: 1999, sede: '🏴󠁧󠁢󠁷󠁬󠁳󠁿 Gales',     campeon: '🇦🇺 Australia',    subcampeon: '🇫🇷 Francia',      resultado: '35-12' },
      { año: 1995, sede: '🇿🇦 Sudáfrica',    campeon: '🇿🇦 Sudáfrica',    subcampeon: '🇳🇿 Nueva Zelanda', resultado: '15-12 DT', nota: 'Mandela en la tribuna' },
      { año: 1991, sede: '🇬🇧 R. Unido',     campeon: '🇦🇺 Australia',    subcampeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',    resultado: '12-6' },
      { año: 1987, sede: '🇳🇿🇦🇺 N.Zel./Aus.',campeon: '🇳🇿 Nueva Zelanda',subcampeon: '🇫🇷 Francia',      resultado: '29-9' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🏆  SEIS NACIONES / CINCO NACIONES (Historial)
  ────────────────────────────────────────────────────── */
  sixNations: {
    descripcion: 'Torneo anual de Campeonato Europeo de Rugby (Six Nations desde 2000, Five Nations antes)',
    campeones: [
      { año: 2025, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: true },
      { año: 2024, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false },
      { año: 2023, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false },
      { año: 2022, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 2021, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 2020, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 2019, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: true },
      { año: 2018, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: true },
      { año: 2017, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
      { año: 2016, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 2015, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false },
      { año: 2014, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false },
      { año: 2013, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: false },
      { año: 2012, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: true },
      { año: 2011, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 2010, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 2009, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: true },
      { año: 2008, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: true },
      { año: 2007, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false },
      { año: 2006, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false },
      { año: 2005, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: true },
      { año: 2004, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 2003, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
      { año: 2002, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 2001, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 2000, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 1999, campeon: 'Escocia',    bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grandSlam: false },
      { año: 1998, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 1997, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 1996, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: false },
      { año: 1995, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
      { año: 1994, campeon: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', grandSlam: false },
      { año: 1993, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false },
      { año: 1992, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
      { año: 1991, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
      { año: 1990, campeon: 'Escocia',    bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grandSlam: true },
      { año: 1989, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 1988, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false, nota: 'Compartido con Gales' },
      { año: 1987, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 1986, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false, nota: 'Compartido con Escocia' },
      { año: 1985, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false },
      { año: 1984, campeon: 'Escocia',    bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', grandSlam: true },
      { año: 1983, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: false, nota: 'Compartido con Irlanda' },
      { año: 1982, campeon: 'Irlanda',    bandera: '🇮🇪', grandSlam: false, nota: 'Triple Corona' },
      { año: 1981, campeon: 'Francia',    bandera: '🇫🇷', grandSlam: true },
      { año: 1980, campeon: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', grandSlam: true },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🏆  SEIS NACIONES 2025
  ────────────────────────────────────────────────────── */
  sixNations2025: {
    temporada: '2025',
    equipos: [
      { pos: 1, pais: 'Irlanda',    bandera: '🇮🇪', j: 5, g: 5, e: 0, p: 0, pf: 183, pc: 79,  pd: 104, pts: 20, bonus: 5, nota: 'Gran Slam 🏆' },
      { pos: 2, pais: 'Francia',    bandera: '🇫🇷', j: 5, g: 4, e: 0, p: 1, pf: 156, pc: 98,  pd: 58,  pts: 17, bonus: 2, nota: '' },
      { pos: 3, pais: 'Escocia',    bandera: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', j: 5, g: 3, e: 0, p: 2, pf: 141, pc: 121, pd: 20,  pts: 13, bonus: 1, nota: '' },
      { pos: 4, pais: 'Inglaterra', bandera: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', j: 5, g: 2, e: 0, p: 3, pf: 118, pc: 134, pd: -16, pts: 10, bonus: 2, nota: '' },
      { pos: 5, pais: 'Italia',     bandera: '🇮🇹', j: 5, g: 1, e: 0, p: 4, pf: 107, pc: 162, pd: -55, pts: 6,  bonus: 1, nota: '' },
      { pos: 6, pais: 'Gales',      bandera: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', j: 5, g: 0, e: 0, p: 5, pf: 79,  pc: 190, pd: -111,pts: 2,  bonus: 2, nota: 'Cuchara de madera 🥄' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🏆  THE RUGBY CHAMPIONSHIP 2024
  ────────────────────────────────────────────────────── */
  rugbyChampionship2024: {
    temporada: '2024',
    equipos: [
      { pos: 1, pais: 'Sudáfrica',    bandera: '🇿🇦', j: 6, g: 5, e: 0, p: 1, pf: 200, pc: 131, pts: 24, nota: 'Campeón 🏆' },
      { pos: 2, pais: 'Nueva Zelanda',bandera: '🇳🇿', j: 6, g: 4, e: 0, p: 2, pf: 179, pc: 148, pts: 20, nota: '' },
      { pos: 3, pais: 'Argentina',    bandera: '🇦🇷', j: 6, g: 2, e: 0, p: 4, pf: 143, pc: 172, pts: 11, nota: '' },
      { pos: 4, pais: 'Australia',    bandera: '🇦🇺', j: 6, g: 1, e: 0, p: 5, pf: 119, pc: 190, pts: 8,  nota: '' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🏆  SUPER RUGBY PACIFIC 2024
  ────────────────────────────────────────────────────── */
  superRugby2024: {
    campeon: 'Blues (Nueva Zelanda)',
    subcampeon: 'Chiefs (Nueva Zelanda)',
    resultado: '24-22',
    historial_reciente: [
      { año: 2024, campeon: '🔵 Blues',      pais: '🇳🇿' },
      { año: 2023, campeon: '🔴 Chiefs',     pais: '🇳🇿' },
      { año: 2022, campeon: '🔵 Blues',      pais: '🇳🇿' },
      { año: 2021, campeon: '🔴 Highlanders',pais: '🇳🇿' },
      { año: 2020, campeon: '🔴 Chiefs',     pais: '🇳🇿' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     ⭐  TOP JUGADORES HISTÓRICOS
  ────────────────────────────────────────────────────── */
  leyendas: [
    { nombre: 'Jonah Lomu',         pais: '🇳🇿 Nueva Zelanda', posicion: 'Ala',      descripcion: 'El más dominante de los 90s, 37 tries en mundiales',  era: '1994-2002' },
    { nombre: 'Richie McCaw',       pais: '🇳🇿 Nueva Zelanda', posicion: 'Flanker',  descripcion: '2x campeón mundial, considerado el mejor de todos los tiempos', era: '2001-2015' },
    { nombre: 'Dan Carter',         pais: '🇳🇿 Nueva Zelanda', posicion: 'Apertura', descripcion: 'Máximo anotador de la historia de All Blacks, 1598 puntos en Tests', era: '2003-2015' },
    { nombre: 'Bryan Habana',       pais: '🇿🇦 Sudáfrica',    posicion: 'Ala',      descripcion: 'Máximo anotador del Mundial 2007, 67 tries en internacionales', era: '2004-2016' },
    { nombre: 'Siya Kolisi',        pais: '🇿🇦 Sudáfrica',    posicion: 'Flanker',  descripcion: 'Primer capitán negro de Sudáfrica, 2x campeón del mundo', era: '2013-presente' },
    { nombre: 'Sergio Parisse',     pais: '🇮🇹 Italia',       posicion: 'N°8',      descripcion: 'El más grande de Italia, 142 internacionales', era: '2002-2019' },
    { nombre: 'Felipe Contepomi',   pais: '🇦🇷 Argentina',    posicion: 'Apertura', descripcion: 'Leyenda de Los Pumas, actual DT de Argentina', era: '1998-2011' },
    { nombre: 'Jonny Wilkinson',    pais: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',  posicion: 'Apertura', descripcion: 'Héroe del Mundial 2003, drop que definió la historia', era: '1998-2011' },
  ],

  /* ──────────────────────────────────────────────────────
     📋  PRINCIPALES COMPETICIONES
  ────────────────────────────────────────────────────── */
  competiciones: [
    { nombre: 'Copa del Mundo',       organizador: 'World Rugby', frecuencia: 'Cada 4 años',  equipos: 20, icon: '🏆' },
    { nombre: 'Seis Naciones',        organizador: 'Six Nations Rugby', frecuencia: 'Anual',  equipos: 6,  icon: '🌍' },
    { nombre: 'The Rugby Championship',organizador: 'SANZAAR',    frecuencia: 'Anual',         equipos: 4,  icon: '🌎' },
    { nombre: 'Super Rugby Pacific',  organizador: 'SANZAAR',    frecuencia: 'Anual',          equipos: 12, icon: '🔵' },
    { nombre: 'Premiership (Inglaterra)', organizador: 'PRL',     frecuencia: 'Anual',         equipos: 10, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { nombre: 'Top 14 (Francia)',     organizador: 'LNR',        frecuencia: 'Anual',          equipos: 14, icon: '🇫🇷' },
    { nombre: 'URC (United Rugby Championship)', organizador: 'URC', frecuencia: 'Anual',     equipos: 16, icon: '🌍' },
    { nombre: 'Champions Cup',        organizador: 'EPCR',       frecuencia: 'Anual',          equipos: 24, icon: '⭐' },
  ]

};

console.log('[SS21 Rugby] Datos cargados ✓');
