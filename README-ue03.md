# Übung 3 – Die persönliche Portfolio-Website: Erste CSS-Stile
WEF1UE Web Fundamentals | 12.11.2025 | Wolfgang Hochleitner | Code-along/freies Arbeiten

Mit dem Wissen über die Einbindung und Funktionsweise von Cascading Style Sheets können nun bereits die ersten Formatierungen im eigenen Prototypen angewandt werden. Dies betrifft vor allem Schriften und Hintergründe, aber auch schon textuelle Anordnungen. Formatierungen bezüglich der Größe folgen in Übung 3, die einzelnen Elemente der Seite haben also noch die Größen, die der Browser ihnen zuweist.

Auch die Organisation von Stylesheets soll gleich mitgedacht werden, um Spaghetti-Code in einem einzigen Stylesheet zu vermeiden.

## Stylesheets organisieren

Um die Styles, die ihre Webseite formatieren, besser verwalten zu können, soll es ein Master-Style-File geben, welches wiederum eine Reihe einzelner Style-Dateien mittels `@import` einbindet.

Legen Sie also zunächst eine Hauptdatei für ihre Styles in einem eigenen Unterordner `css` an (übliche Namen sind etwa `main.css`, `styles.css`, `default.css` etc.). Dann überlegen Sie sich, wie Sie das Styling Ihrer Seite logisch gut gliedern können. So könnte es etwa ein Stylesheet für Schriftformatierung (z.B. `type.css`), ein Stylesheet, das Bilder formatiert (z.B. `images.css`) oder in weiterer Folge (ab der nächsten Übung) auch ein Stylesheet für das Layout (z.B. `layout.css`) geben. Das ist jedoch nur ein Vorschlag, sie können die Gliederung auch anders vornehmen.

In diese einzelnen Dateien schreiben Sie im Anschluss die jeweiligen Regeln, die Ihre Seite formatieren. Die einzelnen Teil-Stylesheets binden Sie mittels `@import`-Anweisungen in Ihrer Hauptdatei ein, diese wird dann im HTML-Dokument im `<link>`-Element geladen. Wenn sie später neue Teil-Stylesheets hinzufügen (oder entfernen) wollen, so müssen Sie am HTML-Dokument nichts mehr ändern. Die Änderung geschieht allein in der zentralen CSS-Datei.

## Styles anwenden

Formatieren Sie nun die Inhalte ihres bestehenden HTML-Grundgerüsts aus Übung 2 so, dass Sie möglichst gut dem aktuellen Status ihres Design-Prototyps entsprechen. Die Formatierungen werden dabei unterschiedlich angewandt:

### Für das gesamte Dokument

Für das `<body>`-Element werden Formatierungen gesetzt, die zunächst für die ganze Seite gelten sollen und ggf. für einzelne Elemente wieder überschrieben werden.

- **Schriftart**: Wählen Sie eine Standardschriftart für die gesamte Seite. Diese Schrift wird den Fließtext darstellen, für die Überschriften soll in weiterer Folge eine separate Schrift gewählt werden. Um nicht auf die im System installierten Schriften begrenzt zu sein, gibt es mehrere Möglichkeiten:
  - Binden Sie eine Web-Schriftart über [Google Fonts](https://fonts.google.com/) ein. Arbeiten Sie sich dazu selbst in die Funktionsweise dieser Plattform ein und beachten Sie, dass Sie dazu online sein müssen, damit die Web Font auch angezeigt werden kann, da ein Stylesheet eingebunden wird, das bei Google gehostet wird. Binden Sie die CSS-Datei mit den Schriftinformationen mittels `@import`-Deklaration ein (z.B. in die CSS-Datei zur Schriftformatierung oder auch in die Hauptdatei). Verwenden Sie dann die Schriftart ganz normal in der entsprechenden CSS-Regel, setzen Sie jedoch auch mindestens eine Ersatzschriftart aus den klassischen, im System installierten und eine der in der Vorlesung gezeigten Fallback-Schriften, die immer verfügbar sind.
  - Verwenden Sie einen Font-Stack: Font-Stacks sind bewährte Gruppen an Fonts, die nur mit den verschiedenen System-Schriften auskommen. Zu einer Basis-Schriftart gibt es weitere Ersatzschriftarten, die ähnlich aussehen und auch auf allen Betriebssystemen Funktionieren. Webseiten wie https://modernfontstacks.com/ oder https://www.cssfontstack.com/ bieten fertige Font-Stacks an, die man direkt übernehmen kann. Im Gegensatz zu Google Fonts sind die Ladezeiten schneller und man benötigt keine externen, eingebunden Font-Stylesheets. Möchte man allerdings eine ganz bestimmte Schriftart, so ist diese möglicherweise bei einem Font-Stack nicht verfügbar. Außerdem sehen Webseiten unter Windows und macOS meist leicht anders aus, da sich die vorinstallierten Schriften unterscheiden.

- **Schriftgröße und -farbe**: Wählen Sie die Standard-Schriftgröße und auch -farben analog zu ihrem Design-Prototyp/Wireframe. Dies betrifft vor allem den Fließtext in Absätzen, beeinflusst aber natürlich auch Überschriften, da diese mit relativen `em`-Abgaben auf diesen Formatierungen aufbauen. Die Standardgröße sind `16px`, sie wird bereits vom `<html>`-Element vererbt. Wenn sie später mit relativen `rem` Einheiten arbeiten wollen, können sie auch diesen Wert anpassen, wenn es nötig ist, ansonsten gilt: `1rem` = `16px`, `2rem` = `32px` usw.
- **Hintergrund**: Setzen Sie eine Hintergrundfarbe für Ihre Seite. Spezifizieren Sie diese durch eine Farbangabe ihrer Wahl oder definieren Sie alternativ ein Hintergrundbild. Anmerkung: diese Farbe wird momentan, sobald die einzelnen Abschnitte eingefärbt werden, überdeckt. Mithilfe von Positionierung und Breitenangaben in der kommenden Übung bekommt der Hintergrund wieder mehr Bedeutung.

### Für einzelne Elemente

Definieren Sie nun Formatierungen für einzelne Elemente, die die zuvor definierten Grundformate überschreiben. Sie können dies mit jeder Art von Selektor erreichen (Element-/Typselektoren, Klassenselektoren, ID-Selektoren, Attributselektoren, diverse Kombinatoren etc.).

- **Überschriften**: Passen Sie Größe, Farbe, Schriftart etc. ihrer Überschriften an, sodass Sie dem Design-Prototyp entsprechen. Denken Sie daran, dass primär die logische Struktur wichtig ist, am Erscheinungsbild können Sie mit CSS so ziemlich alles verändern.
- **Abschnitte**: Heben Sie die einzelnen Abschnitte Ihrer Single-Page Webseite visuell hervor. Arbeiten Sie dazu mit wechselnden Hintergründen. Wählen Sie Bilder oder auch nur Farben. Sie können die Formatierungen über die IDs bei den `<section>`-Elementen oder auch mithilfe von Pseudoklassen (um schnell etwa jede zweite Sektion anders zu formatieren) vornehmen.
- **Navigation**: Bereiten Sie ihre Navigation bereits auf ihr endgültiges Erscheinungsbild vor. Dies betrifft heute das Aussehen der Liste. Passen Sie dazu den Style-Typ an. Entfernen Sie z.B. die Bullet-Points oder Aufzählungen, wenn diese bei Ihnen im endgültigen Erscheinungsbild nicht nötig sind. Die Anordnung der Navigation kann mit der folgenden Übung dann vorgenommen werden.
- **Links**: Erstellen Sie Verhalten für Ihre Hyperlinks mithilfe der vier Pseudoklassen `:link`, `:visited`, `:hover` und `:active`. Recherchieren Sie dazu, welchen Status eine jede der vier Pseudoklassen genau abdeckt und setzen Sie Formatierungen für alle vier davon. Hinweis: Damit auch alle funktionieren, müssen sie in der richten Reihenfolge im Stylesheet angegeben werden. Diese ist wie zuvor angegeben, als Eselsbrücke kann man sich "**L**o**V**e, **HA**te" merken.
- **CSS-Übergänge und Transformationen**: Bei interaktiven Elementen wie Links kann es gewünscht sein, diese Übergänge flüssiger bzw. in Kombination mit Transformationen (Größenänderungen etc.) zu kombinieren. Falls Sie dies einbauen möchten, werfen Sie einen Blick darauf, wie [Übergänge (Transitions)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) und [Transformationen](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) funktionieren.

## Tipps und Richtlinien

- Passen Sie ihr HTML-Markup vom letzten Mal an, wenn es für die Formatierung mit CSS notwendig oder einfacher ist. Dies betrifft etwa gruppierende Elemente wie z.B. `<div>` und natürlich Attribute wie `class` oder `id`.
- Das HTML-Markup muss weiterhin nach dem aktuellen HTML-Standard validieren. Das Kriterium ist alleinig der [W3C Markup Validator](https://validator.w3.org/). Validieren Sie Ihre Seite regelmäßig und korrigieren Sie Fehler entsprechend.
- CSS muss nach dem aktuellen CSS-Standard validieren. Das Kriterium ist der [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- [MDN](https://developer.mozilla.org/en-US/) als Referenz für HTML-Tags und Attribute sowie für CSS verwenden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.
