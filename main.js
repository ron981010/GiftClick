const {
  categories,
  templates,
  buildWhatsappLink,
  templateWhatsappLink,
} = window.GiftClickCatalog;

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

function templateCard(template) {
  const demoUrl = `demo.html?template=${encodeURIComponent(template.id)}&category=${encodeURIComponent(template.category)}`;

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
        <a class="publicTemplateGhost" href="${demoUrl}">Ver demo</a>
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

const requestedCategory = new URLSearchParams(window.location.search).get("category");
const initialCategory = Object.prototype.hasOwnProperty.call(categories, requestedCategory)
  ? requestedCategory
  : "wedding";

document.querySelector("#year").textContent = new Date().getFullYear();
renderDesktopCategory(initialCategory);

if (requestedCategory && window.matchMedia("(max-width: 640px)").matches) {
  showMobileCategory(initialCategory);
}
