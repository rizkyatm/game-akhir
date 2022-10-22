<?php
require 'function.php';
if(isset($_SESSION["id"])){
  header("Location: index.php");
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Register</title>
    <link rel="stylesheet" href="./asset/css/login.css">
</head>
<body>
          <div class="container" id="container">
            <div class="login">
                <div class="judul">
                    <span>REGISTER</span>
                </div>
                <form autocomplete="off" action="" method="post">
                <input type="hidden" id="action" value="register">
                <div class="input-top">
                    <label for="">Name</label>
                    <input type="text" id="name" value=""> <br>
                </div>
                <div>
                  <label for="">Username</label>
                  <input type="text" id="username" value=""> <br>
                </div>
                <div>
                  <label for="">Password</label>
                  <input type="password" id="password" value=""> <br>
                </div>
                <button type="button" class="btn" onclick="submitData();">REGISTER</button>
                </form>
               <div class="garis"><hr> <p> or </p> <hr></div> 
                <div onclick="btnregis()" class="kelog"><a href="#" id="bat" class="bat">GO TO LOGIN</a></div>
            </div>
          </div>

        <div class="containerDua" id="containerDua">
          <div class="register">
                <div class="judul">
                    <span>LOGIN</span>
                </div>
                <input type="hidden" id="actionlog" value="login">
                <div class="inputDua-topDua">
                  <label for="">Username</label>
                  <input type="text" id="usernamelog" value="">
                </div>
                <div class="inputDua">
                  <label for="">Password</label>
                  <input type="password" id="passwordlog" value="">
                </div>
                <button class="btnDua" onclick="submitDataLog()">LOGIN</button>
     
           
            <div class="garis"><hr> <p> or </p> <hr></div>
              <div onclick="btnlog()" class="kelog"><a href="#" id="batDua" class="batDua">GO TO REGISTER</a></div>
              </div>
            </div>
            <script src="./asset/js/pindah-loginregister.js"></script>
            <script src="./asset/js/script.js"></script>
            <script src="./asset/js/jquery-3.6.1.min.js"></script>
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  </body>
</html>