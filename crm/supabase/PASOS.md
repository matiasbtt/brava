# Conectar BRAVA a Supabase

1. En el SQL Editor del proyecto, pega y ejecuta `esquema.sql`. Luego pega y ejecuta `semilla.sql`.
2. En `semilla.sql`, edita el correo del último comentario y ejecuta la sentencia `insert into equipo(email) values (...)`.
3. En **Authentication → URL Configuration**, configura Site URL y Redirect URLs con `https://matiasbtt.github.io/brava/crm/` y `http://localhost:5195/`.
4. Copia la Project URL y la clave pública anon/publishable en `brava-config.js`. No coloques la `service_role`.
5. Abre la web, envía un pedido de prueba y entra al CRM con el enlace mágico. Confirma que aparece en el Pipeline.
