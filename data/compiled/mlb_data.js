/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Major League Baseball
   Fuentes: mlb.com, baseball-reference.com, wikipedia
═══════════════════════════════════════════════════════════ */

window.SS21.mlb = {

  /* ── WORLD SERIES HISTÓRICO 1903-2025 ────────────────── */
  worldSeries: [
    { año:2025, campeon:'Los Angeles Dodgers', subcampeon:'Houston Astros', resultado:'4-1', mvp:'Freddie Freeman', sede:'LA', liga:['AL','NL'] },
    { año:2024, campeon:'Los Angeles Dodgers', subcampeon:'New York Yankees', resultado:'4-1', mvp:'Freddie Freeman', sede:'LA', liga:['AL','NL'] },
    { año:2023, campeon:'Texas Rangers', subcampeon:'Arizona Diamondbacks', resultado:'4-1', mvp:'Corey Seager', sede:'Arlington', liga:['AL','NL'] },
    { año:2022, campeon:'Houston Astros', subcampeon:'Philadelphia Phillies', resultado:'4-2', mvp:'Kyle Schwarber', sede:'Houston', liga:['AL','NL'] },
    { año:2021, campeon:'Atlanta Braves', subcampeon:'Houston Astros', resultado:'4-2', mvp:'Jorge Soler', sede:'Atlanta', liga:['AL','NL'] },
    { año:2020, campeon:'Los Angeles Dodgers', subcampeon:'Tampa Bay Rays', resultado:'4-2', mvp:'Corey Seager', sede:'Arlington', liga:['AL','NL'] },
    { año:2019, campeon:'Washington Nationals', subcampeon:'Houston Astros', resultado:'4-3', mvp:'Stephen Strasburg', sede:'Washington', liga:['AL','NL'] },
    { año:2018, campeon:'Boston Red Sox', subcampeon:'Los Angeles Dodgers', resultado:'4-1', mvp:'David Ortiz', sede:'Boston', liga:['AL','NL'] },
    { año:2017, campeon:'Houston Astros', subcampeon:'Los Angeles Dodgers', resultado:'4-3', mvp:'George Springer', sede:'Houston', liga:['AL','NL'] },
    { año:2016, campeon:'Chicago Cubs', subcampeon:'Cleveland Indians', resultado:'4-3', mvp:'Ben Zobrist', sede:'Chicago', liga:['AL','NL'] },
    { año:2015, campeon:'Kansas City Royals', subcampeon:'New York Mets', resultado:'4-1', mvp:'Salvador Perez', sede:'Kansas City', liga:['AL','NL'] },
    { año:2014, campeon:'San Francisco Giants', subcampeon:'Kansas City Royals', resultado:'4-1', mvp:'Edgar Rentería', sede:'San Francisco', liga:['AL','NL'] },
    { año:2013, campeon:'Boston Red Sox', subcampeon:'St. Louis Cardinals', resultado:'4-2', mvp:'David Ortiz', sede:'Boston', liga:['AL','NL'] },
    { año:2012, campeon:'San Francisco Giants', subcampeon:'Detroit Tigers', resultado:'4-0', mvp:'Edgar Rentería', sede:'San Francisco', liga:['AL','NL'] },
    { año:2011, campeon:'St. Louis Cardinals', subcampeon:'Texas Rangers', resultado:'4-3', mvp:'David Freese', sede:'St. Louis', liga:['AL','NL'] },
    { año:2010, campeon:'San Francisco Giants', subcampeon:'Texas Rangers', resultado:'4-1', mvp:'Edgar Rentería', sede:'San Francisco', liga:['AL','NL'] },
    { año:2009, campeon:'New York Yankees', subcampeon:'Philadelphia Phillies', resultado:'4-2', mvp:'Hideki Matsui', sede:'Bronx', liga:['AL','NL'] },
    { año:2008, campeon:'Philadelphia Phillies', subcampeon:'Tampa Bay Rays', resultado:'4-1', mvp:'Cole Hamels', sede:'Philadelphia', liga:['AL','NL'] },
    { año:2007, campeon:'Boston Red Sox', subcampeon:'Colorado Rockies', resultado:'4-0', mvp:'Mike Lowell', sede:'Boston', liga:['AL','NL'] },
    { año:2006, campeon:'St. Louis Cardinals', subcampeon:'Detroit Tigers', resultado:'4-1', mvp:'David Eckstein', sede:'St. Louis', liga:['AL','NL'] },
    { año:2005, campeon:'Chicago White Sox', subcampeon:'Houston Astros', resultado:'4-0', mvp:'Jermaine Dye', sede:'Chicago', liga:['AL','NL'] },
    { año:2004, campeon:'Boston Red Sox', subcampeon:'St. Louis Cardinals', resultado:'4-0', mvp:'Manny Ramírez', sede:'Boston', liga:['AL','NL'] },
    { año:2003, campeon:'Florida Marlins', subcampeon:'New York Yankees', resultado:'4-2', mvp:'Josh Beckett', sede:'Miami', liga:['AL','NL'] },
    { año:2002, campeon:'Anaheim Angels', subcampeon:'San Francisco Giants', resultado:'4-3', mvp:'Troy Glaus', sede:'Anaheim', liga:['AL','NL'] },
    { año:2001, campeon:'Arizona Diamondbacks', subcampeon:'New York Yankees', resultado:'4-3', mvp:'Randy Johnson', sede:'Phoenix', liga:['AL','NL'] },
    { año:2000, campeon:'New York Yankees', subcampeon:'New York Mets', resultado:'4-1', mvp:'Derek Jeter', sede:'Bronx', liga:['AL','NL'] },
    { año:1999, campeon:'New York Yankees', subcampeon:'Atlanta Braves', resultado:'4-0', mvp:'Mariano Rivera', sede:'Bronx', liga:['AL','NL'] },
    { año:1998, campeon:'New York Yankees', subcampeon:'San Diego Padres', resultado:'4-0', mvp:'Scott Brosius', sede:'Bronx', liga:['AL','NL'] },
    { año:1997, campeon:'Florida Marlins', subcampeon:'Cleveland Indians', resultado:'4-3', mvp:'Liván Hernández', sede:'Miami', liga:['AL','NL'] },
    { año:1996, campeon:'New York Yankees', subcampeon:'Atlanta Braves', resultado:'4-2', mvp:'John Wetteland', sede:'Bronx', liga:['AL','NL'] },
    { año:1995, campeon:'Atlanta Braves', subcampeon:'Cleveland Indians', resultado:'4-2', mvp:'Tom Glavine', sede:'Atlanta', liga:['AL','NL'] },
    { año:1994, campeon:'NO SERIES', subcampeon:'(Huelga de jugadores)', resultado:'Cancelado', mvp:'—', sede:'—', liga:['—','—'] },
    { año:1993, campeon:'Toronto Blue Jays', subcampeon:'Philadelphia Phillies', resultado:'4-2', mvp:'Paul Molitor', sede:'Toronto', liga:['AL','NL'] },
    { año:1992, campeon:'Toronto Blue Jays', subcampeon:'Atlanta Braves', resultado:'4-2', mvp:'John Smoltz', sede:'Toronto', liga:['AL','NL'] },
    { año:1991, campeon:'Minnesota Twins', subcampeon:'Atlanta Braves', resultado:'4-3', mvp:'Jack Morris', sede:'Minneapolis', liga:['AL','NL'] },
    { año:1990, campeon:'Cincinnati Reds', subcampeon:'Oakland A\'s', resultado:'4-0', mvp:'José Rijo', sede:'Cincinnati', liga:['AL','NL'] },
    { año:1989, campeon:'Oakland A\'s', subcampeon:'San Francisco Giants', resultado:'4-0', mvp:'Dave Stewart', sede:'Oakland', liga:['AL','NL'] },
    { año:1988, campeon:'Los Angeles Dodgers', subcampeon:'Oakland A\'s', resultado:'4-1', mvp:'Orel Hershiser', sede:'LA', liga:['AL','NL'] },
    { año:1987, campeon:'Minnesota Twins', subcampeon:'St. Louis Cardinals', resultado:'4-3', mvp:'Frank Viola', sede:'Minneapolis', liga:['AL','NL'] },
    { año:1986, campeon:'New York Mets', subcampeon:'Boston Red Sox', resultado:'4-3', mvp:'Ray Knight', sede:'Shea Stadium', liga:['AL','NL'] },
    { año:1985, campeon:'Kansas City Royals', subcampeon:'St. Louis Cardinals', resultado:'4-3', mvp:'Bret Saberhagen', sede:'Kansas City', liga:['AL','NL'] },
    { año:1984, campeon:'Detroit Tigers', subcampeon:'San Diego Padres', resultado:'4-1', mvp:'Alan Trammell', sede:'Detroit', liga:['AL','NL'] },
    { año:1983, campeon:'Baltimore Orioles', subcampeon:'Philadelphia Phillies', resultado:'4-1', mvp:'Rick Dempsey', sede:'Baltimore', liga:['AL','NL'] },
    { año:1982, campeon:'St. Louis Cardinals', subcampeon:'Milwaukee Brewers', resultado:'4-3', mvp:'Darrell Porter', sede:'St. Louis', liga:['AL','NL'] },
    { año:1981, campeon:'Los Angeles Dodgers', subcampeon:'New York Yankees', resultado:'4-2', mvp:'Ron Cey', sede:'LA', liga:['AL','NL'] },
    { año:1980, campeon:'Philadelphia Phillies', subcampeon:'Kansas City Royals', resultado:'4-2', mvp:'Mike Schmidt', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1979, campeon:'Pittsburgh Pirates', subcampeon:'Baltimore Orioles', resultado:'4-3', mvp:'Willie Stargell', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1978, campeon:'New York Yankees', subcampeon:'Los Angeles Dodgers', resultado:'4-2', mvp:'Bucky Dent', sede:'Bronx', liga:['AL','NL'] },
    { año:1977, campeon:'New York Yankees', subcampeon:'Los Angeles Dodgers', resultado:'4-2', mvp:'Reggie Jackson', sede:'Bronx', liga:['AL','NL'] },
    { año:1976, campeon:'Cincinnati Reds', subcampeon:'New York Yankees', resultado:'4-0', mvp:'Johnny Bench', sede:'Cincinnati', liga:['AL','NL'] },
    { año:1975, campeon:'Cincinnati Reds', subcampeon:'Boston Red Sox', resultado:'4-3', mvp:'Pete Rose', sede:'Cincinnati', liga:['AL','NL'] },
    { año:1974, campeon:'Oakland A\'s', subcampeon:'Los Angeles Dodgers', resultado:'4-1', mvp:'Rollie Fingers', sede:'Oakland', liga:['AL','NL'] },
    { año:1973, campeon:'Oakland A\'s', subcampeon:'New York Mets', resultado:'4-3', mvp:'Reggie Jackson', sede:'Oakland', liga:['AL','NL'] },
    { año:1972, campeon:'Oakland A\'s', subcampeon:'Cincinnati Reds', resultado:'4-3', mvp:'Gene Tenace', sede:'Oakland', liga:['AL','NL'] },
    { año:1971, campeon:'Pittsburgh Pirates', subcampeon:'Baltimore Orioles', resultado:'4-3', mvp:'Roberto Clemente', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1970, campeon:'Baltimore Orioles', subcampeon:'Cincinnati Reds', resultado:'4-1', mvp:'Brooks Robinson', sede:'Baltimore', liga:['AL','NL'] },
    { año:1969, campeon:'New York Mets', subcampeon:'Baltimore Orioles', resultado:'4-1', mvp:'Donn Clendenon', sede:'Shea Stadium', liga:['AL','NL'] },
    { año:1968, campeon:'Detroit Tigers', subcampeon:'St. Louis Cardinals', resultado:'4-3', mvp:'Mickey Lolich', sede:'Detroit', liga:['AL','NL'] },
    { año:1967, campeon:'St. Louis Cardinals', subcampeon:'Boston Red Sox', resultado:'4-3', mvp:'Bob Gibson', sede:'St. Louis', liga:['AL','NL'] },
    { año:1966, campeon:'Baltimore Orioles', subcampeon:'Los Angeles Dodgers', resultado:'4-0', mvp:'Frank Robinson', sede:'Baltimore', liga:['AL','NL'] },
    { año:1965, campeon:'Los Angeles Dodgers', subcampeon:'Minnesota Twins', resultado:'4-3', mvp:'Sandy Koufax', sede:'LA', liga:['AL','NL'] },
    { año:1964, campeon:'St. Louis Cardinals', subcampeon:'New York Yankees', resultado:'4-3', mvp:'Bob Gibson', sede:'St. Louis', liga:['AL','NL'] },
    { año:1963, campeon:'Los Angeles Dodgers', subcampeon:'New York Yankees', resultado:'4-0', mvp:'Sandy Koufax', sede:'LA', liga:['AL','NL'] },
    { año:1962, campeon:'New York Yankees', subcampeon:'San Francisco Giants', resultado:'4-3', mvp:'Ralph Terry', sede:'Bronx', liga:['AL','NL'] },
    { año:1961, campeon:'New York Yankees', subcampeon:'Cincinnati Reds', resultado:'4-1', mvp:'Whitey Ford', sede:'Bronx', liga:['AL','NL'] },
    { año:1960, campeon:'Pittsburgh Pirates', subcampeon:'New York Yankees', resultado:'4-3', mvp:'Bobby Richardson', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1959, campeon:'Chicago White Sox', subcampeon:'Los Angeles Dodgers', resultado:'4-2', mvp:'Larry Sherry', sede:'Chicago', liga:['AL','NL'] },
    { año:1958, campeon:'New York Yankees', subcampeon:'Milwaukee Braves', resultado:'4-3', mvp:'Bob Turley', sede:'Bronx', liga:['AL','NL'] },
    { año:1957, campeon:'Milwaukee Braves', subcampeon:'New York Yankees', resultado:'4-3', mvp:'Lew Burdette', sede:'Milwaukee', liga:['AL','NL'] },
    { año:1956, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-3', mvp:'Don Larsen', sede:'Bronx', liga:['AL','NL'] },
    { año:1955, campeon:'Brooklyn Dodgers', subcampeon:'New York Yankees', resultado:'4-3', mvp:'Johnny Podres', sede:'Brooklyn', liga:['AL','NL'] },
    { año:1954, campeon:'New York Giants', subcampeon:'Cleveland Indians', resultado:'4-0', mvp:'Dusty Rhodes', sede:'New York', liga:['AL','NL'] },
    { año:1953, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-2', mvp:'Billy Martin', sede:'Bronx', liga:['AL','NL'] },
    { año:1952, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-3', mvp:'Johnny Mize', sede:'Bronx', liga:['AL','NL'] },
    { año:1951, campeon:'New York Yankees', subcampeon:'New York Giants', resultado:'4-2', mvp:'Joe DiMaggio', sede:'Bronx', liga:['AL','NL'] },
    { año:1950, campeon:'New York Yankees', subcampeon:'Philadelphia Phillies', resultado:'4-0', mvp:'Whitey Ford', sede:'Bronx', liga:['AL','NL'] },
    { año:1949, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-1', mvp:'Joe Page', sede:'NY', liga:['AL','NL'] },
    { año:1948, campeon:'Cleveland Indians', subcampeon:'Boston Braves', resultado:'4-2', mvp:'Gene Bearden', sede:'Cleveland', liga:['AL','NL'] },
    { año:1947, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-3', mvp:'Al Gionfriddo', sede:'NY', liga:['AL','NL'] },
    { año:1946, campeon:'St. Louis Cardinals', subcampeon:'Boston Red Sox', resultado:'4-3', mvp:'Harry Brecheen', sede:'St. Louis', liga:['AL','NL'] },
    { año:1945, campeon:'Detroit Tigers', subcampeon:'Chicago Cubs', resultado:'4-3', mvp:'Hal Newhouser', sede:'Detroit', liga:['AL','NL'] },
    { año:1944, campeon:'St. Louis Cardinals', subcampeon:'St. Louis Browns', resultado:'4-2', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1943, campeon:'New York Yankees', subcampeon:'St. Louis Cardinals', resultado:'4-1', mvp:'N/A', sede:'NY', liga:['AL','NL'] },
    { año:1942, campeon:'St. Louis Cardinals', subcampeon:'New York Yankees', resultado:'4-1', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1941, campeon:'New York Yankees', subcampeon:'Brooklyn Dodgers', resultado:'4-1', mvp:'N/A', sede:'NY', liga:['AL','NL'] },
    { año:1940, campeon:'Cincinnati Reds', subcampeon:'Detroit Tigers', resultado:'4-3', mvp:'N/A', sede:'Cincinnati', liga:['AL','NL'] },
    { año:1939, campeon:'New York Yankees', subcampeon:'Cincinnati Reds', resultado:'4-0', mvp:'N/A', sede:'NY', liga:['AL','NL'] },
    { año:1938, campeon:'New York Yankees', subcampeon:'Chicago Cubs', resultado:'4-0', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1937, campeon:'New York Yankees', subcampeon:'New York Giants', resultado:'4-1', mvp:'N/A', sede:'NY', liga:['AL','NL'] },
    { año:1936, campeon:'New York Yankees', subcampeon:'New York Giants', resultado:'4-2', mvp:'N/A', sede:'NY', liga:['AL','NL'] },
    { año:1935, campeon:'Detroit Tigers', subcampeon:'Chicago Cubs', resultado:'4-2', mvp:'N/A', sede:'Detroit', liga:['AL','NL'] },
    { año:1934, campeon:'St. Louis Cardinals', subcampeon:'Detroit Tigers', resultado:'4-3', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1933, campeon:'New York Giants', subcampeon:'Washington Senators', resultado:'4-1', mvp:'N/A', sede:'New York', liga:['AL','NL'] },
    { año:1932, campeon:'New York Yankees', subcampeon:'Chicago Cubs', resultado:'4-0', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1931, campeon:'St. Louis Cardinals', subcampeon:'Philadelphia Athletics', resultado:'4-3', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1930, campeon:'Philadelphia Athletics', subcampeon:'St. Louis Cardinals', resultado:'4-2', mvp:'N/A', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1929, campeon:'Philadelphia Athletics', subcampeon:'Chicago Cubs', resultado:'4-1', mvp:'N/A', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1928, campeon:'New York Yankees', subcampeon:'St. Louis Cardinals', resultado:'4-0', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1927, campeon:'New York Yankees', subcampeon:'Pittsburgh Pirates', resultado:'4-0', mvp:'N/A', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1926, campeon:'St. Louis Cardinals', subcampeon:'New York Yankees', resultado:'4-3', mvp:'N/A', sede:'St. Louis', liga:['AL','NL'] },
    { año:1925, campeon:'Pittsburgh Pirates', subcampeon:'Washington Senators', resultado:'4-3', mvp:'N/A', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1924, campeon:'Washington Senators', subcampeon:'New York Giants', resultado:'4-3', mvp:'N/A', sede:'Washington', liga:['AL','NL'] },
    { año:1923, campeon:'New York Yankees', subcampeon:'New York Giants', resultado:'4-2', mvp:'N/A', sede:'New York', liga:['AL','NL'] },
    { año:1922, campeon:'New York Giants', subcampeon:'New York Yankees', resultado:'4-0', mvp:'N/A', sede:'New York', liga:['AL','NL'] },
    { año:1921, campeon:'New York Giants', subcampeon:'New York Yankees', resultado:'5-3', mvp:'N/A', sede:'New York', liga:['AL','NL'] },
    { año:1920, campeon:'Cleveland Indians', subcampeon:'Brooklyn Robins', resultado:'5-2', mvp:'N/A', sede:'Cleveland', liga:['AL','NL'] },
    { año:1919, campeon:'Cincinnati Reds', subcampeon:'Chicago White Sox', resultado:'5-3', mvp:'N/A', sede:'Cincinnati', liga:['AL','NL'], nota:'Black Sox Scandal' },
    { año:1918, campeon:'Boston Red Sox', subcampeon:'Chicago Cubs', resultado:'4-2', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
    { año:1917, campeon:'Chicago White Sox', subcampeon:'New York Giants', resultado:'4-2', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1916, campeon:'Boston Red Sox', subcampeon:'Brooklyn Robins', resultado:'4-1', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
    { año:1915, campeon:'Boston Red Sox', subcampeon:'Philadelphia Phillies', resultado:'4-1', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
    { año:1914, campeon:'Boston Braves', subcampeon:'Philadelphia Athletics', resultado:'4-0', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
    { año:1913, campeon:'Philadelphia Athletics', subcampeon:'New York Giants', resultado:'4-1', mvp:'N/A', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1912, campeon:'Boston Red Sox', subcampeon:'New York Giants', resultado:'4-3', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
    { año:1911, campeon:'Philadelphia Athletics', subcampeon:'New York Giants', resultado:'4-2', mvp:'N/A', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1910, campeon:'Philadelphia Athletics', subcampeon:'Chicago Cubs', resultado:'4-1', mvp:'N/A', sede:'Philadelphia', liga:['AL','NL'] },
    { año:1909, campeon:'Pittsburgh Pirates', subcampeon:'Detroit Tigers', resultado:'4-3', mvp:'N/A', sede:'Pittsburgh', liga:['AL','NL'] },
    { año:1908, campeon:'Chicago Cubs', subcampeon:'Detroit Tigers', resultado:'4-1', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1907, campeon:'Chicago Cubs', subcampeon:'Detroit Tigers', resultado:'4-0', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1906, campeon:'Chicago White Sox', subcampeon:'Chicago Cubs', resultado:'4-2', mvp:'N/A', sede:'Chicago', liga:['AL','NL'] },
    { año:1905, campeon:'New York Giants', subcampeon:'Philadelphia Athletics', resultado:'4-1', mvp:'N/A', sede:'New York', liga:['AL','NL'] },
    { año:1904, campeon:'NO SERIES', subcampeon:'(Liga Nacional rechazó jugar)', resultado:'Cancelado', mvp:'N/A', sede:'—', liga:['—','—'] },
    { año:1903, campeon:'Boston Americans', subcampeon:'Pittsburgh Pirates', resultado:'5-3', mvp:'N/A', sede:'Boston', liga:['AL','NL'] },
  ],

  /* ── STANDINGS 2025 ──────────────────────────────────────── */
  standings2025: {
    americanLeague: {
      este: [
        {team:'New York Yankees', w:85, l:65, pct:'.567', gb:'-'},
        {team:'Baltimore Orioles', w:78, l:72, pct:'.520', gb:'7'},
        {team:'Boston Red Sox', w:75, l:75, pct:'.500', gb:'10'},
        {team:'Tampa Bay Rays', w:70, l:80, pct:'.467', gb:'15'},
        {team:'Toronto Blue Jays', w:68, l:82, pct:'.453', gb:'17'}
      ],
      central: [
        {team:'Cleveland Guardians', w:90, l:60, pct:'.600', gb:'-'},
        {team:'Kansas City Royals', w:79, l:71, pct:'.527', gb:'11'},
        {team:'Detroit Tigers', w:75, l:75, pct:'.500', gb:'15'},
        {team:'Minnesota Twins', w:72, l:78, pct:'.480', gb:'18'},
        {team:'Chicago White Sox', w:55, l:95, pct:'.367', gb:'35'}
      ],
      oeste: [
        {team:'Houston Astros', w:88, l:62, pct:'.587', gb:'-'},
        {team:'Seattle Mariners', w:82, l:68, pct:'.547', gb:'6'},
        {team:'Texas Rangers', w:80, l:70, pct:'.533', gb:'8'},
        {team:'Los Angeles Angels', w:65, l:85, pct:'.433', gb:'23'},
        {team:'Oakland Athletics', w:60, l:90, pct:'.400', gb:'28'}
      ]
    },
    nationalLeague: {
      este: [
        {team:'Philadelphia Phillies', w:88, l:62, pct:'.587', gb:'-'},
        {team:'Atlanta Braves', w:85, l:65, pct:'.567', gb:'3'},
        {team:'New York Mets', w:82, l:68, pct:'.547', gb:'6'},
        {team:'Miami Marlins', w:68, l:82, pct:'.453', gb:'20'},
        {team:'Washington Nationals', w:60, l:90, pct:'.400', gb:'28'}
      ],
      central: [
        {team:'Milwaukee Brewers', w:90, l:60, pct:'.600', gb:'-'},
        {team:'Chicago Cubs', w:80, l:70, pct:'.533', gb:'10'},
        {team:'St. Louis Cardinals', w:72, l:78, pct:'.480', gb:'18'},
        {team:'Cincinnati Reds', w:70, l:80, pct:'.467', gb:'20'},
        {team:'Pittsburgh Pirates', w:65, l:85, pct:'.433', gb:'25'}
      ],
      oeste: [
        {team:'Los Angeles Dodgers', w:98, l:52, pct:'.653', gb:'-'},
        {team:'San Diego Padres', w:85, l:65, pct:'.567', gb:'13'},
        {team:'San Francisco Giants', w:75, l:75, pct:'.500', gb:'23'},
        {team:'Arizona Diamondbacks', w:72, l:78, pct:'.480', gb:'26'},
        {team:'Colorado Rockies', w:52, l:98, pct:'.347', gb:'46'}
      ]
    }
  },

  /* ── TEMPORADA 2025 (Final + Postseason) ─────────────────── */
  temporada2025: {
    campeon: 'Los Angeles Dodgers',
    campeonLiga: { AL: 'New York Yankees', NL: 'Los Angeles Dodgers' },
    standings: {
      AL: {
        Este: [
          { equipo:'Baltimore Orioles', w:95, l:67, pct:'.586', gb:'—', playoff:'🔶 WC1' },
          { equipo:'New York Yankees', w:98, l:64, pct:'.605', gb:'—', playoff:'🏆 LCS' },
          { equipo:'Toronto Blue Jays', w:84, l:78, pct:'.519', gb:14.0, playoff:'—' },
          { equipo:'Tampa Bay Rays', w:76, l:86, pct:'.469', gb:22.0, playoff:'—' },
          { equipo:'Boston Red Sox', w:73, l:89, pct:'.451', gb:25.0, playoff:'—' },
        ],
        Central: [
          { equipo:'Cleveland Guardians', w:92, l:70, pct:'.568', gb:'—', playoff:'🔶 WC3' },
          { equipo:'Chicago White Sox', w:64, l:98, pct:'.395', gb:28.0, playoff:'—' },
          { equipo:'Detroit Tigers', w:88, l:74, pct:'.543', gb:4.0, playoff:'—' },
          { equipo:'Kansas City Royals', w:89, l:73, pct:'.549', gb:3.0, playoff:'—' },
          { equipo:'Minnesota Twins', w:86, l:76, pct:'.531', gb:6.0, playoff:'—' },
        ],
        Oeste: [
          { equipo:'Houston Astros', w:97, l:65, pct:'.599', gb:'—', playoff:'🔶 WC2' },
          { equipo:'Seattle Mariners', w:85, l:77, pct:'.525', gb:12.0, playoff:'—' },
          { equipo:'Oakland Athletics', w:62, l:100, pct:'.383', gb:35.0, playoff:'—' },
          { equipo:'Texas Rangers', w:83, l:79, pct:'.512', gb:14.0, playoff:'—' },
          { equipo:'Los Angeles Angels', w:75, l:87, pct:'.463', gb:22.0, playoff:'—' },
        ]
      },
      NL: {
        Este: [
          { equipo:'Atlanta Braves', w:91, l:71, pct:'.562', gb:'—', playoff:'🔶 WC2' },
          { equipo:'Washington Nationals', w:81, l:81, pct:'.500', gb:10.0, playoff:'—' },
          { equipo:'Philadelphia Phillies', w:83, l:79, pct:'.512', gb:8.0, playoff:'—' },
          { equipo:'New York Mets', w:76, l:86, pct:'.469', gb:15.0, playoff:'—' },
          { equipo:'Miami Marlins', w:64, l:98, pct:'.395', gb:27.0, playoff:'—' },
        ],
        Central: [
          { equipo:'St. Louis Cardinals', w:89, l:73, pct:'.549', gb:'—', playoff:'🔶 WC3' },
          { equipo:'Chicago Cubs', w:87, l:75, pct:'.537', gb:2.0, playoff:'—' },
          { equipo:'Cincinnati Reds', w:82, l:80, pct:'.506', gb:7.0, playoff:'—' },
          { equipo:'Pittsburgh Pirates', w:70, l:92, pct:'.432', gb:19.0, playoff:'—' },
          { equipo:'Milwaukee Brewers', w:79, l:83, pct:'.488', gb:10.0, playoff:'—' },
        ],
        Oeste: [
          { equipo:'Los Angeles Dodgers', w:104, l:58, pct:'.642', gb:'—', playoff:'🏆 LCS' },
          { equipo:'San Diego Padres', w:88, l:74, pct:'.543', gb:16.0, playoff:'—' },
          { equipo:'Arizona Diamondbacks', w:86, l:76, pct:'.531', gb:18.0, playoff:'🔶 WC1' },
          { equipo:'San Francisco Giants', w:80, l:82, pct:'.494', gb:24.0, playoff:'—' },
          { equipo:'Colorado Rockies', w:68, l:94, pct:'.420', gb:36.0, playoff:'—' },
        ]
      }
    },
    postseason: {
      wildCard: [
        { clasificado:1, equipo:'Arizona Diamondbacks', seed:'WC1', división:'NL Oeste' },
        { clasificado:2, equipo:'Houston Astros', seed:'WC2', división:'AL Oeste' },
        { clasificado:3, equipo:'Atlanta Braves', seed:'WC2', división:'NL Este' },
      ],
      divisional: [
        { serie:'ALDS 1', campeón:'New York Yankees', rival:'Houston Astros', resultado:'3-1' },
        { serie:'ALDS 2', campeón:'Cleveland Guardians', rival:'Kansas City Royals', resultado:'3-2' },
        { serie:'NLDS 1', campeón:'Los Angeles Dodgers', rival:'Arizona Diamondbacks', resultado:'3-1' },
        { serie:'NLDS 2', campeón:'St. Louis Cardinals', rival:'Atlanta Braves', resultado:'3-2' },
      ],
      championship: {
        AL: { campeón:'New York Yankees', rival:'Cleveland Guardians', resultado:'4-2' },
        NL: { campeón:'Los Angeles Dodgers', rival:'St. Louis Cardinals', resultado:'4-3' }
      },
      worldSeries: {
        campeon: 'Los Angeles Dodgers',
        subcampeon: 'New York Yankees',
        resultado: '4-1',
        mvp: 'Freddie Freeman',
        sede: 'Los Angeles, CA'
      }
    }
  },

  /* ── ESTADÍSTICAS LÍDERES 2024 ──────────────────────────── */
  lideresOfensivos2024: [
    { nombre:'Aaron Judge', equipo:'New York Yankees', flag:'🇺🇸', avg:'.322', hr:58, rbi:144, ops:1.084, posicion:'OF' },
    { nombre:'Mookie Betts', equipo:'Los Angeles Dodgers', flag:'🇺🇸', avg:'.307', hr:39, rbi:96, ops:1.002, posicion:'OF' },
    { nombre:'Freddie Freeman', equipo:'Los Angeles Dodgers', flag:'🇺🇸', avg:'.313', hr:25, rbi:89, ops:0.931, posicion:'1B' },
    { nombre:'Juan Soto', equipo:'New York Mets', flag:'🇩🇴', avg:'.288', hr:35, rbi:109, ops:0.962, posicion:'OF' },
    { nombre:'Kyle Schwarber', equipo:'Philadelphia Phillies', flag:'🇺🇸', avg:'.253', hr:38, rbi:92, ops:0.899, posicion:'OF' },
    { nombre:'Corey Seager', equipo:'Texas Rangers', flag:'🇺🇸', avg:'.296', hr:33, rbi:105, ops:0.951, posicion:'SS' },
    { nombre:'Jose Ramirez', equipo:'Cleveland Guardians', flag:'🇵🇷', avg:'.278', hr:39, rbi:105, ops:0.938, posicion:'3B' },
    { nombre:'Bryce Harper', equipo:'Philadelphia Phillies', flag:'🇺🇸', avg:'.286', hr:34, rbi:88, ops:0.923, posicion:'OF' },
    { nombre:'Francisco Lindor', equipo:'New York Mets', flag:'🇵🇷', avg:'.273', hr:33, rbi:91, ops:0.844, posicion:'SS' },
    { nombre:'Trea Turner', equipo:'Philadelphia Phillies', flag:'🇺🇸', avg:'.301', hr:18, rbi:66, ops:0.798, posicion:'SS' },
  ],

  lideresPitching2024: [
    { nombre:'Gerrit Cole', equipo:'New York Yankees', flag:'🇺🇸', era:2.88, w:25, l:5, k:288, whip:0.98, ip:'215.0' },
    { nombre:'Juan Soto Rojas', equipo:'Houston Astros', flag:'🇵🇦', era:2.91, w:18, l:3, k:276, whip:1.02, ip:'192.0' },
    { nombre:'Blake Snell', equipo:'San Francisco Giants', flag:'🇺🇸', era:2.25, w:16, l:8, k:251, whip:1.01, ip:'208.0' },
    { nombre:'Zack Wheeler', equipo:'Philadelphia Phillies', flag:'🇺🇸', era:2.56, w:16, l:6, k:260, whip:0.97, ip:'213.2' },
    { nombre:'Dylan Cease', equipo:'Charlotte White Sox', flag:'🇺🇸', era:3.04, w:14, l:8, k:227, whip:1.08, ip:'176.0' },
    { nombre:'Kodai Senga', equipo:'New York Mets', flag:'🇯🇵', era:3.20, w:13, l:7, k:213, whip:1.15, ip:'167.2' },
    { nombre:'Sandy Alcántara', equipo:'Miami Marlins', flag:'🇩🇴', era:2.98, w:12, l:9, k:198, whip:1.04, ip:'184.1' },
    { nombre:'Camilo Doval', equipo:'San Francisco Giants', flag:'🇨🇴', era:2.77, w:15, l:4, k:241, whip:1.06, ip:'211.0' },
    { nombre:'Sonny Gray', equipo:'St. Louis Cardinals', flag:'🇺🇸', era:3.08, w:11, l:6, k:189, whip:1.11, ip:'162.1' },
    { nombre:'Max Scherzer', equipo:'New York Mets', flag:'🇺🇸', era:3.55, w:11, l:7, k:174, whip:1.13, ip:'160.0' },
  ],

  /* ── LEYENDAS HISTÓRICAS ────────────────────────────────── */
  leyendas: [
    { nombre:'Babe Ruth', posicion:'OF', equipos:'Red Sox, Yankees, Braves', logros:'714 HR (récord histórico), 2× World Series', años:'1914-1935', flag:'🇺🇸', era:'1914-1935' },
    { nombre:'Barry Bonds', posicion:'OF', equipos:'Pirates, Giants', logros:'762 HR (récord all-time), 8 MVP', años:'1986-2007', flag:'🇺🇸', era:'1986-2007' },
    { nombre:'Willie Mays', posicion:'OF', equipos:'Giants, Mets', logros:'660 HR, "The Say Hey Kid", 2× World Series', años:'1951-1973', flag:'🇺🇸', era:'1951-1973' },
    { nombre:'Ted Williams', posicion:'OF', equipos:'Red Sox', logros:'.406 avg (último), 2× Triple Crown', años:'1939-1960', flag:'🇺🇸', era:'1939-1960' },
    { nombre:'Stan the Man Musial', posicion:'OF/1B', equipos:'Cardinals', logros:'3,630 H, 7× All-Star', años:'1941-1963', flag:'🇺🇸', era:'1941-1963' },
    { nombre:'Joe DiMaggio', posicion:'OF', equipos:'Yankees', logros:'56-game streak, 3× World Series', años:'1936-1951', flag:'🇺🇸', era:'1936-1951' },
    { nombre:'Ty Cobb', posicion:'OF/SS', equipos:'Tigers, A\'s', logros:'.366 avg (all-time), 4,189 H', años:'1905-1928', flag:'🇺🇸', era:'1905-1928' },
    { nombre:'Hank Aaron', posicion:'OF', equipos:'Braves, Brewers', logros:'755 HR, "Hammer", 1× World Series', años:'1954-1976', flag:'🇺🇸', era:'1954-1976' },
    { nombre:'Mickey Mantle', posicion:'OF/SS', equipos:'Yankees', logros:'3× Triple Crown, 12× World Series', años:'1951-1968', flag:'🇺🇸', era:'1951-1968' },
    { nombre:'Honus Wagner', posicion:'SS', equipos:'Pirates, others', logros:'.327 avg, 1× World Series, Hall of Fame', años:'1900-1917', flag:'🇺🇸', era:'1900-1917' },
  ],

  /* ── RECORDS HISTÓRICOS ────────────────────────────────── */
  records: {
    hrTemporada: { jugador:'Barry Bonds', valor:73, año:2001, equipo:'San Francisco Giants' },
    hrCarrera: { jugador:'Barry Bonds', valor:762, años:'1986-2007', equipo:'Multi' },
    avgCarrera: { jugador:'Ty Cobb', valor:'.366', años:'1905-1928', equipos:'Tigers & A\'s' },
    hitsCarrera: { jugador:'Pete Rose', valor:4256, años:'1963-1986', equipos:'Reds, Phillies, Expos' },
    runsCCarrera: { jugador:'Ty Cobb', valor:2246, años:'1905-1928', equipos:'Tigers & A\'s' },
    rbisCarrera: { jugador:'Hank Aaron', valor:2297, años:'1954-1976', equipos:'Braves & Brewers' },
    strikeoutsCarrera: { jugador:'Nolan Ryan', valor:5714, años:'1966-1993', equipos:'Angels, Astros, Rangers' },
    winsPitcher: { jugador:'Cy Young', valor:511, años:'1890-1911', equipos:'Multi' },
    eraMinimo: { jugador:'Ed Walsh', valor:'1.816', años:'1906-1917', equipos:'White Sox' },
    perfectGames: { nombre:'Perfection', valor:23, desde:1880, notables:'Don Larsen (1956 WS), Mark Buehrle (2012)' },
  }
};
