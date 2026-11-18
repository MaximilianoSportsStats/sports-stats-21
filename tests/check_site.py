"""
Chequeo automatico de Sports Stats 21.

Corre el sitio en un navegador real (escritorio y celular) y revisa que:
  - la portada cargue sin errores de JavaScript
  - "Empezar a explorar" y el menu lleven a Deportes
  - cada deporte de la barra abra UNA sola seccion, con contenido
  - en celular nada se salga del ancho de la pantalla ni quede cortado

Uso:
  python3 -m http.server 8765 &      # desde la raiz del repo
  python3 tests/check_site.py         # sale con codigo 1 si algo falla

Variables opcionales:
  SITE_URL     (por defecto http://localhost:8765/)
  CHROME_PATH  ejecutable de Chrome a usar (si no, el Chromium de Playwright)
"""
import os
import sys

from playwright.sync_api import sync_playwright

URL = os.environ.get("SITE_URL", "http://localhost:8765/")
CHROME = os.environ.get("CHROME_PATH")

# Errores que vienen de recursos externos (CDN de graficos, imagenes) y no
# del codigo del sitio: no cuentan como falla.
ERRORES_EXTERNOS = ("Chart is not defined", "ERR_TUNNEL", "Failed to load resource",
                    "net::ERR", "Script error")

fallas = []


def falla(msg):
    fallas.append(msg)
    print("  FALLA:", msg)


def ok(msg):
    print("  ok:", msg)


JS_PANELES_VISIBLES = """() => [...document.querySelectorAll('[id^=panel-]')].filter(e => {
  const r = e.getBoundingClientRect();
  return getComputedStyle(e).display !== 'none' && r.height > 40 && r.width > 40;
}).map(e => e.id)"""

JS_DEPORTES = """() => [...new Set([...document.querySelectorAll('.sport-btn')]
  .map(b => ((b.getAttribute('onclick') || '').match(/switchSport\\('([a-z0-9]+)'/) || [])[1])
  .filter(Boolean))]"""

JS_CORTADOS = """() => {
  const out = [];
  for (const e of document.querySelectorAll('[id^=panel-] *, .header *, .sport-nav-bar *')) {
    if (!e.offsetParent) continue;
    const r = e.getBoundingClientRect();
    if (r.width < 20 || r.height < 10) continue;
    if (!(e.innerText || '').trim() && e.tagName !== 'BUTTON') continue;
    if (e.closest('.v100-ticker')) continue;            // la cinta se desliza a proposito
    let p = e.parentElement;
    while (p && p !== document.body) {
      const s = getComputedStyle(p);
      if (s.overflowX === 'auto' || s.overflowX === 'scroll') break;
      if (s.overflowX === 'hidden' || s.overflow === 'hidden') {
        const pr = p.getBoundingClientRect();
        if (r.right > pr.right + 6 && r.left < pr.right)
          out.push((e.className || e.tagName).toString().split(' ')[0] + ': ' +
                   (e.innerText || '').trim().slice(0, 30).replace(/\\s+/g, ' '));
        break;
      }
      p = p.parentElement;
    }
  }
  return [...new Set(out)];
}"""


def nueva_pagina(browser, movil):
    if movil:
        ctx = browser.new_context(viewport={"width": 390, "height": 844},
                                  is_mobile=True, has_touch=True)
    else:
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    pg = ctx.new_page()
    errores = []
    pg.on("pageerror", lambda e: errores.append(str(e)[:160]))
    pg.goto(URL)
    pg.wait_for_timeout(2500)
    return pg, errores


def tocar(pg, loc, movil):
    if movil:
        loc.tap()
    else:
        loc.click()


def revisar_navegacion(browser, movil):
    nombre = "celular" if movil else "escritorio"
    print(f"\n[{nombre}] navegacion")
    pg, errores = nueva_pagina(browser, movil)

    if pg.evaluate(JS_PANELES_VISIBLES) != ["panel-inicio"]:
        falla(f"{nombre}: la portada no se ve sola al cargar ({pg.evaluate(JS_PANELES_VISIBLES)})")
    else:
        ok("portada")

    tocar(pg, pg.locator(".inicio-btn-primary").first, movil)
    pg.wait_for_timeout(2500)
    vis = pg.evaluate(JS_PANELES_VISIBLES)
    barra = pg.evaluate("() => { const b = document.querySelector('.sport-nav-bar'); return !!b && b.getBoundingClientRect().height > 0 }")
    if vis != ["panel-soccer"] or not barra:
        falla(f"{nombre}: 'Empezar a explorar' -> {vis}, barra de deportes visible={barra}")
    else:
        ok("'Empezar a explorar' abre Futbol con la barra de deportes")

    deportes = pg.evaluate(JS_DEPORTES)
    if len(deportes) < 10:
        falla(f"{nombre}: la barra tiene muy pocos deportes ({deportes})")
    malos = []
    for k in deportes:
        btn = [h for h in pg.query_selector_all(".sport-btn")
               if h.is_visible() and f"'{k}'" in (h.get_attribute("onclick") or "")]
        if not btn:
            malos.append(f"{k}: boton no visible")
            continue
        btn[0].scroll_into_view_if_needed()
        tocar(pg, btn[0], movil)
        pg.wait_for_timeout(1300)
        vis = pg.evaluate(JS_PANELES_VISIBLES)
        if len(vis) != 1:
            malos.append(f"{k}: se ven {vis}")
            continue
        largo = pg.evaluate(f"() => document.getElementById('{vis[0]}').innerText.trim().length")
        if largo < 100:
            malos.append(f"{k}: {vis[0]} casi vacio ({largo} caracteres)")
        # El contenido (no la lista lateral) tiene que empezar en la primera
        # pantalla: si una lista lo empuja hacia abajo, la seccion parece vacia.
        arriba = pg.evaluate(f"""() => {{ const P = document.getElementById('{vis[0]}');
          const kids = [...P.children].filter(c => c.tagName !== 'ASIDE' && getComputedStyle(c).display !== 'none' && c.getBoundingClientRect().height > 20);
          return kids.length ? Math.round(kids[0].getBoundingClientRect().top + scrollY) : -1 }}""")
        limite = 1000 if movil else 700
        if arriba > limite:
            malos.append(f"{k}: el contenido empieza muy abajo (y={arriba}px)")
        if movil:
            ancho = pg.evaluate("document.documentElement.scrollWidth")
            if ancho > 392:
                malos.append(f"{k}: la pagina mide {ancho}px de ancho")
    if malos:
        for m in malos:
            falla(f"{nombre}: {m}")
    else:
        ok(f"los {len(deportes)} deportes abren una sola seccion con contenido")

    externos = [e for e in errores if not any(x in e for x in ERRORES_EXTERNOS)]
    if externos:
        for e in externos[:10]:
            falla(f"{nombre}: error de JavaScript: {e}")
    else:
        ok("sin errores de JavaScript")
    pg.context.close()


def revisar_menu_escritorio(browser):
    print("\n[escritorio] menu lateral")
    pg, _ = nueva_pagina(browser, False)
    pg.locator(".v36-burger").first.click()
    pg.wait_for_timeout(800)
    pg.locator(".v36-side >> text=Deportes").first.click()
    pg.wait_for_timeout(800)
    pg.locator(".v36-side >> text=Profesionales").first.click()
    pg.wait_for_timeout(2500)
    vis = pg.evaluate(JS_PANELES_VISIBLES)
    if vis != ["panel-soccer"]:
        falla(f"menu Deportes > Profesionales -> {vis}")
    else:
        ok("menu Deportes > Profesionales abre Futbol")
    pg.locator(".v36-burger").first.click()
    pg.wait_for_timeout(800)
    pg.locator(".v36-side >> text=Inicio").first.click()
    pg.wait_for_timeout(2500)
    vis = pg.evaluate(JS_PANELES_VISIBLES)
    if vis != ["panel-inicio"]:
        falla(f"menu Inicio -> {vis}")
    else:
        ok("menu Inicio vuelve a la portada")
    pg.context.close()


def revisar_historial(browser):
    print("\n[escritorio] direcciones, atras y adelante")
    pg, _ = nueva_pagina(browser, False)
    pg.wait_for_timeout(3000)
    if pg.evaluate("SS21NAV.current") != "panel-inicio":
        falla(f"la portada no se queda quieta al cargar ({pg.evaluate('SS21NAV.current')})")
    pasos = []
    pg.locator(".inicio-btn-primary").first.click(); pg.wait_for_timeout(1500)
    pasos.append(pg.evaluate("[SS21NAV.current, location.hash]"))
    for k in ["tennis", "nba"]:
        btn = [h for h in pg.query_selector_all(".sport-btn")
               if h.is_visible() and f"'{k}'" in (h.get_attribute("onclick") or "")][0]
        btn.click(); pg.wait_for_timeout(1500)
        pasos.append(pg.evaluate("[SS21NAV.current, location.hash]"))
    esperados = [["panel-soccer", "#/futbol"], ["panel-tennis", "#/tenis"], ["panel-nba", "#/basketball"]]
    if pasos != esperados:
        falla(f"direcciones al navegar: {pasos}")
    else:
        ok("cada seccion tiene su direccion (#/futbol, #/tenis, #/basketball)")
    atras = []
    for _ in range(3):
        pg.go_back(); pg.wait_for_timeout(1300)
        atras.append(pg.evaluate("SS21NAV.current"))
    if atras != ["panel-tennis", "panel-soccer", "panel-inicio"]:
        falla(f"'atras' lleva a {atras}")
    else:
        ok("'atras' recorre los pasos en orden")
    pg.go_forward(); pg.wait_for_timeout(1300)
    if pg.evaluate("SS21NAV.current") != "panel-soccer":
        falla(f"'adelante' lleva a {pg.evaluate('SS21NAV.current')}")
    else:
        ok("'adelante' funciona")
    pg.context.close()
    malos = []
    for h, esperado in [("#/tenis", "panel-tennis"), ("#/noticias", "panel-v703-noticias"),
                        ("#deportes", "panel-soccer"), ("#/carreras", "panel-f1")]:
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        q = ctx.new_page(); q.goto(URL.rstrip("/") + "/" + h); q.wait_for_timeout(3500)
        vis = q.evaluate(JS_PANELES_VISIBLES)
        if vis != [esperado]:
            malos.append(f"{h} -> {vis}")
        ctx.close()
    if malos:
        falla("enlaces directos: " + ", ".join(malos))
    else:
        ok("los enlaces directos abren la seccion correcta")


def revisar_celular_todas_las_secciones(browser):
    print("\n[celular] todas las secciones: ancho y contenido cortado")
    pg, _ = nueva_pagina(browser, True)
    pg.locator(".inicio-btn-primary").first.tap()
    pg.wait_for_timeout(1500)
    vistas = [("go", i) for i in pg.evaluate("SS21NAV.ids")]
    vistas += [("dep", k) for k in pg.evaluate(JS_DEPORTES)]
    anchos, cortados, tablas = [], {}, []
    for tipo, v in vistas:
        if tipo == "go":
            if not pg.evaluate(f"() => !!document.getElementById('{v}')"):
                continue
            pg.evaluate(f"SS21NAV.go('{v}')")
        else:
            pg.evaluate(f"SS21abrirDeporte('{v}')")
        pg.wait_for_timeout(600)
        w = pg.evaluate("document.documentElement.scrollWidth")
        if w > 392:
            anchos.append(f"{v} ({w}px)")
        primera = set(pg.evaluate(JS_CORTADOS))
        if primera:
            # Las tarjetas que rotan con animacion se ven "cortadas" a mitad de
            # movimiento: solo cuenta si sigue cortado un segundo despues.
            pg.wait_for_timeout(1200)
            for c in primera & set(pg.evaluate(JS_CORTADOS)):
                cortados.setdefault(c, v)
        tablas += [f"{v}: {t}" for t in pg.evaluate("""() => [...document.querySelectorAll('table')]
          .filter(t => t.offsetParent && t.getBoundingClientRect().width > 360)
          .filter(t => { let p = t.parentElement; while (p && p !== document.body) {
              const o = getComputedStyle(p).overflowX; if (o === 'auto' || o === 'scroll') return false;
              p = p.parentElement } return true })
          .map(t => (t.className || 'table'))""")]
    if anchos:
        falla("secciones mas anchas que la pantalla: " + ", ".join(anchos))
    else:
        ok(f"{len(vistas)} vistas caben en 390px")
    if cortados:
        for c, v in list(cortados.items())[:15]:
            falla(f"contenido cortado en {v}: {c}")
    else:
        ok("nada queda cortado")
    if tablas:
        falla("tablas cortadas: " + ", ".join(sorted(set(tablas))))
    else:
        ok("ninguna tabla cortada")
    pg.context.close()


def main():
    with sync_playwright() as p:
        kw = {"args": ["--no-sandbox"]}
        if CHROME:
            kw["executable_path"] = CHROME
        browser = p.chromium.launch(**kw)
        revisar_navegacion(browser, movil=False)
        revisar_menu_escritorio(browser)
        revisar_historial(browser)
        revisar_navegacion(browser, movil=True)
        revisar_celular_todas_las_secciones(browser)
        browser.close()
    print()
    if fallas:
        print(f"RESULTADO: {len(fallas)} falla(s)")
        sys.exit(1)
    print("RESULTADO: todo OK")


if __name__ == "__main__":
    main()
