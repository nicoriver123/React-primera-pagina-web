
import './App.css';
import Perro from './componentes/Perro';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>El mejor Perro del mundo</h1>
      <Perro
      imagen='perro'
      nombre='Firulais'
      purina='Dog Chaow'
      texto='Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.'
      
      />

<Perro
imagen='cachorro'
      nombre='Zeus'
      purina='cant dos'
      texto='“No importa lo que hagas o como le trates, el amor de los perros es infinito, su cariño es inmenso y su fidelidad es incondicional”.
“No hay compañero tan fiel como un perro, ni amigo más leal. ...
“No importa lo malo que haya sido tu día.'
      
      />
       <Perro
       imagen='firulais'
      nombre='Paco'
      purina='Dog Chaow 43'
      texto='El perro es un mamífero carnívoro de la familia de los cánidos, que constituye una subespecie del lobo. Su tamaño o talla, su forma y su pelaje son diversos según la raza. Posee un oído y un olfato muy desarrollados. Este último es su principal órgano sensorial.'
      
      />
    </div>
    </div>
  );
}

export default App;
