
function renderDashboard() {
  return `
    <section class="screen">
      <h2>Dashboard</h2>
      <p>Consulta rápida de sobrantes con alertas de prioridad.</p>
      <ul>
        <li>⚠️ Tomates (10) - Prioridad alta</li>
        <li>⏳ Pan integral (5) - Vence pronto</li>
        <li>✅ Pollo cocido (3) - Listo para donar</li>
      </ul>
    </section>
  `;
}

function renderRegistroRapido() {
  return `
    <section class="screen">
      <h2>Registro Rápido</h2>
      <form id="registroForm">
        <input type="text" placeholder="Nombre del producto" required><br>
        <input type="number" placeholder="Cantidad" required><br>
        <input type="date" placeholder="Fecha de caducidad" required><br>
        <button type="submit">Registrar</button>
      </form>
    </section>
  `;
}

function renderAccionesRapidas() {
  return `
    <section class="screen">
      <h2>Acciones Rápidas</h2>
      <button onclick="alert('Producto marcado para donación')">Donar</button>
      <button onclick="alert('Producto marcado con descuento')">Vender con descuento</button>
    </section>
  `;
}

function renderPerfilRestaurante() {
  return `
    <section class="screen">
      <h2>Perfil del Restaurante</h2>
      <p><strong>Nombre:</strong> Restaurante Sabor</p>
      <p><strong>Dirección:</strong> Calle Mayor 25</p>
      <p><strong>Horario:</strong> Lunes a Sábado - 13:00 a 23:00</p>
      <button onclick="alert('Editar perfil (demo)')">Editar</button>
    </section>
  `;
}

function renderNotificaciones() {
  return `
    <section class="screen">
      <h2>Notificaciones</h2>
      <ul>
        <li>✅ 10kg de papas registrados</li>
        <li>📢 Campaña activa: Lunes sin desperdicio</li>
        <li>✅ 5kg de arroz entregados</li>
      </ul>
    </section>
  `;
}

function renderModoRapido() {
  return `
    <section class="screen">
      <h2>Modo Rápido</h2>
      <button onclick="alert('Sobrante común registrado')">Registrar sobrante rápido</button>
    </section>
  `;
}

function loadView(viewName) {
  const container = document.getElementById('app');
  switch(viewName) {
    case 'dashboard': container.innerHTML = renderDashboard(); break;
    case 'registro': container.innerHTML = renderRegistroRapido(); break;
    case 'acciones': container.innerHTML = renderAccionesRapidas(); break;
    case 'perfil': container.innerHTML = renderPerfilRestaurante(); break;
    case 'notificaciones': container.innerHTML = renderNotificaciones(); break;
    case 'modo': container.innerHTML = renderModoRapido(); break;
    default: container.innerHTML = '<p>Vista no encontrada</p>'; break;
  }
}
