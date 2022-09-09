import { Routes, Route, BrowserRouter } from 'react-router-dom';

import AlexiaPutellasScreen from '../Components/Players/Alexiaputellas';
import Home from '../Components/Home/Home';
import PlayersInjuriedScreen from '../Components/Players/PlayersInjuriedAndPlayersAvailable/JugadoresLesionados';

//Los routers son el mecanísmo del código que irá haciendo el cambio de los componentes, la redirección de los path por decirlo de alguna manera.

export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/alexiaputellas" element={<AlexiaPutellasScreen />} />
                <Route path="/jugadoreslesionados" element={<PlayersInjuriedScreen />} />
                
            </Routes>
        </BrowserRouter>
    )
}