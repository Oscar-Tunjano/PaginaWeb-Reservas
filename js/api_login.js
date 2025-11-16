// =========================
//  LOGIN CON BACKEND NODE
// =========================

async function loginUsuario(event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // URL DE TU API EN RENDER ⚠️ IMPORTANTE
    const API_URL = "https://reservasbackend-h5qw.onrender.com/api/auth/login";

    const data = {
        email: correo,
        password: contrasena
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",  // para guardar la sesión
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
