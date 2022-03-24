<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Bomberman</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script type="text/javascript" src="../Bomberman/js/entity.js"></script>
    <script type="text/javascript" src="../Bomberman/js/wall.js"></script>
    <script type="text/javascript" src="../Bomberman/js/player.js"></script>
    <script type="text/javascript" src="../Bomberman/js/bomb.js"></script>
    <script type="text/javascript" src="../Bomberman/js/fire.js"></script>
    <script type="text/javascript" src="../Bomberman/js/wallBreakEvent.js"></script>
    <script type="text/javascript" src="../Bomberman/js/powerup.js"></script>
    <script type="text/javascript" src="../Bomberman/js/enemy.js"></script>
    <script type="text/javascript" src="../Bomberman/js/gameover.js"></script>
    <script type="text/javascript" src="../Bomberman/js/victory.js"></script>
  </head>
  <body>
    <div id="feu">
    </div>
    <div id="bomb">
    </div>
    <div class="display">
      <div id="displayScore">
        <p>Time : <span id="time">00:00<span></p>
        <p>Score: <span id="score">0</span></p>
        <p>Power: <span id="power">1</span></p>
        <p>Number of Bombs: <span id="bombs">1</span></p>
      </div>
      <div class="commands">
        <h1>Commands</h1>
        <ul>
          <li>Z = &#8593;</li>
          <li>Q = &#8592;</li>
          <li>S = &#8595;</li>
          <li>D = &#8594;</li>
          <li>Space = Drop a bomb</li>
        </ul>
      </div>
      <div class="powerUps">
        <h1>Power Ups</h1>
        <ul>
          <li><img src="../Bomberman/images/tnt.gif" style="height: 40px;"> = More Bombs</li>
          <li><img src="../Bomberman/images/gunpowder.gif" style="height: 40px;"> = More Power</li>
          <li><img src="../Bomberman/images/arrow.gif" style="height: 40px;"> = Piercing Bombs</li>
          <li><img src="../Bomberman/images/diamond_chestplate.gif" style="height: 40px;"> = Invincibility for 5s</li>
          <li><img src="../Bomberman/images/slimeball.gif" style="height: 40px;"> = Freezes Enemies for 5s</li>
        </ul>
      </div>
    </div>
    <div id="bottom">
      <div class="object border" style="top: 0;left: 0;right: 0;height: 40px"></div>
      <div class="object border" style="top: 40px;left: 0;bottom: 40px;width: 40px"></div>
      <div class="object border" style="top: 40px;bottom: 40px;right: 0;width: 40px"></div>
      <div class="object border" style="bottom: 0;left: 0;right: 0;height: 40px"></div>
      <div id="box">

      </div>
    </div>
    <table>
      <thead>
        <th>Pseudo</th>
        <th>Score</th>
        <th>Temps</th>
      </thead>
      <tbody>
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

    // Si tout va bien, on peut continuer
    if (isset($bdd)) {
      $reponse = $bdd->query('SELECT * FROM leaderboard ORDER BY score DESC');

      // On affiche chaque entrée une à une
      while ($donnees = $reponse->fetch())
      {
        $timeMinute = floor($donnees['timePlayer'] / 60);
        $timeSecond = $donnees['timePlayer'] % 60;
        if ($timeMinute < 10) {
          $timeMinute = "0". $timeMinute;
        }
        if ($timeSecond < 10) {
          $timeSecond = "0". $timeSecond;
        }
      ?>
          <tr><td><?php echo htmlspecialchars($donnees['pseudo']);?></td>
          <td><?php echo htmlspecialchars($donnees['score']);?></td>
          <td><?php echo htmlspecialchars($timeMinute . ":" . $timeSecond);?></td></tr>
      <?php
      }

      $reponse->closeCursor(); // Termine le traitement de la requête
    }
    ?>
    </tbody>
  </table>
    <script type="text/javascript" src="../Bomberman/js/script.js"></script>
  </body>
</html>
