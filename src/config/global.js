export default {
  global: {
    componenteFormativo:
      'Diseño y herramientas para la construcción de contenido digital',
    descripcionCurso:
      'En este componente se abordarán los diferentes procesos y las herramientas necesarias para la construcción de una imagen, presentaciones, audios y videos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diseño y concepto de piezas gráficas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas para la construcción de una imagen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Planeación, diseño y herramientas para elaborar presentaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Planeación, diseño y herramientas para la creación de un audio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Planeación, diseño y herramientas para la creación de un video',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22810017_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Planeación, diseño y herramientas para la creación de un audio',
      referencia:
        'VIRTUOSSO.COM. (2018). <em>Ejercicios para locutores, ejercicios de locución y vibración</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JE3Yn4-6znE',
    },
    {
      tema: 'Planeación, diseño y herramientas para la creación de un audio',
      referencia:
        'Martínez, A. (2019). <em>Cuatro tips para grabar tu voz… si no eres profesional de la locución</em>. Subitus.',
      tipo: 'Artículo',
      link: 'https://www.subitus.com/tips-basicos-para-grabar-voz/',
    },
  ],
  glosario: [
    {
      termino: 'Amplificar',
      significado:
        'Este efecto incrementa o reduce el volumen del audio que se ha seleccionado.',
    },
    {
      termino: '<em>Auto Duck</em>',
      significado:
        'Reduce el volumen de una o más pistas cuando el volumen de la pista “control” alcanza un nivel particular. Típicamente usado para hacer que una pista de música suene más despacio cuando se escucha voz en una pista de comentarios.',
    },
    {
      termino: 'Autoplay',
      significado: 'Es un video que se reproduce automáticamente.',
    },
    {
      termino: '<em>Backup</em>',
      significado:
        'Copia de seguridad de archivos, que se crea para evitar que se pierda la información gráfica en caso de que se pierdan los originales, o se necesite hacer nuevos cambios en el diseño.',
    },
    {
      termino: '<em>Bit Rate</em>',
      significado:
        'Se refiere a la cantidad de información por segundo que nuestro ordenador o móvil lee al reproducir un archivo de video. Por tanto, cuanto mayor sea el bitrate mayor será la calidad del material.',
    },
    {
      termino: 'Canva',
      significado:
        'Lienzo donde se diseñan las piezas gráficas en los programas de diseño.',
    },
    {
      termino: '<em>Embed</em>',
      significado:
        'Es incrustar un video que ha sido subido a una plataforma, en una web o en un blog.',
    },
    {
      termino: 'Filtro',
      significado:
        'Capas de color que permiten cambiar la intensidad de nuestras fotografías.',
    },
    {
      termino: 'Formato de imagen',
      significado:
        'Datos digitales en un formato específico que permiten ser visualizados en una computadora o dispositivo compatible; los más usados son: PNG, JPEG, TIFF y GIF.',
    },
    {
      termino: 'Lecturabilidad',
      significado:
        'Cualidad de un diseño que permite leer con facilidad el texto que hay en él.',
    },
    {
      termino: 'Legibilidad',
      significado: 'Cualidad que tiene un texto para leerse sin dificultad.',
    },
    {
      termino: 'M1V',
      significado:
        'Extensión de un archivo MPEG que solo contiene datos de video. MPA, MPEG, MPG.',
    },
    {
      termino: 'M4A',
      significado:
        'Es un contenedor para distribuir ficheros de audio codificados en formato AAC o ALAC protegidos mediante DRM.',
    },
    {
      termino: 'Mapa de Bits (<em>Bitmaps</em>)',
      significado:
        'Hace referencia a una imagen que está constituida por pixeles que tienen información de color. Los formatos de imagen para mapa de bits son: PNG, JPEG y GIF. El programa más usado para editar estas imágenes es Photoshop.',
    },
    {
      termino: 'Multimedia',
      significado:
        'El término se refiere a cualquier plataforma que utiliza diferentes medios de expresión para comunicar y dar a conocer información, desde texto e imágenes hasta gifs, videos y audios',
    },
    {
      termino: 'Píxel',
      significado:
        'Elemento más pequeño de la imagen de un monitor. El término proviene de dos palabras inglesas: <em>picture</em> y <em>element</em>.',
    },
    {
      termino: 'Pódcast',
      significado:
        'Publicación digital en audio o video que se puede descargar o escuchar vía streaming. Suelen alojarse en una página web o blog, pero también en plataformas especializadas en audio como iTunes, Spotify o SoundCloud.',
    },
    {
      termino: 'Resolución',
      significado:
        'Cantidad de píxeles que pueden visualizarse en el monitor horizontal y verticalmente. Cuanto más alta es la resolución, más detalles pueden visualizarse. ',
    },
    {
      termino: 'RGB',
      significado:
        'Rojo, verde y azul. Colores primarios de la mezcla aditiva de colores. RGB designa el método que se emplea en informática para codificar la información de la imagen en pixeles, cada uno con una determinada combinación de estos tres colores primarios.',
    },
    {
      termino: '<em>Playlist</em>',
      significado:
        'Es una lista de videos online, organizados por temas o categorías. Muy populares en YouTube.',
    },
    {
      termino: 'Video 360',
      significado:
        'Son videos grabados con cámaras especiales, capaces de captar la acción en un ángulo de 360 grados.',
    },
    {
      termino: 'Voz en <em>off</em>',
      significado:
        'Narración en la que el locutor no está en la escena. Se suele añadir al editar.',
    },
  ],
  referencias: [
    {
      referencia:
        '33mm. (2019). Diez consejos sobre cómo editar vídeos de forma profesional. ',
      link:
        'https://35mm.es/como-editar-videos-profesionalmente-10-consejos-utiles/',
    },
    {
      referencia: 'Caño Valls, C. (2010). Tutoriales Audacity',
      link: 'http://openaccess.uoc.edu/webapps/o2/handle/10609/9047',
    },
    {
      referencia:
        'Luciano Baêta. (2019). Conoce los principales conceptos y consejos para editar audio. ',
      link: 'https://blog.hotmart.com/es/editar-audio/',
    },
    {
      referencia:
        'Mejía, M. (2021). ¡Dale vida a tu producto digital con Figma!',
      link: 'https://www.crehana.com/co/blog/diseno-grafico/que-es-figma/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jesualdo Morantes',
          cargo: 'Instructor',
          centro: 'SENA - Regional Norte de Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jorge Armando Villamizar Moreno',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Fabian Robles Méndez',
          cargo: 'Desarrollo <em>Front-end</em>',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
