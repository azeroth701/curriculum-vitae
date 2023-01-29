import "./App.css";
import gek from "./assets/img/azer.jpg";
import Titulo from "./componets/titulo";
import Contacto from "./componets/contacto";

function App() {
  return (
    <div class max-w-screen-md>
      <Titulo></Titulo>
      
      <img class="lg:w-16 md:w-32 lg:w-48 sm:invisible" src={gek}/>
      
      <Contacto></Contacto>
    </div>
  );
}

export default App;
