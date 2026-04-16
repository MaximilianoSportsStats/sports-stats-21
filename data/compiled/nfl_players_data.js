/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Plantillas NFL 2024-25
   Fuente: NFL.com, Pro Football Reference (referencia)
   Campos: nombre, dorsal, pos, nac, naci, alt(cm), pes(kg),
           col (universidad), cap (capitán), stats objeto
═══════════════════════════════════════════════════════════ */
window.SS21 = window.SS21 || {};
window.SS21.nflRosters = {

  AFC: {
    North: {
      'Baltimore Ravens': {
        color:'#241773', record:'12-5', capitan:'Lamar Jackson',
        plantilla: [
          { nombre:'Lamar Jackson',     dorsal:8,  pos:'QB', nac:'🇺🇸', naci:1997, alt:188, pes:100, col:'Louisville',         cap:true,  stats:{ att:567, comp:374, yds:4172, td:41, int:4,   rating:119.6 } },
          { nombre:'Derrick Henry',     dorsal:22, pos:'RB', nac:'🇺🇸', naci:1994, alt:185, pes:114, col:'Alabama',            cap:false, stats:{ carries:292, rush_yds:1921, rush_td:16, rec:12 } },
          { nombre:'Zay Flowers',       dorsal:4,  pos:'WR', nac:'🇺🇸', naci:2001, alt:175, pes:77,  col:'Boston College',     cap:false, stats:{ rec:68, yds:820, td:5, targets:110 } },
          { nombre:'Mark Andrews',      dorsal:89, pos:'TE', nac:'🇺🇸', naci:1995, alt:196, pes:109, col:'Oklahoma',           cap:false, stats:{ rec:49, yds:544, td:5, targets:66 } },
          { nombre:'Roquon Smith',      dorsal:0,  pos:'LB', nac:'🇺🇸', naci:1997, alt:183, pes:103, col:'Georgia',            cap:false, stats:{ tackles:99, sacks:2, int:2 } },
          { nombre:'Marlon Humphrey',   dorsal:44, pos:'CB', nac:'🇺🇸', naci:1996, alt:183, pes:95,  col:'Alabama',            cap:false, stats:{ tackles:65, int:2, pd:10 } },
          { nombre:'Patrick Queen',     dorsal:6,  pos:'LB', nac:'🇺🇸', naci:1999, alt:183, pes:104, col:'LSU',               cap:false, stats:{ tackles:88, sacks:3, int:1 } },
          { nombre:'Justin Tucker',     dorsal:9,  pos:'K',  nac:'🇺🇸', naci:1989, alt:185, pes:86,  col:'Texas',             cap:false, stats:{ fg_made:31, fg_att:33, pct:93.9, long:58 } }
        ]
      },
      'Cleveland Browns': {
        color:'#FF3C00', record:'3-14', capitan:'Myles Garrett',
        plantilla: [
          { nombre:'Deshaun Watson',    dorsal:4,  pos:'QB', nac:'🇺🇸', naci:1995, alt:188, pes:99,  col:'Clemson',           cap:false, stats:{ att:105, comp:67, yds:686, td:5, int:4 } },
          { nombre:'Nick Chubb',        dorsal:24, pos:'RB', nac:'🇺🇸', naci:1995, alt:183, pes:104, col:'Georgia',           cap:false, stats:{ carries:128, rush_yds:718, rush_td:5, rec:14 } },
          { nombre:'Amari Cooper',      dorsal:2,  pos:'WR', nac:'🇺🇸', naci:1994, alt:185, pes:98,  col:'Alabama',           cap:false, stats:{ rec:67, yds:764, td:6, targets:108 } },
          { nombre:'David Njoku',       dorsal:85, pos:'TE', nac:'🇺🇸', naci:1996, alt:196, pes:109, col:'Miami',             cap:false, stats:{ rec:61, yds:622, td:6, targets:79 } },
          { nombre:'Myles Garrett',     dorsal:95, pos:'DE', nac:'🇺🇸', naci:1995, alt:196, pes:122, col:'Texas A&M',         cap:true,  stats:{ tackles:50, sacks:14, ff:2 } },
          { nombre:'Denzel Ward',       dorsal:21, pos:'CB', nac:'🇺🇸', naci:1997, alt:180, pes:89,  col:'Ohio State',        cap:false, stats:{ tackles:55, int:3, pd:12 } },
          { nombre:'Jeremiah Owusu-Koramoah',dorsal:6,pos:'LB',nac:'🇺🇸',naci:1999,alt:188,pes:107, col:'Notre Dame',        cap:false, stats:{ tackles:95, sacks:4, int:2 } }
        ]
      },
      'Pittsburgh Steelers': {
        color:'#FFB612', record:'10-7', capitan:'Cameron Heyward',
        plantilla: [
          { nombre:'Justin Fields',     dorsal:2,  pos:'QB', nac:'🇺🇸', naci:1999, alt:188, pes:100, col:'Ohio State',        cap:false, stats:{ att:312, comp:194, yds:2010, td:13, int:8 } },
          { nombre:'Najee Harris',      dorsal:22, pos:'RB', nac:'🇺🇸', naci:1998, alt:185, pes:111, col:'Alabama',           cap:false, stats:{ carries:270, rush_yds:1020, rush_td:8, rec:47 } },
          { nombre:'George Pickens',    dorsal:14, pos:'WR', nac:'🇺🇸', naci:2001, alt:191, pes:91,  col:'Georgia',           cap:false, stats:{ rec:59, yds:900, td:3, targets:108 } },
          { nombre:'TJ Watt',           dorsal:90, pos:'LB', nac:'🇺🇸', naci:1994, alt:196, pes:120, col:'Wisconsin',         cap:false, stats:{ tackles:60, sacks:11.5, ff:4 } },
          { nombre:'Cameron Heyward',   dorsal:97, pos:'DT', nac:'🇺🇸', naci:1989, alt:196, pes:137, col:'Ohio State',        cap:true,  stats:{ tackles:55, sacks:6.5, ff:1 } },
          { nombre:'Joey Porter Jr.',   dorsal:24, pos:'CB', nac:'🇺🇸', naci:2001, alt:191, pes:93,  col:'Penn State',        cap:false, stats:{ tackles:48, int:2, pd:14 } },
          { nombre:'Pat Freiermuth',    dorsal:88, pos:'TE', nac:'🇺🇸', naci:1999, alt:196, pes:111, col:'Penn State',        cap:false, stats:{ rec:55, yds:540, td:4, targets:74 } }
        ]
      },
      'Cincinnati Bengals': {
        color:'#FB4F14', record:'9-8', capitan:'Joe Burrow',
        plantilla: [
          { nombre:'Joe Burrow',        dorsal:9,  pos:'QB', nac:'🇺🇸', naci:1996, alt:196, pes:100, col:'LSU',              cap:true,  stats:{ att:510, comp:355, yds:4341, td:43, int:11, rating:103.0 } },
          { nombre:"Joe Mixon",         dorsal:28, pos:'RB', nac:'🇺🇸', naci:1996, alt:183, pes:106, col:'Oklahoma',         cap:false, stats:{ carries:215, rush_yds:895, rush_td:7, rec:38 } },
          { nombre:"Ja'Marr Chase",     dorsal:1,  pos:'WR', nac:'🇺🇸', naci:2000, alt:183, pes:91,  col:'LSU',             cap:false, stats:{ rec:100, yds:1708, td:17, targets:145 } },
          { nombre:'Tee Higgins',       dorsal:5,  pos:'WR', nac:'🇺🇸', naci:1999, alt:191, pes:98,  col:'Clemson',          cap:false, stats:{ rec:73, yds:911, td:6, targets:105 } },
          { nombre:'Sam Hubbard',       dorsal:94, pos:'DE', nac:'🇺🇸', naci:1996, alt:196, pes:124, col:'Ohio State',        cap:false, stats:{ tackles:48, sacks:7, ff:2 } },
          { nombre:'Trae Waynes',       dorsal:26, pos:'CB', nac:'🇺🇸', naci:1993, alt:183, pes:89,  col:'Michigan State',   cap:false, stats:{ tackles:52, int:1, pd:8 } },
          { nombre:'Mike Gesicki',      dorsal:88, pos:'TE', nac:'🇺🇸', naci:1995, alt:196, pes:111, col:'Penn State',        cap:false, stats:{ rec:40, yds:422, td:3, targets:60 } }
        ]
      }
    },
    East: {
      'Buffalo Bills': {
        color:'#00338D', record:'13-4', capitan:'Josh Allen',
        plantilla: [
          { nombre:'Josh Allen',        dorsal:17, pos:'QB', nac:'🇺🇸', naci:1996, alt:196, pes:109, col:'Wyoming',          cap:true,  stats:{ att:582, comp:381, yds:4306, td:40, int:9,   rating:101.4 } },
          { nombre:'James Cook',        dorsal:4,  pos:'RB', nac:'🇺🇸', naci:2000, alt:180, pes:91,  col:'Georgia',          cap:false, stats:{ carries:219, rush_yds:1009, rush_td:10, rec:42 } },
          { nombre:'Khalil Shakir',     dorsal:10, pos:'WR', nac:'🇺🇸', naci:1999, alt:180, pes:80,  col:'Boise State',      cap:false, stats:{ rec:76, yds:845, td:5, targets:105 } },
          { nombre:'Dawson Knox',       dorsal:88, pos:'TE', nac:'🇺🇸', naci:1996, alt:196, pes:111, col:'Ole Miss',         cap:false, stats:{ rec:38, yds:368, td:3, targets:55 } },
          { nombre:'Von Miller',        dorsal:40, pos:'LB', nac:'🇺🇸', naci:1989, alt:190, pes:114, col:'Texas A&M',        cap:false, stats:{ tackles:22, sacks:2, ff:1 } },
          { nombre:'Tre White',         dorsal:27, pos:'CB', nac:'🇺🇸', naci:1995, alt:183, pes:91,  col:'LSU',             cap:false, stats:{ tackles:50, int:2, pd:9 } },
          { nombre:'Gregory Rousseau',  dorsal:50, pos:'DE', nac:'🇺🇸', naci:2001, alt:198, pes:116, col:'Miami',            cap:false, stats:{ tackles:44, sacks:9, ff:3 } }
        ]
      },
      'Miami Dolphins': {
        color:'#008E97', record:'8-9', capitan:'Tua Tagovailoa',
        plantilla: [
          { nombre:'Tua Tagovailoa',    dorsal:1,  pos:'QB', nac:'🇺🇸', naci:1998, alt:183, pes:100, col:'Alabama',          cap:true,  stats:{ att:378, comp:265, yds:2827, td:19, int:9 } },
          { nombre:'De\'Von Achane',    dorsal:28, pos:'RB', nac:'🇺🇸', naci:2002, alt:180, pes:86,  col:'Texas A&M',        cap:false, stats:{ carries:183, rush_yds:832, rush_td:7, rec:44 } },
          { nombre:'Tyreek Hill',       dorsal:10, pos:'WR', nac:'🇺🇸', naci:1994, alt:175, pes:85,  col:'West Alabama',     cap:false, stats:{ rec:81, yds:959, td:4, targets:128 } },
          { nombre:'Jaylen Waddle',     dorsal:17, pos:'WR', nac:'🇺🇸', naci:1999, alt:175, pes:80,  col:'Alabama',          cap:false, stats:{ rec:67, yds:746, td:5, targets:95 } },
          { nombre:'Bradley Chubb',     dorsal:2,  pos:'LB', nac:'🇺🇸', naci:1996, alt:193, pes:120, col:'Colorado State',   cap:false, stats:{ tackles:20, sacks:3, ff:1 } },
          { nombre:'Jaelan Phillips',   dorsal:15, pos:'DE', nac:'🇺🇸', naci:2001, alt:196, pes:118, col:'Miami',            cap:false, stats:{ tackles:33, sacks:6.5, ff:2 } },
          { nombre:'Jonnu Smith',       dorsal:81, pos:'TE', nac:'🇺🇸', naci:1995, alt:190, pes:111, col:'Florida International',cap:false,stats:{ rec:57, yds:510, td:5, targets:74 } }
        ]
      },
      'New England Patriots': {
        color:'#002244', record:'4-13', capitan:'Rhamondre Stevenson',
        plantilla: [
          { nombre:'Drake Maye',        dorsal:10, pos:'QB', nac:'🇺🇸', naci:2002, alt:196, pes:109, col:'UNC',              cap:false, stats:{ att:442, comp:275, yds:2706, td:15, int:10 } },
          { nombre:'Rhamondre Stevenson',dorsal:38,pos:'RB', nac:'🇺🇸', naci:1998, alt:185, pes:108, col:'Oklahoma',         cap:true,  stats:{ carries:201, rush_yds:922, rush_td:4, rec:28 } },
          { nombre:'DeMario Douglas',   dorsal:3,  pos:'WR', nac:'🇺🇸', naci:2000, alt:170, pes:77,  col:'Liberty',          cap:false, stats:{ rec:64, yds:706, td:2, targets:92 } },
          { nombre:'Christian Barmore', dorsal:90, pos:'DT', nac:'🇺🇸', naci:2000, alt:193, pes:145, col:'Alabama',          cap:false, stats:{ tackles:40, sacks:6, ff:1 } },
          { nombre:'Matthew Judon',     dorsal:9,  pos:'LB', nac:'🇺🇸', naci:1992, alt:190, pes:118, col:'Grand Valley St.', cap:false, stats:{ tackles:33, sacks:5, ff:2 } },
          { nombre:'Hunter Henry',      dorsal:85, pos:'TE', nac:'🇺🇸', naci:1994, alt:196, pes:111, col:'Arkansas',         cap:false, stats:{ rec:40, yds:403, td:3, targets:55 } }
        ]
      },
      'New York Jets': {
        color:'#125740', record:'5-12', capitan:'Aaron Rodgers',
        plantilla: [
          { nombre:'Aaron Rodgers',     dorsal:8,  pos:'QB', nac:'🇺🇸', naci:1983, alt:188, pes:102, col:'Cal',              cap:true,  stats:{ att:477, comp:309, yds:3897, td:28, int:11, rating:96.5 } },
          { nombre:'Breece Hall',       dorsal:20, pos:'RB', nac:'🇺🇸', naci:2001, alt:183, pes:100, col:'Iowa State',        cap:false, stats:{ carries:233, rush_yds:1054, rush_td:7, rec:59 } },
          { nombre:'Garrett Wilson',    dorsal:17, pos:'WR', nac:'🇺🇸', naci:2000, alt:183, pes:86,  col:'Ohio State',        cap:false, stats:{ rec:88, yds:1087, td:7, targets:129 } },
          { nombre:'Sauce Gardner',     dorsal:1,  pos:'CB', nac:'🇺🇸', naci:2001, alt:191, pes:93,  col:'Cincinnati',        cap:false, stats:{ tackles:58, int:2, pd:12 } },
          { nombre:'Quinnen Williams',  dorsal:95, pos:'DT', nac:'🇺🇸', naci:1997, alt:193, pes:138, col:'Alabama',           cap:false, stats:{ tackles:55, sacks:7, ff:1 } },
          { nombre:'Will McDonald IV',  dorsal:99, pos:'DE', nac:'🇺🇸', naci:2001, alt:191, pes:107, col:'Iowa State',        cap:false, stats:{ tackles:33, sacks:8.5, ff:2 } }
        ]
      }
    },
    South: {
      'Houston Texans': {
        color:'#03202F', record:'10-7', capitan:'CJ Stroud',
        plantilla: [
          { nombre:'CJ Stroud',         dorsal:7,  pos:'QB', nac:'🇺🇸', naci:2001, alt:188, pes:102, col:'Ohio State',        cap:true,  stats:{ att:511, comp:340, yds:3737, td:20, int:12, rating:96.0 } },
          { nombre:'Joe Mixon',         dorsal:28, pos:'RB', nac:'🇺🇸', naci:1996, alt:183, pes:106, col:'Oklahoma',          cap:false, stats:{ carries:224, rush_yds:1076, rush_td:11, rec:35 } },
          { nombre:'Nico Collins',      dorsal:12, pos:'WR', nac:'🇺🇸', naci:1999, alt:196, pes:106, col:'Michigan',          cap:false, stats:{ rec:65, yds:1059, td:8, targets:96 } },
          { nombre:'Will Anderson Jr.', dorsal:51, pos:'DE', nac:'🇺🇸', naci:2002, alt:191, pes:118, col:'Alabama',           cap:false, stats:{ tackles:55, sacks:9.5, ff:3 } },
          { nombre:'Stefon Diggs',      dorsal:1,  pos:'WR', nac:'🇺🇸', naci:1993, alt:183, pes:91,  col:'Maryland',          cap:false, stats:{ rec:47, yds:496, td:3, targets:75 } },
          { nombre:'Danielle Hunter',   dorsal:55, pos:'DE', nac:'🇺🇸', naci:1994, alt:196, pes:124, col:'LSU',              cap:false, stats:{ tackles:48, sacks:10, ff:2 } }
        ]
      },
      'Indianapolis Colts': {
        color:'#002C5F', record:'8-9', capitan:'Anthony Richardson',
        plantilla: [
          { nombre:'Anthony Richardson',dorsal:5,  pos:'QB', nac:'🇺🇸', naci:2002, alt:196, pes:109, col:'Florida',           cap:true,  stats:{ att:237, comp:139, yds:1814, td:15, int:8 } },
          { nombre:'Jonathan Taylor',   dorsal:28, pos:'RB', nac:'🇺🇸', naci:1999, alt:180, pes:106, col:'Wisconsin',         cap:false, stats:{ carries:218, rush_yds:1115, rush_td:8, rec:38 } },
          { nombre:'Michael Pittman Jr.',dorsal:11,pos:'WR', nac:'🇺🇸', naci:1997, alt:191, pes:104, col:'USC',              cap:false, stats:{ rec:76, yds:825, td:5, targets:115 } },
          { nombre:'DeForest Buckner',  dorsal:99, pos:'DT', nac:'🇺🇸', naci:1994, alt:200, pes:152, col:'Oregon',            cap:false, stats:{ tackles:55, sacks:7, ff:1 } },
          { nombre:'Zaire Franklin',    dorsal:44, pos:'LB', nac:'🇺🇸', naci:1996, alt:183, pes:109, col:'Syracuse',          cap:false, stats:{ tackles:150, sacks:2, int:2 } }
        ]
      },
      'Jacksonville Jaguars': {
        color:'#006778', record:'4-13', capitan:'Trevor Lawrence',
        plantilla: [
          { nombre:'Trevor Lawrence',   dorsal:16, pos:'QB', nac:'🇺🇸', naci:1999, alt:196, pes:104, col:'Clemson',           cap:true,  stats:{ att:525, comp:325, yds:3485, td:17, int:15, rating:82.0 } },
          { nombre:'Travis Etienne Jr.',dorsal:1,  pos:'RB', nac:'🇺🇸', naci:1999, alt:180, pes:95,  col:'Clemson',           cap:false, stats:{ carries:186, rush_yds:760, rush_td:4, rec:40 } },
          { nombre:'Brian Thomas Jr.',  dorsal:7,  pos:'WR', nac:'🇺🇸', naci:2002, alt:191, pes:100, col:'LSU',              cap:false, stats:{ rec:87, yds:1282, td:10, targets:127 } },
          { nombre:'Evan Engram',       dorsal:17, pos:'TE', nac:'🇺🇸', naci:1994, alt:193, pes:102, col:'Ole Miss',          cap:false, stats:{ rec:59, yds:567, td:3, targets:82 } },
          { nombre:'Josh Allen',        dorsal:41, pos:'LB', nac:'🇺🇸', naci:1997, alt:193, pes:115, col:'Kentucky',          cap:false, stats:{ tackles:44, sacks:9, ff:3 } }
        ]
      },
      'Tennessee Titans': {
        color:'#0C2340', record:'3-14', capitan:'Will Levis',
        plantilla: [
          { nombre:'Will Levis',        dorsal:8,  pos:'QB', nac:'🇺🇸', naci:2000, alt:191, pes:107, col:'Kentucky',          cap:true,  stats:{ att:340, comp:202, yds:2185, td:10, int:9 } },
          { nombre:'Tony Pollard',      dorsal:20, pos:'RB', nac:'🇺🇸', naci:1997, alt:183, pes:97,  col:'Memphis',           cap:false, stats:{ carries:192, rush_yds:793, rush_td:5, rec:45 } },
          { nombre:'Calvin Ridley',     dorsal:0,  pos:'WR', nac:'🇺🇸', naci:1994, alt:183, pes:83,  col:'Alabama',           cap:false, stats:{ rec:58, yds:736, td:5, targets:93 } },
          { nombre:'Harold Landry',     dorsal:58, pos:'LB', nac:'🇺🇸', naci:1996, alt:188, pes:113, col:'Boston College',    cap:false, stats:{ tackles:45, sacks:8, ff:2 } },
          { nombre:'JC Latham',         dorsal:76, pos:'OT', nac:'🇺🇸', naci:2002, alt:196, pes:152, col:'Alabama',           cap:false, stats:{} }
        ]
      }
    },
    West: {
      'Kansas City Chiefs': {
        color:'#E31837', record:'15-2', capitan:'Patrick Mahomes',
        plantilla: [
          { nombre:'Patrick Mahomes',   dorsal:15, pos:'QB', nac:'🇺🇸', naci:1995, alt:188, pes:104, col:'Texas Tech',        cap:true,  stats:{ att:597, comp:394, yds:4183, td:26, int:11, rating:97.3 } },
          { nombre:'Isiah Pacheco',     dorsal:10, pos:'RB', nac:'🇺🇸', naci:1999, alt:180, pes:100, col:'Rutgers',           cap:false, stats:{ carries:205, rush_yds:833, rush_td:8, rec:24 } },
          { nombre:'Travis Kelce',      dorsal:87, pos:'TE', nac:'🇺🇸', naci:1989, alt:196, pes:111, col:'Cincinnati',        cap:false, stats:{ rec:97, yds:823, td:3, targets:117 } },
          { nombre:'Chris Jones',       dorsal:95, pos:'DT', nac:'🇺🇸', naci:1994, alt:196, pes:138, col:'Miss. State',       cap:false, stats:{ tackles:44, sacks:10.5, ff:2 } },
          { nombre:'Nick Bolton',       dorsal:32, pos:'LB', nac:'🇺🇸', naci:2000, alt:183, pes:107, col:'Missouri',          cap:false, stats:{ tackles:140, sacks:3, int:2 } },
          { nombre:'L\'Jarius Sneed',   dorsal:38, pos:'CB', nac:'🇺🇸', naci:1997, alt:183, pes:91,  col:'Louisiana Tech',    cap:false, stats:{ tackles:60, int:3, pd:11 } },
          { nombre:'Rashee Rice',       dorsal:4,  pos:'WR', nac:'🇺🇸', naci:2001, alt:183, pes:91,  col:'SMU',              cap:false, stats:{ rec:55, yds:684, td:6, targets:87 } }
        ]
      },
      'Denver Broncos': {
        color:'#FB4F14', record:'10-7', capitan:'Bo Nix',
        plantilla: [
          { nombre:'Bo Nix',            dorsal:10, pos:'QB', nac:'🇺🇸', naci:2000, alt:188, pes:98,  col:'Oregon',            cap:true,  stats:{ att:512, comp:339, yds:3775, td:29, int:12, rating:97.9 } },
          { nombre:'Jaleel McLaughlin', dorsal:20, pos:'RB', nac:'🇺🇸', naci:1999, alt:173, pes:86,  col:'D-II Div.',         cap:false, stats:{ carries:161, rush_yds:733, rush_td:6, rec:38 } },
          { nombre:'Courtland Sutton',  dorsal:14, pos:'WR', nac:'🇺🇸', naci:1995, alt:196, pes:108, col:'SMU',              cap:false, stats:{ rec:62, yds:822, td:6, targets:100 } },
          { nombre:'Pat Surtain II',    dorsal:2,  pos:'CB', nac:'🇺🇸', naci:2000, alt:191, pes:95,  col:'Alabama',           cap:false, stats:{ tackles:58, int:5, pd:18 } },
          { nombre:'Zach Allen',        dorsal:99, pos:'DE', nac:'🇺🇸', naci:1997, alt:196, pes:132, col:'Boston College',    cap:false, stats:{ tackles:52, sacks:9, ff:2 } },
          { nombre:'Nik Bonitto',       dorsal:15, pos:'LB', nac:'🇺🇸', naci:2001, alt:190, pes:105, col:'Oklahoma',          cap:false, stats:{ tackles:40, sacks:12, ff:3 } }
        ]
      },
      'Las Vegas Raiders': {
        color:'#000000', record:'4-13', capitan:'Maxx Crosby',
        plantilla: [
          { nombre:'Aidan O\'Connell',  dorsal:4,  pos:'QB', nac:'🇺🇸', naci:1998, alt:188, pes:100, col:'Purdue',            cap:false, stats:{ att:300, comp:185, yds:1965, td:10, int:9 } },
          { nombre:'Zamir White',       dorsal:35, pos:'RB', nac:'🇺🇸', naci:2000, alt:183, pes:102, col:'Georgia',           cap:false, stats:{ carries:161, rush_yds:681, rush_td:5, rec:18 } },
          { nombre:'Brock Bowers',      dorsal:89, pos:'TE', nac:'🇺🇸', naci:2003, alt:193, pes:111, col:'Georgia',           cap:false, stats:{ rec:112, yds:1194, td:5, targets:152 } },
          { nombre:'Maxx Crosby',       dorsal:98, pos:'DE', nac:'🇺🇸', naci:1997, alt:196, pes:121, col:'Eastern Michigan',  cap:true,  stats:{ tackles:55, sacks:10.5, ff:4 } },
          { nombre:'Divine Deablo',     dorsal:5,  pos:'LB', nac:'🇺🇸', naci:1998, alt:191, pes:115, col:'Virginia Tech',     cap:false, stats:{ tackles:95, sacks:2, int:1 } }
        ]
      },
      'Los Angeles Chargers': {
        color:'#0080C6', record:'11-6', capitan:'Justin Herbert',
        plantilla: [
          { nombre:'Justin Herbert',    dorsal:10, pos:'QB', nac:'🇺🇸', naci:1998, alt:196, pes:109, col:'Oregon',            cap:true,  stats:{ att:566, comp:375, yds:3870, td:23, int:9,   rating:99.0 } },
          { nombre:'Gus Edwards',       dorsal:25, pos:'RB', nac:'🇺🇸', naci:1994, alt:183, pes:111, col:'Rutgers',           cap:false, stats:{ carries:182, rush_yds:820, rush_td:8, rec:22 } },
          { nombre:'Ladd McConkey',     dorsal:15, pos:'WR', nac:'🇺🇸', naci:2001, alt:180, pes:82,  col:'Georgia',           cap:false, stats:{ rec:82, yds:1161, td:8, targets:106 } },
          { nombre:'Joey Bosa',         dorsal:97, pos:'DE', nac:'🇺🇸', naci:1995, alt:196, pes:124, col:'Ohio State',        cap:false, stats:{ tackles:35, sacks:5.5, ff:2 } },
          { nombre:'Khalil Mack',       dorsal:52, pos:'LB', nac:'🇺🇸', naci:1991, alt:193, pes:122, col:'Buffalo',           cap:false, stats:{ tackles:38, sacks:8.5, ff:2 } },
          { nombre:'Derwin James',      dorsal:3,  pos:'S',  nac:'🇺🇸', naci:1996, alt:191, pes:107, col:'FSU',              cap:false, stats:{ tackles:88, int:2, pd:7 } }
        ]
      }
    }
  },

  NFC: {
    North: {
      'Detroit Lions': {
        color:'#0076B6', record:'15-2', capitan:'Jared Goff',
        plantilla: [
          { nombre:'Jared Goff',        dorsal:16, pos:'QB', nac:'🇺🇸', naci:1994, alt:193, pes:100, col:'Cal',              cap:true,  stats:{ att:601, comp:432, yds:4629, td:37, int:12, rating:109.4 } },
          { nombre:'David Montgomery',  dorsal:5,  pos:'RB', nac:'🇺🇸', naci:1997, alt:178, pes:104, col:'Iowa State',        cap:false, stats:{ carries:214, rush_yds:894, rush_td:13, rec:31 } },
          { nombre:'Amon-Ra St. Brown', dorsal:14, pos:'WR', nac:'🇺🇸', naci:1999, alt:183, pes:91,  col:'USC',              cap:false, stats:{ rec:109, yds:1263, td:9, targets:153 } },
          { nombre:'Sam LaPorta',       dorsal:82, pos:'TE', nac:'🇺🇸', naci:2001, alt:193, pes:109, col:'Iowa',              cap:false, stats:{ rec:51, yds:497, td:5, targets:69 } },
          { nombre:'Aidan Hutchinson',  dorsal:97, pos:'DE', nac:'🇺🇸', naci:2000, alt:198, pes:122, col:'Michigan',          cap:false, stats:{ tackles:22, sacks:5, ff:1 } },
          { nombre:'Kerby Joseph',      dorsal:31, pos:'S',  nac:'🇺🇸', naci:2000, alt:183, pes:95,  col:'Illinois',          cap:false, stats:{ tackles:70, int:4, pd:8 } },
          { nombre:'Jameson Williams',  dorsal:9,  pos:'WR', nac:'🇺🇸', naci:2001, alt:188, pes:89,  col:'Alabama',           cap:false, stats:{ rec:54, yds:1022, td:8, targets:85 } }
        ]
      },
      'Green Bay Packers': {
        color:'#203731', record:'11-6', capitan:'Jordan Love',
        plantilla: [
          { nombre:'Jordan Love',       dorsal:10, pos:'QB', nac:'🇺🇸', naci:1998, alt:193, pes:104, col:'Utah State',        cap:true,  stats:{ att:576, comp:373, yds:3845, td:25, int:11, rating:96.5 } },
          { nombre:'Josh Jacobs',       dorsal:8,  pos:'RB', nac:'🇺🇸', naci:1998, alt:178, pes:99,  col:'Alabama',           cap:false, stats:{ carries:245, rush_yds:1029, rush_td:11, rec:52 } },
          { nombre:'Jayden Reed',       dorsal:11, pos:'WR', nac:'🇺🇸', naci:2000, alt:180, pes:82,  col:'Michigan State',    cap:false, stats:{ rec:75, yds:901, td:7, targets:110 } },
          { nombre:'Romeo Doubs',       dorsal:87, pos:'WR', nac:'🇺🇸', naci:2000, alt:188, pes:92,  col:'Nevada',            cap:false, stats:{ rec:60, yds:752, td:6, targets:95 } },
          { nombre:'Rashan Gary',       dorsal:52, pos:'LB', nac:'🇺🇸', naci:1998, alt:196, pes:124, col:'Michigan',          cap:false, stats:{ tackles:38, sacks:8.5, ff:2 } },
          { nombre:'Jaire Alexander',   dorsal:23, pos:'CB', nac:'🇺🇸', naci:1997, alt:178, pes:89,  col:'Louisville',        cap:false, stats:{ tackles:50, int:3, pd:11 } },
          { nombre:'Tucker Kraft',      dorsal:85, pos:'TE', nac:'🇺🇸', naci:2000, alt:196, pes:113, col:'South Dakota State',cap:false, stats:{ rec:52, yds:522, td:4, targets:70 } }
        ]
      },
      'Minnesota Vikings': {
        color:'#4F2683', record:'14-3', capitan:'JJ McCarthy',
        plantilla: [
          { nombre:'Sam Darnold',       dorsal:14, pos:'QB', nac:'🇺🇸', naci:1997, alt:191, pes:102, col:'USC',              cap:false, stats:{ att:531, comp:345, yds:4319, td:35, int:12, rating:104.4 } },
          { nombre:'Aaron Jones',       dorsal:33, pos:'RB', nac:'🇺🇸', naci:1994, alt:178, pes:95,  col:'UTEP',             cap:false, stats:{ carries:190, rush_yds:867, rush_td:9, rec:40 } },
          { nombre:'Justin Jefferson',  dorsal:18, pos:'WR', nac:'🇺🇸', naci:1999, alt:188, pes:95,  col:'LSU',              cap:false, stats:{ rec:103, yds:1533, td:10, targets:147 } },
          { nombre:'TJ Hockenson',      dorsal:87, pos:'TE', nac:'🇺🇸', naci:1997, alt:196, pes:113, col:'Iowa',              cap:false, stats:{ rec:42, yds:418, td:3, targets:60 } },
          { nombre:'Jonathan Greenard', dorsal:55, pos:'LB', nac:'🇺🇸', naci:1997, alt:193, pes:121, col:'Florida',           cap:false, stats:{ tackles:48, sacks:11, ff:3 } },
          { nombre:'Harrison Smith',    dorsal:22, pos:'S',  nac:'🇺🇸', naci:1989, alt:191, pes:107, col:'Notre Dame',        cap:false, stats:{ tackles:95, int:3, pd:8 } },
          { nombre:'Jordan Addison',    dorsal:3,  pos:'WR', nac:'🇺🇸', naci:2002, alt:180, pes:77,  col:'USC',              cap:false, stats:{ rec:69, yds:894, td:8, targets:98 } }
        ]
      },
      'Chicago Bears': {
        color:'#0B162A', record:'5-12', capitan:'Caleb Williams',
        plantilla: [
          { nombre:'Caleb Williams',    dorsal:18, pos:'QB', nac:'🇺🇸', naci:2001, alt:188, pes:99,  col:'USC',              cap:true,  stats:{ att:573, comp:357, yds:3541, td:20, int:6 } },
          { nombre:"D'Andre Swift",     dorsal:4,  pos:'RB', nac:'🇺🇸', naci:1999, alt:178, pes:97,  col:'Georgia',           cap:false, stats:{ carries:215, rush_yds:914, rush_td:5, rec:53 } },
          { nombre:'DJ Moore',          dorsal:2,  pos:'WR', nac:'🇺🇸', naci:1997, alt:183, pes:97,  col:'Maryland',          cap:false, stats:{ rec:89, yds:1033, td:8, targets:139 } },
          { nombre:'Cole Kmet',         dorsal:85, pos:'TE', nac:'🇺🇸', naci:1999, alt:198, pes:113, col:'Notre Dame',        cap:false, stats:{ rec:56, yds:577, td:4, targets:74 } },
          { nombre:'Montez Sweat',      dorsal:90, pos:'DE', nac:'🇺🇸', naci:1996, alt:198, pes:122, col:'Miss. State',       cap:false, stats:{ tackles:42, sacks:10, ff:3 } },
          { nombre:'Kyler Gordon',      dorsal:6,  pos:'CB', nac:'🇺🇸', naci:2000, alt:183, pes:93,  col:'Washington',        cap:false, stats:{ tackles:60, int:2, pd:9 } }
        ]
      }
    },
    East: {
      'Philadelphia Eagles': {
        color:'#004C54', record:'14-3', capitan:'Jalen Hurts',
        plantilla: [
          { nombre:'Jalen Hurts',       dorsal:1,  pos:'QB', nac:'🇺🇸', naci:1998, alt:188, pes:105, col:'Alabama/Oklahoma',  cap:true,  stats:{ att:449, comp:307, yds:3622, td:29, int:8,   rating:106.0 } },
          { nombre:'Saquon Barkley',    dorsal:26, pos:'RB', nac:'🇺🇸', naci:1997, alt:183, pes:106, col:'Penn State',        cap:false, stats:{ carries:345, rush_yds:2005, rush_td:13, rec:35 } },
          { nombre:'AJ Brown',          dorsal:11, pos:'WR', nac:'🇺🇸', naci:1997, alt:185, pes:102, col:'Ole Miss',          cap:false, stats:{ rec:67, yds:1079, td:8, targets:105 } },
          { nombre:'DeVonta Smith',     dorsal:6,  pos:'WR', nac:'🇺🇸', naci:1998, alt:183, pes:78,  col:'Alabama',           cap:false, stats:{ rec:90, yds:1066, td:8, targets:126 } },
          { nombre:'Haason Reddick',    dorsal:7,  pos:'LB', nac:'🇺🇸', naci:1994, alt:188, pes:113, col:'Temple',            cap:false, stats:{ tackles:30, sacks:8, ff:2 } },
          { nombre:'Zack Baun',         dorsal:53, pos:'LB', nac:'🇺🇸', naci:1997, alt:188, pes:109, col:'Wisconsin',         cap:false, stats:{ tackles:151, sacks:5, int:1 } },
          { nombre:'Darius Slay',       dorsal:2,  pos:'CB', nac:'🇺🇸', naci:1991, alt:183, pes:89,  col:'Mississippi State', cap:false, stats:{ tackles:55, int:3, pd:13 } },
          { nombre:'Dallas Goedert',    dorsal:88, pos:'TE', nac:'🇺🇸', naci:1995, alt:196, pes:111, col:'South Dakota State',cap:false, stats:{ rec:51, yds:502, td:4, targets:68 } }
        ]
      },
      'Dallas Cowboys': {
        color:'#003594', record:'7-10', capitan:'Dak Prescott',
        plantilla: [
          { nombre:'Dak Prescott',      dorsal:4,  pos:'QB', nac:'🇺🇸', naci:1993, alt:188, pes:104, col:'Miss. State',       cap:true,  stats:{ att:182, comp:120, yds:1476, td:8, int:4 } },
          { nombre:'Rico Dowdle',       dorsal:23, pos:'RB', nac:'🇺🇸', naci:1997, alt:180, pes:97,  col:'South Carolina',    cap:false, stats:{ carries:259, rush_yds:1079, rush_td:7, rec:38 } },
          { nombre:'CeeDee Lamb',       dorsal:88, pos:'WR', nac:'🇺🇸', naci:1999, alt:185, pes:91,  col:'Oklahoma',          cap:false, stats:{ rec:82, yds:1194, td:7, targets:125 } },
          { nombre:'Micah Parsons',     dorsal:11, pos:'LB', nac:'🇺🇸', naci:1999, alt:190, pes:121, col:'Penn State',        cap:false, stats:{ tackles:65, sacks:12, ff:4 } },
          { nombre:'Trevon Diggs',      dorsal:7,  pos:'CB', nac:'🇺🇸', naci:1998, alt:188, pes:95,  col:'Alabama',           cap:false, stats:{ tackles:55, int:3, pd:10 } },
          { nombre:'Jake Ferguson',     dorsal:87, pos:'TE', nac:'🇺🇸', naci:1999, alt:198, pes:111, col:'Wisconsin',         cap:false, stats:{ rec:55, yds:547, td:5, targets:75 } }
        ]
      },
      'New York Giants': {
        color:'#0B2265', record:'3-14', capitan:'Brian Burns',
        plantilla: [
          { nombre:'Drew Lock',         dorsal:2,  pos:'QB', nac:'🇺🇸', naci:1996, alt:193, pes:104, col:'Missouri',          cap:false, stats:{ att:287, comp:161, yds:1703, td:8, int:9 } },
          { nombre:'Tyrone Tracy Jr.',  dorsal:29, pos:'RB', nac:'🇺🇸', naci:2001, alt:183, pes:100, col:'Purdue',            cap:false, stats:{ carries:193, rush_yds:895, rush_td:5, rec:32 } },
          { nombre:'Malik Nabers',      dorsal:1,  pos:'WR', nac:'🇺🇸', naci:2003, alt:183, pes:89,  col:'LSU',              cap:false, stats:{ rec:109, yds:1204, td:7, targets:157 } },
          { nombre:'Brian Burns',       dorsal:0,  pos:'DE', nac:'🇺🇸', naci:1997, alt:193, pes:116, col:'FSU',              cap:true,  stats:{ tackles:40, sacks:7.5, ff:2 } },
          { nombre:'Dexter Lawrence',   dorsal:97, pos:'DT', nac:'🇺🇸', naci:1997, alt:193, pes:149, col:'Clemson',           cap:false, stats:{ tackles:48, sacks:6, ff:1 } }
        ]
      },
      'Washington Commanders': {
        color:'#5A1414', record:'12-5', capitan:'Jayden Daniels',
        plantilla: [
          { nombre:'Jayden Daniels',    dorsal:5,  pos:'QB', nac:'🇺🇸', naci:2000, alt:191, pes:96,  col:'LSU',              cap:true,  stats:{ att:536, comp:362, yds:3568, td:25, int:9,   rating:101.3 } },
          { nombre:'Brian Robinson Jr.',dorsal:8,  pos:'RB', nac:'🇺🇸', naci:1999, alt:183, pes:106, col:'Alabama',           cap:false, stats:{ carries:194, rush_yds:891, rush_td:7, rec:22 } },
          { nombre:'Terry McLaurin',    dorsal:17, pos:'WR', nac:'🇺🇸', naci:1995, alt:183, pes:95,  col:'Ohio State',        cap:false, stats:{ rec:81, yds:1096, td:10, targets:121 } },
          { nombre:'Jonathan Allen',    dorsal:93, pos:'DT', nac:'🇺🇸', naci:1994, alt:188, pes:138, col:'Alabama',           cap:false, stats:{ tackles:42, sacks:5, ff:1 } },
          { nombre:'Dorance Armstrong', dorsal:92, pos:'DE', nac:'🇺🇸', naci:1997, alt:193, pes:116, col:'Kansas',            cap:false, stats:{ tackles:35, sacks:9.5, ff:3 } },
          { nombre:'Zach Ertz',         dorsal:86, pos:'TE', nac:'🇺🇸', naci:1990, alt:196, pes:111, col:'Stanford',          cap:false, stats:{ rec:43, yds:388, td:2, targets:57 } }
        ]
      }
    },
    South: {
      'New Orleans Saints': {
        color:'#D3BC8D', record:'5-12', capitan:'Derek Carr',
        plantilla: [
          { nombre:'Derek Carr',        dorsal:4,  pos:'QB', nac:'🇺🇸', naci:1991, alt:188, pes:102, col:'Fresno State',      cap:true,  stats:{ att:244, comp:154, yds:1574, td:8, int:8 } },
          { nombre:'Alvin Kamara',      dorsal:41, pos:'RB', nac:'🇺🇸', naci:1995, alt:178, pes:95,  col:'Tennessee',         cap:false, stats:{ carries:174, rush_yds:724, rush_td:6, rec:58 } },
          { nombre:'Chris Olave',       dorsal:12, pos:'WR', nac:'🇺🇸', naci:2000, alt:183, pes:87,  col:'Ohio State',        cap:false, stats:{ rec:63, yds:823, td:4, targets:104 } },
          { nombre:'Cam Jordan',        dorsal:94, pos:'DE', nac:'🇺🇸', naci:1989, alt:196, pes:132, col:'Cal',              cap:false, stats:{ tackles:38, sacks:5, ff:1 } },
          { nombre:'Marshon Lattimore', dorsal:23, pos:'CB', nac:'🇺🇸', naci:1996, alt:185, pes:93,  col:'Ohio State',        cap:false, stats:{ tackles:44, int:1, pd:9 } }
        ]
      },
      'Atlanta Falcons': {
        color:'#A71930', record:'8-9', capitan:'Kirk Cousins',
        plantilla: [
          { nombre:'Kirk Cousins',      dorsal:18, pos:'QB', nac:'🇺🇸', naci:1988, alt:188, pes:102, col:'Michigan State',    cap:true,  stats:{ att:523, comp:339, yds:3508, td:18, int:16, rating:86.3 } },
          { nombre:'Bijan Robinson',    dorsal:7,  pos:'RB', nac:'🇺🇸', naci:2001, alt:183, pes:100, col:'Texas',             cap:false, stats:{ carries:258, rush_yds:1058, rush_td:7, rec:55 } },
          { nombre:'Drake London',      dorsal:5,  pos:'WR', nac:'🇺🇸', naci:2001, alt:196, pes:102, col:'USC',              cap:false, stats:{ rec:84, yds:1013, td:6, targets:128 } },
          { nombre:'Kyle Pitts',        dorsal:8,  pos:'TE', nac:'🇺🇸', naci:2000, alt:200, pes:111, col:'Florida',           cap:false, stats:{ rec:45, yds:430, td:3, targets:64 } },
          { nombre:'Grady Jarrett',     dorsal:97, pos:'DT', nac:'🇺🇸', naci:1993, alt:188, pes:136, col:'Clemson',           cap:false, stats:{ tackles:42, sacks:5, ff:1 } },
          { nombre:'Matthew Judon',     dorsal:9,  pos:'LB', nac:'🇺🇸', naci:1992, alt:190, pes:118, col:'Grand Valley St.', cap:false, stats:{ tackles:30, sacks:5, ff:1 } }
        ]
      },
      'Tampa Bay Buccaneers': {
        color:'#D50A0A', record:'10-7', capitan:'Baker Mayfield',
        plantilla: [
          { nombre:'Baker Mayfield',    dorsal:6,  pos:'QB', nac:'🇺🇸', naci:1995, alt:185, pes:100, col:'Oklahoma',          cap:true,  stats:{ att:544, comp:368, yds:4500, td:41, int:14, rating:107.7 } },
          { nombre:'Rachaad White',     dorsal:29, pos:'RB', nac:'🇺🇸', naci:1999, alt:183, pes:100, col:'Arizona State',     cap:false, stats:{ carries:196, rush_yds:769, rush_td:7, rec:56 } },
          { nombre:'Mike Evans',        dorsal:13, pos:'WR', nac:'🇺🇸', naci:1993, alt:196, pes:107, col:'Texas A&M',         cap:false, stats:{ rec:87, yds:1191, td:11, targets:126 } },
          { nombre:'Chris Godwin',      dorsal:14, pos:'WR', nac:'🇺🇸', naci:1996, alt:185, pes:95,  col:'Penn State',        cap:false, stats:{ rec:50, yds:536, td:4, targets:72 } },
          { nombre:'Vita Vea',          dorsal:50, pos:'DT', nac:'🇺🇸', naci:1996, alt:193, pes:156, col:'Washington',        cap:false, stats:{ tackles:40, sacks:4, ff:1 } },
          { nombre:'Lavonte David',     dorsal:54, pos:'LB', nac:'🇺🇸', naci:1990, alt:188, pes:109, col:'Nebraska',          cap:false, stats:{ tackles:100, sacks:3, int:1 } }
        ]
      },
      'Carolina Panthers': {
        color:'#0085CA', record:'5-12', capitan:'Bryce Young',
        plantilla: [
          { nombre:'Bryce Young',       dorsal:9,  pos:'QB', nac:'🇺🇸', naci:2001, alt:180, pes:91,  col:'Alabama',           cap:true,  stats:{ att:480, comp:296, yds:2995, td:13, int:10 } },
          { nombre:'Chuba Hubbard',     dorsal:30, pos:'RB', nac:'🇨🇦', naci:1999, alt:183, pes:97,  col:'Oklahoma State',    cap:false, stats:{ carries:208, rush_yds:835, rush_td:5, rec:44 } },
          { nombre:'Diontae Johnson',   dorsal:5,  pos:'WR', nac:'🇺🇸', naci:1996, alt:178, pes:83,  col:'Toledo',            cap:false, stats:{ rec:58, yds:621, td:3, targets:91 } },
          { nombre:'Derrick Brown',     dorsal:95, pos:'DT', nac:'🇺🇸', naci:1998, alt:193, pes:152, col:'Auburn',            cap:false, stats:{ tackles:52, sacks:4, ff:1 } },
          { nombre:'Xavier Legette',    dorsal:17, pos:'WR', nac:'🇺🇸', naci:2001, alt:191, pes:100, col:'South Carolina',    cap:false, stats:{ rec:44, yds:533, td:3, targets:74 } }
        ]
      }
    },
    West: {
      'San Francisco 49ers': {
        color:'#AA0000', record:'6-11', capitan:'Brock Purdy',
        plantilla: [
          { nombre:'Brock Purdy',       dorsal:13, pos:'QB', nac:'🇺🇸', naci:2000, alt:185, pes:98,  col:'Iowa State',        cap:true,  stats:{ att:494, comp:332, yds:3864, td:20, int:12, rating:99.6 } },
          { nombre:'Christian McCaffrey',dorsal:23,pos:'RB', nac:'🇺🇸', naci:1996, alt:183, pes:97,  col:'Stanford',          cap:false, stats:{ carries:182, rush_yds:900, rush_td:6, rec:50 } },
          { nombre:'Deebo Samuel',      dorsal:19, pos:'WR', nac:'🇺🇸', naci:1996, alt:183, pes:97,  col:'South Carolina',    cap:false, stats:{ rec:65, yds:892, td:6, targets:99 } },
          { nombre:'George Kittle',     dorsal:85, pos:'TE', nac:'🇺🇸', naci:1993, alt:193, pes:113, col:'Iowa',              cap:false, stats:{ rec:70, yds:805, td:7, targets:96 } },
          { nombre:'Nick Bosa',         dorsal:97, pos:'DE', nac:'🇺🇸', naci:1997, alt:193, pes:121, col:'Ohio State',        cap:false, stats:{ tackles:44, sacks:11.5, ff:4 } },
          { nombre:'Fred Warner',       dorsal:54, pos:'LB', nac:'🇺🇸', naci:1997, alt:191, pes:109, col:'BYU',              cap:false, stats:{ tackles:120, sacks:2, int:2 } },
          { nombre:'Brandon Aiyuk',     dorsal:11, pos:'WR', nac:'🇺🇸', naci:1998, alt:183, pes:95,  col:'Arizona State',     cap:false, stats:{ rec:67, yds:990, td:7, targets:99 } }
        ]
      },
      'Seattle Seahawks': {
        color:'#002244', record:'10-7', capitan:'Geno Smith',
        plantilla: [
          { nombre:'Geno Smith',        dorsal:7,  pos:'QB', nac:'🇺🇸', naci:1990, alt:188, pes:100, col:'West Virginia',     cap:true,  stats:{ att:517, comp:341, yds:3697, td:20, int:9,   rating:96.0 } },
          { nombre:'Kenneth Walker III',dorsal:9,  pos:'RB', nac:'🇺🇸', naci:2001, alt:180, pes:97,  col:'Michigan State',    cap:false, stats:{ carries:205, rush_yds:896, rush_td:8, rec:31 } },
          { nombre:'DK Metcalf',        dorsal:14, pos:'WR', nac:'🇺🇸', naci:1997, alt:193, pes:108, col:'Ole Miss',          cap:false, stats:{ rec:75, yds:1003, td:6, targets:120 } },
          { nombre:'Tyler Lockett',     dorsal:16, pos:'WR', nac:'🇺🇸', naci:1992, alt:178, pes:89,  col:'Kansas State',      cap:false, stats:{ rec:57, yds:720, td:5, targets:88 } },
          { nombre:'Boye Mafe',         dorsal:53, pos:'LB', nac:'🇺🇸', naci:1999, alt:193, pes:120, col:'Minnesota',         cap:false, stats:{ tackles:38, sacks:8, ff:2 } },
          { nombre:'Devon Witherspoon', dorsal:21, pos:'CB', nac:'🇺🇸', naci:2001, alt:183, pes:91,  col:'Illinois',          cap:false, stats:{ tackles:62, int:3, pd:12 } }
        ]
      },
      'Los Angeles Rams': {
        color:'#003594', record:'10-7', capitan:'Matthew Stafford',
        plantilla: [
          { nombre:'Matthew Stafford',  dorsal:9,  pos:'QB', nac:'🇺🇸', naci:1988, alt:193, pes:104, col:'Georgia',           cap:true,  stats:{ att:524, comp:353, yds:3762, td:22, int:9,   rating:97.1 } },
          { nombre:'Kyren Williams',    dorsal:23, pos:'RB', nac:'🇺🇸', naci:2000, alt:178, pes:95,  col:'Notre Dame',        cap:false, stats:{ carries:225, rush_yds:1052, rush_td:11, rec:38 } },
          { nombre:'Cooper Kupp',       dorsal:10, pos:'WR', nac:'🇺🇸', naci:1993, alt:185, pes:97,  col:'Eastern Washington',cap:false, stats:{ rec:67, yds:710, td:5, targets:97 } },
          { nombre:'Puka Nacua',        dorsal:17, pos:'WR', nac:'🇺🇸', naci:2001, alt:188, pes:97,  col:'BYU',              cap:false, stats:{ rec:82, yds:990, td:6, targets:118 } },
          { nombre:'Kobie Turner',      dorsal:91, pos:'DT', nac:'🇺🇸', naci:2000, alt:188, pes:132, col:'Wake Forest',       cap:false, stats:{ tackles:44, sacks:8, ff:2 } },
          { nombre:'Byron Young',       dorsal:90, pos:'DE', nac:'🇺🇸', naci:2001, alt:193, pes:124, col:'Alabama',           cap:false, stats:{ tackles:38, sacks:7.5, ff:2 } }
        ]
      },
      'Arizona Cardinals': {
        color:'#97233F', record:'8-9', capitan:'Kyler Murray',
        plantilla: [
          { nombre:'Kyler Murray',      dorsal:1,  pos:'QB', nac:'🇺🇸', naci:1997, alt:178, pes:99,  col:'Oklahoma',          cap:true,  stats:{ att:520, comp:338, yds:3676, td:23, int:10, rating:97.2 } },
          { nombre:'James Conner',      dorsal:6,  pos:'RB', nac:'🇺🇸', naci:1995, alt:185, pes:106, col:'Pittsburgh',        cap:false, stats:{ carries:204, rush_yds:854, rush_td:10, rec:35 } },
          { nombre:'Marvin Harrison Jr.',dorsal:18,pos:'WR', nac:'🇺🇸', naci:2003, alt:191, pes:98,  col:'Ohio State',        cap:false, stats:{ rec:87, yds:1023, td:8, targets:130 } },
          { nombre:'Trey McBride',      dorsal:85, pos:'TE', nac:'🇺🇸', naci:2000, alt:196, pes:111, col:'Colorado State',    cap:false, stats:{ rec:111, yds:1146, td:6, targets:147 } },
          { nombre:'Zaven Collins',     dorsal:25, pos:'LB', nac:'🇺🇸', naci:1999, alt:196, pes:119, col:'Tulsa',             cap:false, stats:{ tackles:88, sacks:4, int:2 } }
        ]
      }
    }
  }
};

console.log('[SS21 NFL] Rosters cargados:',
  Object.values(window.SS21.nflRosters.AFC).reduce((a,d)=>a+Object.keys(d).length,0) +
  Object.values(window.SS21.nflRosters.NFC).reduce((a,d)=>a+Object.keys(d).length,0),
  'equipos');
