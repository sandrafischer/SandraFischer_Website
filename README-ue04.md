# Übung 4 – Die persönliche Portfolio-Website: Positionierung und Responsive Design
WEF1UE Web Fundamentals | 17.11.2025 | Wolfgang Hochleitner | Code-along/freies Arbeiten

Setzen Sie Ihre Seite der letzten Übungen fort, ordnen Sie Elemente an und definieren Sie auch eine einfache, responsive Variante Ihrer Seite.

## Abstände und Positionierung

In der Vorlesung wurde das Box-Modell erläutert, Sie kennen nun die Möglichkeiten, Breite, Höhe, sowie diverse Abstände und Rahmen zu definieren. Nützen Sie dieses Wissen, um Abstände entsprechend ihres Figma-Prototyps zu definieren.

- Die Breite und/oder Höhe von Elementen können mittels `width` und `height` definiert werden.
- Innen- sowie Außenabstand eines Elements können mittels `padding` und `margin` definiert werden.
- Rahmenlinien werden mittels `border`-Angabe definiert.

Weiters haben Sie in der Vorlesung Möglichkeiten zur Positionierung von Objekten mittels `position`- und `float`-Angaben kennengelernt. Nützen Sie diese, um Objekte z.B. nebeneinander anzuordnen oder um eine Navigation fix an einer Stelle zu positionieren.

## Erste Layout-Maßnahmen

Bis jetzt hat Ihre Seite mangels Angaben die volle Breite ausgenützt. Definieren Sie nun für die Inhalte einen Container, dessen (maximale) Breite Sie steuern können. Auf diese Art und Weise können Sie die maximale Breite von Inhalten kontrollieren, damit sich diese z.B. bei ultraweiten Displays sich nicht völlig weit auseinanderbewegen. Sie haben dabei zwei Möglichkeiten:

- ein Container, der über allen Strukturelementen liegt, formatiert mittels ID-Selektor (da einzigartig),
- ein Container pro Strukturelement formatiert mittels Klassenselektor (da er sich mehrmals wiederholt).

Das Markup für Variante 1 könnte etwa so aussehen:

```html
<body>
  <div id="container">
    <header>...</header>
    <main>
      <section>...</section>
      <section>...</section>
      <section>...</section>
    </main>
    <footer>...</footer>
  </div>
</body>
```

Variante 2 so:

```html
<body>
  <header>
    <div class="container">...</div>
  </header>
  <main>
    <section>
      <div class="container">...</div>
    </section>
    <section>
      <div class="container">...</div>
    </section>
    <section>
      <div class="container">...</div>
    </section>
  </main>
  <footer>
    <div class="container">...</div>
  </footer>
</body>
```

Wählen Sie den Ansatz, der für Ihre Seite besser geeignet ist, beides ist möglich, auch Abwandlungen davon. Option zwei erzeugt komplexeres Markup, ist aber dann sinnvoller, wenn in den Strukturelementen etwa Hintergrundbilder liegen sollen, die nach wie vor die gesamte Breite ausfüllen sollen, denn die Strukturelemente (`<header`, `<main>`, `<section>` und `<footer>`) haben immer noch die volle Viewport-Breite, lediglich der Inhalt wird durch den Container begrenzt. Bei Variante 1 sind diese Elemente immer so breit wie der Container, nur `<body>` hat dort noch die volle Breite.

Ordnen Sie innerhalb des Containers/der Container Ihren Inhalt (nach der Vorgabe des Design-Prototyps) an, so gut es geht. In der nächsten Übung wird die Platzierung von Objekten noch an einem Raster (mithilfe des CSS Grid Layout oder dem Framework Bootstrap) ausgerichtet oder mithilfe von Flexbox angeordnet, dieses Mal können die oben erwähnten Positionierungsarten verwendet werden.

## Responsive Design

Stellen Sie sicher, dass Ihr Layout auf verschiedenen Ausgabegeräten funktioniert, in dem Sie es mittels Media Queries entsprechend anpassen.

Überlegen Sie sich, ob Sie nach dem Desktop first oder Mobile first Prinzip vorgehen wollen – beides ist in Ordnung, Desktop first aber vermutlich zunächst einfacher. Definieren Sie dann mindestens einen Breakpoint (bei einer bestimmten Viewport-Größe), an dem das Layout angepasst wird. Wie diese Anpassung ausfällt, bleibt Ihnen überlassen. Folgende Überlegungen können hilfreich sein:

- **Absolute Einheiten**: Absolute Größenangaben, z.B. `width` in der Einheit Pixel (`px`) sind für responsive Seiten meist problematisch. Verwenden Sie stattdessen relative Einheiten (`rem`, `em`, oder auch `%`).
- **Navigation**: Bei kleinen Viewport-Breiten kann eine horizontale Navigation vertikal angeordnet werden (oder unter einem Hamburger Menü ☰ versteckt werden, wobei dieses in der Regel JavaScript benötigt).
- **Schriftgrößen**: Müssen bei Überschriften und großem Text möglicherweise verkleinert werden. Manuelle Zeilenumbrüche passen eventuell auch nicht mehr. Hier bietet sich die [`clamp()`](https://developer.mozilla.org/de/docs/Web/CSS/clamp)-Funktion an, mit der ein Bereich definiert werden kann, innerhalb dessen die Schriftgröße automatisch angepasst wird.
- **Bilder**: Nebeneinander angeordnete Bilder können untereinander angeordnet werden. Eine fix in Pixel angegebene Größe muss u.U. abhängig von der Viewport-Breite gestaltet werden (Prozentangaben oder mit `vw`-Einheiten).
- **Hintergrundbilder**: Passen sich in der Regel mithilfe der Eigenschaft `background-size: cover` automatisch an. Sehr große Bilder können ggf. durch kleinere Varianten ersetzt werden.

Vergessen Sie nicht, eine Meta-Angabe für den Viewport zu setzen, damit Ihre Media Queries auch greifen. Sie können diese hier kopieren:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Tipps und Richtlinien

- Das HTML-Markup muss nach dem aktuellen HTML-Standard validieren. Das Kriterium ist alleinig der [W3C Markup Validator](https://validator.w3.org/). Validieren Sie Ihre Seite regelmäßig und korrigieren Sie Fehler entsprechend.
- CSS muss nach dem aktuellen CSS-Standard validieren. Das Kriterium ist der [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- Die DevTools aller gängigen Browser haben einen Modus, mit dem mobile Geräte simuliert werden können.
  - Chrome/Edge/Opera: Das zweite Icon links oben in den DevTools startet bzw. beendet die "Device toolbar".
  - Firefox: Das zweite Icon rechts oben in den Web Developer Tools startet bzw. beendet den "Responsive Design Mode".
  - Safari: Nachdem in den Einstellungen unter "Advanced" das "Develop menu" aktiviert wurde, kann dort der "Responsive Design Mode" gestartet werden.
- [MDN](https://developer.mozilla.org/en-US/) als Referenz für HTML-Tags und Attribute sowie für CSS verwenden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.
