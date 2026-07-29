(function exposeGiftClickCatalog() {
  const whatsappNumber = "51967707229";

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

  function buildWhatsappLink(message) {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function templateWhatsappLink(templateName) {
    return buildWhatsappLink(`Hola, quiero comprar la plantilla "${templateName}" del catálogo de GiftClick.`);
  }

  window.GiftClickCatalog = Object.freeze({
    whatsappNumber,
    categories,
    templates,
    buildWhatsappLink,
    templateWhatsappLink,
  });
})();
