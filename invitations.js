console.log(">> invitations.js cargado");

let indexActual = 0;
let invitaciones = [];
let invitacionesFiltradas = [];

function initInvitationsPage() {
    console.log(">> initInvitationsPage ejecutada");

    invitaciones = [
        { titulo: "Newspaper", imagen: "assets/phone1.png", precio: "S/. 120", demo: "#", categoria: "bodas" },
        { titulo: "Envelope", imagen: "assets/phone2.png", precio: "S/. 100", demo: "#", categoria: "bodas" },
        { titulo: "Pearls", imagen: "assets/pearls.png", precio: "S/. 150", demo: "#", categoria: "otros" },
        { titulo: "Book", imagen: "assets/card.png", precio: "S/. 130", demo: "#", categoria: "cumpleanos" },
        { titulo: "XV", imagen: "assets/xv.png", precio: "S/. 180", demo: "#", categoria: "xv" }
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
