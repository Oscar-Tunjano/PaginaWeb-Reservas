<?php
include "conexion.php";

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

$query = "INSERT INTO usuarios(correo,contrasena) VALUES('$correo','$contrasena')";

if(mysqli_query($conn, $query)){
    echo "OK";
}else{
    echo "ERROR";
}
?>
