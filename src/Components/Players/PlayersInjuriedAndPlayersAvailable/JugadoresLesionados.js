import { useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';

function JugadoresLesionados() {

  const navigate = useNavigate();

  const GoToHome = () => {
      navigate('/', {
          replace: true
      });
  }


let i = 0;

let jugadorafcbarcelonaalexiaputellas = {
    Nombre: 'Alexia Putellas',
    Equipo: 'FC Barcelona',
    Goles: 18,
    Asistencias: 5,
    PorteriaImbatida: 2,
    TarjetasAmarillas: 3,
    TarjetasRojas: 0,
    Puntos: 0
}; 

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

  jugadorafcbarcelonaalexiaputellas.jugadorafcbarcelonaalexiaputellas = jugadorafcbarcelonaalexiaputellas.Puntos - 2;
  
  }
  
//EMPIEZA EL CODIGO QUE PASAMOS AL FICHERO DE LA JUGADORA
    return (

      <div id="container">
       <Header/>
      <div > <div class="campo">
    
      <h1>JUGADORES LESIONADOS</h1>
        <div class="estadisticasjugador"> <div> {jugadorafcbarcelonaalexiaputellas.Nombre}  </div> <br/>
        <div>{jugadorafcbarcelonaalexiaputellas.Equipo}</div> <br/>
        <div> Goles: {jugadorafcbarcelonaalexiaputellas.Goles} </div> <br/>
        <div> Asistencias: {jugadorafcbarcelonaalexiaputellas.Asistencias} </div> <br/>
        <div> Porterias Imbatidas: {jugadorafcbarcelonaalexiaputellas.PorteriaImbatida} </div> <br/>
        <div> TarjetasAmarillas: {jugadorafcbarcelonaalexiaputellas.TarjetasAmarillas} </div> <br/>
        <div> TarjetasRojas: {jugadorafcbarcelonaalexiaputellas.TarjetasRojas} </div> <br/>
        <div> Puntos: {jugadorafcbarcelonaalexiaputellas.Puntos} </div> <br/>
        </div>
        
        </div>
        </div>
     </div>
      );
}

export default JugadoresLesionados;