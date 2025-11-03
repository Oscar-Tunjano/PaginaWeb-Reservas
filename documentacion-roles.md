
# Manual ajustado - Reservatuhospedajeensantamarta.site
Fecha: 2025-11-02

## Resumen de cambios para observaciones del docente
Se realizaron los ajustes solicitados por el instructor:
- Se define el comportamiento de consultas y modificaciones de reservas por rol.
  - **Administrador:** puede ver, editar estado y eliminar cualquier reserva.
  - **Cliente:** puede ver únicamente sus propias reservas y solicitar cancelación (cambia estado a "Cancelación solicitada").
- Se agregaron imágenes distintivas por rol (SVG inline) para mejorar la claridad visual del usuario final.
- Se modificó el flujo de login para almacenar el correo del usuario en `localStorage` y así vincular reservas.
- Se añadió enlace "Ingresar" en el menú principal y vistas diferenciadas (Admin / Cliente).
- Se incorporó archivo de documentación y evidencias para sustentación.

## Instrucciones de uso (para el evaluador o docente)
1. Abrir `index.html` y hacer clic en **Ingresar**.
2. Usar credenciales de prueba:
   - Administrador: `admin@site.com` / `123`
   - Cliente: `cliente@site.com` / `123`
3. Como Administrador: ir a "Reservas" para ver todas las reservas; puede editar estado o eliminar.
4. Como Cliente: ir a "Mis Reservas" para ver únicamente las suyas y solicitar cancelación.

## Observaciones sobre implementación técnica (sitio estático en Vercel)
- Dado que el sitio es estático, se usa `localStorage` para simular persistencia y asociación de reservas a usuarios.
- Para un sistema real se recomienda integrar backend (Node/PHP) y base de datos (MySQL, PostgreSQL o Firebase) para manejo seguro de sesiones, encriptación de contraseñas y control de acceso del lado del servidor.

## Archivos añadidos/modificados
- `login.html` (mejorado; almacena `userEmail`)
- `dashboard-admin.html` (gestión de reservas)
- `dashboard-cliente.html` (mis reservas)
- `unauthorized.html` (acceso denegado)
- `documentacion-roles.md` (este documento)
