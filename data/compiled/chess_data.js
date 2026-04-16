window.SS21 = window.SS21 || {};

window.SS21.chess = {
  // Campeones mundiales históricos
  campeones: [
    { nombre: "Wilhelm Steinitz", pais: "Austria", flag: "🇦🇹", periodo: "1886-1894", titulo: "Campeón Mundial", descripcion: "Primer campeón mundial oficial. Revolucionó la teoría del ajedrez con su método posicional." },
    { nombre: "Emanuel Lasker", pais: "Alemania", flag: "🇩🇪", periodo: "1894-1921", titulo: "Campeón Mundial", descripcion: "Reinó durante 27 años. Matemático y filósofo, defendió su corona con innovación teórica." },
    { nombre: "José Raúl Capablanca", pais: "Cuba", flag: "🇨🇺", periodo: "1921-1927", titulo: "Campeón Mundial", descripcion: "Conocido por su estilo posicional claro. Jugador supremo de los años 20." },
    { nombre: "Alexander Alekhine", pais: "Francia", flag: "🇫🇷", periodo: "1927-1935, 1937-1946", titulo: "Campeón Mundial", descripcion: "Legendario jugador táctico. Dos reinados separados. Leyenda mundial." },
    { nombre: "Max Euwe", pais: "Países Bajos", flag: "🇳🇱", periodo: "1935-1937", titulo: "Campeón Mundial", descripcion: "Único campeón neerlandés. Derrotó a Alekhine en su primer encuentro." },
    { nombre: "Mikhail Botvinnik", pais: "URSS", flag: "🇷🇺", periodo: "1948-1957, 1958-1960, 1961-1963", titulo: "Campeón Mundial", descripcion: "Pionero de métodos científicos en ajedrez. Tres reinados entre 1948-1963." },
    { nombre: "Vasily Smyslov", pais: "URSS", flag: "🇷🇺", periodo: "1957-1958", titulo: "Campeón Mundial", descripcion: "Cantante de ópera y ajedrecista brillante. Reinado breve pero memorable." },
    { nombre: "Mikhail Tal", pais: "URSS", flag: "🇷🇺", periodo: "1960-1961", titulo: "Campeón Mundial", descripcion: "Rey del ataque. El jugador más joven en ganar el campeonato hasta 1985." },
    { nombre: "Tigran Petrosian", pais: "URSS", flag: "🇷🇺", periodo: "1963-1969", titulo: "Campeón Mundial", descripcion: "Defensa sofisticada. Experto en posiciones complicadas y prevención de ataques." },
    { nombre: "Boris Spassky", pais: "URSS", flag: "🇷🇺", periodo: "1969-1972", titulo: "Campeón Mundial", descripcion: "Jugador versátil. Perdió el título contra Fischer en el famoso match de 1972." },
    { nombre: "Bobby Fischer", pais: "Estados Unidos", flag: "🇺🇸", periodo: "1972-1975", titulo: "Campeón Mundial", descripcion: "Leyenda estadounidense. Dominó el ajedrez mundial. Se retiró en 1975." },
    { nombre: "Anatoly Karpov", pais: "URSS", flag: "🇷🇺", periodo: "1975-1985", titulo: "Campeón Mundial", descripcion: "Reinado de 10 años. Defensor consistente. Jugador técnico excepcional." },
    { nombre: "Garry Kasparov", pais: "URSS/Rusia", flag: "🇷🇺", periodo: "1985-2000", titulo: "Campeón Mundial", descripcion: "Uno de los mejores de todos los tiempos. 15 años de reinado. Revolucionó el juego." },
    { nombre: "Vladimir Kramnik", pais: "Rusia", flag: "🇷🇺", periodo: "2000-2007", titulo: "Campeón Mundial", descripcion: "Derrotó a Kasparov. Experto en aperturas innovadoras. Reinado sólido de 7 años." },
    { nombre: "Viswanathan Anand", pais: "India", flag: "🇮🇳", periodo: "2007-2013", titulo: "Campeón Mundial", descripcion: "Primer campeón mundial de la era de la unificación (FIDE + clásico). Jugador versátil." },
    { nombre: "Magnus Carlsen", pais: "Noruega", flag: "🇳🇴", periodo: "2013-2023", titulo: "Campeón Mundial", descripcion: "Dominó la década de 2010. Mayor ELO jamás alcanzado (2882). 10 años de reinado." },
    { nombre: "Ding Liren", pais: "China", flag: "🇨🇳", periodo: "2023-2024", titulo: "Campeón Mundial", descripcion: "Primer campeón mundial de China. Derrotó a Nepo en el Campeonato Mundial de 2023." },
    { nombre: "D. Gukesh", pais: "India", flag: "🇮🇳", periodo: "2024-presente", titulo: "Campeón Mundial", descripcion: "El campeón mundial más joven en la historia del ajedrez a los 18 años. Nuevo ícono de la era." }
  ],

  // Ranking FIDE Top 10 actual (2025)
  rankingFIDE: [
    { pos: 1, nombre: "Magnus Carlsen", pais: "Noruega", flag: "🇳🇴", elo: 2831, titulo: "GM", edad: 34 },
    { pos: 2, nombre: "Fabiano Caruana", pais: "Estados Unidos", flag: "🇺🇸", elo: 2805, titulo: "GM", edad: 32 },
    { pos: 3, nombre: "D. Gukesh", pais: "India", flag: "🇮🇳", elo: 2794, titulo: "GM", edad: 18 },
    { pos: 4, nombre: "Hikaru Nakamura", pais: "Estados Unidos", flag: "🇺🇸", elo: 2794, titulo: "GM", edad: 35 },
    { pos: 5, nombre: "Arjun Erigaisi", pais: "India", flag: "🇮🇳", elo: 2778, titulo: "GM", edad: 20 },
    { pos: 6, nombre: "Ian Nepomniachtchi", pais: "Rusia", flag: "🇷🇺", elo: 2770, titulo: "GM", edad: 33 },
    { pos: 7, nombre: "Wei Yi", pais: "China", flag: "🇨🇳", elo: 2762, titulo: "GM", edad: 27 },
    { pos: 8, nombre: "Alireza Firouzja", pais: "Irán/Francia", flag: "🇫🇷", elo: 2760, titulo: "GM", edad: 21 },
    { pos: 9, nombre: "Abdusattorov Nodirbek", pais: "Uzbekistán", flag: "🇺🇿", elo: 2756, titulo: "GM", edad: 19 },
    { pos: 10, nombre: "R. Praggnanandhaa", pais: "India", flag: "🇮🇳", elo: 2747, titulo: "GM", edad: 17 }
  ],

  // Magnus Carlsen stats detalle (special section)
  magnusCarlsen: {
    eloMaximo: 2882,
    eloActual: 2831,
    titulos: [
      "Campeonato Mundial 2013-2023 (10 títulos consecutivos)",
      "Ajedrez Rápido Mundial 2014, 2017",
      "Ajedrez Blitz Mundial 2009, 2012, 2014, 2017, 2019"
    ],
    logros: [
      "Mayor ELO jamás alcanzado: 2882 (octubre 2013)",
      "Reinado ininterrumpido de 10 años como campeón mundial",
      "Número 1 del mundo ininterrumpidamente durante más de 12 años",
      "Campeón de 3 Olimpiadas (2010, 2012, 2014)",
      "Ganador del Tata Steel Chess Tournament 5 veces",
      "Ganador del Norway Chess Tournament 8 veces (evento a su nombre)",
      "Único jugador con rating superior a 2850 de forma consistente",
      "Se retiró voluntariamente del título mundial en 2023 por razones personales"
    ]
  },

  // Torneos principales
  torneos: [
    {
      nombre: "Campeonato Mundial de Ajedrez",
      organizador: "FIDE",
      frecuencia: "Cada 2 años",
      formato: "Match de 14 partidas (clásico)",
      descripcion: "El evento más prestigioso. Determina el campeón mundial. Match de eliminación con publicación y defensa de título.",
      ultCampeon: "Gukesh D (2024)"
    },
    {
      nombre: "Candidatos",
      organizador: "FIDE",
      frecuencia: "Cada 2 años",
      formato: "Round-robin 8 jugadores",
      descripcion: "Determina el retador al campeonato mundial. 8 mejores jugadores compiten en sistema todos contra todos.",
      ultCampeon: "Ding Liren (2024)"
    },
    {
      nombre: "Tata Steel Chess Tournament",
      organizador: "Tata Steel",
      frecuencia: "Anual",
      formato: "Doble round-robin Masters",
      descripcion: "Uno de los torneos más fuertes del mundo. Celebrado en Wijk aan Zee, Países Bajos desde 1938.",
      ultCampeon: "Magnus Carlsen (2023)"
    },
    {
      nombre: "Norway Chess",
      organizador: "Federación de Ajedrez de Noruega",
      frecuencia: "Anual",
      formato: "Liga con formato variables",
      descripcion: "Evento importante en Noruega. Reúne a los mejores del mundo. Incluye ajedrez clásico, rápido y blitz.",
      ultCampeon: "Magnus Carlsen (2022)"
    },
    {
      nombre: "Grand Chess Tour",
      organizador: "GCT",
      frecuencia: "Anual",
      formato: "Múltiples eventos",
      descripcion: "Serie de torneos alrededor del mundo con los mejores jugadores. Incluye eventos clásicos, rápido y blitz.",
      ultCampeon: "Magnus Carlsen (2023)"
    },
    {
      nombre: "FIDE Grand Prix",
      organizador: "FIDE",
      frecuencia: "Cada 2 años",
      formato: "Campeonatos de ajedrez rápido",
      descripcion: "Serie de torneos de ajedrez rápido. Ganador clasifica para Candidatos. Demuestra versatiilidad.",
      ultCampeon: "Caruana (2024)"
    },
    {
      nombre: "Olimpiada de Ajedrez",
      organizador: "FIDE",
      frecuencia: "Cada 2 años",
      formato: "Competencia por equipos",
      descripcion: "Mayor evento internacional. Todos los países participan. Ajedrez clásico por equipos (abierto, femenino, sub-20).",
      ultCampeon: "Rusia (2022, ahora FIDE)"
    }
  ],

  // Grandes partidas históricas
  grandesPartidas: [
    {
      año: 1927,
      blancas: "José Raúl Capablanca",
      negras: "Emanuel Lasker",
      evento: "Campeonato Mundial",
      descripcion: "Capablanca derrota a Lasker de forma dominante. Capablanca juega un ajedrez simple y efectivo.",
      apertura: "Defensa India del Rey"
    },
    {
      año: 1972,
      blancas: "Bobby Fischer",
      negras: "Boris Spassky",
      evento: "Campeonato Mundial (Reikiavik)",
      descripcion: "Fischer vs Spassky. Partido del siglo en la Guerra Fría. Fischer gana 12.5-8.5.",
      apertura: "Defensa Siciliana"
    },
    {
      año: 1985,
      blancas: "Garry Kasparov",
      negras: "Anatoly Karpov",
      evento: "Campeonato Mundial",
      descripcion: "Kasparov quiebra la defensa de Karpov. Comienza la era Kasparov. Juego dinámico y agresivo.",
      apertura: "Apertura Inglesa"
    },
    {
      año: 1997,
      blancas: "Deep Blue (Computadora)",
      negras: "Garry Kasparov",
      evento: "Deep Blue vs Kasparov",
      descripcion: "La máquina derrota al campeón mundial. Momento histórico: el ajedrez entra en la era digital.",
      apertura: "Gambito de Dama"
    },
    {
      año: 2013,
      blancas: "Magnus Carlsen",
      negras: "Viswanathan Anand",
      evento: "Campeonato Mundial",
      descripcion: "Carlsen se convierte en campeón mundial. Comienza su dominio histórico de 10 años.",
      apertura: "Defensa Siciliana"
    },
    {
      año: 2016,
      blancas: "Garry Kasparov",
      negras: "Magnus Carlsen",
      evento: "Exposición (Blitz)",
      descripcion: "Kasparov juega a Carlsen en blitz. El ajedrez de Carlsen muestra la evolución del juego.",
      apertura: "Apertura Italiana"
    },
    {
      año: 2024,
      blancas: "D. Gukesh",
      negras: "Ding Liren",
      evento: "Campeonato Mundial",
      descripcion: "Gukesh se convierte en el campeón mundial más joven de la historia a los 18 años.",
      apertura: "Defensa Siciliana"
    },
    {
      año: 2023,
      blancas: "Magnus Carlsen",
      negras: "Arjun Erigaisi",
      evento: "Tata Steel Chess Tournament",
      descripcion: "Carlsen demuestra su maestría incluso después de renunciar al título. Ajedrez de clase mundial.",
      apertura: "Gambito de Dama"
    }
  ],

  // Leyendas
  leyendas: [
    {
      nombre: "Anatoly Karpov",
      pais: "Rusia",
      flag: "🇷🇺",
      eloMax: 2780,
      periodoActivo: "1967-2012",
      titulo: "Campeón Mundial 1975-1985",
      logros: "10 años como campeón. 6 Olimpiadas ganadas. Estilo posicional superior."
    },
    {
      nombre: "Garry Kasparov",
      pais: "Rusia",
      flag: "🇷🇺",
      eloMax: 2851,
      periodoActivo: "1973-2000",
      titulo: "Campeón Mundial 1985-2000",
      logros: "15 años de reinado. ELO máximo histórico 2851. Jugador más fuerte de su era."
    },
    {
      nombre: "Bobby Fischer",
      pais: "Estados Unidos",
      flag: "🇺🇸",
      eloMax: 2785,
      periodoActivo: "1956-1975",
      titulo: "Campeón Mundial 1972-1975",
      logros: "Jugador excéntrico. Famoso por match de 1972. Revolucionó la apertura."
    },
    {
      nombre: "Mikhail Tal",
      pais: "URSS",
      flag: "🇷🇺",
      eloMax: 2700,
      periodoActivo: "1950-1992",
      titulo: "Campeón Mundial 1960-1961",
      logros: "Rey del ataque romántico. Ganó 6 Olimpiadas. Legendario combinador."
    },
    {
      nombre: "Viktor Korchnoi",
      pais: "Suiza",
      flag: "🇨🇭",
      eloMax: 2700,
      periodoActivo: "1950-2000",
      titulo: "Aspirante a Campeón",
      logros: "Legendario luchador. Escapó de la URSS. 2 veces finalista de mundial."
    },
    {
      nombre: "Boris Gelfand",
      pais: "Israel",
      flag: "🇮🇱",
      eloMax: 2773,
      periodoActivo: "1991-2012",
      titulo: "Aspirante a Campeón",
      logros: "Campeón de ajedrez clásico. Finalista del mundial 2012. Experto en finales."
    },
    {
      nombre: "Vladimir Petrosian",
      pais: "URSS",
      flag: "🇷🇺",
      eloMax: 2680,
      periodoActivo: "1950-1984",
      titulo: "Campeón Mundial 1963-1969",
      logros: "Defensor supremo. Jugador profundo. Ganador de 4 Olimpiadas."
    },
    {
      nombre: "Judit Polgar",
      pais: "Hungría",
      flag: "🇭🇺",
      eloMax: 2735,
      periodoActivo: "1986-2014",
      titulo: "Mejor jugadora femenina",
      logros: "Leyenda femenina. Número 8 del mundo en su pico. Pionera del ajedrez."
    },
    {
      nombre: "Akiba Rubinstein",
      pais: "Polonia",
      flag: "🇵🇱",
      eloMax: 2700,
      periodoActivo: "1900-1932",
      titulo: "Maestro de Finales",
      logros: "Leyenda del ajedrez clásico. Experto en finales. Precursor de la teoría moderna."
    }
  ]
};
