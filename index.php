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
      <div class="powerUps">
        <h1>Power Ups</h1>
        <ul>
          <li><img src="/javascript/images/backpack.png"> = More Bombs</li>
          <li><img src="/javascript/images/gunpowder.png"> = More Power</li>
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
    <script type="text/javascript" src="/javascript/js/script.js"></script>
  </body>
</html>
