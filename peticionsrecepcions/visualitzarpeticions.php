<?php
     session_start();
     if (!isset($_SESSION["clientid"]));
     else if($_SESSION["clientname"]=="admin"){
          include '../classfitxer.php';
          $fitxer1 = new Fitxer("../FITXERS/peticions.txt");
          $linea=$fitxer1->fitxerlectura();
          $visupeticio=$fitxer1->visualitzarpeticions($linea);    
     }
?>
<html>
<head>
     <meta content="text/html" charset="UTF-8" http-equiv="content-type"/>
     <link href="../CSS/projecte.css" rel="stylesheet" type="text/css"/>
	<title>projecte</title>
</head>
<body>
     <div class="contingut_centrat">
     <?php
          if (!isset($_SESSION["clientid"])) echo "NO HI HA CAP SESSIO CREADA".'<a class="a_button" href="http://localhost/daw2_m07uf1_projecte_grup09/index.html">INICIAR SESSIO</a>';
          else if($_SESSION["clientname"]!="admin") echo "No tens permís".'<a class="a_button" href="http://localhost/daw2_m07uf1_projecte_grup09/index.html">INICIAR SESSIO</a>';
          else{
               echo "<h1>VIEW LIST REQUESTS</h1>";
               echo "<p>".$visupeticio."</p>".'<a class="a_button" href="../adminprincipal.html">tornar</a>';
          }
     ?>
     </div>
</body>
</html>