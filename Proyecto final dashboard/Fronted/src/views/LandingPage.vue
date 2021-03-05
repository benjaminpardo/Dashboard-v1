<template>
  <v-app id="fondo">
              <v-container >
                <v-app-bar id="navbar"
                  absolute
                  color="transparent"
                  elevate-on-scroll
                  scroll-target="#scrolling-techniques-7"
                  
                >
                  
                  <v-toolbar-title>
                    <img id="logo" src="../assets/logoCircular.png" alt="">
                  </v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>


                 
                  <h5 class="btnNavbar" style="font-weight:600">Home</h5>
                  <v-spacer></v-spacer>
                  <h5 class="btnNavbar">Beneficios</h5>
                  <v-spacer></v-spacer>
                  <h5 class="btnNavbar">Registro</h5>
                  <v-spacer></v-spacer>
                  <h5 class="btnNavbar">Contacto</h5>
                  <v-spacer></v-spacer>
                  <v-btn to="/Ingresar">
                    <h5 class="" style="color:#466fbb" >ENTRAR</h5>
                  </v-btn>
                  
                  <!-- <v-btn class="btnNavbar">
                    <h5>Home</h5>
                  </v-btn>
                  <v-btn >
                    <h5>Beneficios</h5>
                  </v-btn>
                  <v-btn >
                    <h5>Registro</h5>
                  </v-btn>
                  <v-btn >
                    <h5>Contacto</h5>
                  </v-btn>
                  <v-btn >
                    <h5>ENTRAR</h5>
                  </v-btn> -->
                </v-app-bar>
              </v-container>
            
    
    
    
      
        <v-container id="portada" fill-height>
           <v-row>
            <v-col style="color: white">
              <h1 id="tituloBienvenida" style="font-size:50px">¿Ya organizaste tu día?</h1>
              <h5 style="font-weight:300">Utiliza pulpo y ordena tus tareas, horarios, páginas web 
                más visitadas, estadísticas de tu trabajo y más!
              </h5>
              
              <v-btn         
                            rounded
                            class="boton mr-0 "
                            color="white"
                            style="margin-top:20px"
                            to="/Ingresar"
                                >
                                    ¡Registrate!
                                </v-btn>
            </v-col>

            <v-col>
              <v-img 
                max-height= "620px"
                max-width="620px"
                src="../assets/computador-02.png" alt=""></v-img>
            </v-col>
          </v-row>
        </v-container>
     
   
      
      
      <div class="container1" >
        <v-row id="caracteristicas">
          <v-row class="text-enter">
            <h2 class="titulo">¿Qué es Pulpo.cl</h2>
            <h5 id="resumen">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ab atque assumenda fugiat aliquam, numquam quos, qui nisi vitae odit labore consequatur voluptatum. Odit vero, sunt sequi dolore eveniet ducimus!</h5>
          </v-row>
          
          <v-row>
            <v-col class="caract"><h1>1</h1><h2>Ordena</h2><h5 style="font-weight:300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni quasi veritatis molestiae saepe, alias, excepturi beatae consequuntur exercitationem facilis rerum fugiat recusandae minus facere! Odit similique labore nostrum minima?</h5></v-col>
            <v-col class="caract"><h1>2</h1><h2>Ordena</h2><h5 style="font-weight:300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni quasi veritatis molestiae saepe, alias, excepturi beatae consequuntur exercitationem facilis rerum fugiat recusandae minus facere! Odit similique labore nostrum minima?</h5></v-col>
            <v-col class="caract"><h1>3</h1><h2>Ordena</h2><h5 style="font-weight:300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, magni quasi veritatis molestiae saepe, alias, excepturi beatae consequuntur exercitationem facilis rerum fugiat recusandae minus facere! Odit similique labore nostrum minima?</h5></v-col>
          </v-row>      
      </v-row>
      </div>

      <div id="numeros">
        <v-row>
          <v-col><h2 class="numero">+7000</h2><h3 class="numeroDes">tareas</h3></v-col>
          <v-col><h2 class="numero">+100</h2><h3 class="numeroDes">miembros</h3></v-col>
          <v-col><h2 class="numero">+20%</h2><h3 class="numeroDes">productividad</h3></v-col>
          <v-col><h2 class="numero">+120</h2><h3 class="numeroDes">reportes</h3></v-col>
        </v-row>
      </div>


      <div class="container1" fill-height>
        <h1 class="titulo">Funcionalidades</h1>
          <v-img id="computador"
            max-height= "620px"
            max-width="620px"
            src="../assets/compu-dashboard-02.png"></v-img>
        <div>
          <v-row>
            <v-col><v-card style="padding:20px"><h2 class="numero" style="color: #51a5f3">Tareas</h2><h3 class="numeroDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></v-card></v-col> 
            <v-col><v-card style="padding:20px"><h2 class="numero" style="color: #51a5f3">Noticias</h2><h3 class="numeroDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></v-card></v-col> 
            <v-col><v-card style="padding:20px"><h2 class="numero" style="color: #51a5f3">Acceso</h2><h3 class="numeroDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></v-card></v-col> 
            <v-col><v-card style="padding:20px"><h2 class="numero" style="color: #51a5f3">Personalizable</h2><h3 class="numeroDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></v-card></v-col> 
            <v-col><v-card style="padding:20px"><h2 class="numero" style="color: #51a5f3">Estadísticas</h2><h3 class="numeroDes">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3></v-card></v-col> 
            
          </v-row>
        </div>
      </div>

      <div class="container1">
        <h1 class="titulo">¿Listo para ir al siguiente nivel?</h1>
        <div>
          <v-row>
            <v-col>
              <v-img 
              style="margin-top: 30px"
              max-height= "450px"
              max-width="450px"
              src="../assets/persona-02.png"></v-img>
            </v-col>
            <v-col class="text-center">
              <v-card id="formFinal">
                <h2>¡Quiero más información!</h2>
                <div>
                  <v-row class="inputFinal">
                    <v-col
                      cols="11"
                      
                    >
                      <v-text-field
                        label="Correo electrónico"
                        class="purple-input"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="inputFinal">
                    <v-col
                      cols="11"
                    >
                      <v-text-field
                        label="Nombre"
                        class="purple-input"
                      />
                      
                    </v-col>
                  </v-row>

                  <v-row class="text-right">
                    <v-col
                      cols="4"
                    >
                      <v-btn 
                        rounded
                        class="boton  "
                        color="primary"
                        to="/Ingresar"
                      >
                        Probar demo
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>

      <footer>
        <div class="container1" id="footer">
          <v-row>
            <v-col
            cols="3">
              <v-img 
              max-height= "100px"
              max-width="100px"
              src="../assets/logoCircular.png" alt=""> </v-img>
              </v-col>
            <v-col class="text-left"><h3 style="color:white ">El dashboard para organizar tu día. Email: contacto@pulpo.cl. San Martín, Temuco</h3></v-col>
            
            <v-col
            cols="5"
            class="text-right">
              <v-img 
              max-height= "80px"
              max-width="200px"
              src="../assets/rrss-02.png" alt=""> </v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col><h4 style="color:white">PULPO.CL TODOS LOS DERECHOS RESERVADOS</h4></v-col>
          </v-row>
        </div>
      </footer>
      

      
      
    
     

  </v-app>
</template>







<style>
  #fondo{
    background: linear-gradient(135deg,#2c92f2 50%,#466fbb);
    
  }
  #navbar{
    padding-left: 140px;
    padding-right: 120px; 
    position: fixed;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(135deg,#2c92f2 50%,#466fbb);
  }
  #logo{
    width: 50px;
  }
  #portada{
    margin-top: 120px;
    justify-content: center;
    padding-left: 90px;
    padding-right: 90px; 
  }
  #tituloBienvenida{
    margin-top: 60px;
  }
  body{
    background: black;
  }
  #caracteristicas{
    color:black;
    text-align: center;
  }
  .btnNavbar{
    color: white;
    font-weight: 300;
  }
  
  .container1{
    background: white;
    padding-left: 120px;
    padding-right: 120px;
    padding-bottom: 100px;
    text-align: center;
    padding-top: 120px;
  }
  
  .titulo{
    font-weight: 700;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  #resumen{
    padding-bottom: 90px;
    font-weight: 300;
    padding-left: 60px;
    padding-right: 60px;
  }
  #numeros{
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 60px;
    padding-right: 60px;
    text-align: center;
    display: block;
    color: white;
  }
  .numeroDes{
    font-weight: 200;
  }
  #computador{
    margin-left: auto;
    margin-right: auto;
  }
  #formFinal{
    margin-top: 50px;
    padding: 40px;
    
  }
  .inputFinal{
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  #footer{
    background-color: black;
  }
 
</style>