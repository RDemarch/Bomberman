<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Test Java</title>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script type="text/javascript" src="/javascript/js/entity.js"></script>
    <script type="text/javascript" src="/javascript/js/wall.js"></script>
    <script type="text/javascript" src="/javascript/js/player.js"></script>
    <script type="text/javascript" src="/javascript/js/bomb.js"></script>
    <script type="text/javascript" src="/javascript/js/fire.js"></script>
    <script type="text/javascript" src="/javascript/js/wallBreakEvent.js"></script>
    <script type="text/javascript" src="/javascript/js/powerup.js"></script>
    <script type="text/javascript" src="/javascript/js/enemy.js"></script>
    <script type="text/javascript" src="/javascript/js/gameover.js"></script>
    <script type="text/javascript" src="/javascript/js/victory.js"></script>
  </head>
  <body>
    <div id="feu">
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
          <li><img src="/javascript/images/tnt.gif" style="height: 32px;"> = More Bombs</li>
          <li><img src="/javascript/images/gunpowder.gif" style="height: 32px;"> = More Power</li>
          <li><img src="/javascript/images/arrow.png"> = Piercing Bombs</li>
          <li><img src="/javascript/images/diamond_chestplate.png"> = Invincibility for 5s</li>
          <li><img src="/javascript/images/slime_ball.png"> = Freezes Enemies for 5s</li>
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

    // Si tout va bien, on peut continuer

    // On récupère tout le contenu de la table jeux_video
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

    ?>
    </tbody>
  </table>
    <script type="text/javascript" src="/javascript/js/script.js"></script>
  </body>
</html>
