const WHATSAPP_NUMBER = "51967707229";

const categories = {
  wedding: {
    title: "Bodas",
    summary: "Diseños elegantes, románticos y editoriales.",
    icon: "💍",
  },
  birthday: {
    title: "Cumpleaños y más",
    summary: "Plantillas para cumpleaños, celebraciones familiares y momentos de honra.",
    icon: "🎂",
  },
  babyshower: {
    title: "Baby Shower",
    summary: "Invitaciones tiernas para anunciar una llegada especial.",
    icon: "🍼",
  },
  quince: {
    title: "XV años",
    summary: "Modelos de quinceañera con estética de cuento y celebración.",
    icon: "👑",
  },
};

const templates = [
  { id: "flores-celestes", name: "Flores Celestes", category: "wedding", color: "#6e4cfa", description: "Estilo romántico floral con portada sobre.", badges: ["Sobre", "Pases"], demo: "https://giftclick.github.io/jherifer-selene/sobre" },
  { id: "sobre-verde", name: "Sobre Verde", category: "wedding", color: "#6e4cfa", description: "Boda verde con un elegante flujo de sobre.", badges: ["Sobre", "Pases"], demo: "https://giftclick-david-y-grecia.netlify.app/index.html" },
  { id: "estilo-libro", name: "Estilo Libro", category: "wedding", color: "#6e4cfa", description: "Diseño editorial tipo álbum para una boda elegante.", badges: ["Álbum"], demo: "https://giftclick.github.io/cards" },
  { id: "periodico", name: "Periódico Vintage", category: "wedding", color: "#6e4cfa", description: "Un tema periódico con un aire clásico y especial.", badges: ["Pases", "Álbum"], demo: "https://giftclick.github.io/newspaper/index.html" },
  { id: "perlas-boda", name: "Perlas Boda", category: "wedding", color: "#6e4cfa", description: "Boda clásica de perlas con un toque delicado.", badges: ["Sobre", "Pases"], demo: "https://giftclick.github.io/pearls/sobre" },
  { id: "pink-bday", name: "Pink Birthday", category: "birthday", color: "#ff7864", description: "Cumpleaños rosa con una portada fresca y alegre.", badges: ["Pases"], demo: "https://giftclick.github.io/carmen" },
  { id: "pliplin-zafari", name: "Plinplin Zafari", category: "birthday", color: "#ff7864", description: "Tema safari infantil con una experiencia animada.", badges: ["Pases"], demo: "https://giftclick-emiliano.netlify.app/" },
  { id: "paw-and-plinplin", name: "Paw and Plinplin", category: "birthday", color: "#ff7864", description: "Una invitación infantil animada y divertida.", badges: ["Pases"], demo: "https://giftclick-enzo-issac.netlify.app/" },
  { id: "misa-de-honra", name: "Misa de Honra", category: "birthday", color: "#6e4cfa", description: "Diseño sobrio para homenajes y momentos especiales.", badges: ["Álbum"], demo: "https://giftclick.github.io/misa/" },
  { id: "babyshower-men", name: "Baby Shower Men", category: "babyshower", color: "#13cbb5", description: "Tema infantil animado para anunciar una llegada especial.", badges: ["Pases"], demo: "https://giftclick.github.io/ezio/" },
  { id: "xv-labellaylabestia", name: "XV Bella y Bestia", category: "quince", color: "#d768b1", description: "Una quinceañera inspirada en un cuento clásico.", badges: ["Pases"], demo: "https://giftclick.github.io/ariana" },
  { id: "xv-rapunzel", name: "XV Rapunzel", category: "quince", color: "#d768b1", description: "Un diseño de fantasía con estilo Rapunzel.", badges: ["Pases"], demo: "https://mikaela-xv.netlify.app/" },
  { id: "xv-frogandprincess", name: "XV Frog and Princess", category: "quince", color: "#d768b1", description: "Quinceañera temática con inspiración de cuento.", badges: ["Pases"], demo: "https://giftclick.github.io/frog/" },
  { id: "xv-moon", name: "XV Moon", category: "quince", color: "#d768b1", description: "Una noche de estrellas para una celebración inolvidable.", badges: ["Pases"], demo: "https://giftclick.github.io/dalia" },
  { id: "flores-amarillas", name: "Flores Amarillas", category: "quince", color: "#d768b1", description: "Quinceañera floral, cálida y llena de color.", badges: ["Pases"], demo: "https://giftclick.github.io/estrella" },
  { id: "xv-blue-pink", name: "XV Blue Pink", category: "quince", color: "#d768b1", description: "Una propuesta azul y rosa para tus XV años.", badges: ["Pases"], demo: "https://giftclick.github.io/esperanza/index.html" },
];

const desktopGrid = document.querySelector("#desktop-template-grid");
const mobileGrid = document.querySelector("#mobile-template-grid");
const desktopCategoryTitle = document.querySelector("#desktop-category-title");
const desktopCategorySummary = document.querySelector("#desktop-category-summary");
const desktopCategoryCount = document.querySelector("#desktop-category-count");
const desktopTabs = document.querySelectorAll(".categoryTab");
const mobilePicker = document.querySelector("#mobile-event-picker");
const mobileResults = document.querySelector("#mobile-template-results");
const mobileCategoryIcon = document.querySelector("#mobile-category-icon");
const mobileCategoryTitle = document.querySelector("#mobile-category-title");
const mobileCategoryIntro = document.querySelector("#mobile-category-intro");

function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function templateWhatsappLink(templateName) {
  return buildWhatsappLink(`Hola, quiero comprar la plantilla "${templateName}" del catálogo de GiftClick.`);
}

function templateCard(template) {
  return `
    <article class="publicTemplateCard" style="--template-accent:${template.color}">
      <div class="publicTemplatePreview">
        <div class="publicPhoneFrame" aria-hidden="true">
          <img class="publicTemplateThumb" src="assets/catalog/${template.id}.jpg" alt="" width="390" height="760" loading="lazy">
        </div>
        <span class="publicTemplateType">Vista móvil</span>
      </div>
      <div class="publicTemplateBody">
        <h4>${template.name}</h4>
        <p>${template.description}</p>
        <div class="publicTemplateMeta" aria-label="Características">
          ${template.badges.map((badge) => `<span>${badge}</span>`).join("")}
        </div>
      </div>
      <div class="publicTemplateActions">
        <a class="publicTemplateGhost" href="${template.demo}" target="_blank" rel="noopener">Ver demo</a>
        <a class="publicTemplatePrimary" href="${templateWhatsappLink(template.name)}" target="_blank" rel="noopener" aria-label="Comprar la plantilla ${template.name}">Comprar</a>
      </div>
    </article>`;
}

function templatesFor(category) {
  return templates.filter((template) => template.category === category);
}

function modelCountText(count) {
  return `${count} ${count === 1 ? "modelo disponible" : "modelos disponibles"}`;
}

function renderDesktopCategory(category) {
  const selected = templatesFor(category);
  const meta = categories[category];

  desktopCategoryTitle.textContent = meta.title;
  desktopCategorySummary.textContent = meta.summary;
  desktopCategoryCount.textContent = modelCountText(selected.length);
  desktopGrid.innerHTML = selected.map(templateCard).join("");

  desktopTabs.forEach((tab) => {
    const active = tab.dataset.category === category;
    tab.classList.toggle("categoryTabActive", active);
    tab.setAttribute("aria-selected", String(active));
  });
}

function showMobileCategory(category, scrollIntoView = false) {
  const selected = templatesFor(category);
  const meta = categories[category];

  mobileCategoryIcon.textContent = meta.icon;
  mobileCategoryTitle.textContent = meta.title;
  mobileCategoryIntro.textContent = `Descubre ${modelCountText(selected.length)}.`;
  mobileGrid.innerHTML = selected.map(templateCard).join("");
  mobilePicker.hidden = true;
  mobileResults.hidden = false;

  if (scrollIntoView) {
    window.requestAnimationFrame(() => {
      mobileResults.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

desktopTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderDesktopCategory(tab.dataset.category));
});

document.querySelectorAll("[data-mobile-category]").forEach((choice) => {
  choice.addEventListener("click", () => showMobileCategory(choice.dataset.mobileCategory));
});

document.querySelector("#mobile-change-event").addEventListener("click", () => {
  mobileResults.hidden = true;
  mobilePicker.hidden = false;
  window.requestAnimationFrame(() => {
    mobilePicker.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-service-category]").forEach((tile) => {
  tile.addEventListener("click", () => {
    const category = tile.dataset.serviceCategory;
    renderDesktopCategory(category);
    if (window.matchMedia("(max-width: 640px)").matches) {
      showMobileCategory(category, true);
    } else {
      document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const generalWhatsappLink = buildWhatsappLink("Hola, quiero información para comprar una invitación digital de GiftClick.");
document.querySelectorAll(".whatsapp-general").forEach((link) => {
  link.href = generalWhatsappLink;
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderDesktopCategory("wedding");
