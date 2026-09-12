(function renderInvitation() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("template");
  const template = window.GiftClickDemoTemplates[id];
  const root = document.querySelector("#invitation");

  if (!template) {
    document.title = "Invitación no encontrada | GiftClick";
    root.innerHTML = '<section class="missing"><strong>GiftClick</strong><h1>Invitación no encontrada</h1><p>Vuelve al catálogo para elegir otro modelo.</p><a href="../index.html#catalogo">Ver catálogo</a></section>';
    return;
  }

  document.body.className = `theme-${template.family}`;
  document.title = `${template.name} | Invitación GiftClick`;

  const schedule = template.schedule.map(([time, label], index) => `
    <article class="schedule-item">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <time>${time}</time>
      <strong>${label}</strong>
    </article>`).join("");
  const tags = template.tags.map((tag) => `<li>${tag}</li>`).join("");
  const displayTitle = template.title.replace("\n", "<br>");
  const rsvpText = encodeURIComponent(`Hola, confirmo mi asistencia a ${template.name}. Mi nombre es:`);
  const mapText = encodeURIComponent(template.venue);

  root.innerHTML = `
    <section class="hero-panel" id="inicio">
      <div class="hero-art" aria-hidden="true">
        <i class="orb orb-one"></i><i class="orb orb-two"></i><i class="grid-shape"></i>
        <span class="hero-symbol">${template.icon}</span>
      </div>
      <nav class="invite-nav" aria-label="Navegación de la invitación">
        <span class="tiny-brand">GIFTCLICK · DEMO</span>
        <a href="#detalles">Detalles</a>
      </nav>
      <div class="hero-copy">
        <p class="eyebrow">${template.kicker}</p>
        <h1>${displayTitle}</h1>
        ${template.age ? `<span class="age-stamp">${template.age}</span>` : ""}
        <p class="hero-subtitle">${template.subtitle}</p>
        <a class="primary-button" href="#detalles">Abrir invitación <span>↓</span></a>
      </div>
      <div class="hero-date">
        <span>Reserva la fecha</span>
        <strong>${template.dateLabel}</strong>
      </div>
    </section>

    <section class="countdown-section" aria-label="Cuenta regresiva">
      <p>Faltan</p>
      <div class="countdown" id="countdown">
        <span><strong data-days>00</strong><small>días</small></span>
        <span><strong data-hours>00</strong><small>horas</small></span>
        <span><strong data-minutes>00</strong><small>min</small></span>
        <span><strong data-seconds>00</strong><small>seg</small></span>
      </div>
    </section>

    <section class="story-section" id="detalles">
      <div class="section-number">01</div>
      <div class="story-copy">
        <p class="section-kicker">La invitación</p>
        <h2>${template.storyTitle}</h2>
        <p>${template.story}</p>
        <ul class="feature-list">${tags}</ul>
      </div>
      <div class="portrait-art" aria-label="Espacio personalizable para la fotografía del festejado">
        <span>${template.icon}</span>
        <small>Tu foto aquí</small>
      </div>
    </section>

    <section class="schedule-section">
      <header><p class="section-kicker">El programa</p><h2>Momentos para compartir</h2></header>
      <div class="schedule-list">${schedule}</div>
    </section>

    <section class="details-section">
      <article class="detail-card location-card">
        <span class="detail-icon">⌖</span><p>Dónde</p><h2>${template.venue}</h2>
        <a href="https://maps.google.com/?q=${mapText}" target="_blank" rel="noopener">Abrir ubicación</a>
      </article>
      <article class="detail-card date-card">
        <span class="detail-icon">◫</span><p>Cuándo</p><h2>${template.dateLabel}</h2>
        ${template.dress ? `<small>Dress code · ${template.dress}</small>` : `<small>Agradecemos tu compañía</small>`}
      </article>
    </section>

    <section class="pass-section">
      <div class="pass-copy"><p class="section-kicker">Pase digital</p><h2>Tu lugar está reservado</h2><p>Presenta este código al llegar. Los datos y la cantidad de pases se personalizan para cada invitado.</p></div>
      <div class="ticket"><span>INVITADO ESPECIAL</span><strong>${template.code}</strong><i></i><small>Admite · 2 personas</small></div>
    </section>

    <section class="rsvp-section">
      <span class="rsvp-mark">${template.icon}</span>
      <p class="section-kicker">Nos encantará contar contigo</p>
      <h2>Confirma tu asistencia</h2>
      <p>Responde antes del evento para ayudarnos a preparar cada detalle.</p>
      <a class="rsvp-button" href="https://wa.me/51967707229?text=${rsvpText}" target="_blank" rel="noopener">Confirmar por WhatsApp</a>
    </section>

    <footer><strong>${template.name}</strong><span>Una invitación digital de GiftClick</span><a href="#inicio">Volver arriba ↑</a></footer>`;

  const target = new Date(template.date).getTime();
  function updateCountdown() {
    const remaining = Math.max(0, target - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining / 3600000) % 24);
    const minutes = Math.floor((remaining / 60000) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);
    root.querySelector("[data-days]").textContent = String(days).padStart(2, "0");
    root.querySelector("[data-hours]").textContent = String(hours).padStart(2, "0");
    root.querySelector("[data-minutes]").textContent = String(minutes).padStart(2, "0");
    root.querySelector("[data-seconds]").textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
