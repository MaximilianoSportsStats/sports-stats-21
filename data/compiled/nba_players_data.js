/* ═══════════════════════════════════════════════════════════
   SPORTS STATS 21 CENTURY — Plantillas NBA 2024-25
   Actualizado: Abr 2025
   Fuente: NBA.com, Basketball Reference (referencia)
   Campos: nombre, dorsal, pos, nac, naci, alt(cm), pes(kg),
           col (universidad/país origen), cap, contrato ($M/año)
           stats: pts, reb, ast, stl, blk, fg_pct
═══════════════════════════════════════════════════════════ */
window.SS21 = window.SS21 || {};
window.SS21.nbaRosters = {

  Este: {
    Atlantico: {
      'Boston Celtics': {
        color:'#007A33', record:'68-14', capitan:'Jayson Tatum',
        plantilla: [
          { nombre:'Jayson Tatum',      dorsal:0,  pos:'SF', nac:'🇺🇸', naci:1998, alt:203, pes:95,  col:'Duke',             cap:true,  contrato:'32.6M',  stats:{ pts:26.9, reb:8.1, ast:4.9, stl:1.1, blk:0.7, fg_pct:47.1 } },
          { nombre:'Jaylen Brown',      dorsal:7,  pos:'SG', nac:'🇺🇸', naci:1996, alt:198, pes:101, col:'Cal',              cap:false, contrato:'49.7M',  stats:{ pts:23.0, reb:5.5, ast:3.6, stl:1.1, blk:0.4, fg_pct:47.8 } },
          { nombre:'Kristaps Porzingis',dorsal:8,  pos:'C',  nac:'🇱🇻', naci:1995, alt:221, pes:109, col:'—',               cap:false, contrato:'30.7M',  stats:{ pts:14.8, reb:6.0, ast:1.8, stl:0.6, blk:1.9, fg_pct:52.3 } },
          { nombre:'Jrue Holiday',      dorsal:4,  pos:'PG', nac:'🇺🇸', naci:1990, alt:193, pes:95,  col:'UCLA',             cap:false, contrato:'36.8M',  stats:{ pts:12.5, reb:5.4, ast:5.9, stl:1.4, blk:0.5, fg_pct:45.6 } },
          { nombre:'Derrick White',     dorsal:9,  pos:'SG', nac:'🇺🇸', naci:1994, alt:193, pes:88,  col:'Colorado',         cap:false, contrato:'22.6M',  stats:{ pts:15.2, reb:4.3, ast:5.3, stl:1.0, blk:1.1, fg_pct:44.8 } },
          { nombre:'Al Horford',        dorsal:42, pos:'C',  nac:'🇩🇴', naci:1986, alt:206, pes:109, col:'Florida',          cap:false, contrato:'26.5M',  stats:{ pts:10.2, reb:6.4, ast:3.1, stl:0.8, blk:1.1, fg_pct:52.0 } },
          { nombre:'Payton Pritchard',  dorsal:11, pos:'PG', nac:'🇺🇸', naci:1997, alt:185, pes:88,  col:'Oregon',           cap:false, contrato:'8.0M',   stats:{ pts:14.3, reb:2.8, ast:3.5, stl:0.7, blk:0.2, fg_pct:45.0 } },
          { nombre:'Luke Kornet',       dorsal:2,  pos:'C',  nac:'🇺🇸', naci:1995, alt:221, pes:112, col:'Vanderbilt',       cap:false, contrato:'4.5M',   stats:{ pts:5.5, reb:4.8, ast:0.8, stl:0.5, blk:1.8, fg_pct:63.4 } }
        ]
      },
      'New York Knicks': {
        color:'#006BB6', record:'51-31', capitan:'Jalen Brunson',
        plantilla: [
          { nombre:'Jalen Brunson',     dorsal:11, pos:'PG', nac:'🇺🇸', naci:1996, alt:188, pes:88,  col:'Villanova',        cap:true,  contrato:'156.5M',  stats:{ pts:25.1, reb:3.6, ast:7.0, stl:0.9, blk:0.2, fg_pct:48.3 } },
          { nombre:'Karl-Anthony Towns',dorsal:32, pos:'C',  nac:'🇺🇸', naci:1995, alt:211, pes:113, col:'Kentucky',         cap:false, contrato:'49.0M',  stats:{ pts:24.0, reb:13.7, ast:3.1, stl:0.7, blk:1.1, fg_pct:52.3 } },
          { nombre:'OG Anunoby',        dorsal:8,  pos:'SF', nac:'🇳🇬', naci:1997, alt:203, pes:104, col:'Indiana',          cap:false, contrato:'35.0M',  stats:{ pts:14.7, reb:4.5, ast:2.0, stl:1.4, blk:0.6, fg_pct:48.0 } },
          { nombre:'Mikal Bridges',     dorsal:25, pos:'SF', nac:'🇺🇸', naci:1996, alt:201, pes:95,  col:'Villanova',        cap:false, contrato:'27.7M',  stats:{ pts:13.3, reb:3.8, ast:3.0, stl:1.0, blk:0.4, fg_pct:41.8 } },
          { nombre:'Josh Hart',         dorsal:3,  pos:'SG', nac:'🇺🇸', naci:1995, alt:193, pes:100, col:'Villanova',        cap:false, contrato:'19.5M',  stats:{ pts:12.4, reb:8.8, ast:4.7, stl:1.3, blk:0.3, fg_pct:48.3 } },
          { nombre:'Miles McBride',     dorsal:2,  pos:'PG', nac:'🇺🇸', naci:2001, alt:188, pes:88,  col:'West Virginia',    cap:false, contrato:'4.3M',   stats:{ pts:9.6, reb:2.4, ast:2.4, stl:1.2, blk:0.2, fg_pct:47.5 } }
        ]
      },
      'Philadelphia 76ers': {
        color:'#006BB6', record:'24-58', capitan:'Joel Embiid',
        plantilla: [
          { nombre:'Joel Embiid',       dorsal:21, pos:'C',  nac:'🇨🇲', naci:1994, alt:213, pes:127, col:'Kansas',           cap:true,  contrato:'51.4M',  stats:{ pts:24.2, reb:8.6, ast:4.2, stl:1.2, blk:2.0, fg_pct:52.7 } },
          { nombre:'Tyrese Maxey',      dorsal:0,  pos:'PG', nac:'🇺🇸', naci:2000, alt:188, pes:88,  col:'Kentucky',         cap:false, contrato:'35.9M',  stats:{ pts:25.9, reb:3.7, ast:6.1, stl:1.0, blk:0.4, fg_pct:46.5 } },
          { nombre:'Paul George',       dorsal:8,  pos:'SF', nac:'🇺🇸', naci:1990, alt:203, pes:100, col:'Fresno State',     cap:false, contrato:'51.4M',  stats:{ pts:15.6, reb:5.2, ast:3.7, stl:1.5, blk:0.4, fg_pct:42.6 } },
          { nombre:'Kelly Oubre Jr.',   dorsal:12, pos:'SG', nac:'🇺🇸', naci:1995, alt:198, pes:95,  col:'Kansas',           cap:false, contrato:'13.0M',  stats:{ pts:13.8, reb:5.1, ast:1.5, stl:1.2, blk:0.5, fg_pct:44.5 } },
          { nombre:'Andre Drummond',    dorsal:1,  pos:'C',  nac:'🇺🇸', naci:1993, alt:208, pes:129, col:'Connecticut',       cap:false, contrato:'4.0M',   stats:{ pts:7.8, reb:9.5, ast:1.0, stl:0.5, blk:1.2, fg_pct:57.0 } }
        ]
      },
      'Brooklyn Nets': {
        color:'#000000', record:'22-60', capitan:'Cam Thomas',
        plantilla: [
          { nombre:'Cam Thomas',        dorsal:24, pos:'SG', nac:'🇺🇸', naci:2003, alt:193, pes:95,  col:'LSU',              cap:true,  contrato:'5.8M',   stats:{ pts:22.1, reb:4.2, ast:3.9, stl:0.8, blk:0.3, fg_pct:46.0 } },
          { nombre:'Nic Claxton',       dorsal:33, pos:'C',  nac:'🇺🇸', naci:1999, alt:211, pes:106, col:'Georgia',          cap:false, contrato:'23.7M',  stats:{ pts:12.5, reb:8.8, ast:2.2, stl:0.8, blk:2.4, fg_pct:60.1 } },
          { nombre:'Dennis Schröder',   dorsal:17, pos:'PG', nac:'🇩🇪', naci:1993, alt:188, pes:86,  col:'—',               cap:false, contrato:'13.0M',  stats:{ pts:17.2, reb:3.5, ast:5.8, stl:0.9, blk:0.2, fg_pct:43.8 } },
          { nombre:'Ben Simmons',       dorsal:10, pos:'PG', nac:'🇦🇺', naci:1996, alt:208, pes:107, col:'LSU',              cap:false, contrato:'40.3M',  stats:{ pts:4.8, reb:4.9, ast:4.0, stl:0.7, blk:0.5, fg_pct:52.0 } },
          { nombre:'Day\'Ron Sharpe',   dorsal:20, pos:'C',  nac:'🇺🇸', naci:2001, alt:206, pes:113, col:'North Carolina',   cap:false, contrato:'2.5M',   stats:{ pts:8.5, reb:8.2, ast:1.2, stl:0.5, blk:0.8, fg_pct:57.5 } }
        ]
      },
      'Toronto Raptors': {
        color:'#CE1141', record:'30-52', capitan:'Scottie Barnes',
        plantilla: [
          { nombre:'Scottie Barnes',    dorsal:4,  pos:'SF', nac:'🇺🇸', naci:2001, alt:206, pes:104, col:'Florida State',    cap:true,  contrato:'33.6M',  stats:{ pts:19.9, reb:8.7, ast:6.1, stl:1.2, blk:0.7, fg_pct:48.2 } },
          { nombre:'Immanuel Quickley', dorsal:5,  pos:'PG', nac:'🇺🇸', naci:1999, alt:193, pes:88,  col:'Kentucky',         cap:false, contrato:'34.4M',  stats:{ pts:20.0, reb:4.5, ast:6.8, stl:1.1, blk:0.3, fg_pct:43.5 } },
          { nombre:'Jakob Poeltl',      dorsal:25, pos:'C',  nac:'🇦🇹', naci:1995, alt:213, pes:120, col:'Utah',             cap:false, contrato:'19.0M',  stats:{ pts:10.0, reb:10.1, ast:3.2, stl:0.6, blk:1.5, fg_pct:62.0 } },
          { nombre:'Gradey Dick',       dorsal:1,  pos:'SG', nac:'🇺🇸', naci:2004, alt:198, pes:84,  col:'Kansas',           cap:false, contrato:'4.7M',   stats:{ pts:11.3, reb:2.8, ast:1.2, stl:0.6, blk:0.3, fg_pct:41.8 } },
          { nombre:'Bruce Brown',       dorsal:11, pos:'SG', nac:'🇺🇸', naci:1996, alt:193, pes:95,  col:'Miami',            cap:false, contrato:'10.0M',  stats:{ pts:8.5, reb:4.2, ast:2.5, stl:0.9, blk:0.5, fg_pct:47.0 } }
        ]
      }
    },
    Sureste: {
      'Miami Heat': {
        color:'#98002E', record:'36-46', capitan:'Bam Adebayo',
        plantilla: [
          { nombre:'Bam Adebayo',       dorsal:13, pos:'C',  nac:'🇺🇸', naci:1997, alt:208, pes:115, col:'Kentucky',         cap:true,  contrato:'32.6M',  stats:{ pts:19.4, reb:10.8, ast:4.4, stl:1.2, blk:0.9, fg_pct:53.5 } },
          { nombre:'Tyler Herro',       dorsal:14, pos:'SG', nac:'🇺🇸', naci:2000, alt:196, pes:91,  col:'Kentucky',         cap:false, contrato:'32.6M',  stats:{ pts:24.5, reb:5.7, ast:5.1, stl:1.0, blk:0.2, fg_pct:46.3 } },
          { nombre:'Jimmy Butler',      dorsal:22, pos:'SF', nac:'🇺🇸', naci:1989, alt:201, pes:104, col:'Marquette',        cap:false, contrato:'48.8M',  stats:{ pts:15.2, reb:5.2, ast:3.7, stl:1.3, blk:0.4, fg_pct:46.8 } },
          { nombre:'Nikola Jović',      dorsal:5,  pos:'PF', nac:'🇷🇸', naci:2003, alt:211, pes:97,  col:'—',               cap:false, contrato:'4.8M',   stats:{ pts:11.0, reb:5.7, ast:3.0, stl:0.8, blk:0.5, fg_pct:45.5 } },
          { nombre:'Terry Rozier',      dorsal:2,  pos:'SG', nac:'🇺🇸', naci:1994, alt:188, pes:90,  col:'Louisville',       cap:false, contrato:'26.5M',  stats:{ pts:17.2, reb:4.2, ast:4.8, stl:1.0, blk:0.3, fg_pct:44.8 } },
          { nombre:'Kevin Love',        dorsal:42, pos:'PF', nac:'🇺🇸', naci:1988, alt:203, pes:113, col:'UCLA',             cap:false, contrato:'3.9M',   stats:{ pts:5.5, reb:4.5, ast:1.8, stl:0.4, blk:0.3, fg_pct:44.0 } }
        ]
      },
      'Atlanta Hawks': {
        color:'#C1D32F', record:'23-59', capitan:'Trae Young',
        plantilla: [
          { nombre:'Trae Young',        dorsal:11, pos:'PG', nac:'🇺🇸', naci:1998, alt:185, pes:82,  col:'Oklahoma',         cap:true,  contrato:'43.0M',  stats:{ pts:23.7, reb:2.8, ast:11.6, stl:1.4, blk:0.2, fg_pct:43.4 } },
          { nombre:'Jalen Johnson',     dorsal:1,  pos:'SF', nac:'🇺🇸', naci:2001, alt:201, pes:100, col:'Duke',             cap:false, contrato:'14.0M',  stats:{ pts:20.7, reb:8.4, ast:5.5, stl:1.0, blk:0.7, fg_pct:50.3 } },
          { nombre:'Dyson Daniels',     dorsal:5,  pos:'SG', nac:'🇦🇺', naci:2003, alt:198, pes:93,  col:'G League Ignite', cap:false, contrato:'8.0M',   stats:{ pts:12.7, reb:4.5, ast:3.4, stl:2.5, blk:0.6, fg_pct:43.0 } },
          { nombre:'Clint Capela',      dorsal:15, pos:'C',  nac:'🇨🇭', naci:1994, alt:208, pes:113, col:'—',               cap:false, contrato:'22.4M',  stats:{ pts:9.8, reb:10.4, ast:1.2, stl:0.7, blk:1.7, fg_pct:63.0 } },
          { nombre:'Garrison Mathews',  dorsal:25, pos:'SG', nac:'🇺🇸', naci:1997, alt:196, pes:95,  col:'Lipscomb',         cap:false, contrato:'2.5M',   stats:{ pts:8.0, reb:2.5, ast:1.5, stl:0.5, blk:0.2, fg_pct:45.0 } }
        ]
      },
      'Charlotte Hornets': {
        color:'#1D1160', record:'19-63', capitan:'LaMelo Ball',
        plantilla: [
          { nombre:'LaMelo Ball',       dorsal:1,  pos:'PG', nac:'🇺🇸', naci:2001, alt:201, pes:88,  col:'—',               cap:true,  contrato:'35.2M',  stats:{ pts:28.0, reb:5.7, ast:8.1, stl:1.7, blk:0.5, fg_pct:45.5 } },
          { nombre:'Brandon Miller',    dorsal:24, pos:'SF', nac:'🇺🇸', naci:2003, alt:206, pes:95,  col:'Alabama',          cap:false, contrato:'12.2M',  stats:{ pts:17.2, reb:4.3, ast:2.7, stl:0.9, blk:0.5, fg_pct:45.0 } },
          { nombre:'Miles Bridges',     dorsal:0,  pos:'SF', nac:'🇺🇸', naci:1998, alt:201, pes:102, col:'Michigan State',   cap:false, contrato:'17.4M',  stats:{ pts:18.4, reb:6.8, ast:3.4, stl:1.0, blk:0.5, fg_pct:47.5 } },
          { nombre:'Mark Williams',     dorsal:5,  pos:'C',  nac:'🇺🇸', naci:2002, alt:216, pes:115, col:'Duke',             cap:false, contrato:'4.8M',   stats:{ pts:12.0, reb:9.2, ast:1.4, stl:0.5, blk:1.8, fg_pct:64.0 } },
          { nombre:'Nick Richards',     dorsal:4,  pos:'C',  nac:'🇯🇲', naci:1997, alt:213, pes:113, col:'Kentucky',         cap:false, contrato:'11.0M',  stats:{ pts:6.5, reb:7.0, ast:0.8, stl:0.3, blk:1.2, fg_pct:60.0 } }
        ]
      },
      'Washington Wizards': {
        color:'#002B5C', record:'18-64', capitan:'Kyle Kuzma',
        plantilla: [
          { nombre:'Kyle Kuzma',        dorsal:33, pos:'PF', nac:'🇺🇸', naci:1995, alt:206, pes:100, col:'Utah',             cap:true,  contrato:'13.0M',  stats:{ pts:15.2, reb:7.5, ast:3.5, stl:0.8, blk:0.7, fg_pct:44.5 } },
          { nombre:'Jordan Poole',      dorsal:13, pos:'SG', nac:'🇺🇸', naci:1999, alt:193, pes:88,  col:'Michigan',         cap:false, contrato:'35.0M',  stats:{ pts:17.1, reb:2.7, ast:4.4, stl:0.8, blk:0.2, fg_pct:42.0 } },
          { nombre:'Bilal Coulibaly',   dorsal:0,  pos:'SG', nac:'🇫🇷', naci:2003, alt:198, pes:93,  col:'—',               cap:false, contrato:'7.0M',   stats:{ pts:13.8, reb:5.2, ast:2.8, stl:1.5, blk:0.6, fg_pct:43.2 } },
          { nombre:'Alexandre Sarr',    dorsal:20, pos:'PF', nac:'🇫🇷', naci:2005, alt:218, pes:104, col:'Perth Wildcats',   cap:false, contrato:'11.0M',  stats:{ pts:9.8, reb:5.8, ast:1.5, stl:0.7, blk:1.8, fg_pct:48.0 } }
        ]
      },
      'Orlando Magic': {
        color:'#0077C0', record:'35-47', capitan:'Paolo Banchero',
        plantilla: [
          { nombre:'Paolo Banchero',    dorsal:5,  pos:'PF', nac:'🇺🇸', naci:2002, alt:208, pes:113, col:'Duke',             cap:true,  contrato:'10.4M',  stats:{ pts:24.6, reb:7.8, ast:5.6, stl:1.3, blk:0.6, fg_pct:47.0 } },
          { nombre:'Franz Wagner',      dorsal:22, pos:'SF', nac:'🇩🇪', naci:2001, alt:208, pes:102, col:'Michigan',         cap:false, contrato:'20.0M',  stats:{ pts:23.4, reb:5.1, ast:4.8, stl:0.9, blk:0.4, fg_pct:47.4 } },
          { nombre:'Jalen Suggs',       dorsal:4,  pos:'PG', nac:'🇺🇸', naci:2001, alt:196, pes:95,  col:'Gonzaga',          cap:false, contrato:'9.7M',   stats:{ pts:14.7, reb:3.9, ast:5.2, stl:1.7, blk:0.3, fg_pct:41.5 } },
          { nombre:'Wendell Carter Jr.',dorsal:34, pos:'C',  nac:'🇺🇸', naci:1999, alt:208, pes:113, col:'Duke',             cap:false, contrato:'17.9M',  stats:{ pts:11.4, reb:9.3, ast:3.2, stl:0.7, blk:1.0, fg_pct:54.5 } },
          { nombre:'Moritz Wagner',     dorsal:21, pos:'C',  nac:'🇩🇪', naci:1997, alt:213, pes:109, col:'Michigan',         cap:false, contrato:'8.5M',   stats:{ pts:14.5, reb:7.8, ast:1.5, stl:0.5, blk:0.8, fg_pct:57.0 } }
        ]
      }
    },
    Central: {
      'Cleveland Cavaliers': {
        color:'#860038', record:'64-18', capitan:'Donovan Mitchell',
        plantilla: [
          { nombre:'Donovan Mitchell',  dorsal:45, pos:'SG', nac:'🇺🇸', naci:1996, alt:191, pes:98,  col:'Louisville',       cap:true,  contrato:'35.9M',  stats:{ pts:26.0, reb:4.5, ast:5.9, stl:1.7, blk:0.3, fg_pct:48.3 } },
          { nombre:'Darius Garland',    dorsal:10, pos:'PG', nac:'🇺🇸', naci:2000, alt:185, pes:88,  col:'Vanderbilt',       cap:false, contrato:'37.6M',  stats:{ pts:20.6, reb:2.7, ast:8.2, stl:1.3, blk:0.2, fg_pct:45.8 } },
          { nombre:'Evan Mobley',       dorsal:4,  pos:'C',  nac:'🇺🇸', naci:2001, alt:216, pes:109, col:'USC',              cap:false, contrato:'26.0M',  stats:{ pts:18.0, reb:9.4, ast:3.0, stl:1.0, blk:1.7, fg_pct:57.5 } },
          { nombre:'Jarrett Allen',     dorsal:31, pos:'C',  nac:'🇺🇸', naci:1998, alt:213, pes:106, col:'Texas',            cap:false, contrato:'20.0M',  stats:{ pts:12.8, reb:10.5, ast:2.2, stl:0.6, blk:1.0, fg_pct:68.0 } },
          { nombre:'Max Strus',         dorsal:1,  pos:'SF', nac:'🇺🇸', naci:1996, alt:198, pes:98,  col:'DePaul',           cap:false, contrato:'13.0M',  stats:{ pts:12.5, reb:3.8, ast:2.8, stl:0.9, blk:0.3, fg_pct:43.0 } },
          { nombre:'De\'Andre Hunter',  dorsal:12, pos:'SF', nac:'🇺🇸', naci:1997, alt:203, pes:100, col:'Virginia',         cap:false, contrato:'22.0M',  stats:{ pts:14.5, reb:4.2, ast:2.5, stl:1.0, blk:0.5, fg_pct:46.5 } }
        ]
      },
      'Indiana Pacers': {
        color:'#002D62', record:'50-32', capitan:'Tyrese Haliburton',
        plantilla: [
          { nombre:'Tyrese Haliburton',  dorsal:0, pos:'PG', nac:'🇺🇸', naci:2000, alt:196, pes:84,  col:'Iowa State',       cap:true,  contrato:'32.7M',  stats:{ pts:19.0, reb:3.9, ast:10.7, stl:1.5, blk:0.4, fg_pct:45.8 } },
          { nombre:'Pascal Siakam',     dorsal:43, pos:'PF', nac:'🇨🇲', naci:1994, alt:206, pes:104, col:'New Mexico State', cap:false, contrato:'37.9M',  stats:{ pts:21.0, reb:6.8, ast:3.5, stl:1.0, blk:0.6, fg_pct:49.5 } },
          { nombre:'Myles Turner',      dorsal:33, pos:'C',  nac:'🇺🇸', naci:1996, alt:211, pes:111, col:'Texas',            cap:false, contrato:'19.9M',  stats:{ pts:14.2, reb:6.5, ast:1.8, stl:0.8, blk:2.5, fg_pct:49.0 } },
          { nombre:'Bennedict Mathurin',dorsal:00, pos:'SG', nac:'🇨🇦', naci:2002, alt:198, pes:102, col:'Arizona',          cap:false, contrato:'8.5M',   stats:{ pts:16.7, reb:4.8, ast:2.0, stl:0.8, blk:0.4, fg_pct:47.2 } },
          { nombre:'Andrew Nembhard',   dorsal:2,  pos:'PG', nac:'🇨🇦', naci:2000, alt:193, pes:91,  col:'Gonzaga',          cap:false, contrato:'4.5M',   stats:{ pts:9.8, reb:3.4, ast:4.5, stl:0.9, blk:0.3, fg_pct:48.0 } },
          { nombre:'James Johnson',     dorsal:5,  pos:'SF', nac:'🇺🇸', naci:1987, alt:203, pes:113, col:'Wake Forest',      cap:false, contrato:'3.5M',   stats:{ pts:4.5, reb:3.0, ast:1.8, stl:0.8, blk:0.5, fg_pct:47.0 } }
        ]
      },
      'Milwaukee Bucks': {
        color:'#00471B', record:'48-34', capitan:'Giannis Antetokounmpo',
        plantilla: [
          { nombre:'Giannis Antetokounmpo',dorsal:34,pos:'PF',nac:'🇬🇷',naci:1994,alt:211, pes:110, col:'—',               cap:true,  contrato:'48.8M',  stats:{ pts:30.4, reb:11.5, ast:6.5, stl:1.2, blk:1.1, fg_pct:61.1 } },
          { nombre:'Damian Lillard',    dorsal:0,  pos:'PG', nac:'🇺🇸', naci:1990, alt:188, pes:88,  col:'Weber State',      cap:false, contrato:'48.8M',  stats:{ pts:24.3, reb:4.4, ast:7.3, stl:0.9, blk:0.3, fg_pct:43.2 } },
          { nombre:'Brook Lopez',       dorsal:11, pos:'C',  nac:'🇺🇸', naci:1988, alt:216, pes:120, col:'Stanford',         cap:false, contrato:'16.1M',  stats:{ pts:12.8, reb:5.2, ast:1.8, stl:0.6, blk:2.4, fg_pct:52.0 } },
          { nombre:'Bobby Portis',      dorsal:9,  pos:'PF', nac:'🇺🇸', naci:1995, alt:208, pes:108, col:'Arkansas',         cap:false, contrato:'14.0M',  stats:{ pts:12.8, reb:7.8, ast:1.5, stl:0.7, blk:0.5, fg_pct:49.0 } },
          { nombre:'Khris Middleton',   dorsal:22, pos:'SF', nac:'🇺🇸', naci:1991, alt:201, pes:100, col:'Texas A&M',        cap:false, contrato:'40.8M',  stats:{ pts:14.5, reb:4.8, ast:4.2, stl:1.0, blk:0.3, fg_pct:48.0 } }
        ]
      },
      'Chicago Bulls': {
        color:'#CE1141', record:'39-43', capitan:'Zach LaVine',
        plantilla: [
          { nombre:'Zach LaVine',       dorsal:8,  pos:'SG', nac:'🇺🇸', naci:1995, alt:196, pes:95,  col:'UCLA',             cap:true,  contrato:'43.9M',  stats:{ pts:23.1, reb:4.2, ast:4.3, stl:0.8, blk:0.4, fg_pct:46.2 } },
          { nombre:'Nikola Vucevic',    dorsal:9,  pos:'C',  nac:'🇲🇪', naci:1990, alt:213, pes:117, col:'USC',              cap:false, contrato:'22.0M',  stats:{ pts:20.2, reb:10.5, ast:3.5, stl:0.6, blk:0.8, fg_pct:52.5 } },
          { nombre:'Coby White',        dorsal:0,  pos:'PG', nac:'🇺🇸', naci:2000, alt:193, pes:88,  col:'UNC',              cap:false, contrato:'25.0M',  stats:{ pts:19.1, reb:3.4, ast:5.0, stl:0.9, blk:0.3, fg_pct:43.5 } },
          { nombre:'Patrick Williams',  dorsal:44, pos:'PF', nac:'🇺🇸', naci:2001, alt:203, pes:102, col:'FSU',              cap:false, contrato:'22.8M',  stats:{ pts:11.5, reb:4.8, ast:2.2, stl:0.8, blk:0.5, fg_pct:45.0 } },
          { nombre:'Josh Giddey',       dorsal:3,  pos:'SF', nac:'🇦🇺', naci:2002, alt:208, pes:100, col:'Adelaide 36ers',   cap:false, contrato:'7.0M',   stats:{ pts:14.8, reb:6.5, ast:6.9, stl:1.2, blk:0.3, fg_pct:46.0 } }
        ]
      },
      'Detroit Pistons': {
        color:'#C8102E', record:'24-58', capitan:'Cade Cunningham',
        plantilla: [
          { nombre:'Cade Cunningham',   dorsal:2,  pos:'PG', nac:'🇺🇸', naci:2001, alt:201, pes:100, col:'Oklahoma State',   cap:true,  contrato:'28.7M',  stats:{ pts:26.6, reb:4.4, ast:9.1, stl:1.5, blk:0.6, fg_pct:47.3 } },
          { nombre:'Jalen Duren',       dorsal:0,  pos:'C',  nac:'🇺🇸', naci:2003, alt:211, pes:120, col:'Memphis',          cap:false, contrato:'4.7M',   stats:{ pts:14.5, reb:12.5, ast:1.8, stl:0.7, blk:1.5, fg_pct:61.0 } },
          { nombre:'Ausar Thompson',    dorsal:5,  pos:'SF', nac:'🇺🇸', naci:2003, alt:198, pes:95,  col:'Overtime Elite',   cap:false, contrato:'10.1M',  stats:{ pts:13.0, reb:4.5, ast:2.2, stl:1.5, blk:0.8, fg_pct:50.5 } },
          { nombre:'Isaiah Stewart',    dorsal:28, pos:'PF', nac:'🇺🇸', naci:2001, alt:206, pes:111, col:'Washington',        cap:false, contrato:'14.0M',  stats:{ pts:11.5, reb:6.8, ast:2.5, stl:0.9, blk:0.9, fg_pct:49.0 } },
          { nombre:'Malik Beasley',     dorsal:5,  pos:'SG', nac:'🇺🇸', naci:1996, alt:193, pes:91,  col:'Florida State',    cap:false, contrato:'7.0M',   stats:{ pts:12.0, reb:2.8, ast:1.5, stl:0.7, blk:0.2, fg_pct:43.5 } }
        ]
      }
    }
  },

  Oeste: {
    Noroeste: {
      'Denver Nuggets': {
        color:'#0E2240', record:'50-32', capitan:'Nikola Jokic',
        plantilla: [
          { nombre:'Nikola Jokić',      dorsal:15, pos:'C',  nac:'🇷🇸', naci:1995, alt:211, pes:129, col:'—',               cap:true,  contrato:'47.6M',  stats:{ pts:29.6, reb:12.7, ast:10.2, stl:1.4, blk:0.9, fg_pct:57.5 } },
          { nombre:'Jamal Murray',      dorsal:27, pos:'PG', nac:'🇨🇦', naci:1997, alt:193, pes:95,  col:'Kentucky',         cap:false, contrato:'33.4M',  stats:{ pts:22.5, reb:4.2, ast:6.6, stl:1.1, blk:0.3, fg_pct:47.5 } },
          { nombre:'Michael Porter Jr.',dorsal:1,  pos:'SF', nac:'🇺🇸', naci:1998, alt:208, pes:104, col:'Missouri',         cap:false, contrato:'33.4M',  stats:{ pts:16.0, reb:5.8, ast:1.8, stl:0.7, blk:0.5, fg_pct:47.5 } },
          { nombre:'Aaron Gordon',      dorsal:50, pos:'PF', nac:'🇺🇸', naci:1995, alt:203, pes:104, col:'Arizona',          cap:false, contrato:'22.3M',  stats:{ pts:14.0, reb:6.4, ast:3.5, stl:0.9, blk:0.7, fg_pct:53.0 } },
          { nombre:'Russell Westbrook', dorsal:4,  pos:'PG', nac:'🇺🇸', naci:1988, alt:191, pes:91,  col:'UCLA',             cap:false, contrato:'3.5M',   stats:{ pts:8.5, reb:4.2, ast:4.8, stl:1.2, blk:0.3, fg_pct:43.0 } },
          { nombre:'Julian Strawther',  dorsal:3,  pos:'SG', nac:'🇺🇸', naci:2002, alt:198, pes:97,  col:'Gonzaga',          cap:false, contrato:'3.5M',   stats:{ pts:9.5, reb:2.8, ast:1.5, stl:0.5, blk:0.3, fg_pct:45.0 } }
        ]
      },
      'Oklahoma City Thunder': {
        color:'#007AC1', record:'68-14', capitan:'Shai Gilgeous-Alexander',
        plantilla: [
          { nombre:'Shai Gilgeous-Alexander',dorsal:2,pos:'PG',nac:'🇨🇦',naci:1998,alt:198, pes:95,  col:'Kentucky',         cap:true,  contrato:'34.0M',  stats:{ pts:32.7, reb:5.5, ast:6.4, stl:2.0, blk:1.0, fg_pct:53.5 } },
          { nombre:'Jalen Williams',    dorsal:8,  pos:'SG', nac:'🇺🇸', naci:2001, alt:198, pes:97,  col:'Santa Clara',      cap:false, contrato:'20.0M',  stats:{ pts:22.5, reb:4.5, ast:5.8, stl:1.1, blk:0.5, fg_pct:50.0 } },
          { nombre:'Chet Holmgren',     dorsal:7,  pos:'C',  nac:'🇺🇸', naci:2002, alt:221, pes:98,  col:'Gonzaga',          cap:false, contrato:'9.4M',   stats:{ pts:14.9, reb:7.9, ast:2.1, stl:0.8, blk:2.4, fg_pct:50.5 } },
          { nombre:'Luguentz Dort',     dorsal:5,  pos:'SG', nac:'🇨🇦', naci:1999, alt:193, pes:95,  col:'Arizona State',    cap:false, contrato:'16.1M',  stats:{ pts:12.6, reb:3.0, ast:2.5, stl:1.1, blk:0.3, fg_pct:43.0 } },
          { nombre:'Isaiah Hartenstein',dorsal:55, pos:'C',  nac:'🇩🇪', naci:1998, alt:213, pes:113, col:'—',               cap:false, contrato:'30.4M',  stats:{ pts:9.5, reb:8.5, ast:3.5, stl:1.2, blk:1.5, fg_pct:60.0 } },
          { nombre:'Aaron Wiggins',     dorsal:21, pos:'SG', nac:'🇺🇸', naci:1999, alt:196, pes:91,  col:'Maryland',         cap:false, contrato:'7.0M',   stats:{ pts:8.8, reb:3.8, ast:1.5, stl:0.9, blk:0.3, fg_pct:45.5 } }
        ]
      },
      'Utah Jazz': {
        color:'#002B5C', record:'27-55', capitan:'Lauri Markkanen',
        plantilla: [
          { nombre:'Lauri Markkanen',   dorsal:23, pos:'PF', nac:'🇫🇮', naci:1997, alt:213, pes:104, col:'Arizona',          cap:true,  contrato:'23.4M',  stats:{ pts:23.2, reb:8.8, ast:1.9, stl:0.6, blk:0.7, fg_pct:48.5 } },
          { nombre:'Jordan Clarkson',   dorsal:00, pos:'SG', nac:'🇵🇭', naci:1992, alt:193, pes:88,  col:'Missouri',         cap:false, contrato:'14.3M',  stats:{ pts:16.5, reb:3.8, ast:3.5, stl:0.8, blk:0.3, fg_pct:44.0 } },
          { nombre:'Keyonte George',    dorsal:3,  pos:'PG', nac:'🇺🇸', naci:2003, alt:193, pes:91,  col:'Baylor',           cap:false, contrato:'6.3M',   stats:{ pts:15.5, reb:3.5, ast:5.0, stl:1.0, blk:0.2, fg_pct:40.5 } },
          { nombre:'Walker Kessler',    dorsal:24, pos:'C',  nac:'🇺🇸', naci:2001, alt:221, pes:113, col:'Auburn',           cap:false, contrato:'6.2M',   stats:{ pts:9.0, reb:8.5, ast:1.5, stl:0.6, blk:3.0, fg_pct:68.0 } },
          { nombre:'Cody Williams',     dorsal:5,  pos:'SF', nac:'🇺🇸', naci:2004, alt:203, pes:93,  col:'Colorado',         cap:false, contrato:'6.7M',   stats:{ pts:5.5, reb:2.5, ast:1.2, stl:0.5, blk:0.4, fg_pct:43.0 } }
        ]
      },
      'Minnesota Timberwolves': {
        color:'#236192', record:'44-38', capitan:'Anthony Edwards',
        plantilla: [
          { nombre:'Anthony Edwards',   dorsal:5,  pos:'SG', nac:'🇺🇸', naci:2001, alt:193, pes:102, col:'Georgia',          cap:true,  contrato:'35.5M',  stats:{ pts:25.9, reb:5.4, ast:5.1, stl:1.3, blk:0.5, fg_pct:46.3 } },
          { nombre:'Rudy Gobert',       dorsal:27, pos:'C',  nac:'🇫🇷', naci:1992, alt:216, pes:117, col:'—',               cap:false, contrato:'41.5M',  stats:{ pts:12.5, reb:12.9, ast:2.1, stl:0.8, blk:2.0, fg_pct:63.0 } },
          { nombre:'Julius Randle',     dorsal:30, pos:'PF', nac:'🇺🇸', naci:1994, alt:203, pes:113, col:'Kentucky',         cap:false, contrato:'29.0M',  stats:{ pts:22.8, reb:8.5, ast:4.6, stl:0.9, blk:0.4, fg_pct:47.0 } },
          { nombre:'Mike Conley',       dorsal:10, pos:'PG', nac:'🇺🇸', naci:1987, alt:183, pes:82,  col:'Ohio State',       cap:false, contrato:'4.0M',   stats:{ pts:7.5, reb:2.8, ast:5.5, stl:0.9, blk:0.2, fg_pct:44.0 } },
          { nombre:'Jaden McDaniels',   dorsal:3,  pos:'SF', nac:'🇺🇸', naci:2001, alt:208, pes:97,  col:'Washington',       cap:false, contrato:'13.1M',  stats:{ pts:14.5, reb:4.2, ast:2.0, stl:1.2, blk:0.8, fg_pct:47.0 } }
        ]
      },
      'Portland Trail Blazers': {
        color:'#E03A3E', record:'21-61', capitan:'Anfernee Simons',
        plantilla: [
          { nombre:'Anfernee Simons',   dorsal:1,  pos:'SG', nac:'🇺🇸', naci:1999, alt:188, pes:88,  col:'IMG Academy',      cap:true,  contrato:'24.2M',  stats:{ pts:20.2, reb:3.5, ast:5.5, stl:0.9, blk:0.2, fg_pct:44.0 } },
          { nombre:'Shaedon Sharpe',    dorsal:17, pos:'SG', nac:'🇨🇦', naci:2003, alt:196, pes:95,  col:'Kentucky',         cap:false, contrato:'8.0M',   stats:{ pts:16.8, reb:4.2, ast:2.8, stl:1.0, blk:0.5, fg_pct:44.5 } },
          { nombre:'Jerami Grant',      dorsal:9,  pos:'PF', nac:'🇺🇸', naci:1994, alt:201, pes:104, col:'Syracuse',         cap:false, contrato:'26.5M',  stats:{ pts:16.0, reb:4.5, ast:2.8, stl:1.0, blk:0.7, fg_pct:44.0 } },
          { nombre:'Deandre Ayton',     dorsal:2,  pos:'C',  nac:'🇧🇸', naci:1998, alt:213, pes:120, col:'Arizona',          cap:false, contrato:'32.6M',  stats:{ pts:13.5, reb:9.8, ast:1.8, stl:0.7, blk:1.0, fg_pct:57.0 } },
          { nombre:'Scoot Henderson',   dorsal:00, pos:'PG', nac:'🇺🇸', naci:2004, alt:188, pes:91,  col:'G League Ignite', cap:false, contrato:'9.0M',   stats:{ pts:11.0, reb:3.5, ast:5.2, stl:0.8, blk:0.3, fg_pct:41.0 } }
        ]
      }
    },
    Pacifico: {
      'Golden State Warriors': {
        color:'#1D428A', record:'48-34', capitan:'Stephen Curry',
        plantilla: [
          { nombre:'Stephen Curry',     dorsal:30, pos:'PG', nac:'🇺🇸', naci:1988, alt:190, pes:84,  col:'Davidson',         cap:true,  contrato:'51.9M',  stats:{ pts:22.5, reb:4.0, ast:6.2, stl:1.0, blk:0.3, fg_pct:45.0 } },
          { nombre:'Draymond Green',    dorsal:23, pos:'PF', nac:'🇺🇸', naci:1990, alt:198, pes:104, col:'Michigan State',   cap:false, contrato:'22.3M',  stats:{ pts:9.0, reb:7.5, ast:6.8, stl:1.2, blk:0.8, fg_pct:49.0 } },
          { nombre:'Andrew Wiggins',    dorsal:22, pos:'SF', nac:'🇨🇦', naci:1995, alt:201, pes:93,  col:'Kansas',           cap:false, contrato:'24.3M',  stats:{ pts:16.8, reb:4.5, ast:2.2, stl:1.0, blk:0.5, fg_pct:47.0 } },
          { nombre:'Jonathan Kuminga',  dorsal:00, pos:'SF', nac:'🇨🇩', naci:2002, alt:201, pes:104, col:'G League Ignite', cap:false, contrato:'18.0M',  stats:{ pts:16.0, reb:4.5, ast:2.0, stl:0.8, blk:0.5, fg_pct:50.0 } },
          { nombre:'Brandin Podziemski',dorsal:2,  pos:'SG', nac:'🇺🇸', naci:2002, alt:193, pes:95,  col:'Santa Clara',      cap:false, contrato:'5.0M',   stats:{ pts:12.0, reb:5.5, ast:3.5, stl:1.5, blk:0.3, fg_pct:44.0 } },
          { nombre:'Moses Moody',       dorsal:4,  pos:'SG', nac:'🇺🇸', naci:2002, alt:198, pes:93,  col:'Arkansas',         cap:false, contrato:'4.3M',   stats:{ pts:8.5, reb:2.8, ast:1.5, stl:0.7, blk:0.3, fg_pct:45.5 } }
        ]
      },
      'Los Angeles Lakers': {
        color:'#552583', record:'50-32', capitan:'LeBron James',
        plantilla: [
          { nombre:'LeBron James',      dorsal:23, pos:'SF', nac:'🇺🇸', naci:1984, alt:206, pes:113, col:'—',               cap:true,  contrato:'51.4M',  stats:{ pts:23.7, reb:7.3, ast:8.2, stl:1.1, blk:0.6, fg_pct:53.6 } },
          { nombre:'Anthony Davis',     dorsal:3,  pos:'C',  nac:'🇺🇸', naci:1993, alt:208, pes:115, col:'Kentucky',         cap:false, contrato:'43.2M',  stats:{ pts:24.7, reb:12.6, ast:3.5, stl:1.2, blk:2.0, fg_pct:56.0 } },
          { nombre:'Austin Reaves',     dorsal:15, pos:'SG', nac:'🇺🇸', naci:1998, alt:193, pes:93,  col:'Arkansas',         cap:false, contrato:'12.0M',  stats:{ pts:15.9, reb:4.0, ast:5.5, stl:1.0, blk:0.3, fg_pct:46.0 } },
          { nombre:"D'Angelo Russell",  dorsal:1,  pos:'PG', nac:'🇺🇸', naci:1996, alt:193, pes:88,  col:'Ohio State',       cap:false, contrato:'18.6M',  stats:{ pts:14.0, reb:3.0, ast:6.5, stl:0.8, blk:0.2, fg_pct:43.5 } },
          { nombre:'Rui Hachimura',     dorsal:28, pos:'PF', nac:'🇯🇵', naci:1998, alt:203, pes:102, col:'Gonzaga',          cap:false, contrato:'17.6M',  stats:{ pts:13.5, reb:5.5, ast:1.5, stl:0.6, blk:0.5, fg_pct:50.0 } },
          { nombre:'Bronny James',      dorsal:9,  pos:'PG', nac:'🇺🇸', naci:2004, alt:191, pes:91,  col:'USC',              cap:false, contrato:'7.9M',   stats:{ pts:5.5, reb:1.8, ast:1.5, stl:0.5, blk:0.3, fg_pct:38.0 } }
        ]
      },
      'Los Angeles Clippers': {
        color:'#C8102E', record:'42-40', capitan:'Kawhi Leonard',
        plantilla: [
          { nombre:'Kawhi Leonard',     dorsal:2,  pos:'SF', nac:'🇺🇸', naci:1991, alt:201, pes:104, col:'San Diego State',  cap:true,  contrato:'48.8M',  stats:{ pts:20.0, reb:5.8, ast:3.8, stl:1.8, blk:0.8, fg_pct:51.0 } },
          { nombre:'Norman Powell',     dorsal:24, pos:'SG', nac:'🇺🇸', naci:1993, alt:193, pes:95,  col:'UCLA',             cap:false, contrato:'18.4M',  stats:{ pts:24.0, reb:3.5, ast:2.5, stl:0.9, blk:0.4, fg_pct:51.5 } },
          { nombre:'Ivica Zubac',       dorsal:40, pos:'C',  nac:'🇧🇦', naci:1997, alt:213, pes:120, col:'—',               cap:false, contrato:'13.2M',  stats:{ pts:12.5, reb:9.5, ast:2.5, stl:0.5, blk:1.2, fg_pct:62.5 } },
          { nombre:'James Harden',      dorsal:1,  pos:'PG', nac:'🇺🇸', naci:1989, alt:196, pes:100, col:'Arizona State',    cap:false, contrato:'35.6M',  stats:{ pts:17.5, reb:5.5, ast:8.5, stl:1.1, blk:0.5, fg_pct:43.0 } },
          { nombre:'Terance Mann',      dorsal:14, pos:'SF', nac:'🇺🇸', naci:1996, alt:198, pes:104, col:'Florida State',    cap:false, contrato:'13.5M',  stats:{ pts:10.5, reb:4.5, ast:2.8, stl:0.8, blk:0.4, fg_pct:48.5 } }
        ]
      },
      'Phoenix Suns': {
        color:'#1D1160', record:'36-46', capitan:'Devin Booker',
        plantilla: [
          { nombre:'Devin Booker',      dorsal:1,  pos:'SG', nac:'🇺🇸', naci:1996, alt:198, pes:97,  col:'Kentucky',         cap:true,  contrato:'36.0M',  stats:{ pts:25.7, reb:4.7, ast:6.9, stl:1.0, blk:0.4, fg_pct:49.0 } },
          { nombre:'Kevin Durant',      dorsal:35, pos:'SF', nac:'🇺🇸', naci:1988, alt:208, pes:109, col:'Texas',            cap:false, contrato:'51.2M',  stats:{ pts:26.1, reb:6.3, ast:4.0, stl:0.8, blk:1.2, fg_pct:55.0 } },
          { nombre:'Bradley Beal',      dorsal:3,  pos:'SG', nac:'🇺🇸', naci:1993, alt:196, pes:97,  col:'Florida',          cap:false, contrato:'46.7M',  stats:{ pts:18.2, reb:4.0, ast:4.8, stl:1.2, blk:0.3, fg_pct:47.0 } },
          { nombre:'Jusuf Nurkic',      dorsal:20, pos:'C',  nac:'🇧🇦', naci:1994, alt:213, pes:127, col:'—',               cap:false, contrato:'18.0M',  stats:{ pts:11.0, reb:10.5, ast:2.8, stl:0.8, blk:0.8, fg_pct:54.0 } },
          { nombre:'Monte Morris',      dorsal:12, pos:'PG', nac:'🇺🇸', naci:1995, alt:188, pes:91,  col:'Iowa State',       cap:false, contrato:'3.2M',   stats:{ pts:7.5, reb:2.5, ast:3.8, stl:0.6, blk:0.2, fg_pct:47.0 } }
        ]
      },
      'Sacramento Kings': {
        color:'#5A2D81', record:'40-42', capitan:"De'Aaron Fox",
        plantilla: [
          { nombre:"De'Aaron Fox",      dorsal:5,  pos:'PG', nac:'🇺🇸', naci:1997, alt:191, pes:91,  col:'Kentucky',         cap:true,  contrato:'33.4M',  stats:{ pts:24.5, reb:4.5, ast:8.0, stl:1.7, blk:0.5, fg_pct:50.0 } },
          { nombre:'Domantas Sabonis',  dorsal:11, pos:'C',  nac:'🇱🇹', naci:1996, alt:211, pes:117, col:'Gonzaga',          cap:false, contrato:'26.0M',  stats:{ pts:19.5, reb:13.5, ast:7.5, stl:1.0, blk:0.5, fg_pct:60.5 } },
          { nombre:'Keegan Murray',     dorsal:13, pos:'SF', nac:'🇺🇸', naci:2001, alt:206, pes:104, col:'Iowa',              cap:false, contrato:'9.7M',   stats:{ pts:16.5, reb:4.8, ast:2.0, stl:0.8, blk:0.5, fg_pct:47.5 } },
          { nombre:'Kevin Huerter',     dorsal:9,  pos:'SG', nac:'🇺🇸', naci:1998, alt:201, pes:93,  col:'Maryland',         cap:false, contrato:'17.0M',  stats:{ pts:12.0, reb:3.5, ast:2.8, stl:0.7, blk:0.3, fg_pct:44.0 } },
          { nombre:'Malik Monk',        dorsal:0,  pos:'SG', nac:'🇺🇸', naci:1998, alt:185, pes:88,  col:'Kentucky',         cap:false, contrato:'12.0M',  stats:{ pts:14.5, reb:3.0, ast:4.5, stl:0.8, blk:0.2, fg_pct:45.0 } }
        ]
      }
    },
    Suroeste: {
      'San Antonio Spurs': {
        color:'#C4CED4', record:'34-48', capitan:'Victor Wembanyama',
        plantilla: [
          { nombre:'Victor Wembanyama', dorsal:1,  pos:'C',  nac:'🇫🇷', naci:2004, alt:224, pes:104, col:'Metropolitans 92', cap:true,  contrato:'12.2M',  stats:{ pts:25.4, reb:10.7, ast:3.9, stl:1.2, blk:3.6, fg_pct:48.8 } },
          { nombre:'Devin Vassell',     dorsal:24, pos:'SG', nac:'🇺🇸', naci:2001, alt:196, pes:93,  col:'Florida State',    cap:false, contrato:'22.7M',  stats:{ pts:14.8, reb:3.8, ast:4.2, stl:1.0, blk:0.5, fg_pct:45.0 } },
          { nombre:'Keldon Johnson',    dorsal:3,  pos:'SF', nac:'🇺🇸', naci:2000, alt:198, pes:104, col:'Kentucky',         cap:false, contrato:'21.1M',  stats:{ pts:14.5, reb:5.2, ast:2.5, stl:1.0, blk:0.5, fg_pct:46.0 } },
          { nombre:'Jeremy Sochan',     dorsal:10, pos:'PF', nac:'🇵🇱', naci:2003, alt:203, pes:104, col:'Baylor',           cap:false, contrato:'10.0M',  stats:{ pts:12.5, reb:6.2, ast:3.5, stl:1.0, blk:0.5, fg_pct:46.0 } },
          { nombre:'Stephon Castle',    dorsal:5,  pos:'PG', nac:'🇺🇸', naci:2004, alt:196, pes:97,  col:'Connecticut',      cap:false, contrato:'8.0M',   stats:{ pts:11.5, reb:3.5, ast:3.8, stl:1.2, blk:0.5, fg_pct:44.5 } }
        ]
      },
      'Houston Rockets': {
        color:'#CE1141', record:'52-30', capitan:'Alperen Sengun',
        plantilla: [
          { nombre:'Alperen Sengun',    dorsal:28, pos:'C',  nac:'🇹🇷', naci:2002, alt:211, pes:113, col:'—',               cap:true,  contrato:'17.3M',  stats:{ pts:21.1, reb:9.4, ast:5.0, stl:1.0, blk:1.8, fg_pct:56.5 } },
          { nombre:'Jalen Green',       dorsal:4,  pos:'SG', nac:'🇺🇸', naci:2002, alt:191, pes:86,  col:'G League Ignite', cap:false, contrato:'32.5M',  stats:{ pts:22.8, reb:4.5, ast:4.0, stl:1.0, blk:0.5, fg_pct:46.0 } },
          { nombre:'Fred VanVleet',     dorsal:5,  pos:'PG', nac:'🇺🇸', naci:1994, alt:185, pes:91,  col:'Wichita State',   cap:false, contrato:'42.0M',  stats:{ pts:13.5, reb:3.5, ast:7.5, stl:1.2, blk:0.3, fg_pct:40.0 } },
          { nombre:'Dillon Brooks',     dorsal:9,  pos:'SF', nac:'🇨🇦', naci:1996, alt:196, pes:102, col:'Oregon',           cap:false, contrato:'20.3M',  stats:{ pts:12.8, reb:3.5, ast:2.5, stl:1.2, blk:0.5, fg_pct:43.0 } },
          { nombre:'Jabari Smith Jr.',  dorsal:1,  pos:'PF', nac:'🇺🇸', naci:2003, alt:211, pes:104, col:'Auburn',           cap:false, contrato:'11.5M',  stats:{ pts:14.0, reb:6.8, ast:2.0, stl:0.8, blk:1.5, fg_pct:44.5 } },
          { nombre:'Amen Thompson',     dorsal:1,  pos:'SF', nac:'🇺🇸', naci:2003, alt:198, pes:104, col:'Overtime Elite',   cap:false, contrato:'10.1M',  stats:{ pts:11.5, reb:6.5, ast:3.5, stl:1.5, blk:0.8, fg_pct:53.0 } }
        ]
      },
      'Memphis Grizzlies': {
        color:'#5D76A9', record:'41-41', capitan:'Ja Morant',
        plantilla: [
          { nombre:'Ja Morant',         dorsal:12, pos:'PG', nac:'🇺🇸', naci:1999, alt:191, pes:88,  col:'Murray State',     cap:true,  contrato:'35.1M',  stats:{ pts:23.5, reb:5.5, ast:9.0, stl:1.2, blk:0.5, fg_pct:49.0 } },
          { nombre:'Jaren Jackson Jr.', dorsal:13, pos:'C',  nac:'🇺🇸', naci:1999, alt:211, pes:113, col:'Michigan State',   cap:false, contrato:'35.8M',  stats:{ pts:22.9, reb:6.8, ast:2.5, stl:0.8, blk:3.0, fg_pct:47.5 } },
          { nombre:'Desmond Bane',      dorsal:22, pos:'SG', nac:'🇺🇸', naci:1999, alt:196, pes:97,  col:'TCU',              cap:false, contrato:'27.3M',  stats:{ pts:19.5, reb:4.5, ast:4.8, stl:1.0, blk:0.3, fg_pct:45.0 } },
          { nombre:'Marcus Smart',      dorsal:36, pos:'PG', nac:'🇺🇸', naci:1994, alt:193, pes:97,  col:'Oklahoma State',   cap:false, contrato:'20.0M',  stats:{ pts:7.5, reb:3.0, ast:4.2, stl:1.5, blk:0.3, fg_pct:41.0 } },
          { nombre:'GG Jackson',        dorsal:45, pos:'PF', nac:'🇺🇸', naci:2004, alt:208, pes:93,  col:'South Carolina',   cap:false, contrato:'4.0M',   stats:{ pts:15.8, reb:5.5, ast:2.0, stl:0.5, blk:0.5, fg_pct:44.0 } }
        ]
      },
      'Dallas Mavericks': {
        color:'#00538C', record:'49-33', capitan:'Luka Doncic',
        plantilla: [
          { nombre:'Luka Dončić',       dorsal:77, pos:'PG', nac:'🇸🇮', naci:1999, alt:201, pes:104, col:'Real Madrid',      cap:true,  contrato:'43.0M',  stats:{ pts:28.7, reb:8.6, ast:8.0, stl:1.4, blk:0.5, fg_pct:48.0 } },
          { nombre:'Kyrie Irving',      dorsal:11, pos:'SG', nac:'🇺🇸', naci:1992, alt:191, pes:88,  col:'Duke',             cap:false, contrato:'35.5M',  stats:{ pts:23.5, reb:4.5, ast:5.5, stl:1.3, blk:0.5, fg_pct:49.5 } },
          { nombre:'PJ Washington',     dorsal:25, pos:'PF', nac:'🇺🇸', naci:1998, alt:203, pes:104, col:'Kentucky',         cap:false, contrato:'17.5M',  stats:{ pts:13.5, reb:5.5, ast:2.5, stl:0.8, blk:0.8, fg_pct:46.0 } },
          { nombre:'Dereck Lively II',  dorsal:2,  pos:'C',  nac:'🇺🇸', naci:2003, alt:218, pes:106, col:'Duke',             cap:false, contrato:'9.5M',   stats:{ pts:13.0, reb:7.8, ast:2.5, stl:0.7, blk:2.0, fg_pct:68.5 } },
          { nombre:'Klay Thompson',     dorsal:31, pos:'SG', nac:'🇺🇸', naci:1990, alt:198, pes:100, col:'Washington State', cap:false, contrato:'43.0M',  stats:{ pts:13.5, reb:3.2, ast:2.2, stl:0.8, blk:0.5, fg_pct:41.5 } }
        ]
      },
      'New Orleans Pelicans': {
        color:'#0C2340', record:'24-58', capitan:'Zion Williamson',
        plantilla: [
          { nombre:'Zion Williamson',   dorsal:1,  pos:'PF', nac:'🇺🇸', naci:2000, alt:198, pes:129, col:'Duke',             cap:true,  contrato:'37.8M',  stats:{ pts:22.9, reb:5.8, ast:4.8, stl:1.1, blk:0.6, fg_pct:58.5 } },
          { nombre:'Brandon Ingram',    dorsal:14, pos:'SF', nac:'🇺🇸', naci:1997, alt:206, pes:91,  col:'Duke',             cap:false, contrato:'31.6M',  stats:{ pts:22.0, reb:5.0, ast:5.0, stl:0.8, blk:0.5, fg_pct:48.0 } },
          { nombre:'CJ McCollum',       dorsal:3,  pos:'SG', nac:'🇺🇸', naci:1991, alt:193, pes:86,  col:'Lehigh',           cap:false, contrato:'31.7M',  stats:{ pts:17.5, reb:3.5, ast:5.0, stl:0.8, blk:0.3, fg_pct:44.0 } },
          { nombre:'Jonas Valanciunas', dorsal:17, pos:'C',  nac:'🇱🇹', naci:1992, alt:213, pes:120, col:'—',               cap:false, contrato:'14.7M',  stats:{ pts:12.0, reb:10.5, ast:1.5, stl:0.5, blk:1.0, fg_pct:55.0 } },
          { nombre:'Herbert Jones',     dorsal:5,  pos:'SF', nac:'🇺🇸', naci:1998, alt:201, pes:97,  col:'Alabama',          cap:false, contrato:'18.0M',  stats:{ pts:9.5, reb:4.5, ast:2.5, stl:1.5, blk:0.5, fg_pct:46.5 } }
        ]
      }
    }
  }
};

console.log('[SS21 NBA] Rosters cargados — todas las conferencias');
