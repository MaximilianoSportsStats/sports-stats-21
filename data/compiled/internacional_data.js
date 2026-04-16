/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Fútbol Internacional
   Torneos, Mundiales y Copas Continentales
═══════════════════════════════════════════════════════════ */

window.SS21.internacional = {

  /* ──────────────────────────────────────────────────────
     🌍  COPA DEL MUNDO FIFA
  ────────────────────────────────────────────────────── */
  Mundial: {
    nombre: 'Copa del Mundo FIFA',
    icon: '🌍',
    organizador: 'FIFA',
    fundado: 1930,
    frecuencia: 'Cada 4 años',
    ediciones_total: 23,
    proximo: 'EE.UU. / Canadá / México 2026',
    maxGoleador: { nombre: 'Miroslav Klose', pais: '🇩🇪 Alemania', goles: 16 },
    titulos: {
      'Brasil':    { n: 5, años: [1958, 1962, 1970, 1994, 2002] },
      'Alemania':  { n: 4, años: [1954, 1974, 1990, 2014] },
      'Italia':    { n: 4, años: [1934, 1938, 1982, 2006] },
      'Argentina': { n: 3, años: [1978, 1986, 2022] },
      'Francia':   { n: 2, años: [1998, 2018] },
      'Uruguay':   { n: 2, años: [1930, 1950] },
      'Inglaterra':{ n: 1, años: [1966] },
      'España':    { n: 1, años: [2010] },
    },
    ediciones: [
      { año: 2022, sede: '🇶🇦 Qatar',          campeon: '🇦🇷 Argentina',    subcampeon: '🇫🇷 Francia',      goleador: 'Kylian Mbappé',     goles_lid: 8,  goles_total: 172 },
      { año: 2018, sede: '🇷🇺 Rusia',          campeon: '🇫🇷 Francia',      subcampeon: '🇭🇷 Croacia',      goleador: 'Harry Kane',        goles_lid: 6,  goles_total: 169 },
      { año: 2014, sede: '🇧🇷 Brasil',         campeon: '🇩🇪 Alemania',     subcampeon: '🇦🇷 Argentina',    goleador: 'James Rodríguez',   goles_lid: 6,  goles_total: 171 },
      { año: 2010, sede: '🇿🇦 Sudáfrica',      campeon: '🇪🇸 España',       subcampeon: '🇳🇱 Países Bajos', goleador: 'David Villa',       goles_lid: 5,  goles_total: 145 },
      { año: 2006, sede: '🇩🇪 Alemania',       campeon: '🇮🇹 Italia',       subcampeon: '🇫🇷 Francia',      goleador: 'Miroslav Klose',    goles_lid: 5,  goles_total: 147 },
      { año: 2002, sede: '🇯🇵🇰🇷 Japón/Corea', campeon: '🇧🇷 Brasil',       subcampeon: '🇩🇪 Alemania',     goleador: 'Ronaldo',           goles_lid: 8,  goles_total: 161 },
      { año: 1998, sede: '🇫🇷 Francia',        campeon: '🇫🇷 Francia',      subcampeon: '🇧🇷 Brasil',       goleador: 'Davor Šuker',       goles_lid: 6,  goles_total: 171 },
      { año: 1994, sede: '🇺🇸 EE.UU.',         campeon: '🇧🇷 Brasil',       subcampeon: '🇮🇹 Italia',       goleador: 'Hristo Stoichkov',  goles_lid: 6,  goles_total: 141 },
      { año: 1990, sede: '🇮🇹 Italia',         campeon: '🇩🇪 Alemania Occ.',subcampeon: '🇦🇷 Argentina',    goleador: 'Salvatore Schillaci',goles_lid: 6, goles_total: 115 },
      { año: 1986, sede: '🇲🇽 México',         campeon: '🇦🇷 Argentina',    subcampeon: '🇩🇪 Alemania Occ.',goleador: 'Gary Lineker',      goles_lid: 6,  goles_total: 132 },
      { año: 1982, sede: '🇪🇸 España',         campeon: '🇮🇹 Italia',       subcampeon: '🇩🇪 Alemania Occ.',goleador: 'Paolo Rossi',       goles_lid: 6,  goles_total: 146 },
      { año: 1978, sede: '🇦🇷 Argentina',      campeon: '🇦🇷 Argentina',    subcampeon: '🇳🇱 Países Bajos', goleador: 'Mario Kempes',      goles_lid: 6,  goles_total: 102 },
      { año: 1974, sede: '🇩🇪 Alemania Occ.',  campeon: '🇩🇪 Alemania Occ.',subcampeon: '🇳🇱 Países Bajos', goleador: 'Grzegorz Lato',     goles_lid: 7,  goles_total: 97  },
      { año: 1970, sede: '🇲🇽 México',         campeon: '🇧🇷 Brasil',       subcampeon: '🇮🇹 Italia',       goleador: 'Gerd Müller',       goles_lid: 10, goles_total: 95  },
      { año: 1966, sede: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',   campeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',  subcampeon: '🇩🇪 Alemania Occ.',goleador: 'Eusébio',           goles_lid: 9,  goles_total: 89  },
      { año: 1962, sede: '🇨🇱 Chile',          campeon: '🇧🇷 Brasil',       subcampeon: '🇨🇿 Checoslov.',   goleador: 'Garrincha/Vavá/+',  goles_lid: 4,  goles_total: 89  },
      { año: 1958, sede: '🇸🇪 Suecia',         campeon: '🇧🇷 Brasil',       subcampeon: '🇸🇪 Suecia',       goleador: 'Just Fontaine',     goles_lid: 13, goles_total: 126 },
      { año: 1954, sede: '🇨🇭 Suiza',          campeon: '🇩🇪 Alemania Occ.',subcampeon: '🇭🇺 Hungría',      goleador: 'Sándor Kocsis',     goles_lid: 11, goles_total: 140 },
      { año: 1950, sede: '🇧🇷 Brasil',         campeon: '🇺🇾 Uruguay',      subcampeon: '🇧🇷 Brasil',       goleador: 'Ademir',            goles_lid: 9,  goles_total: 88  },
      { año: 1938, sede: '🇫🇷 Francia',        campeon: '🇮🇹 Italia',       subcampeon: '🇭🇺 Hungría',      goleador: 'Leônidas da Silva', goles_lid: 8,  goles_total: 84  },
      { año: 1934, sede: '🇮🇹 Italia',         campeon: '🇮🇹 Italia',       subcampeon: '🇨🇿 Checoslov.',   goleador: 'Oldřich Nejedlý',   goles_lid: 5,  goles_total: 70  },
      { año: 1930, sede: '🇺🇾 Uruguay',        campeon: '🇺🇾 Uruguay',      subcampeon: '🇦🇷 Argentina',    goleador: 'Guillermo Stábile', goles_lid: 8,  goles_total: 70  },
    ],
    maxGoleadores_historicos: [
      { nombre: 'Miroslav Klose',   pais: '🇩🇪',  goles: 16 },
      { nombre: 'Ronaldo',          pais: '🇧🇷',  goles: 15 },
      { nombre: 'Gerd Müller',      pais: '🇩🇪',  goles: 14 },
      { nombre: 'Just Fontaine',    pais: '🇫🇷',  goles: 13 },
      { nombre: 'Pelé',             pais: '🇧🇷',  goles: 12 },
      { nombre: 'Kylian Mbappé',    pais: '🇫🇷',  goles: 12 },
      { nombre: 'Sándor Kocsis',    pais: '🇭🇺',  goles: 11 },
      { nombre: 'Jürgen Klinsmann', pais: '🇩🇪',  goles: 11 },
      { nombre: 'Helmut Rahn',      pais: '🇩🇪',  goles: 10 },
      { nombre: 'Teófilo Cubillas', pais: '🇵🇪',  goles: 10 },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🌎  COPA AMÉRICA (CONMEBOL)
  ────────────────────────────────────────────────────── */
  CopaAmerica: {
    nombre: 'Copa América CONMEBOL',
    icon: '🌎',
    organizador: 'CONMEBOL',
    fundado: 1916,
    frecuencia: 'Cada 4 años (variable)',
    ediciones_total: 48,
    titulos: {
      'Argentina': { n: 16, años: [1921,1925,1927,1929,1937,1941,1945,1946,1947,1955,1957,1959,1991,1993,2021,2024] },
      'Uruguay':   { n: 15, años: [1916,1917,1920,1923,1924,1926,1935,1942,1956,1959,1967,1983,1987,1995,2011] },
      'Brasil':    { n: 9,  años: [1919,1922,1949,1989,1997,1999,2004,2007,2019] },
      'Chile':     { n: 2,  años: [2015,2016] },
      'Paraguay':  { n: 2,  años: [1953,1979] },
      'Perú':      { n: 2,  años: [1939,1975] },
      'Colombia':  { n: 1,  años: [2001] },
      'Bolivia':   { n: 1,  años: [1963] },
    },
    ediciones: [
      { año: 2024, sede: '🇺🇸 EE.UU.',    campeon: '🇦🇷 Argentina',  subcampeon: '🇨🇴 Colombia',  resultado: '1-0' },
      { año: 2021, sede: '🇧🇷 Brasil',    campeon: '🇦🇷 Argentina',  subcampeon: '🇧🇷 Brasil',    resultado: '1-0' },
      { año: 2019, sede: '🇧🇷 Brasil',    campeon: '🇧🇷 Brasil',     subcampeon: '🇵🇪 Perú',      resultado: '3-1' },
      { año: 2016, sede: '🇺🇸 EE.UU.',    campeon: '🇨🇱 Chile',      subcampeon: '🇦🇷 Argentina', resultado: '0-0 (4-2 pen.)' },
      { año: 2015, sede: '🇨🇱 Chile',     campeon: '🇨🇱 Chile',      subcampeon: '🇦🇷 Argentina', resultado: '0-0 (4-1 pen.)' },
      { año: 2011, sede: '🇦🇷 Argentina', campeon: '🇺🇾 Uruguay',    subcampeon: '🇵🇾 Paraguay',  resultado: '3-0' },
      { año: 2007, sede: '🇻🇪 Venezuela', campeon: '🇧🇷 Brasil',     subcampeon: '🇦🇷 Argentina', resultado: '3-0' },
      { año: 2004, sede: '🇵🇪 Perú',     campeon: '🇧🇷 Brasil',     subcampeon: '🇦🇷 Argentina', resultado: '2-2 (4-2 pen.)' },
      { año: 2001, sede: '🇨🇴 Colombia',  campeon: '🇨🇴 Colombia',   subcampeon: '🇲🇽 México',    resultado: '1-0' },
      { año: 1999, sede: '🇵🇾 Paraguay',  campeon: '🇧🇷 Brasil',     subcampeon: '🇺🇾 Uruguay',   resultado: '3-0' },
      { año: 1997, sede: '🇧🇴 Bolivia',   campeon: '🇧🇷 Brasil',     subcampeon: '🇧🇴 Bolivia',   resultado: '3-1' },
      { año: 1995, sede: '🇺🇾 Uruguay',   campeon: '🇺🇾 Uruguay',    subcampeon: '🇧🇷 Brasil',    resultado: '1-1 (5-3 pen.)' },
      { año: 1993, sede: '🇪🇨 Ecuador',   campeon: '🇦🇷 Argentina',  subcampeon: '🇲🇽 México',    resultado: '2-1' },
      { año: 1991, sede: '🇨🇱 Chile',     campeon: '🇦🇷 Argentina',  subcampeon: '🇧🇷 Brasil',    resultado: 'fase grupos' },
      { año: 1989, sede: '🇧🇷 Brasil',    campeon: '🇧🇷 Brasil',     subcampeon: '🇺🇾 Uruguay',   resultado: 'fase grupos' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🇪🇺  UEFA EUROCOPA
  ────────────────────────────────────────────────────── */
  EURO: {
    nombre: 'UEFA Eurocopa',
    icon: '🇪🇺',
    organizador: 'UEFA',
    fundado: 1960,
    frecuencia: 'Cada 4 años',
    ediciones_total: 17,
    titulos: {
      'Alemania':       { n: 3, años: [1972,1980,1996] },
      'España':         { n: 3, años: [1964,2008,2012] },
      'Francia':        { n: 2, años: [1984,2000] },
      'Italia':         { n: 2, años: [1968,2021] },
      'Países Bajos':   { n: 1, años: [1988] },
      'Checoslov.':     { n: 1, años: [1976] },
      'Dinamarca':      { n: 1, años: [1992] },
      'Grecia':         { n: 1, años: [2004] },
      'Portugal':       { n: 1, años: [2016] },
      'URSS':           { n: 1, años: [1960] },
    },
    ediciones: [
      { año: 2024, sede: '🇩🇪 Alemania',       campeon: '🇪🇸 España',       subcampeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',  resultado: '2-1' },
      { año: 2021, sede: '🌍 Multi-sede',      campeon: '🇮🇹 Italia',       subcampeon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',  resultado: '1-1 (3-2 pen.)' },
      { año: 2016, sede: '🇫🇷 Francia',        campeon: '🇵🇹 Portugal',     subcampeon: '🇫🇷 Francia',      resultado: '1-0 prol.' },
      { año: 2012, sede: '🇵🇱🇺🇦 Pol./Ucr.',   campeon: '🇪🇸 España',       subcampeon: '🇮🇹 Italia',       resultado: '4-0' },
      { año: 2008, sede: '🇦🇹🇨🇭 Aus./Sui.',   campeon: '🇪🇸 España',       subcampeon: '🇩🇪 Alemania',     resultado: '1-0' },
      { año: 2004, sede: '🇵🇹 Portugal',       campeon: '🇬🇷 Grecia',       subcampeon: '🇵🇹 Portugal',     resultado: '1-0' },
      { año: 2000, sede: '🇧🇪🇳🇱 Bél./P.B.',   campeon: '🇫🇷 Francia',      subcampeon: '🇮🇹 Italia',       resultado: '2-1 O.Oro' },
      { año: 1996, sede: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra',   campeon: '🇩🇪 Alemania',     subcampeon: '🇨🇿 Rep. Checa',   resultado: '2-1 O.Oro' },
      { año: 1992, sede: '🇸🇪 Suecia',         campeon: '🇩🇰 Dinamarca',    subcampeon: '🇩🇪 Alemania',     resultado: '2-0' },
      { año: 1988, sede: '🇩🇪 Alemania Occ.',  campeon: '🇳🇱 Países Bajos', subcampeon: '🇧🇪 URSS',         resultado: '2-0' },
      { año: 1984, sede: '🇫🇷 Francia',        campeon: '🇫🇷 Francia',      subcampeon: '🇪🇸 España',       resultado: '2-0' },
      { año: 1980, sede: '🇮🇹 Italia',         campeon: '🇩🇪 Alemania Occ.',subcampeon: '🇧🇪 Bélgica',      resultado: '2-1' },
      { año: 1976, sede: '🇷🇸 Yugoslavia',     campeon: '🇨🇿 Checoslov.',   subcampeon: '🇩🇪 Alemania Occ.',resultado: '2-2 (5-3 pen.)' },
      { año: 1972, sede: '🇧🇪 Bélgica',        campeon: '🇩🇪 Alemania Occ.',subcampeon: '🇦🇿 URSS',         resultado: '3-0' },
      { año: 1968, sede: '🇮🇹 Italia',         campeon: '🇮🇹 Italia',       subcampeon: '🇷🇸 Yugoslavia',   resultado: '2-0 (replay)' },
      { año: 1964, sede: '🇪🇸 España',         campeon: '🇪🇸 España',       subcampeon: '🇦🇿 URSS',         resultado: '2-1' },
      { año: 1960, sede: '🇫🇷 Francia',        campeon: '🇦🇿 URSS',         subcampeon: '🇷🇸 Yugoslavia',   resultado: '2-1 prol.' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🌍  COPA AFRICANA DE NACIONES (AFCON)
  ────────────────────────────────────────────────────── */
  AFCON: {
    nombre: 'Copa Africana de Naciones',
    icon: '🌍',
    organizador: 'CAF',
    fundado: 1957,
    frecuencia: 'Cada 2 años',
    ediciones_total: 34,
    titulos: {
      'Egipto':        { n: 7, años: [1957,1959,1986,1998,2006,2008,2010] },
      'Camerún':       { n: 5, años: [1984,1988,2000,2002,2017] },
      'Ghana':         { n: 4, años: [1963,1965,1978,1982] },
      'Nigeria':       { n: 3, años: [1980,1994,2013] },
      'Costa de Marfil':{ n: 3, años: [1992,2015,2024] },
      'Senegal':       { n: 1, años: [2022] },
      'Algeria':       { n: 2, años: [1990,2019] },
      'Marruecos':     { n: 1, años: [1976] },
      'Sudáfrica':     { n: 1, años: [1996] },
      'Túnez':         { n: 1, años: [2004] },
      'Zambia':        { n: 1, años: [2012] },
    },
    ediciones: [
      { año: 2024, sede: '🇨🇮 Costa de Marfil', campeon: '🇨🇮 Costa de Marfil', subcampeon: '🇳🇬 Nigeria',         resultado: '2-1' },
      { año: 2022, sede: '🇨🇲 Camerún',         campeon: '🇸🇳 Senegal',          subcampeon: '🇪🇬 Egipto',          resultado: '0-0 (4-2 pen.)' },
      { año: 2019, sede: '🇪🇬 Egipto',          campeon: '🇩🇿 Algeria',          subcampeon: '🇸🇳 Senegal',         resultado: '1-0' },
      { año: 2017, sede: '🇬🇦 Gabón',           campeon: '🇨🇲 Camerún',          subcampeon: '🇪🇬 Egipto',          resultado: '2-1' },
      { año: 2015, sede: '🇬🇳 Guinea Ecuat.',    campeon: '🇨🇮 Costa de Marfil',  subcampeon: '🇬🇭 Ghana',           resultado: '0-0 (9-8 pen.)' },
      { año: 2013, sede: '🇿🇦 Sudáfrica',       campeon: '🇳🇬 Nigeria',          subcampeon: '🇧🇫 Burkina Faso',    resultado: '1-0' },
      { año: 2012, sede: '🇬🇦🇬🇶 Gab./G.Ec.',   campeon: '🇿🇲 Zambia',           subcampeon: '🇨🇮 Costa de Marfil', resultado: '0-0 (8-7 pen.)' },
      { año: 2010, sede: '🇦🇴 Angola',          campeon: '🇪🇬 Egipto',           subcampeon: '🇬🇭 Ghana',           resultado: '1-0' },
      { año: 2008, sede: '🇬🇭 Ghana',           campeon: '🇪🇬 Egipto',           subcampeon: '🇨🇲 Camerún',         resultado: '1-0' },
      { año: 2006, sede: '🇪🇬 Egipto',          campeon: '🇪🇬 Egipto',           subcampeon: '🇨🇮 Costa de Marfil', resultado: '0-0 (4-2 pen.)' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🌎  COPA ORO CONCACAF
  ────────────────────────────────────────────────────── */
  GoldCup: {
    nombre: 'Copa Oro CONCACAF',
    icon: '🌎',
    organizador: 'CONCACAF',
    fundado: 1991,
    frecuencia: 'Cada 2 años',
    ediciones_total: 18,
    titulos: {
      'México':          { n: 12, años: [1993,1996,1998,2003,2009,2011,2015,2019,2023] },
      'EE.UU.':          { n: 7,  años: [1991,2002,2005,2007,2013,2017,2021] },
      'Canadá':          { n: 1,  años: [2000] },
      'Costa Rica':      { n: 0,  años: [] },
    },
    ediciones: [
      { año: 2023, sede: '🇺🇸 EE.UU.',     campeon: '🇲🇽 México',   subcampeon: '🇵🇦 Panamá',   resultado: '1-0' },
      { año: 2021, sede: '🇺🇸 EE.UU.',     campeon: '🇺🇸 EE.UU.',   subcampeon: '🇲🇽 México',   resultado: '1-0' },
      { año: 2019, sede: '🇺🇸 EE.UU.',     campeon: '🇲🇽 México',   subcampeon: '🇺🇸 EE.UU.',   resultado: '1-0' },
      { año: 2017, sede: '🇺🇸 EE.UU.',     campeon: '🇺🇸 EE.UU.',   subcampeon: '🇯🇲 Jamaica',  resultado: '2-1' },
      { año: 2015, sede: '🇺🇸 EE.UU.',     campeon: '🇲🇽 México',   subcampeon: '🇯🇲 Jamaica',  resultado: '3-1' },
      { año: 2013, sede: '🇺🇸 EE.UU.',     campeon: '🇺🇸 EE.UU.',   subcampeon: '🇵🇦 Panamá',   resultado: '1-0' },
      { año: 2011, sede: '🇺🇸 EE.UU.',     campeon: '🇲🇽 México',   subcampeon: '🇺🇸 EE.UU.',   resultado: '4-2' },
      { año: 2009, sede: '🇺🇸 EE.UU.',     campeon: '🇲🇽 México',   subcampeon: '🇺🇸 EE.UU.',   resultado: '5-0' },
    ]
  },

  /* ──────────────────────────────────────────────────────
     🌏  COPA ASIÁTICA AFC
  ────────────────────────────────────────────────────── */
  AsianCup: {
    nombre: 'Copa Asiática AFC',
    icon: '🌏',
    organizador: 'AFC',
    fundado: 1956,
    frecuencia: 'Cada 4 años',
    ediciones_total: 18,
    titulos: {
      'Japón':                { n: 4, años: [1992,2000,2004,2011] },
      'Arabia Saudita':       { n: 3, años: [1984,1988,1996] },
      'Irán':                 { n: 3, años: [1968,1972,1976] },
      'Corea del Sur':        { n: 2, años: [1956,1960] },
      'Kuwait':               { n: 1, años: [1980] },
      'Iraq':                 { n: 1, años: [2007] },
      'Australia':            { n: 1, años: [2015] },
      'Qatar':                { n: 1, años: [2019] },
      'Jordania':             { n: 1, años: [2023] },
    },
    ediciones: [
      { año: 2023, sede: '🇶🇦 Qatar',           campeon: '🇯🇴 Jordania',      subcampeon: '🇰🇷 Corea del Sur',resultado: '3-1' },
      { año: 2019, sede: '🇦🇪 Emiratos Á.U.',   campeon: '🇶🇦 Qatar',          subcampeon: '🇯🇵 Japón',        resultado: '3-1' },
      { año: 2015, sede: '🇦🇺 Australia',       campeon: '🇦🇺 Australia',      subcampeon: '🇰🇷 Corea del Sur',resultado: '2-1 prol.' },
      { año: 2011, sede: '🇶🇦 Qatar',           campeon: '🇯🇵 Japón',          subcampeon: '🇦🇺 Australia',    resultado: '1-0 prol.' },
      { año: 2007, sede: '🌏 Multi-sede',      campeon: '🇮🇶 Iraq',           subcampeon: '🇸🇦 Arabia Saudita',resultado: '1-0' },
      { año: 2004, sede: '🇨🇳 China',           campeon: '🇯🇵 Japón',          subcampeon: '🇨🇳 China',        resultado: '3-1' },
      { año: 2000, sede: '🇱🇧 Líbano',          campeon: '🇯🇵 Japón',          subcampeon: '🇸🇦 Arabia Saudita',resultado: '1-0' },
      { año: 1996, sede: '🇦🇪 Emiratos Á.U.',   campeon: '🇸🇦 Arabia Saudita', subcampeon: '🇦🇪 Emiratos Á.U.',resultado: '0-0 (4-2 pen.)' },
    ]
  }

};

console.log('[SS21 Internacional] Torneos cargados:', Object.keys(window.SS21.internacional).length);
