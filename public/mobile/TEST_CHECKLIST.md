# Mobile MVP Test-Checkliste

## 📱 Grundlegende Funktionalität

### Header & Navigation
- [ ] Logo wird korrekt angezeigt
- [ ] Hamburger-Menü-Button ist sichtbar und klickbar (min. 44px Touch-Target)
- [ ] Beim Klick auf Hamburger öffnet/schließt sich das Menü
- [ ] Hamburger-Icon animiert sich beim Öffnen/Schließen (3 Linien → X)
- [ ] Menü-Links sind klickbar und führen zu den richtigen Abschnitten
- [ ] Menü schließt sich automatisch nach Klick auf einen Link
- [ ] Menü schließt sich beim Klick außerhalb des Menüs

### Hero Section
- [ ] Titel ist gut lesbar (32px+ auf Mobile)
- [ ] Subtitle ist gut lesbar (18px+)
- [ ] CTA-Button ist mindestens 56px hoch (thumb-friendly)
- [ ] CTA-Button ist gut klickbar
- [ ] CTA-Button führt zu Kontakt-Abschnitt (Smooth Scroll)

### Features Section
- [ ] Alle 3 Feature-Cards werden angezeigt
- [ ] Icons sind sichtbar
- [ ] Text ist gut lesbar
- [ ] Cards haben ausreichend Abstand (32px+)
- [ ] Cards sind vertikal gestapelt (Single-Column)

### Testimonial Section
- [ ] Testimonial-Card wird angezeigt
- [ ] Text ist gut lesbar
- [ ] Styling ist konsistent

### Footer
- [ ] Kontakt-Informationen sind sichtbar
- [ ] Footer-Links sind klickbar
- [ ] Copyright-Text ist vorhanden
- [ ] Footer hat dunklen Hintergrund mit hellem Text

## 📐 Responsive Design

### Mobile (320px - 479px)
- [ ] Layout ist Single-Column
- [ ] Padding ist 16-24px
- [ ] Text ist gut lesbar (min. 16px)
- [ ] Keine horizontalen Scrollbars
- [ ] Alle Elemente sind vollständig sichtbar

### Mobile Large (480px - 767px)
- [ ] Layout bleibt Single-Column
- [ ] Typografie skaliert angemessen
- [ ] Abstände sind proportional

### Tablet (768px)
- [ ] Layout bleibt Single-Column
- [ ] Größere Padding-Werte (32px)
- [ ] Typografie ist größer aber noch lesbar

## 🎨 Design & Styling

- [ ] Farben haben ausreichend Kontrast (WCAG AA)
- [ ] Buttons haben Hover/Focus-States
- [ ] Links haben Hover/Focus-States
- [ ] Focus-States sind sichtbar (Accessibility)
- [ ] Keine horizontalen Scrollbars
- [ ] Bilder sind responsive (max-width: 100%)

## ⚡ Performance & Interaktion

- [ ] Smooth Scroll funktioniert zu allen Abschnitten
- [ ] Menü öffnet/schließt ohne Verzögerung
- [ ] Keine sichtbaren Layout-Shifts beim Laden
- [ ] Seite lädt schnell (keine schweren Libraries)

## 🔍 Cross-Browser Testing

### Mobile Browser
- [ ] Safari (iOS)
- [ ] Chrome (Android)
- [ ] Firefox Mobile

### Desktop Browser (für Entwicklung)
- [ ] Chrome (DevTools Mobile View)
- [ ] Firefox (Responsive Design Mode)
- [ ] Safari (Responsive Design Mode)

## 📏 Viewport-Tests

Teste die Seite in folgenden Viewport-Größen:
- [ ] 320px (kleinste Mobile)
- [ ] 375px (iPhone Standard)
- [ ] 414px (iPhone Plus)
- [ ] 480px (Mobile Large)
- [ ] 768px (Tablet)

## ♿ Accessibility

- [ ] Alle Buttons haben aria-labels
- [ ] Focus-States sind sichtbar
- [ ] Kontrast-Verhältnisse erfüllen WCAG AA
- [ ] Navigation ist per Tastatur möglich
- [ ] Smooth Scroll funktioniert auch ohne JavaScript

## 🐛 Bekannte Probleme / Notizen

_Hier können während des Testens Probleme notiert werden_

---

## ✅ Quick Test (5 Minuten)

1. Öffne `/mobile/index.html` im Browser
2. Teste Hamburger-Menü (öffnen/schließen)
3. Klicke auf alle Navigation-Links
4. Prüfe, ob Smooth Scroll funktioniert
5. Teste CTA-Button
6. Scrolle durch alle Abschnitte
7. Prüfe auf horizontale Scrollbars
8. Teste auf verschiedenen Viewport-Größen (DevTools)

---

**Hinweis:** Diese Seite ist vollständig unabhängig vom Hauptprojekt und kann isoliert getestet werden.

