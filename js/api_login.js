// =========================
//  LOGIN CON BACKEND RENDER
// =========================

async function loginUsuario(event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const API_URL = "https://reservas-backend-sm.onrender.com/api/auth/login";

    const data = {
        correo: correo,
        contraseña: contrasena
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert("Inicio de sesión exitoso");
            window.location.href = "dashboard-cliente.html";
        } else {
            alert(result.error || "Credenciales incorrectas");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo conectar con el servidor");
    }
}
