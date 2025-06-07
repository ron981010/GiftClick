console.log(">> invitations.js cargado");

let indexActual = 0;
let invitaciones = [];
let invitacionesFiltradas = [];

function initInvitationsPage() {
    console.log(">> initInvitationsPage ejecutada");

    invitaciones = [
        // Bodas
        { titulo: "Estilo Periódico", imagen: "assets/phone1.png", precio: "S/. 80", demo: "#", categoria: "bodas" },
        { titulo: "Estilo Sobre", imagen: "assets/phone2.png", precio: "S/. 80", demo: "#", categoria: "bodas" },
        { titulo: "Pearlas Rosadas", imagen: "assets/pearls.png", precio: "S/. 100", demo: "#", categoria: "bodas" },
        { titulo: "Estilo Libro", imagen: "assets/card.png", precio: "S/. 80", demo: "#", categoria: "bodas" },
        { titulo: "Sobre verde", imagen: "assets/phone1.png", precio: "S/. 110", demo: "https://giftclick-david-y-grecia.netlify.app/index.html?Grecia%20y-Acompa%C3%B1ante-2-", categoria: "bodas" },
        { titulo: "Flores Celestes", imagen: "assets/phone1.png", precio: "S/. 110", demo: "https://giftclick.github.io/jherifer-selene/sobre", categoria: "bodas" },
        { titulo: "Flores beige", imagen: "assets/phone1.png", precio: "S/. 100", demo: "#", categoria: "bodas" },

        // XV
        { titulo: "XV - Princesa y el sapo", imagen: "assets/xv.png", precio: "S/. 80", demo: "#", categoria: "xv" },
        { titulo: "XV - Rapunzel", imagen: "assets/xv.png", precio: "S/. 80", demo: "https://mikaela-xv.netlify.app/", categoria: "xv" },
        { titulo: "XV - La Bella y la Bestia", imagen: "assets/xv.png", precio: "S/. 80", demo: "https://giftclick.github.io/ariana", categoria: "xv" },
        { titulo: "XV - Flores Celestes", imagen: "assets/xv.png", precio: "S/. 80", demo: "https://giftclick.github.io/esperanza/index.html", categoria: "xv" },
        { titulo: "XV - Estrellas", imagen: "assets/xv.png", precio: "S/. 90", demo: "https://giftclick.github.io/dalia", categoria: "xv" },
        { titulo: "XV - Amarillo Flores", imagen: "assets/xv.png", precio: "S/. 80", demo: "https://giftclick.github.io/estrella", categoria: "xv" },
        { titulo: "XV - La bella durmiente", imagen: "assets/xv.png", precio: "S/. 80", demo: "#", categoria: "xv" },
        // Cumpleaños
        { titulo: "Cumpleaños - Niña Rosa", imagen: "assets/card.png", precio: "S/. 60", demo: "https://giftclick.github.io/carmen", categoria: "cumpleanos" },
        { titulo: "Paw Control y Plin Plin", imagen: "assets/card.png", precio: "S/. 60", demo: "https://giftclick-enzo-issac.netlify.app/", categoria: "cumpleanos" },
        { titulo: "Plin Plin Zafari", imagen: "assets/card.png", precio: "S/. 60", demo: "#", categoria: "cumpleanos" },
        // Otros
        { titulo: "Baby Shower - Varón", imagen: "assets/phone2.png", precio: "S/. 60", demo: "https://giftclick.github.io/ezio/", categoria: "otros" },
        { titulo: "Corte de pelo - Fiesta Niña", imagen: "assets/card.png", precio: "S/. 60", demo: "https://giftclick.github.io/heymi/", categoria: "otros" },
        { titulo: "Bautizo - Varón", imagen: "assets/phone2.png", precio: "S/. 60", demo: "https://giftclick.github.io/ezio/", categoria: "otros" },
        { titulo: "Misa de honra", imagen: "assets/phone2.png", precio: "S/. 60", demo: "#", categoria: "otros" },
        { titulo: "Pedida de mano - Rosas Rojas", imagen: "assets/pearls.png", precio: "S/. 60", demo: "https://giftclick.github.io/flavio-alicia/", categoria: "otros" }
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
    document.getElementById("detalle-titulo").innerText = inv.titulo;
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
