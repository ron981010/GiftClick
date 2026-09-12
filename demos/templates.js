(function exposeGiftClickDemoTemplates() {
  const templates = {
    "mundo-obby": {
      name: "Mundo Obby", family: "obby", category: "Cumpleaños · 7 a 13 años", icon: "◆", age: "10",
      kicker: "Nivel desbloqueado", title: "La aventura de\nMateo", subtitle: "Supera los retos y llega a la fiesta más épica del año.",
      date: "2027-04-17T16:00:00-04:00", dateLabel: "Sábado 17 de abril · 16:00", venue: "Play Zone · La Paz", dress: "Tu color de jugador favorito",
      storyTitle: "Tu misión", story: "Cruza islas flotantes, reúne energía y llega al checkpoint final: una tarde de juegos, pizza y mucha diversión.",
      schedule: [["16:00", "Ingreso de jugadores"], ["16:30", "Reto por equipos"], ["18:00", "Torta y nivel final"]], tags: ["Mundo original", "Pase de jugador", "Confirmación"], code: "MATEO-10"
    },
    "pixel-quest": {
      name: "Pixel Quest", family: "pixel", category: "Cumpleaños · 7 a 13 años", icon: "▦", age: "9",
      kicker: "Nueva misión", title: "Elena's\nPixel Quest", subtitle: "Explora, construye y encuentra el tesoro de cumpleaños.",
      date: "2027-05-08T15:30:00-04:00", dateLabel: "Sábado 8 de mayo · 15:30", venue: "Bosque Encantado · Achumani", dress: "Aventurero casual",
      storyTitle: "Mapa de aventura", story: "Bosque, cueva y mesa de creación forman una búsqueda pixelada diseñada especialmente para Elena y su equipo.",
      schedule: [["15:30", "Aparecer en el mapa"], ["16:00", "Búsqueda del tesoro"], ["17:30", "Banquete pixel"]], tags: ["Pixel art original", "Inventario", "Mapa"], code: "QUEST-09"
    },
    "match-day": {
      name: "Match Day", family: "sport", category: "Cumpleaños · 7 a 13 años", icon: "12", age: "12",
      kicker: "Convocatoria oficial", title: "El gran partido\nde Nicolás", subtitle: "La cancha está lista. Solo falta tu nombre en la alineación.",
      date: "2027-06-12T10:30:00-04:00", dateLabel: "Sábado 12 de junio · 10:30", venue: "Arena Sur · Calacoto", dress: "Camiseta deportiva",
      storyTitle: "Plan de juego", story: "Dos equipos, desafíos de precisión y una celebración de campeón. Trae energía y muchas ganas de jugar.",
      schedule: [["10:30", "Calentamiento"], ["11:00", "Partido central"], ["12:30", "Premiación y torta"]], tags: ["Marcador", "Entrada digital", "Equipo personalizable"], code: "NICOLAS-12"
    },
    "neon-arena": {
      name: "Neon Arena", family: "neon", category: "Cumpleaños · 7 a 13 años", icon: "N", age: "13",
      kicker: "Player one ready", title: "Valentina\nNeon Arena", subtitle: "Una noche arcade entre luces, música y desafíos.",
      date: "2027-07-24T18:30:00-04:00", dateLabel: "Sábado 24 de julio · 18:30", venue: "VR Lab · San Miguel", dress: "Negro + un detalle neón",
      storyTitle: "Entra a la arena", story: "Realidad virtual, estaciones arcade y un ranking amistoso en una experiencia juvenil de energía máxima.",
      schedule: [["18:30", "Login y pulseras"], ["19:00", "Torneo arcade"], ["20:30", "Pizza y premiación"]], tags: ["Arcade", "Playlist", "Ranking"], code: "NEON-13"
    },
    "midnight-gold": {
      name: "Midnight Gold", family: "midnight", category: "Cumpleaños general", icon: "50", age: "50",
      kicker: "Una noche para recordar", title: "Alejandro\nFifty", subtitle: "Medio siglo de historias merece una celebración extraordinaria.",
      date: "2027-08-14T20:00:00-04:00", dateLabel: "Sábado 14 de agosto · 20:00", venue: "Salón Magnolia · La Paz", dress: "Elegante · negro y dorado",
      storyTitle: "El brindis", story: "Familia, amigos y canciones que marcaron el camino se reúnen para celebrar cincuenta años bien vividos.",
      schedule: [["20:00", "Recepción"], ["21:00", "Cena"], ["23:00", "Brindis y baile"]], tags: ["Editorial", "Dress code", "Pase personal"], code: "A50-GOLD"
    },
    "disco-chrome": {
      name: "Disco Chrome", family: "disco", category: "Cumpleaños general", icon: "✦", age: "30",
      kicker: "Shine all night", title: "Camila turns\nthirty", subtitle: "Espejos, destellos y una pista hecha para bailar.",
      date: "2027-09-04T21:00:00-04:00", dateLabel: "Sábado 4 de septiembre · 21:00", venue: "Club Prisma · Sopocachi", dress: "Silver, denim & sparkle",
      storyTitle: "Tonight we glow", story: "Una fiesta disco contemporánea con hits favoritos, cócteles de autor y cámara flash toda la noche.",
      schedule: [["21:00", "Welcome drinks"], ["22:00", "Disco dinner"], ["00:00", "Chrome countdown"]], tags: ["Playlist", "Flash moments", "RSVP"], code: "CAMILA-30"
    },
    "sunset-social": {
      name: "Sunset Social", family: "sunset", category: "Cumpleaños general", icon: "☼", age: "35",
      kicker: "Golden hour gathering", title: "Lucía's\nSunset Social", subtitle: "Cócteles, buena música y el cielo cambiando de color.",
      date: "2027-10-16T17:00:00-04:00", dateLabel: "Sábado 16 de octubre · 17:00", venue: "Terraza Nómada · La Paz", dress: "Resort casual",
      storyTitle: "Nos vemos arriba", story: "Una tarde relajada que empieza con sol, continúa con brindis y termina bailando bajo las estrellas.",
      schedule: [["17:00", "Sunset drinks"], ["18:30", "Mesa compartida"], ["20:00", "DJ set"]], tags: ["Rooftop", "Cócteles", "Recomendaciones"], code: "SUNSET-35"
    },
    "luz-eterna": {
      name: "Luz Eterna", family: "light", category: "Homenajes", icon: "✦", age: "",
      kicker: "En memoria amorosa", title: "Rosa Elena\nVargas", subtitle: "Su luz permanece en cada recuerdo compartido.",
      date: "2027-03-12T18:30:00-04:00", dateLabel: "Viernes 12 de marzo · 18:30", venue: "Parroquia San Miguel · La Paz", dress: "",
      storyTitle: "Siempre con nosotros", story: "La familia Vargas invita a acompañarnos en una misa de recuerdo y gratitud por una vida llena de amor.",
      schedule: [["18:15", "Encuentro de la familia"], ["18:30", "Eucaristía"], ["19:30", "Abrazo y agradecimiento"]], tags: ["Misa", "Calendario", "Ubicación"], code: "LUZ-ETERNA"
    },
    "jardin-del-recuerdo": {
      name: "Jardín del Recuerdo", family: "garden-memory", category: "Homenajes", icon: "❀", age: "",
      kicker: "Recordamos con amor", title: "Teresa\nDelgado", subtitle: "Una vida florece para siempre en quienes la amaron.",
      date: "2027-04-23T16:00:00-04:00", dateLabel: "Viernes 23 de abril · 16:00", venue: "Jardines de Paz · La Paz", dress: "Tonos claros, si lo deseas",
      storyTitle: "Un jardín de memorias", story: "Nos reuniremos para compartir fotografías, anécdotas y la calidez que Teresa sembró en cada persona.",
      schedule: [["16:00", "Bienvenida"], ["16:20", "Palabras y recuerdos"], ["17:10", "Ofrenda floral"]], tags: ["Galería", "Celebración íntima", "Mensaje familiar"], code: "TERESA-RECUERDO"
    },
    "celebracion-de-una-vida": {
      name: "Celebración de una Vida", family: "life-story", category: "Homenajes", icon: "01", age: "",
      kicker: "Capítulos de una gran historia", title: "Jorge\nSalvatierra", subtitle: "1948—2027 · Maestro, padre, amigo y eterno viajero.",
      date: "2027-05-29T11:00:00-04:00", dateLabel: "Sábado 29 de mayo · 11:00", venue: "Casa Cultural · Obrajes", dress: "",
      storyTitle: "Su legado", story: "Celebraremos las rutas, enseñanzas y gestos cotidianos que convirtieron la vida de Jorge en una historia inolvidable.",
      schedule: [["11:00", "Capítulo I · Familia"], ["11:40", "Capítulo II · Amigos"], ["12:30", "Brindis por su legado"]], tags: ["Biografía", "Línea de tiempo", "Galería"], code: "JORGE-VIDA"
    },
    "fe-y-esperanza": {
      name: "Fe y Esperanza", family: "faith", category: "Homenajes", icon: "✝", age: "",
      kicker: "Novenario conmemorativo", title: "Carlos Andrés\nMendoza", subtitle: "Nos une la fe, nos sostiene la esperanza.",
      date: "2027-06-18T19:00:00-04:00", dateLabel: "Viernes 18 de junio · 19:00", venue: "Templo de la Recoleta · La Paz", dress: "",
      storyTitle: "Intención familiar", story: "Acompáñanos en oración y gratitud. Esta invitación admite una fecha principal o el calendario completo del novenario.",
      schedule: [["18:45", "Recepción"], ["19:00", "Santo rosario"], ["19:30", "Misa conmemorativa"]], tags: ["Novenario", "Lectura", "Varias fechas"], code: "FE-ESPERANZA"
    },
    "cielo-de-algodon": {
      name: "Cielo de Algodón", family: "cloud", category: "Baby Shower", icon: "☁", age: "",
      kicker: "A little dream is coming", title: "Baby\nEmilia", subtitle: "Una tarde suave como las nubes para celebrar su llegada.",
      date: "2027-07-10T15:30:00-04:00", dateLabel: "Sábado 10 de julio · 15:30", venue: "Casa Blanca Eventos · La Paz", dress: "Celeste, blanco o lavanda",
      storyTitle: "Te esperamos", story: "María y Andrés quieren compartir contigo la alegría de esperar a Emilia entre juegos, dulces y mucho cariño.",
      schedule: [["15:30", "Bienvenida"], ["16:00", "Juegos y deseos"], ["17:30", "Mesa dulce"]], tags: ["Lista de regalos", "Deseos", "Confirmación"], code: "BABY-EMILIA"
    },
    "jardin-dulce": {
      name: "Jardín Dulce", family: "baby-garden", category: "Baby Shower", icon: "❋", age: "",
      kicker: "Blooming soon", title: "Sofía está\npor llegar", subtitle: "Nuestro jardín está a punto de recibir su flor más bonita.",
      date: "2027-08-21T16:00:00-04:00", dateLabel: "Sábado 21 de agosto · 16:00", venue: "Jardín Magnolia · Achumani", dress: "Pasteles florales",
      storyTitle: "Una tarde en flor", story: "Celebremos a Sofía y acompañemos a sus papás con palabras bonitas, flores y recuerdos para su primer álbum.",
      schedule: [["16:00", "Té de bienvenida"], ["16:40", "Cartas para Sofía"], ["18:00", "Brindis familiar"]], tags: ["Álbum de deseos", "Jardín", "Mesa de té"], code: "SOFIA-BLOOM"
    },
    "safari-bebe": {
      name: "Safari Bebé", family: "safari", category: "Baby Shower", icon: "◉", age: "",
      kicker: "Wild little one", title: "La aventura\nde Bruno", subtitle: "Un pequeño explorador viene en camino.",
      date: "2027-09-18T14:30:00-04:00", dateLabel: "Sábado 18 de septiembre · 14:30", venue: "Club Los Pinos · La Paz", dress: "Safari casual",
      storyTitle: "Expedición en familia", story: "Daniela y Marco te invitan a una tarde de juegos y sorpresas para celebrar la próxima llegada de Bruno.",
      schedule: [["14:30", "Punto de encuentro"], ["15:15", "Juegos de exploradores"], ["17:00", "Pastel safari"]], tags: ["Safari original", "Juegos", "Regalos"], code: "BRUNO-SAFARI"
    },
    "estrellita-lunar": {
      name: "Estrellita Lunar", family: "moon-baby", category: "Baby Shower", icon: "☾", age: "",
      kicker: "To the moon and back", title: "Esperando\na Luna", subtitle: "Ya brilla una nueva estrella en nuestro universo.",
      date: "2027-10-30T17:00:00-04:00", dateLabel: "Sábado 30 de octubre · 17:00", venue: "Salón Orión · La Paz", dress: "Azul noche, crema o dorado",
      storyTitle: "Nuestro pequeño universo", story: "Paola y Sergio quieren contar las estrellas contigo mientras esperan la llegada de su pequeña Luna.",
      schedule: [["17:00", "Bienvenida estelar"], ["17:45", "Órbita de juegos"], ["19:00", "Deseos para Luna"]], tags: ["Celestial", "Deseos", "Cuenta regresiva"], code: "LUNA-STAR"
    },
    "boda-opalo": {
      premium: true, eventType: "wedding", layout: "opal", family: "premium-opal", category: "Bodas", icon: "∞",
      name: "Boda Ópalo", kicker: "Una luz, dos caminos", title: "Alma & Luca", subtitle: "Celebramos el amor que cambia de color con cada mirada.", signature: "AL",
      date: "2027-11-20T16:00:00-04:00", dateLabel: "20 · 11 · 2027", venue: "Casa Origen · Valle de La Paz", dress: "Formal en tonos luminosos",
      image: "../assets/demos/boda-opalo-hero.jpg", storyTitle: "Nuestro sí, a plena luz", story: "Una ceremonia íntima entre reflejos suaves, flores escultóricas y las personas que han dado forma a nuestra historia.",
      featureTitle: "La experiencia", featureText: "Ceremonia, cena de autor y una pista bajo instalaciones de luz. La invitación acompaña cada momento con información clara.",
      schedule: [["16:00", "Ceremonia"], ["17:30", "Cóctel opalino"], ["19:00", "Cena y celebración"]], tags: ["RSVP", "Pases", "Mesa de regalos"], code: "ALMA-LUCA"
    },
    "boda-speakeasy": {
      premium: true, eventType: "wedding", layout: "speakeasy", family: "premium-speakeasy", category: "Bodas", icon: "S",
      name: "Boda Speakeasy", kicker: "Admit two · one night only", title: "Renata / Simón", subtitle: "La contraseña es amor. La noche es nuestra.", signature: "R+S",
      date: "2027-12-04T20:30:00-04:00", dateLabel: "04 · 12 · 2027", venue: "Salón 1926 · Sopocachi", dress: "Black tie · acento borgoña",
      image: "../assets/demos/boda-speakeasy-hero.jpg", storyTitle: "Una noche sin guion", story: "Velvet, jazz y una celebración que empieza detrás de una puerta discreta. Ven listo para brindar y bailar hasta tarde.",
      featureTitle: "La contraseña", featureText: "Tu pase personal revela el acceso y la mesa. Una experiencia nocturna inspirada en hospitalidad, no en una invitación clásica.",
      schedule: [["20:30", "Puertas secretas"], ["21:30", "Cena & jazz"], ["23:30", "Midnight club"]], tags: ["Pase secreto", "Dress code", "Playlist"], code: "ROJO-1926"
    },
    "boda-destino-lago": {
      premium: true, eventType: "wedding", layout: "travel", family: "premium-travel", category: "Bodas", icon: "⌁",
      name: "Boda Destino Lago", kicker: "Titicaca · fin de semana", title: "Isabel & Tomás", subtitle: "Dos días, un lago inmenso y nuestra gente favorita.", signature: "IT",
      date: "2028-01-22T15:30:00-04:00", dateLabel: "21—23 · 01 · 2028", venue: "Isla del Sol · Lago Titicaca", dress: "Elegancia natural · abrigo al atardecer",
      image: "../assets/demos/boda-destino-lago-hero.jpg", storyTitle: "Un viaje para celebrar", story: "Diseñamos un fin de semana con bienvenida, ceremonia y desayuno de despedida. Aquí encontrarás transporte, hospedaje y horarios.",
      featureTitle: "Tu guía de viaje", featureText: "La invitación funciona como un concierge móvil: ruta, equipaje sugerido, clima, agenda y contacto de apoyo en un solo lugar.",
      schedule: [["Viernes", "Bienvenida frente al lago"], ["Sábado", "Ceremonia al atardecer"], ["Domingo", "Desayuno de despedida"]], tags: ["Itinerario", "Hospedaje", "Transporte"], code: "LAGO-IT"
    },
    "boda-textil-andino": {
      premium: true, eventType: "wedding", layout: "textile", family: "premium-textile", category: "Bodas", icon: "◇",
      name: "Boda Textil Contemporánea", kicker: "Raíz, materia y encuentro", title: "Mayra & Julián", subtitle: "Unimos nuestras historias entre fibras, tierra y luz.", signature: "MJ",
      date: "2028-02-19T16:30:00-04:00", dateLabel: "19 · 02 · 2028", venue: "Museo de Arte · La Paz", dress: "Formal contemporáneo",
      image: "../assets/demos/boda-textil-andino-hero.jpg", storyTitle: "Lo que tejemos juntos", story: "Una identidad contemporánea inspirada respetuosamente en la materialidad andina, con formas originales y protagonismo de la pareja.",
      featureTitle: "Materia viva", featureText: "La navegación se construye como una exposición: manifiesto, ceremonia, piezas de la historia y una guía práctica para invitados.",
      schedule: [["16:30", "Sala I · Ceremonia"], ["18:00", "Patio · Cóctel"], ["20:00", "Sala II · Cena"]], tags: ["Identidad original", "Galería", "RSVP"], code: "TEJIDO-MJ"
    },
    "boda-amor-documental": {
      premium: true, eventType: "wedding", layout: "documentary", family: "premium-documentary", category: "Bodas", icon: "35",
      name: "Amor Documental", kicker: "Sin poses · con memoria", title: "Clara + Andrés", subtitle: "Lo nuestro siempre se vio mejor en movimiento.", signature: "C+A",
      date: "2028-03-11T12:00:00-04:00", dateLabel: "11 · 03 · 2028", venue: "Palacio Portales · Cochabamba", dress: "Cómodo, elegante y tú mismo",
      image: "../assets/demos/boda-amor-documental-hero.jpg", storyTitle: "Una historia que se siente real", story: "Fotos espontáneas, notas de voz y pequeñas escenas cuentan quiénes somos antes de revelar los datos del gran día.",
      featureTitle: "Nuestro archivo", featureText: "La composición toma el lenguaje del carrete analógico y el scrapbook, pero mantiene accesibles el mapa, los pases y la confirmación.",
      schedule: [["12:00", "Sí, quiero"], ["13:00", "Almuerzo largo"], ["16:00", "Baile al sol"]], tags: ["Historia", "Álbum vivo", "Audio opcional"], code: "FRAME-CA"
    },
    "xv-editorial-cobalto": {
      premium: true, eventType: "quince", layout: "runway", family: "premium-cobalt", category: "XV años", icon: "XV",
      name: "XV Editorial Cobalto", kicker: "The blue issue · 2027", title: "Mariana XV", subtitle: "Quince años. Una voz propia. Una noche en azul.", signature: "M",
      date: "2027-11-27T19:00:00-04:00", dateLabel: "27 · 11 · 2027", venue: "Galería Uno · Santa Cruz", dress: "Formal · azul reservado para Mariana",
      image: "../assets/demos/xv-editorial-cobalto-hero.jpg", storyTitle: "Mi primera portada", story: "Una invitación de moda que presenta a Mariana desde su personalidad, sus sueños y su estilo, sin recurrir a un cuento conocido.",
      featureTitle: "La edición de la noche", featureText: "Portada, carta familiar, sesión editorial, programa y pase VIP se leen como una revista móvil de colección.",
      schedule: [["19:00", "Red carpet"], ["20:00", "Vals editorial"], ["22:00", "After party"]], tags: ["Portada", "Dress code", "Pase VIP"], code: "BLUE-M15"
    },
    "xv-jardin-nocturno": {
      premium: true, eventType: "quince", layout: "garden", family: "premium-nightgarden", category: "XV años", icon: "✦",
      name: "XV Jardín Nocturno", kicker: "Florece una nueva historia", title: "Antonia", subtitle: "Cuando caiga la noche, el jardín abrirá sus puertas.", signature: "A15",
      date: "2028-01-15T18:30:00-04:00", dateLabel: "15 · 01 · 2028", venue: "Invernadero Botánico · La Paz", dress: "Formal · tonos joya",
      image: "../assets/demos/xv-jardin-nocturno-hero.jpg", storyTitle: "El portal de Antonia", story: "La experiencia atraviesa un jardín cinematográfico y revela recuerdos, deseos y una celebración bajo la luna.",
      featureTitle: "Capítulos en flor", featureText: "Cada sección florece como un capítulo: familia, sueños, ceremonia, fiesta y mensajes para la quinceañera.",
      schedule: [["18:30", "Se abre el jardín"], ["20:00", "Ceremonia de luz"], ["21:30", "Baile bajo la luna"]], tags: ["Portal", "Deseos", "Galería"], code: "GARDEN-A15"
    },
    "xv-pop-cromo": {
      premium: true, eventType: "quince", layout: "pop", family: "premium-pop", category: "XV años", icon: "POP",
      name: "XV Pop Cromo", kicker: "Volume 15 · play", title: "Vale en estéreo", subtitle: "Mi era, mi playlist, mi fiesta.", signature: "V15",
      date: "2028-02-05T20:00:00-04:00", dateLabel: "05 · 02 · 2028", venue: "Prisma Hall · La Paz", dress: "Silver, lilac & pop",
      image: "../assets/demos/xv-pop-cromo-hero.jpg", storyTitle: "Press play", story: "Un universo musical cromado que combina portada de álbum, setlist de momentos y energía de pista sin copiar a ningún artista.",
      featureTitle: "La playlist de Vale", featureText: "El recorrido se comporta como un reproductor visual: intro, favoritos, cuenta regresiva, ubicación, dress code y confirmación.",
      schedule: [["20:00", "Track 01 · Bienvenida"], ["21:00", "Track 02 · Vals"], ["22:30", "Track 03 · Dance set"]], tags: ["Playlist", "Hashtag", "RSVP"], code: "PLAY-V15"
    },
    "xv-opera-roja": {
      premium: true, eventType: "quince", layout: "opera", family: "premium-opera", category: "XV años", icon: "III",
      name: "XV Ópera Roja", kicker: "Esta noche en tres actos", title: "Luciana", subtitle: "El telón se abre para una historia que recién comienza.", signature: "LXV",
      date: "2028-03-25T19:30:00-04:00", dateLabel: "25 · 03 · 2028", venue: "Teatro Municipal · La Paz", dress: "Gala · rojo reservado para Luciana",
      image: "../assets/demos/xv-opera-roja-hero.jpg", storyTitle: "Acto I · El comienzo", story: "Una celebración teatral narrada en tres actos: familia y gratitud, ceremonia y una gran escena final en la pista.",
      featureTitle: "El programa", featureText: "La invitación reemplaza el flujo de princesa por un libreto dramático con entradas, actos, reparto familiar y pase de platea.",
      schedule: [["19:30", "Acto I · Recepción"], ["20:30", "Acto II · Ceremonia"], ["22:00", "Acto III · Celebración"]], tags: ["Programa", "Pase de platea", "Dress code"], code: "PLATEA-LXV"
    },
    "xv-raices-modernas": {
      premium: true, eventType: "quince", layout: "heritage", family: "premium-roots", category: "XV años", icon: "15",
      name: "XV Raíces Modernas", kicker: "De dónde vengo · hacia dónde voy", title: "Amaya", subtitle: "Quince años para honrar mis raíces y diseñar mi futuro.", signature: "AM",
      date: "2028-04-22T17:00:00-04:00", dateLabel: "22 · 04 · 2028", venue: "Patio de Piedra · Sucre", dress: "Formal en tonos tierra",
      image: "../assets/demos/xv-raices-modernas-hero.jpg", storyTitle: "Mi identidad, mi celebración", story: "Una propuesta boliviana contemporánea con texturas originales, flores de altura y un relato personal, sin convertir la cultura en decorado.",
      featureTitle: "Raíz y futuro", featureText: "La estructura une carta familiar, símbolo personal, galería, ceremonia y muro de deseos para crear un recuerdo digital duradero.",
      schedule: [["17:00", "Encuentro familiar"], ["18:00", "Ceremonia de gratitud"], ["20:00", "Fiesta y futuro"]], tags: ["Carta familiar", "Muro de deseos", "Galería"], code: "AMAYA-15"
    }
  };

  window.GiftClickDemoTemplates = Object.freeze(templates);
})();
