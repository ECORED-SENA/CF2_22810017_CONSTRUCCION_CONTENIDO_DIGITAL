<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Planeación, diseño y herramientas para elaborar presentaciones
    
    p.mb-5(data-aos="slide-up")
      b ¿Sabías que la presentación es una herramienta importante cuando se va a socializar?
      br
      br
      | Uno de los aspectos más importantes es que contenga gráficos, porque ellos representan metáforas y son fundamentales para el cerebro humano.
      br
      br
      | El texto debe ser limitado de manera esencial y contrastar con el color del fondo. La letra negra en un fondo oscuro no se va a poder ver; lo mismo pasa con un fondo pastel con letra blanca.
      br
      br
      | Teniendo en cuenta todo lo anterior, se deben considerar 
      b los siguientes puntos en el diseño de las diapositivas para las presentaciones:

    ImagenInfografica.color-secundario.mb-5(data-aos="slide-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/Group55087.svg', alt='Elementos a considerar cuando se diseñen diapositivas')

      .tarjeta.color-acento-botones.p-3(x="10%" y="11%")
        p.mb-0
          span.h4 1. 
          |Tener en mente el tiempo con el que se cuenta para la presentación y decidir cuántas diapositivas se van a utilizar.

      .tarjeta.color-acento-botones.p-3(x="27%" y="30%")
        p.mb-0
          span.h4 2. 
          | Realizar un esquema de tiempo y de temas, especificando cuánto tiempo se toma para cada diapositiva.

      .tarjeta.color-acento-botones.p-3(x="45%" y="38%")
        p.mb-0.text-small 
          span.h4 4. 
          | Como ya se definieron previamente la secuencia y las imágenes a utilizar, es importante ir organizando la forma como se quiere que las imágenes sean observadas y el lugar donde irán los textos y las modificaciones a los ángulos de las imágenes y otros detalles.
      
      .tarjeta.color-acento-botones.p-3(x="35%" y="53%")
        p.mb-0
          span.h4 3. 
          | Realizar un guion base con palabras clave y visualizar cada diapositiva para articular el discurso con el recurso.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%")
        p.mb-0 
          span.h4 5. 
          | Pasar a la fase de construcción final, ensayo y ajustes.

    p.mb-5(data-aos="slide-up")  Es importante aclarar que se pueden buscar plantillas gratuitas, identificando en cuáles se debe dar reconocimiento al diseñador de la plantilla y usarlas de manera efectiva en los ajustes.

    .row.justify-content-center.mb-5(data-aos="slide-up")
      .col-lg-10
        .cajon.fondo-color-sistema-j.p-4
          p.mb-0 <b>Recuerda:</b> para crear una presentación efectiva, se requiere ser cuidadoso al momento <b>de elegir los elementos visuales, el tipo de fuente y el punto focal.</b> Si se tienen en cuenta estos 3 elementos en lo que se quiere comunicar, se estará más cerca de lograr lo que se desea.
   
    p.mb-5(data-aos="slide-up") El siguiente listado contiene algunas de las plataformas que permiten crear presentaciones interactivas #[em online], de manera gratuita o a través de un registro:

    .row.justify-content-center.mb-5(data-aos="slide-up")
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t3-i2.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.canva.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.canva.com

      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t3-i3.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://prezi.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> https://prezi.com
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t3-i4.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.emaze.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.emaze.com
    .row.justify-content-center.mb-5
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t3-i5.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://www.powtoon.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.powtoon.com

      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/t3-i6.svg', alt='Texto que describa la imagen')
        a.anexo.mb-4.mb-lg-0(href="https://slidebean.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> www.slidebean.com
    p.mb-4(data-aos="slide-up") Al igual que con la planeación de una imagen, es importante considerar los siguientes puntos:
    
    .row(data-aos="slide-up")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/t3-i7.svg', style="width: 400px" alt='Texto que describa la imagen').m-auto
      .col-lg-9
        ul.lista-ul.lista-personalizada-1
          li 
            i.fa.fa-check
            | Definir lo que se quiere comunicar.
          li 
            i.fa.fa-check
            | Examinar la herramienta y sus posibilidades antes de empezar.
          li 
            i.fa.fa-check
            | Definir los datos relevantes que se van a exponer en cada página o diapositiva.
          li 
            i.fa.fa-check
            | Crear una secuencia de la información para que contenga un hilo conductor.
          li 
            i.fa.fa-check
            | Realizar el diseño de la presentación.      
          li 
            i.fa.fa-check
            | Elegir imágenes y fuentes en armonía con los colores.
          li 
            i.fa.fa-check
            | Construir la presentación, revisarla y ensayarla.

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
