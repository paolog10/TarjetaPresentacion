import logo from './logo.svg';
import './App.css';
import Tarjeta from './components/tarjeta';
import imagenPerfil from './images/foto1.jpg'

function App() {
  return (
    <div className="App">
      <Tarjeta
        imagen={imagenPerfil} //pasarle como prop
        nombre="Paolo Gamarra"
        titulo="Desarrollador SQL"
        telefono="3564 661340"
        email="paologamarra10@gmail.com"
        direccion="San Francisco, Córdoba, Argentina"
      />
    </div>
  );
}

export default App;
