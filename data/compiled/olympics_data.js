/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Juegos Olímpicos (JJOO)
   Fuentes: olympics.com, wikipedia
═══════════════════════════════════════════════════════════ */

window.SS21.olympics = {

  /* ── EDICIONES VERANO (1896-2024) ─────────────────────────────── */
  verano: [
    { año:2024, sede:'París, Francia',         atletas:10500, paises:206, deportes:32, abiertos:'26 jul', cerrados:'11 ago' },
    { año:2020, sede:'Tokio, Japón',           atletas:11090, paises:206, deportes:33, abiertos:'23 jul', cerrados:'8 ago', nota:'Celebrado en 2021 por COVID-19' },
    { año:2016, sede:'Río de Janeiro, Brasil', atletas:11238, paises:207, deportes:28, abiertos:'5 ago',  cerrados:'21 ago' },
    { año:2012, sede:'Londres, Reino Unido',   atletas:10568, paises:204, deportes:26, abiertos:'27 jul', cerrados:'12 ago' },
    { año:2008, sede:'Pekín, China',           atletas:10942, paises:204, deportes:28, abiertos:'8 ago',  cerrados:'24 ago' },
    { año:2004, sede:'Atenas, Grecia',         atletas:10625, paises:201, deportes:28, abiertos:'13 ago', cerrados:'29 ago' },
    { año:2000, sede:'Sídney, Australia',      atletas:10651, paises:199, deportes:28, abiertos:'15 sep', cerrados:'1 oct' },
    { año:1996, sede:'Atlanta, EE.UU.',        atletas:10318, paises:197, deportes:26, abiertos:'19 jul', cerrados:'4 ago' },
    { año:1992, sede:'Barcelona, España',      atletas:9356,  paises:169, deportes:25, abiertos:'25 jul', cerrados:'9 ago' },
    { año:1988, sede:'Seúl, Corea del Sur',    atletas:8391,  paises:159, deportes:23, abiertos:'17 sep', cerrados:'1 oct' },
    { año:1984, sede:'Los Ángeles, EE.UU.',    atletas:6829,  paises:140, deportes:21, abiertos:'28 jul', cerrados:'12 ago', nota:'Boicot soviético' },
    { año:1980, sede:'Moscú, URSS',            atletas:5179,  paises:80,  deportes:21, abiertos:'19 jul', cerrados:'3 ago', nota:'Boicot occidental' },
    { año:1976, sede:'Montreal, Canadá',       atletas:6084,  paises:92,  deportes:21, abiertos:'17 jul', cerrados:'1 ago' },
    { año:1972, sede:'Múnich, Alemania Occ.',  atletas:7134,  paises:121, deportes:21, abiertos:'11 ago', cerrados:'11 sep', nota:'Masacre israelí' },
    { año:1968, sede:'Ciudad de México, México', atletas:5516, paises:112, deportes:18, abiertos:'12 oct', cerrados:'27 oct' },
    { año:1964, sede:'Tokio, Japón',           atletas:5151,  paises:93,  deportes:19, abiertos:'10 oct', cerrados:'24 oct' },
    { año:1960, sede:'Roma, Italia',           atletas:5338,  paises:83,  deportes:17, abiertos:'25 ago', cerrados:'11 sep' },
    { año:1956, sede:'Melbourne, Australia',   atletas:3314,  paises:72,  deportes:17, abiertos:'22 nov', cerrados:'8 dic' },
    { año:1952, sede:'Helsinki, Finlandia',    atletas:4955,  paises:69,  deportes:17, abiertos:'19 jul', cerrados:'3 ago' },
    { año:1948, sede:'Londres, Reino Unido',   atletas:4104,  paises:59,  deportes:17, abiertos:'29 jul', cerrados:'14 ago', nota:'Primeros post-WWII' },
    { año:1936, sede:'Berlín, Alemania',       atletas:3963,  paises:49,  deportes:19, abiertos:'1 ago',  cerrados:'16 ago', nota:'JJOO de Hitler y Jesse Owens' },
    { año:1932, sede:'Los Ángeles, EE.UU.',    atletas:1332,  paises:37,  deportes:14, abiertos:'30 jul', cerrados:'14 ago' },
    { año:1928, sede:'Ámsterdam, Países Bajos', atletas:2883, paises:46,  deportes:14, abiertos:'17 may', cerrados:'12 ago' },
    { año:1924, sede:'París, Francia',         atletas:3089,  paises:44,  deportes:17, abiertos:'4 may',  cerrados:'27 jul' },
    { año:1920, sede:'Amberes, Bélgica',       atletas:2626,  paises:29,  deportes:22, abiertos:'20 ago', cerrados:'12 sep', nota:'Post-WWI' },
    { año:1916, sede:'No celebrados',          atletas:null,  paises:null, deportes:null, nota:'No celebrados por WWI' },
    { año:1912, sede:'Estocolmo, Suecia',      atletas:2407,  paises:28,  deportes:14, abiertos:'5 may',  cerrados:'22 jul' },
    { año:1908, sede:'Londres, Reino Unido',   atletas:2008,  paises:22,  deportes:24, abiertos:'13 jul', cerrados:'25 oct' },
    { año:1906, sede:'Atenas, Grecia',         atletas:884,   paises:20,  deportes:12, abiertos:'22 abr', cerrados:'2 may', nota:'Intercalados, no oficiales' },
    { año:1904, sede:'St. Louis, EE.UU.',      atletas:651,   paises:12,  deportes:18, abiertos:'1 jul',  cerrados:'23 nov' },
    { año:1900, sede:'París, Francia',         atletas:997,   paises:24,  deportes:17, abiertos:'20 may', cerrados:'28 oct' },
    { año:1896, sede:'Atenas, Grecia',         atletas:241,   paises:14,  deportes:9,  abiertos:'6 abr',  cerrados:'15 abr' },
  ],

  /* ── PARIS 2024 — TABLA DE MEDALLAS ──────────────────── */
  paris2024: {
    lema: 'Ouvrons grand les Jeux',
    mascota: 'Phryge',
    deportes: 32,
    disciplinas: 48,
    eventos: 329,
    paridad_genero: true,
    ceremonia_apertura: 'Río Sena, París (primera vez fuera de un estadio)',
    nuevo_deporte: 'Breaking (Breakdance)',
    medallaTable: [
      { pos:1,  pais:'Estados Unidos',   bandera:'🇺🇸', oro:40, plata:44, bronce:42, total:126 },
      { pos:2,  pais:'China',            bandera:'🇨🇳', oro:40, plata:27, bronce:24, total:91  },
      { pos:3,  pais:'Gran Bretaña',     bandera:'🇬🇧', oro:14, plata:22, bronce:29, total:65  },
      { pos:4,  pais:'Australia',        bandera:'🇦🇺', oro:18, plata:19, bronce:16, total:53  },
      { pos:5,  pais:'Francia',          bandera:'🇫🇷', oro:16, plata:26, bronce:22, total:64  },
      { pos:6,  pais:'Países Bajos',     bandera:'🇳🇱', oro:15, plata:7,  bronce:12, total:34  },
      { pos:7,  pais:'Corea del Sur',    bandera:'🇰🇷', oro:13, plata:9,  bronce:10, total:32  },
      { pos:8,  pais:'Italia',           bandera:'🇮🇹', oro:12, plata:13, bronce:15, total:40  },
      { pos:9,  pais:'Alemania',         bandera:'🇩🇪', oro:12, plata:13, bronce:8,  total:33  },
      { pos:10, pais:'Nueva Zelanda',    bandera:'🇳🇿', oro:10, plata:7,  bronce:3,  total:20  },
      { pos:11, pais:'Canadá',           bandera:'🇨🇦', oro:9,  plata:7,  bronce:11, total:27  },
      { pos:12, pais:'Uzbekistán',       bandera:'🇺🇿', oro:8,  plata:2,  bronce:3,  total:13  },
      { pos:13, pais:'Hungría',          bandera:'🇭🇺', oro:6,  plata:7,  bronce:6,  total:19  },
      { pos:14, pais:'España',           bandera:'🇪🇸', oro:5,  plata:4,  bronce:9,  total:18  },
      { pos:15, pais:'Kenia',            bandera:'🇰🇪', oro:4,  plata:2,  bronce:5,  total:11  },
      { pos:16, pais:'Irlanda',          bandera:'🇮🇪', oro:4,  plata:0,  bronce:3,  total:7   },
      { pos:17, pais:'Brasil',           bandera:'🇧🇷', oro:3,  plata:7,  bronce:10, total:20  },
      { pos:18, pais:'Japón',            bandera:'🇯🇵', oro:20, plata:12, bronce:13, total:45  },
      { pos:19, pais:'Rumania',          bandera:'🇷🇴', oro:3,  plata:4,  bronce:5,  total:12  },
      { pos:20, pais:'Suecia',           bandera:'🇸🇪', oro:4,  plata:4,  bronce:3,  total:11  },
    ],
    masDecorados: [
      { jugador:'Leon Marchand',     pais:'🇫🇷 Francia',   deporte:'Natación',         oro:4, plata:0, bronce:1, total:5, nota:'Ganó 4 oros individuales' },
      { jugador:'Torri Huske',       pais:'🇺🇸 EE.UU.',    deporte:'Natación',         oro:3, plata:2, bronce:0, total:5, nota:'' },
      { jugador:'Mollie O\'Callaghan',pais:'🇦🇺 Australia', deporte:'Natación',        oro:3, plata:1, bronce:1, total:5, nota:'' },
      { jugador:'Regan Smith',       pais:'🇺🇸 EE.UU.',    deporte:'Natación',         oro:2, plata:3, bronce:0, total:5, nota:'' },
      { jugador:'Kaylee McKeown',    pais:'🇦🇺 Australia', deporte:'Natación',         oro:2, plata:1, bronce:2, total:5, nota:'' },
      { jugador:'Caeleb Dressel',    pais:'🇺🇸 EE.UU.',    deporte:'Natación',         oro:2, plata:2, bronce:0, total:4, nota:'' },
      { jugador:'Carlos Alcaraz',    pais:'🇪🇸 España',    deporte:'Tenis',            oro:1, plata:0, bronce:0, total:1, nota:'Ganó dobles con Rafa Nadal' },
      { jugador:'Simone Biles',      pais:'🇺🇸 EE.UU.',    deporte:'Gimnasia',         oro:3, plata:1, bronce:0, total:4, nota:'Regreso triunfal en París' },
      { jugador:'Mondo Duplantis',   pais:'🇸🇪 Suecia',    deporte:'Atletismo',        oro:1, plata:0, bronce:0, total:1, nota:'Récord mundial salto pértiga: 6.25m' },
      { jugador:'Marcell Jacobs',    pais:'🇮🇹 Italia',    deporte:'Atletismo',        oro:1, plata:0, bronce:0, total:1, nota:'100m planos' },
    ],
    deportes: [
      '🏊 Acuáticos (Natación, Clavados, Aguas abiertas, Sincronizado, Water Polo)',
      '🏹 Tiro con arco','🏃 Atletismo','🏸 Bádminton','🏀 Baloncesto',
      '💃 Breaking (NUEVO)','🛶 Piragüismo','🚴 Ciclismo','🏇 Equitación',
      '🤺 Esgrima','⚽ Fútbol','⛳ Golf','🤸 Gimnasia','🤾 Balonmano',
      '🏑 Hockey','🥋 Judo','🏄 Surf','🏓 Tenis de mesa','🥊 Boxeo',
      '🚣 Remo','🏉 Rugby 7','⛵ Vela','🔫 Tiro','🧗 Escalada deportiva',
      '🛹 Skateboarding','🎾 Tenis','🏊 Triatlón','🏐 Vóley (playa/sala)',
      '🏋️ Halterofilia','🤼 Lucha','🤸 Pentatlón Moderno',
    ]
  },

  /* ── TOKIO 2020 (celebrado 2021) ─────────────────────── */
  tokio2020: {
    medallaTable: [
      { pos:1,  pais:'Estados Unidos', bandera:'🇺🇸', oro:39, plata:41, bronce:33, total:113 },
      { pos:2,  pais:'China',          bandera:'🇨🇳', oro:38, plata:32, bronce:18, total:88  },
      { pos:3,  pais:'Gran Bretaña',   bandera:'🇬🇧', oro:22, plata:21, bronce:22, total:65  },
      { pos:4,  pais:'Japón',          bandera:'🇯🇵', oro:27, plata:14, bronce:17, total:58  },
      { pos:5,  pais:'Australia',      bandera:'🇦🇺', oro:17, plata:7,  bronce:22, total:46  },
      { pos:6,  pais:'Italia',         bandera:'🇮🇹', oro:10, plata:10, bronce:20, total:40  },
      { pos:7,  pais:'Alemania',       bandera:'🇩🇪', oro:10, plata:11, bronce:16, total:37  },
      { pos:8,  pais:'Nueva Zelanda',  bandera:'🇳🇿', oro:7,  plata:6,  bronce:7,  total:20  },
      { pos:9,  pais:'Canadá',         bandera:'🇨🇦', oro:7,  plata:6,  bronce:11, total:24  },
      { pos:10, pais:'Brasil',         bandera:'🇧🇷', oro:7,  plata:6,  bronce:8,  total:21  },
    ]
  },

  /* ── TABLA HISTÓRICA (Summer Olympics all-time) ──────── */
  historico: {
    descripcion: 'Medallas acumuladas en todos los Juegos Olímpicos de Verano',
    paises: [
      { pos:1,  pais:'Estados Unidos', bandera:'🇺🇸', oro:1127, plata:907,  bronce:793, total:2827 },
      { pos:2,  pais:'Unión Soviética',bandera:'🇷🇺', oro:395,  plata:319,  bronce:296, total:1010 },
      { pos:3,  pais:'Gran Bretaña',   bandera:'🇬🇧', oro:284,  plata:299,  bronce:308, total:891  },
      { pos:4,  pais:'Alemania',       bandera:'🇩🇪', oro:283,  plata:290,  bronce:320, total:893  },
      { pos:5,  pais:'China',          bandera:'🇨🇳', oro:280,  plata:233,  bronce:211, total:724  },
      { pos:6,  pais:'Francia',        bandera:'🇫🇷', oro:224,  plata:249,  bronce:260, total:733  },
      { pos:7,  pais:'Italia',         bandera:'🇮🇹', oro:214,  plata:193,  bronce:215, total:622  },
      { pos:8,  pais:'Suecia',         bandera:'🇸🇪', oro:199,  plata:211,  bronce:237, total:647  },
      { pos:9,  pais:'Hungría',        bandera:'🇭🇺', oro:180,  plata:155,  bronce:178, total:513  },
      { pos:10, pais:'Australia',      bandera:'🇦🇺', oro:171,  plata:172,  bronce:186, total:529  },
      { pos:11, pais:'Japón',          bandera:'🇯🇵', oro:170, plata:143, bronce:182, total:495  },
      { pos:12, pais:'Rusia (post-URSS)',bandera:'🇷🇺', oro:190, plata:162, bronce:177, total:529 },
      { pos:13, pais:'Finlandia',      bandera:'🇫🇮', oro:101, plata:85,  bronce:117, total:303  },
      { pos:14, pais:'Corea del Sur',  bandera:'🇰🇷', oro:96,  plata:90,  bronce:90,  total:276  },
      { pos:15, pais:'Cuba',           bandera:'🇨🇺', oro:81,  plata:68,  bronce:78,  total:227  },
      { pos:16, pais:'Rumania',        bandera:'🇷🇴', oro:89,  plata:95,  bronce:122, total:306  },
      { pos:17, pais:'Noruega',        bandera:'🇳🇴', oro:60,  plata:53,  bronce:47,  total:160  },
      { pos:18, pais:'Polonia',        bandera:'🇵🇱', oro:69,  plata:83,  bronce:131, total:283  },
      { pos:19, pais:'Países Bajos',   bandera:'🇳🇱', oro:96,  plata:102, bronce:128, total:326  },
      { pos:20, pais:'Suiza',          bandera:'🇨🇭', oro:51,  plata:59,  bronce:72,  total:182  },
      { pos:21, pais:'Dinamarca',      bandera:'🇩🇰', oro:46,  plata:74,  bronce:75,  total:195  },
      { pos:22, pais:'España',         bandera:'🇪🇸', oro:47,  plata:72,  bronce:71,  total:190  },
      { pos:23, pais:'Brasil',         bandera:'🇧🇷', oro:37,  plata:44,  bronce:72,  total:153  },
      { pos:24, pais:'Kenya',          bandera:'🇰🇪', oro:34,  plata:41,  bronce:49,  total:124  },
      { pos:25, pais:'Argentina',      bandera:'🇦🇷', oro:23,  plata:25,  bronce:28,  total:76   },
      { pos:26, pais:'Chile',          bandera:'🇨🇱', oro:2,   plata:10,  bronce:5,   total:17   },
    ],
    medallistas: [
      {nombre:'Michael Phelps', pais:'🇺🇸 EE.UU.', deporte:'Natación', oro:23, plata:3, bronce:2, total:28, jjoo:'2000-2016', nota:'El atleta más condecorado de la historia olímpica'},
      {nombre:'Larisa Latynina', pais:'🇷🇺 URSS', deporte:'Gimnasia', oro:9, plata:5, bronce:4, total:18, jjoo:'1956-1964', nota:'Récord femenino histórico'},
      {nombre:'Paavo Nurmi', pais:'🇫🇮 Finlandia', deporte:'Atletismo', oro:9, plata:3, bronce:0, total:12, jjoo:'1920-1928', nota:'El finlandés volador'},
      {nombre:'Mark Spitz', pais:'🇺🇸 EE.UU.', deporte:'Natación', oro:9, plata:1, bronce:1, total:11, jjoo:'1968-1972', nota:'7 oros en Múnich 1972'},
      {nombre:'Carl Lewis', pais:'🇺🇸 EE.UU.', deporte:'Atletismo', oro:9, plata:1, bronce:0, total:10, jjoo:'1984-1996', nota:'El atleta del siglo XX'},
      {nombre:'Birgit Fischer', pais:'🇩🇪 Alemania', deporte:'Piragüismo', oro:8, plata:4, bronce:0, total:12, jjoo:'1980-2004', nota:'Medallas en 5 Juegos'},
      {nombre:'Simone Biles', pais:'🇺🇸 EE.UU.', deporte:'Gimnasia', oro:7, plata:2, bronce:2, total:11, jjoo:'2016-2024', nota:'La mayor gimnasta de todos los tiempos'},
      {nombre:'Usain Bolt', pais:'🇯🇲 Jamaica', deporte:'Atletismo', oro:8, plata:0, bronce:0, total:8, jjoo:'2008-2016', nota:'Triple triple: 100m, 200m, 4x100m en 3 JJOO'},
    ]
  },

  /* ── JUEGOS DE INVIERNO (Winter Olympics) ────────────── */
  invierno: {
    proximos: 'Milán-Cortina 2026 (Italia)',
    ultimos: {
      año: 2022, sede: 'Pekín, China',
      medallasTop5: [
        { pais:'Noruega',         bandera:'🇳🇴', oro:16, plata:8,  bronce:13, total:37 },
        { pais:'Alemania',        bandera:'🇩🇪', oro:12, plata:10, bronce:5,  total:27 },
        { pais:'China',           bandera:'🇨🇳', oro:9,  plata:4,  bronce:2,  total:15 },
        { pais:'Estados Unidos',  bandera:'🇺🇸', oro:8,  plata:10, bronce:7,  total:25 },
        { pais:'Suecia',          bandera:'🇸🇪', oro:8,  plata:5,  bronce:5,  total:18 },
      ]
    }
  },

  /* ── PRÓXIMAS EDICIONES ───────────────────────────────── */
  proximos: [
    { año:2026, tipo:'Invierno', sede:'Milán-Cortina, Italia',   deportes:16, nota:'Primera vez en Italia · Feb-Mar 2026' },
    { año:2028, tipo:'Verano',   sede:'Los Ángeles, EE.UU.',     deportes:32, nota:'LA acoge por 3ª vez · Jul-Ago 2028' },
    { año:2030, tipo:'Invierno', sede:'Alpes Franceses, Francia',deportes:16, nota:'Grenoble, Barcelonnette y Briançon' },
    { año:2032, tipo:'Verano',   sede:'Brisbane, Australia',     deportes:32, nota:'1er JJOO en hemisferio sur desde Sídney 2000' },
    { año:2034, tipo:'Invierno', sede:'Salt Lake City, EE.UU.',  deportes:16, nota:'JJOO de Invierno 50 años después (1984)' },
  ],

  /* ── MEDALLISTAS HISTÓRICOS MÁS CONDECORADOS ─────────── */
  medallistas: [
    {nombre:'Michael Phelps',    pais:'🇺🇸 EE.UU.',    deporte:'Natación',    oro:23, plata:3,  bronce:2,  total:28, jjoo:'2000-2016', nota:'El atleta más condecorado de la historia olímpica'},
    {nombre:'Larisa Latynina',   pais:'🇷🇺 URSS',       deporte:'Gimnasia',    oro:9,  plata:5,  bronce:4,  total:18, jjoo:'1956-1964', nota:'Récord femenino histórico de medallas'},
    {nombre:'Paavo Nurmi',       pais:'🇫🇮 Finlandia',  deporte:'Atletismo',   oro:9,  plata:3,  bronce:0,  total:12, jjoo:'1920-1928', nota:'El finlandés volador'},
    {nombre:'Mark Spitz',        pais:'🇺🇸 EE.UU.',    deporte:'Natación',    oro:9,  plata:1,  bronce:1,  total:11, jjoo:'1968-1972', nota:'7 oros en Múnich 1972'},
    {nombre:'Carl Lewis',        pais:'🇺🇸 EE.UU.',    deporte:'Atletismo',   oro:9,  plata:1,  bronce:0,  total:10, jjoo:'1984-1996', nota:'El atleta del siglo XX'},
    {nombre:'Birgit Fischer',    pais:'🇩🇪 Alemania',   deporte:'Piragüismo',  oro:8,  plata:4,  bronce:0,  total:12, jjoo:'1980-2004', nota:'Medallas en 5 Juegos distintos'},
    {nombre:'Usain Bolt',        pais:'🇯🇲 Jamaica',    deporte:'Atletismo',   oro:8,  plata:0,  bronce:0,  total:8,  jjoo:'2008-2016', nota:'Triple triple: 100m, 200m, 4x100m en 3 JJOO'},
    {nombre:'Simone Biles',      pais:'🇺🇸 EE.UU.',    deporte:'Gimnasia',    oro:7,  plata:2,  bronce:2,  total:11, jjoo:'2016-2024', nota:'La mayor gimnasta de todos los tiempos'},
    {nombre:'Nikolai Andrianov', pais:'🇷🇺 URSS',       deporte:'Gimnasia',    oro:7,  plata:5,  bronce:3,  total:15, jjoo:'1972-1980', nota:'Leyenda soviética de la gimnasia'},
    {nombre:'Boris Shakhlin',    pais:'🇷🇺 URSS',       deporte:'Gimnasia',    oro:7,  plata:4,  bronce:2,  total:13, jjoo:'1956-1964', nota:''},
    {nombre:'Edoardo Mangiarotti',pais:'🇮🇹 Italia',    deporte:'Esgrima',     oro:6,  plata:5,  bronce:2,  total:13, jjoo:'1936-1960', nota:'El esgrimista más condecorado de la historia'},
    {nombre:'Katie Ledecky',     pais:'🇺🇸 EE.UU.',    deporte:'Natación',    oro:9,  plata:4,  bronce:0,  total:13, jjoo:'2012-2024', nota:'La mejor nadadora de fondo de la historia'},
    {nombre:'Allyson Felix',     pais:'🇺🇸 EE.UU.',    deporte:'Atletismo',   oro:7,  plata:3,  bronce:0,  total:10, jjoo:'2004-2020', nota:'La atleta más condecorada de JJOO en atletismo'},
    {nombre:'Leon Marchand',     pais:'🇫🇷 Francia',    deporte:'Natación',    oro:4,  plata:0,  bronce:1,  total:5,  jjoo:'2024',      nota:'4 oros en París 2024 — la revelación olímpica'},
  ],

};

console.log('[SS21 Olympics] Datos cargados ✓ — París 2024, Tokio 2020, histórico all-time, medallistas');
