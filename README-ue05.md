# Übung 5 – Die persönliche Portfolio-Website: Grid und Flexbox
WEF1UE Web Fundamentals | 26.11.2025 | Wolfgang Hochleitner | Code-along/freies Arbeiten

Sie haben in der Vorlesung das CSS Grid Layout bzw. Bootstrap und das CSS Flexible Boxes Layout kennengelernt. Verwenden Sie beides, um Ihrer Seite mehr Struktur zu verleihen bzw. Dinge einfacher anzuordnen.

## Layout am Raster

In der letzten Übung haben Sie einen oder mehrere Container in Ihre Seite integriert, um den Inhaltsbereich in der Breite zu begrenzen. Diese Container sind ideal, um mit dem Grid Layout Modul zu experimentieren. Statten Sie alle Ihre Container mit einem Raster aus. Dieser ist – was die Spalten betrifft – sinnvollerweise in allen Abschnitten gleich, um ein konsistentes Erscheinungsbild zu gewährleisten. Sie können aber natürlich auch verschiedene Raster für unterschiedliche Bereiche anlegen, weil etwa der Start- oder Header-Bereich anders angeordnet wird, als Fließtext oder eine Bildergalerie (in der Regel ist dies aber bei einem einigermaßen feinmaschigen Raster gar nicht nötig).

### Responsive Grid

Achten Sie darauf, dass ihr Raster responsive gut funktioniert. Reduzieren Sie etwa bei kleineren Auflösungen entsprechend die Anzahl der Spalten oder verteilen Sie alternativ Elemente über mehrere Spalten. Denken Sie beim Erstellen des Grids daran, dass mobil andere Anforderungen schlagend werden können. Falls Sie etwa Bilder in drei Spalten anordnen, ist es unter Umständen sinnvoller, sechs Spalten zu definieren und ein Bild zunächst über zwei Spalten erstrecken zu lassen. Bei kleineren Auflösungen werden dann nur noch zwei Bilder nebeneinander angezeigt, indem diese sich über jeweils drei Spalten erstrecken und schließlich hat nur noch ein Bild pro Zeile Platz und nimmt alle sechs Spalten ein.

Das Tutorial [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) hat alle Eigenschaften des Grid Layouts übersichtlich mit Abbildungen dargestellt. In diesem Artikel ist auch ein Trick für eine flexible Spaltenanzahl (mit `autofit` und `minmax`) angeführt, der auch seinen eigenen Artikel hat: https://css-tricks.com/books/greatest-css-tricks/flexible-grids/. Damit können Sie Grids flexibel gestalten, ohne sie in Media Queries neu definieren zu müssen.

### Alternative: Bootstrap

Anstatt das CSS Grid Layout zu verwenden, können Sie auch das Grid-System von [Bootstrap](https://getbootstrap.com/) verwenden. Denken Sie auch hier daran, dass das Grid responsive sein soll, d.h. setzen Sie die entsprechenden Container-Breakpoint-Klassen und Breakpoints für die Spalten.

## Anordnen mit flexiblen Boxen

Das CSS Flexible Boxes Layout ist keine Konkurrenz zum Grid Layout (oder Bootstrap), sondern eine sinnvolle Ergänzung. Während im Grid das Layout der Seite festgelegt wird, können mit flexiblen Boxen Elemente darin einfach angeordnet werden.

Verwenden Sie die Eigenschaften des Flexible Box Layout Moduls, Elemente auf Ihrer auszurichten. Sehr gut geeignet sind Dinge, die aktuell  (aus Übung 4) mithilfe von Floats, `position`- oder `display: inline`-Anweisungen positioniert sind.

Eine Möglichkeit dafür kann eine horizontal angeordnete Navigation sein. Entfernen Sie zunächst die bestehenden Positionierungsanweisungen und geben Sie dann dem umgebenden Element (z.B. `<ul>`) die Eigenschaft `display: flex`. Mit `flex-direction` können Sie dann die Richtung bestimmen, in der die Elemente angeordnet sind, mit Eigenschaften wie `justify-content` oder auch `gap` können Sie die Verteilung von Leerräumen kontrollieren. Mithilfe der `flex`-Eigenschaft bei den `<li>`-Elementen können Sie deren grundsätzliche Breite definieren (wenn sie etwa jedes Navigationselement gleich breit gestalten wollen).

Ebenso können Sie auch ihr Formular mittels Flexible Boxes ausrichten. Beachten Sie hierbei, dass das `<fieldset>`-Element (falls in Verwendung) nicht als Flex-Container geeignet ist. Hier ist es besser, alle `<label>`- und `<input>`-Elemente mit einem eigenen Element (z.B. `<div>`) zu umgeben und dort die Eigenschaft `display: flex` zu setzen.

Auch zur vertikalen und horizontalen Zentrierung von Elementen (z.B. Titel der Seite) ist Flexbox perfekt geeignet.

Greifen Sie bei der Arbeit mit flexiblen Boxen auf das Tutorial [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) zurück. Es enthält alle wichtigen Informationen anhand von konkreten Beispielen.

## Tipps und Richtlinien

- Das HTML-Markup muss nach dem aktuellen HTML-Standard validieren. Das Kriterium ist alleinig der [W3C Markup Validator](https://validator.w3.org/). Validieren Sie Ihre Seite regelmäßig und korrigieren Sie Fehler entsprechend.
- CSS muss nach dem aktuellen CSS-Standard validieren. Das Kriterium ist der [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- Denken Sie beim Schreiben bzw. Abändern ihrer CSS-Stile etwas an die in der Vorlesung vorgestellten CSS-Methodiken – vielleicht lassen sich einige Dinge ja strukturierter damit definieren. Das im eLearning-Kurs verlinkte Beispiel vom Lehrveranstaltungsleiter hat die CSS-Stile für Übung 5 so aufgebaut.
- Falls sie viele wiederkehrende Angaben (z.B. Farbdefinitionen) haben, bietet sich an, dies über die erwähnten [CSS Custom Properties (Variablen)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) zu lösen.
- [MDN](https://developer.mozilla.org/en-US/) als Referenz für HTML-Tags und Attribute sowie für CSS verwenden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.

