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
    }
  };

  window.GiftClickDemoTemplates = Object.freeze(templates);
})();
