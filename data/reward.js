const REWARD_LIST = [
    {
        title:"Cena con Descuento",
        roll: [1]
    },
    {
        title:"Entretenimiento gratuito",
        roll: [2]
    },
    {
        title:"Obervador/a",
        roll: [3]
    },
    {
        title:"Héroe de la oficina",
        roll: [4]
    },
    {
        title:"Haragán/Holgazana Profesional",
        roll: [5]
    },
    {
        title:"Metabolismo Rápido",
        roll: [6]
    },
    {
        title:"Limpiador Rápido",
        roll: [7]
    },
    {
        title:"Anfitrión/a Legendario/a",
        roll: [8]
    },
    {
        title:"Multi-Tarea",
        roll: [9]
    },
    {
        title:"Jamás Aburrido/a",
        roll: [10]
    },
    {
        title:"Vejiga de acero",
        roll: [11]
    },
    {
        title:"Oportunista",
        roll: [12]
    },
    {
        title:"Buscador de Ofertas en Libros",
        roll: [13]
    },
    {
        title:"Cambiar el Deseo de Toda una Vida",
        roll: [14]
    },
    {
        title:"Tratamiento para la Fertilidad",
        roll: [15]
    },
    {
        title:"Siempre-Limpio/a",
        roll: [16]
    },
    {
        title:"Aprende Rápido",
        roll: [17]
    },
    {
        title:"Vacacionista",
        roll: [18]
    },
    {
        title:"Regateador",
        roll: [19]
    },
    {
        title:"Atractivo",
        roll: [20]
    },
    {
        title:"Amistad de Larga Distancia",
        roll: [21]
    },
    {
        title:"Super Rodillas Verdes",
        roll: [22]
    },
    {
        title:"Crisis de la Edad Madura",
        roll: [23]
    },
    {
        title:"Con Muy Poca Hambre",
        roll: [24]
    },
    {
        title:"Borrón y cuenta nueva",
        roll: [25]
    },
    {
        title:"Escultor Corporal",
        roll: [26]
    },
    {
        title:"Autor/a Aclamado/a",
        roll: [27]
    },
    {
        title:"Extra Creativo/a",
        roll: [28]
    },
    {
        title:"Irreprochable",
        roll: [29]
    },
    {
        title:"Ayudante de Colecciones",
        roll: [30]
    },
    {
        title:"Reproductor de Comida",
        roll: [31]
    },
    {
        title:"Administrador de Animotrones",
        roll: [32]
    },
    {
        title:"Plataforma de Teletransportación",
        roll: [33]
    },
    {
        title:"Inapropiado, pero de Buena Manera",
        roll: [34]
    },
    {
        title:"Del Jet Set",
        roll: [35]
    },
    {
        title:"Vista Hermosa",
        roll: [36]
    },
    {
        title:"Cambio de gustos",
        roll: [37]
    },
    {
        title:"Viajero Preparado",
        roll: [37]
    },
    {
        title:"Sin Celos",
        roll: [38]
    },
    {
        title:"Corazón de piedra",
        roll: [39]
    },
    {
        title:"No más facturas, nunca",
        roll: [40]
    },
    {
        title:"Cazador de Reliquias culto",
        roll: [41]
    },
    {
        title:"Descuidado(a)",
        roll: [42]
    },
    {
        title:"Sueños de Trance Meditativo",
        roll: [43]
    },
    {
        title:"Paga extra profesional",
        roll: [44]
    },
    {
        title:"Inventor/a eficiente",
        roll: [45]
    },
    {
        title:"Mentalidad empresarial",
        roll: [46]
    },
    {
        title:"Vendedor/a versado/a",
        roll: [47]
    },
    {
        title:"Artesano/a tradicional",
        roll: [48]
    },
    {
        title:"Hogar ignífugo",
        roll: [49]
    },
    {
        title:"Mi mejor amistad",
        roll: [50]
    },
    {
        title:"Estafador/a",
        roll: [51]
    },
    {
        title:"Parroquiano/a habitual",
        roll: [52]
    },
    {
        title:"Estrella del momento",
        roll: [53]
    },
    {
        title:"Fan excelente",
        roll: [54]
    },
    {
        title:"Mejor coctelero/a",
        roll: [55]
    },
    {
        title:"Maestro/a de la seducción",
        roll: [56]
    },
    {
        title:"Siempre en la lista",
        roll: [57]
    },
    {
        title:"Mapa de las estrellas",
        roll: [58]
    },
    {
        title:"Cama flotante",
        roll: [59]
    },
    {
        title:"Superniñera",
        roll: [60]
    },
    {
        title:"Herencia",
        roll: [61]
    },
    {
        title:"Vale de clonación",
        roll: [62]
    },
    {
        title:"Necesimóvil",
        roll: [63]
    },
    {
        title:"Poción congelaedad",
        roll: [64]
    },
    {
        title:"Poción Rejuvenecedora",
        roll: [65]
    },
    {
        title:"Cautivador/a",
        roll: [66]
    },
    {
        title:"Ha sido aposta",
        roll: [67]
    },
    {
        title:"Anfitrión/a",
        roll: [68]
    },
    {
        title:"'ExtraordinAIREdor'",
        roll: [69]
    },
    {
        title:"Viajero/a valiente",
        roll: [70]
    },
    {
        title:"Viajero/a valiente",
        roll: [71]
    },
    {
        title:"Nacido/a para cocinar",
        roll: [72]
    },
    {
        title:"Vieja lampara polvorienta",
        roll: [73]
    },
    {
        title:"Aspiradora voladora",
        roll: [74]
    },
    {
        title:"Piedra filosofal",
        roll: [75]
    },
    {
        title:"Habitual de los festivales",
        roll: [76]
    },
    {
        title:"Comedor/a competitivo/a",
        roll: [77]
    },
    {
        title:"Simmunidad",
        roll: [78]
    },
    {
        title:"Inmune al calor",
        roll: [79]
    },
    {
        title:"Inmune al frío",
        roll: [80]
    },
    {
        title:"Campeón de estaciones",
        roll: [81]
    },
    {
        title:"Nabizador 9000",
        roll: [82]
    },
    {
        title:"Unidad de control 'Climatrón'",
        roll: [83]
    },
    {
        title:"Con influencia entre deportistas",
        roll: [84]
    },
    {
        title:"Con influencia entre empollones",
        roll: [85]
    },
    {
        title:"Con influencia entre rebeldes",
        roll: [86]
    },
    {
        title:"Con un título honorífico",
        roll: [87]
    },
    {
        title:"Estomago a prueba de bombas",
        roll: [88]
    },
    {
        title:"Pulmones de acero",
        roll: [89]
    },
    {
        title:"Magnate de los hoteles",
        roll: [90]
    },
    {
        title:"Alga sirenica",
        roll: [91]
    },
    {
        title:"Mapa de isla inexplorada",
        roll: [92]
    },
    {
        title:"Amigo/a del Kraken",
        roll: [93]
    },
    {
        title:"Sirena/Tritón permanente - Sirena",
        roll: [94, 95, 96, 97, 98, 99, 100, 101, 102]
    },
    {
        title:"Alfa - Licántropo",
        roll: [103, 104, 105, 106, 107]
    },
    {
        title:"Manos mágicas - Bruja",
        roll: [108, 109, 110, 111, 112, 113, 114, 115]
    },
    {
        title:"Inmortal - Vampiro",
        roll: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128]
    },
    {
        title:"Rey/Reina de las hadas - Hada",
        roll: [129, 130, 131, 132, 132, 133, 134, 135]
    },
    {
        title:"Inmune al portal",
        roll: [136]
    },
    {
        title:"Sim del futuro",
        roll: [137]
    },
    {
        title:"Paquete de rasgochips",
        roll: [138]
    },
    {
        title:"Mantenimiento meticuloso",
        roll: [139]
    },
    {
        title:"Control remoto temporal",
        roll: [140]
    },
]

export { REWARD_LIST };