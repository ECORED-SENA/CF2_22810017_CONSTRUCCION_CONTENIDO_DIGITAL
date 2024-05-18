<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10
        .bloque-texto-a.fondo-color-sistema-i.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 ¿Recuerdas que contenido digital es toda la información que se muestra en un medio digital?
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Esa información la encontramos en páginas web, en redes sociales o en cualquier rincón de Internet, y está conformada por imágenes, textos, videos, y muchos elementos más.
                  br
                  br
                  | En este componente formativo conoceremos cómo diseñar piezas gráficas y cuáles herramientas podemos utilizar para su elaboración.

    .row.align-items-center.justify-content-center(data-aos="fade-right")
      .col-8.col-md-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/intro-img.svg", alt="imagen decorativa relacionada a computacion, documentos y medios digitales")
        
      .col-md
        p.mb-5 También planearemos, diseñaremos y conoceremos las herramientas para elaborar presentaciones y audios, y por supuesto, no podemos olvidarnos de la planeación, el diseño y herramientas para la creación de un video. 
          br
          br
          | Todos estos contenidos nos servirán para publicar en cualquier medio digital, porque hay que tener en cuenta que: 
          b el contenido de calidad es uno de los pilares esenciales de cualquier proyecto digital.

        .row
          .col-md-8
            .cajon.fondo-color-sistema-j.p-4
              p.mb-0 Recuerda: 
                b ¡la creatividad no tiene límites! 
                | ¡Muchos éxitos en este aprendizaje!
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.bloque-texto-a:before
  background-color: $color-primario
</style>
