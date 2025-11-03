<?php
include "conexion.php";

$correo = $_GET['correo'];

$query = "SELECT correo, fecha_registro FROM usuarios WHERE correo='$correo'";
$result = mysqli_query($conn, $query);

$data = mysqli_fetch_assoc($result);

echo json_encode($data);
?>
