<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // 1. Deine Empfänger-Mailadresse
    $to = "fischer.sandra2904@gmail.com";
    $subject = "Neue Projektanfrage über Portfolio";

    // 2. Auslesen der übermittelten Formulardaten
    $name = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    // Auslesen der ausgewählten Checkboxen (Array)
    $project_types = isset($_POST['project_type']) ? implode(", ", $_POST['project_type']) : 'Keine Angabe';

    // 3. E-Mail-Inhalt zusammenbauen
    $email_content = "Neue Anfrage über dein Portfolio:\n\n";
    $email_content .= "Name: " . $name . "\n";
    $email_content .= "E-Mail: " . $email . "\n";
    $email_content .= "Projekt-Typ: " . $project_types . "\n\n";
    $email_content .= "Nachricht / Scope:\n" . $message . "\n";

    // 4. Header (damit du direkt auf die Absender-Mail antworten kannst)
    $headers = "From: webserver@sandrafischer.at\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // 5. Versenden & Weiterleitung
    if (mail($to, $subject, $email_content, $headers)) {
        header("Location: index.html?sent=success#contact");
    } else {
        header("Location: index.html?sent=error#contact");
    }
    exit;
}