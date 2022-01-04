<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoi d'un mail par formulaire</title>
</head>

<body>
    <?php
    
    $position_arobase = strpos($_POST['email'], '@');
    if ($position_arobase === false) {
        echo '<p>Votre email doit comporter un arobase.</p>';
    } else {
        $retour = mail('rubs99rstd@gmail.com', $_POST['sujet'], $_POST['msg'], 'From: ' . $_POST['mail']);
    }
    if ($retour) {
        echo '<p>Votre message a été envoyé . &#128513; </p>';
    } else {
        echo '<p>Erreur.</p>';
    }
    ?>
</body>

</html>