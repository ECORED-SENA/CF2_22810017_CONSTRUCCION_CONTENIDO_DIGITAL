<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas para la construcción de una imagen
    
    p.mb-5 Las herramientas para la creación de imágenes brindan una gama alta de posibilidades de edición en cuanto a filtros, fuentes de texto, formas, entre otras. Existen múltiples herramientas en el mercado, algunas gratuitas y otras pagas y, dependiendo del sistema operativo. Se pueden encontrar algunas, como por ejemplo:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .d-none.d-lg-block.col-lg
        figure
          img(src='@/assets/curso/temas/Group55093.svg', alt='Texto que describa la imagen')
        
      .col-lg-8
        TabsB.color-primario.mb-5
          .py-4.py-md-5(titulo="Figma" :icono="require('@/assets/curso/temas/figma-icon.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                p Es un editor de gráficos, vectorial, y una herramienta de generación de prototipos, basada principalmente en la web, con características #[em offline] adicionales, habilitadas por aplicaciones de escritorio en macOS y Windows.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2-i1.svg', alt='Texto que describa la imagen')
              
              .col-12.pt-3
                a.anexo.mb-4.mb-lg-0(href="https://www.figma.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. 
                      b www.figma.com

          .py-4.py-md-5(titulo="Canva" :icono="require('@/assets/curso/temas/canva-icon.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                p Fundado en 2012, es un #[em software] y un sitio web de herramientas de diseño gráfico simplificado. Utiliza un formato de arrastrar y soltar, y proporciona acceso a más de 60 millones de fotografías y 5 millones de vectores, gráficos y fuentes.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2-i2.svg', alt='Texto que describa la imagen')

              .col-12.pt-3
                a.anexo.mb-4.mb-lg-0(href="https://www.canva.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. 
                      b www.canva.com
            
          .py-4.py-md-5(titulo="Gimp" :icono="require('@/assets/curso/temas/gimp-icon.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                p Es un programa de edición de imágenes digitales, en forma de mapa de #[em bits], tanto de dibujos como de fotografías. Es un programa libre y gratuito.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/t2-i3.svg', alt='Texto que describa la imagen')

              .col-12.pt-3
                a.anexo.mb-4.mb-lg-0(href="https://www.gimp.org/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. 
                      b www.gimp.org


          .py-4.py-md-5(titulo="Pixlr" :icono="require('@/assets/curso/temas/pxlr-icon.svg')")
            .row
              .col-md-6.mb-4.mb-md-0
                p Es un conjunto de herramientas y utilidades de imágenes, basado en la nube, que incluye varios editores de fotografías y un servicio para compartirlas.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/pixlr.svg', alt='Texto que describa la imagen')

              .col-12.pt-3
                a.anexo.mb-4.mb-lg-0(href="https://pixlr.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. 
                      b www.pixlr.com

    p.mb-5(data-aos="fade-down") En algunas de las herramientas mencionadas o en la de su preferencia, se puede editar una imagen en el celular o en la #[em tablet]; pero antes de hacerlo, es importante tener en cuenta lo que veremos a continuación, para poder crear una imagen con contenido útil o, si es el caso, atraer a los clientes:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-sm.d-none.d-lg-block
        .num-blur.position-relative.mb-3(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .num-blur__num
            .h5 1
          .num-blur__text
            span Definir lo que se quiere comunicar.

        .num-blur.mb-3(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 2
          .num-blur__text
            span Examinar la herramienta y sus posibilidades antes de empezar.

        .num-blur(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 3
          .num-blur__text
            span Elegir las fotografías que se van a utilizar.
          
      .col-sm-4.mb-4.mb-sm-0
        figure
          img(src='@/assets/curso/temas/t2-i5.svg', alt='Texto que describa la imagen')    

      .col-sm.d-flex.flex-column.justify-content-center
        .d-lg-none.num-blur.position-relative.mb-3(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .num-blur__num
            .h5 1
          .num-blur__text
            span Definir lo que se quiere comunicar.

        .d-lg-none.num-blur.mb-3(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 2
          .num-blur__text
            span Examinar la herramienta y sus posibilidades antes de empezar.

        .d-lg-none.num-blur.mb-3(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 3
          .num-blur__text
            span Elegir las fotografías que se van a utilizar.


        .num-blur.mb-3(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 4
          .num-blur__text
            span Diseño de la imagen.

        .num-blur(@mouseover="mostrarIndicador = false")
          .num-blur__num
            .h5 5
          .num-blur__text
            span Construir la imagen.


    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-9
        .cajon.fondo-color-sistema-j.p-4
          p.mb-0 Aparte de las herramientas que nos permiten construir la pieza gráfica, se requieren recursos adicionales como imágenes, vectores, fuentes, entre otros, 
            b los cuales nos permiten cumplir con el objetivo que las piezas quieren transmitir. 

            
    p.mb-3(data-aos="fade-down") Algunos recursos valiosos que podemos encontrar en la web, 
      b los cuales son libres de derechos y podemos usar sin inconvenientes, 
      | son:

    h4.mb-5(data-aos="fade-down") Bancos de imágenes
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i6.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.pexels.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.pexels.com

      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i7.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://unsplash.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.unsplash.com
    h4.mb-5(data-aos="fade-down") Vectores
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i8.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.freepik.es/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.freepik.es

      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i9.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.flaticon.es/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.flaticon.es
    h4.mb-5(data-aos="fade-down") Tipografías
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i10.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://fonts.google.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> https://fonts.google.com/

      .col-lg-4
        figure.mb-4
          img.h100(src='@/assets/curso/temas/t2-i11.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://befonts.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.befonts.com

    p.mb-5(data-aos="fade-down") Te invitamos a consultar el siguiente video, donde con la herramienta de diseño Figma y una imagen de pexels.com, te mostraremos cómo crear una imagen para una red social.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/laBtXTkTdo8?si=nTgRZDn8Ol3fxIHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .cajon.fondo-color-sistema-j.p-4
          p.mb-0  <b>¡Anímate!</b> Ingresa a Figma y crea una imagen para una de tus redes sociales o para tu negocio.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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
