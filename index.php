<?php
require 'function.php';
if(isset($_SESSION["id"])){
  $id = $_SESSION["id"];
  $user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM tb_user WHERE id = $id"));
}
else{
  header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link rel="stylesheet" href="asset/css/loby.css">
    <title>The Adventure Of Zion</title>
</head>
<body> 
<div class="container" id="loby">
        <div class="nama-game">
            <h1>Box Game</h1>
        </div>

        <div class="card1">
            <p class="judul" id="id-p">player : <?= $user['username'];?> #<?= $user['id'] ?></p>
            <div class="warna"><p class="t-warna">pilih warna</p><input id="color" type="color"></div>
            <div class="btn"><button onclick="logout()" class="out"><a href="logout.php">logout</a></button><button onclick="start()" class="mulai">start</button></div>
        </div>
    </div>
<div class="game" id="game">
    <div class="containerDua" id="containerDua" >
        <div class="menuDua" id="menuDua">
            <p class="nick" id="nick">Player:<?= $user['username']; ?>#<?= $user['id'] ?></p>
        </div>
    </div>

    <div class="decision" id="decision">
         <div class="center">
            <button type="" id="try" onclick="restartGame()">TRY AGAIN</button>
            <button type="" id="exit" onclick="exitGame()">EXIT</button>
         </div>
    </div>

    <p id="mes">Game Over</p>

</div>

    <footer id="footer">
        <h3>Developed By Rizky Atmaja</h3>
    </footer>
    <script src="./asset/js/game.js"></script>
</body>
</html>



