<?php
include "conexion.php";

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

$query = "SELECT * FROM usuarios WHERE correo='$correo' AND contrasena='$contrasena'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0){
    echo "OK";
}else{
    echo "ERROR";
}
?>
