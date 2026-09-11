const {
  categories,
  birthdayGroups,
  templates,
  buildWhatsappLink,
  templateWhatsappLink,
} = window.GiftClickCatalog;

const defaultBirthdayGroup = "birthday-1-5";
const desktopGrid = document.querySelector("#desktop-template-grid");
const mobileGrid = document.querySelector("#mobile-template-grid");
const desktopCategoryTitle = document.querySelector("#desktop-category-title");
const desktopCategorySummary = document.querySelector("#desktop-category-summary");
const desktopCategoryCount = document.querySelector("#desktop-category-count");
const desktopTabs = document.querySelectorAll(".categoryTab");
const desktopBirthdayPicker = document.querySelector("#desktop-birthday-groups");
const desktopBirthdayTabs = document.querySelectorAll("[data-desktop-birthday-group]");
const mobileEventPicker = document.querySelector("#mobile-event-picker");
const mobileBirthdayPicker = document.querySelector("#mobile-birthday-picker");
const mobileResults = document.querySelector("#mobile-template-results");
const mobileCategoryIcon = document.querySelector("#mobile-category-icon");
const mobileCategoryTitle = document.querySelector("#mobile-category-title");
const mobileCategoryIntro = document.querySelector("#mobile-category-intro");
const mobileChangeBirthday = document.querySelector("#mobile-change-birthday");

function modelCountText(count) {
  return `${count} ${count === 1 ? "modelo disponible" : "modelos disponibles"}`;
}

function compactModelCountText(count) {
  return `${count} ${count === 1 ? "modelo" : "modelos"}`;
}

function templateCard(template) {
  const demoParams = new URLSearchParams({
    template: template.id,
    category: template.category,
  });

  if (template.birthdayGroup) {
    demoParams.set("birthdayGroup", template.birthdayGroup);
  }

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
        <a class="publicTemplateGhost" href="demo.html?${demoParams.toString()}">Ver demo</a>
        <a class="publicTemplatePrimary" href="${templateWhatsappLink(template.name)}" target="_blank" rel="noopener" aria-label="Comprar la plantilla ${template.name}">Comprar</a>
      </div>
    </article>`;
}

function templatesFor(category, birthdayGroup = null) {
  return templates.filter((template) => {
    if (template.category !== category) return false;
    if (category === "birthday" && birthdayGroup) {
      return template.birthdayGroup === birthdayGroup;
    }
    return true;
  });
}

function validBirthdayGroup(group) {
  return Object.prototype.hasOwnProperty.call(birthdayGroups, group);
}

function setCatalogAddress(category, birthdayGroup = null) {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("category", category);

  if (category === "birthday" && validBirthdayGroup(birthdayGroup)) {
    nextUrl.searchParams.set("birthdayGroup", birthdayGroup);
  } else {
    nextUrl.searchParams.delete("birthdayGroup");
  }

  nextUrl.hash = "catalogo";
  window.history.replaceState(window.history.state, "", nextUrl);
}

function clearCatalogAddress() {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.delete("category");
  nextUrl.searchParams.delete("birthdayGroup");
  nextUrl.hash = "catalogo";
  window.history.replaceState(window.history.state, "", nextUrl);
}

function renderCounts() {
  Object.keys(categories).forEach((category) => {
    const count = templatesFor(category).length;
    document.querySelectorAll(`[data-category-count="${category}"]`).forEach((target) => {
      target.textContent = target.dataset.countFormat === "models"
        ? compactModelCountText(count)
        : String(count);
    });
  });

  Object.keys(birthdayGroups).forEach((group) => {
    const count = templatesFor("birthday", group).length;
    document.querySelectorAll(`[data-birthday-group-count="${group}"]`).forEach((target) => {
      target.textContent = target.dataset.countFormat === "models"
        ? compactModelCountText(count)
        : String(count);
    });
  });
}

function renderDesktopCategory(category, birthdayGroup = null, updateAddress = false) {
  const isBirthday = category === "birthday";
  const selectedBirthdayGroup = isBirthday && validBirthdayGroup(birthdayGroup)
    ? birthdayGroup
    : defaultBirthdayGroup;
  const selected = templatesFor(category, isBirthday ? selectedBirthdayGroup : null);
  const meta = isBirthday ? birthdayGroups[selectedBirthdayGroup] : categories[category];

  desktopBirthdayPicker.hidden = !isBirthday;
  desktopCategoryTitle.textContent = meta.title;
  desktopCategorySummary.textContent = meta.summary;
  desktopCategoryCount.textContent = modelCountText(selected.length);
  desktopGrid.innerHTML = selected.map(templateCard).join("");

  desktopTabs.forEach((tab) => {
    const active = tab.dataset.category === category;
    tab.classList.toggle("categoryTabActive", active);
    tab.setAttribute("aria-selected", String(active));
  });

  desktopBirthdayTabs.forEach((tab) => {
    const active = tab.dataset.desktopBirthdayGroup === selectedBirthdayGroup;
    tab.classList.toggle("birthdayGroupTabActive", active);
    tab.setAttribute("aria-selected", String(active));
  });

  if (updateAddress) {
    setCatalogAddress(category, isBirthday ? selectedBirthdayGroup : null);
  }
}

function scrollMobileSection(section) {
  window.requestAnimationFrame(() => {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function showMobileEventPicker(scrollIntoView = false, updateAddress = true) {
  mobileResults.hidden = true;
  mobileBirthdayPicker.hidden = true;
  mobileEventPicker.hidden = false;

  if (updateAddress) clearCatalogAddress();
  if (scrollIntoView) scrollMobileSection(mobileEventPicker);
}

function showMobileBirthdayPicker(scrollIntoView = false, updateAddress = true) {
  mobileEventPicker.hidden = true;
  mobileResults.hidden = true;
  mobileBirthdayPicker.hidden = false;

  if (updateAddress) setCatalogAddress("birthday");
  if (scrollIntoView) scrollMobileSection(mobileBirthdayPicker);
}

function showMobileTemplates(category, birthdayGroup = null, scrollIntoView = false, updateAddress = true) {
  const isBirthday = category === "birthday";
  const selectedBirthdayGroup = isBirthday && validBirthdayGroup(birthdayGroup)
    ? birthdayGroup
    : null;

  if (isBirthday && !selectedBirthdayGroup) {
    showMobileBirthdayPicker(scrollIntoView, updateAddress);
    return;
  }

  const selected = templatesFor(category, selectedBirthdayGroup);
  const meta = isBirthday ? birthdayGroups[selectedBirthdayGroup] : categories[category];

  mobileCategoryIcon.textContent = meta.icon;
  mobileCategoryTitle.textContent = meta.title;
  mobileCategoryIntro.textContent = `${meta.summary} ${modelCountText(selected.length)}.`;
  mobileGrid.innerHTML = selected.map(templateCard).join("");
  mobileEventPicker.hidden = true;
  mobileBirthdayPicker.hidden = true;
  mobileResults.hidden = false;
  mobileChangeBirthday.hidden = !isBirthday;

  if (updateAddress) setCatalogAddress(category, selectedBirthdayGroup);
  if (scrollIntoView) scrollMobileSection(mobileResults);
}

desktopTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderDesktopCategory(tab.dataset.category, null, true));
});

desktopBirthdayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderDesktopCategory("birthday", tab.dataset.desktopBirthdayGroup, true);
  });
});

document.querySelectorAll("[data-mobile-category]").forEach((choice) => {
  choice.addEventListener("click", () => {
    const category = choice.dataset.mobileCategory;
    if (category === "birthday") {
      showMobileBirthdayPicker(true);
    } else {
      showMobileTemplates(category, null, true);
    }
  });
});

document.querySelectorAll("[data-mobile-birthday-group]").forEach((choice) => {
  choice.addEventListener("click", () => {
    showMobileTemplates("birthday", choice.dataset.mobileBirthdayGroup, true);
  });
});

mobileChangeBirthday.addEventListener("click", () => showMobileBirthdayPicker(true));
document.querySelector("#mobile-birthday-back").addEventListener("click", () => showMobileEventPicker(true));
document.querySelector("#mobile-change-event").addEventListener("click", () => showMobileEventPicker(true));

document.querySelectorAll("[data-service-category]").forEach((tile) => {
  tile.addEventListener("click", () => {
    const category = tile.dataset.serviceCategory;
    renderDesktopCategory(category, null, true);

    if (window.matchMedia("(max-width: 640px)").matches) {
      if (category === "birthday") {
        showMobileBirthdayPicker(true);
      } else {
        showMobileTemplates(category, null, true);
      }
    } else {
      document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const generalWhatsappLink = buildWhatsappLink("Hola, quiero información para comprar una invitación digital de GiftClick.");
document.querySelectorAll(".whatsapp-general").forEach((link) => {
  link.href = generalWhatsappLink;
});

const requestedParams = new URLSearchParams(window.location.search);
const requestedCategory = requestedParams.get("category");
const requestedBirthdayGroup = requestedParams.get("birthdayGroup");
const initialCategory = Object.prototype.hasOwnProperty.call(categories, requestedCategory)
  ? requestedCategory
  : "wedding";
const initialBirthdayGroup = validBirthdayGroup(requestedBirthdayGroup)
  ? requestedBirthdayGroup
  : defaultBirthdayGroup;

document.querySelector("#year").textContent = new Date().getFullYear();
renderCounts();
renderDesktopCategory(initialCategory, initialBirthdayGroup);

if (requestedCategory && window.matchMedia("(max-width: 640px)").matches) {
  if (initialCategory === "birthday" && !validBirthdayGroup(requestedBirthdayGroup)) {
    showMobileBirthdayPicker(false, false);
  } else {
    showMobileTemplates(initialCategory, initialBirthdayGroup, false, false);
  }
}
