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
      summary: "Diseños para cada etapa, desde los primeros años hasta celebraciones adultas.",
      icon: "🎂",
    },
    tribute: {
      title: "Homenajes",
      summary: "Invitaciones respetuosas para misas, aniversarios y celebraciones de vida.",
      icon: "🕊️",
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

  const birthdayGroups = {
    "birthday-1-5": {
      title: "Cumpleaños infantiles",
      shortTitle: "1 a 5 años",
      summary: "Diseños tiernos, coloridos y animados para sus primeros cumpleaños.",
      icon: "🎈",
    },
    "birthday-7-13": {
      title: "Cumpleaños de 7 a 13 años",
      shortTitle: "7 a 13 años",
      summary: "Aventuras, juegos y temáticas con más personalidad para esta etapa.",
      icon: "🎮",
    },
    "birthday-general": {
      title: "Cumpleaños general",
      shortTitle: "General",
      summary: "Celebraciones versátiles y elegantes para jóvenes y adultos.",
      icon: "✨",
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
    { id: "boda-opalo", name: "Boda Ópalo", category: "wedding", color: "#8eacc0", description: "Editorial luminosa con reflejos opalinos y una composición arquitectónica.", badges: ["RSVP", "Pases"], demo: "https://ron981010.github.io/GiftClick/demos/?template=boda-opalo" },
    { id: "boda-speakeasy", name: "Boda Speakeasy", category: "wedding", color: "#781f28", description: "Noche cinematográfica con acceso secreto, terciopelo y hospitalidad de autor.", badges: ["Pase secreto", "Playlist"], demo: "https://ron981010.github.io/GiftClick/demos/?template=boda-speakeasy" },
    { id: "boda-destino-lago", name: "Boda Destino Lago", category: "wedding", color: "#477e8c", description: "Guía de fin de semana frente al lago con transporte, hospedaje e itinerario.", badges: ["Itinerario", "Hospedaje"], demo: "https://ron981010.github.io/GiftClick/demos/?template=boda-destino-lago" },
    { id: "boda-textil-andino", name: "Boda Textil Contemporánea", category: "wedding", color: "#8b3028", description: "Identidad contemporánea inspirada en fibras y geometría andina original.", badges: ["Galería", "RSVP"], demo: "https://ron981010.github.io/GiftClick/demos/?template=boda-textil-andino" },
    { id: "boda-amor-documental", name: "Amor Documental", category: "wedding", color: "#c84836", description: "Relato espontáneo con lenguaje de película analógica y archivo personal.", badges: ["Álbum vivo", "Audio"], demo: "https://ron981010.github.io/GiftClick/demos/?template=boda-amor-documental" },
    { id: "pink-bday", name: "Pink Birthday", category: "birthday", birthdayGroup: "birthday-1-5", color: "#ff7864", description: "Cumpleaños rosa con una portada fresca y alegre.", badges: ["Pases"], demo: "https://ron981010.github.io/carmen/index.html" },
    { id: "pliplin-zafari", name: "Plinplin Zafari", category: "birthday", birthdayGroup: "birthday-1-5", color: "#ff7864", description: "Tema safari infantil con una experiencia animada.", badges: ["Pases"], demo: "https://ron981010.github.io/emiliano/index.html" },
    { id: "paw-and-plinplin", name: "Paw and Plinplin", category: "birthday", birthdayGroup: "birthday-1-5", color: "#ff7864", description: "Una invitación infantil animada y divertida.", badges: ["Pases"], demo: "https://ron981010.github.io/enzo-issac/index.html" },
    { id: "plim-plim-rosado-vivo", name: "Plim Plim Rosado", category: "birthday", birthdayGroup: "birthday-1-5", color: "#ec6fa8", description: "Tema infantil rosado con personajes, video y colores vibrantes.", badges: ["Video", "Confirmación"], demo: "https://aliah-crystal.vercel.app" },
    { id: "plim-plim-rosado-pastel", name: "Plim Plim Rosado Pastel", category: "birthday", birthdayGroup: "birthday-1-5", color: "#d5a0b8", description: "Una variante suave en rosa pastel para el primer añito.", badges: ["Música", "Confirmación"], demo: "https://plim-plim-rosado-pastel.vercel.app" },
    { id: "slappy-escalofrios", name: "Slappy / Escalofríos", category: "birthday", birthdayGroup: "birthday-7-13", color: "#78d928", description: "Cumpleaños de misterio inspirado en Slappy para niñas y niños de 7 a 13 años.", badges: ["Música", "Confirmación"], demo: "https://invitacion-sebastian-slappy.vercel.app" },
    { id: "mundo-obby", name: "Mundo Obby", category: "birthday", birthdayGroup: "birthday-7-13", color: "#ff5e52", description: "Aventura original de bloques, retos y checkpoints para una fiesta gamer.", badges: ["Pase", "Cuenta regresiva"], demo: "https://ron981010.github.io/GiftClick/demos/?template=mundo-obby" },
    { id: "pixel-quest", name: "Pixel Quest", category: "birthday", birthdayGroup: "birthday-7-13", color: "#2f7d4b", description: "Una búsqueda pixelada con mapa, inventario y tesoro de cumpleaños.", badges: ["Mapa", "Confirmación"], demo: "https://ron981010.github.io/GiftClick/demos/?template=pixel-quest" },
    { id: "match-day", name: "Match Day", category: "birthday", birthdayGroup: "birthday-7-13", color: "#16a35f", description: "Convocatoria deportiva con marcador, alineación y entrada personalizada.", badges: ["Pase", "Cronograma"], demo: "https://ron981010.github.io/GiftClick/demos/?template=match-day" },
    { id: "neon-arena", name: "Neon Arena", category: "birthday", birthdayGroup: "birthday-7-13", color: "#e42cff", description: "Fiesta juvenil arcade con luces neón, ranking y estética tecnológica.", badges: ["Playlist", "Confirmación"], demo: "https://ron981010.github.io/GiftClick/demos/?template=neon-arena" },
    { id: "cumpleanos-50-hugo", name: "Cumpleaños 50 Hugo", category: "birthday", birthdayGroup: "birthday-general", color: "#273752", description: "Celebración adulta editorial con sobre, música y confirmación.", badges: ["Sobre", "Confirmación"], demo: "https://giftclick.github.io/hugo-50/" },
    { id: "cumpleanos-50-tigre", name: "Cumpleaños 50 Tigre", category: "birthday", birthdayGroup: "birthday-general", color: "#c5a13b", description: "Celebración adulta retro y elegante con emblema de tigre.", badges: ["Sobre", "Pases"], demo: "https://jose-galeno-50.vercel.app" },
    { id: "midnight-gold", name: "Midnight Gold", category: "birthday", birthdayGroup: "birthday-general", color: "#9d7734", description: "Celebración adulta nocturna con composición editorial en negro y dorado.", badges: ["Dress code", "Pase"], demo: "https://ron981010.github.io/GiftClick/demos/?template=midnight-gold" },
    { id: "disco-chrome", name: "Disco Chrome", category: "birthday", birthdayGroup: "birthday-general", color: "#e31880", description: "Fiesta disco contemporánea con cromados, destellos y playlist.", badges: ["Playlist", "Confirmación"], demo: "https://ron981010.github.io/GiftClick/demos/?template=disco-chrome" },
    { id: "sunset-social", name: "Sunset Social", category: "birthday", birthdayGroup: "birthday-general", color: "#e55036", description: "Encuentro relajado de rooftop con cócteles y colores de atardecer.", badges: ["Ubicación", "Dress code"], demo: "https://ron981010.github.io/GiftClick/demos/?template=sunset-social" },
    { id: "misa-de-honra", name: "Misa de Honra", category: "tribute", color: "#7a7591", description: "Diseño sobrio para conmemorar y compartir un momento de recuerdo.", badges: ["Álbum"], demo: "https://ron981010.github.io/misa/index.html" },
    { id: "luz-eterna", name: "Luz Eterna", category: "tribute", color: "#b49360", description: "Homenaje minimalista de luz suave para una misa o aniversario.", badges: ["Calendario", "Ubicación"], demo: "https://ron981010.github.io/GiftClick/demos/?template=luz-eterna" },
    { id: "jardin-del-recuerdo", name: "Jardín del Recuerdo", category: "tribute", color: "#718d70", description: "Celebración cálida entre flores, fotografías y memorias familiares.", badges: ["Galería", "Mensaje"], demo: "https://ron981010.github.io/GiftClick/demos/?template=jardin-del-recuerdo" },
    { id: "celebracion-de-una-vida", name: "Celebración de una Vida", category: "tribute", color: "#a04634", description: "Relato biográfico editorial con capítulos, legado y línea de tiempo.", badges: ["Biografía", "Galería"], demo: "https://ron981010.github.io/GiftClick/demos/?template=celebracion-de-una-vida" },
    { id: "fe-y-esperanza", name: "Fe y Esperanza", category: "tribute", color: "#465a94", description: "Diseño solemne para rosarios, novenarios y encuentros de oración.", badges: ["Varias fechas", "Lectura"], demo: "https://ron981010.github.io/GiftClick/demos/?template=fe-y-esperanza" },
    { id: "babyshower-men", name: "Baby Shower Men", category: "babyshower", color: "#13cbb5", description: "Tema infantil animado para anunciar una llegada especial.", badges: ["Pases"], demo: "https://ron981010.github.io/ezio/index.html" },
    { id: "cielo-de-algodon", name: "Cielo de Algodón", category: "babyshower", color: "#88abd7", description: "Nubes suaves y tonos celestes para celebrar una dulce espera.", badges: ["Lista de regalos", "Deseos"], demo: "https://ron981010.github.io/GiftClick/demos/?template=cielo-de-algodon" },
    { id: "jardin-dulce", name: "Jardín Dulce", category: "babyshower", color: "#ce7e88", description: "Baby shower floral con cartas para el bebé y una mesa de té.", badges: ["Álbum", "Confirmación"], demo: "https://ron981010.github.io/GiftClick/demos/?template=jardin-dulce" },
    { id: "safari-bebe", name: "Safari Bebé", category: "babyshower", color: "#d37c3d", description: "Una expedición familiar con juegos y estética safari original.", badges: ["Juegos", "Regalos"], demo: "https://ron981010.github.io/GiftClick/demos/?template=safari-bebe" },
    { id: "estrellita-lunar", name: "Estrellita Lunar", category: "babyshower", color: "#536aaa", description: "Universo nocturno de lunas y estrellas para celebrar la llegada del bebé.", badges: ["Deseos", "Cuenta regresiva"], demo: "https://ron981010.github.io/GiftClick/demos/?template=estrellita-lunar" },
    { id: "xv-labellaylabestia", name: "XV Bella y Bestia", category: "quince", color: "#d768b1", description: "Una quinceañera inspirada en un cuento clásico.", badges: ["Pases"], demo: "https://ron981010.github.io/ariana/index.html" },
    { id: "xv-rapunzel", name: "XV Rapunzel", category: "quince", color: "#d768b1", description: "Un diseño de fantasía con estilo Rapunzel.", badges: ["Pases"], demo: "https://ron981010.github.io/mikaela/index.html" },
    { id: "xv-frogandprincess", name: "XV Frog and Princess", category: "quince", color: "#d768b1", description: "Quinceañera temática con inspiración de cuento.", badges: ["Pases"], demo: "https://ron981010.github.io/frog/index.html" },
    { id: "xv-moon", name: "XV Moon", category: "quince", color: "#d768b1", description: "Una noche de estrellas para una celebración inolvidable.", badges: ["Pases"], demo: "https://ron981010.github.io/dalia/index.html" },
    { id: "flores-amarillas", name: "Flores Amarillas", category: "quince", color: "#d768b1", description: "Quinceañera floral, cálida y llena de color.", badges: ["Pases"], demo: "https://ron981010.github.io/estrella/index.html" },
    { id: "xv-blue-pink", name: "XV Blue Pink", category: "quince", color: "#d768b1", description: "Una propuesta azul y rosa para tus XV años.", badges: ["Pases"], demo: "https://ron981010.github.io/esperanza/index.html" },
    { id: "xv-editorial-cobalto", name: "XV Editorial Cobalto", category: "quince", color: "#083fac", description: "Portada de moda en azul cobalto para una quinceañera con voz propia.", badges: ["Portada", "Pase VIP"], demo: "https://ron981010.github.io/GiftClick/demos/?template=xv-editorial-cobalto" },
    { id: "xv-jardin-nocturno", name: "XV Jardín Nocturno", category: "quince", color: "#5f765d", description: "Portal botánico cinematográfico con capítulos, recuerdos y deseos.", badges: ["Portal", "Galería"], demo: "https://ron981010.github.io/GiftClick/demos/?template=xv-jardin-nocturno" },
    { id: "xv-pop-cromo", name: "XV Pop Cromo", category: "quince", color: "#e92b9a", description: "Universo musical cromado con estructura de álbum y setlist de la noche.", badges: ["Playlist", "Hashtag"], demo: "https://ron981010.github.io/GiftClick/demos/?template=xv-pop-cromo" },
    { id: "xv-opera-roja", name: "XV Ópera Roja", category: "quince", color: "#8d101d", description: "Celebración teatral narrada en tres actos con pase de platea.", badges: ["Programa", "Pase"], demo: "https://ron981010.github.io/GiftClick/demos/?template=xv-opera-roja" },
    { id: "xv-raices-modernas", name: "XV Raíces Modernas", category: "quince", color: "#9c3f2f", description: "Relato boliviano contemporáneo que une identidad, familia y futuro.", badges: ["Carta", "Deseos"], demo: "https://ron981010.github.io/GiftClick/demos/?template=xv-raices-modernas" },
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
    birthdayGroups,
    templates,
    buildWhatsappLink,
    templateWhatsappLink,
  });
})();
