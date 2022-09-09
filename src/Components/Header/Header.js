import '../Home/Home';
import { useNavigate } from 'react-router-dom';

function Header() {


    const navigate = useNavigate();

   
    const GoToHome = () => {
      navigate('/', {
          replace: true
      });
  }

  const GoToJugadoresLesionados = () => {
    navigate('/jugadoreslesionados', {
        replace: true
});

  }

//EMPIEZA EL CODIGO QUE PASAMOS AL FICHERO APP.JS
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" onClick={GoToHome}>Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" onClick={GoToJugadoresLesionados}>Jugadores Lesionados</a>
    </div>
  </div>
</nav>
      );
}

  
export default Header;