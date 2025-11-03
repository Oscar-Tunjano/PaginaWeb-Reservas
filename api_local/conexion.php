<?php
$host = "localhost";
$user = "438554_reservas";
$pass = "ostun123";
$db   = "438554_reservatuhospedajeensantamarta_1";

$conexion = new mysqli($host, $user, $pass, $db);

if($conexion->connect_error){
    die("Error en conexión: " . $conexion->connect_error);
}
?>
