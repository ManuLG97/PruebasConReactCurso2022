import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer.js';
import Header from './Components/Home/Home.js';
import { AppRouter } from './routers/AppRouter';

function App() {


  
  return (
  //   <div className="App">
  //     <header className="App-header">
  //     <Header />
  //     </header>
  // <br/>
  //     <footer>
  //     <Footer />
  //     </footer>
  //   </div>

  <AppRouter/>

  );
}

export default App;
