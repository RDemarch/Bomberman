<?php

$dbHost = "";// Entrer le nom de votre bse de données
$dbName = "";// Entrer le nom de votre bse de données
$dbPort = "";// Entrer le de portvotre bse de données
$dbUser = "";// Entrer l'utilisateur de votre bse de données
$dbUserPsw = "";// Entrer le mot de passe de l'utilisateur de votre base de données
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=' . $dbHost . ';port=' . $dbPort . ';dbname=' . $dbName . ';charset=utf8', $dbUser, $dbUserPsw, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message
				echo 'Erreur : '.$e->getMessage();
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
