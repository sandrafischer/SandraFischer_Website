# Übung 2 – Die persönliche Portfolio-Website: HTML-Grundgerüst
WEF1UE Web Fundamentals | 05./06.11.2025 | Wolfgang Hochleitner | Code-along/freies Arbeiten

Es ist nun an der Zeit, den Design-Prototypen, den Sie in WED1IL Web Design in [Figma](https://www.figma.com/) begonnen haben, in eine Webseite mit HTML und CSS zu übertragen. In dieser Übung geht es zunächst darum, eine logische Struktur mit den entsprechenden Gliederungselementen zu erstellen, dazu muss der Figma-Prototyp nicht fertig sein, die Wireframes reichen völlig aus. Es wäre mit den aktuellen Kenntnissen ohnehin nicht möglich, den Prototypen genau nachzubauen. Vielmehr handelt es sich um einen stufenweisen Prozess, an dessen Ende eine möglichst getreue Implementierung des bis dahin fertigen Design-Prototyps steht (aber nicht stehen muss, es kann durchaus sein, dass manche Dinge so nicht möglich sind, das ist okay).

## HTML-Struktur

Beginnen Sie zuerst, eine Struktur (das HTML-Grundgerüst) für Ihre Webseite zu definieren.

Legen Sie dazu zunächst eine neue HTML-Datei an und nennen Sie diese `index.html`. Ihr Editor/ihre IDE (z.B. PhpStorm) sollte Ihnen bereits die entsprechende Grundstruktur anlegen. Falls nicht, erledigen Sie dies und achten Sie darauf, dass die folgenden Dinge enthalten sind:

- Vollständige und korrekte DOCTYPE-Angabe,
- `<html>`-Element mit `lang`-Attribut, dessen Wert auf die Sprache der Website gesetzt ist,
- `<head>`-Element mit `<title>`-Element und `<meta>`-Element mit der Angabe der Zeichenkodierung (UTF-8),
- `<body>`-Element.

Beginnen Sie nun, anhand ihres Figma-Prototyps eine grobe Gliederung mit den passenden HTML-Elementen vorzunehmen. Die folgenden Dinge sollten enthalten sein:

- Ein **Kopfbereich** (`<header>`), z.B. die gesamte Hero-Section Ihrer Seite oder auch nur ein Teil davon (wie z.B. Überschrift und Logo).
- Der **Hauptbereich** (`<main>`), welcher die Hauptinhalte der Seite umfasst.
- Eine Unterteilung des Hauptbereichs in einzelne **Abschnitte** (z.B. About me, Portfolio, Kontakt) mithilfe von `<section>`-Elementen.
- Die **Navigation** (`<nav>`), welche auf die einzelnen Abschnitte innerhalb der Seite verweist. Die Navigation kann innerhalb des Kopfbereichs sein, aber auch außerhalb, d.h. ein Geschwisterelement von `<header>` und `<main>`. Realisieren Sie die eigentliche Navigation darin mit einer **Liste** (`<ul>`/`<ol>`).
- Ein **Fußbereich** (`<footer>`) für abschließende Informationen wie z.B. Copyright, Kontaktdaten (mit `<address>`), social Links, oder Ähnlichem.

## HTML-Inhalte

Fahren Sie nun fort mit dem Einbinden weiterer Inhalte, analog zu Ihrem Prototyp/Wireframe. Da bei Übung 2 noch nicht alle notwendigen CSS-Kenntnisse für die genaue Positionierung von Elementen gelehrt wurden, ist es hier vor allem wichtig, diese Elemente im korrekten Bereich einzufügen. Die genaue Anordnung erfolgt in den restlichen Übungen.

- **Textgliederung**: Erstellen Sie für die einzelnen Bereiche die entsprechenden Überschriften (`<h1>` bis `<h6>`, wie benötigt). `<h1>` sollte dabei den Titel Ihrer Seite beinhalten, die Überschriften in den einzelnen Abschnitten sind dann `<h2>`-Elemente.
- **Fließtext**: Setzen Sie den Fließtext zu den jeweiligen Abschnitten mit Hilfen von Absätzen (`<p>`). Es kann sich zunächst auch um Blindtext (Lorem Ipsum) handeln.
- **Formatierungen auf Textebene**: Wenden Sie wo nötig/gewünscht Formatierungen auf der Textebene (im Fließtext) mit Elementen wie `<em>`, `<strong>` etc. an, wenn dies schon Sinn macht.
- **Bilder**: Fügen Sie alle Bilder (Logo, Portfolio-Arbeiten, Icons etc.) mithilfe von `<img>` Elementen ein. Verwenden Sie wie benötigt Pixelgrafiken (WEBP, oder auch PNG, JPG, GIF) oder auch Vektorgrafiken (SVG). Dies betrifft *nicht* Hintergrundbilder. Diese werden über CSS in [Übung 3](README-ue03.md) eingebunden. Sie können dafür auch Platzhaltergrafiken, z.B. von [Placehold](https://placehold.co/) oder ähnlichen Diensten sein.
- **Links**: Verlinken Sie Inhalte, wie benötigt mithilfe des `<a>`-Elements. Dies betrifft vor allem die Navigation mit internen Links aber auch allfällige Verlinkungen zu externen Seiten.
- **Formular**: Erstellen Sie das Kontaktformular mit dem `<form>`-Element und den entsprechenden Eingabefeldern (`<input>`, `<textarea>` etc.) und Buttons (`<button>`). Setzen Sie die für den jeweiligen Inhalt korrekten Typen von Eingabefeldern und verwenden Sie unbedingt Beschriftungen (`<label>`). Sie können auch bei Bedarf mit `<fieldset>` gruppieren. Im `action`-Attribut des `<form>`-Elements steht einfach eine/ihre-E-Mail-Adresse.
- **Gruppieren**: Wenn es logisch Sinn macht (z.B. bereits vorausschauend auf das spätere Styling), können Sie mehrere Elemente jederzeit auch mit generischen `<div>`-Elementen gruppieren.

## Tipps und Richtlinien

- Das HTML-Markup muss nach dem aktuellen HTML-Standard validieren. Das Kriterium ist alleinig der [W3C Markup Validator](https://validator.w3.org/). Validieren Sie Ihre Seite regelmäßig und korrigieren Sie Fehler entsprechend.
- [MDN](https://developer.mozilla.org/en-US/) als Referenz für HTML-Tags und Attribute verwenden.
- Bei Fragen oder Problemen zur Aufgabe eröffnen Sie ein Issue in ihrem Repository. Alternativ können Sie Fragen auch in Microsoft Teams stellen.
