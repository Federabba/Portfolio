# Portfolio Federica Rabbaglietti — stato progetto e convenzioni

## Setup
Sito statico 3 file allo stesso livello: index.html, style.css, script.js (no sottocartelle,
immagini/PDF/video come file singoli accanto). Hosting: GitHub → Vercel (deploy automatico).
Per aggiornare: sostituire il file su GitHub con lo stesso nome → conferma overwrite → Vercel
ripubblica in 1-2 min.

## Struttura sito
1. Hero, 2. Qualifications, 3. Experience (timeline), 4. Portfolio (4 tab), 5. Contact

### Portfolio → 4 tab
- **Brand Case Studies**: caseStudies[] (Gymshark/Service Graphics, County Broadband, Spiran Magazine)
- **My Work**: workItems[] + myWorkCompanies{} — archivio filtrabile PER AZIENDA (non più per tipo
  soltanto). Ogni azienda ha un blurb (ruolo, periodo, testo basato sul CV) mostrato sopra le card
  quando selezionata. Aziende completate finora:
  - MPM Drive (2 PDF)
  - Spiran Ltd. (3 PDF magazine)
  - County Broadband (1 card espandibile "Christmas Campaign" — 2022+2023 raggruppati in un'unica
    case study). NUOVA FUNZIONALITÀ: le card possono avere un campo `gallery` (array di
    {file, label}) — se presente, `workCard()` in script.js renderizza una card cliccabile
    (classe `work-expandable`) che si apre a tutta larghezza (grid-column:1/-1) mostrando, in
    ordine: il PDF scaricabile e poi una griglia di immagini (le 4 email Mailchimp del 2023).
    Il PDF del case study è SOLO testo (niente immagini incorporate, che appesantivano il file):
    strategia e creatività di entrambe le campagne, SENZA cifre di budget/ROI interne. Le 4
    immagini email sono asset separati mostrati nella galleria della card, non embeddate nel PDF.
    Il blurb aziendale di County Broadband è VOLUTAMENTE generico (ruolo + responsabilità
    generali, nessun dettaglio di campagna specifica) perché altre campagne/progetti di County
    Broadband verranno caricati in futuro: OGNI CAMPAGNA VA IN UNA PROPRIA CARD A SÉ STANTE
    (con o senza gallery a seconda dei materiali), senza mai riscrivere il blurb aziendale.
    Materiali grezzi ancora disponibili per County Broadband ma non ancora usati: campaign tracker
    2023 (foglio assegnazione compiti), content master sheet 2023 completo, deck ideazione
    "Christmas Events & Ideas 2023", SM Activities PPT/PDF — utili se si vuole arricchire ulteriormente
    la card Christmas Campaign in futuro (es. aggiungendo altre immagini alla gallery).
  Aziende ANCORA DA FARE: KBM, The Artisan Food Company, La di da Sweet Treats (Service Graphics
  è coperto altrove, non serve qui).
- **Work Projects**: jobProjects[] — lista semplice PDF/video per progetto
- **Case Studies by Sector**: interviewCaseStudies[] — COMPLETI tutti e 5 i settori
  (Advertising: Service Graphics; PR/E-commerce & Fashion: Zara + Wild Cosmetics; Estates: Search
  Smartly; FMCG: La Tua Pasta; Telecoms: County Broadband), ordinati in quest'ordine esatto per
  matchare i filtri.

## Convenzioni di stile decise insieme
- Bottoni allegati (.cs-actions .btn-sm): 150x64px fissi, border-radius 32px (ovale/stadium),
  testo centrato che va su due righe naturalmente, icona SVG 24px, gap 12px.
- Badge settore (.cs-index) in Case Studies by Sector: larghezza fissa 110px, centrato, va su due
  righe se il nome è lungo (es. "E-commerce & Fashion"), per non spingere il titolo troppo a destra.
- Case study per settore: niente KPI/metriche inventate — si usa "Skills demonstrated" con lista di
  competenze, non numeri finti.
- Nei testi non deve MAI comparire riferimento a "colloquio/interview/task da colloquio" — tutto
  presentato come progetti/campagne reali.
- File PDF/video rinominati in modo pulito e descrittivo (es. mpm-meetup-speedup-brochure.pdf,
  spiran-magazine-vol1.pdf), mai con nomi originali di upload.

## Prossimi passi
1. Continuare "My Work" azienda per azienda: KBM → Artisan Food → La di da
   (stessa formula: leggere CV per il blurb ruolo + chiedere/leggere i PDF/materiali reali dei
   progetti da inserire).
2. Eventualmente comprimere i 3 PDF di Spiran Magazine (37-43MB l'uno, un po' pesanti).
3. Tenere sempre lo stesso stile per badge/bottoni quando si aggiungono nuove card.
4. Valutare se aggiungere i 2 screenshot Mailchimp (email Natale County Broadband) come
   immagine nella card "My Work" — al momento il sito supporta solo card PDF/video, non immagine.

## Come riprendere in una nuova chat
Incolla questo file + carica lo zip più recente scaricato da GitHub (index.html, style.css,
script.js + assets), poi dimmi da quale azienda vuoi ripartire.
