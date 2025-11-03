<?php
$host = "mysql-reservatuhospedajeensantamarta.alwaysdata.net";
$user = "438554_reservas_";
$pass = "ostun123";
$db   = "438554_reservatuhospedajeensantamarta_1";

$conn = mysqli_connect($host, $user, $pass, $db);

if(!$conn){
    die("Error de conexión: " . mysqli_connect_error());
}
?>
