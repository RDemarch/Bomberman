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
    <div class="display">
      <div class="displayScore">
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
    </div>
    <div id="bottom">
      <div id="box">
      </div>
    </div>
    <script type="text/javascript" src="/javascript/js/script.js"></script>
  </body>
</html>
