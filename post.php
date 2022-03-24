<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=robind_;charset=utf8', 'robind', 'gH3MyItHwXD/gQ==', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

$pseudo = $_POST['pseudo'];
$score = $_POST['score'];
$timePlayer = $_POST['timeDb'];

$requete = $bdd->prepare('INSERT INTO leaderboard(name, score, timePlayer) VALUES(:pseudo, :score, :timePlayer)');
$requete->execute(array(
          'pseudo' => $pseudo,
          'score' => $score,
          'timePlayer' => $timePlayer,
          ));

header('Location: index.php');

 ?>
