<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Haal de gegevens uit het formulier
    $voornaam = filter_input(INPUT_POST, 'voornaam', FILTER_SANITIZE_STRING);
    $achternaam = filter_input(INPUT_POST, 'achternaam', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $onderwerp = filter_input(INPUT_POST, 'onderwerp', FILTER_SANITIZE_STRING);
    $bericht = filter_input(INPUT_POST, 'bericht', FILTER_SANITIZE_STRING);

    // Controleer of de gegevens geldig zijn
    if ($voornaam && $achternaam && $email && $onderwerp && $bericht) {
        $to = 'roy_walhof@outlook.com'; // Vul hier je eigen e-mailadres in
        $subject = 'Nieuw bericht van je website: ' . $onderwerp;
        $message = "Naam: $voornaam\n Achternaam: $achternaam\nE-mail: $email\nOnderwerp: $onderwerp\nBericht:\n$bericht";
        $headers = "From: $email";

        // Verstuur de e-mail
      // Verstuur de e-mail
      if (mail($to, $subject, $message, $headers)) {
        header("Location: ../SluipRovers.html?status=success");
    } else {
        header("Location: ../SluipRovers.html?status=error");
    }
} else {
    header("Location: ../SluipRovers.html?status=invalid");
}
exit();
} else {
header("Location: ../SluipRovers.html");
exit();
}
?>
