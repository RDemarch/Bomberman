<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=robin;charset=utf8', 'robin', 'robin', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

$pseudo = $_POST['pseudo'];
$score = $_POST['score'];
$timePlayer = $_POST['timeDb'];

$requete = $bdd->prepare('INSERT INTO leaderboard(pseudo, score, timePlayer) VALUES(:pseudo, :score, :timePlayer)');
$requete->execute(array(
          'pseudo' => $pseudo,
          'score' => $score,
          'timePlayer' => $timePlayer,
          ));

header('Location: index.php');

 ?>
