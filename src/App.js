import logo from './logo.svg';
import './App.css';
import Tarjeta from './components/tarjeta';
import imagenPerfil from './images/foto1.jpg';

function App() {
  const redes = [
    { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/paologamarra10/', icono: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
    { nombre: 'GitHub', url: 'https://github.com/paolog10', icono: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' }
  ];

  return (
    <div className="App">
      <Tarjeta
        imagen={imagenPerfil} //pasarle como prop
        nombre="Paolo Gamarra"
        titulo="Desarrollador SQL, Web con React"
        telefono="3564 661340"
        email="paologamarra10@gmail.com"
        direccion="San Francisco, Córdoba, Argentina"
        redes={redes}
      />
    </div>
  );
}

export default App;
