const {
  categories,
  templates,
  templateWhatsappLink,
} = window.GiftClickCatalog;

const params = new URLSearchParams(window.location.search);
const templateId = params.get("template");
const template = templates.find((item) => item.id === templateId);
const title = document.querySelector("#demo-title");
const meta = document.querySelector("#demo-meta");
const frame = document.querySelector("#demo-frame");
const viewport = document.querySelector("#demo-viewport");
const loading = document.querySelector("#demo-loading");
const error = document.querySelector("#demo-error");
const backButton = document.querySelector("#back-button");
const buyButton = document.querySelector("#buy-button");
const desktopButton = document.querySelector("#view-desktop");
const mobileButton = document.querySelector("#view-mobile");

function setViewMode(mode, updateAddress = true) {
  const isMobile = mode === "mobile";

  viewport.classList.toggle("is-mobile", isMobile);
  viewport.classList.toggle("is-desktop", !isMobile);
  mobileButton.classList.toggle("is-active", isMobile);
  desktopButton.classList.toggle("is-active", !isMobile);
  mobileButton.setAttribute("aria-pressed", String(isMobile));
  desktopButton.setAttribute("aria-pressed", String(!isMobile));

  if (updateAddress) {
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("view", mode);
    window.history.replaceState(window.history.state, "", nextUrl);
  }
}

desktopButton.addEventListener("click", () => setViewMode("desktop"));
mobileButton.addEventListener("click", () => setViewMode("mobile"));

if (!template) {
  title.textContent = "Plantilla no encontrada";
  meta.textContent = "Regresa al catálogo para elegir otro diseño.";
  document.title = "Plantilla no encontrada | GiftClick";
  loading.hidden = true;
  frame.hidden = true;
  buyButton.hidden = true;
  error.hidden = false;
} else {
  const category = categories[template.category];
  const backUrl = `index.html?category=${encodeURIComponent(template.category)}#catalogo`;

  title.textContent = template.name;
  meta.textContent = `${category.title} · Explora el diseño antes de comprarlo.`;
  document.title = `${template.name} | Demo GiftClick`;
  backButton.href = backUrl;
  buyButton.href = templateWhatsappLink(template.name);
  buyButton.setAttribute("aria-label", `Comprar la plantilla ${template.name}`);
  frame.title = `Demo de la invitación ${template.name}`;
  frame.src = template.demo;

  frame.addEventListener("load", () => {
    loading.hidden = true;
    frame.classList.add("is-loaded");
  });
}

setViewMode(params.get("view") === "desktop" ? "desktop" : "mobile", false);
