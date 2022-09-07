import './Header.css';

function Header() {
let i = 0;

let clientejugador = {
        Nombre: 'Manuel López',
        Equipo: 'Real Madrid',
        PuntosTotales: 0

}

let jugadorarealmadridolgacarmona = {
        Nombre: 'Olga Carmona',
        Equipo: 'Real Madrid',
        Goles: 8,
        Asistencias: 3,
        TarjetasAmarillas: 2,
        TarjetasRojas: 1,
        Puntos: 0
}; 
let jugadorafcbarcelonaalexiaputellas = {
    Nombre: 'Alexia Putellas',
    Equipo: 'FC Barcelona',
    Goles: 18,
    Asistencias: 5,
    TarjetasAmarillas: 3,
    TarjetasRojas: 0,
    Puntos: 0
}; 

let jugadorrealmadridviniciusjunior = {
  Nombre: 'Vinicius Junior',
  Equipo: 'Real Madrid',
  Goles: 10,
  Asistencias: 10,
  TarjetasAmarillas: 1,
  TarjetasRojas: 0,
  Puntos: 0
}; 

let jugadorarealmadridmisa = {
  Nombre: 'Misa',
  Equipo: 'Real Madrid',
  Goles: 0,
  Asistencias: 1,
  Paradas: 51,
  PorteriaImbatida: 2,
  TarjetasAmarillas: 1,
  TarjetasRojas: 0,
  Puntos: 0
}

//FOR PARA JUGADORA UNO

for (i = 0; i < jugadorarealmadridolgacarmona.Goles; i++) {

  jugadorarealmadridolgacarmona.Puntos = jugadorarealmadridolgacarmona.Puntos + 2;
  
  }
for (i = 0; i < jugadorarealmadridolgacarmona.Asistencias; i++) {

  jugadorarealmadridolgacarmona.Puntos = jugadorarealmadridolgacarmona.Puntos + 1;
  
  }
  
for (i = 0; i < jugadorarealmadridolgacarmona.TarjetasAmarillas; i++) {

  jugadorarealmadridolgacarmona.Puntos = jugadorarealmadridolgacarmona.Puntos - 1;
  
  }

for (i = 0; i < jugadorarealmadridolgacarmona.TarjetasAmarillas; i++) {

  jugadorarealmadridolgacarmona.Puntos = jugadorarealmadridolgacarmona.Puntos - 2;
  
  }

  //FOR PARA JUGADORA 2

  for (i = 0; i < jugadorafcbarcelonaalexiaputellas.Goles; i++) {

    jugadorafcbarcelonaalexiaputellas.Puntos = jugadorafcbarcelonaalexiaputellas.Puntos + 2;
  
  }
for (i = 0; i < jugadorafcbarcelonaalexiaputellas.Asistencias; i++) {

  jugadorafcbarcelonaalexiaputellas.Puntos = jugadorafcbarcelonaalexiaputellas.Puntos + 1;
  
  }
  
for (i = 0; i < jugadorafcbarcelonaalexiaputellas.TarjetasAmarillas; i++) {

  jugadorafcbarcelonaalexiaputellas.Puntos = jugadorafcbarcelonaalexiaputellas.Puntos - 1;
  
  }

for (i = 0; i < jugadorafcbarcelonaalexiaputellas.TarjetasRojas; i++) {

  jugadorafcbarcelonaalexiaputellas.Puntos = jugadorafcbarcelonaalexiaputellas.Puntos - 2;
  
  }

for (i = 0; i < 2; i++) {
 clientejugador.PuntosTotales =  jugadorafcbarcelonaalexiaputellas.Puntos +  jugadorarealmadridolgacarmona.Puntos

}
  
//FOR PARA JUGADORA 3

for (i = 0; i < jugadorrealmadridviniciusjunior.Goles; i++) {

  jugadorrealmadridviniciusjunior.Puntos = jugadorrealmadridviniciusjunior.Puntos + 2;

}
for (i = 0; i < jugadorrealmadridviniciusjunior.Asistencias; i++) {

  jugadorrealmadridviniciusjunior.Puntos = jugadorrealmadridviniciusjunior.Puntos + 1;

}

for (i = 0; i < jugadorrealmadridviniciusjunior.TarjetasAmarillas; i++) {

  jugadorrealmadridviniciusjunior.Puntos = jugadorrealmadridviniciusjunior.Puntos - 1;

}

for (i = 0; i < jugadorrealmadridviniciusjunior.TarjetasRojas; i++) {

  jugadorrealmadridviniciusjunior.Puntos = jugadorrealmadridviniciusjunior.Puntos - 2;

}


//FOR PARA PORTERO
 
//FOR PARA JUGADORA 3

for (i = 0; i < jugadorarealmadridmisa.Goles; i++) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos + 2;

}
for (i = 0; i < jugadorarealmadridmisa.Asistencias; i++) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos + 1;

}

for (i = 0; i < jugadorarealmadridmisa.TarjetasAmarillas; i++) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos - 1;

}

for (i = 0; i < jugadorarealmadridmisa.TarjetasRojas; i++) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos - 2;
}

for (i = 0; i < jugadorarealmadridmisa.PorteriaImbatida; i++) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos + 2; 
}

let jugadoraparadas = (jugadorarealmadridmisa.Paradas / 2);
console.log(jugadoraparadas);

if ((jugadorarealmadridmisa.Paradas % 2) === 0) {

  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos + jugadoraparadas; 
}

 if ((jugadorarealmadridmisa.Paradas % 2) != 0) {
  let jugadoraparadasimpares = jugadoraparadas - 1.5;
  jugadorarealmadridmisa.Puntos = jugadorarealmadridmisa.Puntos + jugadoraparadasimpares; 
}



//SUMA DE PUNTOS CLIENTE

for (i = 0; i < 2; i++) {
  clientejugador.PuntosTotales =  jugadorafcbarcelonaalexiaputellas.Puntos +  jugadorarealmadridolgacarmona.Puntos + jugadorrealmadridviniciusjunior.Puntos + jugadorarealmadridmisa.Puntos;
  }

//EMPIEZA EL CODIGO QUE PASAMOS AL FICHERO APP.JS
    return (

      <div id="container">
<br/>
      <div>El jugador {clientejugador.Nombre} acumula un total de {clientejugador.PuntosTotales} <br/><br/>
        <div class="campo"> <br/>
          <div class="delanteroscampo"> 
          <div class="cartajugador"><div> {jugadorarealmadridolgacarmona.Nombre}  </div> <div>{jugadorarealmadridolgacarmona.Equipo}</div> <div>  {jugadorarealmadridolgacarmona.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorafcbarcelonaalexiaputellas.Nombre}  </div> <div>{jugadorafcbarcelonaalexiaputellas.Equipo}</div> <div>  {jugadorafcbarcelonaalexiaputellas.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorrealmadridviniciusjunior.Nombre}  </div> <div>{jugadorrealmadridviniciusjunior.Equipo}</div> <div>  {jugadorrealmadridviniciusjunior.Puntos} </div></div>
          </div> <br/>
          <div class="mediocampistascampo">
          <div class="cartajugador"><div> {jugadorarealmadridolgacarmona.Nombre}  </div> <div>{jugadorarealmadridolgacarmona.Equipo}</div> <div>  {jugadorarealmadridolgacarmona.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorafcbarcelonaalexiaputellas.Nombre}  </div> <div>{jugadorafcbarcelonaalexiaputellas.Equipo}</div> <div>  {jugadorafcbarcelonaalexiaputellas.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorrealmadridviniciusjunior.Nombre}  </div> <div>{jugadorrealmadridviniciusjunior.Equipo}</div> <div>  {jugadorrealmadridviniciusjunior.Puntos} </div></div>  
         </div> <br/>
         <div class="defensascampo">
          <div class="cartajugador"><div> {jugadorarealmadridolgacarmona.Nombre}  </div> <div>{jugadorarealmadridolgacarmona.Equipo}</div> <div>  {jugadorarealmadridolgacarmona.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorafcbarcelonaalexiaputellas.Nombre}  </div> <div>{jugadorafcbarcelonaalexiaputellas.Equipo}</div> <div>  {jugadorafcbarcelonaalexiaputellas.Puntos} </div></div>
          <div class="cartajugador"> <div> {jugadorrealmadridviniciusjunior.Nombre}  </div> <div>{jugadorrealmadridviniciusjunior.Equipo}</div> <div>  {jugadorrealmadridviniciusjunior.Puntos} </div></div>  
          <div class="cartajugador"> <div> {jugadorrealmadridviniciusjunior.Nombre}  </div> <div>{jugadorrealmadridviniciusjunior.Equipo}</div> <div>  {jugadorrealmadridviniciusjunior.Puntos} </div></div>  
         </div> <br/>
         <div class="porterocampo">
          <div class="cartajugador"><div> {jugadorarealmadridmisa.Nombre}  </div> <div>{jugadorarealmadridmisa.Equipo}</div> <div>  {jugadorarealmadridmisa.Puntos} </div></div>
         </div>     
        </div>
        </div> 
        </div>
      );
}

  
export default Header;