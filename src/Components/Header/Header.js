
function Header() {
let i = 0;
let jugadora1 = {
        Nombre: 'Manuela López',
        Equipo: 'Real Madrid',
        Goles: 8,
        Asistencias: 3,
        TarjetasAmarillas: 2,
        TarjetasRojas: 1,
        Puntos: 0
}; 
let jugadora2 = {
    Nombre: 'Alexia Putellas',
    Equipo: 'FC Barcelona',
    Goles: 18,
    Asistencias: 5,
    TarjetasAmarillas: 3,
    TarjetasRojas: 0,
    Puntos: 0
}; 

//FOR PARA JUGADORA UNO

for (i = 0; i < jugadora1.Goles; i++) {

    jugadora1.Puntos = jugadora1.Puntos + 2;
  
  }
for (i = 0; i < jugadora1.Asistencias; i++) {

    jugadora1.Puntos = jugadora1.Puntos + 1;
  
  }
  
for (i = 0; i < jugadora1.TarjetasAmarillas; i++) {

    jugadora1.Puntos = jugadora1.Puntos - 1;
  
  }

for (i = 0; i < jugadora1.TarjetasAmarillas; i++) {

    jugadora1.Puntos = jugadora1.Puntos - 2;
  
  }

  //FOR PARA JUGADORA 2

  for (i = 0; i < jugadora2.Goles; i++) {

    jugadora2.Puntos = jugadora2.Puntos + 2;
  
  }
for (i = 0; i < jugadora2.Asistencias; i++) {

    jugadora2.Puntos = jugadora2.Puntos + 1;
  
  }
  
for (i = 0; i < jugadora2.TarjetasAmarillas; i++) {

    jugadora2.Puntos = jugadora2.Puntos - 1;
  
  }

for (i = 0; i < jugadora2.TarjetasRojas; i++) {

    jugadora2.Puntos = jugadora2.Puntos - 2;
  
  }

    return (
        <div className="Header">       
          <h1>La jugadora {jugadora1.Nombre} del {jugadora1.Equipo} tiene un total de {jugadora1.Puntos} puntos</h1>
          <h1>La jugadora {jugadora2.Nombre} del {jugadora2.Equipo} tiene un total de {jugadora2.Puntos} puntos</h1>
        </div>
      );
}

  
export default Header;