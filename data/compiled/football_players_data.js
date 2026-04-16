/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Plantillas de Fútbol
   Temporada de referencia: 2024-25
   Fuente: Transfermarkt (referencia), datos públicos
   Campos: nombre, dorsal, pos, nac (bandera), naci (año nac.),
           alt (cm), pes (kg), pie (D/I/A), vm (valor mercado),
           cap (capitán boolean), g/as/pj (stats temporada)
═══════════════════════════════════════════════════════════ */
window.SS21 = window.SS21 || {};
window.SS21.plantillas = {

  /* ──────────────────────────────────────────────────────────
     🇨🇱  LIGA CHILENA
  ────────────────────────────────────────────────────────── */
  'Chile': {
    'Colo-Colo': {
      capitan_actual: 'Esteban Pavez',
      capitanes: [
        { temp:'2024', nombre:'Esteban Pavez' },
        { temp:'2023', nombre:'Esteban Pavez' },
        { temp:'2022', nombre:'Esteban Pavez' },
        { temp:'2021', nombre:'Gabriel Suazo' },
        { temp:'2020', nombre:'Gabriel Suazo' },
        { temp:'2019', nombre:'Julio Barroso' }
      ],
      plantilla: [
        { nombre:'Brayan Cortés',     dorsal:1,  pos:'PO', nac:'🇨🇱', naci:1993, alt:190, pes:85, pie:'D', vm:'1.2M€', cap:false, g:0,  as:0, pj:30 },
        { nombre:'Fernando De Paul',  dorsal:12, pos:'PO', nac:'🇨🇱', naci:2001, alt:188, pes:82, pie:'D', vm:'0.3M€', cap:false, g:0,  as:0, pj:4  },
        { nombre:'Oscar Opazo',       dorsal:2,  pos:'LD', nac:'🇨🇱', naci:1994, alt:177, pes:73, pie:'D', vm:'0.5M€', cap:false, g:1,  as:3, pj:28 },
        { nombre:'Emiliano Amor',     dorsal:4,  pos:'CB', nac:'🇦🇷', naci:1995, alt:185, pes:78, pie:'D', vm:'0.8M€', cap:false, g:2,  as:1, pj:30 },
        { nombre:'Maximiliano Falcón',dorsal:3,  pos:'CB', nac:'🇺🇾', naci:1997, alt:181, pes:77, pie:'D', vm:'1.2M€', cap:false, g:1,  as:0, pj:25 },
        { nombre:'Óscar Ledezma',     dorsal:5,  pos:'LI', nac:'🇨🇱', naci:2000, alt:175, pes:70, pie:'I', vm:'0.4M€', cap:false, g:0,  as:2, pj:22 },
        { nombre:'Esteban Pavez',     dorsal:8,  pos:'MC', nac:'🇨🇱', naci:1991, alt:175, pes:68, pie:'D', vm:'0.5M€', cap:true,  g:3,  as:4, pj:33 },
        { nombre:'Arturo Vidal',      dorsal:22, pos:'MC', nac:'🇨🇱', naci:1987, alt:181, pes:81, pie:'D', vm:'2.0M€', cap:false, g:4,  as:3, pj:24 },
        { nombre:'Carlos Palacios',   dorsal:11, pos:'EI', nac:'🇨🇱', naci:2001, alt:175, pes:70, pie:'D', vm:'8.0M€', cap:false, g:11, as:6, pj:30 },
        { nombre:'Lucas Cepeda',      dorsal:17, pos:'ED', nac:'🇨🇱', naci:2004, alt:172, pes:65, pie:'D', vm:'2.0M€', cap:false, g:5,  as:4, pj:28 },
        { nombre:'Damián Pizarro',    dorsal:9,  pos:'DC', nac:'🇨🇱', naci:2005, alt:182, pes:76, pie:'D', vm:'5.0M€', cap:false, g:10, as:3, pj:29 },
        { nombre:'Javier Correa',     dorsal:10, pos:'DC', nac:'🇦🇷', naci:1992, alt:178, pes:73, pie:'D', vm:'1.0M€', cap:false, g:7,  as:2, pj:26 },
        { nombre:'Leonardo Gil',      dorsal:14, pos:'MA', nac:'🇦🇷', naci:1992, alt:172, pes:68, pie:'D', vm:'0.6M€', cap:false, g:2,  as:5, pj:27 },
        { nombre:'Alan Saldivia',     dorsal:7,  pos:'ED', nac:'🇨🇱', naci:2001, alt:170, pes:65, pie:'D', vm:'1.5M€', cap:false, g:4,  as:3, pj:25 }
      ]
    },
    'Universidad de Chile': {
      capitan_actual: 'Leandro Fernández',
      capitanes: [
        { temp:'2024', nombre:'Leandro Fernández' },
        { temp:'2023', nombre:'Leandro Fernández' },
        { temp:'2022', nombre:'Matías Zaldivia' },
        { temp:'2021', nombre:'Jean Beausejour' },
        { temp:'2020', nombre:'Jean Beausejour' }
      ],
      plantilla: [
        { nombre:'Martín Parra',        dorsal:1,  pos:'PO', nac:'🇨🇱', naci:1994, alt:185, pes:82, pie:'D', vm:'0.4M€', cap:false, g:0,  as:0, pj:28 },
        { nombre:'Cristóbal Campos',    dorsal:12, pos:'PO', nac:'🇨🇱', naci:2000, alt:191, pes:86, pie:'D', vm:'1.0M€', cap:false, g:0,  as:0, pj:8  },
        { nombre:'Marcelo Morales',     dorsal:3,  pos:'LI', nac:'🇨🇱', naci:2001, alt:173, pes:67, pie:'I', vm:'1.5M€', cap:false, g:2,  as:4, pj:31 },
        { nombre:'Matías Zaldivia',     dorsal:4,  pos:'CB', nac:'🇦🇷', naci:1990, alt:184, pes:76, pie:'D', vm:'0.4M€', cap:false, g:1,  as:0, pj:20 },
        { nombre:'Ignacio Tapia',       dorsal:5,  pos:'CB', nac:'🇨🇱', naci:2001, alt:183, pes:78, pie:'D', vm:'0.8M€', cap:false, g:0,  as:1, pj:26 },
        { nombre:'Álvaro Brun',         dorsal:2,  pos:'LD', nac:'🇨🇱', naci:2002, alt:176, pes:70, pie:'D', vm:'0.6M€', cap:false, g:1,  as:2, pj:24 },
        { nombre:'Leandro Fernández',   dorsal:10, pos:'MC', nac:'🇦🇷', naci:1998, alt:174, pes:67, pie:'D', vm:'2.0M€', cap:true,  g:5,  as:8, pj:32 },
        { nombre:'Rodrigo Echeverría',  dorsal:8,  pos:'MC', nac:'🇨🇱', naci:2002, alt:176, pes:70, pie:'D', vm:'1.0M€', cap:false, g:3,  as:4, pj:30 },
        { nombre:'Lucas Assadi',        dorsal:7,  pos:'MA', nac:'🇨🇱', naci:2004, alt:172, pes:65, pie:'I', vm:'3.0M€', cap:false, g:6,  as:7, pj:31 },
        { nombre:'Nicolás Guerra',      dorsal:9,  pos:'DC', nac:'🇻🇪', naci:1999, alt:184, pes:78, pie:'D', vm:'3.0M€', cap:false, g:14, as:4, pj:30 },
        { nombre:'Darío Osorio',        dorsal:11, pos:'ED', nac:'🇨🇱', naci:2004, alt:178, pes:72, pie:'D', vm:'10.0M€',cap:false, g:8,  as:6, pj:28 },
        { nombre:'Renato Cordero',      dorsal:6,  pos:'MD', nac:'🇨🇱', naci:1999, alt:179, pes:74, pie:'D', vm:'0.5M€', cap:false, g:1,  as:2, pj:22 }
      ]
    },
    'Universidad Católica': {
      capitan_actual: 'Fernando Zampedri',
      capitanes: [
        { temp:'2024', nombre:'Fernando Zampedri' },
        { temp:'2023', nombre:'Fernando Zampedri' },
        { temp:'2022', nombre:'Fernando Zampedri' },
        { temp:'2021', nombre:'Germán Lanaro' },
        { temp:'2020', nombre:'José Pedro Fuenzalida' }
      ],
      plantilla: [
        { nombre:'Sebastián Pérez',    dorsal:1,  pos:'PO', nac:'🇨🇱', naci:1993, alt:188, pes:83, pie:'D', vm:'0.3M€', cap:false, g:0,  as:0, pj:30 },
        { nombre:'Clemente Montes',    dorsal:4,  pos:'CB', nac:'🇨🇱', naci:1997, alt:184, pes:78, pie:'D', vm:'2.0M€', cap:false, g:1,  as:0, pj:28 },
        { nombre:'César Fuentes',      dorsal:3,  pos:'CB', nac:'🇨🇱', naci:1989, alt:183, pes:76, pie:'D', vm:'0.4M€', cap:false, g:0,  as:1, pj:22 },
        { nombre:'Thomas Gillier',     dorsal:2,  pos:'LD', nac:'🇨🇱', naci:2001, alt:176, pes:71, pie:'D', vm:'0.6M€', cap:false, g:1,  as:3, pj:27 },
        { nombre:'Alfonso Parot',      dorsal:6,  pos:'LI', nac:'🇨🇱', naci:1998, alt:178, pes:72, pie:'I', vm:'0.8M€', cap:false, g:0,  as:2, pj:25 },
        { nombre:'Ariel Holan',        dorsal:8,  pos:'MC', nac:'🇨🇱', naci:1994, alt:175, pes:70, pie:'D', vm:'0.5M€', cap:false, g:2,  as:3, pj:28 },
        { nombre:'Felipe Gutiérrez',   dorsal:14, pos:'MC', nac:'🇨🇱', naci:1990, alt:177, pes:73, pie:'D', vm:'0.4M€', cap:false, g:1,  as:2, pj:20 },
        { nombre:'Edson Puch',         dorsal:7,  pos:'ED', nac:'🇨🇱', naci:1989, alt:177, pes:73, pie:'D', vm:'0.3M€', cap:false, g:4,  as:3, pj:24 },
        { nombre:'Fernando Zampedri',  dorsal:9,  pos:'DC', nac:'🇦🇷', naci:1990, alt:183, pes:82, pie:'D', vm:'1.5M€', cap:true,  g:15, as:3, pj:31 },
        { nombre:'Diego Valencia',     dorsal:11, pos:'EI', nac:'🇨🇱', naci:2000, alt:174, pes:68, pie:'I', vm:'1.2M€', cap:false, g:7,  as:5, pj:29 },
        { nombre:'Marcelino Núñez',    dorsal:10, pos:'MA', nac:'🇨🇱', naci:2001, alt:177, pes:70, pie:'D', vm:'6.0M€', cap:false, g:5,  as:6, pj:26 }
      ]
    }
  ,
    'Coquimbo Unido': {
      capitan_actual: 'Fernando Cordero',
      capitanes: [
        { temp:'2025', nombre:'Fernando Cordero' },
        { temp:'2024', nombre:'Fernando Cordero' }
      ],
      plantilla: [
        { nombre:'Ignacio González',     dorsal:1,  pos:'PO', nac:'🇨🇱', naci:1992, alt:186, pes:82, pie:'D', vm:'0.2M€', cap:false, g:0,  as:0, pj:32 },
        { nombre:'Rodrigo Piñeiro',      dorsal:2,  pos:'LD', nac:'🇨🇱', naci:1998, alt:176, pes:70, pie:'D', vm:'0.3M€', cap:false, g:1,  as:2, pj:28 },
        { nombre:'Nicolás Morán',        dorsal:4,  pos:'CB', nac:'🇨🇱', naci:1994, alt:183, pes:78, pie:'D', vm:'0.4M€', cap:false, g:2,  as:0, pj:30 },
        { nombre:'Paulo Díaz',           dorsal:5,  pos:'CB', nac:'🇨🇱', naci:1992, alt:180, pes:76, pie:'D', vm:'0.5M€', cap:false, g:1,  as:1, pj:28 },
        { nombre:'Fernando Cordero',     dorsal:3,  pos:'LI', nac:'🇨🇱', naci:1991, alt:174, pes:68, pie:'I', vm:'0.3M€', cap:true,  g:1,  as:3, pj:33 },
        { nombre:'Cristian Álvarez',     dorsal:6,  pos:'MC', nac:'🇨🇱', naci:1996, alt:177, pes:72, pie:'D', vm:'0.4M€', cap:false, g:3,  as:4, pj:31 },
        { nombre:'Sebastián Hernández',  dorsal:8,  pos:'MC', nac:'🇨🇱', naci:1998, alt:175, pes:70, pie:'D', vm:'0.5M€', cap:false, g:4,  as:5, pj:30 },
        { nombre:'Matías Concha',        dorsal:10, pos:'MA', nac:'🇨🇱', naci:2000, alt:173, pes:66, pie:'D', vm:'0.6M€', cap:false, g:6,  as:7, pj:32 },
        { nombre:'Jonathan Benítez',     dorsal:11, pos:'ED', nac:'🇨🇱', naci:1997, alt:171, pes:65, pie:'D', vm:'0.5M€', cap:false, g:5,  as:6, pj:30 },
        { nombre:'Alexis Cárdenas',      dorsal:7,  pos:'EI', nac:'🇨🇱', naci:2001, alt:172, pes:67, pie:'I', vm:'0.4M€', cap:false, g:4,  as:3, pj:28 },
        { nombre:'Andrés Vilches',       dorsal:9,  pos:'DC', nac:'🇨🇱', naci:1995, alt:179, pes:75, pie:'D', vm:'0.5M€', cap:false, g:11, as:3, pj:33 },
        { nombre:'Mauricio Morales',     dorsal:14, pos:'DC', nac:'🇨🇱', naci:1997, alt:181, pes:78, pie:'D', vm:'0.3M€', cap:false, g:7,  as:2, pj:26 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🏴󠁧󠁢󠁥󠁮󠁧󠁿  PREMIER LEAGUE
  ────────────────────────────────────────────────────────── */
  'Premier': {
    'Arsenal': {
      capitan_actual: 'Martin Ødegaard',
      capitanes: [
        { temp:'2024-25', nombre:'Martin Ødegaard' },
        { temp:'2023-24', nombre:'Martin Ødegaard' },
        { temp:'2022-23', nombre:'Martin Ødegaard' },
        { temp:'2021-22', nombre:'Alexandre Lacazette' },
        { temp:'2020-21', nombre:'Pierre-Emerick Aubameyang' },
        { temp:'2019-20', nombre:'Pierre-Emerick Aubameyang' }
      ],
      plantilla: [
        { nombre:'David Raya',           dorsal:22, pos:'PO', nac:'🇪🇸', naci:1995, alt:183, pes:77, pie:'D', vm:'35M€',  cap:false, g:0,  as:0, pj:34 },
        { nombre:'Ben White',            dorsal:4,  pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:186, pes:75, pie:'D', vm:'60M€',  cap:false, g:1,  as:6, pj:26 },
        { nombre:'William Saliba',       dorsal:12, pos:'CB', nac:'🇫🇷', naci:2001, alt:192, pes:82, pie:'D', vm:'90M€',  cap:false, g:2,  as:1, pj:33 },
        { nombre:'Gabriel Magalhães',    dorsal:6,  pos:'CB', nac:'🇧🇷', naci:1997, alt:191, pes:79, pie:'I', vm:'75M€',  cap:false, g:5,  as:1, pj:30 },
        { nombre:'Oleksandr Zinchenko',  dorsal:35, pos:'LI', nac:'🇺🇦', naci:1996, alt:175, pes:64, pie:'I', vm:'35M€',  cap:false, g:0,  as:3, pj:18 },
        { nombre:'Thomas Partey',        dorsal:5,  pos:'MD', nac:'🇬🇭', naci:1993, alt:185, pes:77, pie:'D', vm:'30M€',  cap:false, g:1,  as:2, pj:20 },
        { nombre:'Declan Rice',          dorsal:41, pos:'MC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1999, alt:185, pes:80, pie:'D', vm:'110M€', cap:false, g:7,  as:8, pj:36 },
        { nombre:'Martin Ødegaard',      dorsal:8,  pos:'MA', nac:'🇳🇴', naci:1998, alt:178, pes:68, pie:'D', vm:'120M€', cap:true,  g:8,  as:9, pj:23 },
        { nombre:'Bukayo Saka',          dorsal:7,  pos:'ED', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2001, alt:178, pes:70, pie:'I', vm:'180M€', cap:false, g:15, as:11,pj:32 },
        { nombre:'Leandro Trossard',     dorsal:19, pos:'EI', nac:'🇧🇪', naci:1994, alt:172, pes:65, pie:'D', vm:'50M€',  cap:false, g:10, as:5, pj:30 },
        { nombre:'Gabriel Martinelli',   dorsal:11, pos:'EI', nac:'🇧🇷', naci:2001, alt:178, pes:75, pie:'D', vm:'75M€',  cap:false, g:8,  as:6, pj:28 },
        { nombre:'Kai Havertz',          dorsal:29, pos:'DC', nac:'🇩🇪', naci:1999, alt:190, pes:83, pie:'D', vm:'70M€',  cap:false, g:12, as:4, pj:33 },
        { nombre:'Raheem Sterling',      dorsal:30, pos:'EI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1994, alt:170, pes:69, pie:'D', vm:'25M€',  cap:false, g:2,  as:1, pj:15 },
        { nombre:'Jorginho',             dorsal:20, pos:'MC', nac:'🇮🇹', naci:1991, alt:180, pes:64, pie:'D', vm:'5M€',   cap:false, g:0,  as:1, pj:12 },
        { nombre:'Jurriën Timber',       dorsal:12, pos:'LD', nac:'🇳🇱', naci:2001, alt:180, pes:75, pie:'D', vm:'55M€',  cap:false, g:2,  as:4, pj:28 }
      ]
    },
    'Liverpool': {
      capitan_actual: 'Virgil van Dijk',
      capitanes: [
        { temp:'2024-25', nombre:'Virgil van Dijk' },
        { temp:'2023-24', nombre:'Virgil van Dijk' },
        { temp:'2022-23', nombre:'Jordan Henderson' }
      ],
      plantilla: [
        { nombre:'Alisson Becker',       dorsal:1,  pos:'PO', nac:'🇧🇷', naci:1992, alt:193, pes:91, pie:'D', vm:'40M€',  cap:false, g:0,  as:0,  pj:32 },
        { nombre:'Trent Alexander-Arnold',dorsal:66,pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1998, alt:175, pes:69, pie:'D', vm:'80M€',  cap:false, g:4,  as:12, pj:30 },
        { nombre:'Virgil van Dijk',      dorsal:4,  pos:'CB', nac:'🇳🇱', naci:1991, alt:193, pes:92, pie:'D', vm:'35M€',  cap:true,  g:3,  as:1,  pj:34 },
        { nombre:'Ibrahima Konaté',      dorsal:5,  pos:'CB', nac:'🇫🇷', naci:2001, alt:194, pes:95, pie:'D', vm:'60M€',  cap:false, g:2,  as:1,  pj:28 },
        { nombre:'Andrew Robertson',     dorsal:26, pos:'LI', nac:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', naci:1994, alt:178, pes:70, pie:'I', vm:'30M€',  cap:false, g:1,  as:8,  pj:26 },
        { nombre:'Conor Bradley',        dorsal:84, pos:'LD', nac:'🇮🇪', naci:2003, alt:179, pes:73, pie:'D', vm:'40M€',  cap:false, g:2,  as:4,  pj:22 },
        { nombre:'Ryan Gravenberch',     dorsal:38, pos:'MC', nac:'🇳🇱', naci:2002, alt:190, pes:80, pie:'D', vm:'60M€',  cap:false, g:4,  as:5,  pj:33 },
        { nombre:'Alexis Mac Allister',  dorsal:10, pos:'MC', nac:'🇦🇷', naci:1998, alt:174, pes:68, pie:'D', vm:'60M€',  cap:false, g:5,  as:7,  pj:30 },
        { nombre:'Dominik Szoboszlai',   dorsal:8,  pos:'MC', nac:'🇭🇺', naci:2000, alt:186, pes:79, pie:'I', vm:'60M€',  cap:false, g:6,  as:8,  pj:32 },
        { nombre:'Mohamed Salah',        dorsal:11, pos:'ED', nac:'🇪🇬', naci:1992, alt:175, pes:71, pie:'I', vm:'40M€',  cap:false, g:24, as:18, pj:35 },
        { nombre:'Luis Díaz',            dorsal:7,  pos:'EI', nac:'🇨🇴', naci:1997, alt:179, pes:72, pie:'I', vm:'80M€',  cap:false, g:16, as:6,  pj:33 },
        { nombre:'Diogo Jota',           dorsal:20, pos:'DC', nac:'🇵🇹', naci:1996, alt:178, pes:71, pie:'D', vm:'60M€',  cap:false, g:14, as:4,  pj:27 },
        { nombre:'Darwin Núñez',         dorsal:9,  pos:'DC', nac:'🇺🇾', naci:2000, alt:187, pes:81, pie:'D', vm:'70M€',  cap:false, g:12, as:8,  pj:29 },
        { nombre:'Cody Gakpo',           dorsal:18, pos:'EI', nac:'🇳🇱', naci:1999, alt:189, pes:79, pie:'I', vm:'60M€',  cap:false, g:10, as:7,  pj:30 },
        { nombre:'Curtis Jones',         dorsal:17, pos:'MC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2001, alt:180, pes:70, pie:'D', vm:'35M€',  cap:false, g:4,  as:5,  pj:26 }
      ]
    },
    'Manchester City': {
      capitan_actual: 'Kyle Walker',
      capitanes: [
        { temp:'2024-25', nombre:'Kyle Walker' },
        { temp:'2023-24', nombre:'Kyle Walker' },
        { temp:'2022-23', nombre:'İlkay Gündoğan' },
        { temp:'2021-22', nombre:'Fernandinho' },
        { temp:'2020-21', nombre:'Fernandinho' },
        { temp:'2019-20', nombre:'David Silva' }
      ],
      plantilla: [
        { nombre:'Ederson',              dorsal:31, pos:'PO', nac:'🇧🇷', naci:1993, alt:188, pes:88, pie:'D', vm:'30M€',  cap:false, g:0,  as:0, pj:28 },
        { nombre:'Kyle Walker',          dorsal:2,  pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1990, alt:178, pes:70, pie:'D', vm:'15M€',  cap:true,  g:0,  as:2, pj:22 },
        { nombre:'Rúben Dias',           dorsal:3,  pos:'CB', nac:'🇵🇹', naci:1997, alt:187, pes:76, pie:'D', vm:'70M€',  cap:false, g:2,  as:1, pj:30 },
        { nombre:'Manuel Akanji',        dorsal:25, pos:'CB', nac:'🇨🇭', naci:1995, alt:187, pes:85, pie:'D', vm:'45M€',  cap:false, g:1,  as:2, pj:28 },
        { nombre:'Joško Gvardiol',       dorsal:24, pos:'LI', nac:'🇭🇷', naci:2002, alt:185, pes:84, pie:'I', vm:'90M€',  cap:false, g:7,  as:3, pj:32 },
        { nombre:'Rodri',                dorsal:16, pos:'MD', nac:'🇪🇸', naci:1996, alt:191, pes:82, pie:'D', vm:'120M€', cap:false, g:0,  as:0, pj:6  },
        { nombre:'Kevin De Bruyne',      dorsal:17, pos:'MA', nac:'🇧🇪', naci:1991, alt:181, pes:70, pie:'D', vm:'45M€',  cap:false, g:4,  as:8, pj:18 },
        { nombre:'Phil Foden',           dorsal:47, pos:'MA', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2000, alt:171, pes:69, pie:'I', vm:'130M€', cap:false, g:15, as:9, pj:33 },
        { nombre:'Bernardo Silva',       dorsal:20, pos:'MA', nac:'🇵🇹', naci:1994, alt:173, pes:64, pie:'D', vm:'70M€',  cap:false, g:8,  as:7, pj:35 },
        { nombre:'Erling Haaland',       dorsal:9,  pos:'DC', nac:'🇳🇴', naci:2000, alt:194, pes:88, pie:'I', vm:'180M€', cap:false, g:22, as:5, pj:28 },
        { nombre:'Jeremy Doku',          dorsal:11, pos:'ED', nac:'🇧🇪', naci:2002, alt:170, pes:65, pie:'D', vm:'65M€',  cap:false, g:5,  as:8, pj:29 },
        { nombre:'Jack Grealish',        dorsal:10, pos:'EI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1995, alt:180, pes:76, pie:'I', vm:'45M€',  cap:false, g:3,  as:4, pj:20 },
        { nombre:'Matheus Nunes',        dorsal:27, pos:'MC', nac:'🇵🇹', naci:1998, alt:183, pes:75, pie:'D', vm:'50M€',  cap:false, g:2,  as:3, pj:22 },
        { nombre:'Savinho',              dorsal:26, pos:'ED', nac:'🇧🇷', naci:2004, alt:179, pes:72, pie:'I', vm:'60M€',  cap:false, g:5,  as:6, pj:28 }
      ]
    },
    'Chelsea': {
      capitan_actual: 'Reece James',
      capitanes: [
        { temp:'2024-25', nombre:'Reece James' },
        { temp:'2023-24', nombre:'Reece James' },
        { temp:'2022-23', nombre:'César Azpilicueta' },
        { temp:'2021-22', nombre:'César Azpilicueta' },
        { temp:'2020-21', nombre:'César Azpilicueta' }
      ],
      plantilla: [
        { nombre:'Robert Sánchez',       dorsal:1,  pos:'PO', nac:'🇪🇸', naci:1997, alt:197, pes:90, pie:'D', vm:'20M€',  cap:false, g:0,  as:0, pj:28 },
        { nombre:'Reece James',          dorsal:24, pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1999, alt:180, pes:77, pie:'D', vm:'70M€',  cap:true,  g:1,  as:4, pj:18 },
        { nombre:'Wesley Fofana',        dorsal:33, pos:'CB', nac:'🇫🇷', naci:2000, alt:189, pes:78, pie:'D', vm:'50M€',  cap:false, g:0,  as:0, pj:15 },
        { nombre:'Levi Colwill',         dorsal:26, pos:'CB', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2003, alt:190, pes:83, pie:'I', vm:'60M€',  cap:false, g:2,  as:1, pj:30 },
        { nombre:'Ben Chilwell',         dorsal:21, pos:'LI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1996, alt:178, pes:77, pie:'I', vm:'30M€',  cap:false, g:0,  as:2, pj:16 },
        { nombre:'Moisés Caicedo',       dorsal:25, pos:'MD', nac:'🇪🇨', naci:2001, alt:180, pes:75, pie:'D', vm:'100M€', cap:false, g:3,  as:4, pj:34 },
        { nombre:'Enzo Fernández',       dorsal:8,  pos:'MC', nac:'🇦🇷', naci:2001, alt:178, pes:73, pie:'D', vm:'80M€',  cap:false, g:4,  as:6, pj:30 },
        { nombre:'Cole Palmer',          dorsal:20, pos:'MA', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2002, alt:185, pes:76, pie:'D', vm:'100M€', cap:false, g:22, as:12,pj:34 },
        { nombre:'Pedro Neto',           dorsal:7,  pos:'EI', nac:'🇵🇹', naci:2000, alt:174, pes:64, pie:'I', vm:'65M€',  cap:false, g:7,  as:9, pj:30 },
        { nombre:'Noni Madueke',         dorsal:11, pos:'ED', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2002, alt:178, pes:73, pie:'D', vm:'50M€',  cap:false, g:10, as:5, pj:28 },
        { nombre:'Nicolas Jackson',      dorsal:15, pos:'DC', nac:'🇸🇳', naci:2001, alt:187, pes:78, pie:'D', vm:'60M€',  cap:false, g:14, as:4, pj:32 },
        { nombre:'Christopher Nkunku',   dorsal:18, pos:'SD', nac:'🇫🇷', naci:1997, alt:175, pes:73, pie:'D', vm:'50M€',  cap:false, g:8,  as:3, pj:22 },
        { nombre:'Marc Cucurella',       dorsal:32, pos:'LI', nac:'🇪🇸', naci:1998, alt:172, pes:68, pie:'I', vm:'30M€',  cap:false, g:1,  as:3, pj:29 }
      ]
    },
    'Manchester United': {
      capitan_actual: 'Bruno Fernandes',
      capitanes: [
        { temp:'2024-25', nombre:'Bruno Fernandes' },
        { temp:'2023-24', nombre:'Bruno Fernandes' },
        { temp:'2022-23', nombre:'Harry Maguire' }
      ],
      plantilla: [
        { nombre:'André Onana',          dorsal:24, pos:'PO', nac:'🇨🇲', naci:1996, alt:190, pes:92, pie:'D', vm:'40M€',  cap:false, g:0,  as:0,  pj:32 },
        { nombre:'Noussair Mazraoui',    dorsal:2,  pos:'LD', nac:'🇲🇦', naci:1997, alt:181, pes:75, pie:'D', vm:'30M€',  cap:false, g:1,  as:3,  pj:25 },
        { nombre:'Lisandro Martínez',    dorsal:6,  pos:'CB', nac:'🇦🇷', naci:1998, alt:175, pes:76, pie:'I', vm:'50M€',  cap:false, g:1,  as:0,  pj:15 },
        { nombre:'Matthijs de Ligt',     dorsal:5,  pos:'CB', nac:'🇳🇱', naci:1999, alt:188, pes:87, pie:'D', vm:'30M€',  cap:false, g:1,  as:0,  pj:20 },
        { nombre:'Harry Maguire',        dorsal:5,  pos:'CB', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1993, alt:194, pes:100,pie:'D', vm:'12M€',  cap:false, g:2,  as:0,  pj:22 },
        { nombre:'Diogo Dalot',          dorsal:20, pos:'LI', nac:'🇵🇹', naci:1999, alt:183, pes:68, pie:'D', vm:'30M€',  cap:false, g:1,  as:4,  pj:28 },
        { nombre:'Bruno Fernandes',      dorsal:8,  pos:'MA', nac:'🇵🇹', naci:1994, alt:179, pes:69, pie:'D', vm:'60M€',  cap:true,  g:11, as:10, pj:33 },
        { nombre:'Kobbie Mainoo',        dorsal:37, pos:'MC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2005, alt:178, pes:70, pie:'D', vm:'60M€',  cap:false, g:3,  as:3,  pj:28 },
        { nombre:'Manuel Ugarte',        dorsal:23, pos:'MC', nac:'🇺🇾', naci:2001, alt:182, pes:76, pie:'D', vm:'30M€',  cap:false, g:1,  as:2,  pj:22 },
        { nombre:'Casemiro',             dorsal:18, pos:'MC', nac:'🇧🇷', naci:1992, alt:185, pes:84, pie:'D', vm:'12M€',  cap:false, g:2,  as:1,  pj:16 },
        { nombre:'Amad Diallo',          dorsal:16, pos:'ED', nac:'🇨🇮', naci:2002, alt:172, pes:62, pie:'D', vm:'50M€',  cap:false, g:10, as:5,  pj:30 },
        { nombre:'Alejandro Garnacho',   dorsal:17, pos:'EI', nac:'🇦🇷', naci:2004, alt:181, pes:72, pie:'I', vm:'50M€',  cap:false, g:8,  as:5,  pj:28 },
        { nombre:'Marcus Rashford',      dorsal:10, pos:'EI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:180, pes:70, pie:'D', vm:'30M€',  cap:false, g:5,  as:4,  pj:22 },
        { nombre:'Rasmus Højlund',       dorsal:9,  pos:'DC', nac:'🇩🇰', naci:2003, alt:191, pes:83, pie:'D', vm:'50M€',  cap:false, g:7,  as:2,  pj:27 },
        { nombre:'Joshua Zirkzee',       dorsal:11, pos:'DC', nac:'🇳🇱', naci:2001, alt:193, pes:85, pie:'D', vm:'35M€',  cap:false, g:4,  as:3,  pj:20 }
      ]
    },
    'Tottenham Hotspur': {
      capitan_actual: 'Son Heung-min',
      capitanes: [
        { temp:'2024-25', nombre:'Son Heung-min' },
        { temp:'2023-24', nombre:'Son Heung-min' },
        { temp:'2022-23', nombre:'Hugo Lloris' },
        { temp:'2021-22', nombre:'Hugo Lloris' },
        { temp:'2020-21', nombre:'Hugo Lloris' }
      ],
      plantilla: [
        { nombre:'Guglielmo Vicario',    dorsal:1,  pos:'PO', nac:'🇮🇹', naci:1996, alt:192, pes:90, pie:'D', vm:'30M€',  cap:false, g:0,  as:0, pj:30 },
        { nombre:'Pedro Porro',          dorsal:23, pos:'LD', nac:'🇪🇸', naci:1999, alt:178, pes:75, pie:'D', vm:'40M€',  cap:false, g:2,  as:7, pj:33 },
        { nombre:'Cristian Romero',      dorsal:17, pos:'CB', nac:'🇦🇷', naci:1998, alt:185, pes:80, pie:'D', vm:'65M€',  cap:false, g:2,  as:1, pj:28 },
        { nombre:'Micky van de Ven',     dorsal:37, pos:'CB', nac:'🇳🇱', naci:2001, alt:190, pes:86, pie:'I', vm:'60M€',  cap:false, g:0,  as:2, pj:24 },
        { nombre:'Destiny Udogie',       dorsal:38, pos:'LI', nac:'🇮🇹', naci:2002, alt:181, pes:79, pie:'I', vm:'40M€',  cap:false, g:2,  as:3, pj:29 },
        { nombre:'Yves Bissouma',        dorsal:29, pos:'MD', nac:'🇲🇱', naci:1996, alt:183, pes:79, pie:'D', vm:'30M€',  cap:false, g:1,  as:2, pj:28 },
        { nombre:'James Maddison',       dorsal:10, pos:'MA', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1996, alt:175, pes:71, pie:'D', vm:'55M€',  cap:false, g:8,  as:9, pj:30 },
        { nombre:'Son Heung-min',        dorsal:7,  pos:'EI', nac:'🇰🇷', naci:1992, alt:183, pes:78, pie:'I', vm:'40M€',  cap:true,  g:14, as:8, pj:33 },
        { nombre:'Dejan Kulusevski',     dorsal:21, pos:'ED', nac:'🇸🇪', naci:2000, alt:187, pes:79, pie:'D', vm:'45M€',  cap:false, g:6,  as:8, pj:25 },
        { nombre:'Brennan Johnson',      dorsal:22, pos:'ED', nac:'🏴󠁧󠁢󠁷󠁬󠁳󠁿', naci:2001, alt:181, pes:71, pie:'D', vm:'40M€',  cap:false, g:9,  as:4, pj:32 },
        { nombre:'Dominic Solanke',      dorsal:19, pos:'DC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:187, pes:77, pie:'D', vm:'55M€',  cap:false, g:11, as:3, pj:32 },
        { nombre:'Richarlison',          dorsal:9,  pos:'DC', nac:'🇧🇷', naci:1997, alt:181, pes:78, pie:'D', vm:'30M€',  cap:false, g:5,  as:2, pj:20 },
        { nombre:'Lucas Bergvall',       dorsal:45, pos:'MC', nac:'🇸🇪', naci:2006, alt:181, pes:72, pie:'D', vm:'30M€',  cap:false, g:1,  as:2, pj:18 }
      ]
    },
    'Aston Villa': {
      capitan_actual: 'John McGinn',
      capitanes: [
        { temp:'2024-25', nombre:'John McGinn' },
        { temp:'2023-24', nombre:'John McGinn' },
        { temp:'2022-23', nombre:'John McGinn' },
        { temp:'2021-22', nombre:'Tyrone Mings' }
      ],
      plantilla: [
        { nombre:'Emiliano Martínez',    dorsal:1,  pos:'PO', nac:'🇦🇷', naci:1992, alt:195, pes:88, pie:'D', vm:'35M€',  cap:false, g:0,  as:0, pj:35 },
        { nombre:'Matty Cash',           dorsal:2,  pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:183, pes:73, pie:'D', vm:'30M€',  cap:false, g:1,  as:3, pj:30 },
        { nombre:'Pau Torres',           dorsal:14, pos:'CB', nac:'🇪🇸', naci:1997, alt:191, pes:82, pie:'I', vm:'40M€',  cap:false, g:2,  as:1, pj:28 },
        { nombre:'Ezri Konsa',           dorsal:4,  pos:'CB', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:182, pes:82, pie:'D', vm:'35M€',  cap:false, g:1,  as:1, pj:30 },
        { nombre:'Lucas Digne',          dorsal:12, pos:'LI', nac:'🇫🇷', naci:1993, alt:178, pes:74, pie:'I', vm:'12M€',  cap:false, g:1,  as:4, pj:28 },
        { nombre:'John McGinn',          dorsal:7,  pos:'MC', nac:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', naci:1994, alt:180, pes:73, pie:'D', vm:'30M€',  cap:true,  g:5,  as:4, pj:34 },
        { nombre:'Boubacar Kamara',      dorsal:44, pos:'MD', nac:'🇫🇷', naci:1999, alt:183, pes:77, pie:'D', vm:'40M€',  cap:false, g:0,  as:2, pj:24 },
        { nombre:'Emiliano Buendía',     dorsal:10, pos:'MA', nac:'🇦🇷', naci:1996, alt:172, pes:70, pie:'D', vm:'35M€',  cap:false, g:6,  as:7, pj:28 },
        { nombre:'Leon Bailey',          dorsal:31, pos:'ED', nac:'🇯🇲', naci:1997, alt:179, pes:77, pie:'I', vm:'25M€',  cap:false, g:7,  as:6, pj:30 },
        { nombre:'Morgan Rogers',        dorsal:49, pos:'MA', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2002, alt:187, pes:82, pie:'D', vm:'30M€',  cap:false, g:8,  as:9, pj:33 },
        { nombre:'Ollie Watkins',        dorsal:11, pos:'DC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1995, alt:180, pes:70, pie:'D', vm:'70M€',  cap:false, g:16, as:9, pj:35 },
        { nombre:'Moussa Diaby',         dorsal:19, pos:'ED', nac:'🇫🇷', naci:1999, alt:170, pes:68, pie:'D', vm:'45M€',  cap:false, g:7,  as:5, pj:28 }
      ]
    },
    'Newcastle United': {
      capitan_actual: 'Kieran Trippier',
      capitanes: [
        { temp:'2024-25', nombre:'Kieran Trippier' },
        { temp:'2023-24', nombre:'Kieran Trippier' },
        { temp:'2022-23', nombre:'Kieran Trippier' },
        { temp:'2021-22', nombre:'Jamaal Lascelles' }
      ],
      plantilla: [
        { nombre:'Nick Pope',            dorsal:22, pos:'PO', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1992, alt:198, pes:90, pie:'D', vm:'25M€',  cap:false, g:0,  as:0, pj:30 },
        { nombre:'Kieran Trippier',      dorsal:2,  pos:'LD', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1990, alt:173, pes:72, pie:'D', vm:'18M€',  cap:true,  g:1,  as:5, pj:22 },
        { nombre:'Fabian Schär',         dorsal:5,  pos:'CB', nac:'🇨🇭', naci:1991, alt:186, pes:79, pie:'D', vm:'15M€',  cap:false, g:3,  as:1, pj:30 },
        { nombre:'Sven Botman',          dorsal:4,  pos:'CB', nac:'🇳🇱', naci:2000, alt:193, pes:88, pie:'I', vm:'45M€',  cap:false, g:1,  as:0, pj:12 },
        { nombre:'Dan Burn',             dorsal:33, pos:'LI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1992, alt:197, pes:91, pie:'I', vm:'8M€',   cap:false, g:2,  as:1, pj:28 },
        { nombre:'Joelinton',            dorsal:7,  pos:'MC', nac:'🇧🇷', naci:1996, alt:186, pes:84, pie:'D', vm:'35M€',  cap:false, g:4,  as:4, pj:30 },
        { nombre:'Bruno Guimarães',      dorsal:39, pos:'MD', nac:'🇧🇷', naci:1997, alt:183, pes:77, pie:'D', vm:'90M€',  cap:false, g:6,  as:6, pj:30 },
        { nombre:'Sean Longstaff',       dorsal:36, pos:'MC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:183, pes:79, pie:'D', vm:'12M€',  cap:false, g:3,  as:2, pj:25 },
        { nombre:'Harvey Barnes',        dorsal:11, pos:'EI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:180, pes:71, pie:'D', vm:'30M€',  cap:false, g:8,  as:4, pj:28 },
        { nombre:'Alexander Isak',       dorsal:14, pos:'DC', nac:'🇸🇪', naci:1999, alt:192, pes:77, pie:'D', vm:'100M€', cap:false, g:21, as:3, pj:30 },
        { nombre:'Anthony Gordon',       dorsal:10, pos:'ED', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2001, alt:180, pes:70, pie:'D', vm:'70M€',  cap:false, g:11, as:8, pj:32 },
        { nombre:'Jacob Murphy',         dorsal:23, pos:'ED', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1995, alt:174, pes:68, pie:'D', vm:'12M€',  cap:false, g:3,  as:5, pj:26 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇪🇸  LA LIGA
  ────────────────────────────────────────────────────────── */
  'La Liga': {
    'Real Madrid': {
      capitan_actual: 'Lucas Vázquez',
      capitanes: [
        { temp:'2024-25', nombre:'Lucas Vázquez' },
        { temp:'2023-24', nombre:'Nacho Fernández' },
        { temp:'2022-23', nombre:'Nacho Fernández' }
      ],
      plantilla: [
        { nombre:'Thibaut Courtois',    dorsal:1,  pos:'PO', nac:'🇧🇪', naci:1992, alt:199, pes:96, pie:'D', vm:'30M€',  cap:false, g:0,  as:0,  pj:24 },
        { nombre:'Andriy Lunin',        dorsal:13, pos:'PO', nac:'🇺🇦', naci:1999, alt:191, pes:82, pie:'D', vm:'15M€',  cap:false, g:0,  as:0,  pj:14 },
        { nombre:'Dani Carvajal',       dorsal:2,  pos:'LD', nac:'🇪🇸', naci:1992, alt:173, pes:73, pie:'D', vm:'20M€',  cap:false, g:0,  as:0,  pj:5  },
        { nombre:'Lucas Vázquez',       dorsal:17, pos:'LD', nac:'🇪🇸', naci:1991, alt:173, pes:68, pie:'D', vm:'8M€',   cap:true,  g:2,  as:3,  pj:30 },
        { nombre:'Éder Militão',        dorsal:3,  pos:'CB', nac:'🇧🇷', naci:1998, alt:186, pes:77, pie:'D', vm:'60M€',  cap:false, g:1,  as:0,  pj:12 },
        { nombre:'Antonio Rüdiger',     dorsal:22, pos:'CB', nac:'🇩🇪', naci:1993, alt:190, pes:85, pie:'D', vm:'20M€',  cap:false, g:3,  as:1,  pj:34 },
        { nombre:'Raúl Asencio',        dorsal:36, pos:'CB', nac:'🇪🇸', naci:2003, alt:190, pes:82, pie:'D', vm:'12M€',  cap:false, g:1,  as:0,  pj:18 },
        { nombre:'David Alaba',         dorsal:4,  pos:'CB', nac:'🇦🇹', naci:1992, alt:180, pes:80, pie:'I', vm:'10M€',  cap:false, g:0,  as:0,  pj:4  },
        { nombre:'Ferland Mendy',       dorsal:23, pos:'LI', nac:'🇫🇷', naci:1995, alt:180, pes:74, pie:'I', vm:'30M€',  cap:false, g:1,  as:2,  pj:26 },
        { nombre:'Fran García',         dorsal:20, pos:'LI', nac:'🇪🇸', naci:2001, alt:177, pes:72, pie:'I', vm:'15M€',  cap:false, g:0,  as:3,  pj:22 },
        { nombre:'Aurelien Tchouaméni', dorsal:18, pos:'MC', nac:'🇫🇷', naci:2000, alt:188, pes:80, pie:'D', vm:'80M€',  cap:false, g:2,  as:1,  pj:32 },
        { nombre:'Eduardo Camavinga',   dorsal:12, pos:'MC', nac:'🇫🇷', naci:2002, alt:182, pes:68, pie:'I', vm:'90M€',  cap:false, g:2,  as:4,  pj:28 },
        { nombre:'Luka Modric',         dorsal:10, pos:'MC', nac:'🇭🇷', naci:1985, alt:172, pes:66, pie:'D', vm:'8M€',   cap:false, g:3,  as:5,  pj:29 },
        { nombre:'Federico Valverde',   dorsal:15, pos:'MC', nac:'🇺🇾', naci:1998, alt:182, pes:78, pie:'D', vm:'120M€', cap:false, g:6,  as:8,  pj:35 },
        { nombre:'Dani Ceballos',       dorsal:19, pos:'MC', nac:'🇪🇸', naci:1996, alt:175, pes:70, pie:'D', vm:'15M€',  cap:false, g:1,  as:3,  pj:22 },
        { nombre:'Jude Bellingham',     dorsal:5,  pos:'MA', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2003, alt:186, pes:75, pie:'D', vm:'180M€', cap:false, g:14, as:11, pj:32 },
        { nombre:'Brahim Díaz',         dorsal:21, pos:'MA', nac:'🇪🇸', naci:1999, alt:170, pes:60, pie:'D', vm:'35M€',  cap:false, g:7,  as:5,  pj:30 },
        { nombre:'Kylian Mbappé',       dorsal:9,  pos:'DC', nac:'🇫🇷', naci:1998, alt:178, pes:73, pie:'D', vm:'180M€', cap:false, g:27, as:8,  pj:33 },
        { nombre:'Vinicius Jr.',        dorsal:7,  pos:'EI', nac:'🇧🇷', naci:2000, alt:176, pes:73, pie:'D', vm:'180M€', cap:false, g:17, as:12, pj:32 },
        { nombre:'Rodrygo',             dorsal:11, pos:'EI', nac:'🇧🇷', naci:2001, alt:174, pes:64, pie:'D', vm:'90M€',  cap:false, g:9,  as:6,  pj:34 },
        { nombre:'Endrick',             dorsal:16, pos:'DC', nac:'🇧🇷', naci:2006, alt:173, pes:70, pie:'D', vm:'60M€',  cap:false, g:5,  as:2,  pj:25 }
      ]
    },
    'Barcelona': {
      capitan_actual: 'Alexia Putellas',
      capitanes: [
        { temp:'2024-25', nombre:'Marc-André ter Stegen' },
        { temp:'2023-24', nombre:'Ilkay Gündogan' },
        { temp:'2022-23', nombre:'Sergio Busquets' }
      ],
      plantilla: [
        { nombre:'Marc-André ter Stegen', dorsal:1,  pos:'PO', nac:'🇩🇪', naci:1992, alt:187, pes:85, pie:'D', vm:'20M€',  cap:false, g:0,  as:0,  pj:9  },
        { nombre:'Iñaki Peña',           dorsal:13, pos:'PO', nac:'🇪🇸', naci:1999, alt:186, pes:84, pie:'D', vm:'12M€',  cap:false, g:0,  as:0,  pj:26 },
        { nombre:'Jules Koundé',          dorsal:23, pos:'LD', nac:'🇫🇷', naci:1998, alt:178, pes:73, pie:'D', vm:'70M€',  cap:false, g:3,  as:4,  pj:32 },
        { nombre:'Héctor Fort',           dorsal:38, pos:'LD', nac:'🇪🇸', naci:2006, alt:180, pes:72, pie:'D', vm:'10M€',  cap:false, g:0,  as:1,  pj:12 },
        { nombre:'Ronald Araújo',         dorsal:4,  pos:'CB', nac:'🇺🇾', naci:1999, alt:188, pes:85, pie:'D', vm:'60M€',  cap:false, g:0,  as:0,  pj:10 },
        { nombre:'Pau Cubarsí',           dorsal:33, pos:'CB', nac:'🇪🇸', naci:2007, alt:187, pes:79, pie:'I', vm:'50M€',  cap:false, g:1,  as:1,  pj:30 },
        { nombre:'Iñigo Martínez',        dorsal:5,  pos:'CB', nac:'🇪🇸', naci:1991, alt:181, pes:77, pie:'I', vm:'8M€',   cap:false, g:2,  as:1,  pj:28 },
        { nombre:'Alejandro Balde',       dorsal:3,  pos:'LI', nac:'🇪🇸', naci:2003, alt:178, pes:73, pie:'I', vm:'60M€',  cap:false, g:2,  as:8,  pj:30 },
        { nombre:'Pedri',                 dorsal:8,  pos:'MC', nac:'🇪🇸', naci:2002, alt:174, pes:60, pie:'D', vm:'100M€', cap:false, g:7,  as:9,  pj:30 },
        { nombre:'Gavi',                  dorsal:6,  pos:'MC', nac:'🇪🇸', naci:2004, alt:173, pes:66, pie:'I', vm:'80M€',  cap:false, g:3,  as:4,  pj:22 },
        { nombre:'Marc Casadó',           dorsal:17, pos:'MC', nac:'🇪🇸', naci:2003, alt:179, pes:68, pie:'D', vm:'25M€',  cap:false, g:1,  as:2,  pj:30 },
        { nombre:'Dani Olmo',             dorsal:20, pos:'MA', nac:'🇪🇸', naci:2002, alt:179, pes:74, pie:'D', vm:'60M€',  cap:false, g:8,  as:11, pj:17 },
        { nombre:'Fermín López',          dorsal:16, pos:'MA', nac:'🇪🇸', naci:2003, alt:178, pes:68, pie:'D', vm:'35M€',  cap:false, g:6,  as:4,  pj:28 },
        { nombre:'Lamine Yamal',          dorsal:19, pos:'ED', nac:'🇪🇸', naci:2007, alt:176, pes:65, pie:'D', vm:'250M€', cap:false, g:14, as:19, pj:33 },
        { nombre:'Raphinha',              dorsal:11, pos:'ED', nac:'🇧🇷', naci:1996, alt:176, pes:68, pie:'I', vm:'70M€',  cap:false, g:22, as:14, pj:35 },
        { nombre:'Robert Lewandowski',    dorsal:9,  pos:'DC', nac:'🇵🇱', naci:1988, alt:185, pes:81, pie:'D', vm:'18M€',  cap:false, g:21, as:7,  pj:35 },
        { nombre:'Ferran Torres',         dorsal:7,  pos:'EI', nac:'🇪🇸', naci:2000, alt:182, pes:74, pie:'D', vm:'30M€',  cap:false, g:6,  as:3,  pj:24 }
      ]
    },
    'Atlético Madrid': {
      capitan_actual: 'Koke',
      capitanes: [
        { temp:'2024-25', nombre:'Koke' },
        { temp:'2023-24', nombre:'Koke' },
        { temp:'2022-23', nombre:'Koke' },
        { temp:'2021-22', nombre:'Koke' },
        { temp:'2020-21', nombre:'Koke' },
        { temp:'2016-17', nombre:'Gabi' }
      ],
      plantilla: [
        { nombre:'Jan Oblak',            dorsal:13, pos:'PO', nac:'🇸🇮', naci:1993, alt:188, pes:87, pie:'D', vm:'30M€',  cap:false, g:0,  as:0, pj:33 },
        { nombre:'Ñahuel Molina',        dorsal:16, pos:'LD', nac:'🇦🇷', naci:1998, alt:181, pes:73, pie:'D', vm:'35M€',  cap:false, g:2,  as:4, pj:28 },
        { nombre:'José María Giménez',   dorsal:2,  pos:'CB', nac:'🇺🇾', naci:1995, alt:187, pes:84, pie:'D', vm:'30M€',  cap:false, g:2,  as:0, pj:28 },
        { nombre:'Robin Le Normand',     dorsal:20, pos:'CB', nac:'🇫🇷', naci:1996, alt:188, pes:82, pie:'D', vm:'35M€',  cap:false, g:1,  as:0, pj:30 },
        { nombre:'Reinildo Mandava',     dorsal:23, pos:'LI', nac:'🇲🇿', naci:1994, alt:178, pes:72, pie:'I', vm:'10M€',  cap:false, g:0,  as:1, pj:22 },
        { nombre:'Koke',                 dorsal:6,  pos:'MC', nac:'🇪🇸', naci:1992, alt:176, pes:71, pie:'D', vm:'12M€',  cap:true,  g:2,  as:5, pj:30 },
        { nombre:'Rodrigo De Paul',      dorsal:5,  pos:'MC', nac:'🇦🇷', naci:1994, alt:180, pes:76, pie:'D', vm:'35M€',  cap:false, g:3,  as:4, pj:30 },
        { nombre:'Pablo Barrios',        dorsal:30, pos:'MC', nac:'🇪🇸', naci:2003, alt:183, pes:75, pie:'D', vm:'30M€',  cap:false, g:3,  as:3, pj:28 },
        { nombre:'Antoine Griezmann',    dorsal:8,  pos:'SD', nac:'🇫🇷', naci:1991, alt:176, pes:73, pie:'I', vm:'25M€',  cap:false, g:10, as:8, pj:30 },
        { nombre:'Ángel Correa',         dorsal:10, pos:'EI', nac:'🇦🇷', naci:1994, alt:174, pes:68, pie:'D', vm:'20M€',  cap:false, g:6,  as:5, pj:28 },
        { nombre:'Samuel Lino',          dorsal:7,  pos:'EI', nac:'🇵🇹', naci:2000, alt:178, pes:70, pie:'I', vm:'25M€',  cap:false, g:7,  as:6, pj:28 },
        { nombre:'Julián Álvarez',       dorsal:19, pos:'DC', nac:'🇦🇷', naci:2000, alt:170, pes:69, pie:'D', vm:'120M€', cap:false, g:19, as:8, pj:33 },
        { nombre:'Alexander Sørloth',    dorsal:22, pos:'DC', nac:'🇳🇴', naci:1995, alt:194, pes:88, pie:'D', vm:'30M€',  cap:false, g:8,  as:2, pj:25 },
        { nombre:'Conor Gallagher',      dorsal:12, pos:'MC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2000, alt:181, pes:77, pie:'D', vm:'45M€',  cap:false, g:4,  as:4, pj:28 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇮🇹  SERIE A
  ────────────────────────────────────────────────────────── */
  'Serie A': {
    'Inter Milan': {
      capitan_actual: 'Lautaro Martínez',
      capitanes: [
        { temp:'2024-25', nombre:'Lautaro Martínez' },
        { temp:'2023-24', nombre:'Lautaro Martínez' },
        { temp:'2022-23', nombre:'Samir Handanovic' },
        { temp:'2021-22', nombre:'Samir Handanovic' }
      ],
      plantilla: [
        { nombre:'Yann Sommer',          dorsal:1,  pos:'PO', nac:'🇨🇭', naci:1988, alt:183, pes:77, pie:'D', vm:'10M€',  cap:false, g:0,  as:0, pj:32 },
        { nombre:'Matteo Darmian',       dorsal:36, pos:'LD', nac:'🇮🇹', naci:1989, alt:183, pes:72, pie:'D', vm:'5M€',   cap:false, g:1,  as:2, pj:26 },
        { nombre:'Francesco Acerbi',     dorsal:15, pos:'CB', nac:'🇮🇹', naci:1988, alt:192, pes:84, pie:'D', vm:'5M€',   cap:false, g:1,  as:1, pj:24 },
        { nombre:'Alessandro Bastoni',   dorsal:95, pos:'CB', nac:'🇮🇹', naci:1999, alt:190, pes:83, pie:'I', vm:'80M€',  cap:false, g:2,  as:4, pj:30 },
        { nombre:'Federico Dimarco',     dorsal:32, pos:'LI', nac:'🇮🇹', naci:1997, alt:177, pes:71, pie:'I', vm:'50M€',  cap:false, g:4,  as:8, pj:30 },
        { nombre:'Nicolò Barella',       dorsal:23, pos:'MC', nac:'🇮🇹', naci:1997, alt:172, pes:68, pie:'D', vm:'80M€',  cap:false, g:6,  as:9, pj:32 },
        { nombre:'Hakan Çalhanoğlu',     dorsal:20, pos:'MD', nac:'🇹🇷', naci:1994, alt:179, pes:74, pie:'I', vm:'45M€',  cap:false, g:8,  as:7, pj:30 },
        { nombre:'Henrikh Mkhitaryan',   dorsal:22, pos:'MA', nac:'🇦🇲', naci:1989, alt:177, pes:76, pie:'D', vm:'4M€',   cap:false, g:4,  as:5, pj:26 },
        { nombre:'Piotr Zieliński',      dorsal:7,  pos:'MA', nac:'🇵🇱', naci:1994, alt:181, pes:75, pie:'D', vm:'20M€',  cap:false, g:3,  as:4, pj:22 },
        { nombre:'Denzel Dumfries',      dorsal:2,  pos:'LD', nac:'🇳🇱', naci:1996, alt:185, pes:85, pie:'D', vm:'30M€',  cap:false, g:4,  as:6, pj:28 },
        { nombre:'Lautaro Martínez',     dorsal:10, pos:'DC', nac:'🇦🇷', naci:1997, alt:174, pes:72, pie:'D', vm:'100M€', cap:true,  g:20, as:5, pj:32 },
        { nombre:'Marcus Thuram',        dorsal:9,  pos:'DC', nac:'🇫🇷', naci:1997, alt:192, pes:86, pie:'D', vm:'65M€',  cap:false, g:13, as:6, pj:30 },
        { nombre:'Mehdi Taremi',         dorsal:99, pos:'DC', nac:'🇮🇷', naci:1992, alt:187, pes:85, pie:'D', vm:'10M€',  cap:false, g:7,  as:4, pj:24 }
      ]
    },
    'Juventus': {
      capitan_actual: 'Danilo',
      capitanes: [
        { temp:'2024-25', nombre:'Danilo' },
        { temp:'2023-24', nombre:'Danilo' },
        { temp:'2022-23', nombre:'Danilo' },
        { temp:'2021-22', nombre:'Giorgio Chiellini' },
        { temp:'2018-20', nombre:'Cristiano Ronaldo' }
      ],
      plantilla: [
        { nombre:'Michele Di Gregorio',  dorsal:1,  pos:'PO', nac:'🇮🇹', naci:1997, alt:188, pes:82, pie:'D', vm:'20M€',  cap:false, g:0,  as:0, pj:30 },
        { nombre:'Andrea Cambiaso',      dorsal:27, pos:'LD', nac:'🇮🇹', naci:2000, alt:182, pes:74, pie:'I', vm:'50M€',  cap:false, g:3,  as:7, pj:30 },
        { nombre:'Bremer (Gleison)',      dorsal:3,  pos:'CB', nac:'🇧🇷', naci:1997, alt:188, pes:90, pie:'D', vm:'40M€',  cap:false, g:0,  as:0, pj:4  },
        { nombre:'Federico Gatti',       dorsal:4,  pos:'CB', nac:'🇮🇹', naci:1998, alt:190, pes:86, pie:'D', vm:'22M€',  cap:false, g:2,  as:1, pj:28 },
        { nombre:'Danilo',               dorsal:6,  pos:'CB', nac:'🇧🇷', naci:1991, alt:184, pes:80, pie:'D', vm:'5M€',   cap:true,  g:0,  as:1, pj:14 },
        { nombre:'Manuel Locatelli',     dorsal:5,  pos:'MD', nac:'🇮🇹', naci:1998, alt:185, pes:78, pie:'D', vm:'25M€',  cap:false, g:2,  as:3, pj:28 },
        { nombre:'Teun Koopmeiners',     dorsal:8,  pos:'MC', nac:'🇳🇱', naci:1998, alt:180, pes:75, pie:'D', vm:'55M€',  cap:false, g:5,  as:4, pj:22 },
        { nombre:'Nicolás González',     dorsal:11, pos:'EI', nac:'🇦🇷', naci:1998, alt:183, pes:79, pie:'D', vm:'20M€',  cap:false, g:3,  as:3, pj:20 },
        { nombre:'Francisco Conceição',  dorsal:7,  pos:'ED', nac:'🇵🇹', naci:2002, alt:172, pes:65, pie:'D', vm:'30M€',  cap:false, g:7,  as:4, pj:26 },
        { nombre:'Dusan Vlahovic',       dorsal:9,  pos:'DC', nac:'🇷🇸', naci:2000, alt:192, pes:90, pie:'I', vm:'55M€',  cap:false, g:14, as:3, pj:28 },
        { nombre:'Weston McKennie',      dorsal:16, pos:'MC', nac:'🇺🇸', naci:1998, alt:183, pes:79, pie:'D', vm:'20M€',  cap:false, g:3,  as:2, pj:22 },
        { nombre:'Khéphren Thuram',      dorsal:19, pos:'MC', nac:'🇫🇷', naci:2001, alt:192, pes:84, pie:'D', vm:'40M€',  cap:false, g:2,  as:3, pj:24 }
      ]
    },
    'AC Milan': {
      capitan_actual: 'Davide Calabria',
      capitanes: [
        { temp:'2024-25', nombre:'Davide Calabria' },
        { temp:'2023-24', nombre:'Davide Calabria' },
        { temp:'2022-23', nombre:'Davide Calabria' },
        { temp:'2021-22', nombre:'Alessio Romagnoli' }
      ],
      plantilla: [
        { nombre:'Mike Maignan',         dorsal:16, pos:'PO', nac:'🇫🇷', naci:1995, alt:191, pes:84, pie:'D', vm:'35M€',  cap:false, g:0,  as:0, pj:30 },
        { nombre:'Davide Calabria',      dorsal:2,  pos:'LD', nac:'🇮🇹', naci:1996, alt:177, pes:69, pie:'D', vm:'12M€',  cap:true,  g:1,  as:2, pj:24 },
        { nombre:'Malick Thiaw',         dorsal:28, pos:'CB', nac:'🇩🇪', naci:2001, alt:193, pes:86, pie:'D', vm:'30M€',  cap:false, g:1,  as:0, pj:26 },
        { nombre:'Strahinja Pavlovic',   dorsal:31, pos:'CB', nac:'🇷🇸', naci:2001, alt:194, pes:87, pie:'D', vm:'30M€',  cap:false, g:2,  as:0, pj:28 },
        { nombre:'Theo Hernández',       dorsal:19, pos:'LI', nac:'🇫🇷', naci:1997, alt:184, pes:81, pie:'I', vm:'60M€',  cap:false, g:5,  as:7, pj:30 },
        { nombre:'Tijjani Reijnders',    dorsal:14, pos:'MC', nac:'🇳🇱', naci:1998, alt:188, pes:79, pie:'D', vm:'55M€',  cap:false, g:9,  as:6, pj:32 },
        { nombre:'Youssouf Fofana',      dorsal:29, pos:'MD', nac:'🇫🇷', naci:1999, alt:183, pes:79, pie:'D', vm:'35M€',  cap:false, g:2,  as:3, pj:26 },
        { nombre:'Christian Pulisic',    dorsal:11, pos:'ED', nac:'🇺🇸', naci:1998, alt:175, pes:70, pie:'D', vm:'40M€',  cap:false, g:11, as:8, pj:30 },
        { nombre:'Rafael Leão',          dorsal:10, pos:'EI', nac:'🇵🇹', naci:2000, alt:188, pes:79, pie:'I', vm:'70M€',  cap:false, g:9,  as:7, pj:28 },
        { nombre:'Álvaro Morata',        dorsal:7,  pos:'DC', nac:'🇪🇸', naci:1992, alt:187, pes:85, pie:'D', vm:'12M€',  cap:false, g:6,  as:4, pj:22 },
        { nombre:'Tammy Abraham',        dorsal:9,  pos:'DC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1997, alt:190, pes:83, pie:'D', vm:'20M€',  cap:false, g:7,  as:2, pj:24 },
        { nombre:'Samuel Chukwueze',     dorsal:21, pos:'ED', nac:'🇳🇬', naci:1999, alt:169, pes:67, pie:'I', vm:'20M€',  cap:false, g:3,  as:4, pj:22 }
      ]
    },
    'Napoli': {
      capitan_actual: 'Giovanni Di Lorenzo',
      capitanes: [
        { temp:'2024-25', nombre:'Giovanni Di Lorenzo' },
        { temp:'2023-24', nombre:'Giovanni Di Lorenzo' },
        { temp:'2022-23', nombre:'Giovanni Di Lorenzo' }
      ],
      plantilla: [
        { nombre:'Alex Meret',           dorsal:1,  pos:'PO', nac:'🇮🇹', naci:1997, alt:190, pes:84, pie:'D', vm:'12M€',  cap:false, g:0,  as:0,  pj:32 },
        { nombre:'Giovanni Di Lorenzo',  dorsal:22, pos:'LD', nac:'🇮🇹', naci:1993, alt:183, pes:79, pie:'D', vm:'20M€',  cap:true,  g:2,  as:3,  pj:34 },
        { nombre:'Amir Rrahmani',        dorsal:13, pos:'CB', nac:'🇽🇰', naci:1994, alt:189, pes:84, pie:'D', vm:'20M€',  cap:false, g:2,  as:1,  pj:28 },
        { nombre:'Alessandro Buongiorno',dorsal:4,  pos:'CB', nac:'🇮🇹', naci:1999, alt:190, pes:84, pie:'D', vm:'35M€',  cap:false, g:3,  as:0,  pj:30 },
        { nombre:'Mathías Olivera',      dorsal:17, pos:'LI', nac:'🇺🇾', naci:1997, alt:180, pes:75, pie:'I', vm:'15M€',  cap:false, g:1,  as:3,  pj:26 },
        { nombre:'Stanislav Lobotka',    dorsal:68, pos:'MC', nac:'🇸🇰', naci:1994, alt:170, pes:68, pie:'D', vm:'40M€',  cap:false, g:1,  as:3,  pj:32 },
        { nombre:'André Frank Zambo Anguissa', dorsal:99, pos:'MC', nac:'🇨🇲', naci:1995, alt:186, pes:84, pie:'D', vm:'30M€', cap:false, g:3, as:4, pj:30 },
        { nombre:'Scott McTominay',      dorsal:8,  pos:'MC', nac:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', naci:1996, alt:191, pes:83, pie:'D', vm:'30M€',  cap:false, g:10, as:5, pj:33 },
        { nombre:'Matteo Politano',      dorsal:21, pos:'ED', nac:'🇮🇹', naci:1993, alt:171, pes:71, pie:'I', vm:'12M€',  cap:false, g:5,  as:7,  pj:30 },
        { nombre:'David Neres',          dorsal:77, pos:'EI', nac:'🇧🇷', naci:1997, alt:169, pes:64, pie:'D', vm:'25M€',  cap:false, g:8,  as:9,  pj:31 },
        { nombre:'Romelu Lukaku',        dorsal:11, pos:'DC', nac:'🇧🇪', naci:1993, alt:191, pes:94, pie:'D', vm:'20M€',  cap:false, g:13, as:5,  pj:33 },
        { nombre:'Giacomo Raspadori',    dorsal:81, pos:'DC', nac:'🇮🇹', naci:2000, alt:168, pes:68, pie:'D', vm:'25M€',  cap:false, g:5,  as:3,  pj:26 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇩🇪  BUNDESLIGA
  ────────────────────────────────────────────────────────── */
  'Bundesliga': {
    'Bayern Munich': {
      capitan_actual: 'Manuel Neuer',
      capitanes: [
        { temp:'2024-25', nombre:'Manuel Neuer' },
        { temp:'2023-24', nombre:'Manuel Neuer' },
        { temp:'2022-23', nombre:'Manuel Neuer' }
      ],
      plantilla: [
        { nombre:'Manuel Neuer',         dorsal:1,  pos:'PO', nac:'🇩🇪', naci:1986, alt:193, pes:92, pie:'D', vm:'8M€',   cap:true,  g:0,  as:0,  pj:22 },
        { nombre:'Sven Ulreich',         dorsal:26, pos:'PO', nac:'🇩🇪', naci:1988, alt:192, pes:90, pie:'D', vm:'2M€',   cap:false, g:0,  as:0,  pj:12 },
        { nombre:'Joshua Kimmich',       dorsal:6,  pos:'LD', nac:'🇩🇪', naci:1995, alt:177, pes:75, pie:'D', vm:'50M€',  cap:false, g:3,  as:9,  pj:32 },
        { nombre:'Konrad Laimer',        dorsal:27, pos:'LD', nac:'🇦🇹', naci:1997, alt:179, pes:77, pie:'D', vm:'30M€',  cap:false, g:2,  as:4,  pj:28 },
        { nombre:'Dayot Upamecano',      dorsal:2,  pos:'CB', nac:'🇫🇷', naci:1998, alt:186, pes:82, pie:'D', vm:'40M€',  cap:false, g:1,  as:0,  pj:26 },
        { nombre:'Min-jae Kim',          dorsal:3,  pos:'CB', nac:'🇰🇷', naci:1996, alt:190, pes:88, pie:'D', vm:'45M€',  cap:false, g:1,  as:0,  pj:28 },
        { nombre:'Hiroki Ito',           dorsal:32, pos:'LI', nac:'🇯🇵', naci:1999, alt:182, pes:76, pie:'I', vm:'30M€',  cap:false, g:0,  as:1,  pj:8  },
        { nombre:'Alphonso Davies',      dorsal:19, pos:'LI', nac:'🇨🇦', naci:2000, alt:180, pes:73, pie:'I', vm:'60M€',  cap:false, g:1,  as:5,  pj:25 },
        { nombre:'Leon Goretzka',        dorsal:8,  pos:'MC', nac:'🇩🇪', naci:1995, alt:189, pes:86, pie:'D', vm:'30M€',  cap:false, g:4,  as:3,  pj:22 },
        { nombre:'Aleksandar Pavlovic',  dorsal:35, pos:'MC', nac:'🇩🇪', naci:2004, alt:189, pes:80, pie:'D', vm:'25M€',  cap:false, g:2,  as:2,  pj:24 },
        { nombre:'Thomas Müller',        dorsal:25, pos:'MA', nac:'🇩🇪', naci:1989, alt:186, pes:75, pie:'D', vm:'5M€',   cap:false, g:4,  as:8,  pj:26 },
        { nombre:'Jamal Musiala',        dorsal:42, pos:'MA', nac:'🇩🇪', naci:2003, alt:180, pes:70, pie:'D', vm:'150M€', cap:false, g:14, as:11, pj:32 },
        { nombre:'Michael Olise',        dorsal:33, pos:'ED', nac:'🇫🇷', naci:2001, alt:182, pes:75, pie:'D', vm:'70M€',  cap:false, g:12, as:10, pj:28 },
        { nombre:'Leroy Sané',           dorsal:10, pos:'EI', nac:'🇩🇪', naci:1996, alt:183, pes:75, pie:'D', vm:'35M€',  cap:false, g:6,  as:8,  pj:24 },
        { nombre:'Serge Gnabry',         dorsal:7,  pos:'EI', nac:'🇩🇪', naci:1995, alt:175, pes:73, pie:'D', vm:'18M€',  cap:false, g:3,  as:3,  pj:18 },
        { nombre:'Harry Kane',           dorsal:9,  pos:'DC', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:1993, alt:188, pes:86, pie:'D', vm:'80M€',  cap:false, g:26, as:12, pj:34 }
      ]
    },
    'Borussia Dortmund': {
      capitan_actual: 'Emre Can',
      capitanes: [
        { temp:'2024-25', nombre:'Emre Can' },
        { temp:'2023-24', nombre:'Emre Can' },
        { temp:'2022-23', nombre:'Marco Reus' },
        { temp:'2021-22', nombre:'Marco Reus' }
      ],
      plantilla: [
        { nombre:'Gregor Kobel',         dorsal:1,  pos:'PO', nac:'🇨🇭', naci:1997, alt:195, pes:90, pie:'D', vm:'30M€',  cap:false, g:0,  as:0, pj:26 },
        { nombre:'Julian Ryerson',       dorsal:26, pos:'LD', nac:'🇳🇴', naci:1997, alt:181, pes:75, pie:'D', vm:'12M€',  cap:false, g:2,  as:3, pj:26 },
        { nombre:'Nico Schlotterbeck',   dorsal:4,  pos:'CB', nac:'🇩🇪', naci:1999, alt:192, pes:84, pie:'I', vm:'35M€',  cap:false, g:2,  as:1, pj:28 },
        { nombre:'Waldemar Anton',       dorsal:5,  pos:'CB', nac:'🇩🇪', naci:1996, alt:186, pes:80, pie:'D', vm:'22M€',  cap:false, g:1,  as:0, pj:28 },
        { nombre:'Ramy Bensebaini',      dorsal:23, pos:'LI', nac:'🇩🇿', naci:1995, alt:183, pes:79, pie:'I', vm:'14M€',  cap:false, g:2,  as:4, pj:24 },
        { nombre:'Emre Can',             dorsal:23, pos:'MD', nac:'🇩🇪', naci:1994, alt:186, pes:83, pie:'D', vm:'10M€',  cap:true,  g:2,  as:2, pj:24 },
        { nombre:'Marcel Sabitzer',      dorsal:20, pos:'MC', nac:'🇦🇹', naci:1994, alt:177, pes:75, pie:'D', vm:'15M€',  cap:false, g:6,  as:5, pj:26 },
        { nombre:'Julian Brandt',        dorsal:19, pos:'MA', nac:'🇩🇪', naci:1996, alt:185, pes:75, pie:'I', vm:'30M€',  cap:false, g:6,  as:9, pj:28 },
        { nombre:'Karim Adeyemi',        dorsal:27, pos:'EI', nac:'🇩🇪', naci:2002, alt:180, pes:73, pie:'D', vm:'40M€',  cap:false, g:8,  as:5, pj:24 },
        { nombre:'Jamie Gittens',        dorsal:43, pos:'EI', nac:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', naci:2004, alt:173, pes:68, pie:'I', vm:'50M€',  cap:false, g:10, as:6, pj:28 },
        { nombre:'Serhou Guirassy',      dorsal:19, pos:'DC', nac:'🇬🇳', naci:1996, alt:187, pes:82, pie:'D', vm:'50M€',  cap:false, g:17, as:3, pj:26 },
        { nombre:'Maximilian Beier',     dorsal:34, pos:'DC', nac:'🇩🇪', naci:2002, alt:183, pes:76, pie:'D', vm:'30M€',  cap:false, g:7,  as:4, pj:24 }
      ]
    },
    'Bayer Leverkusen': {
      capitan_actual: 'Granit Xhaka',
      capitanes: [
        { temp:'2024-25', nombre:'Granit Xhaka' },
        { temp:'2023-24', nombre:'Granit Xhaka' },
        { temp:'2022-23', nombre:'Lukas Hradecky' }
      ],
      plantilla: [
        { nombre:'Lukáš Hrádecký',       dorsal:1,  pos:'PO', nac:'🇫🇮', naci:1989, alt:189, pes:83, pie:'D', vm:'10M€',  cap:false, g:0,  as:0, pj:30 },
        { nombre:'Jeremie Frimpong',     dorsal:30, pos:'LD', nac:'🇳🇱', naci:2000, alt:171, pes:66, pie:'D', vm:'50M€',  cap:false, g:7,  as:8, pj:30 },
        { nombre:'Piero Hincapié',       dorsal:3,  pos:'CB', nac:'🇪🇨', naci:2002, alt:183, pes:78, pie:'I', vm:'35M€',  cap:false, g:1,  as:2, pj:28 },
        { nombre:'Jonathan Tah',         dorsal:4,  pos:'CB', nac:'🇩🇪', naci:1996, alt:195, pes:92, pie:'D', vm:'30M€',  cap:false, g:2,  as:1, pj:28 },
        { nombre:'Alejandro Grimaldo',   dorsal:12, pos:'LI', nac:'🇪🇸', naci:1995, alt:171, pes:65, pie:'I', vm:'45M€',  cap:false, g:5,  as:11,pj:30 },
        { nombre:'Granit Xhaka',         dorsal:34, pos:'MD', nac:'🇨🇭', naci:1992, alt:186, pes:80, pie:'I', vm:'18M€',  cap:true,  g:4,  as:8, pj:30 },
        { nombre:'Exequiel Palacios',    dorsal:25, pos:'MC', nac:'🇦🇷', naci:1998, alt:181, pes:75, pie:'D', vm:'20M€',  cap:false, g:3,  as:4, pj:24 },
        { nombre:'Florian Wirtz',        dorsal:10, pos:'MA', nac:'🇩🇪', naci:2003, alt:180, pes:70, pie:'D', vm:'130M€', cap:false, g:14, as:14,pj:32 },
        { nombre:'Granit Xhaka',         dorsal:34, pos:'MD', nac:'🇨🇭', naci:1992, alt:186, pes:80, pie:'I', vm:'18M€',  cap:true,  g:4,  as:8, pj:30 },
        { nombre:'Jonas Hofmann',        dorsal:22, pos:'ED', nac:'🇩🇪', naci:1992, alt:176, pes:73, pie:'D', vm:'15M€',  cap:false, g:5,  as:7, pj:28 },
        { nombre:'Victor Boniface',      dorsal:9,  pos:'DC', nac:'🇳🇬', naci:2000, alt:190, pes:84, pie:'D', vm:'50M€',  cap:false, g:12, as:5, pj:24 },
        { nombre:'Patrick Schick',       dorsal:14, pos:'DC', nac:'🇨🇿', naci:1996, alt:191, pes:83, pie:'D', vm:'20M€',  cap:false, g:7,  as:2, pj:20 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇫🇷  LIGUE 1
  ────────────────────────────────────────────────────────── */
  'Ligue 1': {
    'PSG': {
      capitan_actual: 'Marquinhos',
      capitanes: [
        { temp:'2024-25', nombre:'Marquinhos' },
        { temp:'2023-24', nombre:'Marquinhos' },
        { temp:'2022-23', nombre:'Marquinhos' }
      ],
      plantilla: [
        { nombre:'Gianluigi Donnarumma', dorsal:99, pos:'PO', nac:'🇮🇹', naci:1999, alt:196, pes:90, pie:'D', vm:'50M€',  cap:false, g:0,  as:0,  pj:32 },
        { nombre:'Matvey Safonov',       dorsal:18, pos:'PO', nac:'🇷🇺', naci:1999, alt:191, pes:84, pie:'D', vm:'8M€',   cap:false, g:0,  as:0,  pj:6  },
        { nombre:'Achraf Hakimi',        dorsal:2,  pos:'LD', nac:'🇲🇦', naci:1998, alt:181, pes:73, pie:'D', vm:'70M€',  cap:false, g:5,  as:8,  pj:31 },
        { nombre:'Marquinhos',           dorsal:5,  pos:'CB', nac:'🇧🇷', naci:1994, alt:183, pes:75, pie:'D', vm:'35M€',  cap:true,  g:2,  as:1,  pj:32 },
        { nombre:'Willian Pacho',        dorsal:26, pos:'CB', nac:'🇪🇨', naci:2001, alt:187, pes:82, pie:'D', vm:'40M€',  cap:false, g:2,  as:0,  pj:28 },
        { nombre:'Lucas Beraldo',        dorsal:35, pos:'CB', nac:'🇧🇷', naci:2003, alt:186, pes:80, pie:'I', vm:'20M€',  cap:false, g:0,  as:1,  pj:20 },
        { nombre:'Lucas Hernández',      dorsal:21, pos:'LI', nac:'🇫🇷', naci:1996, alt:182, pes:78, pie:'I', vm:'18M€',  cap:false, g:0,  as:1,  pj:12 },
        { nombre:'Nuno Mendes',          dorsal:25, pos:'LI', nac:'🇵🇹', naci:2002, alt:179, pes:71, pie:'I', vm:'55M€',  cap:false, g:2,  as:5,  pj:26 },
        { nombre:'Vitinha',              dorsal:17, pos:'MC', nac:'🇵🇹', naci:2000, alt:170, pes:60, pie:'D', vm:'70M€',  cap:false, g:5,  as:6,  pj:33 },
        { nombre:'João Neves',           dorsal:87, pos:'MC', nac:'🇵🇹', naci:2004, alt:172, pes:64, pie:'D', vm:'70M€',  cap:false, g:2,  as:4,  pj:28 },
        { nombre:'Fabián Ruiz',          dorsal:8,  pos:'MC', nac:'🇪🇸', naci:1996, alt:189, pes:80, pie:'I', vm:'45M€',  cap:false, g:5,  as:8,  pj:31 },
        { nombre:'Warren Zaïre-Emery',   dorsal:33, pos:'MC', nac:'🇫🇷', naci:2006, alt:179, pes:68, pie:'D', vm:'50M€',  cap:false, g:4,  as:5,  pj:25 },
        { nombre:'Khvicha Kvaratskhelia',dorsal:7,  pos:'EI', nac:'🇬🇪', naci:2001, alt:183, pes:73, pie:'D', vm:'100M€', cap:false, g:11, as:6,  pj:24 },
        { nombre:'Ousmane Dembélé',      dorsal:10, pos:'ED', nac:'🇫🇷', naci:1997, alt:178, pes:67, pie:'D', vm:'55M€',  cap:false, g:11, as:12, pj:32 },
        { nombre:'Bradley Barcola',      dorsal:29, pos:'EI', nac:'🇫🇷', naci:2002, alt:182, pes:72, pie:'I', vm:'60M€',  cap:false, g:14, as:10, pj:32 },
        { nombre:'Gonçalo Ramos',        dorsal:9,  pos:'DC', nac:'🇵🇹', naci:2001, alt:187, pes:79, pie:'D', vm:'50M€',  cap:false, g:8,  as:5,  pj:25 },
        { nombre:'Randal Kolo Muani',    dorsal:23, pos:'DC', nac:'🇫🇷', naci:2001, alt:190, pes:82, pie:'D', vm:'40M€',  cap:false, g:6,  as:4,  pj:22 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇦🇷  LIGA ARGENTINA
  ────────────────────────────────────────────────────────── */
  'Argentina': {
    'Boca Juniors': {
      capitan_actual: 'Marcos Rojo',
      capitanes: [
        { temp:'2024', nombre:'Marcos Rojo' },
        { temp:'2023', nombre:'Marcos Rojo' },
        { temp:'2022', nombre:'Carlos Izquierdoz' }
      ],
      plantilla: [
        { nombre:'Sergio Romero',        dorsal:1,  pos:'PO', nac:'🇦🇷', naci:1987, alt:192, pes:87, pie:'D', vm:'0.5M€', cap:false, g:0,  as:0, pj:20 },
        { nombre:'Marcelo Saracchi',     dorsal:6,  pos:'LI', nac:'🇺🇾', naci:1998, alt:176, pes:73, pie:'I', vm:'1.5M€', cap:false, g:1,  as:3, pj:22 },
        { nombre:'Marcos Rojo',          dorsal:6,  pos:'CB', nac:'🇦🇷', naci:1990, alt:187, pes:83, pie:'I', vm:'0.8M€', cap:true,  g:1,  as:0, pj:18 },
        { nombre:'Cristian Medina',      dorsal:5,  pos:'MC', nac:'🇦🇷', naci:2001, alt:178, pes:73, pie:'D', vm:'6.0M€', cap:false, g:5,  as:4, pj:28 },
        { nombre:'Equi Fernández',       dorsal:8,  pos:'MC', nac:'🇦🇷', naci:2001, alt:180, pes:75, pie:'D', vm:'5.0M€', cap:false, g:3,  as:5, pj:26 },
        { nombre:'Miguel Merentiel',     dorsal:11, pos:'DC', nac:'🇺🇾', naci:1997, alt:181, pes:77, pie:'D', vm:'3.0M€', cap:false, g:12, as:4, pj:26 },
        { nombre:'Edinson Cavani',       dorsal:21, pos:'DC', nac:'🇺🇾', naci:1987, alt:184, pes:79, pie:'D', vm:'1.0M€', cap:false, g:8,  as:2, pj:20 },
        { nombre:'Brian Aguirre',        dorsal:7,  pos:'ED', nac:'🇦🇷', naci:2001, alt:174, pes:68, pie:'D', vm:'3.0M€', cap:false, g:5,  as:6, pj:26 }
      ]
    },
    'River Plate': {
      capitan_actual: 'Enzo Pérez',
      capitanes: [
        { temp:'2024', nombre:'Enzo Pérez' },
        { temp:'2023', nombre:'Enzo Pérez' },
        { temp:'2022', nombre:'Enzo Pérez' }
      ],
      plantilla: [
        { nombre:'Franco Armani',        dorsal:1,  pos:'PO', nac:'🇦🇷', naci:1986, alt:186, pes:82, pie:'D', vm:'0.5M€', cap:false, g:0,  as:0, pj:26 },
        { nombre:'Milton Casco',         dorsal:3,  pos:'LI', nac:'🇦🇷', naci:1988, alt:180, pes:74, pie:'I', vm:'0.3M€', cap:false, g:1,  as:2, pj:18 },
        { nombre:'Paulo Díaz',           dorsal:22, pos:'CB', nac:'🇨🇱', naci:1997, alt:182, pes:79, pie:'D', vm:'3.0M€', cap:false, g:2,  as:1, pj:26 },
        { nombre:'Enzo Pérez',           dorsal:8,  pos:'MC', nac:'🇦🇷', naci:1986, alt:177, pes:73, pie:'D', vm:'0.3M€', cap:true,  g:1,  as:2, pj:20 },
        { nombre:'Nacho Fernández',      dorsal:24, pos:'MA', nac:'🇦🇷', naci:1990, alt:179, pes:73, pie:'D', vm:'1.5M€', cap:false, g:4,  as:6, pj:24 },
        { nombre:'Pablo Solari',         dorsal:20, pos:'EI', nac:'🇦🇷', naci:2001, alt:176, pes:72, pie:'I', vm:'5.0M€', cap:false, g:8,  as:5, pj:26 },
        { nombre:'Facundo Colidio',      dorsal:9,  pos:'DC', nac:'🇦🇷', naci:2001, alt:183, pes:78, pie:'D', vm:'4.0M€', cap:false, g:10, as:3, pj:24 },
        { nombre:'Santiago Simón',       dorsal:14, pos:'MC', nac:'🇦🇷', naci:2001, alt:180, pes:75, pie:'D', vm:'4.0M€', cap:false, g:3,  as:4, pj:24 }
      ]
    }
  },

  /* ──────────────────────────────────────────────────────────
     🇧🇷  LIGA BRASILEÑA
  ────────────────────────────────────────────────────────── */
  'Brasil': {
    'Flamengo': {
      capitan_actual: 'David Luiz',
      capitanes: [
        { temp:'2024', nombre:'David Luiz' },
        { temp:'2023', nombre:'David Luiz' },
        { temp:'2022', nombre:'Éverton Ribeiro' }
      ],
      plantilla: [
        { nombre:'Rossi (Agustín)',      dorsal:1,  pos:'PO', nac:'🇦🇷', naci:1996, alt:190, pes:85, pie:'D', vm:'5.0M€', cap:false, g:0,  as:0, pj:28 },
        { nombre:'Guillermo Varela',     dorsal:2,  pos:'LD', nac:'🇺🇾', naci:1993, alt:179, pes:74, pie:'D', vm:'1.5M€', cap:false, g:1,  as:3, pj:24 },
        { nombre:'Léo Ortiz',           dorsal:4,  pos:'CB', nac:'🇧🇷', naci:1997, alt:183, pes:80, pie:'D', vm:'8.0M€', cap:false, g:2,  as:1, pj:28 },
        { nombre:'David Luiz',           dorsal:23, pos:'CB', nac:'🇧🇷', naci:1987, alt:189, pes:84, pie:'D', vm:'0.5M€', cap:true,  g:1,  as:0, pj:22 },
        { nombre:'Gerson',               dorsal:8,  pos:'MC', nac:'🇧🇷', naci:1997, alt:185, pes:80, pie:'I', vm:'15.0M€',cap:false, g:5,  as:7, pj:28 },
        { nombre:'De la Cruz (Nicolás)', dorsal:10, pos:'MA', nac:'🇺🇾', naci:1997, alt:177, pes:73, pie:'D', vm:'20.0M€',cap:false, g:7,  as:9, pj:28 },
        { nombre:'Everton Cebolinha',    dorsal:11, pos:'EI', nac:'🇧🇷', naci:1996, alt:172, pes:68, pie:'D', vm:'8.0M€', cap:false, g:9,  as:5, pj:26 },
        { nombre:'Bruno Henrique',       dorsal:27, pos:'EI', nac:'🇧🇷', naci:1990, alt:175, pes:71, pie:'I', vm:'2.5M€', cap:false, g:5,  as:4, pj:22 },
        { nombre:'Pedro (Guilherme)',     dorsal:9,  pos:'DC', nac:'🇧🇷', naci:1997, alt:190, pes:84, pie:'D', vm:'25.0M€',cap:false, g:17, as:5, pj:28 }
      ]
    },
    'Palmeiras': {
      capitan_actual: 'Gustavo Gómez',
      capitanes: [
        { temp:'2024', nombre:'Gustavo Gómez' },
        { temp:'2023', nombre:'Gustavo Gómez' },
        { temp:'2022', nombre:'Gustavo Gómez' }
      ],
      plantilla: [
        { nombre:'Weverton',             dorsal:21, pos:'PO', nac:'🇧🇷', naci:1988, alt:190, pes:84, pie:'D', vm:'2.0M€', cap:false, g:0,  as:0, pj:30 },
        { nombre:'Marcos Rocha',         dorsal:2,  pos:'LD', nac:'🇧🇷', naci:1990, alt:176, pes:71, pie:'D', vm:'1.0M€', cap:false, g:1,  as:2, pj:26 },
        { nombre:'Gustavo Gómez',        dorsal:15, pos:'CB', nac:'🇵🇾', naci:1993, alt:185, pes:82, pie:'D', vm:'2.0M€', cap:true,  g:3,  as:1, pj:30 },
        { nombre:'Murilo',               dorsal:25, pos:'CB', nac:'🇧🇷', naci:1998, alt:187, pes:80, pie:'D', vm:'6.0M€', cap:false, g:1,  as:0, pj:26 },
        { nombre:'Piquerez',             dorsal:22, pos:'LI', nac:'🇺🇾', naci:1999, alt:178, pes:74, pie:'I', vm:'8.0M€', cap:false, g:2,  as:5, pj:26 },
        { nombre:'Richard Ríos',         dorsal:7,  pos:'MC', nac:'🇨🇴', naci:2000, alt:180, pes:74, pie:'D', vm:'12.0M€',cap:false, g:3,  as:4, pj:28 },
        { nombre:'Raphael Veiga',        dorsal:23, pos:'MA', nac:'🇧🇷', naci:1995, alt:182, pes:77, pie:'D', vm:'8.0M€', cap:false, g:11, as:8, pj:30 },
        { nombre:'Dudu',                 dorsal:7,  pos:'ED', nac:'🇧🇷', naci:1992, alt:177, pes:71, pie:'D', vm:'2.0M€', cap:false, g:7,  as:5, pj:24 },
        { nombre:'Estêvão',              dorsal:41, pos:'EI', nac:'🇧🇷', naci:2007, alt:178, pes:71, pie:'I', vm:'45.0M€',cap:false, g:14, as:10,pj:28 },
        { nombre:'Flaco López',          dorsal:9,  pos:'DC', nac:'🇦🇷', naci:1999, alt:181, pes:78, pie:'D', vm:'8.0M€', cap:false, g:13, as:4, pj:28 }
      ]
    }
  }
};

console.log('[SS21 Plantillas] Datos cargados:', Object.keys(window.SS21.plantillas).join(', '));
