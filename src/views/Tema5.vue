<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Planeación, diseño y herramientas para la creación de un video
    
    figure.mb-4.d-md-none
      img(src='@/assets/curso/temas/t5-i1.svg', alt='Texto que describa la imagen') 
    p.parrafo-tema-5.mb-5(data-aos="flip-up")
      img.d-none.d-md-block(src='@/assets/curso/temas/t5-i1.svg', alt='Texto que describa la imagen') 
      | El video es un contenido muy completo que permite grandes posibilidades; es por esta razón que es vital tener en cuenta los aspectos vistos anteriormente en la planeación del contenido.
      br
      br
      | El video contiene imágenes en movimiento o estáticas y, normalmente, va acompañado de un audio. Por tal motivo, uno de los componentes importantes a construir es un guion, el cual incluye contenido de audio y de imágenes como si fuera una historieta, a lo que se le conoce como #[em storyboard].
      br
      br
      | Es importante tener en cuenta cómo va a ser la comunicación corporal, o no verbal, dentro de la grabación del video y al ser este un factor a planear, se puede incluir en el #[em storyboard].
      br
      br
      | El rostro, el movimiento del cuerpo en conjunto con los componentes de la voz, se articulan para que el video transmita emociones; por eso la importancia de poder incluir todo esto en el storyboard, el cual se conoce como el entregable del diseño del video.
      br
      br
      | Grabar y editar videos se ha convertido en una tarea aparentemente fácil, desde el uso de los teléfonos inteligentes; pero cuando se pretende producir un video con aspecto profesional, es importante atender algunas recomendaciones, las cuales se pueden analizar en el video “Tutorial para grabar videos desde la casa con el celular (Smartphone)” haciendo clic en el enlace.

    .row.mb-5(data-aos="flip-up")
      .col-md-6
        a.anexo(href="https://www.youtube.com/watch?v=41Z5EoP0fOQ" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Tutorial para grabar videos desde la casa con el celular.

    p.mb-5(data-aos="flip-up") Múltiples soluciones para edición de video se encuentran en la red, y estas permiten combinar textos, imágenes y audios en un solo contenido. Pero, para lograr un buen video, es necesario tener una planeación adecuada donde:
    
    TabsA.color-acento-contenido.mb-5(data-aos="flip-up")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Paso 1: Guion")
        h4 Crear el guion
        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t5-i2.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-4  El guion es el punto de partida en la creación de un video, es donde se engancha al público y se expone lo que se logrará al finalizar de verlo. Se debe tener en cuenta:
            ul.lista-ul.lista-personalizada-1
              li 
                i.fa.fa-check
                | Cautivar al público desde el inicio del video.
              li 
                i.fa.fa-check
                | Tener claro el tema que se desarrollará.
              li 
                i.fa.fa-check
                | Planear el contenido; es decir, cómo se va a entregar a los usuarios. Un ejemplo sería hacerlo paso a paso y dividir el tema en pequeños pasos que se entregarán en orden, para lograr una mayor efectividad al comunicar el mensaje.
              li 
                i.fa.fa-check
                | Saber cuáles imágenes, efectos, audios y demás recursos, apoyarán la producción del video.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Paso 2: Escenario")
        h4 Definir el escenario donde se realizará el video y las herramientas que se van a utilizar

        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t5-i3.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-4  El escenario se puede definir de acuerdo con lo que se quiera proyectar al público objetivo. Existen varias opciones para tener como escenarios; sin embargo, se puede acondicionar una habitación, para que el entorno contenga los conceptos que se quieren transmitir. Lo importante es cuidar los detalles de la luz, el fondo del video y el audio. Con respecto al fondo, se puede hacer uso de cromas, una técnica visual que extrae el color de la imagen, y se reemplaza por otra.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Paso 3: Grabación")
        h4 Iniciar la grabación del video de acuerdo con el guion creado
        
        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t5-i4.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-4  Iniciar la grabación haciendo uso de la cámara que se ha seleccionado. Puede ser un celular o una cámara profesional. Lo importante en este paso, es tener en cuenta el guion que se creó, de manera que todos los movimientos y las palabras usadas tengan un sentido.
      

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Paso 4: Edición")
        h4 Realizar la edición del video en la herramienta seleccionada
        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t5-i5.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-4  Se ha llegado a un punto importante dentro del proceso de creación: “la edición”. Aquí se unen muchos recursos diferentes a los captados en la grabación del video, como por ejemplo: imágenes, audios, animaciones, títulos, textos y más.
      
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Paso 5: Exportar el video")
        h4 Exportar el video al formato que se requiera
        .row
          .col-lg-2
            figure.mb-4
              img(src='@/assets/curso/temas/t5-i6.svg', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-4  En este paso se define en qué dispositivo se va a reproducir el video, qué formato necesita y en qué plataforma se va a difundir. Con respecto a los formatos, se encuentran los siguientes: AVI, WMV, MOV, FLV, RM, RMVB, MP4, MKV, 3GP.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10
        p Una de las plataformas que se ha convertido en la herramienta preferida por los creadores de contenido es CapCut - Video Editor que es una aplicación de edición de video, todo en uno, que ayuda a crear videos increíbles. Corte, retroceder y cambiar la velocidad y mucho más, disponible para dispositivos móviles con sistema operativo iOS y Android.
          br
          br
          | Te invitamos a consultar el siguiente video, donde se presenta una introducción al manejo de la herramienta Capcut.
      
      .col-lg-2  
        figure.mb-4
          img(src='@/assets/curso/temas/t5-i7.svg', alt='Texto que describa la imagen')
    
    figure.mb-5(data-aos="flip-up")
      img(src="@/assets/curso/temas/img-video-temporal.png")
      //.video
      //  iframe...
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .cajon.fondo-color-sistema-j.p-4 
          p.mb-0 Hemos finalizado el estudio del diseño, planeación y utilización de herramientas para la creación de contenido digital. <b> ¡Anímate a crear tus propias piezas, tu creatividad es infinita! </b>

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
