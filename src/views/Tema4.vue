<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Planeación, diseño y herramientas para la creación de un audio
    
    .row.mb-5(data-aos="zoom-in")
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Los contenidos de audio han sido empleados en diversos canales como radio, redes sociales e inclusive en las calles, a través del conocido “perifoneo”, donde se pueden encontrar contenidos como pódcast o también comerciales. En algunos casos se acompañan de imágenes fijas o simplemente se emite el audio.
          br
          br
          | Para diseñar un contenido de audio, se deben tener en cuenta los aspectos que se desarrollaron anteriormente en la planeación del contenido.
          br
          br
          | Teniendo todo esto en mente, <b>se debe determinar el tiempo de duración, dependiendo del público objetivo y de los elementos previamente abordados.</b>
          br
          br
          | El paso siguiente, es el de elaborar el guion escrito, tomándose el tiempo de revisarlo y leerlo con la entonación que se requiere, para determinar si son necesarios algunos cambios. Para lograrlo, es recomendable hacer una grabación de prueba y ajustarla, de ser necesario; también <b>es importante anotar sobre el guion, con símbolos, dónde se debe acelerar la voz, subir o bajar el volumen, o hacer más notoriedad en las palabras sobre las que se va a hacer un énfasis.</b>

      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t4-i1.jpg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .cajon.fondo-color-sistema-j.p-4
          p.mb-0 Después de realizar el análisis del guion, es importante analizar la pista de audio que se quiere usar de fondo, si se considera pertinente, o las pistas, dependiendo de la duración y la intencionalidad del texto y el manejo de las emociones.
    
    p.mb-5(data-aos="zoom-in") Estos contenidos de audio son llamados pódcast, y se alojan en una plataforma web, donde pueden ser escuchados, descargados y, en casos particulares, editados. Algunas de estas plataformas son:
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/t4-i2.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.buzzsprout.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.buzzsprout.com

      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/t4-i3.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://transistor.fm/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.transistor.fm

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/t4-i4.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://castos.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.castos.com

      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/temas/t4-i5.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.podbean.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.podbean.com

    .tarjeta.custom-gradient.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/t4-i6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Tips para la grabación de audio
              p.text-small.mb-0 Cuando te enfrentas a la grabación de un audio, surgen inquietudes sobre cómo es el proceso para realizarlo. A continuación encontrarás unas recomendaciones que te ayudarán para que el producto final quede con buena calidad.  
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('downloads/Infografia_tips-grabacion-de-audios.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5(data-aos="zoom-in") Teniendo claro cómo se planea la creación de un audio, su diseño y las diferentes herramientas que se pueden utilizar, te invitamos a consultar el siguiente video, donde se presenta una introducción al manejo de la herramienta Audacity.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/eCS2LvZLWe4?si=nwFLHFRMv8_ADlIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .cajon.fondo-color-sistema-j.p-4
          p.mb-0 
            b Recuerda: 
            | para crear una presentación efectiva, se requiere ser cuidadoso al momento 
            b de elegir los elementos visuales, el tipo de fuente y el punto focal. 
            | Si se tienen en cuenta estos 3 elementos en lo que se quiere comunicar, se estará más cerca de lograr lo que se desea.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
