console.log(">> invitations.js cargado");

let indexActual = 0;
let invitaciones = [];
let invitacionesFiltradas = [];

function initInvitationsPage() {
    console.log(">> initInvitationsPage ejecutada");

    invitaciones = [
        // Bodas
        { titulo: "Sobre<br>verde", imagen: "assets/verde.png", precio: "S/. 110", demo: "https://giftclick-david-y-grecia.netlify.app/index.html?Grecia%20y-Acompa%C3%B1ante-2-", categoria: "bodas" },
        { titulo: "Flores<br>Celestes", imagen: "assets/bodaceleste.png", precio: "S/. 110", demo: "https://giftclick.github.io/jherifer-selene/sobre", categoria: "bodas" },
        { titulo: "Flores<br>beige", imagen: "assets/brown.png", precio: "S/. 100", demo: "https://gifclick-elvis-jackelyn.netlify.app/sobre.html?Invitado-y%20Acompa%C3%B1ante-2-", categoria: "bodas" },
        { titulo: "Pearlas<br>Rosadas", imagen: "assets/pearls.png", precio: "S/. 100", demo: "https://giftclick.github.io/pearls/sobre", categoria: "bodas" },
        { titulo: "Estilo<br>Periódico", imagen: "assets/phone1.png", precio: "S/. 80", demo: "https://giftclick.github.io/flower/", categoria: "bodas" },
        { titulo: "Estilo<br>Sobre", imagen: "assets/phone2.png", precio: "S/. 80", demo: "https://giftclick.github.io/newspaper/index.html", categoria: "bodas" },
        { titulo: "Estilo<br>Libro", imagen: "assets/card.png", precio: "S/. 80", demo: "https://giftclick.github.io/cards", categoria: "bodas" },
        // XV
        { titulo: "Princesa y<br>el sapo", imagen: "assets/xv.png", precio: "S/. 80", demo: "https://giftclick.github.io/frog/", categoria: "xv" },
        { titulo: "Rapunzel<br>XV", imagen: "assets/rapunzel.png", precio: "S/. 80", demo: "https://mikaela-xv.netlify.app/", categoria: "xv" },
        { titulo: "La Bella y<br>la Bestia", imagen: "assets/bestia.png", precio: "S/. 80", demo: "https://giftclick.github.io/ariana", categoria: "xv" },
        { titulo: "Flores<br>Celestes", imagen: "assets/xvc.png", precio: "S/. 80", demo: "https://giftclick.github.io/esperanza/index.html", categoria: "xv" },
        { titulo: "Estrellas<br>XV", imagen: "assets/moon.png", precio: "S/. 90", demo: "https://giftclick.github.io/dalia", categoria: "xv" },
        { titulo: "Amarillo<br>Flores", imagen: "assets/yellow.png", precio: "S/. 80", demo: "https://giftclick.github.io/estrella", categoria: "xv" },
        { titulo: "La bella<br>durmiente", imagen: "assets/aurora.png", precio: "S/. 80", demo: "https://giftclick-jhojani.netlify.app/", categoria: "xv" },
        // Cumpleaños
        { titulo: "Cumpleaños<br>Rosado", imagen: "assets/pinkb.png", precio: "S/. 60", demo: "https://giftclick.github.io/carmen", categoria: "cumpleanos" },
        { titulo: "Paw Control<br>Plin Plin", imagen: "assets/paw.png", precio: "S/. 60", demo: "https://giftclick-enzo-issac.netlify.app/", categoria: "cumpleanos" },
        { titulo: "Plin Plin<br>Zafari", imagen: "assets/zafari.png", precio: "S/. 60", demo: "https://giftclick-emiliano.netlify.app/", categoria: "cumpleanos" },
        // Otros
        { titulo: "Baby<br>Shower", imagen: "assets/bs.png", precio: "S/. 60", demo: "https://giftclick.github.io/ezio/", categoria: "otros" },
        { titulo: "Corte de<br>pelo", imagen: "assets/corte.png", precio: "S/. 60", demo: "https://giftclick.github.io/heymi/", categoria: "otros" },
        { titulo: "Bautizo<br>Animales", imagen: "assets/bautizo.png", precio: "S/. 60", demo: "https://giftclick.github.io/ezio/", categoria: "otros" },
        { titulo: "Misa de<br>honra", imagen: "assets/misa.png", precio: "S/. 60", demo: "https://giftclick.github.io/misa/", categoria: "otros" },
        { titulo: "Pedida de<br>mano", imagen: "assets/mano.png", precio: "S/. 60", demo: "https://giftclick.github.io/flavio-alicia/", categoria: "otros" }
    ];

    renderInvitaciones("todos");

    // eventos de botones de categorías
    document.querySelectorAll(".btn-cat").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".btn-cat").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const cat = btn.dataset.cat;
            renderInvitaciones(cat);
        });
    });

    // eventos de botones anterior/siguiente
    document.getElementById("btn-anterior").addEventListener("click", anteriorInvitacion);
    document.getElementById("btn-siguiente").addEventListener("click", siguienteInvitacion);
}

function renderInvitaciones(categoria = "todos") {
    const container = document.getElementById("inv-container");
    if (!container) return;

    container.innerHTML = "";

    invitacionesFiltradas = categoria === "todos"
        ? invitaciones
        : invitaciones.filter(inv => inv.categoria === categoria);

    invitacionesFiltradas.forEach((inv, idx) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-invitacion");
        tarjeta.style = "width: 200px; text-align: center; cursor: pointer;";

        tarjeta.innerHTML = `
            <h3>${inv.titulo}</h3>
            <img src="${inv.imagen}" alt="${inv.titulo}" style="width: 80%; max-height: 200px; object-fit: cover; border-radius: 8px;" />
            <p style="font-weight: bold; margin-top: 0.5rem;">${inv.precio}</p>
        `;

        tarjeta.addEventListener("click", () => {
            indexActual = idx;
            mostrarDetalle(inv);
        });

        container.appendChild(tarjeta);
    });
}

function mostrarDetalle(inv) {
    const modal = document.getElementById("detalle-modal");
    document.getElementById("detalle-titulo").innerHTML = inv.titulo;
    document.getElementById("detalle-imagen").src = inv.imagen;
    document.getElementById("detalle-precio").innerText = inv.precio;

    const btnWhatsapp = document.getElementById("btn-whatsapp");
    const mensaje = encodeURIComponent(`Hola, estoy interesado en la invitación "${inv.titulo}" con precio ${inv.precio}. ¿Podrían darme más información?`);
    btnWhatsapp.href = `https://wa.me/1234567890?text=${mensaje}`;

    const btnDemo = document.getElementById("btn-demo");
    btnDemo.href = inv.demo;

    modal.style.display = "flex";
}

function cerrarDetalle() {
    const modal = document.getElementById("detalle-modal");
    modal.style.display = "none";
}

function siguienteInvitacion() {
    if (invitacionesFiltradas.length === 0) return;
    indexActual = (indexActual + 1) % invitacionesFiltradas.length;
    mostrarDetalle(invitacionesFiltradas[indexActual]);
}

function anteriorInvitacion() {
    if (invitacionesFiltradas.length === 0) return;
    indexActual = (indexActual - 1 + invitacionesFiltradas.length) % invitacionesFiltradas.length;
    mostrarDetalle(invitacionesFiltradas[indexActual]);
}

// Ejecutar cuando se cargue el DOM
window.addEventListener("DOMContentLoaded", initInvitationsPage);
