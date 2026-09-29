/* PeptidesValtellina — app */
const $ = (s, root = document) => root.querySelector(s);

const el = (tag, props = {}, ...children) => {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === "class") e.className = v;
    else if (k === "html") e.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v != null && v !== false) e.setAttribute(k, v);
  });
  children.flat().forEach(c => {
    if (c == null || c === false) return;
    e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return e;
};

const svg = (paths, size = 16) => {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttribute("width", size);
  s.setAttribute("height", size);
  s.setAttribute("viewBox", "0 0 24 24");
  s.setAttribute("fill", "none");
  s.setAttribute("stroke", "currentColor");
  s.setAttribute("stroke-width", "2");
  s.setAttribute("stroke-linecap", "round");
  s.setAttribute("stroke-linejoin", "round");
  paths.forEach(d => {
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", d);
    s.appendChild(p);
  });
  return s;
};

const arrow = () => svg(["M5 12h14M12 5l7 7-7 7"], 16);
const fileCheck = () => svg(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M9 15l2 2 4-4"], 16);
const shield = () => svg(["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "m9 12 2 2 4-4"], 13);
const backIcon = () => svg(["m12 19-7-7 7-7", "M19 12H5"], 16);
const mail = () => svg(["M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z", "m22 6-10 7L2 6"], 16);
const whatsappIcon = () => {
  const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  s.setAttribute("width", "18");
  s.setAttribute("height", "18");
  s.setAttribute("viewBox", "0 0 24 24");
  s.setAttribute("fill", "currentColor");
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z");
  s.appendChild(p);
  return s;
};

function whatsappUrl(productName) {
  const msg = `Ciao, ero interessato a prendere ${productName}. Potete darmi più informazioni?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function scrollToId(id) {
  const t = document.getElementById(id);
  if (t) t.scrollIntoView({ behavior: "smooth" });
}

function goHomeSection(id) {
  const current = window.location.hash.replace(/^#/, "") || "/";
  if (current === "/" || current === "") {
    scrollToId(id);
  } else {
    sessionStorage.setItem("pepsScrollTo", id);
    route("/");
  }
}

function attachScroll() {
  const nav = $("#nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  if (window.__navScroll) window.removeEventListener("scroll", window.__navScroll);
  window.__navScroll = onScroll;
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function observeReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(n => n.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  nodes.forEach(n => io.observe(n));
}

function route(path) {
  const target = path || "/";
  const current = window.location.hash.replace(/^#/, "") || "/";
  if (current === target) render();
  else window.location.hash = target;
}

function go(path, e) {
  if (e) e.preventDefault();
  route(path);
}

/* ——— Layout ——— */
function navbar() {
  return el("header", { class: "nav", id: "nav" },
    el("div", { class: "nav-inner" },
      el("a", { class: "brand", href: "#/", onclick: (e) => go("/", e) },
        el("span", { class: "name" }, "PeptidesValtellina"),
        el("span", { class: "tag" }, "/ lab")
      ),
      el("div", { class: "nav-links" },
        el("a", { href: "#/products", onclick: (e) => go("/products", e) }, "Composti"),
        el("a", { href: "#/", onclick: (e) => { e.preventDefault(); goHomeSection("categories"); } }, "Protocolli"),
        el("a", { href: "#/certificati", onclick: (e) => go("/certificati", e) }, "Certificati"),
        el("a", { href: "#/", onclick: (e) => { e.preventDefault(); goHomeSection("about"); } }, "Contatti")
      )
    )
  );
}

function footer() {
  const form = el("form", {
    onsubmit: (e) => {
      e.preventDefault();
      const i = $("input", form);
      if (!i.value) return;
      const subject = encodeURIComponent("Iscrizione newsletter — PeptidesValtellina");
      const body = encodeURIComponent(`Ciao,\nvorrei iscrivermi alla newsletter.\n\nEmail: ${i.value}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      form.querySelector(".news-sent").classList.remove("hidden");
      i.value = "";
    }
  },
    el("div", { class: "news-input" },
      el("input", { type: "email", placeholder: "tua@email.it", required: "" }),
      el("button", { type: "submit", "aria-label": "Iscriviti" }, arrow())
    ),
    el("p", { class: "news-sent hidden" }, "Si apre la mail: completa l'invio per iscriverti.")
  );

  const cols = el("div", { class: "footer-cols" });
  cols.appendChild(el("div", { class: "footer-brand" },
    el("h4", { class: "brand-h" }, "PeptidesValtellina"),
    el("p", {}, "Molecole tracciabili. Peptidi di ricerca di grado farmaceutico."),
    el("div", { class: "footer-contact" },
      el("a", { href: `mailto:${CONTACT_EMAIL}` }, CONTACT_EMAIL),
      el("a", { href: `tel:${CONTACT_PHONE_TEL}` }, CONTACT_PHONE),
      el("a", {
        href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ciao, vorrei avere informazioni sui vostri peptidi.")}`,
        target: "_blank",
        rel: "noopener"
      }, "WhatsApp")
    )
  ));

  const mkCol = (title, items) => {
    const ul = el("ul", {});
    items.forEach(([label, path, anchor]) => {
      const external = path.startsWith("mailto:") || path.startsWith("https://") || path.startsWith("tel:");
      ul.appendChild(el("li", {},
        el("a", {
          href: external ? path : "#" + path,
          target: path.startsWith("https://") ? "_blank" : null,
          rel: path.startsWith("https://") ? "noopener" : null,
          onclick: (e) => {
            if (external) return;
            e.preventDefault();
            if (anchor && (path === "/" || path === "")) {
              goHomeSection(anchor);
            } else {
              route(path);
              if (anchor) setTimeout(() => scrollToId(anchor), 80);
            }
          }
        }, label)
      ));
    });
    return el("div", {}, el("h4", {}, title), ul);
  };

  cols.appendChild(mkCol("Esplora", [
    ["Composti", "/products"],
    ["Protocolli", "/", "categories"],
    ["Verifica", "/", "verified"]
  ]));
  cols.appendChild(mkCol("Laboratorio", [
    ["Certificati", "/certificati"],
    ["Email", `mailto:${CONTACT_EMAIL}`],
    ["Telefono", `tel:${CONTACT_PHONE_TEL}`],
    ["WhatsApp", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ciao, vorrei avere informazioni sui vostri peptidi.")}`]
  ]));
  cols.appendChild(mkCol("Legale", POLICY_ORDER.map(k => [POLICIES[k].nav, `/policy/${k}`])));

  return el("footer", { id: "about" },
    el("div", { class: "container" },
      el("div", { class: "footer-top" },
        el("div", {},
          el("h2", {}, document.createTextNode("Novità"), el("br"), "dal lab."),
          el("p", { class: "sub-p" }, "Iscriviti per ricevere aggiornamenti su nuovi lotti, nuovi composti e ricerche sui protocolli.")
        ),
        el("div", { class: "news-form" }, form)
      ),
      cols,
      el("div", { class: "footer-bottom" },
        el("p", {}, "© 2026 PeptidesValtellina · Solo a scopo di ricerca"),
        el("p", {}, CONTACT_PHONE + " · " + CONTACT_EMAIL)
      )
    )
  );
}

function wrapPage(...parts) {
  const app = $("#app");
  app.innerHTML = "";
  const shell = el("div", { class: "page-enter" });
  parts.forEach(p => shell.appendChild(p));
  app.appendChild(shell);
  attachScroll();
  observeReveals();
}

/* ——— Home ——— */
function hero() {
  return el("section", { class: "hero" },
    el("div", { class: "hero-bg" }, el("img", { src: HERO_IMG, alt: "Render astratto di una molecola" })),
    el("div", { class: "ticker left" }, "C142H238N42O42 · Verificato HPLC · Tracciabile"),
    el("div", { class: "ticker right" }, "Lotto · COA · Sterilità · Endotossine"),
    el("div", { class: "hero-content" },
      el("p", { class: "label" }, "Peptidi di ricerca di grado farmaceutico"),
      el("h1", {},
        document.createTextNode("Peptidi dalla Valtellina pronti all'utilizzo."),
        el("br"),
        el("span", { class: "accent" }, "Qualità e consegna unici in tutta la provincia.")
      ),
      el("p", { class: "sub" }, "Peptidi di ricerca di grado farmaceutico con purezza verificata, COA per ogni lotto e tracciabilità completa."),
      el("div", { class: "hero-cta" },
        el("a", { class: "btn-primary", href: "#/products", onclick: (e) => go("/products", e) }, "Scopri i composti ", arrow()),
        el("a", { class: "btn-outline", href: "#/certificati", onclick: (e) => go("/certificati", e) }, fileCheck(), " Verifica un lotto")
      )
    )
  );
}

function metricBar() {
  const grid = el("div", { class: "metrics-grid" });
  METRICS.forEach((m, i) => {
    grid.appendChild(el("div", { class: `metric reveal reveal-delay-${Math.min(i + 1, 4)}` },
      el("div", { class: "val" }, m.value),
      el("div", { class: "lbl" }, m.label)
    ));
  });
  return el("section", { class: "metrics" }, grid);
}

function productCard(p, delay = 0) {
  return el("a", {
    class: `pcard reveal${delay ? ` reveal-delay-${delay}` : ""}`,
    href: `#/products/${p.slug}`,
    onclick: (e) => go(`/products/${p.slug}`, e)
  },
    el("div", { class: "imgwrap" },
      el("img", { src: p.image_url, alt: p.name, loading: "lazy" }),
      el("span", { class: "purity" }, p.purity),
      p.in_stock
        ? el("span", { class: "stock-ok" }, "Disponibile")
        : el("span", { class: "oos" }, OOS_LABEL)
    ),
    el("h3", {}, p.name),
    el("p", { class: "price" }, `Da ${eur(p.price_eur)}`),
    el("p", { class: "cat-tag" }, p.category)
  );
}

function productCarousel() {
  const grid = el("div", { class: "product-grid" });
  PRODUCTS.forEach((p, i) => grid.appendChild(productCard(p, (i % 4) + 1)));
  return el("section", { class: "section" },
    el("div", { class: "container" },
      el("div", { class: "sec-head reveal" },
        el("span", { class: "label" }, "La libreria"),
        el("h2", {}, "I nostri composti di ricerca"),
        el("p", {}, "Sei peptidi selezionati, con purezza documentata e certificato Janoshik per ogni lotto.")
      ),
      grid,
      el("div", { class: "center-btn reveal" },
        el("a", { class: "btn-outline", href: "#/products", onclick: (e) => go("/products", e) }, "Vedi il catalogo ", arrow())
      )
    )
  );
}

function categoryCards() {
  const grid = el("div", { class: "cat-grid" });
  CATEGORIES_CARDS.forEach((c, i) => {
    grid.appendChild(el("div", { class: `catcard reveal reveal-delay-${(i % 4) + 1}` },
      el("div", { class: "imgwrap" }, el("img", { src: c.image, alt: c.title, loading: "lazy" })),
      el("h3", {}, c.title),
      el("p", {}, c.description),
      el("a", {
        class: "explore",
        href: `#/protocolli/${c.slug}`,
        onclick: (e) => go(`/protocolli/${c.slug}`, e)
      }, "Esplora ", arrow())
    ));
  });
  const feats = el("div", { class: "feat-list reveal" });
  FEATURES.forEach(f => feats.appendChild(el("div", { class: "item" }, el("span", { class: "dot" }), f)));
  return el("section", { class: "section cat-section", id: "categories" },
    el("div", { class: "container" },
      el("div", { class: "sec-head reveal" },
        el("span", { class: "label" }, "Protocolli"),
        el("h2", {}, "Pensati per la ricerca e per protocolli orientati alla performance")
      ),
      grid,
      feats
    )
  );
}

function verifiedSection() {
  return el("section", { class: "section verified", id: "verified" },
    el("div", { class: "container" },
      el("div", { class: "verified-grid" },
        el("div", { class: "order-1 reveal" },
          el("span", { class: "label" }, "Controllo qualità"),
          el("h2", {}, "Verificato. Documentato. Trasparente."),
          el("p", {}, "Ogni lotto viene sottoposto a cromatografia liquida ad alte prestazioni (HPLC-MS), analisi delle endotossine e convalida della sterilità. I certificati di analisi sono pubblici e verificabili."),
          (() => {
            const g = el("div", { class: "vmetrics" });
            [["HPLC-MS", "Purezza"], ["LAL", "Endotossine"], ["USP", "Sterilità"]].forEach(([v, l]) =>
              g.appendChild(el("div", {}, el("div", { class: "val" }, v), el("div", { class: "lbl" }, l)))
            );
            return g;
          })(),
          el("a", {
            class: "btn-primary",
            href: "#/certificati",
            style: "margin-top:32px;display:inline-flex;",
            onclick: (e) => go("/certificati", e)
          }, "Vai ai certificati ", arrow())
        ),
        el("div", { class: "reveal reveal-delay-2" },
          el("div", { class: "imgwrap" }, el("img", { src: LOGO_IMG, alt: "Logo PeptidesValtellina" }))
        )
      )
    )
  );
}

function homeView() {
  wrapPage(navbar(), hero(), metricBar(), productCarousel(), categoryCards(), verifiedSection(), footer());
  const scrollTarget = sessionStorage.getItem("pepsScrollTo");
  if (scrollTarget) {
    sessionStorage.removeItem("pepsScrollTo");
    setTimeout(() => scrollToId(scrollTarget), 80);
  }
}

/* ——— Catalog (no filters) ——— */
function productsView() {
  const cards = el("div", { class: "catalog-cards" });
  PRODUCTS.forEach((p, i) => {
    cards.appendChild(el("a", {
      class: `ccard reveal reveal-delay-${(i % 3) + 1}`,
      href: `#/products/${p.slug}`,
      onclick: (e) => go(`/products/${p.slug}`, e)
    },
      el("div", { class: "imgwrap" },
        el("img", { src: p.image_url, alt: p.name, loading: "lazy" }),
        el("span", { class: "purity" }, p.purity),
        p.in_stock
          ? el("span", { class: "stock-ok" }, "Disponibile")
          : el("span", { class: "oos" }, OOS_LABEL)
      ),
      el("h3", {}, p.name),
      el("p", { class: "price" }, `Da ${eur(p.price_eur)}`),
      el("p", { class: "cat-tag" }, p.category)
    ));
  });

  wrapPage(
    navbar(),
    el("div", { class: "page-pad" },
      el("div", { class: "container" },
        el("div", { class: "page-head reveal" },
          el("span", { class: "label" }, "Il catalogo"),
          el("h1", {}, "Composti di ricerca"),
          el("p", { class: "page-intro" }, "Sei molecole selezionate, ciascuna con certificato di analisi Janoshik e tracciabilità completa del lotto.")
        ),
        el("div", { class: "catalog-intro reveal" },
          el("p", { class: "count" }, `${PRODUCTS.length} composti · prezzi in euro`)
        ),
        cards
      )
    ),
    footer()
  );
}

/* ——— Detail ——— */
function detailView(slug) {
  const p = PRODUCTS.find(x => x.slug === slug);
  if (!p) {
    wrapPage(
      navbar(),
      el("div", { class: "page-pad" }, el("div", { class: "container" },
        el("p", {}, "Composto non trovato."),
        el("a", { class: "btn-primary", style: "margin-top:24px;", href: "#/products", onclick: (e) => go("/products", e) }, "Torna ai composti")
      )),
      footer()
    );
    return;
  }

  const left = el("div", { class: "detail-left" },
    el("div", { class: "main-img" }, el("img", { src: p.image_url, alt: p.name }))
  );

  const dmetrics = el("div", { class: "dmetrics" });
  METRICS.forEach(m => dmetrics.appendChild(
    el("div", {}, el("div", { class: "val" }, m.value), el("div", { class: "lbl" }, m.label))
  ));

  const waMsg = p.in_stock
    ? `Ciao, ero interessato a prendere ${p.name}. Potete darmi più informazioni?`
    : `Ciao, ero interessato a prendere ${p.name}. È ancora in riassortimento? Vorrei essere avvisato quando torna disponibile.`;
  const waBtn = el("a", {
    class: "req-btn wa",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`,
    target: "_blank",
    rel: "noopener"
  }, whatsappIcon(), p.in_stock ? ` Richiedi informazioni su ${p.name}` : " Chiedi disponibilità su WhatsApp");

  const right = el("div", { class: "detail-right reveal" },
    el("a", { class: "back", href: "#/products", onclick: (e) => go("/products", e) }, backIcon(), " Torna ai composti"),
    el("span", { class: "label" }, p.category),
    el("h1", {}, p.name),
    el("p", { class: "dprice" }, eur(p.price_eur)),
    el("p", { class: "desc" }, p.description),
    el("div", { class: "spec-table" },
      el("div", { class: "spec-row" }, el("span", { class: "k" }, "Sequenza"), el("span", { class: "v mono" }, p.sequence)),
      el("div", { class: "spec-row" }, el("span", { class: "k" }, "Peso molecolare"), el("span", { class: "v" }, p.molecular_weight)),
      el("div", { class: "spec-row" }, el("span", { class: "k" }, "Purezza"), el("span", { class: "v" }, p.purity)),
      el("div", { class: "spec-row" }, el("span", { class: "k" }, "Lotto"), el("span", { class: "v mono" }, p.batch)),
      el("div", { class: "spec-row" },
        el("span", { class: "k" }, "Disponibilità"),
        el("span", { class: "v", style: p.in_stock ? "color:#047857" : "color:#e11d48" }, p.in_stock ? "Disponibile" : OOS_LABEL)
      )
    ),
    waBtn,
    dmetrics,
    el("div", { class: "coa-card" },
      el("div", { class: "head" }, fileCheck(),
        el("div", {}, el("div", { class: "tag" }, "COA"), el("div", { class: "title" }, "Certificato di analisi"))
      ),
      el("div", { class: "btns" },
        el("a", { href: p.coa_url, target: "_blank", rel: "noopener" }, fileCheck(), " Vedi COA"),
        el("a", { href: JANOSHIK_VERIFY, target: "_blank", rel: "noopener" }, " Verifica chiave")
      ),
      el("p", { class: "note" }, shield(), ` Verificato Janoshik · chiave ${p.coa_key}`)
    )
  );

  wrapPage(
    navbar(),
    el("div", { class: "page-pad" },
      el("div", { class: "container" },
        el("div", { class: "detail-grid" }, left, right)
      )
    ),
    footer()
  );
}

/* ——— Certificates ——— */
function certificatesView() {
  const steps = el("div", { class: "cert-steps" });
  [
    ["01", "Trova il lotto", "Il numero di lotto (task Janoshik) è stampato sull'etichetta di ogni fiala."],
    ["02", "Apri il certificato", "Seleziona il composto e apri l'immagine del COA corrispondente."],
    ["03", "Verifica online", "Inserisci la chiave univoca su janoshik.com/verify per confermare l'analisi."]
  ].forEach(([n, h, t], i) => {
    steps.appendChild(el("div", { class: `cert-step reveal reveal-delay-${i + 1}` },
      el("span", { class: "n" }, n),
      el("h3", {}, h),
      el("p", {}, t)
    ));
  });

  const grid = el("div", { class: "cert-grid" });
  PRODUCTS.forEach((p, i) => {
    grid.appendChild(el("div", { class: `cert-card reveal reveal-delay-${(i % 3) + 1}` },
      el("a", {
        class: "top",
        href: `#/products/${p.slug}`,
        onclick: (e) => go(`/products/${p.slug}`, e),
        style: "text-decoration:none;color:inherit;"
      },
        el("div", { class: "thumb" }, el("img", { src: p.image_url, alt: p.name, loading: "lazy" })),
        el("div", {}, el("div", { class: "cat" }, p.category), el("h3", {}, p.name))
      ),
      el("div", { class: "cert-preview" }, el("img", { src: p.coa_url, alt: `COA ${p.name}`, loading: "lazy" })),
      el("div", { class: "spec-table" },
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Lotto"), el("span", { class: "v mono" }, p.batch)),
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Data analisi"), el("span", { class: "v" }, p.coa_date)),
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Risultato"), el("span", { class: "v" }, p.coa_result)),
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Chiave"), el("span", { class: "v mono" }, p.coa_key)),
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Laboratorio"), el("span", { class: "v" }, "Janoshik Analytical")),
        el("div", { class: "spec-row" }, el("span", { class: "k" }, "Stato"), el("span", { class: "v", style: "color:#047857" }, "Verificato"))
      ),
      el("div", { class: "cert-actions" },
        el("a", { class: "primary", href: p.coa_url, target: "_blank", rel: "noopener" }, fileCheck(), " Apri COA"),
        el("a", { class: "ghost", href: JANOSHIK_VERIFY, target: "_blank", rel: "noopener" }, "Verifica")
      )
    ));
  });

  wrapPage(
    navbar(),
    el("div", { class: "page-pad" },
      el("div", { class: "container" },
        el("div", { class: "page-head reveal" },
          el("span", { class: "label" }, "Libreria COA"),
          el("h1", {}, "Certificati di analisi"),
          el("p", { class: "page-intro" }, "Ogni lotto è analizzato da Janoshik Analytical. Qui trovi i certificati di tutti i nostri composti, con chiave di verifica pubblica.")
        ),
        steps,
        grid,
        el("div", { class: "cert-cta reveal" },
          el("h2", {}, "Non trovi il certificato del tuo lotto?"),
          el("p", {}, "Scrivici indicando il nome del composto e il numero di lotto: ti invieremo il certificato corrispondente."),
          el("div", { class: "cert-cta-actions" },
            el("a", { href: `mailto:${CONTACT_EMAIL}?subject=Richiesta%20certificato%20COA` }, mail(), " Email"),
            el("a", {
              href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Ciao, vorrei richiedere un certificato COA.")}`,
              target: "_blank",
              rel: "noopener"
            }, whatsappIcon(), " WhatsApp")
          )
        )
      )
    ),
    footer()
  );
}

/* ——— Protocol pages ——— */
function protocolView(slug) {
  const proto = PROTOCOLS[slug];
  if (!proto) { route("/"); return; }

  const related = PRODUCTS.filter(p => p.protocol === slug);
  const others = Object.values(PROTOCOLS).filter(p => p.slug !== slug);

  const blocks = el("div", { class: "proto-blocks" });
  proto.blocks.forEach((b, i) => {
    blocks.appendChild(el("div", { class: `proto-block reveal reveal-delay-${(i % 4) + 1}` },
      el("h3", {}, b.h),
      b.p ? el("p", {}, b.p) : null,
      b.list ? el("ul", {}, b.list.map(t => el("li", {}, t))) : null
    ));
  });

  const relatedGrid = el("div", { class: "catalog-cards" });
  related.forEach((p, i) => relatedGrid.appendChild(productCard(p, (i % 3) + 1)));

  const nav = el("div", { class: "proto-nav" });
  others.forEach(o => {
    nav.appendChild(el("a", {
      href: `#/protocolli/${o.slug}`,
      onclick: (e) => go(`/protocolli/${o.slug}`, e)
    },
      el("div", { class: "lbl" }, "Altro protocollo"),
      el("div", { class: "title" }, o.title)
    ));
  });

  wrapPage(
    navbar(),
    el("div", { class: "page-pad" },
      el("div", { class: "container" },
        el("div", { class: "proto-hero" },
          el("div", { class: "reveal" },
            el("a", { class: "back", href: "#/", onclick: (e) => { e.preventDefault(); goHomeSection("categories"); } }, backIcon(), " Torna ai protocolli"),
            el("span", { class: "label" }, proto.label),
            el("h1", { style: "font-family:var(--font-serif);font-size:clamp(2.25rem,5vw,3.5rem);letter-spacing:-0.02em;margin-top:12px;" }, proto.title),
            el("p", { class: "page-intro" }, proto.intro)
          ),
          el("div", { class: "img reveal reveal-delay-2" }, el("img", { src: proto.image, alt: proto.title }))
        ),
        blocks,
        related.length ? el("div", { class: "proto-related" },
          el("h2", { class: "reveal" }, "Composti in questo protocollo"),
          relatedGrid
        ) : null,
        nav
      )
    ),
    footer()
  );
}

/* ——— Policies ——— */
function policyView(key) {
  const policy = POLICIES[key];
  if (!policy) { route("/policy/privacy"); return; }

  const nav = el("nav", { class: "legal-nav" }, el("h4", {}, "Documenti legali"));
  POLICY_ORDER.forEach(k => nav.appendChild(
    el("a", {
      class: k === key ? "active" : "",
      href: `#/policy/${k}`,
      onclick: (e) => go(`/policy/${k}`, e)
    }, POLICIES[k].nav)
  ));

  const body = el("div", { class: "legal-body reveal" },
    el("p", { class: "updated" }, `Ultimo aggiornamento: ${LAST_UPDATE}`),
    ...policy.sections.map(s => el("section", {},
      el("h2", {}, s.h),
      ...(s.p || []).map(t => el("p", {}, t)),
      s.list ? el("ul", {}, s.list.map(t => el("li", {}, t))) : null
    )),
    el("div", { class: "legal-note" }, mail(),
      el("span", {}, "Per qualsiasi domanda su questo documento scrivici a ",
        el("a", { href: `mailto:${CONTACT_EMAIL}` }, CONTACT_EMAIL), ".")
    )
  );

  wrapPage(
    navbar(),
    el("div", { class: "page-pad" },
      el("div", { class: "container" },
        el("div", { class: "page-head reveal" },
          el("span", { class: "label" }, policy.label),
          el("h1", {}, policy.title),
          el("p", { class: "page-intro" }, policy.intro)
        ),
        el("div", { class: "legal-grid" }, nav, body)
      )
    ),
    footer()
  );
}

/* ——— Router ——— */
function render() {
  let hash = window.location.hash.replace(/^#/, "") || "/";
  window.scrollTo(0, 0);
  if (hash.startsWith("/products/")) detailView(hash.split("/")[2]);
  else if (hash === "/products") productsView();
  else if (hash === "/certificati") certificatesView();
  else if (hash.startsWith("/protocolli/")) protocolView(hash.split("/")[2]);
  else if (hash.startsWith("/policy/")) policyView(hash.split("/")[2]);
  else homeView();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
