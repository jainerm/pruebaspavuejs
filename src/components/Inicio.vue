<template>
    <div id="top">
      <!-- ####################################################################################################### -->
      <div class="wrapper col1">
        <div id="header">
          <div id="logo">
            <h1><a href="">{{ msg }}</a></h1>
            <p>Tu opción de empleo....</p>
          </div>
          <div id="topnav">
            <ul v-for="(item, i) in items" :key="item">
              <li class="active" v-if="i === 0">
                <a href="index.html"><span>{{ item.text }}</span></a>
              </li>
              <li v-else>
                <a href="#"><span>{{ item.text }}</span></a>
                <div v-if="item.children !== undefined">
                  <ul> 
                    <div v-for="child in item.children" :key="child">
                      <li>
                        <a href="#" v-on:click="redirect(child.path)"><span>{{ child.text }}</span></a>
                      </li>
                    </div>  
                  </ul>  
                </div> 
              </li>
            </ul>
          </div>
          <br class="clear" />
        </div>
      </div>
      <!-- ####################################################################################################### -->
      <div class="wrapper col2">
        <div id="featured_slide">
          <div id="featured_content">
            <ul>
              <li><img src="../assets/images/demo/2.gif" alt="" />
                <div class="floater">
                  <h2>Propuesta de trabajo !</h2>
                  <p>En este sistema podrá registrar y consultar información sobre el perfil profesional de una persona. 
                    Este portal permite mantener actualizado su perfil Profesional, prestando atención a aquellos elementos 
                    que determinen un especial interés en cuanto a lo que se ofrece por parte de los interesados y ofertantes 
                    de empleo</p><p><a> Es de uso libre solo debe registrarse !!</a></p>
                  <p class="readmore"><a href="#">Registrarse &raquo;</a></p>
                </div>
              </li>
              <li><img src="../assets/images/demo/3.gif" alt="" />
                <div class="floater">
                  <h2>Cursus penati saccum ut curabitur nulla.</h2>
                  <p>Temperinte interdum sempus odio urna eget curabitur semper convallis nunc laoreet. Nullain convallis ris elis vest liberos nis diculis feugiat in rutrum. Suspendreristibulumfaucibulum lobortor quis tortortor ris sapien sce enim et volutpat sus. Urnaretiumorci orci fauctor leo justo nulla cras ridiculum&hellip;</p>
                  <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
                </div>
              </li>
              <li><img src="../assets/images/demo/1.gif" alt="" />
                <div class="floater">
                  <h2>Cursus penati saccum ut curabitur nulla.</h2>
                  <p>Temperinte interdum sempus odio urna eget curabitur semper convallis nunc laoreet. Nullain convallis ris elis vest liberos nis diculis feugiat in rutrum. Suspendreristibulumfaucibulum lobortor quis tortortor ris sapien sce enim et volutpat sus. Urnaretiumorci orci fauctor leo justo nulla cras ridiculum&hellip;</p>
                  <p class="readmore"><a href="#">Continue Reading &raquo;</a></p>
                </div>
              </li>
            </ul>
          </div>
          <a href="javascript:void(0);" id="featured-item-prev"><img src="../assets/images/prev.png" alt="" /></a> 
          <a href="javascript:void(0);" id="featured-item-next"><img src="../assets/images/next.png" alt="" /></a> 
        </div>
      </div>
      <!-- ####################################################################################################### -->
      <div class="wrapper col3">
        <div id="container">
          <div class="homepage">
            <ul>
              <li>
                <h2><img src="../assets/images/demo/60x60.gif" alt="" />Habilidades</h2>
                <p>Describa sus destresas y competencias de manera clara y especifica, permitiendo que otros puedan descubrir sus capacidades y poder así encontrar para usted mayores opciones de trabajo.</p>
                <p class="readmore"><a href="#">Registrar habilidades &raquo;</a></p>
              </li>
              <li>
                <h2><img src="../assets/images/demo/60x60_2.gif" alt="" />Trabajo en equipo</h2>
                <p>Describa como ha sido su compromiso en cuando a esfuerzo hacia su grupo de trabajo que implica la coordinacion de 2 o más personas orientadas para el alcance de objetivos comunes.</p>
                <p class="readmore"><a href="#">Registrar trabajo equipo &raquo;</a></p>
              </li>
              <li class="last">
                <h2><img src="../assets/images/demo/60x60_3.gif" alt="" />Logros</h2>
                <p>Permita que otros conozcan de su desarrollo y encuentren en usted una opción de valor que les permita confirmar porque eres la persona idonea y capacitada para la oferta para la que aplica.</p>
                <p class="readmore"><a href="#">Registrar Logros &raquo;</a></p>
              </li>
            </ul>
            <br class="clear" />
          </div>
        </div>
      </div>
      <!-- ####################################################################################################### -->
      <div class="wrapper col4">
        <div id="footer">
          <div class="box1">
            <h2>Informacion sobre nosotros!</h2>
            <img class="imgl" src="../assets/images/demo/imgl.gif" alt="" />
            <p>Durante 20 años hemos participado en el emprendimiento laboral de muchos Colombianos que hoy se han visto beneficiados con la información de ofertas laborales con contenido y proyección.</p>
            <p><a>Gracias a ustedes por su preferencia.</a></p>
          </div>
          <div class="box contactdetails">
            <h2>Contactenos !</h2>
            <ul>
              <li>Ofertas Profesionales</li>
              <li>Calle 10 &amp; 79-XX</li>
              <li>Bogota D.C.</li>
              <li>Colombia/11280</li>
              <li>Cel: 324 4000462</li>
              <li>Email: jainerm6705@gmail.com</li>
              <li class="last">LinkedIn: <a href="https://www.linkedin.com/in/jainer-antonio-marin-serrano-b891134b">@jainerm6705</a></li>
            </ul>
          </div>
          <div class="box flickrbox">
            <h2>Estos ticks !</h2>
            <div class="wrap">
              <div class="fix"></div>
              <div class="flickr_badge_image" id="flickr_badge_image1"><a href="#"><img src="../assets/images/demo/80x80_1.gif" alt="" /></a></div>
              <div class="flickr_badge_image" id="flickr_badge_image2"><a href="#"><img src="../assets/images/demo/80x80_2.gif" alt="" /></a></div>
              <div class="flickr_badge_image" id="flickr_badge_image3"><a href="#"><img src="../assets/images/demo/80x80_3.gif" alt="" /></a></div>
              <div class="flickr_badge_image" id="flickr_badge_image4"><a href="#"><img src="../assets/images/demo/80x80_4.gif" alt="" /></a></div>
              <div class="flickr_badge_image" id="flickr_badge_image5"><a href="#"><img src="../assets/images/demo/80x80_5.gif" alt="" /></a></div>
              <div class="flickr_badge_image" id="flickr_badge_image6"><a href="#"><img src="../assets/images/demo/80x80_6.gif" alt="" /></a></div>
              <div class="fix"></div>
            </div>
          </div>
          <br class="clear" />
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  },
  data: () => ({
      items: [
        { text: "Inicio", path: "/Inicio" },
        {
          text: "Profesionales",
          children: [
            { text: "Personas", path: "/persona" },
            { text: "Perfil", path: "/perfil" }
          ]
        },
        {
          text: "Ofertas",
          children: [
            { text: "Oferta de trabajo", path: "/oferta" },
            { text: "Detalle", path: "/detalle" }
          ]
        }, 
        { text: "Mi registro", path: "/registro" },
      ]
    }),
    methods: {
      redirect(path) {
        if(path === undefined) return; 
        console.log(path)
        this.$routes.push(path); 
      }
    }
  }
</script>

