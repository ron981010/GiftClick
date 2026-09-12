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

  if (template.premium) {
    const eventWord = template.eventType === "wedding" ? "Nuestra boda" : "Mis quince años";
    const invitationWord = template.eventType === "wedding" ? "Nos casamos" : "Celebro mis XV";
    root.innerHTML = `
      <div class="premium-experience layout-${template.layout}">
        <section class="premium-cover" id="inicio">
          <figure class="premium-photo"><img src="${template.image}" alt="Imagen editorial del modelo ${template.name}"></figure>
          <nav class="premium-nav" aria-label="Navegación de la invitación"><span>GIFTCLICK · DEMO</span><a href="#historia">Descubrir ↓</a></nav>
          <div class="premium-title-block">
            <p>${template.kicker}</p><h1>${template.title}</h1><span class="premium-signature">${template.signature}</span>
            <p class="premium-subtitle">${template.subtitle}</p>
          </div>
          <div class="premium-date-card"><span>${eventWord}</span><strong>${template.dateLabel}</strong></div>
        </section>

        <section class="premium-countdown" aria-label="Cuenta regresiva">
          <p>${invitationWord} · faltan</p>
          <div class="countdown">
            <span><strong data-days>00</strong><small>días</small></span>
            <span><strong data-hours>00</strong><small>horas</small></span>
            <span><strong data-minutes>00</strong><small>min</small></span>
            <span><strong data-seconds>00</strong><small>seg</small></span>
          </div>
        </section>

        <section class="premium-story" id="historia">
          <span class="premium-index">01</span>
          <div><p class="premium-kicker">${template.eventType === "wedding" ? "Dos historias, un capítulo" : "Una historia propia"}</p><h2>${template.storyTitle}</h2><p>${template.story}</p></div>
          <blockquote>“${template.subtitle}”</blockquote>
        </section>

        <section class="premium-feature">
          <div class="feature-image"><img src="${template.image}" alt=""></div>
          <div class="feature-copy"><span class="premium-index">02</span><p class="premium-kicker">Diseñado como experiencia</p><h2>${template.featureTitle}</h2><p>${template.featureText}</p><ul>${tags}</ul></div>
        </section>

        <section class="premium-program">
          <header><p class="premium-kicker">${template.layout === "opera" ? "El libreto" : template.layout === "pop" ? "El setlist" : template.layout === "travel" ? "La ruta" : "El programa"}</p><h2>Tres momentos,<br>una celebración</h2></header>
          <div class="premium-schedule">${schedule}</div>
        </section>

        <section class="premium-information">
          <article><span>01 · Dónde</span><h2>${template.venue}</h2><a href="https://maps.google.com/?q=${mapText}" target="_blank" rel="noopener">Abrir ubicación ↗</a></article>
          <article><span>02 · Cuándo</span><h2>${template.dateLabel}</h2><p>${template.dress}</p></article>
        </section>

        <section class="premium-pass">
          <div><p class="premium-kicker">Acceso personalizado</p><h2>Este lugar es para ti.</h2><p>El nombre, la cantidad de invitados y las indicaciones pueden personalizarse en cada enlace.</p></div>
          <aside><span>INVITADO ESPECIAL</span><strong>${template.code}</strong><i></i><small>Admite · 2 personas</small></aside>
        </section>

        <section class="premium-rsvp">
          <span class="premium-signature">${template.signature}</span><p class="premium-kicker">Nos encantará compartirlo contigo</p><h2>¿Vienes?</h2><p>Confirma tu asistencia antes del evento.</p>
          <a href="https://wa.me/51967707229?text=${rsvpText}" target="_blank" rel="noopener">Confirmar por WhatsApp</a>
        </section>
        <footer><strong>${template.name}</strong><span>Una invitación original de GiftClick</span><a href="#inicio">Volver arriba ↑</a></footer>
      </div>`;
  } else {
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
  }

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
