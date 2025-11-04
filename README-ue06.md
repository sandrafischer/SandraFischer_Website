# Übung 6 – Die persönliche Portfolio-Website: Web Accessibility
WEF1UE Web Fundamentals | 02.12.2025 | Wolfgang Hochleitner | Abgabe

Setzen Sie sich mit dem Thema barrierefreies Web auseinander, indem Sie Ihre eigene Portfolio-Webseite nach den WCAG 2.2 mithilfe der WCAG-EM Methodik evaluieren. Stellen Sie fest, ob ihre Webseite Level A der Guidelines erfüllt, oder ob Sie Anpassungen vornehmen müssen.

## Accessibility – WCAG 2.2 Level A mit WCAG-EM

Überprüfen Sie, ob Ihre Website mit dem Stand aus Übung 5 Level A der [Web Content Accessibility Guidelines 2.2 (WCAG 2.2)](https://www.w3.org/TR/WCAG22/) erfüllt. Verwenden Sie das dafür vom W3C zur Verfügung gestellte WCAG-EM Report Tool und die Quick Reference und arbeiten Sie diese durch.

### Den Report vorbereiten

1. Öffnen Sie zunächst das [WCAG-EM Report Tool](https://www.w3.org/WAI/eval/report-tool/) und lesen Sie sich die Einleitung ("About this tool") auf dieser Seite dazu durch.
2. Klicken Sie rechts auf `Start New Report` und tragen Sie auf der folgenden Seite die grundsätzlichen Daten für die Evaluierung ein (Sie können dies auf Deutsch oder Englisch tun, das Report Tool selbst ist leider nicht auf Deutsch verfügbar):
   1. **Website name:** Der Name Ihrer Seite.
   2. **Scope of the website:** Hier wird eingetragen, welche Teile einer Webseite evaluiert werden. Da Ihre Seite eine Singe-Page-Seite darstellt, genügt es hier einzutragen, dass Sie die gesamte Seite evaluieren.
   3. **WCAG Version:** WCAG 2.2.
   4. **Conformance target:** Level A.
   5. **Accessibility support baseline:** Hier werden die verwendeten Technologien aufgelistet. Tragen Sie hier den Browser ein, mit dem Sie testen. Wenn Sie einen Screenreader ausprobieren, geben Sie das hier ebenfalls an.
   6. **Additional evaluation requirements:** Beschreiben Sie hier eventuelle optionale Kriterien, dies kann auch leer gelassen werden.
3. Wählen Sie rechts unten `Next step: Explore Website` aus und tragen Sie die für Ihre Webseite zutreffenden Details ein. Die Webseite zu erkunden, wie angegeben, dürfte bei der eigenen Seite kaum mehr notwendig sein.
   1. **Web Technologies Relied Upon:** Wählen Sie hier die verwendeten Technologien aus. Auf jeden Fall HTML und CSS, falls Sie SVG-Grafiken verwenden auch SVG. Wenn JavaScript inkludiert ist, kreuzen Sie auch hier die Checkbox an.
   2. **Optional Exploration Notes – Essential functionality of the website:** Hier können Sie sich Notizen zur Funktionalität der Seite machen (z.B. "Portfolio und persönliche Informationen" oder "Ausfüllen eines Kontakt-Formulars").
   3. **Optional Exploration Notes – Variety of web page types:** Hier können Sie optional angeben, welche Typen von Unterseiten es zu evaluieren gibt. Da es nur eine Seite ist, kann dies leer gelassen oder mit einer Angabe wie "Portfolio Seite" ausgefüllt werden.
4. Wählen Sie `Next step: Select Sample` und geben Sie die Seiten an, die Sie evaluieren. Da sie nur eine Seite haben, ist dieser Prozess nicht sehr umfangreich.
   1. **Structured Sample Web Pages:** Klicken Sie `Add web page` und geben Sie beim strukturierten Sample Ihre Hauptdatei (`index.html`) an. Nachdem Sie keinen URL haben, tragen Sie ins erste Feld (Short name) den Dateinamen ein und dann eine Beschreibung (z.B. "Hauptseite").
   2. **Randomly Selected Sample:** Hier wären *zusätzlich* zum strukturierten Sample noch Dateien zufällig auszuwählen. Da Ihre Seite aber nur aus einer Webpage besteht, kann dies leer gelassen werden. Normalerweise muss das zufällige Sample aus 10 % des Gesamtsamples bestehen.
5. Klicken Sie auf `Next step: Audit Sample` und führen Sie die tatsächliche Evaluierung durch (siehe nächster Abschnitt). Tragen Sie die Ergebnisse im Report Tool entsprechend ein. Wenn Sie unter "Add results for pages" nichts auswählen, so bezieht sich der Report auf das gesamte Sample. Es läuft somit auf dasselbe hinaus.

### Die Webseite evaluieren

1. Beginnen Sie im Report Tool bei Erfolgskriterium *1.1.1 Non-text Content* und klappen Sie zunächst durch Klick auf `Show full description` die Beschreibung für dieses Kriterium aus, um es zu verstehen. Bei den Buttons `Understanding 1.1.1` und `How to meet 1.1.1` bekommen Sie noch weitere Informationen bzw. nützliche Tipps, wie sie dieses Kriterium erreichen können. Tipp: passen Sie sich die *How to Meet WCAG 2.2* Liste über den "Filter" Tab links an und wählen Sie Level A und nur HTML und CSS als Technologien. Die "Sufficient Techniques" sind in der Regel auch ausreichend.
2. Bewerten Sie nun, wie dieses Kriterium auf Ihrer Webseite erfüllt ist. Überprüfen Sie also, ob all Ihre Bilder Alternativtext enthalten. Wenn dies der Fall ist, wählen Sie unter "Outcome" `Passed` und tragen Sie unter "Observations" einen Kommentar ein. Wenn es nicht erfüllt ist, wählen Sie `Failed` und notieren Sie, wo Probleme aufgetreten sind.
3. Fahren Sie nun mit Erfolgskriterium 1.2.1 fort. Wenn Sie hier etwa weder Audio noch Video in Ihrer Seite verwenden, wählen Sie `Not present` und fügen Sie einen kurzen Kommentar ein.
4. Evaluieren Sie nun die restlichen Punkte.
5. Wählen Sie nun `Next step: Report Findings` und tragen Sie die verbleibenden Daten ein:
   1. **Evaluation commissioner:** Die Person, die die Evaluierung in Auftrag gegeben hat. Entweder Sie selbst oder der Übungsleiter.
   2. **Evaluator:** Ihr Name.
   3. **Executive summary:** Geben Sie eine kurze Zusammenfassung zur Evaluierung an.
6. Wählen Sie nun `Next step: View Report` und sehen sie sich die Resultate ihrer Evaluierung an. Laden Sie den Report herunter und fügen Sie ihn ihrem Repository hinzu.
   1. Als HTML-Datei über "Download Report (HTML)": `report.html`
   2. Als JSON-Datei über "Download Report (JSON)": `evaluation.json`.
   3. Committen und pushen sie diese in ihr GitHub Repository in einem Unterordner `report`. Sie können die JSON-Datei als Speicherstand nützen, um den Bericht später erneut zu öffnen (z.B. um noch Änderungen durchzuführen).


Die Granularität Ihres Berichts bestimmen Sie. Der primäre Zweck ist, die WCAG praktisch einzusetzen und sich damit auseinanderzusetzen, nicht einen perfekten Report zu verfassen. Es ist ebenso nicht wichtig, dass jeder Punkt `Passed` aufweist. Vielmehr soll ehrlich evaluiert werden, um einen Überblick über den Barrierefreiheitsstatus der Webseite zu bekommen und eine Idee für sinnvolle Anpassungen zu bekommen. Keiner der Punkte soll jedenfalls den Status `Not checked` haben.

## Accessibility-Tools

Sie können zur Unterstützung diverse Tools und Validatoren verwenden, seien Sie sich allerdings bewusst, dass diese selten alle Punkte finden bzw. überhaupt finden können (z.B. einfach gehaltene Sprache). Manche Validatoren überprüfen auch nur Teilaspekte, oder halten sich nicht strikt an WCAG 2, sondern zeigen eher generell Probleme auf.

Die Accessibility-Tools lassen sich grob in Online-Tools und Browser-Extensions gliedern.

### Online-Tools

Online-Tools erlauben das Überprüfen einer Webseite, ohne dass etwas lokal installiert werden muss. Folgende Online-Validatoren könnten nützlich sein:

- [MAUVE++ (WCAG 2.1)](https://mauve.isti.cnr.it/),
- [Ace it (WCAG 2.1 AA)](https://ace.useit.se/ax/aceit.php?lang=en),
- [WebAIM Wave](https://wave.webaim.org/) (für lokale Seiten nur mit Chrome- oder Firefox-Extension),
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Browser-Extensions

Browser-Extensions ermöglichen detailliertere Ergebnisse, erfordern jedoch die Installation im eigenen Browser. Damit die Tools funktionieren, muss die Webseite online sein oder lokal über einen Webserver aufgerufen werden, z.B. über PhpStorm und `localhost` (mithilfe der Browser-Buttons). Folgende Tools sind empfehlenswert:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/): In Chrome/Edge/Opera aufrufbar über F12 im Tab "Lighthouse". Analysiert verschiedenste Qualitätsaspekte der Webseite, darunter die Accessibility.
- [Accessibility Insights for Web](https://accessibilityinsights.io/): Verfügbar als Chrome/Edge Extension oder Desktop-Anwendung. Erlaubt eine "FastPass"-Evaluierung für die gängigsten Probleme oder eine detaillierte Evaluierung.
- [ARIA DevTools](https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck?hl=en): Chrome Extension, das die semantische Struktur einer Webseite anzeigt und damit darstellt, wie Screenreader sie sehen.

## Accessibility-Anpassungen

Nehmen Sie nun auf Ihrer Webseite die Anpassungen vor, die durch die Evaluierung bzw. die Verwendung von Tools notwendig bzw. sichtbar geworden sind. Typische Dinge sind:

- WAI-ARIA Attribute bei generischen Elementen wie `<div>`, die aber eine Bedeutung haben sollten (z.B. Tabs).
- Bessere textuelle Beschreibungen etwa bei Links, Buttons oder `alt`-Attributen.
- Ein Skip-Link am Anfang der Seite zum Hauptteil (der nicht sichtbar ist, aber die Navigation überspringt).
- Anpassungen von Farben/Kontrasten.

Nehmen Sie sinnvolle Anpassungen vor. Es gibt hier kein Universalrezept.

## Umsetzung und Abgabe

Der Status ihrer Webseite nach Übung 6 zählt als Abgabe. Die Seite sollte weitgehend ihrem finalen Figma-Prototyp entsprechen, es ist aber okay, wenn nicht alles genauso umgesetzt ist).

Folgende Punkte sind für die Abgabe relevant und werden beurteilt:

- Vollständige und korrekte HTML-Struktur mit den korrekten HTML-Elementen analog zu [Übung 2](README-ue02.md). Die Struktur soll semantisch dem Prototyp entsprechen. Der [HTML-Validator](https://validator.w3.org/) darf keine Fehler anzeigen, auch Warnungen sollten vermieden werden.
- Korrekte Formatierung der Inhalte mit CSS (Schriften, Farben, Abstände, Hintergründe etc.) analog zu [Übung 3](README-ue03.md) und [Übung 4](README-ue03.md). Der [CSS-Validator](https://jigsaw.w3.org/css-validator/) darf keine Fehler (in allen CSS-Dateien) anzeigen, auch Warnungen sollten vermieden werden.
- Responsive Version (mindestens ein Breakpoint), sodass eine Version für breitere und schmälere Viewports existiert ([Übung 4](README-ue04.md)).
- Korrekte Verwendung des CSS Grid Layout oder Bootstrap und des CSS Flexible Boxes Layout zur Anordnung der Inhalte entsprechend des Prototyps, analog zu [Übung 5](README-ue05.md). D.h. mindestens an einer Stelle ein CSS Grid Layout oder Bootstrap in Verwendung und mindestens einmal die Flexbox zur Anordnung von Elementen eingesetzt.
- Durchgeführter Accessibility-Report mit WCAG-EM (Report-Dateien liegen im Unterverzeichnis `report`). Anpassungen der Portfolio-Website, die durch die Evaluierung notwendig wurden, wurden durchgeführt.

Bewertet wird der Inhalt des GitHub-Repositories zum Zeitpunkt der Deadline von Übung 6 (siehe eLearning-System).

## Tipps und Richtlinien

- Verwenden Sie mehr als nur ein Accessibility Tool, um auf eventuelle Probleme ihrer Website aufmerksam zu werden. Diese Tools sind nicht perfekt und sollten daher nur als Ergänzung zur händischen Evaluierung gesehen werden.
- Denken Sie bei der Abgabe daran, einen Push durchzuführen, damit die Commits (d.h. die letzte Version) auf GitHub hochgeladen werden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.