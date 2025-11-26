## Ziel
Additiver Mobile-MVP ohne bestehende Desktop-Erfahrung zu verändern. Alle Anpassungen erfolgen über ein neues `mobile.css`, optionale JS-Guards und kleine strukturierte Erweiterungen.

## Vorgehen nach Steps

### Step A – `mobile.css`
- Globale Utility-Overrides (Container, Section-Spacing, Typografie-Scale) für <=768 px, damit Layouts nicht brechen.
- Bild-/Video-Elemente (`img`, `video`, `.media-wrapper`) auf `max-width: 100%` + `height: auto`, um horizontales Scrollen zu verhindern.
- Grid/Flex-Container (z.B. `.grid-cols-3`, komplexe Sticky-Layouts) auf 1-Spalten- bzw. 2-Spalten-Stack umschalten.
- Buttons/Links mit reduzierten Abständen, damit sie tappbar bleiben, aber nicht übermäßig Platz benötigen.

### Step B – Animationsvereinfachung
- In `FocusRolesSection`, `HowItWorks`, `IconProgress` Framer-Motion-/Scroll-Animationen bei `window.innerWidth < 768` deaktivieren oder in einfachere Fade-Ins umrouten.
- Falls weitere Komponenten GSAP/Locomotive nutzen (aktuell nicht gesehen), Hooks mit Guard umschließen.

### Step C – Layout-Komponenten
- `Header`: bestehende Desktop-Nav behalten, aber mobile Flex-Stack + Burger-Overlay hinzufügen.
- `Hero`, `HowItWorks`, `ResultsSection`, `AboutUsSection`, `CompetitiveAdvantageSection`, `Footer`: große Gaps/Paddings reduzieren, Texte linksbündig oder zentriert mit angepasster Typografie.
- Karten-/Grid-Komponenten (`FocusRolesSection`, `HowItWorks` Bullets, LogoStrip) auf vertikale Sequenz bringen, Sticky-Elemente lösen falls nötig (nur per CSS im Mobile-Breakpoint).

### Step D – Mobile Navigation
- Hamburger-Button, der ein Overlay/Drawer mit vorhandenen Links öffnet. Zustand rein clientseitig, keine Desktop-Änderung (Button nur auf <768 sichtbar via CSS + minimaler React-State).

### Step E – Test/QA
- Manuelle Checkliste bereitstellen (Navigation, Sektion-Stacking, Media-Scaling, Animation-Offload).

## Warum diese Änderungen
- Aktuell setzen mehrere Sektionen auf 3-Spalten-Grids, Sticky-Sektionen und großflächige Paddings, die auf Mobile unlesbar werden.
- Animations-Frameworks verursachen auf schwächeren Geräten Ruckler → Guard verhindert unnötige Berechnungen.
- Konsistente Mobile-Navigation fehlt, wodurch User keine Sektionen erreichen können.
- Additive CSS-Datei hält Desktop-Styling unverändert und erleichtert Revertbarkeit.

