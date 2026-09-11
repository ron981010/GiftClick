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
    { id: "flores-celestes", name: "Flores Celestes", category: "wedding", color: "#6e4cfa", description: "Estilo romántico floral con portada sobre.", badges: ["Sobre", "Pases"], demo: "https://ron981010.github.io/jherifer-selene/sobre.html" },
    { id: "boda-marfil-dorada", name: "Boda Marfil Dorada", category: "wedding", color: "#b89a67", description: "Sobre minimalista en tonos marfil con elegantes detalles dorados.", badges: ["Sobre", "Confirmación"], demo: "https://noe-jovita.vercel.app" },
    { id: "sobre-verde", name: "Sobre Verde", category: "wedding", color: "#6e4cfa", description: "Boda verde con un elegante flujo de sobre.", badges: ["Sobre", "Pases"], demo: "https://ron981010.github.io/david-grecia/index.html" },
    { id: "estilo-libro", name: "Estilo Libro", category: "wedding", color: "#6e4cfa", description: "Diseño editorial tipo álbum para una boda elegante.", badges: ["Álbum"], demo: "https://ron981010.github.io/cards/index.html" },
    { id: "periodico", name: "Periódico Vintage", category: "wedding", color: "#6e4cfa", description: "Un tema periódico con un aire clásico y especial.", badges: ["Pases", "Álbum"], demo: "https://giftclick.github.io/flower/" },
    { id: "perlas-boda", name: "Perlas Boda", category: "wedding", color: "#6e4cfa", description: "Boda clásica de perlas con un toque delicado.", badges: ["Sobre", "Pases"], demo: "https://ron981010.github.io/pearls/sobre.html" },
    { id: "boda-verde-olivo", name: "Boda Verde Olivo", category: "wedding", color: "#6f7842", description: "Boda clásica en verde olivo con una presentación elegante.", badges: ["Sobre", "Pases"], demo: "https://dan-y-shirley.vercel.app" },
    { id: "pink-bday", name: "Pink Birthday", category: "birthday", color: "#ff7864", description: "Cumpleaños rosa con una portada fresca y alegre.", badges: ["Pases"], demo: "https://ron981010.github.io/carmen/index.html" },
    { id: "pliplin-zafari", name: "Plinplin Zafari", category: "birthday", color: "#ff7864", description: "Tema safari infantil con una experiencia animada.", badges: ["Pases"], demo: "https://ron981010.github.io/emiliano/index.html" },
    { id: "paw-and-plinplin", name: "Paw and Plinplin", category: "birthday", color: "#ff7864", description: "Una invitación infantil animada y divertida.", badges: ["Pases"], demo: "https://ron981010.github.io/enzo-issac/index.html" },
    { id: "plim-plim-rosado-vivo", name: "Plim Plim Rosado", category: "birthday", color: "#ec6fa8", description: "Tema infantil rosado con personajes, video y colores vibrantes.", badges: ["Video", "Confirmación"], demo: "https://aliah-crystal.vercel.app" },
    { id: "plim-plim-rosado-pastel", name: "Plim Plim Rosado Pastel", category: "birthday", color: "#d5a0b8", description: "Una variante suave en rosa pastel para el primer añito.", badges: ["Música", "Confirmación"], demo: "https://plim-plim-rosado-pastel.vercel.app" },
    { id: "slappy-escalofrios", name: "Slappy / Escalofríos", category: "birthday", color: "#78d928", description: "Cumpleaños infantil de misterio inspirado en Slappy.", badges: ["Música", "Confirmación"], demo: "https://invitacion-sebastian-slappy.vercel.app" },
    { id: "cumpleanos-50-tigre", name: "Cumpleaños 50 Tigre", category: "birthday", color: "#c5a13b", description: "Celebración adulta retro y elegante con emblema de tigre.", badges: ["Sobre", "Pases"], demo: "https://jose-galeno-50.vercel.app" },
    { id: "misa-de-honra", name: "Misa de Honra", category: "birthday", color: "#6e4cfa", description: "Diseño sobrio para homenajes y momentos especiales.", badges: ["Álbum"], demo: "https://ron981010.github.io/misa/index.html" },
    { id: "babyshower-men", name: "Baby Shower Men", category: "babyshower", color: "#13cbb5", description: "Tema infantil animado para anunciar una llegada especial.", badges: ["Pases"], demo: "https://ron981010.github.io/ezio/index.html" },
    { id: "xv-labellaylabestia", name: "XV Bella y Bestia", category: "quince", color: "#d768b1", description: "Una quinceañera inspirada en un cuento clásico.", badges: ["Pases"], demo: "https://ron981010.github.io/ariana/index.html" },
    { id: "xv-rapunzel", name: "XV Rapunzel", category: "quince", color: "#d768b1", description: "Un diseño de fantasía con estilo Rapunzel.", badges: ["Pases"], demo: "https://ron981010.github.io/mikaela/index.html" },
    { id: "xv-frogandprincess", name: "XV Frog and Princess", category: "quince", color: "#d768b1", description: "Quinceañera temática con inspiración de cuento.", badges: ["Pases"], demo: "https://ron981010.github.io/frog/index.html" },
    { id: "xv-moon", name: "XV Moon", category: "quince", color: "#d768b1", description: "Una noche de estrellas para una celebración inolvidable.", badges: ["Pases"], demo: "https://ron981010.github.io/dalia/index.html" },
    { id: "flores-amarillas", name: "Flores Amarillas", category: "quince", color: "#d768b1", description: "Quinceañera floral, cálida y llena de color.", badges: ["Pases"], demo: "https://ron981010.github.io/estrella/index.html" },
    { id: "xv-blue-pink", name: "XV Blue Pink", category: "quince", color: "#d768b1", description: "Una propuesta azul y rosa para tus XV años.", badges: ["Pases"], demo: "https://ron981010.github.io/esperanza/index.html" },
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
