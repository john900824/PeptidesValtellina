/* PeptidesValtellina — dati del sito */
const CONTACT_EMAIL = "studiosb.group@gmail.com";
const CONTACT_PHONE = "+39 351 2486 387";
const CONTACT_PHONE_TEL = "+393512486387";
const WHATSAPP_NUMBER = "393512486387";
const LAST_UPDATE = "27 settembre 2026";
const OOS_LABEL = "Esaurito · In riassortimento";
const JANOSHIK_VERIFY = "https://www.janoshik.com/verify/";

const PRODUCTS = [
  {
    id: 1,
    name: "KLOW",
    slug: "klow",
    category: "Recupero e Rigenerazione",
    protocol: "recupero",
    price_eur: 79.90,
    purity: "99% + HPLC",
    in_stock: true,
    description: "Blend di peptidi (GHK-Cu, BPC-157, TB-500, KPV) studiato per la rigenerazione dei tessuti, il recupero e la riparazione cellulare.",
    sequence: "GHK-Cu + BPC-157 + TB-500 + KPV",
    molecular_weight: "Blend · 70 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430716/klow_to40n7.png",
    batch: "#224376",
    coa_date: "20 agosto 2026",
    coa_result: "Endotossine 2,766 EU/Vial",
    coa_key: "LZRRGXF1WA1",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/glow_ghy21e.jpg"
  },
  {
    id: 2,
    name: "R3ta",
    slug: "r3ta",
    category: "Salute Metabolica",
    protocol: "metabolico",
    price_eur: 89.90,
    purity: "99.566% + HPLC",
    in_stock: false,
    description: "Peptide triplo agonista dei recettori GIP, GLP-1 e glucagone, oggetto di ricerca per l'ottimizzazione metabolica.",
    sequence: "Agonista GIP / GLP-1 / GCGR",
    molecular_weight: "4731,3 g/mol · 20 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430717/reta_s6my5h.png",
    batch: "#78234",
    coa_date: "10 settembre 2025",
    coa_result: "21,67 mg · Purezza 99,566%",
    coa_key: "EL8EYUHY6EFP",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/reta_kznmui.jpg"
  },
  {
    id: 3,
    name: "GHK-Cu",
    slug: "ghk-cu",
    category: "Longevità",
    protocol: "longevita",
    price_eur: 24.95,
    purity: "99.675% + HPLC",
    in_stock: false,
    description: "Peptide di rame che supporta il rinnovamento della pelle e dei tessuti.",
    sequence: "Gly-His-Lys · Cu²⁺",
    molecular_weight: "403,9 g/mol · 100 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430717/ghk-cu_u6hjpa.png",
    batch: "#121827",
    coa_date: "17 marzo 2026",
    coa_result: "123,28 mg · Purezza 99,675%",
    coa_key: "MPIFHJSSLG6P",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/ghkcu_fg4ad8.jpg"
  },
  {
    id: 4,
    name: "MOTS-c",
    slug: "mots-c",
    category: "Longevità",
    protocol: "longevita",
    price_eur: 49.90,
    purity: "99.009% + HPLC",
    in_stock: false,
    description: "Peptide di derivazione mitocondriale studiato per il metabolismo energetico e la vitalità cellulare.",
    sequence: "MRWQEMGYIFYPRKLR",
    molecular_weight: "2174,6 g/mol · 10 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430717/mots-c_dbfeoy.png",
    batch: "#77975",
    coa_date: "10 settembre 2025",
    coa_result: "10,63 mg · Purezza 99,009%",
    coa_key: "UMYE6CBDNPMJ",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/mots-c10_swtesk.jpg"
  },
  {
    id: 5,
    name: "Selank",
    slug: "selank",
    category: "Funzione Cognitiva",
    protocol: "cognitivo",
    price_eur: 34.90,
    purity: "99.918% + HPLC",
    in_stock: false,
    description: "Analogo sintetico della tuftsina, oggetto di ricerca per equilibrio, concentrazione e gestione dello stress.",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    molecular_weight: "751,9 g/mol · 10 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430716/selank_fbeaps.png",
    batch: "#219444",
    coa_date: "21 agosto 2026",
    coa_result: "10,77 mg · Purezza 99,918%",
    coa_key: "U5IS5GQ9H2AY",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/selank_cygwdr.jpg"
  },
  {
    id: 6,
    name: "Semax",
    slug: "semax",
    category: "Funzione Cognitiva",
    protocol: "cognitivo",
    price_eur: 34.90,
    purity: "99.286% + HPLC",
    in_stock: false,
    description: "Peptide derivato dall'ACTH(4-10), studiato per il supporto cognitivo, la memoria e la chiarezza mentale.",
    sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
    molecular_weight: "813,9 g/mol · 10 mg",
    image_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790430715/semax_qpxosb.png",
    batch: "#172193",
    coa_date: "24 giugno 2026",
    coa_result: "10,70 mg · Purezza 99,286%",
    coa_key: "AH35AILBTYJC",
    coa_url: "https://res.cloudinary.com/dvv175bck/image/upload/v1790509634/semax_g3xyps.jpg"
  }
];

const eur = (n) => n.toLocaleString("it-IT", { style: "currency", currency: "EUR" });

const HERO_IMG = "https://media.base44.com/images/public/6ab4efd96a4bab4603b5483c/574add560_generated_7fb9aa76.jpg";
const LOGO_IMG = "https://res.cloudinary.com/dvv175bck/image/upload/v1790511897/untitled_ChatGPT_Images_2.0_2026-09-27_12-24-36_q1gxdg.png";

const METRICS = [
  { value: "99%", label: "Purezza verificata HPLC" },
  { value: "COA", label: "per lotto, verificato Janoshik" },
  { value: "6", label: "Composti selezionati" },
  { value: "100%", label: "Imballaggio discreto" }
];

const FEATURES = [
  "Peptidi liofilizzati per la massima stabilità",
  "Catena del freddo mantenuta (quando necessario)",
  "Imballaggio neutro e discreto"
];

const PROTOCOLS = {
  recupero: {
    slug: "recupero",
    title: "Recupero e Riparazione",
    label: "Protocollo",
    nav: "Recupero",
    image: "https://res.cloudinary.com/dvv175bck/image/upload/v1790512558/1_h3vz2z.png",
    short: "Peptidi avanzati che supportano la rigenerazione dei tessuti e la riparazione cellulare.",
    intro: "I protocolli di recupero si concentrano sulla riparazione dei tessuti, sulla riduzione dell'infiammazione locale e sul supporto alla rigenerazione cellulare. Ideali per contesti di ricerca su lesioni, stress meccanico e ripristino post-sforzo.",
    blocks: [
      {
        h: "A cosa serve",
        p: "Questo ambito raccoglie molecole studiate per i processi di healing e remodeling tissutale. In laboratorio si osservano tipicamente effetti su angiogenesi, migrazione cellulare e sintesi di collagene.",
        list: ["Supporto alla riparazione dei tessuti molli", "Studi su cicatrizzazione e regenerazione", "Ricerca su flogosi e recupero funzionale"]
      },
      {
        h: "Approccio di laboratorio",
        p: "I peptidi di questa categoria vengono tipicamente ricostruati in solventi sterili e utilizzati in modelli in vitro o preclinici. Conservazione a freddo e manipolazione asettica sono fondamentali.",
        list:["Liofilizzati stabili a lungo termine", "COA con profilo di purezza e endotossine", "Dosaggi e concentrazione documentati sul lotto"]
      },
      {
        h: "Cosa monitorare",
        p: "Nei protocolli di ricerca sul recupero è utile documentare purezza HPLC, contenuto effettivo del vial e livelli di endotossine (LAL), come nel certificato Janoshik di KLOW.",
        list: ["Verifica del lotto sul COA", "Controllo endotossine", "Tracciabilità completa della fiala"]
      },
      {
        h: "Composti correlati",
        p: "Nel nostro catalogo, KLOW rappresenta il riferimento per questa area: un blend pensato per protocolli di riparazione e rigenerazione."
      }
    ]
  },
  longevita: {
    slug: "longevita",
    title: "Longevità e Salute Cellulare",
    label: "Protocollo",
    nav: "Longevità",
    image: "https://res.cloudinary.com/dvv175bck/image/upload/v1790512558/2_zgbmlf.png",
    short: "Peptidi che promuovono vitalità cellulare, resilienza e benessere a lungo termine.",
    intro: "I protocolli di longevità esplorano molecole coinvolte nel rinnovamento tissutale, nella bioenergetica mitocondriale e nella resilienza cellulare nel tempo.",
    blocks: [
      {
        h: "A cosa serve",
        p: "Questa area riguarda peptidi studiati per il turnover del collagene, lo stress ossidativo e il metabolismo energetico cellulare — temi centrali nella ricerca sull'invecchiamento.",
        list: ["Rinnovamento di pelle e tessuti connettivi", "Supporto mitocondriale e metabolismo", "Studi su stress cellulare e homeostasi"]
      },
      {
        h: "GHK-Cu",
        p: "Il rame-peptide GHK-Cu è ampiamente studiato per il signaling cutaneo e la riparazione. Il nostro lotto analizzato da Janoshik riporta purezza 99,675% e contenuto superiore al nominale.",
        list: ["Sequenza Gly-His-Lys complessa con Cu²⁺", "Purezza HPLC documentata", "Ideale per studi su tessuto e matrice"]
      },
      {
        h: "MOTS-c",
        p: "Peptide codificato dal genoma mitocondriale, oggetto di ricerca su metabolismo, esercizio e adattamento energetico. COA con purezza 99,009%.",
        list: ["Origine mitocondriale", "Focus su metabolismo energetico", "Fiala da 10 mg, contenuto verificato"]
      },
      {
        h: "Conservazione",
        p: "Entrambe le molecole vanno tenute al riparo da luce e umidità. Dopo ricostituzione, preferire aliquote e conservazione refrigerata secondo le buone pratiche di laboratorio."
      }
    ]
  },
  metabolico: {
    slug: "metabolico",
    title: "Ottimizzazione Metabolica",
    label: "Protocollo",
    nav: "Metabolico",
    image: "https://res.cloudinary.com/dvv175bck/image/upload/v1790512559/3_u9okej.png",
    short: "Peptidi che aiutano a sostenere la funzione metabolica e un equilibrio ottimale.",
    intro: "I protocolli metabolici riguardano agonisti e analoghi coinvolti nella regolazione di fame, bilancio energetico e vie incretiniche — un campo in rapida evoluzione nella ricerca farmacologica.",
    blocks: [
      {
        h: "A cosa serve",
        p: "Questa categoria raccoglie molecole studiate per i recettori GIP, GLP-1 e glucagone. Sono strumenti di ricerca per comprendere peso corporeo, glicemia e homeostasi energetica.",
        list: ["Ricerca su analoghi incretinici", "Studi su bilancio energetico", "Modelli di sensibilità metabolica"]
      },
      {
        h: "R3ta (Retatrutide)",
        p: "Triplo agonista oggetto di ampia letteratura recente. Il nostro lotto Janoshik (#78234) riporta 21,67 mg di contenuto e purezza 99,566%.",
        list: ["Agonismo GIP / GLP-1 / GCGR", "Fiala da 20 mg nominale", "COA indipendente scaricabile"]
      },
      {
        h: "Buone pratiche",
        p: "Data la complessità strutturale, è essenziale verificare purezza e contenuto ad ogni lotto, mantenere la catena del freddo e documentare le condizioni di ricostituzione.",
        list: ["Conservazione refrigerata", "Solventi e pH appropriati", "Tracciabilità del numero di task Janoshik"]
      },
      {
        h: "Nota importante",
        p: "Questi composti sono destinati esclusivamente alla ricerca di laboratorio. Non sono farmaci né integratori e non sono destinati al consumo umano."
      }
    ]
  },
  cognitivo: {
    slug: "cognitivo",
    title: "Supporto Cognitivo",
    label: "Protocollo",
    nav: "Cognitivo",
    image: "https://res.cloudinary.com/dvv175bck/image/upload/v1790512558/4_ztwgc3.png",
    short: "Formulazioni mirate per supportare concentrazione, lucidità e prestazioni mentali.",
    intro: "I peptidi cognitivi sono studi di laboratorio su attenzione, memoria di lavoro e modulazione dello stress. Selank e Semax sono tra i più documentati in questo ambito.",
    blocks: [
      {
        h: "A cosa serve",
        p: "Questa area esplora analoghi di peptidi endogeni coinvolti nella neuroplasticità, nella regolazione dell'ansia e nel supporto alle funzioni esecutive in modelli sperimentali.",
        list: ["Studi su memoria e apprendimento", "Modulazione dello stress sperimentale", "Ricerca su focus e chiarezza mentale"]
      },
      {
        h: "Selank",
        p: "Analogo della tuftsina. Il lotto #219444 mostra 10,77 mg e purezza 99,918% — uno dei profili più elevati del catalogo.",
        list: ["Sequenza heptapeptidica", "Focus su equilibrio e concentrazione", "COA Janoshik verificabile"]
      },
      {
        h: "Semax",
        p: "Derivato dall'ACTH(4-10). Il lotto #172193 riporta 10,70 mg e purezza 99,286%, con chiave di verifica pubblica sul sito Janoshik.",
        list: ["Supporto cognitivo in letteratura russa e internazionale", "Fiala da 10 mg", "Analisi del 24 giugno 2026"]
      },
      {
        h: "Come usarli in ricerca",
        p: "Entrambi sono tipicamente valutati in modelli in vitro o preclinici. Conservare liofilizzati al riparo da umidità e verificare sempre il COA prima dell'uso sperimentale."
      }
    ]
  }
};

const CATEGORIES_CARDS = Object.values(PROTOCOLS).map(p => ({
  title: p.title,
  description: p.short,
  slug: p.slug,
  image: p.image
}));

const POLICY_ORDER = ["privacy", "cookie", "termini", "spedizioni", "resi", "disclaimer"];
const POLICIES = {
  privacy: {
    title: "Privacy Policy", nav: "Privacy", label: "Protezione dei dati",
    intro: "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali, nel rispetto del Regolamento UE 2016/679 (GDPR).",
    sections: [
      { h: "Titolare del trattamento", p: [`Il titolare del trattamento dei dati è PeptidesValtellina. Per qualsiasi richiesta relativa alla privacy puoi scriverci a ${CONTACT_EMAIL}.`] },
      { h: "Dati che raccogliamo", list: ["Dati di contatto: nome, cognome, indirizzo email, numero di telefono.", "Dati di consegna: indirizzo di spedizione e informazioni utili alla consegna.", "Dati relativi agli ordini: prodotti richiesti, importi e storico delle comunicazioni.", "Dati tecnici: indirizzo IP, tipo di browser e dati di navigazione anonimi."] },
      { h: "Finalità del trattamento", list: ["Gestire richieste, ordini e consegne.", "Rispondere alle tue domande e fornire assistenza.", "Inviare la newsletter, solo se hai dato il tuo consenso.", "Adempiere agli obblighi di legge, contabili e fiscali."] },
      { h: "Base giuridica", p: ["Trattiamo i dati per l'esecuzione di un contratto o di misure precontrattuali, per adempiere a obblighi di legge, sulla base del tuo consenso (ad esempio per la newsletter) e sul nostro legittimo interesse a garantire la sicurezza del sito."] },
      { h: "Conservazione dei dati", p: ["I dati vengono conservati per il tempo strettamente necessario alle finalità indicate e, per i dati fiscali, per il periodo previsto dalla legge (10 anni). I dati della newsletter vengono conservati fino alla revoca del consenso."] },
      { h: "Condivisione con terzi", p: ["Non vendiamo né cediamo i tuoi dati. Possono essere comunicati solo a fornitori strettamente necessari al servizio (ad esempio corrieri, servizi di pagamento, hosting), nominati responsabili del trattamento."] },
      { h: "I tuoi diritti", p: ["In qualsiasi momento puoi esercitare i diritti previsti dagli articoli 15-22 del GDPR:"], list: ["accesso, rettifica e cancellazione dei dati;", "limitazione e opposizione al trattamento;", "portabilità dei dati;", "revoca del consenso in qualsiasi momento;", "reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it)."] }
    ]
  },
  cookie: {
    title: "Cookie Policy", nav: "Cookie", label: "Tecnologie di tracciamento",
    intro: "Informazioni sui cookie e sulle tecnologie simili utilizzate da questo sito.",
    sections: [
      { h: "Cosa sono i cookie", p: ["I cookie sono piccoli file di testo che i siti visitati salvano sul tuo dispositivo, per poi essere riletti alle visite successive."] },
      { h: "Cookie tecnici", p: ["Utilizziamo esclusivamente cookie tecnici e strumenti necessari al corretto funzionamento del sito, ad esempio per il caricamento dei caratteri e delle immagini. Questi cookie non richiedono il tuo consenso."] },
      { h: "Servizi di terze parti", list: ["Google Fonts, per la visualizzazione dei caratteri tipografici.", "Cloudinary, per l'hosting e la distribuzione delle immagini dei prodotti."] },
      { h: "Cookie di profilazione", p: ["Il sito non utilizza cookie di profilazione né cookie pubblicitari. Se in futuro verranno introdotti, ti verrà chiesto un consenso esplicito tramite un apposito banner."] },
      { h: "Come gestire i cookie", p: ["Puoi bloccare o cancellare i cookie in qualsiasi momento dalle impostazioni del tuo browser. La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito."] }
    ]
  },
  termini: {
    title: "Termini e Condizioni", nav: "Termini e condizioni", label: "Condizioni di vendita",
    intro: "Le condizioni che regolano l'utilizzo del sito e l'acquisto dei nostri composti di ricerca.",
    sections: [
      { h: "Oggetto", p: ["I presenti termini disciplinano l'utilizzo del sito PeptidesValtellina e la vendita dei composti presenti nel catalogo. Effettuando un ordine accetti integralmente queste condizioni."] },
      { h: "Uso esclusivo per ricerca", p: ["Tutti i prodotti sono venduti esclusivamente a scopo di ricerca scientifica e di laboratorio. Non sono farmaci, integratori alimentari o cosmetici e non sono destinati al consumo umano o animale."] },
      { h: "Requisiti dell'acquirente", list: ["Avere almeno 18 anni.", "Utilizzare i prodotti solo in contesti di ricerca idonei.", "Fornire dati veritieri e completi al momento dell'ordine."] },
      { h: "Prezzi e pagamenti", p: ["Tutti i prezzi sono espressi in euro (€) e includono l'IVA, se dovuta. Ci riserviamo il diritto di modificare prezzi e disponibilità in qualsiasi momento; resta valido il prezzo indicato al momento della conferma dell'ordine."] },
      { h: "Disponibilità", p: ["I prodotti contrassegnati come «Esaurito · In riassortimento» non possono essere ordinati. Puoi contattarci per sapere quando torneranno disponibili."] },
      { h: "Responsabilità", p: ["PeptidesValtellina non è responsabile per un utilizzo improprio dei prodotti o non conforme alle presenti condizioni. L'acquirente si assume ogni responsabilità relativa alla manipolazione, conservazione e utilizzo dei composti."] },
      { h: "Legge applicabile", p: ["I presenti termini sono regolati dalla legge italiana. Per i consumatori resta ferma la competenza del foro di residenza previsto dal Codice del Consumo (D.Lgs. 206/2005)."] }
    ]
  },
  spedizioni: {
    title: "Spedizioni e Consegne", nav: "Spedizioni", label: "Logistica",
    intro: "Tempi, modalità e cura con cui prepariamo e consegniamo ogni ordine.",
    sections: [
      { h: "Area di consegna", p: ["Consegniamo principalmente in tutta la provincia di Sondrio (Valtellina e Valchiavenna). Per consegne al di fuori della provincia contattaci prima di effettuare l'ordine."] },
      { h: "Tempi di preparazione", p: ["Gli ordini vengono preparati di norma entro 1-2 giorni lavorativi dalla conferma. Riceverai una comunicazione quando l'ordine sarà pronto per la consegna."] },
      { h: "Imballaggio", list: ["Imballaggio neutro e discreto, senza riferimenti al contenuto.", "Peptidi liofilizzati sigillati per garantire stabilità durante il trasporto.", "Catena del freddo mantenuta quando richiesto dal composto."] },
      { h: "Costi di consegna", p: ["Gli eventuali costi di consegna vengono comunicati prima della conferma dell'ordine."] },
      { h: "Problemi con la consegna", p: [`Se il pacco arriva danneggiato o incompleto, scrivici entro 48 ore dalla ricezione a ${CONTACT_EMAIL} allegando alcune foto: troveremo insieme la soluzione migliore.`] }
    ]
  },
  resi: {
    title: "Resi e Rimborsi", nav: "Resi e rimborsi", label: "Assistenza post-vendita",
    intro: "Cosa fare se qualcosa non va con il tuo ordine.",
    sections: [
      { h: "Diritto di recesso", p: ["Se sei un consumatore puoi recedere dall'acquisto entro 14 giorni dalla consegna, senza indicarne il motivo, purché il prodotto sia integro, sigillato e nella confezione originale."] },
      { h: "Esclusioni", p: ["Per ragioni igieniche e di sicurezza, il diritto di recesso è escluso per i prodotti sigillati che sono stati aperti dopo la consegna (art. 59, lett. e, Codice del Consumo)."] },
      { h: "Prodotti danneggiati o errati", p: ["Se ricevi un prodotto danneggiato, difettoso o diverso da quello ordinato, provvederemo alla sostituzione o al rimborso completo, senza costi aggiuntivi per te."] },
      { h: "Come richiedere un reso", list: [`Scrivi a ${CONTACT_EMAIL} indicando numero d'ordine e motivo della richiesta.`, "Ti invieremo le istruzioni per la restituzione.", "Una volta ricevuto e verificato il prodotto, confermeremo il reso."] },
      { h: "Tempi di rimborso", p: ["Il rimborso viene effettuato entro 14 giorni dalla ricezione del reso, con lo stesso metodo di pagamento utilizzato per l'acquisto."] }
    ]
  },
  disclaimer: {
    title: "Disclaimer", nav: "Disclaimer", label: "Avvertenze",
    intro: "Informazioni importanti sull'utilizzo dei composti presenti nel catalogo.",
    sections: [
      { h: "Solo a scopo di ricerca", p: ["Tutti i prodotti venduti da PeptidesValtellina sono destinati esclusivamente alla ricerca scientifica in vitro e in laboratorio. Non sono destinati al consumo umano o animale."] },
      { h: "Non sono farmaci", p: ["I nostri composti non sono farmaci, integratori o cosmetici e non sono stati approvati da alcuna autorità sanitaria per diagnosticare, trattare, curare o prevenire malattie."] },
      { h: "Informazioni sul sito", p: ["Le descrizioni presenti sul sito hanno finalità esclusivamente informative e si riferiscono alla letteratura scientifica disponibile. Non costituiscono in alcun modo un consiglio medico."] },
      { h: "Responsabilità dell'acquirente", p: ["Acquistando i nostri prodotti dichiari di avere almeno 18 anni e di essere qualificato per la manipolazione di composti di ricerca, assumendoti ogni responsabilità relativa al loro utilizzo."] }
    ]
  }
};
